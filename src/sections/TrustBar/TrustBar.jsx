import Container from '../../components/Container/Container'
import Icon from '../../components/Icon/Icon'

const ITEMS = [
  { icon: 'mapPin', label: 'Banana, Thimbigua' },
  { icon: 'bookOpen', label: 'Early Learning & Preparatory Education' },
  { icon: 'sprout', label: 'Active & Experiential Learning' },
  { icon: 'waves', label: 'Sports & Co-Curricular Activities' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-green text-white">
      <Container>
        <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto py-5 no-scrollbar sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:flex lg:grid-cols-none lg:justify-between">
          {ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex shrink-0 snap-start items-center gap-3 sm:shrink"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Icon name={item.icon} className="h-5 w-5 text-brand-yellow" />
              </span>
              <span className="text-sm font-medium whitespace-nowrap sm:whitespace-normal">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
