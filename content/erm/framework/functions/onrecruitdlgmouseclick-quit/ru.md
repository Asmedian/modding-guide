---
{"title":"OnRecruitDlgMouseClick_Quit","summary":"Завершающий обработчик OnRecruitDlgMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Завершающий обработчик OnRecruitDlgMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework.

## Контракт вызова {#signature}

```erm
!?FU(OnRecruitDlgMouseClick_Quit);
```

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[LeaveMouseEvent](../leavemouseevent/)

## Версия и статус {#provenance}

Статус: `quit-handler`. Исследован полный блок `lib_end/-9999 era - stdlib.erm`, строки 55–57. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
