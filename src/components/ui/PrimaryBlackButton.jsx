export function PrimaryBlackButton({ children = 'Next', className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`h-14 w-full rounded-xl bg-black text-[16px] font-bold text-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
