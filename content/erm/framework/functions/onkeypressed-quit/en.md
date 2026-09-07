---
{"title":"OnKeyPressed_Quit","summary":"Final handler for OnKeyPressed: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Final handler for OnKeyPressed: performs the calls listed below after the main chain. Do not invoke it manually; it closes Framework context.

## Call contract {#signature}

```erm
!?FU(OnKeyPressed_Quit);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `key` | output / mutable |
| x2 | `preventDefault` | output / mutable |

## State and dependencies {#context}

The body does not access named global variables.

Export calls: `GetGameState`.

## Related functions {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/)

## Version and status {#provenance}

Status: `quit-handler`. The complete block in `lib_end/-9999 era - stdlib.erm`, lines 13–25, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_BATTLE](../../constants/dialogs/#const-dlg-battle) · [DLG_HERO_MEETING_SCREEN](../../constants/dialogs/#const-dlg-hero-meeting-screen) · [DLG_HERO_SCREEN](../../constants/dialogs/#const-dlg-hero-screen) · [DLG_TOWN_SCREEN](../../constants/dialogs/#const-dlg-town-screen)
