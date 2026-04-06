export function CountryRow({ label = 'United States' }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 border-0 border-b border-gray-200 bg-transparent py-3 text-left"
    >
      <span className="text-2xl leading-none" aria-hidden>
        🇺🇸
      </span>
      <span className="text-[16px] text-black">{label}</span>
    </button>
  )
}
