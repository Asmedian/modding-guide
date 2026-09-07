---
{"title":"Подсказка клетки карты (OnAdventureMapTileHint)","summary":"x1..x3 — координаты объекта; x4/x5 — тип/подтип либо -1; x6..x8 — координаты клетки под курсором. Изменяйте текст через MM, не через числовые аргументы. OnAdvMapTileHint — зарегистрированный алиас того же ID.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1..x3 — координаты объекта; x4/x5 — тип/подтип либо -1; x6..x8 — координаты клетки под курсором. Изменяйте текст через MM, не через числовые аргументы. OnAdvMapTileHint — зарегистрированный алиас того же ID.

## Объявление {#declaration}

```erm
!?FU(OnAdventureMapTileHint);
```

## Идентификатор и совместимость {#identity}

ID `77040`; регистрация `TRIGGER_ADVMAP_TILE_HINT`. Алиасы: OnAdvMapTileHint. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.14, *](../../compatibility/#era3-v-3-9-14-l676) — "OnAdvMapTileHint" was renamed to "OnAdventureMapTileHint". The previous name is deprecated, but is kept for compatibility reasons.
<!-- ERA3-GENERATED:END -->
