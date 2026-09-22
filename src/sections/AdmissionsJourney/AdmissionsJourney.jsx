import Container from '../../components/Container/Container'
import Reveal from '../../components/Reveal/Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Enquire',
    description: "Tell us a little about your child and the program you're interested in.",
  },
  {
    number: '02',
    title: 'Visit',
    description: 'Come and experience the school environment and speak with our team.',
  },
  {
    number: '03',
    title: 'Apply',
    description: "Proceed with the admission process once you've decided that Liddle Harverd is the right fit.",
  },
  {
    number: '04',
    title: 'Join Us',
    description: 'Begin your child’s next chapter with the Liddle Harverd community.',
  },
]

export default function AdmissionsJourney() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="relative text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-light font-heading text-xl font-bold text-brand-green">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
              {index < STEPS.length - 1 && (
                <span
                  className="absolute top-8 left-[calc(50%+2.5rem)] hidden h-0.5 w-[calc(100%-5rem)] bg-brand-green-light lg:block"
                  aria-hidden="true"
                />
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
