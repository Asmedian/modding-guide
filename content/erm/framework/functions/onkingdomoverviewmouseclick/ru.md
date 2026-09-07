---
{"title":"OnKingdomOverviewMouseClick","summary":"Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_; OnCustomDialogEvent дополнительно сохраняет dlg_id.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id.

## Контракт вызова {#signature}

```erm
!?FU(OnKingdomOverviewMouseClick);
```

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[EnterMouseEvent](../entermouseevent/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 199–201. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
