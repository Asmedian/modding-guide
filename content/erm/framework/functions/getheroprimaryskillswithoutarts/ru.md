---
{"title":"GetHeroPrimarySkillsWithoutArts","summary":"Временно снимает 19 экипированных артефактов, читает HE:F и надевает их обратно. Вызывает OnUnequipArt/OnEquipArt; это операция с побочными событиями, а не чистое чтение.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Временно снимает 19 экипированных артефактов, читает HE:F и надевает их обратно. Вызывает OnUnequipArt/OnEquipArt; это операция с побочными событиями, а не чистое чтение.

## Контракт вызова {#signature}

```erm
!!FU(GetHeroPrimarySkillsWithoutArts):P(hero)/(attack)/(defense)/(power)/(knowledge);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `hero` | вход |
| x2 | `attack` | выход / изменяемый |
| x3 | `defense` | выход / изменяемый |
| x4 | `power` | выход / изменяемый |
| x5 | `knowledge` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Связанные функции {#calls}

[EquipArtToSlot](../equiparttoslot/) · [GetArtAtSlot](../getartatslot/) · [UnequipArtFromSlot](../unequipartfromslot/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3081–3110. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ART_ARTIFACT_LOCK](../../constants/artifacts/#const-art-artifact-lock) · [ART_HIGHLIGHTED_SLOT](../../constants/artifacts/#const-art-highlighted-slot) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [NO_ART](../../constants/artifacts/#const-no-art)
