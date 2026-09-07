---
{"title":"SavePrevMouseEventData","summary":"Saves/restores ten mouse_ values. mouse_hero_1 and dlg_action are not included, so the pair does not restore the entire context.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Saves/restores ten mouse_* values. mouse_hero_1 and dlg_action are not included, so the pair does not restore the entire context.

## Call contract {#signature}

```erm
!!FU(SavePrevMouseEventData):P;
```

## State and dependencies {#context}

Named globals: [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action).

## Related functions {#calls}

[SaveEventData](../saveeventdata/)

## Version and status {#provenance}

Status: `internal`. The complete block in `lib/9999 era - stdlib.erm`, lines 139–141, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
