import docsNavigation from '../../../content/_navigation/docs.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
  navigation: docsNavigation
});
