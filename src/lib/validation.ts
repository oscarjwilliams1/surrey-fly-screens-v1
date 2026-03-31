import { z } from 'zod'

const ukPostcodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i
const ukPhoneRegex = /^(\+44|0)[0-9\s\-()]{9,14}$/

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s'\-]+$/, 'Name contains invalid characters')
    .transform((v) => v.trim()),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long')
    .toLowerCase()
    .transform((v) => v.trim()),

  phone: z
    .string()
    .regex(ukPhoneRegex, 'Please enter a valid UK phone number')
    .transform((v) => v.trim()),

  postcode: z
    .string()
    .regex(ukPostcodeRegex, 'Please enter a valid UK postcode')
    .transform((v) => v.trim().toUpperCase()),

  installationType: z.enum(
    ['window-screens', 'door-screens', 'bifold-screens', 'retractable-screens', 'custom', 'not-sure'],
    { errorMap: () => ({ message: 'Please select an installation type' }) }
  ),

  message: z
    .string()
    .max(1000, 'Message must be under 1000 characters')
    .optional()
    .transform((v) => v?.trim() ?? ''),

  honeypot: z.string().max(0, 'Bot detected').optional(),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

export const installationTypeLabels: Record<string, string> = {
  'window-screens':    'Window Fly Screens',
  'door-screens':      'Door Fly Screens',
  'bifold-screens':    'Bi-Fold Door Screens',
  'retractable-screens': 'Retractable Screens',
  'custom':            'Custom / Commercial',
  'not-sure':          'Not Sure Yet',
}
