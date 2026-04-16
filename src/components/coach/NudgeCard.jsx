/**
 * Figma-style nudge: white card, soft shadow, tail pointing down toward anchor.
 */
/** Default max width ≈ prior 280px + 30% */
const DEFAULT_MAX_W = 'max-w-[364px]'

export function NudgeCard({
  children,
  stepLabel,
  tailAlign = 'left-[28%]',
  className = '',
  maxWidthClass = DEFAULT_MAX_W,
}) {
  return (
    <div className={`relative w-full ${maxWidthClass} ${className}`}>
      {stepLabel ? (
        <span className="absolute -top-1 right-2 text-[11px] font-medium text-neutral-400">
          {stepLabel}
        </span>
      ) : null}
      <div className="relative rounded-[14px] bg-white px-4 py-3.5 text-left shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)]">
        {children}
      </div>
      {/* Tail — points down */}
      <div
        className={`pointer-events-none absolute -bottom-2 ${tailAlign} z-0 -translate-x-1/2`}
        aria-hidden
      >
        <div className="h-0 w-0 border-x-[9px] border-t-[11px] border-x-transparent border-t-white drop-shadow-sm" />
      </div>
    </div>
  )
}
