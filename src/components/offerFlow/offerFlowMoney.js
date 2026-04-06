/** Base listing price for savings copy (buy box / spec). */
export const LISTING_PRICE = 75

export const MOCK_SHIPPING = 6.49
export const MOCK_TAX = 4.5

export function formatUsd(amount) {
  const n = Number(amount)
  if (Number.isNaN(n)) return '$0.00'
  return `$${n.toFixed(2)}`
}

export function computeOfferTotal(offerAmount) {
  const n = Number(offerAmount) || 0
  return n + MOCK_SHIPPING + MOCK_TAX
}

/**
 * Same form as: "$" + (75 - offerAmount) + " cheaper than the listing price"
 */
export function formatSavingsVersusListing(offerAmount) {
  const n = Number(offerAmount) || 0
  const diff = LISTING_PRICE - n
  return `$${diff} cheaper than the listing price`
}

export function parseOfferNumber(value) {
  const n = parseFloat(String(value).replace(/[^0-9.]/g, ''))
  return Number.isNaN(n) ? 0 : n
}
