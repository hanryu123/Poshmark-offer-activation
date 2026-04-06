import { IconBack } from '../icons/Icons.jsx'

export function BackCircleButton({ onClick, label = 'Back' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-black shadow-sm"
    >
      <IconBack className="h-5 w-5" />
    </button>
  )
}
