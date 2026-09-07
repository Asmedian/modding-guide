---
{"title":"IsDllLoaded","summary":"Checks a DLL filename including extension with GetModuleHandleA. Returns TRUE/FALSE without loading a missing module.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Checks a DLL filename including extension with GetModuleHandleA. Returns TRUE/FALSE without loading a missing module.

## Call contract {#signature}

```erm
!!FU(IsDllLoaded):P(dllFileNamePtr)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dllFileNamePtr` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetModuleHandleA`.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2936–2949, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [TRUE](../../constants/universal/#const-true)
