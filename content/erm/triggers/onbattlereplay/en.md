---
{"title":"Battle replay (OnBattleReplay)","summary":"After battle state is reset for replay. No arguments. OnBeforeBattleUniversal does not run again; rebuild combat-dependent context here. Requires replay support in the installed build.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After battle state is reset for replay. No arguments. OnBeforeBattleUniversal does not run again; rebuild combat-dependent context here. Requires replay support in the installed build.

## Declaration {#declaration}

```erm
!?FU(OnBattleReplay);
```

## Identity and compatibility {#identity}

ID `77043`; registered as `TRIGGER_BATTLE_REPLAY`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2040) — Fixed non-working "OnBeforeBattleReplay" and "OnAfterBattleReplay events". Newest "BattleReplay" plugin by igrik is required. After battle end when user clicks "Cancel" button, "OnBeforeBattleReplay" is generated. Battle…
<!-- ERA3-GENERATED:END -->
