/** Seller “likely accept” band shown in UI & used for validation flash */
export const SELLER_LIKELY_MIN = 60
export const SELLER_LIKELY_MAX = 70

export function isOfferInLikelyRange(amount) {
  const n = Number(amount)
  if (Number.isNaN(n)) return false
  return n >= SELLER_LIKELY_MIN && n <= SELLER_LIKELY_MAX
}
