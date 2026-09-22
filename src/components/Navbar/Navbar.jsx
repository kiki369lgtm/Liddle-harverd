import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, PORTAL_LINK } from '../../data/navigation'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isAdmissions = link.to === '/admissions'
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => {
                  if (isAdmissions) {
                    return `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-green text-white'
                        : 'bg-brand-green-light text-brand-green hover:bg-brand-green hover:text-white'
                    }`
                  }
                  return `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-brand-green' : 'text-ink hover:text-brand-green'
                  }`
                }}
              >
                {link.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to={PORTAL_LINK.to} variant="outline" size="sm">
            {PORTAL_LINK.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-btn border border-line text-ink lg:hidden"
        >
          <Icon name="menu" className="h-6 w-6" />
        </button>
      </Container>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
