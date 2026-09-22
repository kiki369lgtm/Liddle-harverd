import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import Button from '../Button/Button'

export default function ProgramCard({ program }) {
  const { id, title, subtitle, description, icon, tone, image } = program

  return (
    <article
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-card border border-line bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1"
    >
      <PlaceholderImage
        src={image}
        alt={`${title} learners at Liddle Harverd`}
        icon={icon}
        tone={tone}
        ratio="square"
        rounded={false}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-brand-coral-dark">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate">{description}</p>
        <Button variant="link" to="/admissions" icon="arrowRight" className="mt-4">
          Learn More
        </Button>
      </div>
    </article>
  )
}
