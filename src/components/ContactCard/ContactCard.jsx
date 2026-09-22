import { tone as toneClasses } from '../../lib/tones'
import Icon from '../Icon/Icon'

export default function ContactCard({ icon, tone: toneName = 'green', title, children, className = '' }) {
  const t = toneClasses(toneName)

  return (
    <div className={`rounded-card border border-line bg-white p-6 shadow-soft ${className}`}>
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${t.chip}`}>
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <div className="mt-2 space-y-1 text-sm leading-relaxed text-slate">{children}</div>
    </div>
  )
}
