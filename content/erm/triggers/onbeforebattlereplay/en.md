---
{"title":"Before battle replay (OnBeforeBattleReplay)","summary":"After the user rejects the result, before battle state is reset. No arguments. Suitable for releasing temporary resources from the previous attempt.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After the user rejects the result, before battle state is reset. No arguments. Suitable for releasing temporary resources from the previous attempt.

## Declaration {#declaration}

```erm
!?FU(OnBeforeBattleReplay);
```

## Identity and compatibility {#identity}

ID `77044`; registered as `TRIGGER_BEFORE_BATTLE_REPLAY`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2040) — Fixed non-working "OnBeforeBattleReplay" and "OnAfterBattleReplay events". Newest "BattleReplay" plugin by igrik is required. After battle end when user clicks "Cancel" button, "OnBeforeBattleReplay" is generated. Battle…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2495) — Added new events "OnBeforeBattleReplay" and "OnAfterBattleReplay", depending on third-party plugins like "BattleReplay" by igrik. The engine now handles "OnBeforeBattleReplay" to fix issues with battlefield obstacles gen…
<!-- ERA3-GENERATED:END -->
