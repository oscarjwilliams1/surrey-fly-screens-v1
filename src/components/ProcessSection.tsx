import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { img } from '@/lib/images'

const steps = [
  {
    number: '01',
    title:  'Request a Quote',
    desc:   "Fill in our short form or give us a call. We'll get back to you the same day.",
  },
  {
    number: '02',
    title:  'Free Site Survey',
    desc:   'We visit your property, measure all openings, and recommend the best solution for your home.',
  },
  {
    number: '03',
    title:  'Expert Installation',
    desc:   'Our fitters arrive on time, work cleanly, and leave your home exactly as they found it.',
  },
  {
    number: '04',
    title:  'Enjoy Your Home',
    desc:   'Open your windows and doors freely — fresh air in, insects out. Backed by our 5-year warranty.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image stack */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative h-[480px] lg:h-[580px]">
              {/* Main image */}
              <div className="absolute inset-0 rounded-sm overflow-hidden">
                <Image
                  src={img.bedroomBalcony2}
                  alt="Bedroom with fly screen doors open to countryside view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 w-48 h-48 rounded-sm overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={img.screenMesh1}
                  alt="Close-up of premium fly screen mesh"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-green-800 text-white rounded-sm px-4 py-3 shadow-lg">
                <p className="font-serif text-2xl font-bold leading-none">300+</p>
                <p className="text-xs text-green-200 mt-0.5">Homes in Surrey</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — steps */}
          <div>
            <AnimatedSection direction="right">
              <span className="section-label">How It Works</span>
              <h2 className="section-heading mt-3 mb-3">
                Simple Process,<br />Perfect Finish
              </h2>
              <p className="section-subheading mb-10">
                From first enquiry to finished install — we make it straightforward.
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              {steps.map(({ number, title, desc }, i) => (
                <AnimatedSection key={number} delay={i * 0.1} direction="right">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-sm bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                      <span className="font-serif text-green-700 font-bold text-sm">{number}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-stone-900 mb-1">{title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
