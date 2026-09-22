import { useMemo, useState } from 'react'
import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import NewsCard from '../components/NewsCard/NewsCard'
import NewsDetailModal from '../components/NewsCard/NewsDetailModal'
import Reveal from '../components/Reveal/Reveal'
import { useAsyncData } from '../hooks/useAsyncData'
import { getNews } from '../services/contentService'
import { NEWS_CATEGORIES } from '../data/news'

function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse overflow-hidden rounded-card border border-line bg-white">
          <div className="aspect-video bg-cream-dark" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-24 rounded-full bg-cream-dark" />
            <div className="h-5 w-32 rounded bg-cream-dark" />
            <div className="h-4 w-full rounded bg-cream-dark" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function News() {
  const { data: newsItems, loading } = useAsyncData(getNews, [])
  const [category, setCategory] = useState('All')
  const [activeItem, setActiveItem] = useState(null)

  const filteredItems = useMemo(() => {
    if (!newsItems) return []
    return category === 'All' ? newsItems : newsItems.filter((item) => item.category === category)
  }, [newsItems, category])

  return (
    <>
      <Seo
        title="News & Events"
        description="News and events from Liddle Harverd Kindergarten & Prep School, including sports days, excursions and cultural celebrations."
        path="/news"
      />

      <PageHero
        eyebrow="News & Events"
        title="What's Happening at Liddle Harverd?"
        description="There is always something happening beyond the classroom."
        description2="From school activities and sports to excursions, cultural experiences and important school announcements, our news section keeps parents and visitors connected with life at Liddle Harverd."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Featured Events"
            tone="yellow"
            title="Experiences That Become Memories"
            description="Explore stories and updates from activities that bring our school community together."
            className="mb-12"
          />

          <div role="group" aria-label="Filter news by category" className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {NEWS_CATEGORIES.map((item) => {
              const isActive = item === category
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCategory(item)}
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

          <div className="mt-10">
            {loading ? (
              <NewsSkeleton />
            ) : filteredItems.length === 0 ? (
              <p className="text-center text-slate">No news in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item, index) => (
                  <Reveal key={item.id} delay={index * 60}>
                    <NewsCard item={item} onReadMore={setActiveItem} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      <NewsDetailModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  )
}
