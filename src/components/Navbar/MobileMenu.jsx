import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useOverlay } from '../../hooks/useOverlay'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { NAV_LINKS, PORTAL_LINK } from '../../data/navigation'
import { PHONE_NUMBERS } from '../../data/siteConfig'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'

export default function MobileMenu({ isOpen, onClose }) {
  const firstLinkRef = useRef(null)
  const panelRef = useRef(null)
  useOverlay(isOpen, onClose)
  const trapTabKey = useFocusTrap(panelRef)

  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu" onKeyDown={trapTabKey}>
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
      <div ref={panelRef} className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-lift">
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-brand-green">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={index === 0 ? firstLinkRef : undefined}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-btn px-4 py-3 text-base font-semibold transition-colors ${
                  isActive ? 'bg-brand-green-light text-brand-green' : 'text-ink hover:bg-cream-dark'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 space-y-3 border-t border-line pt-6">
          <Button to={PORTAL_LINK.to} variant="outline" onClick={onClose} className="w-full justify-center">
            {PORTAL_LINK.label}
          </Button>
          <Button to="/admissions" variant="primary" onClick={onClose} className="w-full justify-center">
            Apply Now
          </Button>
          <a href={`tel:${PHONE_NUMBERS[0].replace(/\s+/g, '')}`} className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-brand-green">
            <Icon name="phone" className="h-4 w-4" />
            {PHONE_NUMBERS[0]}
          </a>
        </div>
      </div>
    </div>,
    document.body,
  )
}
