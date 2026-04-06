import { useContext } from 'react'
import { OfferCheckoutContext } from './offerCheckoutContext.js'

export function useOfferCheckout() {
  const ctx = useContext(OfferCheckoutContext)
  if (!ctx) {
    throw new Error('useOfferCheckout must be used within OfferCheckoutProvider')
  }
  return ctx
}
