---
{"title":"Перед расстановкой препятствий (OnBeforePlaceBattleObstacles)","summary":"После OnBeforeBattlefieldVisible, перед препятствиями. Аргументов нет. Временно используется штатный генератор с seed 110291x+167801y+81569; потребление случайных чисел здесь влияет на расстановку.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

После OnBeforeBattlefieldVisible, перед препятствиями. Аргументов нет. Временно используется штатный генератор с seed 110291*x+167801*y+81569; потребление случайных чисел здесь влияет на расстановку.

## Объявление {#declaration}

```erm
!?FU(OnBeforePlaceBattleObstacles);
```

## Идентификатор и совместимость {#identity}

ID `77054`; регистрация `TRIGGER_BEFORE_BATTLE_PLACE_BATTLE_OBSTACLES`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1185) — Added new event: "OnBeforePlaceBattleObstacles", occuring after "OnBeforeBattlefieldVisible" event. Global RNG is switched to the native one before calling ERM event and the generator is seeded with the following value: …
<!-- ERA3-GENERATED:END -->
