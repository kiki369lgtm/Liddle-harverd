import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import Badge from '../Badge/Badge'

export default function ActivityCard({ activity, className = '' }) {
  const { id, title, category, description, icon, tone, image } = activity

  return (
    <article
      id={id}
      className={`group scroll-mt-28 overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      <div className="overflow-hidden">
        <PlaceholderImage
          src={image}
          alt={`${title} at Liddle Harverd`}
          icon={icon}
          tone={tone}
          ratio="video"
          rounded={false}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <Badge tone={tone}>{category}</Badge>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
      </div>
    </article>
  )
}
