---
{"title":"EquipArtToSlot","summary":"Equips an artifact in a doll slot or auto-selects for NO_ART_SLOT. Returns TRUE/FALSE and fires OnEquipArt. Does not write arbitrary backpack slots.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Equips an artifact in a doll slot or auto-selects for NO_ART_SLOT. Returns TRUE/FALSE and fires OnEquipArt. Does not write arbitrary backpack slots.

## Call contract {#signature}

```erm
!!FU(EquipArtToSlot):P(hero)/(art)/(artMod)/(slot)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `art` | output / mutable |
| x3 | `artMod` | input |
| x4 | `slot` | input |
| x5 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3170–3190, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_SLOT_MISC_5](../../constants/hero-artifact-slots/#const-art-slot-misc-5) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod) · [NO_ART_SLOT](../../constants/hero-artifact-slots/#const-no-art-slot) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
