---
{"title":"Оценка атаки ИИ (OnAICalcStackAttackEffect)","summary":"x1 — атакующий стек; x2 — защитник; x3 — изменяемая оценка эффекта; x4 — исходная оценка. Это вычисление привлекательности действия для ИИ, а не нанесение урона.","translationStatus":"reviewed"}
---

## Когда срабатывает и аргументы {#event}

x1 — атакующий стек; x2 — защитник; x3 — изменяемая оценка эффекта; x4 — исходная оценка. Это вычисление привлекательности действия для ИИ, а не нанесение урона.

## Объявление {#declaration}

```erm
!?FU(OnAICalcStackAttackEffect);
```

## Идентификатор и совместимость {#identity}

ID `77013`; регистрация `TRIGGER_ONAICALCSTACKATTACKEFFECT`. Имя подтверждено предоставленным исходником ERA. Историческая версия появления здесь не приписывается без отдельного подтверждения. Для нового скрипта используйте имя события, числовой ID оставлен для сопоставления старого кода.

## Связанные справочники {#related}

[Все триггеры](../) · [Функции и аргументы](../../functions/) · [События Framework](../../framework/events/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Отладка и совместимость ERM](../../compatibility/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-w-w-key-w-key) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Коды клавиш](../../framework/constants/key-codes/) · [Средства ERA, память и звук (SN)](../../receivers/sn/) · [Игровой таймер (TM)](../tm/) · [Боевой стек (BM)](../../receivers/bm/) · [Опыт и бонусы существ (EA)](../../receivers/ea/) · [События мыши (CM)](../../receivers/cm/) · [Картинки зданий по городам](../../tables/building-pictures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.2, -](../../compatibility/#era3-v-3-9-2-l1294) — Fixed crash in OnAICalcStackAttackEffect event, occuring on attempt to get tower stack ID by invalid position (251, 254, 255). Credits: daemon_n.
<!-- ERA3-GENERATED:END -->
