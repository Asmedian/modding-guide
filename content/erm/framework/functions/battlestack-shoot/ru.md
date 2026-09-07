---
{"title":"BattleStack_Shoot","summary":"Заставляет attackerStackId стрелять в defenderStackId, временно меняя и восстанавливая позицию цели в структуре атакующего. Проверку существования стеков выполняйте заранее.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Заставляет attackerStackId стрелять в defenderStackId, временно меняя и восстанавливая позицию цели в структуре атакующего. Проверку существования стеков выполняйте заранее.

## Контракт вызова {#signature}

```erm
!!FU(BattleStack_Shoot):P(attackerStackId)/(defenderStackId);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `attackerStackId` | вход |
| x2 | `defenderStackId` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2804–2816. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
