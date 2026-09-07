---
{"title":"OnBeforeBattle","summary":"Сбрасывает battle_round в INT_MIN перед настоящим боем.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Сбрасывает battle_round в INT_MIN перед настоящим боем.

## Контракт вызова {#signature}

```erm
!?FU(OnBeforeBattle);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^battle_round^](../../globals/#global-i-battle-round).

## Связанные функции {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 251–254. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[INT_MIN](../../constants/data-types/#const-int-min)
