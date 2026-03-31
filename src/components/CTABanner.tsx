import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { img } from '@/lib/images'

interface CTABannerProps {
  variant?: 'dark' | 'image'
  heading?: string
  subheading?: string
}

export default function CTABanner({
  variant = 'image',
  heading = 'Ready for Insect-Free Living?',
  subheading = "Get a free, no-obligation quote. We'll come to you, measure up, and recommend the best solution — no pressure, no hard sell.",
}: CTABannerProps) {
  if (variant === 'dark') {
    return (
      <section className="py-16 lg:py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">{heading}</h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">{subheading}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get a Free Quote <ArrowRight size={17} />
              </Link>
              <a href="tel:+441234567890" className="btn-ghost-white text-base px-8 py-4">
                <Phone size={16} /> Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img.farmhouseGarden}
          alt="Premium Surrey property with fly screens"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.18em] mb-4 block">
            Get Started Today
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            {heading}
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 gap-2">
              Free Quote <ArrowRight size={17} />
            </Link>
            <a href="tel:+441234567890" className="btn-ghost-white text-base px-8 py-4 gap-2">
              <Phone size={16} /> 01234 567 890
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
