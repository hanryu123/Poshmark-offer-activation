import { NegotiationTooltip } from '../product/NegotiationTooltip.jsx'
import { CustomOfferInput } from './CustomOfferInput.jsx'
import { OfferOrDivider } from './OfferOrDivider.jsx'
import { PresetOfferButton } from './PresetOfferButton.jsx'
import { getListingOfferPresets } from './offerPresets.js'

export function OfferSelector({
  offerAmount,
  onSelectPreset,
  customInput,
  onCustomInputChange,
  locale = 'en',
}) {
  const presets = getListingOfferPresets()

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
      <div className="w-full pt-1">
        <NegotiationTooltip locale={locale === 'ko' ? 'ko' : 'en'} />
      </div>
    </section>
  )
}
