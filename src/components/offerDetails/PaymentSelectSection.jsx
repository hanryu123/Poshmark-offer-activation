import { IconCard, IconPayPal } from '../icons/Icons.jsx'
import { PaymentOptionRow } from './PaymentOptionRow.jsx'

export function PaymentSelectSection() {
  return (
    <section className="mt-10 px-6">
      <h3 className="mb-1 text-[16px] font-bold text-black">Select Payment</h3>
      <div className="border-t border-gray-100">
        <PaymentOptionRow
          icon={<IconCard className="h-7 w-7" />}
          label="Credit / Debit Card"
        />
        <PaymentOptionRow icon={<IconPayPal className="h-7 w-7" />} label="PayPal" />
      </div>
    </section>
  )
}
