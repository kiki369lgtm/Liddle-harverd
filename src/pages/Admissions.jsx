import Seo from '../components/Seo/Seo'
import PageHero from '../components/PageHero/PageHero'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import AdmissionsJourney from '../sections/AdmissionsJourney/AdmissionsJourney'
import AdmissionsForm from '../components/AdmissionsForm/AdmissionsForm'
import ContactCard from '../components/ContactCard/ContactCard'
import Reveal from '../components/Reveal/Reveal'
import { PHONE_NUMBERS } from '../data/siteConfig'

export default function Admissions() {
  return (
    <>
      <Seo
        title="Admissions"
        description="Admissions are open at Liddle Harverd Kindergarten & Prep School. Enquire, visit, apply and begin your child's learning journey."
        path="/admissions"
      />

      <PageHero
        eyebrow="Admissions"
        title="Start Your Child's Learning Journey"
        description="Choosing a school is an important decision. We invite parents and guardians to learn more about Liddle Harverd, explore our learning environment and speak with our team about the next step for their child."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Admissions Are Open"
            tone="green"
            title="We're Welcoming New Enquiries"
            description="If you're considering Liddle Harverd for your child, we'd be happy to help you understand our programs and admission process."
            description2="Complete the enquiry form and our team can guide you through the next steps."
          />
        </Container>
      </section>

      <AdmissionsJourney />

      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-[28px]">Let&apos;s Start the Conversation</h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-slate">
              Have a question about admissions or our programs? Send us your details and message, and
              we&apos;ll help you with the information you need.
            </p>
            <div className="mt-6">
              <AdmissionsForm />
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            <ContactCard icon="phone" tone="green" title="Call Admissions">
              {PHONE_NUMBERS.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-semibold text-ink hover:text-brand-green">
                    {phone}
                  </a>
                </p>
              ))}
            </ContactCard>
            <ContactCard icon="mapPin" tone="coral" title="Visit the School">
              <p>Banana, Thimbigua</p>
              <p>Along Banana–Raini Limuru Road</p>
              <p>Opposite ACK St. Stephen Thimbigua Church</p>
            </ContactCard>
            <ContactCard icon="clock" tone="sky" title="Office Hours">
              <p>Opening hours to be confirmed by the school office.</p>
            </ContactCard>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
