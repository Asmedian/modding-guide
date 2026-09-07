---
{"title":"Useful Addresses","summary":"6 named values: useful addresses.","translationStatus":"reviewed"}
---

## Purpose {#meaning}

The **Useful Addresses** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `ADDR_GAME_SCREEN_WIDTH` {#const-addr-game-screen-width} | `4199496` |
| `ADDR_GAME_SCREEN_HEIGHT` {#const-addr-game-screen-height} | `4199503` |
| `ADDR_MARKED_SAVEGAME_NAME` {#const-addr-marked-savegame-name} | `6828940` |
| `ADDR_TEXT_BUFFER` {#const-addr-text-buffer} | `6911016` |
| `ADDR_WOG_SPELLS_TABLE` {#const-addr-wog-spells-table} | `8114880` |
| `ADDR_WOG_COMMANDERS_TABLE` {#const-addr-wog-commanders-table} | `42344640` |

## Implementation dependency {#compatibility}

This group contains internal values, offsets, or addresses. They describe the supplied implementation and do not guarantee compatibility with another executable or a plugin replacing a structure. A named constant does not make address access safe without checking the structure’s lifetime.

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[SaveGame](../../functions/savegame/) · [H3Dlg_Coords](../../functions/h3dlg-coords/) · [DL_AlignDlg](../../functions/dl-aligndlg/)
