import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const serviceLinks = [
  { href: '/services#window-screens', label: 'Window Fly Screens' },
  { href: '/services#door-screens',   label: 'Door Fly Screens' },
  { href: '/services#bifold-screens', label: 'Bi-Fold Door Screens' },
  { href: '/services#retractable',    label: 'Retractable Screens' },
  { href: '/services#custom',         label: 'Custom Solutions' },
]

const areas = [
  'Guildford', 'Woking', 'Reigate', 'Dorking',
  'Epsom', 'Leatherhead', 'Farnham', 'Godalming',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-green-800 rounded-sm flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="16" height="16" rx="1" stroke="white" strokeWidth="1.5"/>
                  <path d="M1 5h16M1 9h16M1 13h16M5 1v16M9 1v16M13 1v16" stroke="white" strokeWidth="0.75" opacity="0.7"/>
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-serif font-bold text-base text-white">Surrey</span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-green-400">
                  Fly Screens
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Expert fly screen installation across Surrey and surrounding areas.
              Bespoke solutions for every home.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-sm border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-sm border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-stone-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-5">
              Areas Covered
            </h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-stone-400 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-start gap-3 text-stone-400 hover:text-white text-sm transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-green-500 group-hover:text-green-400" />
                  01234 567 890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@surreyflyscreens.co.uk"
                  className="flex items-start gap-3 text-stone-400 hover:text-white text-sm transition-colors group"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-green-500 group-hover:text-green-400" />
                  info@surreyflyscreens.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-green-500" />
                  <span>Surrey, UK<br/>Serving the entire county</span>
                </div>
              </li>
            </ul>
            <Link href="/contact" className="mt-6 btn-primary text-sm px-5 py-2.5 inline-flex">
              Free Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-stone-500 text-xs">
            © {year} Surrey Fly Screens. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-stone-500 hover:text-stone-300 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-stone-500 hover:text-stone-300 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
