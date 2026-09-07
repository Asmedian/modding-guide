---
{"title":"RadioDlg_SetTitle","summary":"Copies the title into radio-dialog state.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Copies the title into radio-dialog state.

## Call contract {#signature}

```erm
!!FU(RadioDlg_SetTitle):P(titlePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `titlePtr` | input |

## State and dependencies {#context}

Named globals: [s^radioDlg_title^](../../globals/#global-s-radiodlg-title).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2468–2473, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
