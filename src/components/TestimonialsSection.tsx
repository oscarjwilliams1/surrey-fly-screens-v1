'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const testimonials = [
  {
    name:     'Sarah M.',
    location: 'Guildford',
    rating:   5,
    text:     "We had screens fitted across all our bi-fold doors. The quality is exceptional — you genuinely forget they're there. The fitters were professional, tidy, and finished well ahead of schedule. Couldn't recommend more highly.",
    date:     'June 2024',
  },
  {
    name:     'James T.',
    location: 'Reigate',
    rating:   5,
    text:     "After years of battling flies through our kitchen door, these screens have completely transformed our summer. The team was incredibly helpful in recommending the right solution and the installation was faultless.",
    date:     'August 2024',
  },
  {
    name:     'Caroline & David W.',
    location: 'Dorking',
    rating:   5,
    text:     "Had window screens fitted throughout our Victorian terrace. The team found solutions for some tricky sash windows that other companies said were impossible. Excellent work, very fair pricing.",
    date:     'May 2024',
  },
  {
    name:     'Robert H.',
    location: 'Woking',
    rating:   5,
    text:     "Surrey Fly Screens fitted retractable screens to our whole ground floor. The service from first enquiry to install was seamless. They even came back to tweak one screen at no extra charge. Absolute five stars.",
    date:     'September 2024',
  },
]

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  const t = testimonials[idx]

  return (
    <section className="py-20 lg:py-28 bg-green-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-green-300 text-xs font-semibold uppercase tracking-[0.18em]">
            Customer Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-3">
            Trusted by Surrey Homeowners
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/60 text-sm ml-2">5.0 average · 47 reviews</span>
          </div>
        </AnimatedSection>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-sm p-8 lg:p-10 text-center"
            >
              <Quote size={32} className="text-green-400/60 mx-auto mb-6" />
              <p className="text-white text-lg sm:text-xl leading-relaxed font-light mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-green-300 text-sm mt-0.5">{t.location} · {t.date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`transition-all duration-200 rounded-full ${
                    i === idx ? 'w-6 h-2 bg-green-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
