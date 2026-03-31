import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact & Free Quote',
  description:
    'Request a free fly screen quote for your Surrey home. We respond within 1 business day and can usually survey within the week.',
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '01234 567 890',
    href:  'tel:+441234567890',
    sub:   'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@surreyflyscreens.co.uk',
    href:  'mailto:info@surreyflyscreens.co.uk',
    sub:   'We respond within 1 business day',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Surrey, UK',
    href:  null,
    sub:   'We cover the full county',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Fri: 8am–6pm',
    href:  null,
    sub:   'Saturday appointments available',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-stone-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.18em] mb-3 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              Request a Free Quote
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Fill in the form below and we&apos;ll get back to you within one business day
              to arrange a free site survey at your convenience.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left sidebar — contact info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="left">
                <h2 className="font-serif text-2xl text-stone-900 mb-2">Contact Details</h2>
                <p className="text-stone-500 text-sm">
                  Prefer to talk? Give us a call or drop us an email — we&apos;re always happy to discuss your requirements.
                </p>
              </AnimatedSection>

              <div className="space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href, sub }, i) => (
                  <AnimatedSection key={label} delay={i * 0.08} direction="left">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-sm flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-green-700" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-stone-900 font-medium text-sm hover:text-green-700 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-stone-900 font-medium text-sm">{value}</p>
                        )}
                        <p className="text-stone-400 text-xs mt-0.5">{sub}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Promise box */}
              <AnimatedSection direction="left" delay={0.32}>
                <div className="bg-green-50 border border-green-100 rounded-sm p-5">
                  <h3 className="font-serif text-base text-green-900 mb-2">Our Promise to You</h3>
                  <ul className="space-y-1.5">
                    {[
                      'No pushy sales tactics',
                      'Honest recommendations',
                      'Transparent, fixed pricing',
                      'We tidy up after every job',
                    ].map((p) => (
                      <li key={p} className="text-green-800 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-green-600 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="card p-6 lg:p-8">
                <h2 className="font-serif text-2xl text-stone-900 mb-1">Quote Request Form</h2>
                <p className="text-stone-400 text-sm mb-7">
                  All fields marked <span className="text-red-500">*</span> are required.
                </p>
                <QuoteForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
