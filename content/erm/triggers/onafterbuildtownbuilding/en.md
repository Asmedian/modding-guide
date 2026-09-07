---
{"title":"After construction (OnAfterBuildTownBuilding)","summary":"x1 is town; x2 constructed building. Town state has been updated. Closing the town hall alone does not imply construction.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1 is town; x2 constructed building. Town state has been updated. Closing the town hall alone does not imply construction.

## Declaration {#declaration}

```erm
!?FU(OnAfterBuildTownBuilding);
```

## Identity and compatibility {#identity}

ID `77052`; registered as `TRIGGER_AFTER_BUILD_TOWN_BUILDING`. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1218) — Added new "OnAfterBuildTownBuilding" event, occuring right after town building was built. x-parameters: Town ID, Building ID.
<!-- ERA3-GENERATED:END -->
