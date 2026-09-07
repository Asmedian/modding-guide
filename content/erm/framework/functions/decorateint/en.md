---
{"title":"DecorateInt","summary":"Formats an integer using era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS leaves values up to 9999 ungrouped. Output is a string.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Formats an integer using era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS leaves values up to 9999 ungrouped. Output is a string.

## Call contract {#signature}

```erm
!!FU(DecorateInt):P(value)/(resultPtr)/(ignoreSmallNumbers);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `ignoreSmallNumbers` | input |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `DecorateInt`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1521–1532, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
