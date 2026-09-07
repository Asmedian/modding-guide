---
{"title":"GetKeyModsState","summary":"Polls left/right Alt, Ctrl and Shift with GetKeyState and updates key_; each combined flag is the OR of both sides.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Polls left/right Alt, Ctrl and Shift with GetKeyState and updates key_*; each combined flag is the OR of both sides.

## Call contract {#signature}

```erm
!!FU(GetKeyModsState):P;
```

## State and dependencies {#context}

Named globals: [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

Export calls: `DisableErmTracking`, `GetKeyState`, `RestoreErmTracking`.

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 94–128, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[KEY_LCONTROL](../../constants/key-codes/#const-key-lcontrol) · [KEY_LMENU](../../constants/key-codes/#const-key-lmenu) · [KEY_LSHIFT](../../constants/key-codes/#const-key-lshift) · [KEY_RCONTROL](../../constants/key-codes/#const-key-rcontrol) · [KEY_RMENU](../../constants/key-codes/#const-key-rmenu) · [KEY_RSHIFT](../../constants/key-codes/#const-key-rshift)

Source discrepancy: the implementation tests GetKeyState with `d>>7`, whereas WinAPI returns a SHORT with the pressed flag in bit 15. Do not treat that fragment as a validated key test; see the [corrected example](../../../examples/sn-e/) and [Microsoft contract](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeystate).
