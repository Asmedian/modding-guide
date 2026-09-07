---
{"title":"Вход в игру (OnGameEnter)","summary":"После новой игры или загрузки, перед передачей управления на карте. Аргументов нет. Подходит для получения временных адресов и экспортов текущего процесса; не путайте с однократной инициализацией PI.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

После новой игры или загрузки, перед передачей управления на карте. Аргументов нет. Подходит для получения временных адресов и экспортов текущего процесса; не путайте с однократной инициализацией PI.

## Объявление {#declaration}

```erm
!?FU(OnGameEnter);
```

## Идентификатор и совместимость {#identity}

ID `77015`; регистрация `TRIGGER_ONGAMEENTER`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.4, -](../../compatibility/#era3-v-3-9-4-l1162) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "OnGameLeave" event for ERA before quitting game loop. No more need in dollar prefix for…
- [ERA 3.9.3, -](../../compatibility/#era3-v-3-9-3-l1209) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "$OnGameLeave" event for ERA before quitting game loop.
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2415) — Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate different value. Modders can use this value to check, whether player restarte…
<!-- ERA3-GENERATED:END -->
