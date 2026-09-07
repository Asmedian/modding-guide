---
{"title":"Battle_RedrawGridShadow","summary":"Refreshes movement-range shading after a speed change. Requires an existing combat manager.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Refreshes movement-range shading after a speed change. Requires an existing combat manager.

## Call contract {#signature}

```erm
!!FU(Battle_RedrawGridShadow):P;
```

## State and dependencies {#context}

The body does not access named global variables.

The implementation accesses memory or native functions directly. Use a compatible game build; addresses cannot be transferred to another EXE without verification.

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2799–2803, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager)
