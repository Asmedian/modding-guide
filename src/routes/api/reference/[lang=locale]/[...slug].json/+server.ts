import { getArticle, getArticleEntries } from '$lib/server/content';
import { prepareContextHtml } from '$lib/reference/context.mjs';
import { base } from '$app/paths';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;
export const trailingSlash = 'never';
export const entries = () => [
  ...getArticleEntries('erm'),
  { lang: 'ru', slug: '_overview' },
  { lang: 'en', slug: '_overview' }
];
export const GET: RequestHandler = async ({ params }) => {
  const article = await getArticle(params.lang as 'ru' | 'en', params.slug === '_overview' ? '' : params.slug, 'erm');
  if (!article) error(404, 'Reference not found');
  const articleUrl = `${base}/${params.lang}/erm/${article.slug ? `${article.slug}/` : ''}`;
  return json({ title: article.title, slug: article.slug, bodyHtml: prepareContextHtml(article.bodyHtml, articleUrl) });
};
