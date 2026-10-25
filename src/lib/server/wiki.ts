import pages from '../../../content/wiki/_registry/pages.json';
import catalog from '../../../content/wiki/_registry/catalog.json';
import type { WikiCatalogPage } from '$lib/wiki/types';

// Server build input only. Route data contains at most 72 resource records.
const pageIndex = new Map((pages as WikiCatalogPage[]).map(page => [page.slug,page]));
export function getWikiPage(slug: string) {
  return pageIndex.get(slug.replace(/^\/+|\/+$/g,''));
}
export { catalog as wikiCatalog };
