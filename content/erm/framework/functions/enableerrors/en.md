---
{"title":"EnableErrors","summary":"Reads the last error flag, but this snapshot sets WOG_OPT_MUTE_ERRORS=TRUE again. Its comment promises to enable messages; the code does not. Restore explicitly with UN:P/FALSE or use a corrected library.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Reads the last error flag, but this snapshot sets WOG_OPT_MUTE_ERRORS=TRUE again. Its comment promises to enable messages; the code does not. Restore explicitly with UN:P/FALSE or use a corrected library.

## Call contract {#signature}

```erm
!!FU(EnableErrors):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2014–2021, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true) · [WOG_OPT_LAST_ERROR](../../constants/wog-options/#const-wog-opt-last-error) · [WOG_OPT_MUTE_ERRORS](../../constants/wog-options/#const-wog-opt-mute-errors)
