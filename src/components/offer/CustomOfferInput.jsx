export function CustomOfferInput({ placeholder = 'Create Your Own Offer', ...rest }) {
  return (
    <input
      type="text"
      inputMode="decimal"
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-[15px] text-black placeholder:text-gray-400 outline-none focus:border-black/40"
      {...rest}
    />
  )
}
