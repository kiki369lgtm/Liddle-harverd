import { Link } from 'react-router-dom'

export default function Logo({ className = '', showSubtitle = true, onClick }) {
  return (
    <Link to="/" onClick={onClick} className={`inline-flex items-center gap-3 ${className}`} aria-label="Liddle Harverd home">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-brand-green font-heading text-lg font-bold text-white">
        LH
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-base font-bold text-ink sm:text-lg">Liddle Harverd</span>
        {showSubtitle && (
          <span className="text-[11px] font-medium tracking-wide text-slate uppercase">
            Kindergarten &amp; Prep School
          </span>
        )}
      </span>
    </Link>
  )
}
