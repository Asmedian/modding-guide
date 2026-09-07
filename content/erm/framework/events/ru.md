---
{"title":"События Framework","summary":"Дополнительные события, расширенный контекст и порядок завершающих обработчиков.","translationStatus":"reviewed"}
---

## Подключение библиотеки {#installation}

Требуется согласованная пара lib и lib_end из Framework для ERA 3.9.15+. Начальный файл готовит контекст до скриптов мода, завершающий восстанавливает его и вызывает дополнительные события. Не вызывайте *_Quit вручную.

## OnAfterErmInited {#onaftererminited}

```erm
!?FU(OnAfterErmInited);
```
Без аргументов. После полной цепочки OnAfterErmInstructions, перед OnStartOrLoad(TRUE).

## OnStartOrLoad {#onstartorload}

```erm
!?FU(OnStartOrLoad);
```
x1 — новая игра TRUE, загрузка FALSE. Объединяет инициализацию временных данных после старта и загрузки.

## OnAfterBattleSetup {#onafterbattlesetup}

```erm
!?FU(OnAfterBattleSetup);
```
Без аргументов. После OnBeforeBattleUniversal; базовые координаты, герои и флаги боя уже обновлены. Готовность BM/EA всё ещё определяется фазой боя.

## OnKeyPressed_AdvMap {#onkeypressed-advmap}

```erm
!?FU(OnKeyPressed_AdvMap);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу AdvMap. Надёжный контракт содержит два аргумента.

## OnKeyPressed_Battle {#onkeypressed-battle}

```erm
!?FU(OnKeyPressed_Battle);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу Battle. Надёжный контракт содержит два аргумента.

## OnKeyPressed_HeroScreen {#onkeypressed-heroscreen}

```erm
!?FU(OnKeyPressed_HeroScreen);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу HeroScreen. Надёжный контракт содержит два аргумента.

## OnKeyPressed_HeroMeetingScreen {#onkeypressed-heromeetingscreen}

```erm
!?FU(OnKeyPressed_HeroMeetingScreen);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу HeroMeetingScreen. Надёжный контракт содержит два аргумента.

## OnKeyPressed_Town {#onkeypressed-town}

```erm
!?FU(OnKeyPressed_Town);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу Town. Надёжный контракт содержит два аргумента.

## OnKeyReleased_AdvMap {#onkeyreleased-advmap}

```erm
!?FU(OnKeyReleased_AdvMap);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу AdvMap. Надёжный контракт содержит два аргумента.

## OnKeyReleased_Battle {#onkeyreleased-battle}

```erm
!?FU(OnKeyReleased_Battle);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу Battle. Надёжный контракт содержит два аргумента.

## OnKeyReleased_HeroScreen {#onkeyreleased-heroscreen}

```erm
!?FU(OnKeyReleased_HeroScreen);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу HeroScreen. Надёжный контракт содержит два аргумента.

## OnKeyReleased_HeroMeetingScreen {#onkeyreleased-heromeetingscreen}

```erm
!?FU(OnKeyReleased_HeroMeetingScreen);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу HeroMeetingScreen. Надёжный контракт содержит два аргумента.

## OnKeyReleased_Town {#onkeyreleased-town}

```erm
!?FU(OnKeyReleased_Town);
```
x1 — клавиша, x2 — изменяемая блокировка. Фильтр по текущему основному диалогу Town. Надёжный контракт содержит два аргумента.

## Расширение событий движка {#extensions}

OnEveryDay получает пять аргументов и timer*. События клавиатуры и мыши получают глобальный контекст; OnKeyPressed_* передаёт только x1/x2, а не x3 исходного события. Код OnKeyReleased_Quit передаёт третий аргумент, которого нет в заявленном контракте движка: не используйте его как isDown. OnTownHallMouseClick в снимке Framework устарел относительно OnTownFortMouseClick движка.

## Контракты и обработчики {#links}

[События движка](../../triggers/) · [Глобальные переменные](../globals/) · [Служебные обработчики](../functions/#events)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.24, +](../../compatibility/#era3-v-3-9-24-l102) — Implemented detailed game, Era and plugins allocated memory tracking. Memory report is written to "log.txt" on crash or "OnGenerateDebugInfo" event (triggered by F11).
- [ERA 3.9.21, +](../../compatibility/#era3-v-3-9-21-l155) — Added the following functions to Era Erm Framework: !?FU(ReadJsonIntArray); ; Reads integer array from json config into either existing dynamic array or into automatically created local one. !#VA(jsonKeyPtr:x); JSON full…
- [ERA 3.9.19, *](../../compatibility/#era3-v-3-9-19-l238) — "OnRemoteEvent" is not triggered for FU:D call anymore. Era now uses FireRemoteEvent to synchronize the creation of objects on adventure map in multiplayer.
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l308) — Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in PvP battles. Example: !?FU(OnBattleScreenMouseClick)&i^mouse_action^=(MOUSE_R…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l464) — Added new event "OnBeforeLoadGame" for plugins. It occurs right after old game leaving and before new game loading. TOnBeforeLoadGameEvent = packed record FileName: pchar; end;
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l534) — Added the following constants to Era Erm Framework: CHAT_EVENT_TYPE_XXX for 'OnChat' event subtype CHAT_EVENT_RESULT_XXX for 'OnChat' event result
- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l598) — Fixed bug: "OnWinGame" and "OnLoseGame" events were not executed after "OnGameLeave", because ERM engine was disabled by that time. Now "OnWinGame" and "OnLoseGame" occur right before "OnGameLeave".
- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l610) — Fixed old event handling bug. Triggering ERM event with disabled ERM resulted in global event not being generated either. For example, Era and plugins could not handle 'OnSavegameRead' event if ERM was disabled at the mo…
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l673) — ERM execution is disabled after "OnGameLeave" event. MP3 and real time triggers are not executed outside of game main loop anymore. Previously triggers were executed in the context of game main menu.
- [ERA 3.9.14, *](../../compatibility/#era3-v-3-9-14-l676) — "OnAdvMapTileHint" was renamed to "OnAdventureMapTileHint". The previous name is deprecated, but is kept for compatibility reasons.
- [ERA 3.9.14, *](../../compatibility/#era3-v-3-9-14-l677) — Deprecated 'OnAbnormalGameLeave' event. HD mod way to return from combat screen to main game menu is not supported anymore.
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l691) — Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, *](../../compatibility/#era3-v-3-9-12-l769) — The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attacker side, battle may still be cancelled !?FU(OnBeforeBattleBeforeDataSend); …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l802) — Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting existing values in a smart way. ; The parts may have overlapping indexes. The s…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l883) — Added new event for plugins/Lua: 'OnAfterReloadLanguageData'. It occurs whenever Era reloads all language json data from disk.
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.11, *](../../compatibility/#era3-v-3-9-11-l960) — Changed "OnBeforeBattleAction" event to trigger before Enchantress, Hell steed and creature experience mass spells processing.
- [ERA 3.9.11, *](../../compatibility/#era3-v-3-9-11-l961) — Fixed v997 in "OnBeforeBattleAction" and "OnAfterBattleAction" events. It is equal to Era combat round counter now.
- [Все связанные записи](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
