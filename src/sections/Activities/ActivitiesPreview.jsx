import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ActivityCard from '../../components/ActivityCard/ActivityCard'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'
import { activities } from '../../data/activities'

export default function ActivitiesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Student Life"
          tone="coral"
          title="Life at Liddle Harverd"
          description="School life is about more than what happens during a lesson. Our activities create opportunities for learners to participate, collaborate, have fun and develop confidence while discovering different interests."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal key={activity.id} delay={index * 60}>
              <ActivityCard activity={activity} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/activities" variant="outline">
            View All Activities
          </Button>
        </div>
      </Container>
    </section>
  )
}
