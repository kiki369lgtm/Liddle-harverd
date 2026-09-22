import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import Icon from '../Icon/Icon'

const SPAN_CLASSES = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

export default function GalleryCard({ item, onOpen }) {
  const spanClass = SPAN_CLASSES[item.size] ?? ''

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className={`group relative block h-full w-full overflow-hidden rounded-card text-left focus-visible:outline-offset-4 ${spanClass}`}
    >
      <PlaceholderImage
        src={item.image}
        alt={item.caption}
        icon={item.icon}
        tone={item.tone}
        ratio={item.size === 'tall' ? 'portrait' : item.size === 'wide' ? 'wide' : 'square'}
        caption={item.caption}
        rounded={false}
        className="h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" aria-hidden="true" />
      <span
        className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Icon name="zoomIn" className="h-4 w-4" />
      </span>
    </button>
  )
}
