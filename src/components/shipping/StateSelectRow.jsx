export function StateSelectRow({ placeholder = 'State' }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between border-0 border-b border-gray-200 bg-transparent py-3 text-left"
    >
      <span className="text-[16px] text-gray-400">{placeholder}</span>
      <span className="text-black" aria-hidden>
        ▾
      </span>
    </button>
  )
}
