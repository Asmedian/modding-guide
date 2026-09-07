---
{"title":"После повышения уровня (OnAfterHeroGainLevel)","summary":"x1 — герой после повышения, когда диалог закрыт. Для человека и ИИ. Для изменения вариантов навыков используйте HL до завершения выбора.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — герой после повышения, когда диалог закрыт. Для человека и ИИ. Для изменения вариантов навыков используйте HL до завершения выбора.

## Объявление {#declaration}

```erm
!?FU(OnAfterHeroGainLevel);
```

## Идентификатор и совместимость {#identity}

ID `77050`; регистрация `TRIGGER_AFTER_HERO_GAIN_LEVEL`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1949) — Added new ERM events: - "OnWinGame" occurs when human player wins scenario. - "OnLoseGame" occurs when human player loses scenario. - "OnTransferHero" occurs when hero data from the previous campaign scenario is transfer…
<!-- ERA3-GENERATED:END -->
