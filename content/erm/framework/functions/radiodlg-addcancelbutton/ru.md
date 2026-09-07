---
{"title":"RadioDlg_AddCancelButton","summary":"Резервирует одну из 12 позиций под отмену. Если все позиции заняты, удаляет последний пункт и сообщает ошибку один раз. Повторный вызов не добавляет вторую кнопку.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Резервирует одну из 12 позиций под отмену. Если все позиции заняты, удаляет последний пункт и сообщает ошибку один раз. Повторный вызов не добавляет вторую кнопку.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_AddCancelButton):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted).

Вызовы экспорта: `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2474–2489. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items) · [TRUE](../../constants/universal/#const-true)
