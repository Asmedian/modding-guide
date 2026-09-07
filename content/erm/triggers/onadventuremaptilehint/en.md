---
{"title":"Adventure-map tile hint (OnAdventureMapTileHint)","summary":"x1..x3 are object coordinates; x4/x5 type/subtype or -1; x6..x8 hovered tile coordinates. Change text through MM, not numeric arguments. OnAdvMapTileHint is a registered alias for the same ID.","translationStatus":"reviewed"}
---

## Timing and arguments {#event}

x1..x3 are object coordinates; x4/x5 type/subtype or -1; x6..x8 hovered tile coordinates. Change text through MM, not numeric arguments. OnAdvMapTileHint is a registered alias for the same ID.

## Declaration {#declaration}

```erm
!?FU(OnAdventureMapTileHint);
```

## Identity and compatibility {#identity}

ID `77040`; registered as `TRIGGER_ADVMAP_TILE_HINT`. Aliases: OnAdvMapTileHint. The name is confirmed by the supplied ERA source. An introduction version is not assigned without separate evidence. Use the event name in new scripts; the numeric ID is retained for mapping old code.

## Related references {#related}

[All triggers](../) · [Functions and arguments](../../functions/) · [Framework events](../../framework/events/)

## Related commands and tables {#reference-links}

[ERM triggers and events](../) · [ERM debugging and compatibility](../../compatibility/) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-w-w-key-w-key) · [ERA services, memory and sound (SN)](../../receivers/sn/#command-xvalues) · [Key Codes](../../framework/constants/key-codes/) · [ERA services, memory and sound (SN)](../../receivers/sn/) · [Game timer (TM)](../tm/) · [Battle stack (BM)](../../receivers/bm/) · [Creature experience and bonuses (EA)](../../receivers/ea/) · [Mouse-event context (CM)](../../receivers/cm/) · [Building pictures by town](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.9.14, *](../../compatibility/#era3-v-3-9-14-l676) — "OnAdvMapTileHint" was renamed to "OnAdventureMapTileHint". The previous name is deprecated, but is kept for compatibility reasons.
<!-- ERA3-GENERATED:END -->
