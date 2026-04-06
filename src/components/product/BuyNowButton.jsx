export function BuyNowButton({ children = 'Buy now at $75', onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[48px] w-full rounded-md bg-black text-[14px] font-semibold leading-tight text-white ${className}`}
    >
      {children}
    </button>
  )
}
