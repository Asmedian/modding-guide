---
{"title":"AddArtToHero","summary":"Tries to equip an artifact, then falls back to the backpack; returns success. Automatically assembles combination artifacts and checks victory conditions.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Tries to equip an artifact, then falls back to the backpack; returns success. Automatically assembles combination artifacts and checks victory conditions.

## Call contract {#signature}

```erm
!!FU(AddArtToHero):P(hero)/(art)/(artMod)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `hero` | input |
| x2 | `art` | input |
| x3 | `artMod` | input |
| x4 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3155–3169, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod)
