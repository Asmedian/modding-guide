---
{"title":"Array_Move","summary":"Перемещает length элементов из offset в destInd внутри массива без изменения размера; поддерживает перекрытие, обрезает выход за конец. В снимке destInd объявлен через !#VR вместо !#VA: сверяйте исправление библиотеки перед использованием.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Перемещает length элементов из offset в destInd внутри массива без изменения размера; поддерживает перекрытие, обрезает выход за конец. В снимке destInd объявлен через !#VR вместо !#VA: сверяйте исправление библиотеки перед использованием.

## Контракт вызова {#signature}

```erm
!!FU(Array_Move):P(list)/(offset)/(length)/(destInd);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `list` | вход |
| x2 | `offset` | вход |
| x3 | `length` | вход |
| x4 | `destInd` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [s^temp^](../../globals/#global-s-temp).
  !!FU:E;
!!en;

!!FU|(offset)>=(listSize)/(destInd)>=(listSize)/(offset)=(destInd)/(length)=0:E;

!!if&(offset)<0;
  !!SN:F^`, `s^temp^`.

Вызовы экспорта: `ShowErmError`.

## Версия и статус {#provenance}

Статус: `requires-review`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 446–517. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[M_INT](../../constants/erm-commands/#const-m-int) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int)
