---
{"title":"OnEveryDay","summary":"Дополняет событие аргументами day, weekDay (1..7), once, owner, isAi. once=TRUE только при первом вызове за день, а не для каждого игрока.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Дополняет событие аргументами day, weekDay (1..7), once, owner, isAi. once=TRUE только при первом вызове за день, а не для каждого игрока.

## Контракт вызова {#signature}

```erm
!?FU(OnEveryDay);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `day` | выход / изменяемый |
| x2 | `weekDay` | выход / изменяемый |
| x3 | `once` | выход / изменяемый |
| x4 | `owner` | выход / изменяемый |
| x5 | `isAi` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: [i^timerDay^](../../globals/#global-i-timerday) · [i^timerWeekDay^](../../globals/#global-i-timerweekday) · [i^timerMonthDay^](../../globals/#global-i-timermonthday) · [i^timerWeek^](../../globals/#global-i-timerweek) · [i^timerMonthWeek^](../../globals/#global-i-timermonthweek) · [i^timerMonth^](../../globals/#global-i-timermonth) · [i^timerOnce^](../../globals/#global-i-timeronce) · [i^timerOwner^](../../globals/#global-i-timerowner) · [i^timerIsAi^](../../globals/#global-i-timerisai) · [i^timerIsHuman^](../../globals/#global-i-timerishuman) · [i^era_everyDayTimerLastDay^](../../globals/#global-i-era-everydaytimerlastday).

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 228–250. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[DAYS_IN_MONTH](../../constants/game-limits/#const-days-in-month) · [DAYS_IN_WEEK](../../constants/game-limits/#const-days-in-week) · [FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true)
