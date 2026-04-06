import { IconChevronRight } from '../icons/Icons.jsx'

export function PaymentOptionRow({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left last:border-b-0"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-black">
          {icon}
        </span>
        <span className="text-[16px] text-black">{label}</span>
      </div>
      <IconChevronRight className="h-5 w-5 shrink-0 text-gray-400" />
    </button>
  )
}
