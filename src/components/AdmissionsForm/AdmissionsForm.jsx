import { useState } from 'react'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { programs } from '../../data/programs'
import { PHONE_NUMBERS } from '../../data/siteConfig'
import { submitAdmissionsEnquiry } from '../../services/admissionsService'

const INITIAL_VALUES = {
  parentName: '',
  phone: '',
  email: '',
  childName: '',
  childAge: '',
  program: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+]?[\d\s-]{7,16}$/

function validate(values) {
  const errors = {}
  if (!values.parentName.trim()) errors.parentName = 'Please enter your name.'
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.'
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter an email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.childName.trim()) errors.childName = "Please enter your child's name."
  if (!values.childAge) {
    errors.childAge = "Please enter your child's age."
  } else if (Number(values.childAge) < 1 || Number(values.childAge) > 14) {
    errors.childAge = 'Please enter an age between 1 and 14.'
  }
  if (!values.program) errors.program = 'Please select a program.'
  return errors
}

export default function AdmissionsForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
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
      const result = await submitAdmissionsEnquiry(values)
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
        <h3 className="mt-5 text-xl font-semibold">Thank you for your enquiry</h3>
        <p className="mt-2 text-base leading-relaxed text-slate">
          We&apos;ve received your details and our admissions team will get back to you shortly.
        </p>

        {resultMode === 'demo' && (
          <div className="mt-6 rounded-btn bg-brand-yellow-light p-4 text-left text-sm text-ink">
            <p className="font-semibold">This is a demo submission.</p>
            <p className="mt-1 text-slate">
              Our online admissions system is still being connected. For immediate assistance, please call
              us directly at{' '}
              <a href={`tel:${PHONE_NUMBERS[0].replace(/\s+/g, '')}`} className="font-semibold text-brand-green">
                {PHONE_NUMBERS[0]}
              </a>
              .
            </p>
          </div>
        )}

        <Button variant="outline" className="mt-6" onClick={handleReset}>
          Send Another Enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          label="Parent / Guardian Name"
          name="parentName"
          value={values.parentName}
          onChange={handleChange}
          error={errors.parentName}
          autoComplete="name"
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
        />
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
          label="Child's Name"
          name="childName"
          value={values.childName}
          onChange={handleChange}
          error={errors.childName}
        />
        <FormField
          label="Child's Age"
          name="childAge"
          type="number"
          min="1"
          max="14"
          value={values.childAge}
          onChange={handleChange}
          error={errors.childAge}
        />
        <FormField
          as="select"
          label="Program Interested In"
          name="program"
          value={values.program}
          onChange={handleChange}
          error={errors.program}
          className="sm:col-span-2"
        >
          <option value="">Select a program</option>
          {programs.map((program) => (
            <option key={program.id} value={program.slug}>
              {program.title}
            </option>
          ))}
        </FormField>
        <FormField
          as="textarea"
          label="Message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="sm:col-span-2"
        />
      </div>

      {status === 'error' && (
        <p className="mt-5 flex items-center gap-2 rounded-btn bg-brand-coral-light px-4 py-3 text-sm font-medium text-brand-coral-dark">
          <Icon name="alertCircle" className="h-4 w-4 shrink-0" />
          Something went wrong sending your enquiry. Please try again or call us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="mt-7 w-full justify-center sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' && <Icon name="loader" className="h-4 w-4 shrink-0 animate-spin" />}
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
