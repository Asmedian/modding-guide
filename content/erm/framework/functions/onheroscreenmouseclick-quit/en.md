---
{"title":"OnHeroScreenMouseClick_Quit","summary":"Final handler for OnHeroScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Final handler for OnHeroScreenMouseClick: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnHeroScreenMouseClick_Quit);
```

## State and dependencies {#context}

The body does not access named global variables.

## Related functions {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 43–45, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.
