---
{"title":"Нажатие клавиши (OnKeyPressed)","summary":"x1 — код клавиши; x2 — блокировка стандартной реакции (0/1, изменяемый); x3 — isDown, TRUE только при первоначальном нажатии, FALSE при автоповторе. Коды находятся в KEY_ константах Framework.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — код клавиши; x2 — блокировка стандартной реакции (0/1, изменяемый); x3 — isDown, TRUE только при первоначальном нажатии, FALSE при автоповторе. Коды находятся в KEY_* константах Framework.

## Объявление {#declaration}

```erm
!?FU(OnKeyPressed);
```

## Идентификатор и совместимость {#identity}

ID `77003`; регистрация `TRIGGER_KEYPRESS`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1960) — Added extra parameter to "OnKeyPressed" event. "OnKeyPressed" occurs multiple times, when you hold the key, while it's sometimes necessary to catch only the first time, when key state changes to DOWN and ignore other eve…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l2008) — The following improvements were introduced in "Era Erm Framework" mod: - Added new globally saved parameters for "OnKeyPressed" event: i^key_down^: boolean. TRUE only when the key changes its state from UP to DOWN the fi…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2125) — Event "OnKeyPressed" now handles ALT key.
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2180) — The following improvements were introduced in "Era Erm Framework" mod: - "OnKeyPressed" event and all mouse click events were improved, storing keyboard special keys in global variables. i^key^: Pressed key virtual key c…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2413) — OnKeyPressed event does not occur anymore in dialogs where an input element has focus. It became possible to handle keyboard safely without routine checks for chat enter/leave events.
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l2947) — Added new events to "Era Erm Framework": "OnKeyPressed_AdvMap", "OnKeyPressed_Battle", "OnKeyPressed_HeroScreen", "OnKeyPressed_HeroMeetingScreen", "OnKeyPressed_Town", occuring right after "OnKeyPressed" events and taki…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
<!-- ERA3-GENERATED:END -->
