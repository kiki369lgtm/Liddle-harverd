import Container from '../Container/Container'

// Shared banner for every internal page (About, Learning, Admissions, …) so
// each page opens with the same rhythm instead of a bespoke hero each time.
export default function PageHero({ eyebrow, title, description, description2, children }) {
  return (
    <section className="bg-brand-green-light py-16 sm:py-20">
      <Container className="text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-green uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-heading text-[36px] leading-[1.15] font-bold text-ink sm:text-[44px] md:text-[56px]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            {description}
          </p>
        )}
        {description2 && (
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            {description2}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </Container>
    </section>
  )
}
