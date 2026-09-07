---
{"title":"RestorePrevKeyModsState","summary":"Восстанавливает клавишу и модификаторы после вложенного события.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Восстанавливает клавишу и модификаторы после вложенного события.

## Контракт вызова {#signature}

```erm
!!FU(RestorePrevKeyModsState):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^key^](../../globals/#global-i-key) · [i^key_down^](../../globals/#global-i-key-down) · [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

## Связанные функции {#calls}

[RestoreEventData](../restoreeventdata/)

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 91–93. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
