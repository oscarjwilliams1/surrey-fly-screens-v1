'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryImage {
  src:  string
  alt:  string
  span?: 'tall' | 'wide' | 'normal'
}

interface GalleryGridProps {
  images: GalleryImage[]
  preview?: boolean  // show only 6 images in preview mode
}

export default function GalleryGrid({ images, preview = false }: GalleryGridProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const displayed = preview ? images.slice(0, 6) : images
  const count = displayed.length

  const openLightbox = (i: number) => setLightboxIdx(i)
  const closeLightbox = () => setLightboxIdx(null)
  const prev = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + count) % count))
  const next = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % count))

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        {displayed.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            onClick={() => openLightbox(i)}
            className={`group relative overflow-hidden rounded-sm bg-stone-100 cursor-pointer text-left ${
              img.span === 'tall'  ? 'row-span-2' :
              img.span === 'wide'  ? 'col-span-2' : ''
            }`}
            style={{ aspectRatio: img.span === 'tall' ? '3/4' : img.span === 'wide' ? '16/7' : '4/3' }}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={24}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg"
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={displayed[lightboxIdx].src}
                    alt={displayed[lightboxIdx].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 text-center pb-3">
                <p className="text-white/60 text-sm">{displayed[lightboxIdx].alt}</p>
              </div>
            </motion.div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Prev / Next */}
            {count > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
              {lightboxIdx + 1} / {count}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
