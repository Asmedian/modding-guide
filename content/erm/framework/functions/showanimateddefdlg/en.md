---
{"title":"ShowAnimatedDefDlg","summary":"Shows an OK message with an animated DEF. With an absent/empty DEF name, uses ordinary IF:M1.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Shows an OK message with an animated DEF. With an absent/empty DEF name, uses ordinary IF:M1.

## Call contract {#signature}

```erm
!!FU(ShowAnimatedDefDlg):P(textPtr)/(defNamePtr);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `textPtr` | input |
| x2 | `defNamePtr` | input |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2756–2766, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl)
