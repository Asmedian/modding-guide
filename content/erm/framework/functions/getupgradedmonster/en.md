---
{"title":"GetUpgradedMonster","summary":"Returns the creature upgrade or NO_MON (-1) when absent.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Returns the creature upgrade or NO_MON (-1) when absent.

## Call contract {#signature}

```erm
!!FU(GetUpgradedMonster):P(monId)/(result);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `monId` | input |
| x2 | `result` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 3028–3037, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_FASTCALL](../../constants/calling-conventions/#const-callconv-fastcall)
