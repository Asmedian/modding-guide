---
{"title":"StrToUpper","summary":"Создаёт строку в верхнем/нижнем регистре через CharUpperA/CharLowerA. Это ANSI-преобразование Windows, не универсальная Unicode-нормализация.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Создаёт строку в верхнем/нижнем регистре через CharUpperA/CharLowerA. Это ANSI-преобразование Windows, не универсальная Unicode-нормализация.

## Контракт вызова {#signature}

```erm
!!FU(StrToUpper):P(strPtr)/(resultPtr);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `strPtr` | вход |
| x2 | `resultPtr` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: [s^temp^](../../globals/#global-s-temp).

Вызовы экспорта: `CharUpperA`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1443–1457. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
