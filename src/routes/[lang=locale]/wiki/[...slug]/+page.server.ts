import { error } from '@sveltejs/kit';
import { getArticle, getArticleEntries } from '$lib/server/content';
import { getWikiPage, wikiCatalog } from '$lib/server/wiki';
import type { EntryGenerator, PageServerLoad } from './$types';
export const entries: EntryGenerator = () => getArticleEntries('wiki');
export const load: PageServerLoad = async ({ params }) => {
  const slug = params.slug;
  const article = await getArticle(params.lang as 'ru' | 'en', slug, 'wiki');
  if (!article) error(404, 'Wiki page not found');
  const catalogPage = getWikiPage(slug);
  // The catalog supplies its own HTML; avoid sending a second, unused copy of every row.
  return { article: catalogPage ? {...article,bodyHtml:'',sections:[],sources:[]} : article, catalogPage, catalog: slug ? undefined : wikiCatalog };
};
