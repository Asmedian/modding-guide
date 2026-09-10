import { error } from '@sveltejs/kit';
import { getArticle } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const article = await getArticle(params.lang as 'ru' | 'en', '', 'plugins');
  if (!article) error(404, 'Article not found');
  return { article };
};
