---
{"title":"RadioDlg_Reset","summary":"Сбрасывает заголовок, элементы, выбор и флаги общего радиодиалога. Вызывайте перед составлением нового диалога.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сбрасывает заголовок, элементы, выбор и флаги общего радиодиалога. Вызывайте перед составлением нового диалога.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_Reset):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title).

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2456–2467. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items)
