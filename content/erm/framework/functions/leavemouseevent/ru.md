---
{"title":"LeaveMouseEvent","summary":"Восстанавливает контекст мыши, затем клавиатуры; вызывается завершающими обработчиками.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Восстанавливает контекст мыши, затем клавиатуры; вызывается завершающими обработчиками.

## Контракт вызова {#signature}

```erm
!!FU(LeaveMouseEvent):P;
```

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/) · [RestorePrevMouseEventData](../restoreprevmouseeventdata/)

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 171–174. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
