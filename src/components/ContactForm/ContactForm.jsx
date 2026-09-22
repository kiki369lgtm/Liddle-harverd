import { useState } from 'react'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { PHONE_NUMBERS } from '../../data/siteConfig'
import { submitContactMessage } from '../../services/contactService'

const INITIAL_VALUES = { name: '', email: '', phone: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter an email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [resultMode, setResultMode] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      const result = await submitContactMessage(values)
      setResultMode(result.mode)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function handleReset() {
    setValues(INITIAL_VALUES)
    setErrors({})
    setStatus('idle')
    setResultMode(null)
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-line bg-white p-8 text-center shadow-soft sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
          <Icon name="checkCircle" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Message sent</h3>
        <p className="mt-2 text-base leading-relaxed text-slate">
          Thanks for reaching out — we&apos;ll get back to you as soon as we can.
        </p>
        {resultMode === 'demo' && (
          <div className="mt-6 rounded-btn bg-brand-yellow-light p-4 text-left text-sm text-ink">
            <p className="font-semibold">This is a demo submission.</p>
            <p className="mt-1 text-slate">
              Our online contact system is still being connected. For anything urgent, please call{' '}
              <a href={`tel:${PHONE_NUMBERS[0].replace(/\s+/g, '')}`} className="font-semibold text-brand-green">
                {PHONE_NUMBERS[0]}
              </a>
              .
            </p>
          </div>
        )}
        <Button variant="outline" className="mt-6" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" value={values.name} onChange={handleChange} error={errors.name} autoComplete="name" />
        <FormField label="Phone (optional)" name="phone" type="tel" value={values.phone} onChange={handleChange} autoComplete="tel" />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          className="sm:col-span-2"
        />
        <FormField
          as="textarea"
          label="Message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          className="sm:col-span-2"
        />
      </div>

      {status === 'error' && (
        <p className="mt-5 flex items-center gap-2 rounded-btn bg-brand-coral-light px-4 py-3 text-sm font-medium text-brand-coral-dark">
          <Icon name="alertCircle" className="h-4 w-4 shrink-0" />
          Something went wrong sending your message. Please try again or call us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="mt-7 w-full justify-center sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' && <Icon name="loader" className="h-4 w-4 shrink-0 animate-spin" />}
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
