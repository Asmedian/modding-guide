---
{"title":"EquipArtToSlot","summary":"Надевает артефакт в слот куклы героя либо выбирает слот при NO_ART_SLOT. Возвращает TRUE/FALSE и вызывает OnEquipArt. Не служит записью произвольного слота рюкзака.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Надевает артефакт в слот куклы героя либо выбирает слот при NO_ART_SLOT. Возвращает TRUE/FALSE и вызывает OnEquipArt. Не служит записью произвольного слота рюкзака.

## Контракт вызова {#signature}

```erm
!!FU(EquipArtToSlot):P(hero)/(art)/(artMod)/(slot)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `hero` | вход |
| x2 | `art` | выход / изменяемый |
| x3 | `artMod` | вход |
| x4 | `slot` | вход |
| x5 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3170–3190. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ART_SLOT_MISC_5](../../constants/hero-artifact-slots/#const-art-slot-misc-5) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall) · [FALSE](../../constants/universal/#const-false) · [GAME_MANAGER](../../constants/game-managers/#const-game-manager) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod) · [NO_ART_SLOT](../../constants/hero-artifact-slots/#const-no-art-slot) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
