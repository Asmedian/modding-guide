---
{"title":"SaveGame","summary":"Сохраняет игру по имени без расширения. По умолчанию appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Вызывает машинный адрес сохранения и может менять выбранную запись диалога.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сохраняет игру по имени без расширения. По умолчанию appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Вызывает машинный адрес сохранения и может менять выбранную запись диалога.

## Контракт вызова {#signature}

```erm
!!FU(SaveGame):P(fileNamePtr)/(appendExtension)/(compressFile)/(saveToData)/(markInList);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `fileNamePtr` | вход |
| x2 | `appendExtension` | выход / изменяемый |
| x3 | `compressFile` | выход / изменяемый |
| x4 | `saveToData` | вход |
| x5 | `markInList` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `lstrcpyA`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1987–2009. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ADDR_MARKED_SAVEGAME_NAME](../../constants/useful-addresses/#const-addr-marked-savegame-name) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [TRUE](../../constants/universal/#const-true) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
