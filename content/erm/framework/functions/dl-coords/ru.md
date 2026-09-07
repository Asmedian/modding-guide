---
{"title":"DL_Coords","summary":"Координаты x/y поддерживают GET, SET и ADD. Позиция ограничивается размером экрана и тенью окна. H3Dlg_Coords принимает адрес H3Dlg; DL_Coords — ID уже созданного через DL:N диалога.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Координаты x/y поддерживают GET, SET и ADD. Позиция ограничивается размером экрана и тенью окна. H3Dlg_Coords принимает адрес H3Dlg; DL_Coords — ID уже созданного через DL:N диалога.

## Контракт вызова {#signature}

```erm
!!FU(DL_Coords):P(dlgId)/(x)/(y);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dlgId` | вход |
| x2 | `x` | выход / изменяемый |
| x3 | `y` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!FU:E;
!!en;

!!if&(dlgObj)=(NULL);
  !!SN:F^`.

Вызовы экспорта: `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Связанные функции {#calls}

[DL_FindById](../dl-findbyid/) · [H3Dlg_Coords](../h3dlg-coords/)

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2223–2255. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ARG_SYNTAX_ADD](../../constants/erm-commands/#const-arg-syntax-add) · [ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [NULL](../../constants/universal/#const-null) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
