---
{"title":"ClearEventChainData","summary":"Clears the internal event-context stack and its position when loading a save.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Clears the internal event-context stack and its position when loading a save.

## Call contract {#signature}

```erm
!!FU(ClearEventChainData):P;
```

## State and dependencies {#context}

Named globals: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 12–15, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
