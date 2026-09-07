---
{"title":"ConstructBitMask","summary":"Combines up to 15 bit positions 0..31 into a mask; the last argument is the output. Repeated positions do not double a bit because OR is used. Requires a position and an output.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Combines up to 15 bit positions 0..31 into a mask; the last argument is the output. Repeated positions do not double a bit because OR is used. Requires a position and an output.

## Call contract {#signature}

```erm
!!FU(ConstructBitMask):P(args)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `args` | input |
| x2 | `result` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(mask:y):S0;

!!re i/(@args)/(numArgs)/1/-1;
  !!VR(arg:y):Sxi;

  !!if&(arg)>=0/(arg)<=31;
    !!VR(bit:y):S1 Sd<<(arg);
    !!VR(mask):|(bit);
  !!el;
    !!SN:F^`.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1194–1223, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
