import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import MapPlaceholder from '../../components/MapPlaceholder/MapPlaceholder'
import Reveal from '../../components/Reveal/Reveal'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'
import { ADDRESS, PHONE_NUMBERS } from '../../data/siteConfig'

export default function Location() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Visit Us"
          tone="sky"
          title="Come Visit Us"
          description="Finding the right school is easier when you can experience the environment for yourself. Visit Liddle Harverd Kindergarten & Prep School and speak with our team about your child's learning journey."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <MapPlaceholder />
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Liddle Harverd Kindergarten &amp; Prep School</h3>
            <div className="mt-4 flex items-start gap-3">
              <Icon name="mapPin" className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-base leading-relaxed text-slate">
                {ADDRESS.area}
                <br />
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
              </p>
            </div>

            <div className="mt-5 space-y-2">
              {PHONE_NUMBERS.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-base font-semibold text-ink transition-colors hover:text-brand-green"
                >
                  <Icon name="phone" className="h-5 w-5 text-brand-green" />
                  {phone}
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/contact">Contact Us</Button>
              <Button to="/admissions" variant="outline">
                Apply Now
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
