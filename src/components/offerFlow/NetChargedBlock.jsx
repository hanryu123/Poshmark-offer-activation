import { computeOfferTotal, formatUsd, LISTING_PRICE } from './offerFlowMoney.js'

/**
 * "Net charged" row + dynamic savings badge (listing $75 − offer).
 */
export function NetChargedBlock({ offerAmount }) {
  const total = computeOfferTotal(offerAmount)
  const savings = Math.max(0, LISTING_PRICE - Number(offerAmount))

  return (
    <div className="border-b border-gray-100 py-3">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-black">Net charged</span>
        <span className="text-[15px] font-bold text-black">{formatUsd(total)}</span>
      </div>
      {savings > 0 && (
        <div className="mt-2 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-[12px] font-semibold text-green-700 ring-1 ring-green-200">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M2 5.5L4.2 7.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You're saving {formatUsd(savings)} compared to the listing price
          </span>
        </div>
      )}
    </div>
  )
}
