/**
 * Prepare source-transfer material for publication while retaining the audited originals.
 * @param {string} markdown
 * @param {'docs' | 'erm' | 'plugins'} section
 * @param {string} slug
 */
export function prepareArticleMarkdown(markdown, section, slug) {
  if (section !== 'erm') return markdown;
  let result = markdown;
  if (!slug) {
    result = result.replace(/<h3 class="erm-align-center"><a href="\.\/#ref-cont-abouthelp-o"[\s\S]*?<\/h3>\s*/i, '');
    result = result.replace(/<div class="erm-paragraph">(?=[\s\S]{0,350}<span class="erm-anchor" id="ref-cont-abouthelp-n1")[\s\S]*?<\/div>/i, '');
    result = result.replace(/<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-abouthelp-o"><\/span>[\s\S]*?<\/details>/i, '');
    result = result.replace(/\n## About \{#ref-cont-wogteam\}[\s\S]*?(?=\n## ERM-HELP \{#ref-index\})/i, '');
    result = result.replace(/^.*ref-cont-wogteam.*\r?\n/gm, '');
    const main = result.match(/^## ERM-HELP \{#ref-cont-main\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0];
    const about = result.match(/^## (?:О справочнике|About the reference) \{#ref-cont-abouthelp\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0] ?? '';
    const notation = about.match(/<div class="erm-paragraph">(?:В справочнике используется|The reference book uses)[\s\S]*?(?=\s*<\/div>\s*<\/section>)/i)?.[0] ?? '';
    if (main && notation) {
      const removedBlocks = [
        about,
        result.match(/^## (?:Ссылки|References) \{#ref-cont-links\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0] ?? '',
        result.match(/^## ERM-HELP \{#ref-index\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0] ?? '',
        result.match(/^## ERM Help \{#ref-titre\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0] ?? ''
      ];
      const legacyIds = new Set(removedBlocks.flatMap((block) => [...block.matchAll(/\bid="([a-z0-9-]+)"/gi)].map((match) => match[1])));
      legacyIds.add('ref-cont-abouthelp');
      legacyIds.add('ref-cont-links');
      legacyIds.add('ref-index');
      legacyIds.add('ref-titre');
      const aliases = [...legacyIds].map((id) => `<span class="erm-anchor erm-legacy-alias" id="${id}"></span>`).join('');
      const cleanMain = main
        .replace(/<img\b[^>]*alt="ERM-HELP version 2\.10b[^>]*>/i, '')
        .replace(/<span>version 2\.10b<br>\s*<u><strong>[\s\S]*?<\/strong><\/u><\/span>/i, '')
        .replace(/<div class="erm-align-center erm-paragraph">[\s\S]*?<\/div>\s*(?=<div class="erm-align-left erm-paragraph">)/i, '')
        .replace(/(?:На данный момент подготовлено 78 официальных скриптов, влияющих на самые разные\s*аспекты игры\.|At the moment, 78 official scripts have been prepared, affecting a wide variety of\s*aspects of the game\.)<br>/i, '')
        .replace(/<span class="erm-source-title"><a href="\.\/#ref-cont-abouthelp">[\s\S]*?<\/span>/i, '')
        .replace(/<section class="erm-reference" lang="(ru|en)">/i, '<section class="erm-reference erm-help-intro" lang="$1">')
        .replace('Новичкам рекомендуется почитать', 'Новичкам рекомендуется пройти')
        .replace('Beginners are advised to read', 'Beginners are advised to complete')
        .replace(/<\/section>\s*:::\s*$/, `${notation}\n${aliases}\n</section>\n:::`)
        .replace(/[ \t]+$/gm, '');
      const withoutLegacy = result
        .replace(/^## (?:О справочнике|About the reference) \{#ref-cont-abouthelp\}[\s\S]*?(?=^## |(?![\s\S]))/m, '')
        .replace(/^## (?:Ссылки|References) \{#ref-cont-links\}[\s\S]*?(?=^## |(?![\s\S]))/m, '')
        .replace(/^## ERM-HELP \{#ref-cont-main\}[\s\S]*?(?=^## |(?![\s\S]))/m, '')
        .replace(/^## ERM-HELP \{#ref-index\}[\s\S]*?(?=^## |(?![\s\S]))/m, '')
        .replace(/^## ERM Help \{#ref-titre\}[\s\S]*?(?=^## |(?![\s\S]))/m, '');
      result = `${cleanMain.trim()}\n\n${withoutLegacy.trimStart()}`;
    }
  }
  if (slug === 'index') {
    const removedReceivers = result.match(/^## (?:Ресиверы|Receivers) \{#ref-cont-list\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0] ?? '';
    const legacyIds = new Set([...removedReceivers.matchAll(/\bid="([a-z0-9-]+)"/gi)].map((match) => match[1]));
    legacyIds.add('ref-cont-list');
    const aliases = [...legacyIds].map((id) => `<span class="erm-anchor erm-legacy-alias" id="${id}"></span>`).join('');
    const catalog = result.match(/^## (?:Поиск по символу|Find a symbol) \{#catalog\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0];
    const references = result.match(/^## (?:Тематические каталоги|Topic catalogs) \{#references\}[\s\S]*?(?=^## |(?![\s\S]))/m)?.[0];
    if (catalog && references) {
      result = result
        .replace(/^## (?:Ресиверы|Receivers) \{#ref-cont-list\}[\s\S]*?(?=^## |(?![\s\S]))/m, '')
        .replace(catalog, '')
        .replace(references, '');
      result = `:::erm\n<section class="erm-reference">${aliases}</section>\n:::\n\n${references.trim()}\n\n${catalog.trim()}\n\n${result.trim()}`;
    }
  }
  if (slug === 'compatibility') {
    result = result.replace(/\n## [^\n]+\{#era3-changelog\}[\s\S]*?(?=\n<!-- ERA3-GENERATED:END -->)/i, '');
  } else {
    result = result.replace(/\n?<!-- ERA3-GENERATED:START -->[\s\S]*?<!-- ERA3-GENERATED:END -->/gi, '');
  }
  if (slug === 'syntax') {
    result = result.replace(/^## Cont\/ingener\.htm \{#ref-cont-ingener\}[\s\S]*?(?=^## (?:Ресиверы: общее|Receivers: General) \{#ref-cont-receiversol\})/m, '');
  }
  result = result.replace(/<a href="(?:\.\.\/)*#ref-cont-wogteam"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  return result;
}
