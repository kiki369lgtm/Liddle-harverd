// lucide-react dropped brand/logo glyphs, so these two social icons (used
// only in the footer) are hand-drawn as simple generic pictograms rather
// than exact brand marks.

export function InstagramGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13.8 9.2h1.8V6.6h-1.8c-1.7 0-3 1.3-3 3v1.6H9v2.6h1.8V18h2.6v-4.2h1.8l.4-2.6h-2.2v-1.4c0-.4.3-.6.4-.6Z" />
    </svg>
  )
}
