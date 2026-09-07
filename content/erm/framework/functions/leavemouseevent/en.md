---
{"title":"LeaveMouseEvent","summary":"Restores mouse context followed by keyboard context from the final handlers.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Restores mouse context followed by keyboard context from the final handlers.

## Call contract {#signature}

```erm
!!FU(LeaveMouseEvent):P;
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/) · [RestorePrevMouseEventData](../restoreprevmouseeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 171–174, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
