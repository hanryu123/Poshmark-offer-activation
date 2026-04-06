import { PromoCard } from './PromoCard.jsx'

export function SubmissionSuccessModal({ onContinueShopping }) {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-2xl">
      <h2 className="text-center text-[20px] font-bold leading-snug text-black">
        Congratulations, Your offer has been submitted.
      </h2>
      <div className="mt-5">
        <PromoCard />
      </div>
      <div className="my-5 border-t border-gray-200" />
      <button
        type="button"
        onClick={onContinueShopping}
        className="w-full text-center text-[16px] font-bold text-black"
      >
        Continue Shopping
      </button>
    </div>
  )
}
