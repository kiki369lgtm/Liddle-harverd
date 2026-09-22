const baseFieldClasses =
  'w-full rounded-btn border bg-white px-4 py-3 text-base text-ink placeholder:text-slate/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green/30'

export default function FormField({
  as = 'input',
  label,
  name,
  error,
  className = '',
  children,
  ...rest
}) {
  const fieldId = `field-${name}`
  const errorId = error ? `${fieldId}-error` : undefined
  const Tag = as

  const fieldClasses = `${baseFieldClasses} ${error ? 'border-brand-coral' : 'border-line focus:border-brand-green'} ${className}`

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <Tag
        id={fieldId}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={fieldClasses}
        {...rest}
      >
        {children}
      </Tag>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-brand-coral-dark">
          {error}
        </p>
      )}
    </div>
  )
}
