---
{"title":"CollectMouseEventData","summary":"Copies CM context to mouse_ and dlg_action. Exit-button release is normalized to ordinary LMB release; a DL keyboard event places its key code in key.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Copies CM context to mouse_* and dlg_action. Exit-button release is normalized to ordinary LMB release; a DL keyboard event places its key code in key.

## Call contract {#signature}

```erm
!!FU(CollectMouseEventData):P;
```

## State and dependencies {#context}

Named globals: [i^key^](../../globals/#global-i-key) · [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_hero_1^](../../globals/#global-i-mouse-hero-1) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action) · [i^dlg_action^](../../globals/#global-i-dlg-action).

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 129–138, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ACTION_KEY_PRESSED](../../constants/dialog-action-types/#const-dlg-action-key-pressed) · [MOUSE_EXIT_BTN_LMB_RELEASED](../../constants/mouse-click-subtypes/#const-mouse-exit-btn-lmb-released) · [MOUSE_LMB_RELEASED](../../constants/mouse-click-subtypes/#const-mouse-lmb-released)
