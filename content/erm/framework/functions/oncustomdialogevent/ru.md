---
{"title":"OnCustomDialogEvent","summary":"Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_; OnCustomDialogEvent дополнительно сохраняет dlg_id.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id.

## Контракт вызова {#signature}

```erm
!?FU(OnCustomDialogEvent);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dlgId` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^dlg_id^](../../globals/#global-i-dlg-id).

## Связанные функции {#calls}

[EnterMouseEvent](../entermouseevent/) · [SaveEventData](../saveeventdata/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 208–213. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
