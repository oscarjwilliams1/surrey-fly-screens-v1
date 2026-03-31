import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Surrey Fly Screens handles your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="font-serif text-4xl text-stone-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-4 text-sm leading-relaxed">
            <p><strong>Last updated:</strong> January 2025</p>
            <p>
              Surrey Fly Screens (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information.
              This policy explains how we collect and use your data when you use our website or contact us for a quote.
            </p>
            <h2 className="font-serif text-xl text-stone-900 mt-6">What we collect</h2>
            <p>
              When you submit a quote request, we collect your name, email address, phone number, postcode,
              and any details you provide in your message. This information is used solely to respond to your
              enquiry and arrange a site survey if you wish to proceed.
            </p>
            <h2 className="font-serif text-xl text-stone-900 mt-6">How we use your data</h2>
            <p>
              We use your contact details to respond to your enquiry and, if you become a customer, to
              manage your installation. We do not sell or share your data with third parties for marketing purposes.
            </p>
            <h2 className="font-serif text-xl text-stone-900 mt-6">Contact</h2>
            <p>
              If you have any questions about this policy, please contact us at{' '}
              <a href="mailto:info@surreyflyscreens.co.uk" className="text-green-700 underline">
                info@surreyflyscreens.co.uk
              </a>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
