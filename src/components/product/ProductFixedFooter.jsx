import { BuyNowButton } from './BuyNowButton.jsx'
import { OfferButton } from './OfferButton.jsx'
import { DimLayer } from '../coach/DimLayer.jsx'
import { NudgeCard } from '../coach/NudgeCard.jsx'

/**
 * Bottom CTA.
 * `coachMode`: full-screen dim; only Offer column + nudge stay above the layer (Buy under dim).
 */
export function ProductFixedFooter({
  onOffer,
  onBuy,
  coachMode = false,
  onDismissCoach,
}) {
  if (coachMode) {
    return (
      <>
        <div className="pointer-events-none fixed inset-x-0 bottom-20 z-40 flex justify-center">
          <div className="flex w-full max-w-[375px] flex-row items-end gap-3 border-t border-neutral-200/80 bg-transparent px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
            <div className="flex w-[55%] min-w-[210px] max-w-[68%] flex-col items-center" />
            <div className="min-w-0 flex-1">
              <div className="pointer-events-auto">
                <BuyNowButton onClick={onBuy} />
              </div>
            </div>
          </div>
        </div>

        <DimLayer onDismiss={onDismissCoach} showClose />

        <div className="pointer-events-none fixed inset-x-0 bottom-20 z-[70] flex justify-center">
          <div className="w-full max-w-[375px] border-t border-transparent bg-transparent px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
            <div className="flex w-full flex-row items-end gap-3">
              <div className="flex w-[55%] min-w-[210px] max-w-[68%] flex-col items-center">
                <div className="pointer-events-auto flex w-full flex-col items-center">
                  <div className="mb-2 w-full">
                    <NudgeCard tailAlign="left-[50%]" maxWidthClass="max-w-none">
                      <p className="whitespace-nowrap text-center text-[14px] font-semibold leading-tight text-neutral-900">
                        Price is negotiable
                      </p>
                      <p className="mt-1 whitespace-nowrap text-center text-[13px] font-medium leading-tight text-neutral-600">
                        Tap Offer to name your price.
                      </p>
                    </NudgeCard>
                  </div>
                  <div className="w-full">
                    <OfferButton onClick={onOffer} />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1" aria-hidden />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center">
      <div className="pointer-events-auto w-full max-w-[375px] border-t border-neutral-200/80 bg-transparent px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <div className="flex flex-row items-end gap-3">
          <div className="flex w-[55%] min-w-[210px] max-w-[68%] flex-col items-center">
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
