import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTABanner from '@/components/CTABanner'
import AnimatedSection from '@/components/AnimatedSection'
import GalleryGrid from '@/components/GalleryGrid'
import { ArrowRight } from 'lucide-react'
import { img } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Surrey Fly Screens | Expert Fly Screen Installation Across Surrey',
  description:
    'Professional fly screen installation for windows, doors, and bi-fold openings across Surrey. Bespoke solutions, free quotes, 5-year warranty.',
}

const previewImages = [
  { src: img.heroExterior,    alt: 'Custom fly screens on dark-clad Surrey home', span: 'wide' as const },
  { src: img.screenMesh1,     alt: 'Premium fly screen mesh close-up', span: 'tall' as const },
  { src: img.bedroomBalcony1, alt: 'Fly screen doors open to Surrey countryside' },
  { src: img.farmhousePatio,  alt: 'Bi-fold fly screens on stone farmhouse' },
  { src: img.doorDetail,      alt: 'Door fly screen frame detail', span: 'tall' as const },
  { src: img.farmhouseGarden, alt: 'Surrey farmhouse with retractable fly screens', span: 'wide' as const },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />

      {/* Feature strip — full-width image with text overlay */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <Image
          src={img.bedroomBalcony3}
          alt="Spacious bedroom with open fly-screened balcony doors overlooking Surrey countryside"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatedSection className="max-w-md">
              <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.18em] mb-3 block">
                Designed for UK Homes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4 leading-tight">
                Open up. Let the outside in.
              </h2>
              <p className="text-stone-300 mb-6">
                Our screens are discreet, durable, and designed to complement
                any style of property — from Victorian terrace to modern barn conversion.
              </p>
              <Link href="/services" className="btn-ghost-white text-sm px-6 py-3 gap-2">
                See All Services <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Gallery preview */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="section-label">Our Work</span>
              <h2 className="section-heading mt-2">Recent Installations</h2>
            </div>
            <Link href="/gallery" className="btn-secondary text-sm shrink-0">
              View Full Gallery →
            </Link>
          </AnimatedSection>
          <GalleryGrid images={previewImages} preview />
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
