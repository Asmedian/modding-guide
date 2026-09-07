---
{"title":"DL_SetPlayerColor","summary":"Меняет цвет рамки DL-диалога. playerId по умолчанию — взаимодействующий игрок; проверяется диапазон PLAYER_FIRST..PLAYER_LAST.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Меняет цвет рамки DL-диалога. playerId по умолчанию — взаимодействующий игрок; проверяется диапазон PLAYER_FIRST..PLAYER_LAST.

## Контракт вызова {#signature}

```erm
!!FU(DL_SetPlayerColor):P(dlgId)/(playerId);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dlgId` | вход |
| x2 | `playerId` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_SendCmdToItem](../h3dlg-sendcmdtoitem/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2332–2356. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[NULL](../../constants/universal/#const-null) · [PLAYER_FIRST](../../constants/players/#const-player-first) · [PLAYER_LAST](../../constants/players/#const-player-last) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
