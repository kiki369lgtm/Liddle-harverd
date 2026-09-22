import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useOverlay } from '../../hooks/useOverlay'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import Icon from '../Icon/Icon'

// Minimal accessible dialog shared by the gallery lightbox and the news
// "read more" panel: traps Escape-to-close, locks background scroll, and
// returns focus sensibly. Kept generic so future features (e.g. a program
// detail popover) can reuse it instead of hand-rolling another modal.
export default function Modal({ isOpen, onClose, labelledBy, children, className = '' }) {
  const dialogRef = useRef(null)

  useOverlay(isOpen, onClose)

  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement
    dialogRef.current?.focus()
    return () => {
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [isOpen])

  const trapTabKey = useFocusTrap(dialogRef)

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onKeyDown={trapTabKey}
        className={`relative max-h-[90vh] w-full overflow-auto rounded-card bg-white shadow-lift focus:outline-none ${className}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-white transition-colors hover:bg-ink"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
