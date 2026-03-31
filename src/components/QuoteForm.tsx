'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import { quoteFormSchema, type QuoteFormData, installationTypeLabels } from '@/lib/validation'

const installationOptions = Object.entries(installationTypeLabels)

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'An unexpected error occurred.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-700" />
        </div>
        <h3 className="font-serif text-2xl text-stone-900 mb-3">Quote Request Received!</h3>
        <p className="text-stone-500 text-base max-w-sm mx-auto mb-6">
          Thank you — we&apos;ll be in touch within one business day to arrange your free site survey.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary text-sm"
        >
          Submit another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Row: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="input-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            className={`input-field ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="input-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900 000"
            className={`input-field ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Row: Email + Postcode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="input-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={`input-field ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="postcode" className="input-label">
            Postcode <span className="text-red-500">*</span>
          </label>
          <input
            id="postcode"
            type="text"
            autoComplete="postal-code"
            placeholder="GU1 4AQ"
            className={`input-field uppercase ${errors.postcode ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
            {...register('postcode')}
          />
          {errors.postcode && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.postcode.message}
            </p>
          )}
        </div>
      </div>

      {/* Installation type */}
      <div>
        <label htmlFor="installationType" className="input-label">
          Type of Installation <span className="text-red-500">*</span>
        </label>
        <select
          id="installationType"
          className={`input-field ${errors.installationType ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : ''}`}
          defaultValue=""
          {...register('installationType')}
        >
          <option value="" disabled>Select a service...</option>
          {installationOptions.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.installationType && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.installationType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="input-label">
          Additional Details <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your property, number of windows/doors, any specific requirements..."
          className={`input-field resize-none ${errors.message ? 'border-red-400' : ''}`}
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Global error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-sm p-4 text-sm text-red-700"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            {errorMsg || 'Something went wrong. Please try again or call us directly.'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full text-base py-4 gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending your request...
          </>
        ) : (
          <>
            <Send size={17} />
            Request Free Quote
          </>
        )}
      </button>

      <p className="text-center text-stone-400 text-xs">
        No obligation · We respond within 1 business day · No spam
      </p>
    </form>
  )
}
