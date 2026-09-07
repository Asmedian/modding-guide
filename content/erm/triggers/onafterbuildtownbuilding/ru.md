---
{"title":"После строительства (OnAfterBuildTownBuilding)","summary":"x1 — город; x2 — построенное здание. Состояние города уже обновлено. Не выводите факт постройки из одного лишь закрытия городского холла.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — город; x2 — построенное здание. Состояние города уже обновлено. Не выводите факт постройки из одного лишь закрытия городского холла.

## Объявление {#declaration}

```erm
!?FU(OnAfterBuildTownBuilding);
```

## Идентификатор и совместимость {#identity}

ID `77052`; регистрация `TRIGGER_AFTER_BUILD_TOWN_BUILDING`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1218) — Added new "OnAfterBuildTownBuilding" event, occuring right after town building was built. x-parameters: Town ID, Building ID.
<!-- ERA3-GENERATED:END -->
