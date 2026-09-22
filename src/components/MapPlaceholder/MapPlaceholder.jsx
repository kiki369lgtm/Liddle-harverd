import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import { ADDRESS } from '../../data/siteConfig'

// Stands in for a live map embed. Once the school confirms exact GPS
// coordinates, swap this for a real embed keyed off ADDRESS.coordinates —
// the "Get Directions" link already works today via a text-address search
// so it never points somewhere wrong in the meantime.
export default function MapPlaceholder({ className = '' }) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.full)}`

  return (
    <div className={`overflow-hidden rounded-card border border-line bg-white shadow-soft ${className}`}>
      <div
        className="relative flex aspect-video items-center justify-center bg-brand-green-light"
        style={{
          backgroundImage:
            'linear-gradient(rgba(31,107,79,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(31,107,79,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-soft">
            <Icon name="mapPin" className="h-7 w-7" />
          </span>
          <p className="text-sm font-medium text-ink">Map integration coming soon</p>
          <p className="max-w-xs text-xs text-slate">{ADDRESS.full}</p>
        </div>
      </div>
      <div className="p-5">
        <Button href={directionsUrl} target="_blank" rel="noopener noreferrer" variant="outline" icon="mapPin" iconPosition="left" className="w-full justify-center">
          Get Directions
        </Button>
      </div>
    </div>
  )
}
