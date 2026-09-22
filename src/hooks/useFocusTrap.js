import { useCallback } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

// Keeps Tab/Shift+Tab cycling within an open overlay (modal, nav drawer)
// instead of escaping to the page underneath. Returns an onKeyDown handler
// to attach to the overlay's outer element.
export function useFocusTrap(containerRef) {
  return useCallback(
    (event) => {
      if (event.key !== 'Tab' || !containerRef.current) return
      const focusable = containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    },
    [containerRef],
  )
}
