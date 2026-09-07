---
{"title":"DisableErrors","summary":"Enables WOG_OPT_MUTE_ERRORS and clears WOG_OPT_LAST_ERROR. Use only around a controlled operation.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Enables WOG_OPT_MUTE_ERRORS and clears WOG_OPT_LAST_ERROR. Use only around a controlled operation.

## Call contract {#signature}

```erm
!!FU(DisableErrors):P;
```

## State and dependencies {#context}

The body does not access named global variables.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2010–2013, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true) · [WOG_OPT_LAST_ERROR](../../constants/wog-options/#const-wog-opt-last-error) · [WOG_OPT_MUTE_ERRORS](../../constants/wog-options/#const-wog-opt-mute-errors)
