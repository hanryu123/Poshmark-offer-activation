export function Modal({ open, onClose, children, className = '' }) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close"
        onClick={onClose}
      />
      <div className={`relative z-10 w-full max-w-[340px] ${className}`}>{children}</div>
    </div>
  )
}
