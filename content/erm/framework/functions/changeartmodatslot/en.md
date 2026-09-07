---
{"title":"ChangeArtModAtSlot","summary":"Changes an artifact modifier in an equipped/backpack slot. A scroll modifier is its spell ID; ordinary artifacts usually use NO_ART_MOD.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Changes an artifact modifier in an equipped/backpack slot. A scroll modifier is its spell ID; ordinary artifacts usually use NO_ART_MOD.

## Call contract {#signature}

```erm
!!FU(ChangeArtModAtSlot):P(hero)/(slot)/(artMod);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `slot` | input |
| x3 | `artMod` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `ShowErmError`.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3134–3154, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_SLOT_EQUIPPED_FIRST](../../constants/hero-artifact-slots/#const-art-slot-equipped-first) · [ART_SLOT_EQUIPPED_LAST](../../constants/hero-artifact-slots/#const-art-slot-equipped-last) · [ART_SLOT_FIRST](../../constants/hero-artifact-slots/#const-art-slot-first) · [ART_SLOT_LAST](../../constants/hero-artifact-slots/#const-art-slot-last) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
