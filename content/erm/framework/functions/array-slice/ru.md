---
{"title":"Array_Slice","summary":"Копирует диапазон в новый массив. Отрицательные start/count задают отсчёт от конца/исключение хвоста. Хранение по умолчанию M_TRIGGER_LOCAL. Для пустого или неверного исходного массива возвращает NULL, поэтому проверяйте результат.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Копирует диапазон в новый массив. Отрицательные start/count задают отсчёт от конца/исключение хвоста. Хранение по умолчанию M_TRIGGER_LOCAL. Для пустого или неверного исходного массива возвращает NULL, поэтому проверяйте результат.

## Контракт вызова {#signature}

```erm
!!FU(Array_Slice):P(list)/(start)/(count)/(result)/(arrayStorageType);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `list` | вход |
| x2 | `start` | вход |
| x3 | `count` | выход / изменяемый |
| x4 | `result` | выход / изменяемый |
| x5 | `arrayStorageType` | выход / изменяемый |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!FU:E;
!!en;

!!VR(listSize:y):S-1;
!!SN:M(list)/?(listSize)/?(listItemsType:y)/d/?(listAddr:y);
!!FU&(listSize)<=0:E;

!!VR(arrayStorageType)&(numArgs)<(@arrayStorageType):S(M_TRIGGER_LOCAL);
!!SN:M(M_AUTO_ID)/0/(listItemsType)/(arrayStorageType)/?(result);
!!SN&(arrayStorageType)=(M_TRIGGER_LOCAL):F^`.

Вызовы экспорта: `ExtendArrayLifetime`, `ShowErmError`.

В реализации есть прямой доступ к памяти или машинным функциям. Используйте совместимую сборку игры; адреса нельзя переносить на другой EXE без проверки.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 689–743. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[DUMMY](../../constants/universal/#const-dummy) · [INT_MAX](../../constants/data-types/#const-int-max) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_INT](../../constants/erm-commands/#const-m-int) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local) · [NULL](../../constants/universal/#const-null) · [SIZEOF_INT](../../constants/data-types/#const-sizeof-int) · [UNC_INT](../../constants/un-c-data-types/#const-unc-int)
