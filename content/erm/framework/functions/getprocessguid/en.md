---
{"title":"GetProcessGuid","summary":"Returns a 32-character identifier for this game-process run. Distinguishes a restart from loading a save in the same process.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns a 32-character identifier for this game-process run. Distinguishes a restart from loading a save in the same process.

## Call contract {#signature}

```erm
!!FU(GetProcessGuid):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetProcessGuid`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2926–2935, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
