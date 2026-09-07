---
{"title":"Game Managers","summary":"10 named values: game managers.","translationStatus":"reviewed"}
---

## Purpose {#meaning}

The **Game Managers** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `ADV_MANAGER` {#const-adv-manager} | `6918840` |
| `INPUT_MANAGER` {#const-input-manager} | `6919472` |
| `GAME_MANAGER` {#const-game-manager} | `6919480` |
| `TOWN_MANAGER` {#const-town-manager} | `6919500` |
| `WND_MANAGER` {#const-wnd-manager} | `6918864` |
| `SOUND_MANAGER` {#const-sound-manager} | `6919188` |
| `COMBAT_MANAGER` {#const-combat-manager} | `6919200` |
| `MOUSE_MANAGER` {#const-mouse-manager} | `6918832` |
| `SWAP_MANAGER` {#const-swap-manager} | `6962576` |
| `RECRUIT_MANAGER` {#const-recruit-manager} | `6990524` |

## Implementation dependency {#compatibility}

This group contains internal values, offsets, or addresses. They describe the supplied implementation and do not guarantee compatibility with another executable or a plugin replacing a structure. A named constant does not make address access safe without checking the structure’s lifetime.

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[SaveGame](../../functions/savegame/) · [H3Dlg_GetRootDlg](../../functions/h3dlg-getrootdlg/) · [H3Dlg_GetCurrentDlg](../../functions/h3dlg-getcurrentdlg/) · [H3Dlg_GetCurrentDlgId](../../functions/h3dlg-getcurrentdlgid/) · [AdvMap_SetInfoPanelText](../../functions/advmap-setinfopaneltext/) · [AdvMap_SetInfoPanelDef](../../functions/advmap-setinfopaneldef/) · [Battle_RedrawGridShadow](../../functions/battle-redrawgridshadow/) · [BattleStack_MakeActive](../../functions/battlestack-makeactive/) · [ActivateNextStack](../../functions/activatenextstack/) · [EquipArtToSlot](../../functions/equiparttoslot/) · [H3Quests_RefreshData](../../functions/h3quests-refreshdata/)
