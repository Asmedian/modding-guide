export type SymbolEntry = {
  name: string;
  kind: 'receiver' | 'command' | 'event' | 'function' | 'global' | 'constant';
  slug: string;
  anchor: string;
  aliases: string[];
  label: { ru: string; en: string };
};

export function normalizeSymbol(value: string) {
  return value.trim().replace(/^![!?#$]/, '').toLowerCase();
}
