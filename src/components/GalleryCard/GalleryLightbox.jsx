import { useCallback, useEffect } from 'react'
import Modal from '../Modal/Modal'
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import Badge from '../Badge/Badge'
import Icon from '../Icon/Icon'

// Keyboard-accessible lightbox: Escape closes (via Modal), Left/Right move
// between images while it's open.
export default function GalleryLightbox({ items, activeIndex, onClose, onNavigate }) {
  const isOpen = activeIndex !== null
  const item = isOpen ? items[activeIndex] : null

  const goTo = useCallback(
    (delta) => {
      const next = (activeIndex + delta + items.length) % items.length
      onNavigate(next)
    },
    [activeIndex, items.length, onNavigate],
  )

  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') goTo(1)
      if (event.key === 'ArrowLeft') goTo(-1)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, goTo])

  if (!item) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="lightbox-caption" className="max-w-3xl">
      <PlaceholderImage
        src={item.image}
        alt={item.caption}
        icon={item.icon}
        tone={item.tone}
        ratio="video"
        rounded={false}
      />
      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <Badge tone={item.tone}>{item.category}</Badge>
          <p id="lightbox-caption" className="mt-2 text-base font-medium text-ink">
            {item.caption}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous image"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-brand-green hover:text-brand-green"
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next image"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-brand-green hover:text-brand-green"
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Modal>
  )
}
