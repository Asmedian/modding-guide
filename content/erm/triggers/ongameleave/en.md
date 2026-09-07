---
{"title":"Leaving the game (OnGameLeave)","summary":"Before ERM is disabled when leaving the current game. No arguments. Release temporary resources tied to the game session.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

Before ERM is disabled when leaving the current game. No arguments. Release temporary resources tied to the game session.

## Declaration {#declaration}

```erm
!?FU(OnGameLeave);
```

## Identity and compatibility {#identity}

ID `77016`; registered as `TRIGGER_ONGAMELEAVE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l598) — Fixed bug: "OnWinGame" and "OnLoseGame" events were not executed after "OnGameLeave", because ERM engine was disabled by that time. Now "OnWinGame" and "OnLoseGame" occur right before "OnGameLeave".
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l673) — ERM execution is disabled after "OnGameLeave" event. MP3 and real time triggers are not executed outside of game main loop anymore. Previously triggers were executed in the context of game main menu.
- [ERA 3.9.10, *](../../compatibility/#era3-v-3-9-10-l966) — Introduced "OnAbnormalGameLeave" event to be called by plugins or HD mod in case of extreme game loop (0x4B0BA0) breaking using goto and manual stack cleaning. Improved compatibility with current HD mod versions: "OnGame…
- [ERA 3.9.4, *](../../compatibility/#era3-v-3-9-4-l1158) — Removed '$OnGameLeave' private event support, used by HD-mod earlier. Added support for 'OnGameLeave' event as a replacement.
- [ERA 3.9.4, -](../../compatibility/#era3-v-3-9-4-l1162) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "OnGameLeave" event for ERA before quitting game loop. No more need in dollar prefix for…
- [ERA 3.9.3, -](../../compatibility/#era3-v-3-9-3-l1209) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "$OnGameLeave" event for ERA before quitting game loop.
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2415) — Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate different value. Modders can use this value to check, whether player restarte…
<!-- ERA3-GENERATED:END -->
