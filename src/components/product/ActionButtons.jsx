import { BuyNowButton } from './BuyNowButton.jsx'
import { OfferButton } from './OfferButton.jsx'

export function ActionButtons({
  offerLabel = 'Offer',
  buyLabel = 'Buy now at $75',
  onOffer,
  onBuy,
}) {
  return (
    <div className="flex w-full gap-2.5">
      <div className="min-w-0 flex-[0.42]">
        <OfferButton onClick={onOffer}>{offerLabel}</OfferButton>
      </div>
      <div className="min-w-0 flex-1">
        <BuyNowButton onClick={onBuy}>{buyLabel}</BuyNowButton>
      </div>
    </div>
  )
}
