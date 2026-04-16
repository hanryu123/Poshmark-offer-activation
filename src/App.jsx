import { useState } from 'react'
import { OfferCheckoutProvider } from './context/OfferCheckoutProvider.jsx'
import { ScreenPicker } from './components/common/ScreenPicker.jsx'
import { MakeOfferScreen } from './components/offer/MakeOfferScreen.jsx'
import { MakeOfferScreenB } from './components/offer/MakeOfferScreenB.jsx'
import { OfferDetailsPaymentScreen } from './components/offerDetails/OfferDetailsPaymentScreen.jsx'
import { OfferDetailsSubmitScreen } from './components/offerFlow/OfferDetailsSubmitScreen.jsx'
import { ProductListingContainer } from './components/offerFlow/ProductListingContainer.jsx'
import { ShippingAddressScreen } from './components/shipping/ShippingAddressScreen.jsx'

export default function App() {
  const [screen, setScreen] = useState('product')

  return (
    <OfferCheckoutProvider>
      <div className="min-h-[100dvh] bg-[#e8e8ea] pb-20">
        <div className="mx-auto flex min-h-[100dvh] max-w-[480px] flex-col items-center justify-start pt-4">
          {screen === 'product' && (
            <ProductListingContainer onBack={() => {}} onGoToOffer={() => setScreen('makeOffer')} />
          )}
          {screen === 'makeOffer' && <MakeOfferScreen />}
          {screen === 'makeOfferB' && <MakeOfferScreenB />}
          {screen === 'shipping' && <ShippingAddressScreen onBack={() => setScreen('product')} />}
          {screen === 'offerPayment' && (
            <OfferDetailsPaymentScreen onBack={() => setScreen('product')} />
          )}
          {screen === 'offerSubmit' && <OfferDetailsSubmitScreen onBack={() => setScreen('product')} />}
        </div>
        <ScreenPicker value={screen} onChange={setScreen} />
      </div>
    </OfferCheckoutProvider>
  )
}
