---
{"title":"DeleteFile","summary":"Удаляет файл через DeleteFileA; TRUE означает успешное удаление. Не удаляет дерево каталогов.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Удаляет файл через DeleteFileA; TRUE означает успешное удаление. Не удаляет дерево каталогов.

## Контракт вызова {#signature}

```erm
!!FU(DeleteFile):P(filePathPtr)/(result);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `filePathPtr` | вход |
| x2 | `result` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `DeleteFileA`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1578–1588. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [TRUE](../../constants/universal/#const-true)
