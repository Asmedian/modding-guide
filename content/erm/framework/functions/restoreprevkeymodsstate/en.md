---
{"title":"RestorePrevKeyModsState","summary":"Restores key and modifier globals after a nested event.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Restores key and modifier globals after a nested event.

## Call contract {#signature}

```erm
!!FU(RestorePrevKeyModsState):P;
```

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^key_down^](../../globals/#global-i-key-down) · [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

## Related functions {#calls}

[RestoreEventData](../restoreeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 91–93, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
