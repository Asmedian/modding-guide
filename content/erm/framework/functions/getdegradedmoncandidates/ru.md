---
{"title":"GetDegradedMonCandidates","summary":"Перебирает все поддерживаемые типы и возвращает локальный массив существ, улучшающихся до monId. Кандидатов может быть несколько; полный перебор дорог при расширенном лимите.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Перебирает все поддерживаемые типы и возвращает локальный массив существ, улучшающихся до monId. Кандидатов может быть несколько; полный перебор дорог при расширенном лимите.

## Контракт вызова {#signature}

```erm
!!FU(GetDegradedMonCandidates):P(monId)/(degradesList);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `monId` | вход |
| x2 | `degradesList` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ExtendArrayLifetime`.

## Связанные функции {#calls}

[GetMaxMonsterId](../getmaxmonsterid/) · [GetUpgradedMonster](../getupgradedmonster/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3038–3054. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[MON_FIRST](../../constants/monsters/#const-mon-first) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
