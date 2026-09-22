import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'

export default function AdmissionsCTA() {
  return (
    <section className="bg-brand-green py-16 text-white sm:py-20">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-[28px] leading-[1.2] font-bold sm:text-[34px] md:text-[42px]">
            Give Your Child a Place to Learn, Play &amp; Grow
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Choosing a school is an important decision. At Liddle Harverd, we welcome parents and
            guardians who are looking for an environment where children can learn, participate, explore
            and grow.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85 sm:text-lg">
            If you&apos;d like to learn more about our programs or begin the admission process, get in touch
            with our school team.
          </p>
          <div className="mt-8">
            <Button to="/admissions" variant="coral" size="lg">
              Apply Now
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
