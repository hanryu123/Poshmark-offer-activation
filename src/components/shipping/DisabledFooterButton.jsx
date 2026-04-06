export function DisabledFooterButton({ children = 'Next' }) {
  return (
    <button
      type="button"
      disabled
      className="h-[52px] w-full rounded-2xl bg-gray-100 text-[17px] font-semibold text-gray-500"
    >
      {children}
    </button>
  )
}
