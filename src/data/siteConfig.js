// Central, non-visual facts about the school.
// Keeping these here (instead of scattered through components) means the
// school only needs to correct one file when real details are supplied.

export const SITE = {
  name: 'Liddle Harverd Kindergarten & Prep School',
  shortName: 'Liddle Harverd',
  tagline: 'Where Learning Comes to Life',
  url: 'https://www.liddleharverd.ac.ke',
}

export const ADDRESS = {
  area: 'Banana, Thimbigua',
  line1: 'Along Banana–Raini Limuru Road',
  line2: 'Opposite ACK St. Stephen Thimbigua Church',
  region: 'Kiambaa, Kiambu County, Kenya',
  full: 'Banana, Thimbigua, along Banana–Raini Limuru Road, opposite ACK St. Stephen Thimbigua Church, Kiambaa, Kiambu County, Kenya',
  // Replace with verified coordinates when supplied by the school.
  coordinates: null,
}

export const PHONE_NUMBERS = ['+254 745 303 159', '+254 726 567 832']

export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'facebook', label: 'Facebook', href: '#' },
]

// Official opening hours have not been supplied yet — keep as a clear
// placeholder rather than guessing at times.
export const OPENING_HOURS_PLACEHOLDER = 'Opening hours to be confirmed by the school office.'
