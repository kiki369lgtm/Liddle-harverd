import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import Reveal from '../../components/Reveal/Reveal'
import Icon from '../../components/Icon/Icon'
import { tone as toneClasses } from '../../lib/tones'

const FEATURES = [
  {
    id: 'learn',
    title: 'Learn',
    icon: 'bookOpen',
    tone: 'green',
    description:
      'We encourage curiosity and active participation, helping young learners engage with new ideas in ways that make learning enjoyable and meaningful.',
  },
  {
    id: 'move',
    title: 'Move',
    icon: 'footprints',
    tone: 'coral',
    description:
      'From sports and swimming to physical activities, learners have opportunities to stay active, develop coordination and enjoy being part of a team.',
  },
  {
    id: 'explore',
    title: 'Explore',
    icon: 'compass',
    tone: 'sky',
    description:
      'Excursions and experiences outside the classroom give children opportunities to discover new environments and connect what they learn with the world around them.',
  },
  {
    id: 'grow',
    title: 'Grow',
    icon: 'sprout',
    tone: 'yellow',
    description:
      'Through teamwork, responsibility, cultural experiences and everyday interactions, learners develop confidence and important life skills alongside their academic journey.',
  },
]

export default function MoreThanClassroom() {
  return (
    <section id="more-than-a-classroom" className="scroll-mt-24 bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Philosophy"
          title="More Than a Classroom"
          description="Children learn in different ways, and meaningful experiences can make learning more memorable. At Liddle Harverd, classroom learning is complemented by opportunities to move, explore, interact and discover the world around them."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const t = toneClasses(feature.tone)
            return (
              <Reveal key={feature.id} delay={index * 80}>
                <div className="h-full rounded-card border border-line bg-white p-7 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${t.chip}`}>
                    <Icon name={feature.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold tracking-wide uppercase">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{feature.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
