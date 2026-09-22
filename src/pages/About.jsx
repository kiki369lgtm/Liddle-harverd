import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import PlaceholderImage from '../components/PlaceholderImage/PlaceholderImage'
import Button from '../components/Button/Button'
import Reveal from '../components/Reveal/Reveal'

const SECTIONS = [
  {
    id: 'who-we-are',
    title: 'More Than a School. A Place to Discover Potential.',
    icon: 'sprout',
    tone: 'green',
    image: '/photos/school-building-event.jpg',
    body: [
      "The early years of education are filled with important first experiences — the first friendships, new discoveries, new responsibilities and the excitement of understanding something for the first time.",
      'Liddle Harverd brings together classroom learning and experiences beyond the classroom to create a school environment where young learners can engage with education in different ways.',
    ],
  },
  {
    id: 'approach',
    title: 'Learning Through Curiosity and Experience',
    icon: 'bookOpen',
    tone: 'coral',
    body: [
      'We believe young learners benefit from opportunities to participate actively in their education. Alongside academic learning, children can take part in sports, swimming, excursions, scouting, cultural activities and practical experiences.',
      'These experiences create opportunities for learners to develop not only knowledge, but also confidence, cooperation, responsibility and curiosity.',
    ],
  },
  {
    id: 'environment',
    title: 'A Space Where Children Can Discover New Possibilities',
    icon: 'compass',
    tone: 'sky',
    image: '/photos/handwashing-lesson.jpg',
    body: [
      'Children need an environment where they feel encouraged to ask questions, try new things and participate.',
      'Our approach combines learning with opportunities for interaction, movement, creativity and exploration, helping make the school experience engaging and meaningful.',
    ],
  },
  {
    id: 'beyond-academics',
    title: 'Because Growing Up Involves More Than Books',
    icon: 'trophy',
    tone: 'yellow',
    body: [
      'Education is also about learning how to work with others, take responsibility, participate confidently and appreciate the world around us.',
      'Through sports, scouting, cultural activities, excursions and practical experiences, learners have opportunities to develop different skills and interests alongside their academic journey.',
    ],
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Liddle Harverd Kindergarten & Prep School in Banana, Thimbigua — our approach to early childhood and preparatory education."
        path="/about"
      />

      <PageHero
        eyebrow="About Liddle Harverd"
        title="A Place Where Young Minds Can Grow"
        description="Every child's educational journey begins with curiosity. At Liddle Harverd Kindergarten & Prep School, we aim to provide an environment where children can learn, participate, express themselves and develop confidence as they grow."
      />

      <div className="bg-white py-20 sm:py-24">
        <Container className="space-y-20 sm:space-y-24">
          {SECTIONS.map((section, index) => {
            const imageFirst = index % 2 === 0
            return (
              <div
                key={section.id}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
                  <PlaceholderImage
                    src={section.image}
                    alt={`${section.title} at Liddle Harverd`}
                    icon={section.icon}
                    tone={section.tone}
                    ratio="square"
                    className="sm:aspect-[4/3]"
                  />
                </Reveal>
                <Reveal delay={100} className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 className="text-2xl font-semibold sm:text-[28px]">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-slate">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
              </div>
            )
          })}
        </Container>
      </div>

      <section className="bg-brand-green py-16 text-white sm:py-20">
        <Container className="text-center">
          <h2 className="text-[28px] font-bold sm:text-[34px] md:text-[42px]">Visit Us</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85 sm:text-lg">
            The best way to get a feel for Liddle Harverd is to come and see it for yourself. We&apos;d love
            to show you around.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="coral" size="lg">
              Plan a Visit
            </Button>
            <Button to="/admissions" variant="ghost" size="lg">
              Start Admissions
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
