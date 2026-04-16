import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LISTING_PRICE } from '../offerFlow/offerFlowMoney.js'

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

function roundStep(n, step) {
  return Math.round(n / step) * step
}

/** Discount % off listing (0 = full price, 40 = 40% off). Continuous [0, maxDiscount]. */
function discountPercentOff(listing, offer) {
  if (listing <= 0) return 0
  return ((listing - offer) / listing) * 100
}

/**
 * Five tiers by discount % (no overlap): (0,5], (5,10], (10,20], (20,30], (30,40].
 * Boundaries: ≤5, ≤10, ≤20, ≤30, else ≤40.
 */
function tierFromDiscountPercent(d) {
  if (d <= 5) return 0
  if (d <= 10) return 1
  if (d <= 20) return 2
  if (d <= 30) return 3
  return 4
}

const TIER_STYLES = [
  {
    accent: '#2E7D32',
    messageColor: '#2E7D32',
    message: 'Strong Offer! Seller usually accepts instantly.',
  },
  {
    accent: '#4CAF50',
    messageColor: '#4CAF50',
    message: 'Good Offer. Seller likely accepts.',
  },
  {
    accent: '#FFEB3B',
    messageColor: '#5D4037',
    message: 'Fair Offer. Seller might send a counteroffer.',
  },
  {
    accent: '#FF9800',
    messageColor: '#E65100',
    message: 'Low chance. Seller may decline.',
  },
  {
    accent: '#F44336',
    messageColor: '#C62828',
    message: 'Very low chance. Consider raising your offer.',
  },
]

/**
 * Web (Vite/React) dynamic offer slider — $1 steps.
 * Left = max discount (default 40% off listing); right = 0% off (full list price).
 */
export function DynamicOfferSlider({
  listingPrice = LISTING_PRICE,
  /** Max discount % off listing; min offer = listing × (1 − maxDiscountPercent/100). */
  maxDiscountPercent = 40,
  value: controlledValue,
  onChange,
  manualPlaceholder = 'Create Your Own Offer',
  hideManualInput = false,
  autoFocusSlider = false,
}) {
  const rangeRef = useRef(null)

  const minOffer = Math.round(listingPrice * (1 - maxDiscountPercent / 100))
  const maxOffer = Math.round(listingPrice)

  useEffect(() => {
    if (!autoFocusSlider || !rangeRef.current) return
    rangeRef.current.focus()
  }, [autoFocusSlider])

  const [internal, setInternal] = useState(() =>
    clamp(roundStep((minOffer + maxOffer) / 2, 1), minOffer, maxOffer),
  )

  const amount = controlledValue !== undefined ? controlledValue : internal

  const setAmount = useCallback(
    (v) => {
      const snapped = clamp(roundStep(Number(v), 1), minOffer, maxOffer)
      if (controlledValue === undefined) setInternal(snapped)
      onChange?.(snapped)
    },
    [controlledValue, minOffer, maxOffer, onChange],
  )

  useEffect(() => {
    if (controlledValue !== undefined) return
    setInternal((prev) => clamp(prev, minOffer, maxOffer))
  }, [minOffer, maxOffer, controlledValue])

  const discountPct = discountPercentOff(listingPrice, amount)
  const tierIndex = tierFromDiscountPercent(discountPct)
  const tier = TIER_STYLES[tierIndex]
  const pctOffRounded = Math.round(discountPct)

  const thumbPct = useMemo(() => {
    if (maxOffer === minOffer) return 50
    return ((amount - minOffer) / (maxOffer - minOffer)) * 100
  }, [amount, minOffer, maxOffer])

  const [manual, setManual] = useState('')

  const applyManual = useCallback(() => {
    const raw = parseFloat(String(manual).replace(/[^0-9.]/g, ''))
    if (Number.isNaN(raw)) return
    setAmount(raw)
    setManual('')
  }, [manual, setAmount])

  return (
    <section className="space-y-3">
      <h2 className="text-[16px] font-bold text-black">Your offer</h2>

      <div className="relative mx-auto h-14 w-full max-w-full">
        <div
          className="absolute top-0 w-[136px] -translate-x-1/2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-center shadow-sm"
          style={{ left: `${thumbPct}%` }}
        >
          <p className="text-[17px] font-bold text-neutral-900">
            ${amount.toFixed(2)}
          </p>
          <p className="text-[13px] font-semibold text-neutral-600">
            {pctOffRounded}% OFF
          </p>
        </div>
      </div>

      <input
        ref={rangeRef}
        type="range"
        min={minOffer}
        max={maxOffer}
        step={1}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="h-3 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/35 focus-visible:ring-offset-2"
        style={{
          accentColor: tier.accent,
        }}
        aria-valuemin={minOffer}
        aria-valuemax={maxOffer}
        aria-valuenow={amount}
      />

      <p
        className="text-center text-[14px] font-semibold leading-snug"
        style={{ color: tier.messageColor }}
      >
        {tier.message}
      </p>

      {hideManualInput ? null : (
        <input
          type="text"
          inputMode="decimal"
          placeholder={manualPlaceholder}
          value={manual}
          onChange={(e) => setManual(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && applyManual()}
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-[15px] text-black placeholder:text-gray-400 outline-none focus:border-black/40"
        />
      )}
    </section>
  )
}
