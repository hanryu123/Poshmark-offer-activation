import { useCallback, useEffect, useMemo, useState } from 'react'
import { IMG } from '../../constants/assets.js'
import { useOfferCheckout } from '../../context/useOfferCheckout.js'
import { parseOfferNumber } from '../offerFlow/offerFlowMoney.js'
import { MobileShell } from '../common/MobileShell.jsx'
import { PrimaryBlackButton } from '../ui/PrimaryBlackButton.jsx'
import { MakeOfferHeader } from './MakeOfferHeader.jsx'
import { OfferDisclaimer } from './OfferDisclaimer.jsx'
import { OfferSelector } from './OfferSelector.jsx'
import { PriceSummaryCard } from './PriceSummaryCard.jsx'
import { ProductCardRow } from './ProductCardRow.jsx'

function effectiveOfferAmount(offerAmount, customInput) {
  const t = customInput.trim()
  if (t === '') return offerAmount
  const p = parseOfferNumber(t)
  return p > 0 ? p : offerAmount
}

export function MakeOfferScreen() {
  const { offerAmount, setOfferAmount } = useOfferCheckout()
  const [customInput, setCustomInput] = useState('')

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

  return (
    <MobileShell className="min-h-[100dvh] bg-white pb-8">
      <MakeOfferHeader />
      <div className="space-y-6 px-6 pt-6">
        <ProductCardRow
          imageSrc={IMG.productTote}
          imageAlt="Stussy Military Green Small Tote Bag"
          title="Stussy Military Green Small Tote Bag"
          price="$75"
          sizeLabel="Size: OS"
        />
        <OfferSelector
          offerAmount={offerAmount}
          onSelectPreset={handleSelectPreset}
          customInput={customInput}
          onCustomInputChange={handleCustomInputChange}
        />
        <PriceSummaryCard offerAmount={offerForTotal} />
        <div className="space-y-4 pt-1">
          <OfferDisclaimer />
          <PrimaryBlackButton>Next</PrimaryBlackButton>
        </div>
      </div>
    </MobileShell>
  )
}
