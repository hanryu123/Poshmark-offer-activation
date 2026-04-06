export function BottomBorderInput({ placeholder, value, onChange, type = 'text', ...rest }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border-0 border-b border-gray-200 bg-transparent py-3 text-[16px] text-black placeholder:text-gray-400 outline-none focus:border-black/30"
      {...rest}
    />
  )
}
