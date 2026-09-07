---
{"title":"DisableErrors","summary":"Включает WOG_OPT_MUTE_ERRORS и обнуляет WOG_OPT_LAST_ERROR. Используйте только вокруг контролируемой операции.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Включает WOG_OPT_MUTE_ERRORS и обнуляет WOG_OPT_LAST_ERROR. Используйте только вокруг контролируемой операции.

## Контракт вызова {#signature}

```erm
!!FU(DisableErrors):P;
```

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2010–2013. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true) · [WOG_OPT_LAST_ERROR](../../constants/wog-options/#const-wog-opt-last-error) · [WOG_OPT_MUTE_ERRORS](../../constants/wog-options/#const-wog-opt-mute-errors)
