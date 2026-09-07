---
{"title":"Расчёт дохода города (OnCalculateTownIncome)","summary":"x1 — город; x2 — доход, изменяемый; x3 — учитывать дополнительные ресурсы силоса. Меняется только возвращаемый доход x2. Событие расчётное: оно не гарантирует фактическую выдачу ресурсов.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — город; x2 — доход, изменяемый; x3 — учитывать дополнительные ресурсы силоса. Меняется только возвращаемый доход x2. Событие расчётное: оно не гарантирует фактическую выдачу ресурсов.

## Объявление {#declaration}

```erm
!?FU(OnCalculateTownIncome);
```

## Идентификатор и совместимость {#identity}

ID `77042`; регистрация `TRIGGER_CALC_TOWN_INCOME`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.4, +](../../compatibility/#era3-v-3-0-4-l3374) — Extended town income limits from -32768..32767 to -2147483648..+2147483648 and added new event OnCalculateTownIncome with three parameters: Town ID, Income (gold amount), Account resource silo? (0 or 1).
<!-- ERA3-GENERATED:END -->
