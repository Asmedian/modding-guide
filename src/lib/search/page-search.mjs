/** @param {string} value @param {string} query */
export function findTextRanges(value, query) {
  const needle = query.trim();
  if (needle.length < 2) return [];
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return Array.from(value.matchAll(new RegExp(escaped, 'giu')), (match) => ({
    start: match.index,
    end: match.index + match[0].length
  }));
}

/** @param {number} current @param {number} delta @param {number} count */
export function advanceMatch(current, delta, count) {
  return count ? Math.max(0, Math.min(count - 1, current + delta)) : 0;
}

/** @param {string} value @param {{start: number, end: number}} range */
export function matchSnippet(value, range) {
  const start = Math.max(0, range.start - 65);
  const end = Math.min(value.length, range.end + 95);
  return [
    { text: `${start ? '…' : ''}${value.slice(start, range.start).replace(/\s+/g, ' ')}`, match: false },
    { text: value.slice(range.start, range.end).replace(/\s+/g, ' '), match: true },
    { text: `${value.slice(range.end, end).replace(/\s+/g, ' ')}${end < value.length ? '…' : ''}`, match: false }
  ];
}

/** @typedef {{marks: HTMLElement[], parts: Array<{text: string, match: boolean}>}} PageMatch */

/** Highlights literal occurrences, including phrases split across inline markup.
 * Original Text nodes are restored verbatim, preserving Svelte's node references.
 * @param {Element} article
 */
export function createPageSearch(article) {
  const doc = article.ownerDocument;
  /** @type {Array<{original: Text, replacements: Node[]}>} */
  let edits = [];
  /** @type {PageMatch[]} */
  let matches = [];

  function clear() {
    for (const { original, replacements } of edits) {
      const first = replacements[0];
      if (first?.parentNode) {
        first.parentNode.insertBefore(original, first);
        for (const node of replacements) node.parentNode?.removeChild(node);
      }
    }
    edits = [];
    matches = [];
  }

  /** @param {string} query */
  function search(query) {
    clear();
    if (query.trim().length < 2) return matches;
    /** @type {Map<Element, Text[]>} */
    const groups = new Map();
    const walker = doc.createTreeWalker(article, 4, {
      acceptNode(node) {
        return node.parentElement?.closest('.source-panel, .article-pagination, .mobile-toc, script, style, [hidden], [aria-hidden="true"]') ? 2 : 1;
      }
    });
    while (walker.nextNode()) {
      const node = /** @type {Text} */ (walker.currentNode);
      const block = node.parentElement?.closest('p, h1, h2, h3, h4, h5, h6, li, pre, td, th, dt, dd, figcaption') ?? node.parentElement;
      if (!block) continue;
      if (!groups.has(block)) groups.set(block, []);
      groups.get(block)?.push(node);
    }

    for (const nodes of groups.values()) {
      const value = nodes.map((node) => node.data).join('');
      const ranges = findTextRanges(value, query);
      if (!ranges.length) continue;
      const groupMatches = ranges.map((range) => ({ marks: /** @type {HTMLElement[]} */ ([]), parts: matchSnippet(value, range) }));
      matches.push(...groupMatches);
      let offset = 0;
      for (const node of nodes) {
        const fragment = doc.createDocumentFragment();
        let cursor = 0;
        for (let index = 0; index < ranges.length; index += 1) {
          const start = Math.max(0, ranges[index].start - offset);
          const end = Math.min(node.length, ranges[index].end - offset);
          if (start >= end) continue;
          fragment.append(doc.createTextNode(node.data.slice(cursor, start)));
          const mark = doc.createElement('mark');
          mark.className = 'page-match';
          mark.textContent = node.data.slice(start, end);
          fragment.append(mark);
          groupMatches[index].marks.push(mark);
          cursor = end;
        }
        offset += node.length;
        if (!cursor) continue;
        fragment.append(doc.createTextNode(node.data.slice(cursor)));
        edits.push({ original: node, replacements: Array.from(fragment.childNodes) });
        node.replaceWith(fragment);
      }
    }
    return matches;
  }

  /** @param {number} index */
  function activate(index) {
    for (let item = 0; item < matches.length; item += 1) {
      for (const mark of matches[item].marks) mark.classList.toggle('current-match', item === index);
    }
    return matches[index]?.marks[0];
  }

  return { search, clear, activate };
}
