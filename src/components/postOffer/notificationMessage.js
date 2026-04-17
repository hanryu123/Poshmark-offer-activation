import { ITEM_NAME_MAX_CHARS } from './notificationTokens.js'

/**
 * If `itemName` is longer than 6 characters, keep the first 6 and append "...".
 * e.g. "Stussy Hoodie" -> "Stussy..."
 */
export function truncateItemName(itemName, maxChars = ITEM_NAME_MAX_CHARS) {
  const s = String(itemName ?? '').trim()
  if (s.length <= maxChars) return s
  return `${s.slice(0, maxChars)}...`
}

/**
 * Notification body with bracketed truncated name.
 */
export function buildNotificationMessage(itemName) {
  const truncated = truncateItemName(itemName)
  const label = truncated || 'item'
  return `Your Offer [${label}] is expired due to seller no response. Check out similar items here!`
}
