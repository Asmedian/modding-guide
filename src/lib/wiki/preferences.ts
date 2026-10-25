import { writable } from 'svelte/store';

export const wikiOutlineKey = 'modding-guide:wiki-outline:v1';
export const wikiOutlineOpen = writable(true);

export function readWikiOutline() {
  try { wikiOutlineOpen.set(localStorage.getItem(wikiOutlineKey) !== 'closed'); }
  catch { /* Keep the shared in-memory choice when storage is unavailable. */ }
}

export function saveWikiOutline(open: boolean) {
  wikiOutlineOpen.set(open);
  try { localStorage.setItem(wikiOutlineKey, open ? 'open' : 'closed'); } catch {}
}
