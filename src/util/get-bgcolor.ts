
export function getBackgroundColor() {
  return getComputedStyle(document.body).backgroundColor
}

export function getForegroundColor() {
  return getComputedStyle(document.body).color
}
