import { useEffect } from 'react'

// Shared behaviour for any full-screen overlay (modal, mobile nav drawer):
// locks background scroll and closes on Escape while open.
export function useOverlay(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])
}
