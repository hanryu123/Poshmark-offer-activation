export function SummaryRow({ label, value, valueClassName = '' }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-[15px]">
      <span className="text-gray-600">{label}</span>
      <span className={`font-bold text-black ${valueClassName}`}>{value}</span>
    </div>
  )
}
