import { useOfferCheckout } from '../../context/useOfferCheckout.js'
import { IMG } from '../../constants/assets.js'
import { MobileShell } from '../common/MobileShell.jsx'
import { PrimaryBlackButton } from '../ui/PrimaryBlackButton.jsx'
import { OfferDetailsNavHeader } from '../offerDetails/OfferDetailsNavHeader.jsx'
import { StatusBar } from '../common/StatusBar.jsx'
import {
  computeOfferTotal,
  formatUsd,
  MOCK_SHIPPING,
  MOCK_TAX,
} from './offerFlowMoney.js'
import { DetailLineRow } from './DetailLineRow.jsx'
import { NetChargedBlock } from './NetChargedBlock.jsx'
import { OfferProductStrip } from './OfferProductStrip.jsx'
import { PaymentShippingBlock } from './PaymentShippingBlock.jsx'
import { SubmitOfferDisclaimer } from './SubmitOfferDisclaimer.jsx'

export function OfferDetailsSubmitScreen({ onBack }) {
  const { offerAmount } = useOfferCheckout()

  const lineTotal = computeOfferTotal(offerAmount)

  return (
    <MobileShell className="relative min-h-[100dvh] bg-white">
      <StatusBar />
      <OfferDetailsNavHeader onBack={onBack} />
      <div className="px-6 pb-28 pt-2">
        <OfferProductStrip imageSrc={IMG.productTote} />
        <div className="border-b border-gray-100 py-2">
          <DetailLineRow label="Offer Price" value={formatUsd(offerAmount)} />
          <DetailLineRow label="Shipping" value={formatUsd(MOCK_SHIPPING)} />
          <DetailLineRow label="Estimated Tax" value={formatUsd(MOCK_TAX)} />
          <DetailLineRow label="Total" value={formatUsd(lineTotal)} bold />
        </div>
        <NetChargedBlock offerAmount={offerAmount} />
        <PaymentShippingBlock />
        <div className="pt-6">
          <SubmitOfferDisclaimer />
          <div className="mt-3">
            <PrimaryBlackButton>Submit Offer</PrimaryBlackButton>
          </div>
        </div>
      </div>
    </MobileShell>
  )
}
