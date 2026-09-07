---
{"title":"OnSavegameRead","summary":"Clears event-chain state after save data is read.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Clears event-chain state after save data is read.

## Call contract {#signature}

```erm
!?FU(OnSavegameRead);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[ClearEventChainData](../cleareventchaindata/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 145–147, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
