---
{"title":"OnSetupBattlefield","summary":"Перечитывает battle_ при подготовке поля.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Перечитывает battle_* при подготовке поля.

## Контракт вызова {#signature}

```erm
!?FU(OnSetupBattlefield);
```

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[UpdateBattleVars](../updatebattlevars/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 263–265. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
