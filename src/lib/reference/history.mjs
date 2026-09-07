/** @template {{url: string}} T @param {{entries: T[], index: number}} state @param {T} entry */
export function pushReference(state, entry) {
  const current = state.entries[state.index];
  if (current?.url === entry.url) return state;
  const entries = [...state.entries.slice(0, state.index + 1), entry];
  return { entries, index: entries.length - 1 };
}

/** @template T @param {{entries: T[], index: number}} state @param {number} direction */
export function moveReference(state, direction) {
  if (!state.entries.length) return state;
  const index = Math.max(0, Math.min(state.entries.length - 1, state.index + direction));
  return { entries: state.entries, index };
}
