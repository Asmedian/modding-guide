---
{"title":"RadioDlg_AddItem","summary":"Добавляет подпись, число, метку и необязательный selectItem. Значения по умолчанию: пусто, 0, пусто, FALSE. Пустая подпись отображается как -/-. Вместимость 12, с отменой 11.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Добавляет подпись, число, метку и необязательный selectItem. Значения по умолчанию: пусто, 0, пусто, FALSE. Пустая подпись отображается как -/-. Вместимость 12, с отменой 11.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_AddItem):P(itemCaptionPtr)/(itemValue)/(itemTagPtr)/(selectItem);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `itemCaptionPtr` | вход |
| x2 | `itemValue` | вход |
| x3 | `itemTagPtr` | выход / изменяемый |
| x4 | `selectItem` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted).

Вызовы экспорта: `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2532–2560. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items) · [TRUE](../../constants/universal/#const-true)
