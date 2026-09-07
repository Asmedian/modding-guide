---
{"title":"RadioDlg_SelectItemByValue","summary":"Выбирает первое совпадение значения/строковой метки. При отсутствии совпадения выбор снимается.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Выбирает первое совпадение значения/строковой метки. При отсутствии совпадения выбор снимается.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_SelectItemByValue):P(itemValue);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `itemValue` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind).

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2497–2513. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
