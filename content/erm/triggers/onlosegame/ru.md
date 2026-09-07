---
{"title":"Поражение в игре (OnLoseGame)","summary":"Для поражения человека, непосредственно перед OnGameLeave в актуальной реализации. Аргументов нет. Учитывайте отсутствие дальнейшего игрового хода.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

Для поражения человека, непосредственно перед OnGameLeave в актуальной реализации. Аргументов нет. Учитывайте отсутствие дальнейшего игрового хода.

## Объявление {#declaration}

```erm
!?FU(OnLoseGame);
```

## Идентификатор и совместимость {#identity}

ID `77048`; регистрация `TRIGGER_LOSE_GAME`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l598) — Fixed bug: "OnWinGame" and "OnLoseGame" events were not executed after "OnGameLeave", because ERM engine was disabled by that time. Now "OnWinGame" and "OnLoseGame" occur right before "OnGameLeave".
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1949) — Added new ERM events: - "OnWinGame" occurs when human player wins scenario. - "OnLoseGame" occurs when human player loses scenario. - "OnTransferHero" occurs when hero data from the previous campaign scenario is transfer…
<!-- ERA3-GENERATED:END -->
