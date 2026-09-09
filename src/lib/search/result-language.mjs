/**
 * Reject fuzzy highlights written in the other alphabet than the query.
 * @param {string} highlighted
 * @param {string} query
 */
export function matchUsesInputScript(highlighted, query) {
  const hasCyrillic = /[\u0400-\u052f]/u.test(query);
  const hasLatin = /[a-z]/iu.test(query);
  if (hasCyrillic === hasLatin) return true;
  return hasCyrillic ? /[\u0400-\u052f]/u.test(highlighted) : /[a-z]/iu.test(highlighted);
}
