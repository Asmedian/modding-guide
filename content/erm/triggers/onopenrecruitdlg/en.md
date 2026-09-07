---
{"title":"Opening recruitment (OnOpenRecruitDlg)","summary":"x1 is active slot 0..3; x2 flags (1 CLOSE_ON_BUY, 2 AUTO_UPDATE_ADVMAP); x3 show dialog (1/0). Arguments are mutable. RD provides recruitment state.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is active slot 0..3; x2 flags (1 CLOSE_ON_BUY, 2 AUTO_UPDATE_ADVMAP); x3 show dialog (1/0). Arguments are mutable. RD provides recruitment state.

## Declaration {#declaration}

```erm
!?FU(OnOpenRecruitDlg);
```

## Identity and compatibility {#identity}

ID `77023`; registered as `TRIGGER_OPEN_RECRUIT_DLG`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)
