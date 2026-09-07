---
{"title":"Строительство здания (OnBuildTownBuilding)","summary":"x1 — город; x2 — здание. Для человека и ИИ. Для действий после завершённой постройки используйте OnAfterBuildTownBuilding.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — город; x2 — здание. Для человека и ИИ. Для действий после завершённой постройки используйте OnAfterBuildTownBuilding.

## Объявление {#declaration}

```erm
!?FU(OnBuildTownBuilding);
```

## Идентификатор и совместимость {#identity}

ID `77031`; регистрация `TRIGGER_BUILD_TOWN_BUILDING`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)
