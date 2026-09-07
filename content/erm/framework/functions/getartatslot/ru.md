---
{"title":"GetArtAtSlot","summary":"Возвращает ID артефакта и модификатор по слоту героя; поддерживает рюкзак. Для пустого слота учитывайте NO_ART.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Возвращает ID артефакта и модификатор по слоту героя; поддерживает рюкзак. Для пустого слота учитывайте NO_ART.

## Контракт вызова {#signature}

```erm
!!FU(GetArtAtSlot):P(hero)/(slot)/(artId)/(artMod);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `hero` | вход |
| x2 | `slot` | вход |
| x3 | `artId` | выход / изменяемый |
| x4 | `artMod` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3111–3133. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ART_SLOT_EQUIPPED_FIRST](../../constants/hero-artifact-slots/#const-art-slot-equipped-first) · [ART_SLOT_EQUIPPED_LAST](../../constants/hero-artifact-slots/#const-art-slot-equipped-last) · [ART_SLOT_FIRST](../../constants/hero-artifact-slots/#const-art-slot-first) · [ART_SLOT_LAST](../../constants/hero-artifact-slots/#const-art-slot-last) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
