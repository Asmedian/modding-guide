import { error } from '@sveltejs/kit';
import { getArticle, getArticleEntries } from '$lib/server/content';
import { getWikiPage, wikiCatalog } from '$lib/server/wiki';
import type { EntryGenerator, PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
  const slug = '';
  const article = await getArticle(params.lang as 'ru' | 'en', slug, 'wiki');
  if (!article) error(404, 'Wiki page not found');
  return { article, catalogPage: getWikiPage(slug), catalog: slug ? undefined : wikiCatalog };
};
