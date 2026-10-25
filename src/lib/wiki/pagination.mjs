/** At most five page links: a local four-page window and the final page. */
export function paginationPages(current, total) {
  if (total <= 5) return Array.from({length:total},(_,i)=>i+1);
  const start=Math.max(1,Math.min(current-1,total-4));
  const pages=Array.from({length:4},(_,i)=>start+i);
  if (pages.at(-1)<total-1) pages.push('gap');
  pages.push(total);
  return pages;
}
