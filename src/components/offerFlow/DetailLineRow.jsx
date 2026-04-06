export function DetailLineRow({ label, value, bold }) {
  const weight = bold ? 'font-bold' : 'font-normal'
  const labelTone = bold ? 'text-black' : 'text-gray-700'
  return (
    <div className={`flex items-baseline justify-between gap-3 py-2 text-[15px] ${weight}`}>
      <span className={labelTone}>{label}</span>
      <span className="text-black">{value}</span>
    </div>
  )
}

