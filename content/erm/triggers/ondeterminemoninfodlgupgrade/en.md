---
{"title":"Choosing a creature upgrade (OnDetermineMonInfoDlgUpgrade)","summary":"x1 is creature; x2 upgraded type or -1, mutable; x3 town or -1; x4 hero or -1. This controls the upgrade available in the creature-info dialog.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is creature; x2 upgraded type or -1, mutable; x3 town or -1; x4 hero or -1. This controls the upgrade available in the creature-info dialog.

## Declaration {#declaration}

```erm
!?FU(OnDetermineMonInfoDlgUpgrade);
```

## Identity and compatibility {#identity}

ID `77039`; registered as `TRIGGER_DETERMINE_MON_INFO_DLG_UPGRADE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4074) — Added new event "OnDetermineMonInfoDlgUpgrade", occured, when game determines wether to show upgrade button in monster info dialog. Parameters: MonType, UpgradedType or -1, Town ID or -1, Hero ID or -1. -1 for UpgradedTy…
<!-- ERA3-GENERATED:END -->
