import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import Reveal from '../../components/Reveal/Reveal'

export default function FinancialLiteracy() {
  return (
    <section className="bg-brand-green-light py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-card bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
          <Reveal>
            <PlaceholderImage
              src="/photos/financial-literacy-shopping.jpg"
              alt="A learner practicing shopping and money skills at a supermarket"
              icon="piggyBank"
              tone="green"
              ratio="video"
              className="sm:aspect-[4/3]"
            />
          </Reveal>

          <Reveal delay={120}>
            <span className="inline-flex items-center rounded-full bg-brand-green-light px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green uppercase">
              Life Skills
            </span>
            <h2 className="mt-4 text-[28px] leading-[1.15] font-bold sm:text-[34px] md:text-[42px]">
              Little Learners. <span className="text-brand-green">Big Lessons.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
              Financial literacy doesn&apos;t have to be complicated. Simple activities such as saving in a
              piggy bank can introduce young learners to basic ideas about money, patience and
              responsibility.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              At Liddle Harverd, practical experiences like these complement classroom learning by giving
              children opportunities to connect everyday lessons with real-life situations.
            </p>
            <Button to="/activities#financial-literacy" variant="coral" className="mt-7">
              Discover More
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
