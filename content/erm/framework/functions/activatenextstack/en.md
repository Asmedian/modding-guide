---
{"title":"ActivateNextStack","summary":"Invokes next-stack selection. This snapshot assigns the result only when result<>0: an output initialized to 0 is not updated. Initialize it nonzero or use a corrected version.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Invokes next-stack selection. This snapshot assigns the result only when result<>0: an output initialized to 0 is not updated. Initialize it nonzero or use a corrected version.

## Call contract {#signature}

```erm
!!FU(ActivateNextStack):P(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `requires-review`. The complete block in `lib/9999 era - stdlib.erm`, lines 2837–2847, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BITS_1_MASK](../../constants/bit-masks/#const-bits-1-mask) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager) · [TRUE](../../constants/universal/#const-true)
