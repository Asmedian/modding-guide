---
{"title":"LoadIntGlobalsFromJson","summary":"Takes up to 14 names after JSON and global-variable prefixes. Resolves values as ERM constants first, then as integers; a missing key leaves the global unchanged.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Takes up to 14 names after JSON and global-variable prefixes. Resolves values as ERM constants first, then as integers; a missing key leaves the global unchanged.

## Call contract {#signature}

```erm
!!FU(LoadIntGlobalsFromJson):P(jsonKeysPrefixPtr)/(globalVarsPrefixPtr)/(firstKeyNamePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `jsonKeysPrefixPtr` | input |
| x2 | `globalVarsPrefixPtr` | input |
| x3 | `firstKeyNamePtr` | input |

## State and dependencies {#context}

Named globals: —.

Export calls: `ShowErmError`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 1835–1869, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[TRUE](../../constants/universal/#const-true)
