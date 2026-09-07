---
{"title":"RestorePrevMouseEventData","summary":"Сохраняет/восстанавливает десять mouse_ значений. mouse_hero_1 и dlg_action в эту пару не включены; нельзя считать весь контекст автоматически восстановленным.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сохраняет/восстанавливает десять mouse_* значений. mouse_hero_1 и dlg_action в эту пару не включены; нельзя считать весь контекст автоматически восстановленным.

## Контракт вызова {#signature}

```erm
!!FU(RestorePrevMouseEventData):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^mouse_x^](../../globals/#global-i-mouse-x) · [i^mouse_y^](../../globals/#global-i-mouse-y) · [i^mouse_battleHex^](../../globals/#global-i-mouse-battlehex) · [i^mouse_flags^](../../globals/#global-i-mouse-flags) · [i^mouse_hero_0^](../../globals/#global-i-mouse-hero-0) · [i^mouse_item^](../../globals/#global-i-mouse-item) · [i^mouse_mapX^](../../globals/#global-i-mouse-mapx) · [i^mouse_mapY^](../../globals/#global-i-mouse-mapy) · [i^mouse_mapZ^](../../globals/#global-i-mouse-mapz) · [i^mouse_action^](../../globals/#global-i-mouse-action).

## Связанные функции {#calls}

[RestoreEventData](../restoreeventdata/)

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 142–144. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
