import { useState } from 'react'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import GalleryLightbox from '../../components/GalleryCard/GalleryLightbox'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'
import { galleryItems } from '../../data/gallery'

const PREVIEW_ITEMS = galleryItems.slice(0, 6)

export default function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          tone="yellow"
          title="Moments Worth Remembering"
          description="A school is made up of moments — lessons, laughter, teamwork, celebrations, discoveries and new experiences. Explore moments from life at Liddle Harverd."
        />

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {PREVIEW_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} className="h-full">
              <GalleryCard item={item} onOpen={() => setActiveIndex(index)} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Container>

      <GalleryLightbox
        items={PREVIEW_ITEMS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}
