---
{"title":"Чтение данных сохранения (OnSavegameRead)","summary":"После восстановления переменных ERM. Аргументов нет. Здесь читают собственные секции; временные указатели прошлого сеанса недействительны.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

После восстановления переменных ERM. Аргументов нет. Здесь читают собственные секции; временные указатели прошлого сеанса недействительны.

## Объявление {#declaration}

```erm
!?FU(OnSavegameRead);
```

## Идентификатор и совместимость {#identity}

ID `77002`; регистрация `TRIGGER_SAVEGAME_READ`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, -](../../compatibility/#era3-v-3-9-15-l610) — Fixed old event handling bug. Triggering ERM event with disabled ERM resulted in global event not being generated either. For example, Era and plugins could not handle 'OnSavegameRead' event if ERM was disabled at the mo…
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
<!-- ERA3-GENERATED:END -->
