---
{"title":"GetTimeMsec","summary":"Returns milliseconds since OS startup via timeGetTime. The 32-bit counter wraps after about 49.71 days; it is not the in-game date.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns milliseconds since OS startup via timeGetTime. The 32-bit counter wraps after about 49.71 days; it is not the in-game date.

## Call contract {#signature}

```erm
!!FU(GetTimeMsec):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2914–2925, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_STDCALL](../../constants/calling-conventions/#const-callconv-stdcall) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
