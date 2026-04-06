import { useEffect, useRef, useState } from 'react'

/**
 * Full-bleed horizontal gallery: one main image per slide only (no thumbnails / nested media).
 */
export function ProductImageGallery({ slides, alt }) {
  const scrollerRef = useRef(null)
  const total = slides.length
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el || total === 0) return

    const onScroll = () => {
      const w = el.clientWidth || 1
      const i = Math.round(el.scrollLeft / w)
      setActive(Math.min(total - 1, Math.max(0, i)))
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [total])

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div
          ref={scrollerRef}
          className="flex aspect-[4/5] w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden bg-[#ececec] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="relative h-full min-h-0 w-full shrink-0 snap-center snap-always overflow-hidden bg-[#ececec]"
            >
              <img
                src={src}
                alt={i === 0 ? alt : ''}
                aria-hidden={i !== 0}
                className="h-full w-full object-cover object-center"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-1 text-[12px] font-medium tabular-nums text-white">
          {active + 1}/{total}
        </div>
      </div>

      <div className="flex justify-center gap-2 pt-2 pb-0.5">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`rounded-full ${
              i === active ? 'h-2 w-2 bg-black' : 'h-1.5 w-1.5 bg-neutral-300'
            }`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  )
}
