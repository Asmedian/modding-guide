---
{"title":"Перед ходом стека (OnBeforeBattleStackTurn)","summary":"x1 — активный стек 0..41, изменяемый. Срабатывает до OnBattleRegeneratePhase. Проверяйте допустимость нового стека; это не произвольный вызов атаки.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — активный стек 0..41, изменяемый. Срабатывает до OnBattleRegeneratePhase. Проверяйте допустимость нового стека; это не произвольный вызов атаки.

## Объявление {#declaration}

```erm
!?FU(OnBeforeBattleStackTurn);
```

## Идентификатор и совместимость {#identity}

ID `77041`; регистрация `TRIGGER_BEFORE_STACK_TURN`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.8.5, +](../../compatibility/#era3-v-3-8-5-l1418) — Added new event "OnBattleActionEnd", occuring right after battle action, but before checking if battle is ended, before selecting next active stack and before starting new round or autoclosing the moat. Events order is t…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2583) — The following improvements were introduced in "Era Erm Framework" mod: - "OnBeforeBattle" and "OnBeforeBattleUniversal" events were improved, storing most of prebattle parameters in global variables. i^battle_isQuick^: (…
- [ERA 3.0.3, +](../../compatibility/#era3-v-3-0-3-l3420) — Added OnBeforeBattleStackTurn event. It occurs right before OnBattleRegenerationPhase event. Parameters: Stack ID (0..41). Change the first parameter to give turn to another stack. Note, that similar OnBattleStackObtains…
<!-- ERA3-GENERATED:END -->
