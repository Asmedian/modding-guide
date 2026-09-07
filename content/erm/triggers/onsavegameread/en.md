---
{"title":"Reading save data (OnSavegameRead)","summary":"After ERM variables are restored. No arguments. Read custom sections here; pointers from the previous session are invalid.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After ERM variables are restored. No arguments. Read custom sections here; pointers from the previous session are invalid.

## Declaration {#declaration}

```erm
!?FU(OnSavegameRead);
```

## Identity and compatibility {#identity}

ID `77002`; registered as `TRIGGER_SAVEGAME_READ`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l610) — Fixed old event handling bug. Triggering ERM event with disabled ERM resulted in global event not being generated either. For example, Era and plugins could not handle 'OnSavegameRead' event if ERM was disabled at the mo…
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
<!-- ERA3-GENERATED:END -->
