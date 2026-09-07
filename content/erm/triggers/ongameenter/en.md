---
{"title":"Entering the game (OnGameEnter)","summary":"After starting or loading a game, before adventure-map control. No arguments. Suitable for obtaining process-local pointers and exports; distinguish it from one-time PI initialization.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After starting or loading a game, before adventure-map control. No arguments. Suitable for obtaining process-local pointers and exports; distinguish it from one-time PI initialization.

## Declaration {#declaration}

```erm
!?FU(OnGameEnter);
```

## Identity and compatibility {#identity}

ID `77015`; registered as `TRIGGER_ONGAMEENTER`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.4, -](../../compatibility/#era3-v-3-9-4-l1162) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "OnGameLeave" event for ERA before quitting game loop. No more need in dollar prefix for…
- [ERA 3.9.3, -](../../compatibility/#era3-v-3-9-3-l1209) — Fixed issues with HD-mod way of loading game from battle. OnGameEnter/OnGameLeave counter will not be corrupted if HD mod generates "$OnGameLeave" event for ERA before quitting game loop.
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2415) — Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate different value. Modders can use this value to check, whether player restarte…
<!-- ERA3-GENERATED:END -->
