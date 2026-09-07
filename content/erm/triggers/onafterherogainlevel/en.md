---
{"title":"After a hero level-up (OnAfterHeroGainLevel)","summary":"x1 is hero after leveling up, once the dialog closes. Applies to humans and AI. Use HL before selection completes to change offered skills.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is hero after leveling up, once the dialog closes. Applies to humans and AI. Use HL before selection completes to change offered skills.

## Declaration {#declaration}

```erm
!?FU(OnAfterHeroGainLevel);
```

## Identity and compatibility {#identity}

ID `77050`; registered as `TRIGGER_AFTER_HERO_GAIN_LEVEL`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1949) — Added new ERM events: - "OnWinGame" occurs when human player wins scenario. - "OnLoseGame" occurs when human player loses scenario. - "OnTransferHero" occurs when hero data from the previous campaign scenario is transfer…
<!-- ERA3-GENERATED:END -->
