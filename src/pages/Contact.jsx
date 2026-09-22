import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactCard from '../components/ContactCard/ContactCard'
import MapPlaceholder from '../components/MapPlaceholder/MapPlaceholder'
import Reveal from '../components/Reveal/Reveal'
import { ADDRESS, PHONE_NUMBERS, OPENING_HOURS_PLACEHOLDER } from '../data/siteConfig'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Liddle Harverd Kindergarten & Prep School in Banana, Thimbigua, Kiambu. Call, message or plan a visit."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let's Connect"
        description="Whether you're a parent looking for more information, a prospective family considering Liddle Harverd, or simply interested in learning more about our school, we're happy to hear from you."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Talk to Us"
            tone="green"
            title="We're Here to Help"
            description="For admissions enquiries, program information or general questions, reach out to our school team."
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ContactCard icon="phone" tone="green" title="Call Us">
              {PHONE_NUMBERS.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-semibold text-ink hover:text-brand-green">
                    {phone}
                  </a>
                </p>
              ))}
            </ContactCard>
            <ContactCard icon="mapPin" tone="coral" title="Visit Us">
              <p>{ADDRESS.area}</p>
              <p>{ADDRESS.line1}</p>
              <p>{ADDRESS.line2}</p>
            </ContactCard>
            <ContactCard icon="clock" tone="sky" title="Opening Hours">
              <p>{OPENING_HOURS_PLACEHOLDER}</p>
            </ContactCard>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-[28px]">Have a Question?</h2>
            <p className="mt-2 max-w-md text-base leading-relaxed text-slate">
              Fill in the form and tell us what you&apos;d like to know. Whether it&apos;s about admissions,
              programs or visiting the school, we&apos;re ready to help.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-2xl font-semibold sm:text-[28px]">Come and Experience Liddle Harverd</h2>
            <p className="mt-2 max-w-md text-base leading-relaxed text-slate">
              Finding the right school is easier when you can experience the environment for yourself.
              Visit Liddle Harverd Kindergarten &amp; Prep School and speak with our team about your
              child&apos;s learning journey.
            </p>
            <div className="mt-6">
              <MapPlaceholder />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
