import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Users, ThumbsUp, Leaf, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTABanner from '@/components/CTABanner'
import { img } from '@/lib/images'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Family-run fly screen specialists based in Surrey. 10+ years installing quality screens across the county — trusted by hundreds of homeowners.',
}

const values = [
  {
    icon: Users,
    title: 'Family Business',
    desc:  "We're a small, family-run team — not a national call centre. When you contact us, you speak to the people who'll be fitting your screens.",
  },
  {
    icon: ThumbsUp,
    title: 'Honest Advice',
    desc:  "We'll only recommend what you actually need. If a simple solution will do the job, we'll tell you. No upselling, no pressure.",
  },
  {
    icon: Leaf,
    title: 'Quality Materials',
    desc:  "We use only commercial-grade aluminium frames and corrosion-resistant mesh — the same materials used in high-end joinery. Built to last.",
  },
  {
    icon: Award,
    title: '5-Year Warranty',
    desc:  "Every installation comes with a 5-year workmanship warranty. If anything fails through normal use, we'll fix it — no questions asked.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-stone-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.18em] mb-3 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              About Surrey Fly Screens
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Local, experienced, and genuinely passionate about making your home
              more comfortable — without changing how it looks.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <AnimatedSection direction="left">
              <div className="relative h-[420px] lg:h-[540px] rounded-sm overflow-hidden">
                <Image
                  src={img.bedroomBalcony2}
                  alt="Premium Surrey home with fly-screened balcony doors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Stat card overlay */}
                <div className="absolute bottom-6 left-6 bg-white rounded-sm px-5 py-4 shadow-lg border border-stone-100">
                  <p className="font-serif text-3xl font-bold text-green-800">10+</p>
                  <p className="text-stone-500 text-sm">Years in Surrey</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading mt-2 mb-5">
                Surrey-based specialists.<br />Not a franchise.
              </h2>
              <div className="space-y-4 text-stone-500 text-base leading-relaxed">
                <p>
                  Surrey Fly Screens was founded over a decade ago by a local tradesman
                  who was frustrated with the lack of quality, affordable fly screen options
                  for homeowners in the county. What started as a one-man operation has grown
                  into a trusted local team — but we&apos;ve stayed deliberately small to
                  keep our standards high.
                </p>
                <p>
                  Every screen we install is measured and made to order. We don&apos;t work
                  from stock sizes, and we don&apos;t cut corners on materials. Our frames are
                  commercial-grade aluminium and our mesh is UV-stabilised and corrosion-resistant
                  — chosen to last in the British climate.
                </p>
                <p>
                  We&apos;ve installed screens in everything from Victorian terraces to
                  contemporary barn conversions. We understand how important it is that any
                  addition to your home looks right — and our team are trained to deliver
                  a finish that&apos;s clean, precise, and virtually invisible.
                </p>
              </div>
              <ul className="mt-7 space-y-3">
                {[
                  'Based in Surrey — we cover the whole county',
                  'No subcontractors — all work done by our own team',
                  'Full public liability insurance',
                  'Free, no-obligation surveys',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700 text-sm">
                    <CheckCircle2 size={16} className="text-green-700 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Our Principles</span>
            <h2 className="section-heading mt-3">Why Homeowners Choose Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="card p-6 h-full">
                  <div className="w-11 h-11 bg-green-50 border border-green-100 rounded-sm flex items-center justify-center mb-4">
                    <Icon size={22} className="text-green-700" />
                  </div>
                  <h3 className="font-serif text-lg text-stone-900 mb-2">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label">Coverage</span>
            <h2 className="section-heading mt-3 mb-5">We Cover All of Surrey</h2>
            <p className="section-subheading mx-auto mb-8">
              Our team operates across the full county — from Guildford and Woking
              in the north, to Reigate and Dorking in the south.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                'Guildford', 'Woking', 'Reigate', 'Dorking', 'Epsom',
                'Leatherhead', 'Farnham', 'Godalming', 'Haslemere', 'Cranleigh',
                'Caterham', 'Oxted', 'Weybridge', 'Esher', 'Cobham',
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 bg-green-50 text-green-800 text-sm rounded-sm border border-green-100"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-stone-400 text-sm">
              Not listed? <Link href="/contact" className="text-green-700 underline underline-offset-2 hover:text-green-800">Get in touch</Link> — we likely cover your area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
