---
{"title":"OnEveryDay","summary":"Adds day, weekDay (1..7), once, owner, isAi arguments. once is TRUE only for the first invocation that day, not for every player.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Adds day, weekDay (1..7), once, owner, isAi arguments. once is TRUE only for the first invocation that day, not for every player.

## Call contract {#signature}

```erm
!?FU(OnEveryDay);
```

## Parameter order {#parameters}

| Position | Source name | Usage |
| --- | --- | --- |
| x1 | `day` | output / mutable |
| x2 | `weekDay` | output / mutable |
| x3 | `once` | output / mutable |
| x4 | `owner` | output / mutable |
| x5 | `isAi` | output / mutable |

## State and dependencies {#context}

Named globals: [i^timerDay^](../../globals/#global-i-timerday) · [i^timerWeekDay^](../../globals/#global-i-timerweekday) · [i^timerMonthDay^](../../globals/#global-i-timermonthday) · [i^timerWeek^](../../globals/#global-i-timerweek) · [i^timerMonthWeek^](../../globals/#global-i-timermonthweek) · [i^timerMonth^](../../globals/#global-i-timermonth) · [i^timerOnce^](../../globals/#global-i-timeronce) · [i^timerOwner^](../../globals/#global-i-timerowner) · [i^timerIsAi^](../../globals/#global-i-timerisai) · [i^timerIsHuman^](../../globals/#global-i-timerishuman) · [i^era_everyDayTimerLastDay^](../../globals/#global-i-era-everydaytimerlastday).

## Version and status {#provenance}

Status: `event-handler`. The complete block in `lib/9999 era - stdlib.erm`, lines 228–250, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[DAYS_IN_MONTH](../../constants/game-limits/#const-days-in-month) · [DAYS_IN_WEEK](../../constants/game-limits/#const-days-in-week) · [FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true)
