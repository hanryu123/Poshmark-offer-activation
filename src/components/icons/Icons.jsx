export function IconBack({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export function IconShare({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v10" />
      <path d="M8 7l4-4 4 4" />
      <rect x="4" y="15" width="16" height="6" rx="2" />
    </svg>
  )
}

export function IconHeart({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-6.716-4.05-9-8.25C.5 9.5.75 6.3 3.2 4.5 5.65 2.7 8.5 3.5 12 7c3.5-3.5 6.35-4.3 8.8-2.5 2.45 1.8 2.7 5 0 8.25C18.716 16.95 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconChevronRight({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export function IconCard({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconPayPal({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#003087"
        d="M7.5 19h2.2l.5-3.1h2.1c2 0 3.6-.9 4.1-3.5.2-1.1 0-2-.6-2.6-.7-.8-1.9-1.2-3.5-1.2H9.1L7.5 19z"
      />
      <path
        fill="#009cde"
        d="M17.8 10.1c-.5-2.6-2.1-3.5-4.1-3.5h-4.2L7.5 19h2.2l.5-3.1h2.1c1.6 0 2.8-.4 3.5-1.2.6-.6.8-1.5.6-2.6z"
      />
    </svg>
  )
}

export function IconInfoSmall({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  )
}
