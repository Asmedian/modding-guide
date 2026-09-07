---
{"title":"OnCustomDialogEvent_Quit","summary":"Завершающий обработчик OnCustomDialogEvent: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Завершающий обработчик OnCustomDialogEvent: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework.

## Контракт вызова {#signature}

```erm
!?FU(OnCustomDialogEvent_Quit);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^dlg_id^](../../globals/#global-i-dlg-id).

## Связанные функции {#calls}

[LeaveMouseEvent](../leavemouseevent/) · [RestoreEventData](../restoreeventdata/)

## Версия и статус {#provenance}

Статус: `quit-handler`. Исследован полный блок `lib_end/-9999 era - stdlib.erm`, строки 70–73. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
