---
{"title":"Before showing the battlefield (OnBeforeBattlefieldVisible)","summary":"The field is still dark; the event precedes early BR-1. No arguments. Early BA/BF do not guarantee BM/EA structures are ready; choose the phase required by your data.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

The field is still dark; the event precedes early BR-1. No arguments. Early BA/BF do not guarantee BM/EA structures are ready; choose the phase required by your data.

## Declaration {#declaration}

```erm
!?FU(OnBeforeBattlefieldVisible);
```

## Identity and compatibility {#identity}

ID `77019`; registered as `TRIGGER_ONBEFORE_BATTLEFIELD_VISIBLE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1185) — Added new event: "OnBeforePlaceBattleObstacles", occuring after "OnBeforeBattlefieldVisible" event. Global RNG is switched to the native one before calling ERM event and the generator is seeded with the following value: …
<!-- ERA3-GENERATED:END -->
