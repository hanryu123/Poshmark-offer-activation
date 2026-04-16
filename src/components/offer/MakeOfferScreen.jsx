import { useCallback, useEffect, useMemo, useState } from 'react'
import { IMG } from '../../constants/assets.js'
import { SELLER_LIKELY_MAX, SELLER_LIKELY_MIN } from '../../constants/offerRanges.js'
import { useOfferCheckout } from '../../context/useOfferCheckout.js'
import { parseOfferNumber } from '../offerFlow/offerFlowMoney.js'
import { DimLayer } from '../coach/DimLayer.jsx'
import { NudgeCard } from '../coach/NudgeCard.jsx'
import { MobileShell } from '../common/MobileShell.jsx'
import { PrimaryBlackButton } from '../ui/PrimaryBlackButton.jsx'
import { MakeOfferHeader } from './MakeOfferHeader.jsx'
import { OfferDisclaimer } from './OfferDisclaimer.jsx'
import { OfferSelector } from './OfferSelector.jsx'
import { PriceSummaryCard } from './PriceSummaryCard.jsx'
import { ProductCardRow } from './ProductCardRow.jsx'
import { CustomOfferInput } from './CustomOfferInput.jsx'

function effectiveOfferAmount(offerAmount, customInput) {
  const t = customInput.trim()
  if (t === '') return offerAmount
  const p = parseOfferNumber(t)
  return p > 0 ? p : offerAmount
}

/** @typedef {'coach_dimmed' | 'form'} OfferCoachPhase */

/** Default / variant A — pair with MakeOfferScreenB for UI experiments */
export function MakeOfferScreen() {
  const { offerAmount, setOfferAmount } = useOfferCheckout()
  const [customInput, setCustomInput] = useState('')
  const [coachPhase, setCoachPhase] = useState(
    /** @type {OfferCoachPhase} */ ('coach_dimmed'),
  )

  const offerForTotal = useMemo(
    () => effectiveOfferAmount(offerAmount, customInput),
    [offerAmount, customInput],
  )

  useEffect(() => {
    setOfferAmount(offerForTotal)
  }, [offerForTotal, setOfferAmount])

  const handleSelectPreset = useCallback(
    (value) => {
      setOfferAmount(value)
      setCustomInput('')
    },
    [setOfferAmount],
  )

  const handleCustomInputChange = useCallback((value) => {
    setCustomInput(value)
  }, [])

  const showForm = coachPhase === 'form'

  return (
    <MobileShell className="relative min-h-[100dvh] bg-white pb-8">
      <div className="border-b border-neutral-200/90 bg-neutral-50 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-neutral-600">
        Offer UI · Variant A
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

        {coachPhase === 'coach_dimmed' && (
          <>
            <div className="pointer-events-none opacity-[0.22]">
              <div className="h-40 rounded-xl bg-neutral-100" aria-hidden />
            </div>
            <DimLayer onDismiss={() => setCoachPhase('form')} showClose />
            <div className="pointer-events-none fixed inset-x-0 top-[26%] z-[70] flex justify-center px-5">
              <div className="pointer-events-auto w-full max-w-[340px] space-y-4">
                <NudgeCard tailAlign="left-[50%]">
                  <p className="text-center text-[14px] font-semibold leading-snug text-neutral-900">
                    Please enter your desired price.
                  </p>
                </NudgeCard>
                <div className="rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    Create your own offer
                  </p>
                  <CustomOfferInput
                    placeholder="$0.00"
                    value={customInput}
                    readOnly
                    className="mt-2"
                    tabIndex={-1}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {showForm && (
          <>
            <OfferSelector
              offerAmount={offerAmount}
              onSelectPreset={handleSelectPreset}
              customInput={customInput}
              onCustomInputChange={handleCustomInputChange}
              sellerLikelyRange={{ min: SELLER_LIKELY_MIN, max: SELLER_LIKELY_MAX }}
            />
            <PriceSummaryCard offerAmount={offerForTotal} />
            <div className="space-y-4 pt-1">
              <OfferDisclaimer />
              <PrimaryBlackButton>Next</PrimaryBlackButton>
            </div>
          </>
        )}
      </div>
    </MobileShell>
  )
}
