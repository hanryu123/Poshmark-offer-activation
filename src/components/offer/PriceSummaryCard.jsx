import { computeOfferTotal, formatUsd, MOCK_SHIPPING, MOCK_TAX } from '../offerFlow/offerFlowMoney.js'
import { SummaryRow } from './SummaryRow.jsx'

export function PriceSummaryCard({ offerAmount }) {
  const total = computeOfferTotal(offerAmount)

  return (
    <section className="rounded-2xl bg-gray-50 p-5">
      <h2 className="mb-4 text-[16px] font-bold text-black">Price Summary</h2>
      <div className="space-y-3">
        <SummaryRow label="Offer Amount:" value={formatUsd(offerAmount)} />
        <SummaryRow label="Est. Tax:" value={formatUsd(MOCK_TAX)} />
        <SummaryRow label="Est. Shipping:" value={formatUsd(MOCK_SHIPPING)} />
      </div>
      <div className="my-4 border-t border-gray-200" />
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[17px] font-bold text-black">Est. Total:</span>
        <span className="text-lg font-bold tabular-nums text-black">{formatUsd(total)}</span>
      </div>
    </section>
  )
}
