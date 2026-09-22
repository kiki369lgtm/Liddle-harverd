// News & Events content.
// These entries are structured the way an API response would be, but the
// text is clearly marked as sample content since no official posts, dates
// or results have been supplied by the school yet.

export const NEWS_CATEGORIES = [
  'All',
  'School Events',
  'Sports',
  'Excursions',
  'Cultural Events',
  'Announcements',
  'Activities',
]

export const newsItems = [
  {
    id: 'n1',
    slug: 'sports-day',
    title: 'Sports Day',
    category: 'Sports',
    icon: 'trophy',
    tone: 'coral',
    excerpt: 'Learners take part in races and team games as part of the school sports calendar.',
    isSample: true,
  },
  {
    id: 'n2',
    slug: 'twin-rivers-excursion',
    title: 'Twin Rivers Excursion',
    category: 'Excursions',
    icon: 'bus',
    tone: 'yellow',
    excerpt: 'An educational trip giving learners a chance to explore and learn outside the classroom.',
    image: '/photos/excursion-twin-rivers.jpg',
    isSample: true,
  },
  {
    id: 'n3',
    slug: 'ubuntu-day',
    title: 'Ubuntu Day',
    category: 'Cultural Events',
    icon: 'globe',
    tone: 'coral',
    excerpt: 'A celebration of community and culture, with learners taking part in shared activities.',
    image: '/photos/ubuntu-day.jpg',
    isSample: true,
  },
  {
    id: 'n4',
    slug: 'swimming-activities',
    title: 'Swimming Activities',
    category: 'Activities',
    icon: 'waves',
    tone: 'sky',
    excerpt: 'Ongoing swimming sessions that build water confidence and basic skills.',
    isSample: true,
  },
  {
    id: 'n5',
    slug: 'scouting-activities',
    title: 'Scouting Activities',
    category: 'Activities',
    icon: 'tent',
    tone: 'green',
    excerpt: 'Scouting sessions focused on teamwork, discipline and outdoor skills.',
    image: '/photos/scouting-salute.webp',
    isSample: true,
  },
]

export function getNewsBySlug(slug) {
  return newsItems.find((item) => item.slug === slug)
}
