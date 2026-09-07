---
{"title":"After placing battle obstacles (OnAfterPlaceBattleObstacles)","summary":"After obstacle placement. No arguments. ERA restores its main RNG; cell changes must account for obstacles already placed.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After obstacle placement. No arguments. ERA restores its main RNG; cell changes must account for obstacles already placed.

## Declaration {#declaration}

```erm
!?FU(OnAfterPlaceBattleObstacles);
```

## Identity and compatibility {#identity}

ID `77055`; registered as `TRIGGER_AFTER_BATTLE_PLACE_BATTLE_OBSTACLES`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1187) — Added new event "OnAfterPlaceBattleObstacles", occuring after all obstacles are placed on battlefield. Random number generated is switched back to the qualitative one. New custom obstacles may be added in this phase.
<!-- ERA3-GENERATED:END -->
