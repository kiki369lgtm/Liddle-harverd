import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ProgramCard from '../components/ProgramCard/ProgramCard'
import Reveal from '../components/Reveal/Reveal'
import AdmissionsCTA from '../sections/AdmissionsCTA/AdmissionsCTA'
import { programs } from '../data/programs'

export default function Learning() {
  return (
    <>
      <Seo
        title="Learning"
        description="Explore the learning stages at Liddle Harverd — Playgroup, PP1, PP2 and Preparatory — each building on the last."
        path="/learning"
      />

      <PageHero
        eyebrow="Programs"
        title="Building Foundations for a Lifetime of Learning"
        description="The early years are an important part of a child's educational journey. They are a time when curiosity develops, confidence grows and children begin discovering how they learn best."
        description2="At Liddle Harverd, we aim to make this journey engaging through a combination of learning, participation and real-world experiences."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            tone="green"
            title="Our Learning Journey"
            description="Each stage of a child's education brings new opportunities to explore, learn and develop. We create age-appropriate learning experiences that support children as they progress through their educational journey."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <Reveal key={program.id} delay={index * 80}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-3xl rounded-card border border-line bg-cream p-8 text-center sm:p-10">
            <h2 className="text-xl font-semibold">Not sure which stage fits your child?</h2>
            <p className="mt-3 text-base leading-relaxed text-slate">
              Our admissions team is happy to talk through your child&apos;s age and needs and help you
              understand what to expect at each stage.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Learning Beyond Books"
            tone="coral"
            title="Children Learn When They Experience, Participate and Explore"
            description="Our approach extends beyond traditional classroom activities. Sports, swimming, excursions, scouting and cultural experiences provide learners with opportunities to apply skills, interact with others and discover new interests."
          />
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Developing the Whole Child"
            tone="sky"
            title="Knowledge Matters. So Do Confidence, Curiosity and Character."
            description="We value opportunities that help learners develop academically while also building communication, teamwork, responsibility and confidence."
            description2="The goal is to give children a balanced foundation they can carry with them as they continue growing."
          />
        </Container>
      </section>

      <AdmissionsCTA />
    </>
  )
}
