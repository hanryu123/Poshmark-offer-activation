import { PoshmarkLogoMark } from './PoshmarkLogoMark.jsx'
import { buildNotificationMessage } from './notificationMessage.js'
import { pushNotificationStyles as s } from './pushNotificationStyles.js'

/**
 * Single-layer iOS-style push card: header row (app + time + dismiss), then body (tap).
 */
export function PushNotificationCard({ itemName, onOpenSuggested, onDismiss }) {
  const message = buildNotificationMessage(itemName)

  return (
    <div className={s.card} style={s.cardSurface}>
      <div className={s.inner}>
        <PoshmarkLogoMark size={44} className={s.logo} />

        <div className={s.column}>
          <div className={s.topRow}>
            <span className={s.appLabel}>Poshmark</span>
            <div className={s.meta}>
              <span className={s.timestamp}>m ago</span>
              <button
                type="button"
                className={s.dismiss}
                aria-label="Dismiss notification"
                onClick={onDismiss}
              >
                ×
              </button>
            </div>
          </div>

          <button
            type="button"
            className={s.bodyTap}
            onClick={onOpenSuggested}
            aria-label={message}
          >
            <span className={s.message}>{message}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
