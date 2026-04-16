/**
 * Offer page — variant B (sandbox / alternate UI tests).
 * Diverge freely from MakeOfferScreen.jsx without affecting variant A.
 */
import { useState } from 'react'
import { IMG } from '../../constants/assets.js'
import { useOfferCheckout } from '../../context/useOfferCheckout.js'
import { DimLayer } from '../coach/DimLayer.jsx'
import { NudgeCard } from '../coach/NudgeCard.jsx'
import { MobileShell } from '../common/MobileShell.jsx'
import { PrimaryBlackButton } from '../ui/PrimaryBlackButton.jsx'
import { MakeOfferHeader } from './MakeOfferHeader.jsx'
import { OfferDisclaimer } from './OfferDisclaimer.jsx'
import { DynamicOfferSlider } from './DynamicOfferSlider.jsx'
import { PriceSummaryCard } from './PriceSummaryCard.jsx'
import { ProductCardRow } from './ProductCardRow.jsx'

/** @typedef {'coach_dimmed' | 'form'} OfferCoachPhase */

export function MakeOfferScreenB() {
  const { offerAmount, setOfferAmount } = useOfferCheckout()
  const [coachPhase, setCoachPhase] = useState(
    /** @type {OfferCoachPhase} */ ('coach_dimmed'),
  )

  const showForm = coachPhase === 'form'
  const coachDimmed = coachPhase === 'coach_dimmed'

  return (
    <MobileShell className="relative min-h-[100dvh] bg-white pb-8">
      <div className="border-b border-amber-200/80 bg-amber-50 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-amber-900">
        Offer UI · Variant B (test)
      </div>
      <MakeOfferHeader />
      <div className="space-y-6 px-6 pt-6">
        <ProductCardRow
          imageSrc={IMG.productTote}
          imageAlt="Stussy Military Green Small Tote Bag"
          title="Stussy Military Green Small Tote Bag"
          price="$75"
          sizeLabel="Size: OS"
        />

        {coachDimmed ? <DimLayer onDismiss={() => setCoachPhase('form')} showClose /> : null}

        <div
          className={
            coachDimmed
              ? 'relative z-[70] space-y-4'
              : 'space-y-6'
          }
        >
          {coachDimmed ? (
            <NudgeCard tailAlign="left-[50%]">
              <p className="text-center text-[14px] font-semibold leading-snug text-neutral-900">
                Move the bar to set your desired offer price
              </p>
            </NudgeCard>
          ) : null}

          <DynamicOfferSlider
            value={offerAmount}
            onChange={setOfferAmount}
            hideManualInput={coachDimmed}
            autoFocusSlider={coachDimmed}
          />

          {showForm ? (
            <>
              <PriceSummaryCard offerAmount={offerAmount} />
              <div className="space-y-4 pt-1">
                <OfferDisclaimer />
                <PrimaryBlackButton>Next</PrimaryBlackButton>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </MobileShell>
  )
}
