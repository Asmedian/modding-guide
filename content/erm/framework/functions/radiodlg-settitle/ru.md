---
{"title":"RadioDlg_SetTitle","summary":"Копирует заголовок в состояние радиодиалога.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Копирует заголовок в состояние радиодиалога.

## Контракт вызова {#signature}

```erm
!!FU(RadioDlg_SetTitle):P(titlePtr);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `titlePtr` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: [s^radioDlg_title^](../../globals/#global-s-radiodlg-title).

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2468–2473. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
