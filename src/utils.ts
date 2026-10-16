/** True only for non-empty http(s) or mailto links. */
export function isValidLink(href?: string): href is string {
  if (!href) return false
  try {
    const url = new URL(href)
    return ['http:', 'https:', 'mailto:'].includes(url.protocol)
  } catch {
    return false
  }
}
