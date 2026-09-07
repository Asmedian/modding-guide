---
{"title":"After a local event (OnAfterLocalEvent)","summary":"x1/x2/x3 are event coordinates. For humans; fires before the corresponding !$LE. Do not assume a one-shot event object remains on the map.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1/x2/x3 are event coordinates. For humans; fires before the corresponding !$LE. Do not assume a one-shot event object remains on the map.

## Declaration {#declaration}

```erm
!?FU(OnAfterLocalEvent);
```

## Identity and compatibility {#identity}

ID `77046`; registered as `TRIGGER_AFTER_LOCAL_EVENT`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1965) — Implemented two universal events for handling human local events: "OnBeforeLocalEvent" and "OnAfterLocalEvent". They occur before any !?LE/!$LE trigger respecively and receive 3 parameters: x, y and z coordinates. Exampl…
<!-- ERA3-GENERATED:END -->
