import { useEffect } from 'react'
import { SITE } from '../../data/siteConfig'

function upsertMeta(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// Lightweight per-page SEO: sets the document title, meta description, a
// couple of Open Graph tags and a canonical link. Avoids pulling in a
// head-management library for what is a handful of tag updates.
export default function Seo({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.shortName}` : SITE.name
    document.title = fullTitle

    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }

    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE.name)

    const url = `${SITE.url}${path}`
    upsertMeta('property', 'og:url', url)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, path])

  return null
}
