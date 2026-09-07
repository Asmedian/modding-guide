---
{"title":"DL_Destroy","summary":"Destroys a DL wrapper by address. Do not reuse the destroyed address.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Destroys a DL wrapper by address. Do not reuse the destroyed address.

## Call contract {#signature}

```erm
!!FU(DL_Destroy):P(dlgObj);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgObj` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2192–2197, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
