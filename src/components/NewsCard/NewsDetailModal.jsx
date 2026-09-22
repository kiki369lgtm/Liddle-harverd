import Modal from '../Modal/Modal'
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'

export default function NewsDetailModal({ item, onClose }) {
  if (!item) return null

  return (
    <Modal isOpen={Boolean(item)} onClose={onClose} labelledBy="news-modal-title" className="max-w-2xl">
      <PlaceholderImage src={item.image} alt={item.title} icon={item.icon} tone={item.tone} ratio="video" rounded={false} />
      <div className="p-6 sm:p-8">
        <Badge tone={item.tone}>{item.category}</Badge>
        <h3 id="news-modal-title" className="mt-3 text-2xl font-semibold">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate">{item.excerpt}</p>
        {item.isSample && (
          <>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Our learners had the opportunity to step outside the classroom and experience learning in a
              different environment. Through activities, teamwork and participation, the day provided
              moments of discovery, enjoyment and connection.
            </p>
            <p className="mt-4 rounded-btn bg-brand-yellow-light px-4 py-3 text-sm text-ink">
              This is an example of how a finished story will read, not a report of a specific event. The
              school will replace it with verified details, photos and dates once each story is ready to
              publish.
            </p>
          </>
        )}
        <Button to="/contact" variant="outline" className="mt-6">
          Get in Touch
        </Button>
      </div>
    </Modal>
  )
}
