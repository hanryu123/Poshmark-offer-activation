const SCREENS = [
  { id: 'product', label: 'Listing' },
  { id: 'makeOffer', label: 'Offer A' },
  { id: 'makeOfferB', label: 'Offer B' },
  { id: 'shipping', label: 'Address' },
  { id: 'offerPayment', label: 'Pay setup' },
  { id: 'offerSubmit', label: 'Submit' },
]

export function ScreenPicker({ value, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-1 py-2 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[420px] justify-between gap-0.5 overflow-x-auto px-1 pb-[env(safe-area-inset-bottom)]">
        {SCREENS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange(s.id)}
            className={`shrink-0 rounded-full px-2.5 py-2 text-[11px] font-semibold ${
              value === s.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
