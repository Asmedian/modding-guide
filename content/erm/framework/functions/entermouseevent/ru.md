---
{"title":"EnterMouseEvent","summary":"Сохраняет прежний контекст клавиатуры и мыши, затем читает модификаторы и CM нового события.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сохраняет прежний контекст клавиатуры и мыши, затем читает модификаторы и CM нового события.

## Контракт вызова {#signature}

```erm
!!FU(EnterMouseEvent):P;
```

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[CollectMouseEventData](../collectmouseeventdata/) · [GetKeyModsState](../getkeymodsstate/) · [SavePrevKeyModsState](../saveprevkeymodsstate/) · [SavePrevMouseEventData](../saveprevmouseeventdata/)

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 165–170. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
