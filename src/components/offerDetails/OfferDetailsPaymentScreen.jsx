import { MobileShell } from '../common/MobileShell.jsx'
import { StatusBar } from '../common/StatusBar.jsx'
import { OfferDetailsNavHeader } from './OfferDetailsNavHeader.jsx'
import { OfferHero } from './OfferHero.jsx'
import { PaymentSelectSection } from './PaymentSelectSection.jsx'

export function OfferDetailsPaymentScreen({ onBack }) {
  return (
    <MobileShell className="min-h-[100dvh] bg-white pb-6">
      <StatusBar />
      <OfferDetailsNavHeader onBack={onBack} />
      <OfferHero />
      <PaymentSelectSection />
    </MobileShell>
  )
}
