/** Native rich reference blocks. No legacy JavaScript or page styles are run. */
const tags = new Set('section div span p h2 h3 h4 strong em u del small sup sub br hr wbr pre code ul ol li dl dt dd table caption thead tbody tr th td a img details summary blockquote label input output'.split(' '));
const attributes = new Set('class id href src alt title lang width height colspan rowspan start open loading decoding data-context data-erm-radix data-erm-table-search type value inputmode aria-label placeholder'.split(' '));

/** @param {string} value */
export function hexToDecimal(value) {
  const match = value.trim().match(/^([+-]?)(?:0x)?([0-9a-f]+)$/i);
  return match ? ((match[1] === '-' ? -1n : 1n) * BigInt(`0x${match[2]}`)).toString() : '—';
}

/** @param {string} value */
export function decodeReferenceText(value) {
  return value.replace(/&#(x[0-9a-f]+|\d+);/gi, (_, number) => String.fromCodePoint(number[0].toLowerCase() === 'x' ? parseInt(number.slice(1), 16) : Number(number)))
    .replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&nbsp;', ' ').replaceAll('&amp;', '&');
}

/** @param {string} html */
export function referenceText(html) {
  return decodeReferenceText(html.replace(/<\/?(?:br|hr|div|p|pre|li|tr|td|th|h[2-4]|summary|details)\b[^>]*>/g, ' ').replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
}

/** @param {string} html */
export function referenceSegments(html) {
  const markers = [...html.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)];
  return markers.map((match, index) => ({ id: match[1], heading: '', text: referenceText(html.slice(match.index + match[0].length, markers[index + 1]?.index ?? html.length)) })).filter((entry) => entry.text);
}

/** Preserve every character while adding syntax colours to code. @param {string} code */
export function highlightErm(code) {
  return code.replace(/(\^[^\n^]*\^)|((?:!\?|!!|!#|!\$)[A-Za-z]{2})|(^[ \t]*;[^\n]*)|(\b[xyvwezif]-?\d+\b)/gm,
    (token, string, command, comment) => `<span class="erm-syntax-${string ? 'string' : comment ? 'comment' : command ? command.startsWith('!?') ? 'trigger' : command.startsWith('!#') ? 'instruction' : 'receiver' : 'variable'}">${token}</span>`);
}

/** Validate the inert subset before rendering authored reference HTML. @param {string} html */
export function renderReference(html) {
  const cleaned = html.replace(/<\/?([a-z][a-z0-9]*)([^>]*)>/gi, (full, name, rawAttributes) => {
    const tag = name.toLowerCase();
    if (!tags.has(tag)) throw new Error(`Unsupported reference element: ${tag}`);
    if (full.startsWith('</')) return `</${tag}>`;
    for (const attribute of rawAttributes.matchAll(/([\w-]+)(?:="([^"]*)")?/g)) {
      const key = attribute[1], value = attribute[2] ?? '';
      if (key === 'style' && /^background-color:(?:#[0-9a-f]{3,6}|[a-z]+)$/i.test(value)) continue;
      if (!attributes.has(key)) throw new Error(`Unsupported reference attribute: ${key}`);
      if ((key === 'href' || key === 'src') && /^(?:javascript|data|vbscript):/i.test(decodeReferenceText(value).trim())) throw new Error('Unsafe reference URL');
    }
    return full;
  });
  return cleaned.replace(/(<pre\b[^>]*><code class="language-erm">)([\s\S]*?)(<\/code><\/pre>)/g, (_, before, code, after) => before + highlightErm(code) + after);
}
