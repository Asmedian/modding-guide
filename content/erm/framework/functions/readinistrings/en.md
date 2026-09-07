---
{"title":"ReadIniStrings","summary":"Takes up to 4 key/?value/default triples after path and section. An empty stored string also uses default. ReadIniInts converts nonempty text to an integer; this is not a separate numeric-validity check.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Takes up to 4 key/?value/default triples after path and section. An empty stored string also uses default. ReadIniInts converts nonempty text to an integer; this is not a separate numeric-validity check.

## Call contract {#signature}

```erm
!!FU(ReadIniStrings):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue)/(firstValueDefault);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `sectionNamePtr` | input |
| x3 | `firstKeyPtr` | input |
| x4 | `firstValue` | input |
| x5 | `firstValueDefault` | input |

## State and dependencies {#context}

Named globals: —.

  !!VR(valueStr)&(valueStr)=^`, `s^;
  !!FU:E;
!!en;

!!VR(numVariadicArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numTripples:y):S(numVariadicArgs) :3;

!!VRt:S(numVariadicArgs) %3;

!!if&t<>0;
  !!SN:F^`.

Export calls: `ReadStrFromIni`, `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1697–1735, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
