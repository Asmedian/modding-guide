---
{"title":"ChangeArtModAtSlot","summary":"Меняет модификатор артефакта в слоту, включая рюкзак. Для свитка модификатор — ID заклинания; для обычного артефакта обычно NO_ART_MOD.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Меняет модификатор артефакта в слоту, включая рюкзак. Для свитка модификатор — ID заклинания; для обычного артефакта обычно NO_ART_MOD.

## Контракт вызова {#signature}

```erm
!!FU(ChangeArtModAtSlot):P(hero)/(slot)/(artMod);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `hero` | вход |
| x2 | `slot` | вход |
| x3 | `artMod` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3134–3154. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ART_SLOT_EQUIPPED_FIRST](../../constants/hero-artifact-slots/#const-art-slot-equipped-first) · [ART_SLOT_EQUIPPED_LAST](../../constants/hero-artifact-slots/#const-art-slot-equipped-last) · [ART_SLOT_FIRST](../../constants/hero-artifact-slots/#const-art-slot-first) · [ART_SLOT_LAST](../../constants/hero-artifact-slots/#const-art-slot-last) · [CURRENT_HERO](../../constants/heroes/#const-current-hero) · [NO_ART_MOD](../../constants/artfiact-modifiers/#const-no-art-mod) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
