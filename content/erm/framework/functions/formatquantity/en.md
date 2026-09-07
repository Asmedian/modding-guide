---
{"title":"FormatQuantity","summary":"Formats a quantity with locale settings and K/M/G suffixes. maxLen defaults to 5 logical characters and maxDigits to 4; negative values are supported.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Formats a quantity with locale settings and K/M/G suffixes. maxLen defaults to 5 logical characters and maxDigits to 4; negative values are supported.

## Call contract {#signature}

```erm
!!FU(FormatQuantity):P(value)/(resultPtr)/(maxLen)/(maxDigits);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `value` | input |
| x2 | `resultPtr` | output / mutable |
| x3 | `maxLen` | output / mutable |
| x4 | `maxDigits` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `FormatQuantity`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1533–1553, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[SIZEOF_ZSTR](../../constants/data-types/#const-sizeof-zstr)
