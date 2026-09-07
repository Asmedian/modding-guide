---
{"title":"GetArtAtSlot","summary":"Returns artifact ID and modifier for a hero slot, including backpack slots. Handle NO_ART for an empty slot.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns artifact ID and modifier for a hero slot, including backpack slots. Handle NO_ART for an empty slot.

## Call contract {#signature}

```erm
!!FU(GetArtAtSlot):P(hero)/(slot)/(artId)/(artMod);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `slot` | input |
| x3 | `artId` | output / mutable |
| x4 | `artMod` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3111–3133, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_SLOT_EQUIPPED_FIRST](../../constants/hero-artifact-slots/#const-art-slot-equipped-first) · [ART_SLOT_EQUIPPED_LAST](../../constants/hero-artifact-slots/#const-art-slot-equipped-last) · [ART_SLOT_FIRST](../../constants/hero-artifact-slots/#const-art-slot-first) · [ART_SLOT_LAST](../../constants/hero-artifact-slots/#const-art-slot-last) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
