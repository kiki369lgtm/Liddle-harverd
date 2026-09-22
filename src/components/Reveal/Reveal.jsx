import { useReveal } from '../../hooks/useReveal'

// Wraps children in a fade-up-on-scroll effect. `delay` accepts a Tailwind
// arbitrary-friendly ms value (e.g. 100, 200) for staggering siblings.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(18px)',
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
