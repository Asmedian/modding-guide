---
{"title":"RadioDlg_Show","summary":"Показывает диалог через IF:G и возвращает ?resultItem/?resultValue/?resultTagPtr. Отмена/пустой список дают -1/-1/пусто. Состояние предварительно копируется, чтобы вложенный диалог не испортил текущие пункты.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Показывает диалог через IF:G и возвращает ?resultItem/?resultValue/?resultTagPtr. Отмена/пустой список дают -1/-1/пусто. Состояние предварительно копируется, чтобы вложенный диалог не испортил текущие пункты.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_Show):P(resultItem)/(resultValue)/(resultTagPtr);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `resultItem` | выход / изменяемый |
| x2 | `resultValue` | выход / изменяемый |
| x3 | `resultTagPtr` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title) · [s^temp^](../../globals/#global-s-temp).

## Связанные функции {#calls}

[Array_Copy](../array-copy/) · [IntLog2](../intlog2/) · [NewIntArray](../newintarray/) · [NewStrArray](../newstrarray/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2612–2678. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [TRUE](../../constants/universal/#const-true)
