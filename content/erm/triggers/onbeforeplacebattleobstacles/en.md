---
{"title":"Before placing battle obstacles (OnBeforePlaceBattleObstacles)","summary":"After OnBeforeBattlefieldVisible, before obstacles. No arguments. Temporarily uses the native RNG seeded with 110291x+167801y+81569; consuming random numbers here affects placement.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After OnBeforeBattlefieldVisible, before obstacles. No arguments. Temporarily uses the native RNG seeded with 110291*x+167801*y+81569; consuming random numbers here affects placement.

## Declaration {#declaration}

```erm
!?FU(OnBeforePlaceBattleObstacles);
```

## Identity and compatibility {#identity}

ID `77054`; registered as `TRIGGER_BEFORE_BATTLE_PLACE_BATTLE_OBSTACLES`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1185) — Added new event: "OnBeforePlaceBattleObstacles", occuring after "OnBeforeBattlefieldVisible" event. Global RNG is switched to the native one before calling ERM event and the generator is seeded with the following value: …
<!-- ERA3-GENERATED:END -->
