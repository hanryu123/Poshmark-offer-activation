function SectionTitle({ children }) {
  return <h2 className="text-[15px] font-bold text-black">{children}</h2>
}

function ChevronRow({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between border-b border-neutral-100 py-3.5 text-left text-[15px] text-black"
    >
      <span>{label}</span>
      <span className="text-neutral-400" aria-hidden>
        ›
      </span>
    </button>
  )
}

export function ItemDetailsBlock() {
  return (
    <section className="px-5 pt-1">
      <SectionTitle>Item Details</SectionTitle>
      <div className="mt-1 border-t border-neutral-100">
        <ChevronRow label="Category" onClick={() => {}} />
        <ChevronRow label="Condition" onClick={() => {}} />
        <ChevronRow label="Brand" onClick={() => {}} />
      </div>
    </section>
  )
}

export function AboutTheSellerBlock() {
  return (
    <section className="px-5 pt-5">
      <SectionTitle>About The Seller</SectionTitle>
      <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
        Trusted seller with fast shipping and great communication. Ships within 1–2 business days.
      </p>
    </section>
  )
}

export function DiscoverSimilarListingsBlock() {
  return (
    <section className="px-5 pt-6 pb-2">
      <SectionTitle>Discover Similar Listings</SectionTitle>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[88px] w-[88px] shrink-0 rounded-lg bg-neutral-100"
            aria-hidden
          />
        ))}
      </div>
    </section>
  )
}
