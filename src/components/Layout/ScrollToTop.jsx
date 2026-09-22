import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on route change. When the URL includes a hash
// (e.g. /activities#financial-literacy from a homepage CTA), scrolls the
// target section into view once it renders. Some listing pages load their
// content a tick after mount (see useAsyncData), so this retries briefly
// instead of only checking once.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = hash.replace('#', '')
    let attempts = 0
    const timer = setInterval(() => {
      const target = document.getElementById(id)
      attempts += 1
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        clearInterval(timer)
      } else if (attempts > 20) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [pathname, hash])

  return null
}
