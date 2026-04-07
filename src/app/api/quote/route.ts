import { NextRequest, NextResponse } from 'next/server'
import { quoteFormSchema, installationTypeLabels } from '@/lib/validation'
import { rateLimit } from '@/lib/rateLimit'
import fs from 'fs'
import path from 'path'

// NOTE: x-forwarded-for is safe to trust on Vercel — Vercel's edge sets it.
// On other hosts, validate that the proxy is trusted before trusting this header.
function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    const ip = forwarded.split(',')[0]?.trim()
    // Basic IP validation — reject obviously spoofed values
    if (ip && /^[\d.a-fA-F:]+$/.test(ip)) return ip
  }
  return req.headers.get('x-real-ip') || 'unknown'
}

export async function POST(req: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  // NOTE: In-memory limiting works per-instance. On Vercel serverless this
  // means separate cold-start instances each have their own counter.
  // For production-grade limiting, replace with Vercel KV or Upstash Redis.
  const ip = getClientIp(req)
  const limit = rateLimit(ip)

  if (!limit.allowed) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
          'X-RateLimit-Remaining': '0',
        },
      }
    )
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  // ── Validate & sanitise via Zod ────────────────────────────────────────────
  const result = quoteFormSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { message: 'Validation failed.', errors: result.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { honeypot, ...data } = result.data

  // ── Bot check ──────────────────────────────────────────────────────────────
  if (honeypot) {
    // Silently accept — never reveal bot detection to the caller
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const submission = {
    ...data,
    installationTypeLabel: installationTypeLabels[data.installationType] ?? data.installationType,
    submittedAt: new Date().toISOString(),
    // Store only a hashed/truncated IP — never log full IP in plaintext output
    ipPrefix: ip === 'unknown' ? 'unknown' : ip.split('.').slice(0, 3).join('.') + '.xxx',
  }

  // ── Persist to JSON file ───────────────────────────────────────────────────
  // NOTE: .data/ is gitignored and not web-accessible.
  // For a production deployment, replace with a proper database.
  let persistError = false
  try {
    const dataDir = path.join(process.cwd(), '.data')
    const filePath = path.join(dataDir, 'quotes.json')

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    let existing: unknown[] = []
    if (fs.existsSync(filePath)) {
      try {
        existing = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      } catch {
        existing = []
      }
    }

    existing.push(submission)
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8')
  } catch (err) {
    // Log error metadata only — no PII
    console.error('[quote] Persist failed:', (err as Error).message)
    persistError = true
  }

  if (persistError) {
    return NextResponse.json(
      { message: 'We could not save your request. Please call or email us directly.' },
      { status: 500 }
    )
  }

  // Log submission metadata only — never log PII to console
  console.info(`[quote] New submission — postcode: ${data.postcode}, type: ${data.installationType}`)

  return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 })
}
