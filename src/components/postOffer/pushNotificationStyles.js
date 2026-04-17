/**
 * Push notification — layout & surface styles for production use.
 * Class names reference PushNotificationCard.module.css; vars from notificationTokens.
 */
import { notificationCardCssVars } from './notificationTokens.js'
import styles from './PushNotificationCard.module.css'

export const pushNotificationStyles = {
  /** Card root: padding 16px via CSS vars, single stacking layer */
  card: styles.card,
  inner: styles.inner,
  logo: styles.logo,
  column: styles.column,
  topRow: styles.topRow,
  appLabel: styles.appLabel,
  meta: styles.meta,
  timestamp: styles.timestamp,
  dismiss: styles.dismiss,
  bodyTap: styles.bodyTap,
  message: styles.message,
  /** Pre-built style object for the card (tokens + font) */
  cardSurface: notificationCardCssVars,
}
