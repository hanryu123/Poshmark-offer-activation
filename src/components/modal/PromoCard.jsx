import { PrimaryBlackButton } from '../ui/PrimaryBlackButton.jsx'

export function PromoCard() {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className="text-[13px] leading-relaxed text-gray-800">
        Get coupon codes instantly applied to your orders. Just add the free Capital One Shopping
        mobile app and avoid paying full price. This free tool does the work for you.
      </p>
      <button type="button" className="mt-3 text-[13px] text-gray-800 underline">
        Terms & Conditions
      </button>
      <div className="mt-4 space-y-3">
        <PrimaryBlackButton className="h-12 rounded-lg text-[15px]">Redeem $10 Bonus</PrimaryBlackButton>
        <button
          type="button"
          className="h-12 w-full rounded-lg border border-black bg-white text-[15px] font-semibold text-black"
        >
          Decline
        </button>
      </div>
      <p className="mt-4 text-[10px] leading-relaxed text-gray-500">
        Based on FICO® Score 8, terms apply. &apos;NDD&apos; won&apos;t hurt if not initially
        approved. See Experian.com.
      </p>
      <p className="mt-2 text-[10px] text-gray-500">
        Powered by Rokt -{' '}
        <button type="button" className="underline">
          Privacy Policy
        </button>
      </p>
    </div>
  )
}
