---
{"title":"Start of a game day (OnEveryDay)","summary":"The engine fires this for each player before ordinary TM, without arguments. Framework extends the contract: x1 day, x2 weekDay (1..7), x3 once, x4 owner, x5 isAi. once is TRUE only on the first call that day. Use these arguments only with Framework loaded.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

The engine fires this for each player before ordinary TM, without arguments. Framework extends the contract: x1 day, x2 weekDay (1..7), x3 once, x4 owner, x5 isAi. once is TRUE only on the first call that day. Use these arguments only with Framework loaded.

## Declaration {#declaration}

```erm
!?FU(OnEveryDay);
```

## Identity and compatibility {#identity}

ID `77018`; registered as `TRIGGER_DAILY_TIMER`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.0.5, +](../../compatibility/#era3-v-3-0-5-l3192) — Extended OnEveryDay trigger in "Era Erm Framework" mod. The following global variables are automatically set: - i^timerDay^: 1..+inf - i^timerWeekDay^: 1..7 - i^timerMonthDay^: 1..28 - i^timerWeek^: 1..+inf - i^timerMont…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3827) — Added 1000 era - stdlib.erm script, which will contain safe for all extra ERM functionality. Currently !?FU(OnEvenyDay) event is enhanced. Its handlers will receive 5 parameters: !?FU(OnEveryDay); !#VA(day:x1) (weekDay:x…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3973) — Added "1000 - era stdlib.erm" script with universal ERM functions and events. Currently "OnEveryDay" event is enhanced with the following x-arguments: day, week day, once(0..1), owner (color), isAi (0..1).
<!-- ERA3-GENERATED:END -->
