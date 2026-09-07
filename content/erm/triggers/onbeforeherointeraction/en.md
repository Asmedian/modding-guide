---
{"title":"Before hero interaction (OnBeforeHeroInteraction)","summary":"x1 is the initiator, x2 the target hero; x3 allows interaction, defaults to 1 and can be set to 0. Covers meetings and attacks.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is the initiator, x2 the target hero; x3 allows interaction, defaults to 1 and can be set to 0. Covers meetings and attacks.

## Declaration {#declaration}

```erm
!?FU(OnBeforeHeroInteraction);
```

## Identity and compatibility {#identity}

ID `77010`; registered as `TRIGGER_BEFOREHEROINTERACT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
