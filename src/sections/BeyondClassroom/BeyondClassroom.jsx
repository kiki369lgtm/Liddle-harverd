import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import Reveal from '../../components/Reveal/Reveal'
import Icon from '../../components/Icon/Icon'

const HIGHLIGHTS = [
  { label: 'Swimming', icon: 'waves' },
  { label: 'Sports', icon: 'trophy' },
  { label: 'Scouting', icon: 'tent' },
  { label: 'Excursions', icon: 'bus' },
  { label: 'Cultural Events', icon: 'globe' },
]

export default function BeyondClassroom() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PlaceholderImage
            alt="Learners taking part in an activity beyond the classroom"
            icon="footprints"
            tone="coral"
            ratio="square"
            className="sm:aspect-[4/5]"
          />
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-[28px] leading-[1.15] font-bold sm:text-[34px] md:text-[42px]">
            Learning Doesn&apos;t Stop at the Bell
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            At Liddle Harverd, learners have opportunities to participate in experiences that complement
            their everyday studies. From swimming and sports to scouting, excursions and cultural
            activities, these experiences give children space to discover their interests, work with
            others and learn through participation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Whether they are taking part in a sports activity, exploring somewhere new or celebrating
            culture and community, every experience can become another opportunity to learn.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium"
              >
                <Icon name={item.icon} className="h-4 w-4 text-brand-green" />
                {item.label}
              </li>
            ))}
          </ul>

          <Button to="/activities" className="mt-8">
            Discover Our Activities
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
