---
{"title":"UnequipArtFromSlot","summary":"Unequips a doll slot and fires OnUnequipArt. Save artifact IDs/modifiers yourself when temporarily removing equipment.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Unequips a doll slot and fires OnUnequipArt. Save artifact IDs/modifiers yourself when temporarily removing equipment.

## Call contract {#signature}

```erm
!!FU(UnequipArtFromSlot):P(hero)/(slot);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `slot` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3191–3198, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall)
