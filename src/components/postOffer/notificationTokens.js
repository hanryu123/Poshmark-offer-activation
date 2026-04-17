/**
 * Design tokens for push-style notification (single source; wired via CSS variables).
 */
export const ITEM_NAME_MAX_CHARS = 6

export const notificationTokens = {
  spacing: {
    cardPadding: 16,
    innerGap: 12,
    rowGap: 6,
  },
  radius: {
    card: 16,
    tapHighlight: 8,
    dismiss: 9999,
  },
  shadow: {
    card: '0 1px 2px rgba(0, 0, 0, 0.04), 0 6px 20px rgba(0, 0, 0, 0.08)',
  },
  colors: {
    surface: '#ffffff',
    border: 'rgba(0, 0, 0, 0.06)',
    textPrimary: '#171717',
    textBody: '#404040',
    textMeta: '#a3a3a3',
    tapHover: '#fafafa',
  },
  font: {
    family:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    appLabel: '13px',
    message: '15px',
    timestamp: '13px',
  },
}

/** Maps tokens to CSS custom properties for the card root (no scattered inline literals). */
export const notificationCardCssVars = {
  '--np-pad': `${notificationTokens.spacing.cardPadding}px`,
  '--np-inner-gap': `${notificationTokens.spacing.innerGap}px`,
  '--np-row-gap': `${notificationTokens.spacing.rowGap}px`,
  '--np-radius': `${notificationTokens.radius.card}px`,
  '--np-radius-tap': `${notificationTokens.radius.tapHighlight}px`,
  '--np-surface': notificationTokens.colors.surface,
  '--np-border': notificationTokens.colors.border,
  '--np-text-primary': notificationTokens.colors.textPrimary,
  '--np-text-body': notificationTokens.colors.textBody,
  '--np-text-meta': notificationTokens.colors.textMeta,
  '--np-tap-hover': notificationTokens.colors.tapHover,
  '--np-shadow': notificationTokens.shadow.card,
  '--np-font-app': notificationTokens.font.appLabel,
  '--np-font-msg': notificationTokens.font.message,
  '--np-font-time': notificationTokens.font.timestamp,
  fontFamily: notificationTokens.font.family,
}
