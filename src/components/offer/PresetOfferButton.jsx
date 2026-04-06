import { formatUsd } from '../offerFlow/offerFlowMoney.js'

export function PresetOfferButton({ value, percentOff, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center rounded-xl border py-3 transition-colors ${
        selected
          ? 'border-black bg-neutral-50 ring-1 ring-black/10'
          : 'border-gray-300 bg-white active:bg-neutral-50'
      }`}
    >
      <span className="text-[17px] font-bold text-black">{formatUsd(value)}</span>
      <span className="mt-0.5 text-[12px] font-medium text-gray-500">{percentOff}</span>
    </button>
  )
}
