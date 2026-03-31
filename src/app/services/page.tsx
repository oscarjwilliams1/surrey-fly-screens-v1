import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CTABanner from '@/components/CTABanner'
import { img } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Window fly screens, door fly screens, bi-fold door screens, and retractable systems. Bespoke fly screen solutions for Surrey homes.',
}

const services = [
  {
    id:     'window-screens',
    title:  'Window Fly Screens',
    tagline: 'Precision-fitted for every window type',
    desc:   "We manufacture and install bespoke fly screens for casement, sash, tilt-and-turn, and fixed windows. Each screen is measured and made to order, ensuring a perfect fit and a finish that complements your frames.",
    img:    img.exteriorWindows,
    imgAlt: 'Fly screens installed on windows of a dark-clad property',
    benefits: [
      'Made-to-measure for a perfect fit',
      'Available in white, black, grey, or custom RAL colours',
      'Stainless steel or fibreglass mesh options',
      'Removable for easy cleaning',
      'No permanent fixings required for most installations',
    ],
    imgRight: false,
  },
  {
    id:     'door-screens',
    title:  'Door Fly Screens',
    tagline: 'Keep back doors and French doors open freely',
    desc:   "Our door screens are built for daily use — robust aluminium frames, smooth-operating hinges, and a magnetic closure that snaps shut behind you. Available as single or double door systems.",
    img:    img.bedroomBalcony1,
    imgAlt: 'Fly screen door open to a balcony with countryside views',
    benefits: [
      'Hinged and sliding configurations',
      'Magnetic auto-close on all hinged models',
      'Fits standard and non-standard door openings',
      'Pet-resistant mesh available',
      'Integrated with your existing door frame',
    ],
    imgRight: true,
  },
  {
    id:     'bifold-screens',
    title:  'Bi-Fold Door Screens',
    tagline: 'Large openings, no compromise',
    desc:   "Designed specifically for bi-fold and large sliding door systems — our pleated screens stack neatly to one side when open, and deploy effortlessly across the full width of your opening. No more choosing between ventilation and insects.",
    img:    img.farmhousePatio,
    imgAlt: 'Bi-fold door fly screens on a stone farmhouse patio',
    benefits: [
      'Full-width pleated screen system',
      'Handles fold-back doors of any width',
      'Smooth side-pull or centre-pull operation',
      'Compatible with all major bi-fold brands',
      'Discreet housing cassette blends with your frames',
    ],
    imgRight: false,
  },
  {
    id:     'retractable',
    title:  'Retractable Screens',
    tagline: 'Roll away when the season ends',
    desc:   "Spring-loaded retractable screens for windows and single doors. They wind neatly into a slim housing when not in use — virtually invisible, and a popular choice for heritage properties where permanent screens aren't appropriate.",
    img:    img.screenMesh2,
    imgAlt: 'Close-up of retractable fly screen mesh',
    benefits: [
      'Spring-loaded roll-up mechanism',
      'Ultra-slim 23mm housing cassette',
      'Suitable for windows and doors',
      'Available in multiple mesh colours',
      'Ideal for heritage and listed properties',
    ],
    imgRight: true,
  },
  {
    id:     'custom',
    title:  'Custom & Commercial',
    tagline: 'Non-standard openings, special requirements',
    desc:   "Unusual sizes, angled frames, roof lights, or commercial properties — we handle them all. Our survey team will assess your openings and design a bespoke solution that works perfectly.",
    img:    img.doorDetail,
    imgAlt: 'Custom fly screen door frame and brush seal detail',
    benefits: [
      'Unlimited size range',
      'Angled and irregular openings',
      'Commercial and hospitality properties',
      'Bulk installation discounts',
      'Maintenance contracts available',
    ],
    imgRight: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-stone-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.18em] mb-3 block">
              What We Offer
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              Our Services
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Bespoke fly screen solutions for every type of opening — supplied
              and installed by our local Surrey team.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Services list */}
      <div className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {services.map(({ id, title, tagline, desc, img, imgAlt, benefits, imgRight }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${imgRight ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Image */}
                <AnimatedSection direction={imgRight ? 'right' : 'left'}>
                  <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-sm overflow-hidden">
                    <Image
                      src={img}
                      alt={imgAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </AnimatedSection>

                {/* Text */}
                <AnimatedSection direction={imgRight ? 'left' : 'right'}>
                  <span className="section-label">{tagline}</span>
                  <h2 className="section-heading mt-2 mb-4">{title}</h2>
                  <p className="text-stone-500 text-base leading-relaxed mb-7">{desc}</p>
                  <ul className="space-y-3 mb-8">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-stone-700 text-sm">
                        <CheckCircle2 size={16} className="text-green-700 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary gap-2">
                    Get a Quote for This <ArrowRight size={16} />
                  </Link>
                </AnimatedSection>
              </div>
            </section>
          ))}
        </div>
      </div>

      <CTABanner variant="dark" heading="Not sure which type you need?" subheading="Tell us about your property and we'll recommend the best solution. Free survey, no obligation." />
    </>
  )
}
