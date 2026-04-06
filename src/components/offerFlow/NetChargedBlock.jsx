import { formatSavingsVersusListing, computeOfferTotal, formatUsd } from './offerFlowMoney.js'

/**
 * "Net charged" row + dynamic savings line (listing $75 − offer).
 */
export function NetChargedBlock({ offerAmount }) {
  const total = computeOfferTotal(offerAmount)
  const savingsLine = formatSavingsVersusListing(offerAmount)

  return (
    <div className="border-b border-gray-100 py-3">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-black">Net charged</span>
        <span className="text-[15px] font-bold text-black">{formatUsd(total)}</span>
      </div>
      <p className="mt-2 text-[14px] leading-snug text-neutral-600">{savingsLine}</p>
    </div>
  )
}
