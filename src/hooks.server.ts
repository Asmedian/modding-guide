import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const locale = event.params.lang === 'en' ? 'en' : 'ru';
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', locale)
  });
};
