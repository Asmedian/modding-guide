---
{"title":"IsDllLoaded","summary":"Проверяет DLL по имени с расширением через GetModuleHandleA. Возвращает TRUE/FALSE и не загружает отсутствующий модуль.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Проверяет DLL по имени с расширением через GetModuleHandleA. Возвращает TRUE/FALSE и не загружает отсутствующий модуль.

## Контракт вызова {#signature}

```erm
!!FU(IsDllLoaded):P(dllFileNamePtr)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dllFileNamePtr` | вход |
| x2 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `GetModuleHandleA`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2936–2949. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [NULL](../../constants/universal/#const-null) · [TRUE](../../constants/universal/#const-true)
