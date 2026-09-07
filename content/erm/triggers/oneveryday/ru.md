---
{"title":"Начало игрового дня (OnEveryDay)","summary":"Движок вызывает событие для каждого игрока до обычных TM, без аргументов. Framework расширяет контракт: x1 day, x2 weekDay (1..7), x3 once, x4 owner, x5 isAi. once=TRUE только при первом вызове в данный день. Используйте эти аргументы лишь с подключённым Framework.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

Движок вызывает событие для каждого игрока до обычных TM, без аргументов. Framework расширяет контракт: x1 day, x2 weekDay (1..7), x3 once, x4 owner, x5 isAi. once=TRUE только при первом вызове в данный день. Используйте эти аргументы лишь с подключённым Framework.

## Объявление {#declaration}

```erm
!?FU(OnEveryDay);
```

## Идентификатор и совместимость {#identity}

ID `77018`; регистрация `TRIGGER_DAILY_TIMER`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.5, +](../../compatibility/#era3-v-3-0-5-l3192) — Extended OnEveryDay trigger in "Era Erm Framework" mod. The following global variables are automatically set: - i^timerDay^: 1..+inf - i^timerWeekDay^: 1..7 - i^timerMonthDay^: 1..28 - i^timerWeek^: 1..+inf - i^timerMont…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3827) — Added 1000 era - stdlib.erm script, which will contain safe for all extra ERM functionality. Currently !?FU(OnEvenyDay) event is enhanced. Its handlers will receive 5 parameters: !?FU(OnEveryDay); !#VA(day:x1) (weekDay:x…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3973) — Added "1000 - era stdlib.erm" script with universal ERM functions and events. Currently "OnEveryDay" event is enhanced with the following x-arguments: day, week day, once(0..1), owner (color), isAi (0..1).
<!-- ERA3-GENERATED:END -->
