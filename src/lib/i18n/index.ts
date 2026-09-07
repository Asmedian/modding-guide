import ru from './ui.ru.json';
import en from './ui.en.json';

export type Locale = 'ru' | 'en';
type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function translator(locale: Locale) {
  return (key: string) => dictionaries[locale][key] ?? key;
}

