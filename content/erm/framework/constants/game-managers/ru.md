---
{"title":"Адреса игровых менеджеров","summary":"10 именованных значений: адреса игровых менеджеров.","translationStatus":"reviewed"}
---

## Назначение {#meaning}

Группа **Адреса игровых менеджеров** из поставляемого Framework. Имена и значения ниже соответствуют определениям `!#DC` в предоставленных файлах. Константа подставляется в ERM как `(NAME)`; она не выделяет переменную.

## Значения {#values}

| Константа | Значение |
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

## Привязка к реализации {#compatibility}

Эта группа содержит внутренние значения, смещения или адреса. Они относятся к предоставленной реализации и не гарантируют совместимость с другим EXE или заменяющим структуру плагином. Наличие константы не делает чтение/запись по адресу безопасными без проверки времени жизни структуры.

## Все группы {#related}

[Каталог констант](../) · [Переменные](../../../variables/)

## Использование в Framework {#used-by}

[SaveGame](../../functions/savegame/) · [H3Dlg_GetRootDlg](../../functions/h3dlg-getrootdlg/) · [H3Dlg_GetCurrentDlg](../../functions/h3dlg-getcurrentdlg/) · [H3Dlg_GetCurrentDlgId](../../functions/h3dlg-getcurrentdlgid/) · [AdvMap_SetInfoPanelText](../../functions/advmap-setinfopaneltext/) · [AdvMap_SetInfoPanelDef](../../functions/advmap-setinfopaneldef/) · [Battle_RedrawGridShadow](../../functions/battle-redrawgridshadow/) · [BattleStack_MakeActive](../../functions/battlestack-makeactive/) · [ActivateNextStack](../../functions/activatenextstack/) · [EquipArtToSlot](../../functions/equiparttoslot/) · [H3Quests_RefreshData](../../functions/h3quests-refreshdata/)
