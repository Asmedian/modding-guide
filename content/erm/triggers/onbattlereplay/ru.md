---
{"title":"Переигровка боя (OnBattleReplay)","summary":"После восстановления состояния для переигровки. Аргументов нет. OnBeforeBattleUniversal повторно не вызывается; восстановите зависящий от боя контекст здесь. Требуется поддержка переигровки в сборке.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

После восстановления состояния для переигровки. Аргументов нет. OnBeforeBattleUniversal повторно не вызывается; восстановите зависящий от боя контекст здесь. Требуется поддержка переигровки в сборке.

## Объявление {#declaration}

```erm
!?FU(OnBattleReplay);
```

## Идентификатор и совместимость {#identity}

ID `77043`; регистрация `TRIGGER_BATTLE_REPLAY`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2040) — Fixed non-working "OnBeforeBattleReplay" and "OnAfterBattleReplay events". Newest "BattleReplay" plugin by igrik is required. After battle end when user clicks "Cancel" button, "OnBeforeBattleReplay" is generated. Battle…
<!-- ERA3-GENERATED:END -->
