---
{"title":"Regeneration phase (OnBattleRegeneratePhase)","summary":"x1 is stack 0..41; x2 points to its structure; x3 blocks the standard phase (0/1, mutable). The pointer is valid only in the current battle. Use the separate OnBattleStackRegeneration to change healing amount.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is stack 0..41; x2 points to its structure; x3 blocks the standard phase (0/1, mutable). The pointer is valid only in the current battle. Use the separate OnBattleStackRegeneration to change healing amount.

## Declaration {#declaration}

```erm
!?FU(OnBattleRegeneratePhase);
```

## Identity and compatibility {#identity}

ID `77007`; registered as `TRIGGER_REGENERATE_PHASE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
