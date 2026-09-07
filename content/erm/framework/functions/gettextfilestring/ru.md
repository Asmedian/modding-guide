---
{"title":"GetTextFileString","summary":"Читает строку с нулевым индексом из загруженных ресурсов randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent. Имя нормализуется; неизвестное даёт Wrong txt filename!. Индекс строки не проверяется.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Читает строку с нулевым индексом из загруженных ресурсов randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent. Имя нормализуется; неизвестное даёт Wrong txt filename!. Индекс строки не проверяется.

## Контракт вызова {#signature}

```erm
!!FU(GetTextFileString):P(txtFilename)/(rowIndex)/(string);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `txtFilename` | вход |
| x2 | `rowIndex` | вход |
| x3 | `string` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!VR(address):S6968208;               [resources]
!!el&(text)=^`, `s^;
  !!VR(address):S6974640;               [object names]
; Special treatment for town type names
!!el&(text)=^`, `s^;
  !!VR(address):S6976900;               [player colour]
!!el&(text)=^`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[StrToLower](../strtolower/) · [Substr](../substr/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 3217–3284. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[UNC_INT](../../constants/un-c-data-types/#const-unc-int)
