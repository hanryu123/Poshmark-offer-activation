import { formatUsd } from '../offerFlow/offerFlowMoney.js'

/**
 * @param {number} savingsAmount — listing minus offer (absolute $)
 * @param {() => void} onBrowseSeller
 * @param {() => void} [onClose] — X button
 */
export function SubmissionSuccessModal({ savingsAmount, onBrowseSeller, onClose }) {
  const savingsLabel = formatUsd(savingsAmount)

  return (
    <div className="relative rounded-[24px] bg-white p-6 pt-10 shadow-2xl ring-1 ring-black/5">
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-[22px] font-light leading-none text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
          aria-label="Close"
        >
          ×
        </button>
      ) : null}
      <h2 className="text-center font-serif text-[22px] font-bold leading-snug text-neutral-900">
        Offer Sent!
      </h2>
      <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-neutral-700">
        <p>
          Great job! You just offered <span className="font-semibold text-neutral-900">{savingsLabel}</span>{' '}
          less than the original price.
        </p>
        <div>
          <p className="font-semibold text-neutral-900">What&apos;s next?</p>
          <p className="mt-1">
            The seller has 24 hours to Accept, Decline, or send a Counteroffer.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">Don&apos;t worry</p>
          <p className="mt-1">
            if they don&apos;t respond in time, your offer expires automatically and you won&apos;t be
            charged.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onBrowseSeller}
        className="mt-8 w-full rounded-xl bg-black py-3.5 text-[15px] font-semibold text-white"
      >
        Browse more items from this seller
      </button>
    </div>
  )
}
