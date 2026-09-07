import { error } from '@sveltejs/kit';
import { getArticle, getArticleEntries } from '$lib/server/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getArticleEntries();

export const load: PageServerLoad = ({ params }) => {
  const article = getArticle(params.lang as 'ru' | 'en', params.slug);
  if (!article) error(404, 'Article not found');
  return { article };
};
