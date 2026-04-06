const OFFER_BLUE = '#0077C0'

export function OfferButton({ children = 'Offer', onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`animate-offer-emphasis h-[48px] w-full rounded-md border-2 bg-white text-[16px] font-semibold shadow-[0_0_0_0_rgba(0,119,192,0.25)] ${className}`}
      style={{ borderColor: OFFER_BLUE, color: OFFER_BLUE }}
    >
      {children}
    </button>
  )
}
