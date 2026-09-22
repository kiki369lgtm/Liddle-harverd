import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import Icon from '../../components/Icon/Icon'

// Sourced from the school's own Instagram (@liddle_harverd_banana). Swap
// for a higher-resolution photo whenever one is supplied — the section
// below just needs this path to change.
const HERO_IMAGE_SRC = '/photos/community-day.webp'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderImage
          src={HERO_IMAGE_SRC}
          alt="Learners taking part in an outdoor activity at Liddle Harverd"
          icon="sparkles"
          tone="green"
          ratio="fill"
          rounded={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/25"
          aria-hidden="true"
        />
      </div>

      <Container className="relative flex min-h-[560px] flex-col justify-center py-16 sm:min-h-[620px] lg:min-h-[720px] lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            Liddle Harverd Kindergarten &amp; Prep School
          </span>
          <h1 className="mt-5 font-heading text-[36px] leading-[1.1] font-bold text-white sm:text-[44px] lg:text-[56px]">
            Where Learning Comes to Life
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            At Liddle Harverd Kindergarten &amp; Prep School, learning goes beyond books and classrooms. We
            create a warm and engaging environment where young learners are encouraged to discover,
            explore, play, build confidence and develop skills that support them as they grow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#more-than-a-classroom" size="lg">
              Explore Our School
            </Button>
            <Button to="/admissions" variant="onDark" size="lg">
              Admissions &amp; Enquiries
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/90 lg:hidden">
            <Icon name="sprout" className="h-4 w-4 text-brand-yellow" />
            Learn &bull; Play &bull; Explore &bull; Grow
          </p>
        </div>
      </Container>

      {/* Floating elements: desktop only, kept to three and away from the
          text column so they read as layered information, not clutter. */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <span className="pointer-events-auto absolute top-16 right-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-soft backdrop-blur-sm">
          <Icon name="footprints" className="h-4 w-4 text-brand-coral" />
          Active Learning
        </span>

        <div className="pointer-events-auto absolute right-10 bottom-10 max-w-[230px] rounded-card bg-white/95 p-5 shadow-lift backdrop-blur-sm">
          <p className="font-heading text-sm font-bold text-brand-green">Learn &bull; Play &bull; Explore &bull; Grow</p>
          <p className="mt-1.5 text-sm text-slate">A learning experience beyond the classroom</p>
        </div>

        <div className="pointer-events-auto absolute bottom-14 left-10 rounded-card bg-white/95 px-4 py-3 shadow-soft backdrop-blur-sm">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Icon name="mapPin" className="h-4 w-4 text-brand-green" />
            Banana, Thimbigua
          </p>
          <p className="mt-0.5 text-xs text-slate">Kiambaa, Kiambu</p>
        </div>
      </div>
    </section>
  )
}
