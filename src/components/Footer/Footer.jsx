import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Icon from '../Icon/Icon'
import { ADDRESS, PHONE_NUMBERS, SOCIAL_LINKS } from '../../data/siteConfig'

const SCHOOL_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Learning', to: '/learning' },
  { label: 'Activities', to: '/activities' },
  { label: 'Admissions', to: '/admissions' },
]

const QUICK_LINKS = [
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
  { label: 'Parent Portal', to: '/portal' },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wide text-brand-yellow-dark uppercase">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-white/80 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo showSubtitle={false} className="[&_span]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Helping young learners discover, grow and thrive.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-green"
              >
                <Icon name={social.id} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="School" links={SCHOOL_LINKS} />
        <FooterColumn title="Quick Links" links={QUICK_LINKS} />

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-brand-yellow-dark uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              <span>
                {ADDRESS.area}
                <br />
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
              </span>
            </li>
            {PHONE_NUMBERS.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-yellow" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {year} Liddle Harverd School. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
