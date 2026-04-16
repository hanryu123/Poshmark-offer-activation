/** 말풍선 꼬리 — 아래쪽 삼각형 (테두리 + 면), Offer 버튼 쪽으로 정렬 */
function SpeechBubbleTail() {
  return (
    <div
      className="pointer-events-none absolute -bottom-2 left-[32%] z-0 -translate-x-1/2"
      aria-hidden
    >
      <div className="relative h-0 w-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 border-x-[9px] border-t-[11px] border-x-transparent border-t-blue-100" />
        <div className="absolute left-1/2 top-px -translate-x-1/2 border-x-[8px] border-t-[10px] border-x-transparent border-t-blue-50" />
      </div>
    </div>
  )
}

/**
 * @param {'en' | 'ko'} locale
 * @param {'listing' | 'hint'} variant — listing: 리스팅 2줄 카피; hint: Offer 입력/선택 한 줄 가이드
 * @param {number} [sellerLikelyMin]
 * @param {number} [sellerLikelyMax]
 */
export function NegotiationTooltip({
  locale = 'en',
  variant = 'hint',
  sellerLikelyMin = 60,
  sellerLikelyMax = 70,
}) {
  const rangeLabel = `$${sellerLikelyMin}–$${sellerLikelyMax}`
  if (variant === 'listing') {
    return (
      <div className="relative w-[66%] max-w-[248px] min-w-[168px]">
        <div className="relative rounded-xl border border-blue-100 bg-blue-50 px-3.5 py-2.5 text-center shadow-sm">
          {locale === 'ko' ? (
            <div className="flex w-full flex-col items-center text-balance">
              <p className="text-[13px] font-semibold leading-snug text-blue-900">가격 협상 가능</p>
              <p className="mt-1 text-[13px] leading-snug text-blue-800">
                <span className="text-sm font-bold text-blue-900">
                  {`$${sellerLikelyMin} – $${sellerLikelyMax + 2}`}
                </span>{' '}
                사이로
              </p>
              <p className="mt-0.5 text-[13px] leading-snug text-blue-800">제안해 보세요</p>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center text-balance">
              <p className="text-[13px] font-semibold leading-snug text-blue-900">Price is negotiable</p>
              <p className="mt-1 text-[13px] leading-snug text-blue-800">Try an offer between</p>
              <p className="mt-0.5 text-sm font-bold leading-snug text-blue-900">
                {`$${sellerLikelyMin} – $${sellerLikelyMax + 2}`}
              </p>
            </div>
          )}
        </div>
        <SpeechBubbleTail />
      </div>
    )
  }

  return (
    <div className="mt-2 flex w-full items-center justify-center rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-center">
      {locale === 'ko' ? (
        <p className="text-[13px] leading-snug text-blue-800">
          판매자가{' '}
          <span className="text-sm font-bold text-blue-900">{rangeLabel}</span> 수락 가능성이 높아요
        </p>
      ) : (
        <p className="text-[13px] leading-snug text-blue-800">
          Seller likely accepts{' '}
          <span className="text-sm font-bold text-blue-900">{rangeLabel}</span>
        </p>
      )}
    </div>
  )
}
