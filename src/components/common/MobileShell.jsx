/**
 * Constrains content to a mobile-width column (design reference ~375px).
 */
export function MobileShell({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[375px] bg-white text-black antialiased ${className}`}
    >
      {children}
    </div>
  )
}
