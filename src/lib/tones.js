// Shared tone → Tailwind class lookup so accent colors stay consistent
// across placeholder art, badges and icon chips without repeating classes
// in every component.
//
// `badge` always pairs a tinted background with dark ink text (not the
// tone's own "-dark" color) — the tone-on-tint text pairing fails WCAG AA
// contrast at small badge sizes, ink against any of these light tints does
// not.

export const TONES = {
  green: {
    gradient: 'from-brand-green to-brand-green-dark',
    chip: 'bg-brand-green-light text-brand-green',
    badge: 'bg-brand-green-light text-ink',
  },
  yellow: {
    gradient: 'from-brand-yellow to-brand-yellow-dark',
    chip: 'bg-brand-yellow-light text-brand-yellow-dark',
    badge: 'bg-brand-yellow-light text-ink',
  },
  coral: {
    gradient: 'from-brand-coral to-brand-coral-dark',
    chip: 'bg-brand-coral-light text-brand-coral-dark',
    badge: 'bg-brand-coral-light text-ink',
  },
  sky: {
    gradient: 'from-brand-sky to-brand-sky-dark',
    chip: 'bg-brand-sky-light text-brand-sky-dark',
    badge: 'bg-brand-sky-light text-ink',
  },
  neutral: {
    gradient: 'from-slate/50 to-ink/70',
    chip: 'bg-cream-dark text-slate',
    badge: 'bg-cream-dark text-slate',
  },
}

export function tone(name) {
  return TONES[name] ?? TONES.neutral
}
