---
{"title":"BattleStack_MakeActive","summary":"Передаёт ход стеку 0..41 и при необходимости выполняет фазу регенерации. Допустимый индекс сам по себе не гарантирует существование живого стека.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Передаёт ход стеку 0..41 и при необходимости выполняет фазу регенерации. Допустимый индекс сам по себе не гарантирует существование живого стека.

## Контракт вызова {#signature}

```erm
!!FU(BattleStack_MakeActive):P(stackId);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `stackId` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2817–2836. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[BATTLE_MAX_STACKS](../../constants/battle/#const-battle-max-stacks) · [BATTLE_STACKS_PER_SIDE](../../constants/battle/#const-battle-stacks-per-side) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [COMBAT_MANAGER](../../constants/game-managers/#const-combat-manager) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
