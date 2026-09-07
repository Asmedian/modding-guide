---
{"title":"RadioDlg_SelectItem","summary":"Выбирает индекс 0..numItems-1; неверный индекс снимает выбор (NO_RADIO_DLG_ITEM).","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Выбирает индекс 0..numItems-1; неверный индекс снимает выбор (NO_RADIO_DLG_ITEM).

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_SelectItem):P(itemInd);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `itemInd` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind).

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2490–2496. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item)
