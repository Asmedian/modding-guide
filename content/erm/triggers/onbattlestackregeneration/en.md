---
{"title":"Stack regeneration amount (OnBattleStackRegeneration)","summary":"x1 is stack 0..41; x2 mutable healing; x3 original standard healing. Result is clamped to 0..lost HP of the top creature. Can heal a stack without native regeneration, but cannot resurrect dead creatures. Distinct from OnBattleRegeneratePhase.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is stack 0..41; x2 mutable healing; x3 original standard healing. Result is clamped to 0..lost HP of the top creature. Can heal a stack without native regeneration, but cannot resurrect dead creatures. Distinct from OnBattleRegeneratePhase.

## Declaration {#declaration}

```erm
!?FU(OnBattleStackRegeneration);
```

## Identity and compatibility {#identity}

ID `77056`; registered as `TRIGGER_BATTLE_STACK_REGENERATION`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
<!-- ERA3-GENERATED:END -->
