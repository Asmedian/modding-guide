import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function buildSymbols(root, entities) {
  const registry = (name) => JSON.parse(readFileSync(join(root, 'content/erm/_registry', `${name}.json`), 'utf8'));
  const symbols = [];
  const add = (name, kind, slug, anchor = '', aliases = [], label = { ru: name, en: name }) => symbols.push({ name, kind, slug, anchor, aliases, label });
  for (const r of registry('receivers')) {
    add(r.code, 'receiver', r.slug, '', [`!!${r.code}`], r.title);
    const entity = entities.find((e) => e.locale === 'ru' && e.slug === r.slug && e.section === 'erm');
    const english = entities.find((e) => e.locale === 'en' && e.slug === r.slug && e.section === 'erm');
    for (const segment of entity.segments.filter((s) => s.id.startsWith('command-'))) {
      const candidates = segment.heading.split(/\s+\/\s+/).flatMap((part) => {
        const code = part.match(/^([A-Z](?:\d+)?)/)?.[1];
        return code ? [code] : [];
      });
      for (const c of new Set(candidates)) {
        const name = `${r.code}:${c}`;
        if (!symbols.some((s) => s.name === name)) add(name, 'command', r.slug, segment.id, [`!!${name}`], { ru: segment.heading, en: english.segments.find((s) => s.id === segment.id)?.heading ?? segment.heading });
      }
    }
  }
  for (const command of registry('legacy-commands')) {
    // The original entries take precedence over earlier combined editorial headings.
    const existing = symbols.findIndex((s) => s.kind === 'command' && s.name === command.name);
    const item = { name: command.name, kind: 'command', slug: command.slug, anchor: command.anchor, aliases: [`!!${command.name}`], label: { ru: command.signature, en: command.signature } };
    if (existing >= 0) symbols[existing] = item;
    else symbols.push(item);
  }
  for (const e of registry('trigger-families')) add(e.code, 'event', e.slug, '', [`!?${e.code}`], e.title);
  for (const e of registry('events')) add(e.name, 'event', e.slug, '', [...e.aliases, String(e.id), ...(e.legacyCode ? [e.legacyCode, `!?${e.legacyCode}`] : [])]);
  for (const e of registry('framework-events')) add(e.name, 'event', e.slug, e.anchor);
  for (const f of registry('functions')) {
    if (!symbols.some((s) => s.name === f.name)) add(f.name, 'function', f.slug, '', [`FU(${f.name})`], f.summary);
  }
  for (const g of registry('globals')) add(g.name, 'global', 'framework/globals', g.anchor, [], { ru: g.ru, en: g.en });
  for (const c of registry('constants')) add(c.name, 'constant', `framework/constants/${c.group.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, `const-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, [], { ru: `${c.name} = ${c.value}`, en: `${c.name} = ${c.value}` });
  symbols.sort((a, b) => a.name.localeCompare(b.name, 'en'));
  const outputPath = join(root, 'src/lib/generated/symbol-index.json');
  const output = `${JSON.stringify(symbols)}\n`;
  if (readFileSync(outputPath, 'utf8') !== output) writeFileSync(outputPath, output);
  return symbols;
}
