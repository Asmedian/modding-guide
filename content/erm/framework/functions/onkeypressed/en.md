---
{"title":"OnKeyPressed","summary":"Saves keyboard context and updates key/modifiers. KeyPressed also stores isDown; the final handler restores previous state.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Saves keyboard context and updates key/modifiers. KeyPressed also stores isDown; the final handler restores previous state.

## Call contract {#signature}

```erm
!?FU(OnKeyPressed);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `key` | input |
| x2 | `preventDefault` | input |
| x3 | `isDown` | input |

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^key_down^](../../globals/#global-i-key-down).

## Related functions {#calls}

[GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 148–156, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
