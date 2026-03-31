import { NextRequest, NextResponse } from 'next/server'
import { quoteFormSchema, installationTypeLabels } from '@/lib/validation'
import { rateLimit } from '@/lib/rateLimit'
import fs from 'fs'
import path from 'path'

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

export async function POST(req: NextRequest) {
  // Rate limiting
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

  // Parse body
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  // Validate & sanitise
  const result = quoteFormSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { message: 'Validation failed.', errors: result.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { honeypot, ...data } = result.data

  // Bot check
  if (honeypot) {
    // Silently accept to not reveal bot detection
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const submission = {
    ...data,
    installationTypeLabel: installationTypeLabels[data.installationType] ?? data.installationType,
    submittedAt: new Date().toISOString(),
    ip,
  }

  // Persist to JSON file (no DB required — easy to replace with DB/email later)
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
    console.error('[quote] Failed to persist submission:', err)
    // Don't surface file errors to the client — still return success
  }

  // Console log for development visibility
  if (process.env.NODE_ENV === 'development') {
    console.log('[quote] New submission:', submission)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 })
}
