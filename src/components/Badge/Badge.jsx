import { tone as toneClasses } from '../../lib/tones'

export default function Badge({ children, tone: toneName = 'green', className = '' }) {
  const t = toneClasses(toneName)
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${t.badge} ${className}`}
    >
      {children}
    </span>
  )
}
