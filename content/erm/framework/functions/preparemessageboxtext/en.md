---
{"title":"PrepareMessageBoxText","summary":"Passes name/hint pairs for the next message to wog native dialogs:PrepareMessageBoxText. In this snapshot l<argsNum skips the last hint for an even argument count; verify the library version.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Passes name/hint pairs for the next message to wog native dialogs:PrepareMessageBoxText. In this snapshot l<argsNum skips the last hint for an even argument count; verify the library version.

## Call contract {#signature}

```erm
!!FU(PrepareMessageBoxText):P(text[16]);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `text[16]` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `wog native dialogs:PrepareMessageBoxText`.

## Related functions {#calls}

[NewStrArray](../newstrarray/)

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2767–2798, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
