import { useState } from 'react'

function OfferInfoModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[390px] rounded-2xl bg-white px-6 py-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-3 text-[17px] font-semibold text-black">
          After you send an offer
        </h2>
        <p className="text-[14px] leading-relaxed text-gray-600">
          The seller has 24 hours to accept, decline, or send a counteroffer.
          By submitting, you agree to our Terms. If the seller doesn't respond
          in time, your offer will expire automatically and you won't be charged.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-black py-3 text-[15px] font-semibold text-white"
        >
          Got it
        </button>
      </div>
    </div>
  )
}

export function SubmitOfferDisclaimer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <p className="text-center text-[13px] leading-relaxed text-gray-500">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="underline underline-offset-2 decoration-gray-400 text-gray-500 cursor-pointer"
        >
          What happens after you send an offer?
        </button>
      </p>
      {open && <OfferInfoModal onClose={() => setOpen(false)} />}
    </>
  )
}
