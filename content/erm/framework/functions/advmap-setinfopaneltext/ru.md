---
{"title":"AdvMap_SetInfoPanelText","summary":"Показывает непустой текст в панели карты на timeToDisplay миллисекунд (по умолчанию 5000). Использует s^temp_text^ и меняет v1.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Показывает непустой текст в панели карты на timeToDisplay миллисекунд (по умолчанию 5000). Использует s^temp_text^ и меняет v1.

## Контракт вызова {#signature}

```erm
!!FU(AdvMap_SetInfoPanelText):P(text)/(timeToDisplay);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `text` | вход |
| x2 | `timeToDisplay` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: [s^temp_text^](../../globals/#global-s-temp-text).

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2377–2403. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ADV_MANAGER](../../constants/game-managers/#const-adv-manager) · [CALLCONV_CDECL](../../constants/calling-conventions/#const-callconv-cdecl) · [CALLCONV_THISCALL](../../constants/calling-conventions/#const-callconv-thiscall)
