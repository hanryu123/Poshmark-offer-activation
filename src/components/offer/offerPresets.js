import { LISTING_PRICE } from '../offerFlow/offerFlowMoney.js'

/**
 * Preset offer amounts from listing price (15% / 10% / 5% off).
 */
export function getListingOfferPresets(listingPrice = LISTING_PRICE) {
  const round2 = (n) => Math.round(n * 100) / 100
  return [
    { id: 'p15', percentOff: '15% OFF', value: round2(listingPrice * 0.85) },
    { id: 'p10', percentOff: '10% OFF', value: round2(listingPrice * 0.9) },
    { id: 'p5', percentOff: '5% OFF', value: round2(listingPrice * 0.95) },
  ]
}
