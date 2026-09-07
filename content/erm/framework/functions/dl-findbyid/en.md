---
{"title":"DL_FindById","summary":"Returns a DL wrapper address by ID or NULL. This is not the H3Dlg address, which is stored in its first field. Changes v1.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns a DL wrapper address by ID or NULL. This is not the H3Dlg address, which is stored in its first field. Changes v1.

## Call contract {#signature}

```erm
!!FU(DL_FindById):P(dlgId)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2184–2191, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[NULL](../../constants/universal/#const-null)
