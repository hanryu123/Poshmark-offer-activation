/**
 * Poshmark “P” mark — rounded tile + white monogram (brand-aligned maroon).
 */
export function PoshmarkLogoMark({ size = 44, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <rect width="48" height="48" rx="11" fill="#9D2235" />
      <path
        fill="#fff"
        d="M22 14h6.2c4.1 0 7.4 3.1 7.4 7.2 0 4-3.2 7.1-7.3 7.1H26v9.7h-4V14zm4 3.6v7.2h2.4c2 0 3.5-1.5 3.5-3.6s-1.5-3.6-3.5-3.6H26z"
      />
    </svg>
  )
}
