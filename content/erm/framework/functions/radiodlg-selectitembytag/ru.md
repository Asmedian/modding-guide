---
{"title":"RadioDlg_SelectItemByTag","summary":"Выбирает первое совпадение значения/строковой метки. При отсутствии совпадения выбор снимается.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Выбирает первое совпадение значения/строковой метки. При отсутствии совпадения выбор снимается.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_SelectItemByTag):P(itemTagPtr);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `itemTagPtr` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [s^temp^](../../globals/#global-s-temp).

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2514–2531. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
