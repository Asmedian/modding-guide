/**
 * Remove historical material that is retained only for source-transfer auditing.
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
  }
  if (slug === 'compatibility') {
    result = result.replace(/\n## [^\n]+\{#era3-changelog\}[\s\S]*?(?=\n<!-- ERA3-GENERATED:END -->)/i, '');
  } else {
    result = result.replace(/\n?<!-- ERA3-GENERATED:START -->[\s\S]*?<!-- ERA3-GENERATED:END -->/gi, '');
  }
  result = result.replace(/<a href="(?:\.\.\/)*#ref-cont-wogteam"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  return result;
}
