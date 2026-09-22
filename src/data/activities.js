// Co-curricular life at Liddle Harverd. Used on the Home preview, the full
// Activities page and cross-linked from Learning/News where relevant.

export const activities = [
  {
    id: 'swimming',
    slug: 'swimming',
    title: 'Swimming',
    category: 'Sports & Wellness',
    description:
      'Swimming provides an opportunity for learners to enjoy physical activity while becoming more comfortable and confident in the water.',
    icon: 'waves',
    tone: 'sky',
  },
  {
    id: 'sports',
    slug: 'sports',
    title: 'Sports',
    category: 'Sports & Wellness',
    description:
      'Sports give children an opportunity to stay active, work as a team and experience the excitement that comes with participation.',
    icon: 'trophy',
    tone: 'coral',
    image: '/photos/sports-skating.webp',
  },
  {
    id: 'scouting',
    slug: 'scouting',
    title: 'Scouting',
    category: 'Character & Skills',
    description:
      'Scouting provides opportunities for learners to take part in structured activities while developing teamwork, responsibility and confidence.',
    icon: 'tent',
    tone: 'green',
    image: '/photos/scouting-salute.webp',
  },
  {
    id: 'excursions',
    slug: 'educational-excursions',
    title: 'Educational Excursions',
    category: 'Experiential Learning',
    description:
      'An excursion can turn an ordinary lesson into an experience. Visiting new places allows learners to observe, explore and connect with environments beyond the school.',
    icon: 'bus',
    tone: 'yellow',
    image: '/photos/excursion-twin-rivers.jpg',
  },
  {
    id: 'ubuntu',
    slug: 'ubuntu-cultural-events',
    title: 'Ubuntu / Cultural Events',
    category: 'Community & Culture',
    description:
      'Cultural experiences provide learners with opportunities to appreciate different traditions, participate together and develop a stronger sense of community.',
    icon: 'globe',
    tone: 'coral',
    image: '/photos/ubuntu-day.jpg',
  },
  {
    id: 'financial-literacy',
    slug: 'financial-literacy',
    title: 'Financial Literacy',
    category: 'Life Skills',
    description:
      'Simple practical lessons can help children begin developing an understanding of responsibility, saving and making thoughtful choices.',
    icon: 'piggyBank',
    tone: 'green',
    image: '/photos/financial-literacy-shopping.jpg',
  },
]

export function getActivityBySlug(slug) {
  return activities.find((activity) => activity.slug === slug)
}
