---
{"title":"OnCustomDialogEvent","summary":"Prepares mouse context through EnterMouseEvent. Data is available in mouse_; OnCustomDialogEvent also saves dlg_id.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Prepares mouse context through EnterMouseEvent. Data is available in mouse_*; OnCustomDialogEvent also saves dlg_id.

## Call contract {#signature}

```erm
!?FU(OnCustomDialogEvent);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `dlgId` | input |

## State and dependencies {#context}

Named globals: [i^dlg_id^](../../globals/#global-i-dlg-id).

## Related functions {#calls}

[EnterMouseEvent](../entermouseevent/) · [SaveEventData](../saveeventdata/)

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 208–213, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
