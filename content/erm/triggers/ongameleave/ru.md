---
{"title":"Выход из игры (OnGameLeave)","summary":"Перед отключением ERM при выходе из текущей игры. Аргументов нет. Освободите временные ресурсы, срок жизни которых привязан к игровой сессии.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

Перед отключением ERM при выходе из текущей игры. Аргументов нет. Освободите временные ресурсы, срок жизни которых привязан к игровой сессии.

## Объявление {#declaration}

```erm
!?FU(OnGameLeave);
```

## Идентификатор и совместимость {#identity}

ID `77016`; регистрация `TRIGGER_ONGAMELEAVE`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l598) — Fixed bug: "OnWinGame" and "OnLoseGame" events were not executed after "OnGameLeave", because ERM engine was disabled by that time. Now "OnWinGame" and "OnLoseGame" occur right before "OnGameLeave".
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l673) — ERM execution is disabled after "OnGameLeave" event. MP3 and real time triggers are not executed outside of game main loop anymore. Previously triggers were executed in the context of game main menu.
- [ERA 3.9.10, *](../../compatibility/#era3-v-3-9-10-l966) — Introduced "OnAbnormalGameLeave" event to be called by plugins or HD mod in case of extreme game loop (0x4B0BA0) breaking using goto and manual stack cleaning. Improved compatibility with current HD mod versions: "OnGame…
- [ERA 3.9.4, *](../../compatibility/#era3-v-3-9-4-l1158) — Removed '$OnGameLeave' private event support, used by HD-mod earlier. Added support for 'OnGameLeave' event as a replacement.
- [ERA 3.9.4, -](../../compatibility/#era3-v-3-9-4-l1162) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "OnGameLeave" event for ERA before quitting game loop. No more need in dollar prefix for…
- [ERA 3.9.3, -](../../compatibility/#era3-v-3-9-3-l1209) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "$OnGameLeave" event for ERA before quitting game loop.
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2415) — Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate different value. Modders can use this value to check, whether player restarte…
<!-- ERA3-GENERATED:END -->
