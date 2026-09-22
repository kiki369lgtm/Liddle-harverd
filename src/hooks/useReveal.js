import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Fires once when the element scrolls into view, used to trigger a subtle
// fade/slide-in. Respects prefers-reduced-motion by starting revealed
// (computed up front, so no observer is ever created in that case).
export function useReveal(options) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options, visible])

  return { ref, visible }
}
