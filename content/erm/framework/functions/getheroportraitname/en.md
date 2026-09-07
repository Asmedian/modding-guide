---
{"title":"GetHeroPortraitName","summary":"Returns current small/large portrait filenames for a hero. Reads the structure table by ID; validate the range first.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns current small/large portrait filenames for a hero. Reads the structure table by ID; validate the range first.

## Call contract {#signature}

```erm
!!FU(GetHeroPortraitName):P(heroId)/(small)/(large);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `heroId` | input |
| x2 | `small` | input |
| x3 | `large` | input |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3062–3080, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
