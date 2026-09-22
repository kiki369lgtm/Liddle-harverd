import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ProgramCard from '../../components/ProgramCard/ProgramCard'
import Reveal from '../../components/Reveal/Reveal'
import { programs } from '../../data/programs'

export default function LearningJourney() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          tone="green"
          title="Our Learning Journey"
          description="The early years of a child's education lay the foundation for curiosity, confidence and a positive relationship with learning. At Liddle Harverd, each stage provides opportunities for children to learn at their level while developing socially, creatively and academically."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 80}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
