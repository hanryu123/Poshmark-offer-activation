import { BackCircleButton } from './BackCircleButton.jsx'

export function ShippingNavHeader({ title = 'Add Shipping Address', onBack }) {
  return (
    <div className="flex items-center justify-center px-2 pb-2 pt-1">
      <div className="relative flex w-full items-center justify-center">
        <div className="absolute left-0">
          <BackCircleButton onClick={onBack} />
        </div>
        <h1 className="text-[17px] font-bold text-black">{title}</h1>
      </div>
    </div>
  )
}
