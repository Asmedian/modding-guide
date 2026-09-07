---
{"title":"Количество регенерации стека (OnBattleStackRegeneration)","summary":"x1 — стек 0..41; x2 — изменяемое лечение; x3 — исходное стандартное лечение. Результат ограничивается диапазоном 0..потерянные HP верхнего существа. Событие может дать лечение стеку без штатной регенерации, но не воскрешает погибших существ. Это отдельное событие от OnBattleRegeneratePhase.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — стек 0..41; x2 — изменяемое лечение; x3 — исходное стандартное лечение. Результат ограничивается диапазоном 0..потерянные HP верхнего существа. Событие может дать лечение стеку без штатной регенерации, но не воскрешает погибших существ. Это отдельное событие от OnBattleRegeneratePhase.

## Объявление {#declaration}

```erm
!?FU(OnBattleStackRegeneration);
```

## Идентификатор и совместимость {#identity}

ID `77056`; регистрация `TRIGGER_BATTLE_STACK_REGENERATION`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
<!-- ERA3-GENERATED:END -->
