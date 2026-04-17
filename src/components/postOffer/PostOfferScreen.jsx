import { useState } from 'react'
import { useOfferCheckout } from '../../context/useOfferCheckout.js'
import { PushNotificationCard } from './PushNotificationCard.jsx'
import shellStyles from './PostOfferScreen.module.css'

function LockIcon() {
  return (
    <svg
      className="mb-2 h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18 10h-1V8c0-2.76-2.24-5-5-5S7 5.24 7 8v2H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-6 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H9V8c0-1.86 1.28-3.41 3-3.87V7h2V4.13c1.72.47 3 2.01 3 3.87v2z" />
    </svg>
  )
}

function StatusIcons() {
  return (
    <div className="flex items-center gap-1.5 text-white">
      <svg className="h-3.5 w-[18px]" viewBox="0 0 24 12" fill="currentColor" aria-hidden>
        <rect x="0" y="7" width="3" height="5" rx="0.5" />
        <rect x="5" y="5" width="3" height="7" rx="0.5" />
        <rect x="10" y="3" width="3" height="9" rx="0.5" />
        <rect x="15" y="1" width="3" height="11" rx="0.5" />
      </svg>
      <svg className="h-3.5 w-4" viewBox="0 0 20 14" fill="currentColor" aria-hidden>
        <path d="M10 2c3 2.5 5 5.5 5 8.5H5c0-3 2-6 5-8.5z" />
      </svg>
      <div className="flex items-center rounded-sm border border-white/40 px-1 py-0.5">
        <div className="h-2 w-5 rounded-[1px] bg-white" />
      </div>
    </div>
  )
}

/**
 * Lock screen preview + push notification (isolated z-stacking for banner).
 */
export function PostOfferScreen({ onNavigateToSuggested }) {
  const { listing } = useOfferCheckout()
  const [bannerVisible, setBannerVisible] = useState(true)

  const goToSuggested = () => {
    window.location.hash = `similar?category=${encodeURIComponent(listing.categorySlug)}`
    onNavigateToSuggested?.()
  }

  return (
    <div
      className="relative flex min-h-[812px] w-full flex-col overflow-hidden text-white"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 40%), linear-gradient(165deg, #3d3428 0%, #6b5e52 38%, #a89888 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-[1] flex justify-end px-5 pt-[max(12px,env(safe-area-inset-top))]">
        <StatusIcons />
      </div>

      <div className="relative z-[1] flex flex-col items-center px-6 pt-2">
        <LockIcon />
        <p className="text-[4.25rem] font-extralight leading-none tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
          11:32
        </p>
        <p className="mt-2 text-[17px] font-medium text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
          Tue, Oct 26
        </p>
      </div>

      <div className={shellStyles.notificationSlot}>
        <div className={shellStyles.notificationSlotInner}>
          {bannerVisible ? (
            <PushNotificationCard
              itemName={listing.itemName}
              onOpenSuggested={goToSuggested}
              onDismiss={() => setBannerVisible(false)}
            />
          ) : null}
        </div>
      </div>

      <div className="relative z-[1] mt-auto flex flex-col items-center px-6 pb-[max(12px,env(safe-area-inset-bottom))] pt-2 text-center">
        <p className="text-[16px] font-medium text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
          Press home to open
        </p>
        <p className="mt-1 text-[13px] text-white/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
          or Slide to open
        </p>
        <div className="mt-4 h-1 w-[134px] rounded-full bg-white/90" />
      </div>
    </div>
  )
}
