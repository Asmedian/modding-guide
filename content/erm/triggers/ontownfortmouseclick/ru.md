---
{"title":"Клик в окне форта (OnTownFortMouseClick)","summary":"Контекст CM. В актуальной регистрации имя OnTownFortMouseClick; старое OnTownHallMouseClick переименовано и не зарегистрировано как алиас. Предоставленный Framework всё ещё содержит обработчик старого имени: при переносе проверяйте согласованность версий.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

Контекст CM. В актуальной регистрации имя OnTownFortMouseClick; старое OnTownHallMouseClick переименовано и не зарегистрировано как алиас. Предоставленный Framework всё ещё содержит обработчик старого имени: при переносе проверяйте согласованность версий.

## Объявление {#declaration}

```erm
!?FU(OnTownFortMouseClick);
```

## Идентификатор и совместимость {#identity}

ID `77026`; регистрация `TRIGGER_TOWN_FORT_MOUSE_CLICK`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2044) — Renamed "OnTownHallMouseClick" to more accurate "OnTownFortMouseClick". &#91;!&#93; SN:Q is deprecated and shoudn't be used for new scripts because it may break any ERM library/mod/script functionality. ERM interpreter and Era E…
<!-- ERA3-GENERATED:END -->
