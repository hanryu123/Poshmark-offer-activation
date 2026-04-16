import { useMemo } from 'react'
import { isOfferInLikelyRange } from '../../constants/offerRanges.js'
import { parseOfferNumber } from '../offerFlow/offerFlowMoney.js'
import { NegotiationTooltip } from '../product/NegotiationTooltip.jsx'
import { CustomOfferInput } from './CustomOfferInput.jsx'
import { OfferOrDivider } from './OfferOrDivider.jsx'
import { PresetOfferButton } from './PresetOfferButton.jsx'
import { getListingOfferPresets } from './offerPresets.js'

function effectiveOfferAmount(offerAmount, customInput) {
  const t = customInput.trim()
  if (t === '') return offerAmount
  const p = parseOfferNumber(t)
  return p > 0 ? p : offerAmount
}

export function OfferSelector({
  offerAmount,
  onSelectPreset,
  customInput,
  onCustomInputChange,
  locale = 'en',
  sellerLikelyRange = { min: 60, max: 70 },
}) {
  const presets = getListingOfferPresets()

  const effective = useMemo(
    () => effectiveOfferAmount(offerAmount, customInput),
    [offerAmount, customInput],
  )

  /** Show persistent red frame when current offer is outside likely range */
  const outOfRange = useMemo(() => {
    return !isOfferInLikelyRange(effective)
  }, [effective])

  return (
    <section className="space-y-4">
      <h2 className="text-[16px] font-bold text-black">Select Your Offer</h2>
      <div className="grid grid-cols-3 gap-3">
        {presets.map((p) => {
          const selected =
            customInput.trim() === '' && Math.abs(offerAmount - p.value) < 0.005
          return (
            <PresetOfferButton
              key={p.id}
              value={p.value}
              percentOff={p.percentOff}
              selected={selected}
              onClick={() => onSelectPreset(p.value)}
            />
          )
        })}
      </div>
      <OfferOrDivider />
      <CustomOfferInput
        placeholder="Create Your Own Offer"
        value={customInput}
        onChange={(e) => onCustomInputChange(e.target.value)}
      />
      <div
        className={`w-full rounded-xl pt-1 transition-[box-shadow] duration-200 ${
          outOfRange
            ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-white'
            : ''
        }`}
      >
        <NegotiationTooltip
          locale={locale === 'ko' ? 'ko' : 'en'}
          sellerLikelyMin={sellerLikelyRange.min}
          sellerLikelyMax={sellerLikelyRange.max}
        />
      </div>
    </section>
  )
}
