import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import GalleryGrid from '@/components/GalleryGrid'
import CTABanner from '@/components/CTABanner'
import { img } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our recent fly screen installations across Surrey — windows, doors, bi-fold screens, and more.',
}

const allImages = [
  // Landscape/wide first for visual rhythm
  { src: img.heroExterior,    alt: 'Custom fly screens on dark timber-clad Surrey home', span: 'wide' as const },
  { src: img.screenMesh1,     alt: 'Premium fly screen mesh — retractable window screen', span: 'tall' as const },
  { src: img.exteriorWindows, alt: 'Multiple fly screens installed across exterior windows' },
  { src: img.bedroomBalcony1, alt: 'French door fly screens open to rural Surrey views' },
  { src: img.doorDetail,      alt: 'Door fly screen frame with brush seal — close-up detail', span: 'tall' as const },
  { src: img.farmhousePatio,  alt: 'Bi-fold door fly screens on Cotswold stone farmhouse', span: 'wide' as const },
  { src: img.bedroomBalcony2, alt: 'Master bedroom with fly-screened balcony doors, countryside beyond' },
  { src: img.bedroomBalcony3, alt: 'Wide bedroom view — fly screened bi-fold doors to terrace' },
  { src: img.screenMesh2,     alt: 'Retractable fly screen mesh, green landscape visible through', span: 'tall' as const },
  { src: img.farmhouseGarden, alt: 'Stone farmhouse from garden — fly screens on bifold and sliding doors' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-stone-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.18em] mb-3 block">
              Our Work
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              Installation Gallery
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              A selection of recent projects across Surrey — from period cottages
              to contemporary new builds.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={allImages} />
          <AnimatedSection className="text-center mt-10">
            <p className="text-stone-400 text-sm">
              All photos are from real installations across Surrey.
              Click any image to view full size.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        heading="Like What You See?"
        subheading="We can achieve the same results at your property. Get in touch for a free quote and site survey."
      />
    </>
  )
}
