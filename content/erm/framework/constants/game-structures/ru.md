---
{"title":"Размеры игровых структур","summary":"26 именованных значений: размеры игровых структур.","translationStatus":"reviewed"}
---

## Назначение {#meaning}

Группа **Размеры игровых структур** из поставляемого Framework. Имена и значения ниже соответствуют определениям `!#DC` в предоставленных файлах. Константа подставляется в ERM как `(NAME)`; она не выделяет переменную.

## Значения {#values}

| Константа | Значение |
| --- | --- |
| `STRUCT_H3DLG_VTABLE` {#const-struct-h3dlg-vtable} | `0` |
| `STRUCT_H3DLG_WIDTH` {#const-struct-h3dlg-width} | `32` |
| `STRUCT_H3DLG_HEIGHT` {#const-struct-h3dlg-height} | `36` |
| `STRUCT_H3DLG_X` {#const-struct-h3dlg-x} | `24` |
| `STRUCT_H3DLG_Y` {#const-struct-h3dlg-y} | `28` |
| `STRUCT_SNDMAN_UNLOCKED` {#const-struct-sndman-unlocked} | `132` |
| `STRUCT_COMBATMAN_ATTACKER_ARMY` {#const-struct-combatman-attacker-army} | `21700` |
| `STRUCT_COMBATMAN_DEFENDER_ARMY` {#const-struct-combatman-defender-army} | `21704` |
| `STRUCT_COMBATMAN_IS_WAITING_PHASE` {#const-struct-combatman-is-waiting-phase} | `81380` |
| `STRUCT_SPELL_NAME` {#const-struct-spell-name} | `16` |
| `STRUCT_SPELL_SHORT_NAME` {#const-struct-spell-short-name} | `20` |
| `STRUCT_SPELL_DESCR` {#const-struct-spell-descr} | `120` |
| `STRUCT_SPELL_DESCR_BASIC` {#const-struct-spell-descr-basic} | `124` |
| `STRUCT_SPELL_DESCR_ADVANCED` {#const-struct-spell-descr-advanced} | `128` |
| `STRUCT_SPELL_DESCR_EXPERT` {#const-struct-spell-descr-expert} | `132` |
| `STRUCT_WIN32_FIND_DATA_ATTRS` {#const-struct-win32-find-data-attrs} | `0` |
| `STRUCT_WIN32_FIND_DATA_FILENAME` {#const-struct-win32-find-data-filename} | `44` |
| `STRUCT_HOOK_CONTEXT_EDI` {#const-struct-hook-context-edi} | `0` |
| `STRUCT_HOOK_CONTEXT_ESI` {#const-struct-hook-context-esi} | `4` |
| `STRUCT_HOOK_CONTEXT_EBP` {#const-struct-hook-context-ebp} | `8` |
| `STRUCT_HOOK_CONTEXT_ESP` {#const-struct-hook-context-esp} | `12` |
| `STRUCT_HOOK_CONTEXT_EBX` {#const-struct-hook-context-ebx} | `16` |
| `STRUCT_HOOK_CONTEXT_EDX` {#const-struct-hook-context-edx} | `20` |
| `STRUCT_HOOK_CONTEXT_ECX` {#const-struct-hook-context-ecx} | `24` |
| `STRUCT_HOOK_CONTEXT_EAX` {#const-struct-hook-context-eax} | `28` |
| `STRUCT_HOOK_CONTEXT_RET` {#const-struct-hook-context-ret} | `32` |

## Привязка к реализации {#compatibility}

Эта группа содержит внутренние значения, смещения или адреса. Они относятся к предоставленной реализации и не гарантируют совместимость с другим EXE или заменяющим структуру плагином. Наличие константы не делает чтение/запись по адресу безопасными без проверки времени жизни структуры.

## Все группы {#related}

[Каталог констант](../) · [Переменные](../../../variables/)

## Использование в Framework {#used-by}

[ScanDir](../../functions/scandir/) · [H3Dlg_Coords](../../functions/h3dlg-coords/) · [H3Dlg_CenterAtMouse](../../functions/h3dlg-centeratmouse/) · [H3Dlg_UpdateItemRange](../../functions/h3dlg-updateitemrange/) · [DL_GetSize](../../functions/dl-getsize/) · [DL_SetSize](../../functions/dl-setsize/) · [DL_AlignDlg](../../functions/dl-aligndlg/) · [AdvMap_SetHint](../../functions/advmap-sethint/)
