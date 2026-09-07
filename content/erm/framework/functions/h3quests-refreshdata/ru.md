---
{"title":"H3Quests_RefreshData","summary":"Обновляет данные заданий после подмены существ/имён. Для задания на уничтожение монстра сверяет реальный тип по координатам; forceRefreshText пересоздаёт тексты всех заданий. Использует внутренние структуры игры.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Обновляет данные заданий после подмены существ/имён. Для задания на уничтожение монстра сверяет реальный тип по координатам; forceRefreshText пересоздаёт тексты всех заданий. Использует внутренние структуры игры.

## Контракт вызова {#signature}

```erm
!!FU(H3Quests_RefreshData):P(forceRefreshText);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `forceRefreshText` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3321–3370. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [NO_MON](../../constants/monsters/#const-no-mon) · [OBJ_MONSTER](../../constants/object-types/#const-obj-monster) · [QUEST_TYPE_DEFEAT_MONSTER](../../constants/quest-types/#const-quest-type-defeat-monster) · [TRUE](../../constants/universal/#const-true)
