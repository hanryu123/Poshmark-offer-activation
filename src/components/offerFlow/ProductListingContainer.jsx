import { ProductDetailScreen } from '../product/ProductDetailScreen.jsx'

/**
 * Listing 탭: 상품 상세 + Offer는 앱의 Offer 탭(MakeOfferScreen)과 동일한 화면으로 이동.
 */
export function ProductListingContainer({ onBack, onGoToOffer }) {
  return (
    <ProductDetailScreen
      onBack={onBack}
      onOffer={onGoToOffer}
      onBuy={() => {}}
    />
  )
}
