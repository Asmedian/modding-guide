---
{"title":"EnterMouseEvent","summary":"Saves previous keyboard/mouse context, then reads modifiers and CM for the new event.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Saves previous keyboard/mouse context, then reads modifiers and CM for the new event.

## Call contract {#signature}

```erm
!!FU(EnterMouseEvent):P;
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[CollectMouseEventData](../collectmouseeventdata/) · [GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/) · [SavePrevMouseEventData](../saveprevmouseeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 165–170, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
