import { BuyNowButton } from './BuyNowButton.jsx'
import { NegotiationTooltip } from './NegotiationTooltip.jsx'
import { OfferButton } from './OfferButton.jsx'

/**
 * Viewport-fixed bottom CTA — content scrolls above; bar does not cover the scroll region as an extra layer.
 */
export function ProductFixedFooter({ onOffer, onBuy }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center">
      <div className="pointer-events-auto w-full max-w-[375px] border-t border-neutral-200/80 bg-transparent px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <div className="flex w-full justify-start pb-2">
          <NegotiationTooltip locale="en" variant="listing" />
        </div>
        <div className="flex flex-row items-end gap-3">
          <div className="flex w-[42%] min-w-0 flex-col items-center">
            <div className="w-full">
              <OfferButton onClick={onOffer} />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <BuyNowButton onClick={onBuy} />
          </div>
        </div>
      </div>
    </div>
  )
}
