import Icon from '../Icon/Icon'
import { tone as toneClasses } from '../../lib/tones'

// Stands in for a real photograph. Pass `src` once real school photography
// is available and this renders a normal lazy-loaded <img> at the same
// aspect ratio instead — no other code needs to change.

const RATIOS = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/7]',
  auto: '',
  // Fills its positioned parent instead of holding its own aspect ratio —
  // for full-bleed backgrounds (e.g. a hero) rather than boxed cards.
  fill: 'h-full w-full',
}

export default function PlaceholderImage({
  src,
  alt,
  icon = 'sparkles',
  tone: toneName = 'green',
  ratio = 'video',
  caption,
  rounded = true,
  className = '',
  imgClassName = '',
}) {
  const t = toneClasses(toneName)
  const ratioClass = RATIOS[ratio] ?? RATIOS.video
  const roundedClass = rounded ? 'rounded-img' : ''

  if (src) {
    return (
      <div className={`relative overflow-hidden ${ratioClass} ${roundedClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
        {caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
            <p className="text-sm font-medium text-white">{caption}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${ratioClass} ${roundedClass} bg-gradient-to-br ${t.gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-white/15 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-black/10 blur-2xl" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm sm:h-16 sm:w-16">
          <Icon name={icon} className="h-7 w-7 text-white sm:h-8 sm:w-8" />
        </div>
      </div>
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
          <p className="text-sm font-medium text-white">{caption}</p>
        </div>
      )}
    </div>
  )
}
