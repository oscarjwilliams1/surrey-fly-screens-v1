import { ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const stats = [
  { icon: ShieldCheck, label: '10+ Years Experience', sub: 'Trusted local specialists' },
  { icon: Clock,       label: 'Fast Installation',    sub: 'Usually within 5–7 days' },
  { icon: MapPin,      label: 'All Across Surrey',    sub: 'Fully local, no call centres' },
  { icon: Wrench,      label: 'Quality Guaranteed',   sub: '5-year workmanship warranty' },
]

export default function TrustBar() {
  return (
    <section className="bg-stone-950 py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ icon: Icon, label, sub }, i) => (
            <AnimatedSection key={label} delay={i * 0.08} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-green-800/30 border border-green-700/30 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                <p className="text-stone-400 text-xs mt-0.5">{sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
