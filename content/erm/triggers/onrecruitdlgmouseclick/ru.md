---
{"title":"Клик в окне найма (OnRecruitDlgMouseClick)","summary":"Контекст мыши читается через CM, состояние найма — через RD. Для подавления реакции используйте CM:R0, а не только выход из обработчика.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

Контекст мыши читается через CM, состояние найма — через RD. Для подавления реакции используйте CM:R0, а не только выход из обработчика.

## Объявление {#declaration}

```erm
!?FU(OnRecruitDlgMouseClick);
```

## Идентификатор и совместимость {#identity}

ID `77025`; регистрация `TRIGGER_RECRUIT_DLG_MOUSE_CLICK`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4018) — Enhanced !!RD:I with new named parameters syntax. !!RD:I^parameter name^/?$parameter_value; ============================== Featured parameters: ============================== ^dlgId^ - Unique recruit dialog ID. Used to d…
<!-- ERA3-GENERATED:END -->
