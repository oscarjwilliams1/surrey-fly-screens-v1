import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { img } from '@/lib/images'

const services = [
  {
    id:    'window-screens',
    title: 'Window Fly Screens',
    desc:  'Precision-fitted screens for casement, sash, and tilt-and-turn windows. Invisible from outside, effortless to operate.',
    img:   img.exteriorWindows,
    href:  '/services#window-screens',
  },
  {
    id:    'door-screens',
    title: 'Door Fly Screens',
    desc:  'Hinged and sliding fly screen doors for back doors, French doors, and front entrances. Robust frames, quality mesh.',
    img:   img.bedroomBalcony1,
    href:  '/services#door-screens',
  },
  {
    id:    'bifold-screens',
    title: 'Bi-Fold Door Screens',
    desc:  'Purpose-built retractable screens that disappear when not needed — perfect for large bi-fold and sliding door openings.',
    img:   img.farmhousePatio,
    href:  '/services#bifold-screens',
  },
  {
    id:    'retractable',
    title: 'Retractable Screens',
    desc:  'Spring-loaded and pleated screens for windows and doors. Roll away neatly when the season ends. Low-maintenance and durable.',
    img:   img.screenMesh1,
    href:  '/services#retractable',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14 lg:mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading mt-3 mb-4">
            Screens for Every Opening
          </h2>
          <p className="section-subheading mx-auto">
            From a single window to a whole property — we supply and install fly screens
            that look great and last for years.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {services.map(({ id, title, desc, img, href }, i) => (
            <AnimatedSection key={id} delay={i * 0.1}>
              <Link
                href={href}
                className="group block card overflow-hidden h-full hover:-translate-y-0.5 transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Text */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-stone-900 mb-2 leading-snug">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-green-700 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
