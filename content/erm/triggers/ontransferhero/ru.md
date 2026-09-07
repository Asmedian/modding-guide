---
{"title":"Перенос героя кампании (OnTransferHero)","summary":"x1 — герой после переноса, после инструкций ERM и до PI. Может включать неактивных героев кампании; наличие героя не означает присутствие на карте.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — герой после переноса, после инструкций ERM и до PI. Может включать неактивных героев кампании; наличие героя не означает присутствие на карте.

## Объявление {#declaration}

```erm
!?FU(OnTransferHero);
```

## Идентификатор и совместимость {#identity}

ID `77049`; регистрация `TRIGGER_TRANSFER_HERO`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1949) — Added new ERM events: - "OnWinGame" occurs when human player wins scenario. - "OnLoseGame" occurs when human player loses scenario. - "OnTransferHero" occurs when hero data from the previous campaign scenario is transfer…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l2033) — Fixed transferring of WoG commanders with heroes in campaigns. Previously transferring didn't work if hero was inactive in transition zone. "OnTransferHero" is called for all transferred heroes, even for inactive ones, w…
<!-- ERA3-GENERATED:END -->
