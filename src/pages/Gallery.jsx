import { useMemo, useState } from 'react'
import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import GalleryCard from '../components/GalleryCard/GalleryCard'
import GalleryLightbox from '../components/GalleryCard/GalleryLightbox'
import { galleryItems, GALLERY_CATEGORIES } from '../data/gallery'

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filteredItems = useMemo(
    () => (category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category],
  )

  function handleCategoryChange(next) {
    setCategory(next)
    setActiveIndex(null)
  }

  return (
    <>
      <Seo
        title="Gallery"
        description="Photos of learning, sports, swimming, excursions, scouting and cultural life at Liddle Harverd Kindergarten & Prep School."
        path="/gallery"
      />

      <PageHero
        eyebrow="Gallery"
        title="See School Life in Motion"
        description="A school is made up of moments — lessons, laughter, teamwork, celebrations, discoveries and new experiences."
        description2="Explore moments from life at Liddle Harverd."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div
            role="group"
            aria-label="Filter gallery by category"
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {GALLERY_CATEGORIES.map((item) => {
              const isActive = item === category
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleCategoryChange(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-green text-white'
                      : 'border border-line bg-white text-ink hover:border-brand-green hover:text-brand-green'
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>

          {filteredItems.length === 0 ? (
            <p className="mt-16 text-center text-slate">No photos in this category yet.</p>
          ) : (
            <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[200px] lg:auto-rows-[220px]">
              {filteredItems.map((item, index) => (
                <GalleryCard key={item.id} item={item} onOpen={() => setActiveIndex(index)} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <GalleryLightbox
        items={filteredItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
