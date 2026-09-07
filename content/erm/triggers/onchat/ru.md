---
{"title":"Игровой чат (OnChat)","summary":"x1 задаёт стадию: 0 вход (x2 — запрет); 1 ввод (x2 — адрес текста, x3 — действие: 0 очистить, 1 закрыть, 2 штатно); 2 выход. Значения аргументов зависят от стадии; сначала проверяйте x1.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 задаёт стадию: 0 вход (x2 — запрет); 1 ввод (x2 — адрес текста, x3 — действие: 0 очистить, 1 закрыть, 2 штатно); 2 выход. Значения аргументов зависят от стадии; сначала проверяйте x1.

## Объявление {#declaration}

```erm
!?FU(OnChat);
```

## Идентификатор и совместимость {#identity}

ID `77014`; регистрация `TRIGGER_ONCHAT`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l534) — Added the following constants to Era Erm Framework: CHAT_EVENT_TYPE_XXX for 'OnChat' event subtype CHAT_EVENT_RESULT_XXX for 'OnChat' event result
<!-- ERA3-GENERATED:END -->
