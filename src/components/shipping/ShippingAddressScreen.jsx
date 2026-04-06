import { StatusBar } from '../common/StatusBar.jsx'
import { MobileShell } from '../common/MobileShell.jsx'
import { BottomBorderInput } from './BottomBorderInput.jsx'
import { CountryRow } from './CountryRow.jsx'
import { DisabledFooterButton } from './DisabledFooterButton.jsx'
import { ShippingNavHeader } from './ShippingNavHeader.jsx'
import { StateSelectRow } from './StateSelectRow.jsx'
import { StepProgressBar } from './StepProgressBar.jsx'

export function ShippingAddressScreen({ onBack }) {
  return (
    <MobileShell className="flex min-h-[100dvh] flex-col bg-white">
      <StatusBar />
      <ShippingNavHeader onBack={onBack} />
      <StepProgressBar currentStep={1} />
      <div className="flex flex-1 flex-col space-y-8 px-6 pb-8">
        <CountryRow />
        <BottomBorderInput defaultValue="Santhosh Rajendran" readOnly />
        <BottomBorderInput placeholder="Street" />
        <BottomBorderInput placeholder="Street 2" />
        <div className="grid grid-cols-2 gap-4">
          <BottomBorderInput placeholder="City" />
          <StateSelectRow />
        </div>
        <BottomBorderInput placeholder="Zip code" />
        <div className="mt-auto flex flex-col pt-8">
          <DisabledFooterButton />
        </div>
      </div>
    </MobileShell>
  )
}
