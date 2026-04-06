/**
 * Optional rounded “device” frame for previews (matches ~iPhone corner radius in mocks).
 */
export function PhoneBezel({ children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-[40px] border border-black/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.18)] ${className}`}
    >
      <div className="rounded-[40px] bg-white">{children}</div>
    </div>
  )
}
