---
{"title":"Завершение боевого действия (OnBattleActionEnd)","summary":"Аргументов нет. Порядок: OnBeforeBattleAction → OnBattleActionEnd → OnBattleRound → OnBeforeBattleStackTurn → OnBattleStackObtainsTurn → OnAfterBattleAction. События раунда/стека возникают при соответствующем переходе, не после каждого действия безусловно.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

Аргументов нет. Порядок: OnBeforeBattleAction → OnBattleActionEnd → OnBattleRound → OnBeforeBattleStackTurn → OnBattleStackObtainsTurn → OnAfterBattleAction. События раунда/стека возникают при соответствующем переходе, не после каждого действия безусловно.

## Объявление {#declaration}

```erm
!?FU(OnBattleActionEnd);
```

## Идентификатор и совместимость {#identity}

ID `77051`; регистрация `TRIGGER_BATTLE_ACTION_END`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.8.5, +](../../compatibility/#era3-v-3-8-5-l1418) — Added new event "OnBattleActionEnd", occuring right after battle action, but before checking if battle is ended, before selecting next active stack and before starting new round or autoclosing the moat. Events order is t…
<!-- ERA3-GENERATED:END -->
