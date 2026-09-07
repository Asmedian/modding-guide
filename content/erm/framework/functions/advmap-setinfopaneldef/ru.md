---
{"title":"AdvMap_SetInfoPanelDef","summary":"Показывает текст и кадр DEF в панели карты на 5000 мс по умолчанию. Временно подменяет два машинных операнда имени DEF и восстанавливает их. Меняет z1/v1; без defName вызывает текстовый вариант.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Показывает текст и кадр DEF в панели карты на 5000 мс по умолчанию. Временно подменяет два машинных операнда имени DEF и восстанавливает их. Меняет z1/v1; без defName вызывает текстовый вариант.

## Контракт вызова {#signature}

```erm
!!FU(AdvMap_SetInfoPanelDef):P(text)/(defName)/(defFrameId)/(timeToDisplay);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `text` | вход |
| x2 | `defName` | вход |
| x3 | `defFrameId` | вход |
| x4 | `timeToDisplay` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: [i^radioDlg_captions^](../../globals/#global-i-radiodlg-captions) · [i^radioDlg_tags^](../../globals/#global-i-radiodlg-tags) · [i^radioDlg_values^](../../globals/#global-i-radiodlg-values) · [i^radioDlg_numItems^](../../globals/#global-i-radiodlg-numitems) · [i^radioDlg_selectedItemInd^](../../globals/#global-i-radiodlg-selecteditemind) · [i^radioDlg_flags^](../../globals/#global-i-radiodlg-flags) · [i^radioDlg_freeSpaceAlerted^](../../globals/#global-i-radiodlg-freespacealerted) · [s^radioDlg_title^](../../globals/#global-s-radiodlg-title) · [s^temp_text^](../../globals/#global-s-temp-text).

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[AdvMap_SetInfoPanelText](../advmap-setinfopaneltext/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2404–2455. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ADV_MANAGER](../../constants/game-managers/#const-adv-manager) · [CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_STORED](../../constants/erm-commands/#const-m-stored) · [M_STR](../../constants/erm-commands/#const-m-str) · [NO_RADIO_DLG_ITEM](../../constants/radio-dialogs/#const-no-radio-dlg-item) · [RADIO_DLG_FLAG_BTN_CANCEL](../../constants/radio-dialogs/#const-radio-dlg-flag-btn-cancel) · [RADIO_DLG_MAX_ITEMS](../../constants/radio-dialogs/#const-radio-dlg-max-items)
