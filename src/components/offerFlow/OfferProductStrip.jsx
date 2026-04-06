export function OfferProductStrip({
  imageSrc,
  title = 'Women Color block Jacket with double...',
  size = 'Size: OS',
}) {
  return (
    <div className="flex gap-3 border-b border-gray-100 py-4">
      <img src={imageSrc} alt="" className="h-14 w-14 shrink-0 rounded-md object-cover" />
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-semibold leading-snug text-black">{title}</p>
        <p className="mt-1 text-[13px] text-gray-600">{size}</p>
      </div>
    </div>
  )
}
