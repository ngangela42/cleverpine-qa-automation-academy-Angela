// lectures/10-advanced-ui-interactions/homework/task01/getLocalUrl.js
export function getLocalUrl(relativePath, baseUrl = import.meta.url) {
  return new URL(relativePath, baseUrl).href;
}
