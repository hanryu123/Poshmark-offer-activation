import { useCallback, useMemo, useState } from 'react'
import { getListingOfferPresets } from '../components/offer/offerPresets.js'
import { DEMO_LISTING } from '../data/demoListing.js'
import { OfferCheckoutContext } from './offerCheckoutContext.js'

const DEFAULT_OFFER_AMOUNT = getListingOfferPresets()[0].value

export function OfferCheckoutProvider({ children }) {
  const [offerAmount, setOfferAmount] = useState(DEFAULT_OFFER_AMOUNT)

  const resetOfferCheckout = useCallback(() => {
    setOfferAmount(DEFAULT_OFFER_AMOUNT)
  }, [])

  const value = useMemo(
    () => ({
      offerAmount,
      setOfferAmount,
      resetOfferCheckout,
      listing: DEMO_LISTING,
    }),
    [offerAmount, resetOfferCheckout],
  )

  return <OfferCheckoutContext.Provider value={value}>{children}</OfferCheckoutContext.Provider>
}
