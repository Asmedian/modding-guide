---
{"title":"OnBattleMouseHint","summary":"Prepares mouse context through EnterMouseEvent. Data is available in mouse_; OnCustomDialogEvent also saves dlg_id.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnBattleMouseHint);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 202–204, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
