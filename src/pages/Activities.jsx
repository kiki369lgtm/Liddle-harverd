import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import ActivityCard from '../components/ActivityCard/ActivityCard'
import Button from '../components/Button/Button'
import Reveal from '../components/Reveal/Reveal'
import { useAsyncData } from '../hooks/useAsyncData'
import { getActivities } from '../services/contentService'

function ActivitiesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
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

export default function Activities() {
  const { data: activities, loading } = useAsyncData(getActivities, [])

  return (
    <>
      <Seo
        title="Activities"
        description="Sports, swimming, scouting, excursions, cultural events and financial literacy activities at Liddle Harverd Kindergarten & Prep School."
        path="/activities"
      />

      <PageHero
        eyebrow="Student Life"
        title="Discover. Participate. Grow."
        description="School life becomes richer when children have opportunities to discover interests beyond their everyday lessons."
        description2="At Liddle Harverd, learners take part in a range of activities and experiences designed to encourage participation, movement, creativity, teamwork and exploration."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          {loading ? (
            <ActivitiesSkeleton />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity, index) => (
                <Reveal key={activity.id} delay={index * 60}>
                  <ActivityCard activity={activity} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-brand-green-light py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-semibold sm:text-[28px]">Want your child to be part of this?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate">
            Get in touch with our admissions team to learn more, or start an enquiry today.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/admissions">Apply Now</Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
