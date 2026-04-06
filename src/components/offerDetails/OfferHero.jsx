export function OfferHero({
  headline = 'Woohoo, Your First Offer!',
  body = 'To quickly process this and future offers when they are accepted, we need your shipping and payment information on file. ',
  linkText = 'Why do we need this?',
}) {
  return (
    <section className="mt-8 px-6">
      <h2 className="text-xl font-bold leading-snug text-black">{headline}</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
        {body}
        <button type="button" className="underline">
          {linkText}
        </button>
      </p>
    </section>
  )
}
