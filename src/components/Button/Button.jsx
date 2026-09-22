import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'

const VARIANTS = {
  primary:
    'bg-brand-green text-white shadow-soft hover:bg-brand-green-dark active:bg-brand-green-dark',
  outline:
    'border-2 border-brand-green text-brand-green bg-transparent hover:bg-brand-green-light',
  coral: 'bg-brand-coral text-white shadow-soft hover:bg-brand-coral-dark',
  ghost: 'bg-white text-ink border border-line hover:border-brand-green/40 hover:text-brand-green',
  // For use over a photo/dark background (e.g. the homepage hero), where
  // the green/white variants above would lose contrast against the image.
  onDark: 'border-2 border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white',
  link: 'bg-transparent text-brand-green px-0 py-0 hover:text-brand-green-dark',
}

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
}

// Polymorphic CTA: pass `to` for an internal route, `href` for an external
// link/tel/mailto, or neither for a submit/action button.
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) {
  const isLink = variant === 'link'
  const base = isLink
    ? 'inline-flex items-center gap-1.5 font-semibold transition-colors duration-200'
    : 'inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-all duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60'

  const classes = `${base} ${VARIANTS[variant] ?? VARIANTS.primary} ${isLink ? '' : (SIZES[size] ?? SIZES.md)} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} className="h-[1.1em] w-[1.1em] shrink-0" />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className="h-[1.1em] w-[1.1em] shrink-0" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={rest.type ?? 'button'} className={classes} {...rest}>
      {content}
    </button>
  )
}
