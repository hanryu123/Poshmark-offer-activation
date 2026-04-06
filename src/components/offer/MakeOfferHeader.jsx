export function MakeOfferHeader({ title = 'Make An Offer' }) {
  return (
    <header className="border-b border-neutral-100 py-4">
      <h1 className="text-center text-lg font-bold text-black">{title}</h1>
    </header>
  )
}
