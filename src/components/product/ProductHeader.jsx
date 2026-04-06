import { IconBack, IconHeart, IconShare } from '../icons/Icons.jsx'

/**
 * Overlays the hero image: back (left), share + Like pill (right).
 * Assumes parent is the image block below a separate StatusBar.
 */
export function ProductHeader({ onBack, className = '' }) {
  return (
    <header
      className={`pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-4 pt-2.5 ${className}`}
    >
      <button
        type="button"
        onClick={onBack}
        className="pointer-events-auto flex h-9 w-9 items-center justify-center text-black"
        aria-label="Back"
      >
        <IconBack className="h-[21px] w-[21px]" />
      </button>
      <div className="pointer-events-auto flex items-center gap-2.5">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-black"
          aria-label="Share"
        >
          <IconShare className="h-[21px] w-[21px]" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/95 px-3 py-1.5 text-[14px] font-normal text-black backdrop-blur-[2px]"
          aria-label="Like"
        >
          <IconHeart className="h-[17px] w-[17px]" />
          <span>Like</span>
        </button>
      </div>
    </header>
  )
}
