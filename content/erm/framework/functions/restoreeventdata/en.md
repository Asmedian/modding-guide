---
{"title":"RestoreEventData","summary":"Restores integers to ? outputs. This snapshot reads savedNumArgs but repeats the buffer-size check instead of validating it. Save/restore calls must match exactly.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Restores integers to ? outputs. This snapshot reads savedNumArgs but repeats the buffer-size check instead of validating it. Save/restore calls must match exactly.

## Call contract {#signature}

```erm
!!FU(RestoreEventData):P(firstArg);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `firstArg` | input |

## State and dependencies {#context}

Named globals: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

Export calls: `DisableErmTracking`, `RestoreErmTracking`, `ShowErmError`.

## Related functions {#calls}

[ClearEventChainData](../cleareventchaindata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 47–87, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
