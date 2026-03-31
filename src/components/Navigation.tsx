'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { clsx } from 'clsx'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/gallery',   label: 'Gallery' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm border-b border-stone-200/80 shadow-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Surrey Fly Screens home">
            <div className={clsx(
              'w-8 h-8 rounded-sm flex items-center justify-center transition-colors',
              transparent ? 'bg-white/20 border border-white/40' : 'bg-green-800'
            )}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="16" height="16" rx="1" stroke="white" strokeWidth="1.5"/>
                <path d="M1 5h16M1 9h16M1 13h16M5 1v16M9 1v16M13 1v16" stroke="white" strokeWidth="0.75" opacity="0.7"/>
              </svg>
            </div>
            <div className="leading-none">
              <span className={clsx(
                'font-serif font-bold text-base transition-colors',
                transparent ? 'text-white' : 'text-stone-900'
              )}>
                Surrey
              </span>
              <span className={clsx(
                'block text-[10px] font-medium uppercase tracking-[0.15em] transition-colors',
                transparent ? 'text-white/70' : 'text-green-700'
              )}>
                Fly Screens
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={clsx(
                      'relative px-4 py-2 text-sm font-medium transition-colors rounded-sm',
                      active
                        ? transparent ? 'text-white' : 'text-green-800'
                        : transparent
                          ? 'text-white/75 hover:text-white'
                          : 'text-stone-600 hover:text-stone-900'
                    )}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className={clsx(
                          'absolute bottom-0 left-4 right-4 h-0.5 rounded-full',
                          transparent ? 'bg-white' : 'bg-green-700'
                        )}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+441234567890"
              className={clsx(
                'flex items-center gap-1.5 text-sm font-medium transition-colors',
                transparent ? 'text-white/80 hover:text-white' : 'text-stone-600 hover:text-green-800'
              )}
            >
              <Phone size={14} />
              01234 567 890
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className={clsx(
              'lg:hidden p-2 rounded-sm transition-colors',
              transparent ? 'text-white hover:bg-white/10' : 'text-stone-700 hover:bg-stone-100'
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-stone-200"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'block px-4 py-3 rounded-sm text-sm font-medium transition-colors',
                    pathname === href
                      ? 'bg-green-50 text-green-800'
                      : 'text-stone-700 hover:bg-stone-50'
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 border-t border-stone-100 mt-3 flex flex-col gap-2">
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-stone-600"
                >
                  <Phone size={14} />
                  01234 567 890
                </a>
                <Link href="/contact" className="btn-primary text-center">
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
