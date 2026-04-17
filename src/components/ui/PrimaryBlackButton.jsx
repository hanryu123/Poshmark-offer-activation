export function PrimaryBlackButton({ children, className = '', type = 'button', ...rest }) {
  return (
    <button
      type={type}
      className={`flex h-14 w-full items-center justify-center rounded-full bg-black text-[16px] font-semibold text-white active:opacity-90 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
