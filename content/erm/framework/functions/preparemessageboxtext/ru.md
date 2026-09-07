---
{"title":"PrepareMessageBoxText","summary":"Передаёт пары имени/подсказки для следующего сообщения в wog native dialogs:PrepareMessageBoxText. В снимке условие l<argsNum пропускает последнюю подсказку при чётном числе аргументов; проверьте версию библиотеки.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Передаёт пары имени/подсказки для следующего сообщения в wog native dialogs:PrepareMessageBoxText. В снимке условие l<argsNum пропускает последнюю подсказку при чётном числе аргументов; проверьте версию библиотеки.

## Контракт вызова {#signature}

```erm
!!FU(PrepareMessageBoxText):P(text[16]);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `text[16]` | вход |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `wog native dialogs:PrepareMessageBoxText`.

## Связанные функции {#calls}

[NewStrArray](../newstrarray/)

## Версия и статус {#provenance}

Статус: `requires-review`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 2767–2798. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
