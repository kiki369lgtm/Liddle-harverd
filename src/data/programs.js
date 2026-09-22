// Learning stages offered at Liddle Harverd.
// Descriptions are kept general by design — replace with school-specific
// curriculum detail (age ranges, subjects, etc.) once officially confirmed.

export const programs = [
  {
    id: 'playgroup',
    slug: 'playgroup',
    title: 'Playgroup',
    subtitle: 'Explore & Discover',
    description:
      'A welcoming beginning where young learners can start developing independence, communication and curiosity through age-appropriate experiences.',
    icon: 'blocks',
    tone: 'coral',
    image: '/photos/classroom-craft.webp',
  },
  {
    id: 'pp1',
    slug: 'pp1',
    title: 'PP1',
    subtitle: 'Learn & Grow',
    description:
      'An environment where children can build foundational skills while discovering the joy of learning through engaging activities and interaction.',
    icon: 'pencil',
    tone: 'yellow',
  },
  {
    id: 'pp2',
    slug: 'pp2',
    title: 'PP2',
    subtitle: 'Build & Prepare',
    description:
      'Learners continue developing their knowledge, confidence and independence as they prepare for the next step in their educational journey.',
    icon: 'puzzle',
    tone: 'sky',
  },
  {
    id: 'preparatory',
    slug: 'preparatory',
    title: 'Preparatory',
    subtitle: 'Develop & Excel',
    description:
      'A continued learning journey that encourages responsibility, confidence, participation and readiness for future academic experiences.',
    icon: 'graduation',
    tone: 'green',
  },
]

export function getProgramBySlug(slug) {
  return programs.find((program) => program.slug === slug)
}
