export function ProductInfo({ brand, title, price }) {
  return (
    <div className="px-5 pt-2">
      <p className="font-serif text-[15px] leading-none text-[#717171]">{brand}</p>
      <h1 className="mt-1.5 font-sans text-[17px] font-bold leading-snug tracking-[-0.01em] text-black">
        {title}
      </h1>
      <p className="mt-2 font-sans text-[20px] font-bold leading-none tracking-[-0.02em] text-black">
        {price}
      </p>
    </div>
  )
}
