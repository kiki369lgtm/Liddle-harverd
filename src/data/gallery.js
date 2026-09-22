// Gallery media. Entries without an `image` render as a labelled placeholder
// tile — the GalleryCard component swaps to a real <img> automatically once
// one is supplied. A first batch of real photos (sourced from the school's
// own Instagram, @liddle_harverd_banana) is wired in below; the rest stay
// as placeholders until more official photography is available.

export const GALLERY_CATEGORIES = [
  'All',
  'Learning',
  'Sports',
  'Swimming',
  'Excursions',
  'Scouting',
  'Culture',
  'School Events',
]

export const galleryItems = [
  { id: 'g1', category: 'Learning', icon: 'blocks', tone: 'coral', size: 'tall', caption: 'Playgroup learners at circle time' },
  { id: 'g2', category: 'Sports', icon: 'trophy', tone: 'coral', size: 'normal', caption: 'Sports afternoon on the school field' },
  { id: 'g3', category: 'Swimming', icon: 'waves', tone: 'sky', size: 'wide', caption: 'Swimming lesson in progress' },
  { id: 'g4', category: 'Excursions', icon: 'bus', tone: 'yellow', size: 'normal', caption: 'Learners at Twin Rivers Resort', image: '/photos/excursion-twin-rivers.jpg' },
  { id: 'g5', category: 'Scouting', icon: 'tent', tone: 'green', size: 'tall', caption: 'Scouts giving the scout salute', image: '/photos/scouting-salute.webp' },
  { id: 'g6', category: 'Culture', icon: 'globe', tone: 'coral', size: 'normal', caption: 'An Easter-themed craft activity', image: '/photos/culture-easter-craft.jpg' },
  { id: 'g7', category: 'School Events', icon: 'sparkles', tone: 'yellow', size: 'normal', caption: 'An outdoor performance at school', image: '/photos/school-building-event.jpg' },
  { id: 'g8', category: 'Learning', icon: 'bookOpen', tone: 'green', size: 'normal', caption: 'A hands-on craft activity in class', image: '/photos/classroom-craft.webp' },
  { id: 'g9', category: 'Sports', icon: 'footprints', tone: 'sky', size: 'wide', caption: 'Skating on the school playground', image: '/photos/sports-skating.webp' },
  { id: 'g10', category: 'Swimming', icon: 'waves', tone: 'sky', size: 'normal', caption: 'Learners by the pool' },
  { id: 'g11', category: 'Learning', icon: 'puzzle', tone: 'yellow', size: 'tall', caption: 'A hygiene lesson with a teacher', image: '/photos/handwashing-lesson.jpg' },
  { id: 'g12', category: 'Excursions', icon: 'mapPin', tone: 'coral', size: 'normal', caption: 'A supermarket visit to practice shopping and saving', image: '/photos/financial-literacy-shopping.jpg' },
  { id: 'g13', category: 'Scouting', icon: 'tent', tone: 'green', size: 'normal', caption: 'Scouts working as a team' },
  { id: 'g14', category: 'Culture', icon: 'globe', tone: 'coral', size: 'wide', caption: 'Ubuntu Day performance on stage', image: '/photos/ubuntu-day.jpg' },
  { id: 'g15', category: 'School Events', icon: 'sparkles', tone: 'yellow', size: 'normal', caption: 'Celebrating together at school' },
  { id: 'g16', category: 'Learning', icon: 'graduation', tone: 'green', size: 'normal', caption: 'Preparatory class in session' },
  { id: 'g17', category: 'Sports', icon: 'trophy', tone: 'coral', size: 'tall', caption: 'Sports day medals' },
  { id: 'g18', category: 'School Events', icon: 'piggyBank', tone: 'green', size: 'normal', caption: 'Financial literacy activity' },
]

export function getGalleryByCategory(category) {
  if (!category || category === 'All') return galleryItems
  return galleryItems.filter((item) => item.category === category)
}
