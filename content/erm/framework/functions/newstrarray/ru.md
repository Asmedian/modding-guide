---
{"title":"NewStrArray","summary":"Создаёт строковый массив с теми же перегрузками, что NewIntArray. Заполнитель — строка, по умолчанию пустая. Возвращается ID массива, а не адрес памяти.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Создаёт строковый массив с теми же перегрузками, что NewIntArray. Заполнитель — строка, по умолчанию пустая. Возвращается ID массива, а не адрес памяти.

## Контракт вызова {#signature}

```erm
!!FU(NewStrArray):P?(result:y);
!!FU(NewStrArray):P(size)/?(result:y);
!!FU(NewStrArray):P(size)/(fill)/?(result:y)/(storage);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `arg1` | вход |
| x2 | `arg2` | вход |
| x3 | `arg3` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `ExtendArrayLifetime`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 337–375. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[ARG_SYNTAX_GET](../../constants/erm-commands/#const-arg-syntax-get) · [M_AUTO_ID](../../constants/erm-commands/#const-m-auto-id) · [M_STR](../../constants/erm-commands/#const-m-str) · [M_TRIGGER_LOCAL](../../constants/erm-commands/#const-m-trigger-local)
