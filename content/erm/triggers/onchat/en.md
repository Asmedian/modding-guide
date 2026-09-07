---
{"title":"Game chat (OnChat)","summary":"x1 selects the stage: 0 enter (x2 blocks entry); 1 input (x2 text pointer, x3 action: 0 clear, 1 close, 2 default); 2 leave. Argument meanings depend on stage; check x1 first.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 selects the stage: 0 enter (x2 blocks entry); 1 input (x2 text pointer, x3 action: 0 clear, 1 close, 2 default); 2 leave. Argument meanings depend on stage; check x1 first.

## Declaration {#declaration}

```erm
!?FU(OnChat);
```

## Identity and compatibility {#identity}

ID `77014`; registered as `TRIGGER_ONCHAT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l534) — Added the following constants to Era Erm Framework: CHAT_EVENT_TYPE_XXX for 'OnChat' event subtype CHAT_EVENT_RESULT_XXX for 'OnChat' event result
<!-- ERA3-GENERATED:END -->
