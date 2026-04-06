import { IconCard } from '../icons/Icons.jsx'

export function PaymentShippingBlock({
  paymentLabel = 'Payment',
  cardMask = 'Visa •••• 4242',
  shippingTitle = 'Shipping',
  addressLine = '10... Redwood City, CA, 94065',
}) {
  return (
    <div className="divide-y divide-gray-100 border-b border-gray-100">
      <div className="py-4">
        <p className="text-[13px] font-semibold text-gray-500">{paymentLabel}</p>
        <div className="mt-2 flex items-center gap-2">
          <IconCard className="h-5 w-5 text-black" />
          <span className="text-[15px] font-medium text-black">{cardMask}</span>
        </div>
      </div>
      <div className="py-4">
        <p className="text-[13px] font-semibold text-gray-500">{shippingTitle}</p>
        <p className="mt-2 text-[15px] leading-snug text-black">{addressLine}</p>
      </div>
    </div>
  )
}
