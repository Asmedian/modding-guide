---
{"title":"Адреса памяти","summary":"6 именованных значений: адреса памяти.","translationStatus":"reviewed"}
---

## Назначение {#meaning}

Группа **Адреса памяти** из поставляемого Framework. Имена и значения ниже соответствуют определениям `!#DC` в предоставленных файлах. Константа подставляется в ERM как `(NAME)`; она не выделяет переменную.

## Значения {#values}

| Константа | Значение |
| --- | --- |
| `ADDR_GAME_SCREEN_WIDTH` {#const-addr-game-screen-width} | `4199496` |
| `ADDR_GAME_SCREEN_HEIGHT` {#const-addr-game-screen-height} | `4199503` |
| `ADDR_MARKED_SAVEGAME_NAME` {#const-addr-marked-savegame-name} | `6828940` |
| `ADDR_TEXT_BUFFER` {#const-addr-text-buffer} | `6911016` |
| `ADDR_WOG_SPELLS_TABLE` {#const-addr-wog-spells-table} | `8114880` |
| `ADDR_WOG_COMMANDERS_TABLE` {#const-addr-wog-commanders-table} | `42344640` |

## Привязка к реализации {#compatibility}

Эта группа содержит внутренние значения, смещения или адреса. Они относятся к предоставленной реализации и не гарантируют совместимость с другим EXE или заменяющим структуру плагином. Наличие константы не делает чтение/запись по адресу безопасными без проверки времени жизни структуры.

## Все группы {#related}

[Каталог констант](../) · [Переменные](../../../variables/)

## Использование в Framework {#used-by}

[SaveGame](../../functions/savegame/) · [H3Dlg_Coords](../../functions/h3dlg-coords/) · [DL_AlignDlg](../../functions/dl-aligndlg/)
