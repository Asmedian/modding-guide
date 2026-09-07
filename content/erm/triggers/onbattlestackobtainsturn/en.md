---
{"title":"Passing control to a stack (OnBattleStackObtainsTurn)","summary":"x1 is side (0/1), x2 its slot (0..20). Global stack index = x121+x2. This is control transfer, not necessarily regeneration; account for waiting and morale.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is side (0/1), x2 its slot (0..20). Global stack index = x1*21+x2. This is control transfer, not necessarily regeneration; account for waiting and morale.

## Declaration {#declaration}

```erm
!?FU(OnBattleStackObtainsTurn);
```

## Identity and compatibility {#identity}

ID `77006`; registered as `TRIGGER_STACK_OBTAINS_TURN`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.8.5, +](../../compatibility/#era3-v-3-8-5-l1418) — Added new event "OnBattleActionEnd", occuring right after battle action, but before checking if battle is ended, before selecting next active stack and before starting new round or autoclosing the moat. Events order is t…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2583) — The following improvements were introduced in "Era Erm Framework" mod: - "OnBeforeBattle" and "OnBeforeBattleUniversal" events were improved, storing most of prebattle parameters in global variables. i^battle_isQuick^: (…
- [ERA 3.0.3, +](../../compatibility/#era3-v-3-0-3-l3420) — Added OnBeforeBattleStackTurn event. It occurs right before OnBattleRegenerationPhase event. Parameters: Stack ID (0..41). Change the first parameter to give turn to another stack. Note, that similar OnBattleStackObtains…
<!-- ERA3-GENERATED:END -->
