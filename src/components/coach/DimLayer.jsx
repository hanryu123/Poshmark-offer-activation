/**
 * Full-screen dim + top-right close (X). Close sits above coach overlays (z-80).
 */
export function DimLayer({
  onDismiss,
  zBackdrop = 'z-[55]',
  opacityClass = 'bg-black/65',
  showClose = true,
}) {
  return (
    <>
      <button
        type="button"
        className={`fixed inset-0 ${opacityClass} ${zBackdrop} cursor-default`}
        onClick={onDismiss}
        aria-label="Dismiss overlay"
      />
      {showClose ? (
        <button
          type="button"
          className="pointer-events-auto fixed right-4 top-[max(12px,env(safe-area-inset-top))] z-[80] flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-[22px] font-light leading-none text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          onClick={(e) => {
            e.stopPropagation()
            onDismiss()
          }}
          aria-label="Close"
        >
          ×
        </button>
      ) : null}
    </>
  )
}
