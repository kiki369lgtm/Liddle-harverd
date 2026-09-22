// Enforces the global max content width (1280px) and the mobile/tablet/
// desktop horizontal padding scale from the design system in one place.
export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`mx-auto max-w-[1280px] px-[18px] sm:px-6 lg:px-8 ${className}`}>{children}</Tag>
}
