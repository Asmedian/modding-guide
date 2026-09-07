const contextOrigin = 'https://context.invalid';

/** @param {string} value */
function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

/**
 * Prepare canonical article markup for the isolated reference panel.
 * This runs while prerendering so old clients do not rewrite large HTML
 * strings and resolve hundreds of relative URLs on the main thread.
 * @param {string} html
 * @param {string} articleUrl
 */
export function prepareContextHtml(html, articleUrl) {
  const documentUrl = new URL(articleUrl, contextOrigin);
  return html
    .replace(/\bid="([^"]+)"/g, 'id="context-$1"')
    .replace(/(href|src)="([^"]+)"/g, (/** @type {string} */ _, /** @type {string} */ attribute, /** @type {string} */ encodedUrl) => {
      const resolved = new URL(encodedUrl.replaceAll('&amp;', '&'), documentUrl);
      const value = resolved.origin === contextOrigin
        ? `${resolved.pathname}${resolved.search}${resolved.hash}`
        : resolved.href;
      return `${attribute}="${escapeAttribute(value)}"`;
    });
}
