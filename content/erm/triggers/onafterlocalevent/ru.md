---
{"title":"После локального события (OnAfterLocalEvent)","summary":"x1/x2/x3 — координаты события. Для человека; срабатывает до соответствующего !$LE. Не предполагайте, что одноразовый объект события остался на карте.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1/x2/x3 — координаты события. Для человека; срабатывает до соответствующего !$LE. Не предполагайте, что одноразовый объект события остался на карте.

## Объявление {#declaration}

```erm
!?FU(OnAfterLocalEvent);
```

## Идентификатор и совместимость {#identity}

ID `77046`; регистрация `TRIGGER_AFTER_LOCAL_EVENT`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1965) — Implemented two universal events for handling human local events: "OnBeforeLocalEvent" and "OnAfterLocalEvent". They occur before any !?LE/!$LE trigger respecively and receive 3 parameters: x, y and z coordinates. Exampl…
<!-- ERA3-GENERATED:END -->
