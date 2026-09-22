import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'

export default function NewsCard({ item, onReadMore }) {
  const { title, category, excerpt, icon, tone, isSample, image } = item

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft">
      <PlaceholderImage src={image} alt={title} icon={icon} tone={tone} ratio="video" rounded={false} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={tone}>{category}</Badge>
          {isSample && (
            <span className="text-xs font-medium tracking-wide text-slate uppercase">Sample content</span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{excerpt}</p>
        <Button variant="link" icon="arrowRight" className="mt-4 self-start" onClick={() => onReadMore(item)}>
          Read More
        </Button>
      </div>
    </article>
  )
}
