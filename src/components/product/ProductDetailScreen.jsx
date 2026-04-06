import { IMG } from '../../constants/assets.js'
import { MobileShell } from '../common/MobileShell.jsx'
import { StatusBar } from '../common/StatusBar.jsx'
import {
  AboutTheSellerBlock,
  DiscoverSimilarListingsBlock,
  ItemDetailsBlock,
} from './ProductDetailSections.jsx'
import { ProductFixedFooter } from './ProductFixedFooter.jsx'
import { ProductImageGallery } from './ProductImageGallery.jsx'
import { ProductHeader } from './ProductHeader.jsx'
import { ProductInfo } from './ProductInfo.jsx'

const GALLERY_SLIDES = 5

function ProductDetailBody({ onBack }) {
  const slides = Array.from({ length: GALLERY_SLIDES }, () => IMG.productTote)

  return (
    <>
      <div className="relative w-full">
        <ProductHeader onBack={onBack} />
        <ProductImageGallery
          slides={slides}
          alt="Stussy Military Green Small Tote Bag"
        />
      </div>

      <ProductInfo
        brand="Stussy"
        title="Stussy Military Green Small Tote Bag"
        price="$75"
      />

      <ItemDetailsBlock />
      <AboutTheSellerBlock />
      <DiscoverSimilarListingsBlock />
    </>
  )
}

export function ProductDetailScreen({ onBack, onOffer = () => {}, onBuy = () => {} }) {
  return (
    <MobileShell className="relative flex h-[100dvh] max-w-[375px] flex-col overflow-hidden bg-white">
      <div className="shrink-0 bg-white">
        <StatusBar />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain pb-48">
        <ProductDetailBody onBack={onBack} />
      </div>

      <ProductFixedFooter onOffer={onOffer} onBuy={onBuy} />
    </MobileShell>
  )
}
