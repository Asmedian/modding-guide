---
{"title":"OnKeyReleased","summary":"Сохраняет контекст клавиатуры, обновляет key и модификаторы. KeyPressed дополнительно записывает isDown; завершающий обработчик восстанавливает прежнее состояние.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сохраняет контекст клавиатуры, обновляет key и модификаторы. KeyPressed дополнительно записывает isDown; завершающий обработчик восстанавливает прежнее состояние.

## Контракт вызова {#signature}

```erm
!?FU(OnKeyReleased);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `key` | вход |
| x2 | `preventDefault` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^key^](../../globals/#global-i-key).

## Связанные функции {#calls}

[GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 157–164. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
