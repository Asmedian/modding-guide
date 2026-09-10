import { error } from '@sveltejs/kit';
import { getArticle, getArticleEntries } from '$lib/server/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getArticleEntries('plugins');

export const load: PageServerLoad = async ({ params }) => {
  const article = await getArticle(params.lang as 'ru' | 'en', params.slug, 'plugins');
  if (!article) error(404, 'Article not found');
  return { article };
};
