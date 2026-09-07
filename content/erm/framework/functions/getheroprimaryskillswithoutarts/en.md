---
{"title":"GetHeroPrimarySkillsWithoutArts","summary":"Temporarily removes 19 equipped artifacts, reads HE:F, then re-equips them. Fires OnUnequipArt/OnEquipArt; this operation has event side effects.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Temporarily removes 19 equipped artifacts, reads HE:F, then re-equips them. Fires OnUnequipArt/OnEquipArt; this operation has event side effects.

## Call contract {#signature}

```erm
!!FU(GetHeroPrimarySkillsWithoutArts):P(hero)/(attack)/(defense)/(power)/(knowledge);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `attack` | output / mutable |
| x3 | `defense` | output / mutable |
| x4 | `power` | output / mutable |
| x5 | `knowledge` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EquipArtToSlot](../equiparttoslot/) · [GetArtAtSlot](../getartatslot/) · [UnequipArtFromSlot](../unequipartfromslot/)

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3081–3110, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[ART_ARTIFACT_LOCK](../../constants/artifacts/#const-art-artifact-lock) · [ART_HIGHLIGHTED_SLOT](../../constants/artifacts/#const-art-highlighted-slot) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [NO_ART](../../constants/artifacts/#const-no-art)
