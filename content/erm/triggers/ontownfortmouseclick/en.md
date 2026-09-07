---
{"title":"Town fort mouse click (OnTownFortMouseClick)","summary":"CM context. Current registration uses OnTownFortMouseClick; the old OnTownHallMouseClick was renamed and is not registered as an alias. The supplied Framework still handles the old name: check version alignment when porting.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

CM context. Current registration uses OnTownFortMouseClick; the old OnTownHallMouseClick was renamed and is not registered as an alias. The supplied Framework still handles the old name: check version alignment when porting.

## Declaration {#declaration}

```erm
!?FU(OnTownFortMouseClick);
```

## Identity and compatibility {#identity}

ID `77026`; registered as `TRIGGER_TOWN_FORT_MOUSE_CLICK`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2044) — Renamed "OnTownHallMouseClick" to more accurate "OnTownFortMouseClick". &#91;!&#93; SN:Q is deprecated and shoudn't be used for new scripts because it may break any ERM library/mod/script functionality. ERM interpreter and Era E…
<!-- ERA3-GENERATED:END -->
