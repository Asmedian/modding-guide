---
{"title":"StrToUpper","summary":"Creates an upper/lower-case string with CharUpperA/CharLowerA. This is Windows ANSI conversion, not general Unicode normalization.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Creates an upper/lower-case string with CharUpperA/CharLowerA. This is Windows ANSI conversion, not general Unicode normalization.

## Call contract {#signature}

```erm
!!FU(StrToUpper):P(strPtr)/(resultPtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `strPtr` | input |
| x2 | `resultPtr` | output / mutable |

## State and dependencies {#context}

Named globals: [s^temp^](../../globals/#global-s-temp).

Export calls: `CharUpperA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1443–1457, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
