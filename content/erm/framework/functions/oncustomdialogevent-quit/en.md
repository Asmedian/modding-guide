---
{"title":"OnCustomDialogEvent_Quit","summary":"Final handler for OnCustomDialogEvent: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Final handler for OnCustomDialogEvent: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnCustomDialogEvent_Quit);
```

## State and dependencies {#context}

Named globals: [i^dlg_id^](../../globals/#global-i-dlg-id).

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/) · [RestoreEventData](../restoreeventdata/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 70–73, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
