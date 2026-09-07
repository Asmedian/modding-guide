---
{"title":"GetStrAtAddr","summary":"Copies a null-terminated string at strAddr into an output ERM string; NULL yields empty text. Non-null memory must be readable.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Copies a null-terminated string at strAddr into an output ERM string; NULL yields empty text. Non-null memory must be readable.

## Call contract {#signature}

```erm
!!FU(GetStrAtAddr):P(strAddr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strAddr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp) · [s^result^](../../globals/#global-s-result).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1421–1430, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
