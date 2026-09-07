---
{"title":"Writing save data (OnSavegameWrite)","summary":"After ERM variables are written. No arguments. Write custom save sections here; this is a different phase from GM1.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

After ERM variables are written. No arguments. Write custom save sections here; this is a different phase from GM1.

## Declaration {#declaration}

```erm
!?FU(OnSavegameWrite);
```

## Identity and compatibility {#identity}

ID `77001`; registered as `TRIGGER_SAVEGAME_WRITE`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
