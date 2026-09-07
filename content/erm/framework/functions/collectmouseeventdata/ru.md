---
{"title":"CollectMouseEventData","summary":"Читает CM в глобальные mouse_ и dlg_action. Действие кнопки выхода нормализуется в обычное отпускание ЛКМ; клавиатурное событие DL записывает код в key.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Читает CM в глобальные mouse_* и dlg_action. Действие кнопки выхода нормализуется в обычное отпускание ЛКМ; клавиатурное событие DL записывает код в key.

## Контракт вызова {#signature}

```erm
!!FU(CollectMouseEventData):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^key^](../../globals/#global-i-key) · [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_hero_1^](../../globals/#global-i-mouse-hero-1) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action) · [i^dlg_action^](../../globals/#global-i-dlg-action).

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 129–138. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[DLG_ACTION_KEY_PRESSED](../../constants/dialog-action-types/#const-dlg-action-key-pressed) · [MOUSE_EXIT_BTN_LMB_RELEASED](../../constants/mouse-click-subtypes/#const-mouse-exit-btn-lmb-released) · [MOUSE_LMB_RELEASED](../../constants/mouse-click-subtypes/#const-mouse-lmb-released)
