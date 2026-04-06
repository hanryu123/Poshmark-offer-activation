export function ProductCardRow({
  imageSrc,
  imageAlt = '',
  title,
  price,
  sizeLabel = 'Size: OS',
}) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-16 w-16 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-[15px] font-bold leading-snug text-black">{title}</p>
        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="text-[15px] font-bold text-black">{price}</span>
          <span className="text-[14px] text-gray-500">{sizeLabel}</span>
        </div>
      </div>
    </div>
  )
}
