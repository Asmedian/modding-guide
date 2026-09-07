---
{"title":"Выбор улучшения существа (OnDetermineMonInfoDlgUpgrade)","summary":"x1 — существо; x2 — улучшенный тип либо -1, изменяемый; x3 — город либо -1; x4 — герой либо -1. Событие относится к доступному улучшению в окне сведений о существе.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — существо; x2 — улучшенный тип либо -1, изменяемый; x3 — город либо -1; x4 — герой либо -1. Событие относится к доступному улучшению в окне сведений о существе.

## Объявление {#declaration}

```erm
!?FU(OnDetermineMonInfoDlgUpgrade);
```

## Идентификатор и совместимость {#identity}

ID `77039`; регистрация `TRIGGER_DETERMINE_MON_INFO_DLG_UPGRADE`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4074) — Added new event "OnDetermineMonInfoDlgUpgrade", occured, when game determines wether to show upgrade button in monster info dialog. Parameters: MonType, UpgradedType or -1, Town ID or -1, Hero ID or -1. -1 for UpgradedTy…
<!-- ERA3-GENERATED:END -->
