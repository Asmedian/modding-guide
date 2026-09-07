---
{"title":"SaveEventData","summary":"Pushes integer arguments onto the event stack. RestoreEventData must receive the same number of outputs in the same order. A zero-argument call exits before RestoreErmTracking.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Pushes integer arguments onto the event stack. RestoreEventData must receive the same number of outputs in the same order. A zero-argument call exits before RestoreErmTracking.

## Call contract {#signature}

```erm
!!FU(SaveEventData):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

Named globals: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

Export calls: `DisableErmTracking`, `RestoreErmTracking`.

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 16–46, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
