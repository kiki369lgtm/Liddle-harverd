import Seo from '../components/Seo/Seo'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'

// Shared shell for /privacy and /terms. Real policy text will replace this
// once the school provides it — kept as a genuine page (not a dead link)
// in the meantime.
export default function LegalPlaceholder({ title, path }) {
  return (
    <>
      <Seo title={title} description={`${title} for Liddle Harverd Kindergarten & Prep School.`} path={path} />
      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-2xl text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-slate">
            This page will contain our {title.toLowerCase()} once it has been finalised by the school. For
            any questions in the meantime, please get in touch directly.
          </p>
          <Button to="/contact" variant="outline" className="mt-7">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  )
}
