import { useState } from 'react'
import Seo from '../components/Seo/Seo'
import Container from '../components/Container/Container'
import FormField from '../components/FormField/FormField'
import Button from '../components/Button/Button'
import Icon from '../components/Icon/Icon'
import { PHONE_NUMBERS } from '../data/siteConfig'

export default function Portal() {
  const [showNotice, setShowNotice] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setShowNotice(true)
  }

  return (
    <>
      <Seo
        title="Parent Portal"
        description="The Liddle Harverd Parent Portal — access to your child's school information and updates is coming soon."
        path="/portal"
      />

      <section className="bg-brand-green-light py-20 sm:py-28">
        <Container className="flex justify-center">
          <div className="w-full max-w-md rounded-card bg-white p-8 shadow-lift sm:p-10">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
              <Icon name="bookOpen" className="h-7 w-7" />
            </span>
            <h1 className="mt-5 text-center font-heading text-2xl font-bold sm:text-3xl">
              Your Connection to School Life
            </h1>
            <p className="mt-3 text-center text-base leading-relaxed text-slate">
              The Liddle Harverd Parent Portal is designed to provide parents with a convenient way to
              stay connected with their child&apos;s school experience.
            </p>

            {showNotice ? (
              <div className="mt-8 rounded-btn bg-brand-yellow-light p-5 text-center">
                <p className="font-semibold text-ink">Coming Soon</p>
                <p className="mt-2 text-sm text-slate">
                  We&apos;re preparing the next phase of the platform, which will introduce digital tools
                  designed to make communication and access to school information easier for parents.
                </p>
                <p className="mt-2 text-sm text-slate">
                  In the meantime, please contact the school office directly at{' '}
                  <a href={`tel:${PHONE_NUMBERS[0].replace(/\s+/g, '')}`} className="font-semibold text-brand-green">
                    {PHONE_NUMBERS[0]}
                  </a>
                  .
                </p>
                <Button variant="outline" className="mt-5" onClick={() => setShowNotice(false)}>
                  Back to Sign In
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <FormField label="Email / Phone" name="identifier" type="text" autoComplete="username" />
                <FormField label="Password" name="password" type="password" autoComplete="current-password" />
                <Button type="submit" className="w-full justify-center" size="lg">
                  Sign In
                </Button>
              </form>
            )}

            <p className="mt-6 text-center text-xs text-slate">
              Parent Portal accounts are issued by the school office and are not yet available online.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
