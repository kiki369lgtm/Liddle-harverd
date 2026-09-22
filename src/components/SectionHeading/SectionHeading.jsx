import { tone as toneClasses } from '../../lib/tones'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  description2,
  align = 'center',
  tone: toneName = 'coral',
  className = '',
}) {
  const t = toneClasses(toneName)
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${t.badge}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-[30px] leading-[1.15] font-bold sm:text-[36px] md:text-[42px]">{title}</h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      {description2 && (
        <p className={`mt-3 max-w-2xl text-base leading-relaxed text-slate sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {description2}
        </p>
      )}
    </div>
  )
}
