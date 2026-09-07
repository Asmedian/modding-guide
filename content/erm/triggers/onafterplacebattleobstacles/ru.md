---
{"title":"После расстановки препятствий (OnAfterPlaceBattleObstacles)","summary":"После размещения препятствий. Аргументов нет. Восстанавливается основной генератор случайных чисел ERA; изменения клеток должны учитывать уже созданные препятствия.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

После размещения препятствий. Аргументов нет. Восстанавливается основной генератор случайных чисел ERA; изменения клеток должны учитывать уже созданные препятствия.

## Объявление {#declaration}

```erm
!?FU(OnAfterPlaceBattleObstacles);
```

## Идентификатор и совместимость {#identity}

ID `77055`; регистрация `TRIGGER_AFTER_BATTLE_PLACE_BATTLE_OBSTACLES`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1187) — Added new event "OnAfterPlaceBattleObstacles", occuring after all obstacles are placed on battlefield. Random number generated is switched back to the qualitative one. New custom obstacles may be added in this phase.
<!-- ERA3-GENERATED:END -->
