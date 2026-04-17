import { useOfferCheckout } from '../../context/useOfferCheckout.js'
import { MobileShell } from '../common/MobileShell.jsx'
import { PrimaryBlackButton } from '../ui/PrimaryBlackButton.jsx'

/**
 * Deep-link target after tapping the expired-offer notification (category-scoped search).
 */
export function SuggestedItemsScreen({ onBack }) {
  const { listing } = useOfferCheckout()

  return (
    <MobileShell className="min-h-[100dvh] bg-white pb-8">
      <header className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full px-2 py-1 text-[15px] font-semibold text-neutral-700 hover:bg-neutral-100"
        >
          ← Back
        </button>
        <h1 className="text-[17px] font-bold text-neutral-900">Similar items</h1>
      </header>

      <div className="space-y-2 px-5 pt-6">
        <p className="text-[14px] text-neutral-500">
          Search ·{' '}
          <span className="font-semibold text-neutral-800">{listing.categoryLabel}</span>
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700">
          Showing results for sellers with faster response times in this category.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[4/5] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200"
            />
          ))}
        </div>
        <div className="pt-8">
          <PrimaryBlackButton type="button" className="w-full">
            Browse {listing.categoryLabel}
          </PrimaryBlackButton>
        </div>
      </div>
    </MobileShell>
  )
}
