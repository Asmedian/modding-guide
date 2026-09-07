---
{"title":"SplitMix32","summary":"P?seed/?result yields an int32; P?seed/min/max/?result yields an inclusive-range value. Seed changes and must use ?. Does not use the ordinary VR:R state.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

P?seed/?result yields an int32; P?seed/min/max/?result yields an inclusive-range value. Seed changes and must use ?. Does not use the ordinary VR:R state.

## Call contract {#signature}

```erm
!!FU(SplitMix32):P(seed)/(min)/(max)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `seed` | output / mutable |
| x2 | `min` | input |
| x3 | `max` | input |
| x4 | `result` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!if&(numArgs)=2;
  !!VR(minValue:y):S(INT_MIN);
  !!VR(maxValue:y):S(INT_MAX);
  !!VR(resultPtr:y):S(@min);
!!el;
  !!VR(minValue:y):S(min);
  !!VR(maxValue:y):S(max);
  !!VR(resultPtr:y):S(@result);
!!en;

!!VR(savedV1:y):Sv1;
!!SN:F^`.

Export calls: `ShowErmError`, `SplitMix32`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1376–1410, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[INT_MAX](../../constants/data-types/#const-int-max) · [INT_MIN](../../constants/data-types/#const-int-min)
