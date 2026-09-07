import { error } from '@sveltejs/kit';
import { getArticle } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const article = getArticle(params.lang as 'ru' | 'en', '');
  if (!article) error(404, 'Article not found');
  return { article };
};

