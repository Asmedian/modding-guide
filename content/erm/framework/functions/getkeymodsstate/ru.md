---
{"title":"GetKeyModsState","summary":"Опрашивает левые и правые Alt, Ctrl, Shift через GetKeyState и обновляет key_; объединённый флаг равен OR двух сторон.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Опрашивает левые и правые Alt, Ctrl, Shift через GetKeyState и обновляет key_*; объединённый флаг равен OR двух сторон.

## Контракт вызова {#signature}

```erm
!!FU(GetKeyModsState):P;
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^key_leftAlt^](../../globals/#global-i-key-leftalt) · [i^key_rightAlt^](../../globals/#global-i-key-rightalt) · [i^key_alt^](../../globals/#global-i-key-alt) · [i^key_leftCtrl^](../../globals/#global-i-key-leftctrl) · [i^key_rightCtrl^](../../globals/#global-i-key-rightctrl) · [i^key_ctrl^](../../globals/#global-i-key-ctrl) · [i^key_leftShift^](../../globals/#global-i-key-leftshift) · [i^key_rightShift^](../../globals/#global-i-key-rightshift) · [i^key_shift^](../../globals/#global-i-key-shift).

Вызовы экспорта: `DisableErmTracking`, `GetKeyState`, `RestoreErmTracking`.

## Версия и статус {#provenance}

Статус: `internal`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 94–128. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[KEY_LCONTROL](../../constants/key-codes/#const-key-lcontrol) · [KEY_LMENU](../../constants/key-codes/#const-key-lmenu) · [KEY_LSHIFT](../../constants/key-codes/#const-key-lshift) · [KEY_RCONTROL](../../constants/key-codes/#const-key-rcontrol) · [KEY_RMENU](../../constants/key-codes/#const-key-rmenu) · [KEY_RSHIFT](../../constants/key-codes/#const-key-rshift)

Важное расхождение: исходник проверяет GetKeyState сдвигом `d>>7`, тогда как WinAPI возвращает SHORT с признаком нажатия в бите 15. Не считайте этот фрагмент подтверждённым способом опроса; см. [исправленный пример](../../../examples/sn-e/) и [контракт Microsoft](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeystate).
