---
{"title":"OnAfterErmInstructions","summary":"Создаёт ежедневный таймер Framework и сбрасывает учёт обработанного дня.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Создаёт ежедневный таймер Framework и сбрасывает учёт обработанного дня.

## Контракт вызова {#signature}

```erm
!?FU(OnAfterErmInstructions);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^timerDay^](../../globals/#global-i-timerday) · [i^timerWeekDay^](../../globals/#global-i-timerweekday) · [i^timerMonthDay^](../../globals/#global-i-timermonthday) · [i^timerWeek^](../../globals/#global-i-timerweek) · [i^timerMonthWeek^](../../globals/#global-i-timermonthweek) · [i^timerMonth^](../../globals/#global-i-timermonth) · [i^timerOnce^](../../globals/#global-i-timeronce) · [i^timerOwner^](../../globals/#global-i-timerowner) · [i^timerIsAi^](../../globals/#global-i-timerisai) · [i^timerIsHuman^](../../globals/#global-i-timerishuman) · [i^era_everyDayTimerLastDay^](../../globals/#global-i-era-everydaytimerlastday).

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 214–227. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
