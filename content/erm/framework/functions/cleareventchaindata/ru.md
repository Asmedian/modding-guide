---
{"title":"ClearEventChainData","summary":"Очищает служебный стек контекста событий и сбрасывает его позицию. Вызывается при чтении сохранения.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Очищает служебный стек контекста событий и сбрасывает его позицию. Вызывается при чтении сохранения.

## Контракт вызова {#signature}

```erm
!!FU(ClearEventChainData):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^savedEventData^](../../globals/#global-i-savedeventdata) · [i^savedEventDataPos^](../../globals/#global-i-savedeventdatapos).

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 12–15. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
