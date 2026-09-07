---
{"title":"WriteIniStrings","summary":"Takes up to 7 key/value pairs after the path and section. Writes only to cache; call SaveIni. WriteIniInts formats decimal text, while WriteIniStrings takes string values.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Takes up to 7 key/value pairs after the path and section. Writes only to cache; call SaveIni. WriteIniInts formats decimal text, while WriteIniStrings takes string values.

## Call contract {#signature}

```erm
!!FU(WriteIniStrings):P(filePathPtr)/(sectionNamePtr)/(firstKeyPtr)/(firstValue);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `filePathPtr` | input |
| x2 | `sectionNamePtr` | input |
| x3 | `firstKeyPtr` | input |
| x4 | `firstValue` | input |

## State and dependencies {#context}

Named globals: —.
  !!FU:E;
!!en;

!!VR(numKeyValueArgs:y):S(numArgs) -(@firstKeyPtr) +1;
!!VR(numPairs:y):S(numKeyValueArgs) :2;

!!VRt:S(numKeyValueArgs) %2;

!!if&t<>0;
  !!SN:F^`.

Export calls: `ShowErmError`, `WriteStrToIni`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1663–1696, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[HERO_ORRIN](../../constants/heroes/#const-hero-orrin) · [HERO_XERON](../../constants/heroes/#const-hero-xeron)
