import Seo from '../components/Seo/Seo'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for could not be found." path="/404" />
      <section className="bg-white py-24 sm:py-32">
        <Container className="text-center">
          <p className="font-heading text-6xl font-bold text-brand-green">404</p>
          <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Page Not Found</h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Button to="/" className="mt-8">
            Back to Home
          </Button>
        </Container>
      </section>
    </>
  )
}
