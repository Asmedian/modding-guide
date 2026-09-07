---
{"title":"Battle action completion (OnBattleActionEnd)","summary":"No arguments. Order: OnBeforeBattleAction → OnBattleActionEnd → OnBattleRound → OnBeforeBattleStackTurn → OnBattleStackObtainsTurn → OnAfterBattleAction. Round/stack events occur on the relevant transition, not unconditionally after every action.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

No arguments. Order: OnBeforeBattleAction → OnBattleActionEnd → OnBattleRound → OnBeforeBattleStackTurn → OnBattleStackObtainsTurn → OnAfterBattleAction. Round/stack events occur on the relevant transition, not unconditionally after every action.

## Declaration {#declaration}

```erm
!?FU(OnBattleActionEnd);
```

## Identity and compatibility {#identity}

ID `77051`; registered as `TRIGGER_BATTLE_ACTION_END`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.8.5, +](../../compatibility/#era3-v-3-8-5-l1418) — Added new event "OnBattleActionEnd", occuring right after battle action, but before checking if battle is ended, before selecting next active stack and before starting new round or autoclosing the moat. Events order is t…
<!-- ERA3-GENERATED:END -->
