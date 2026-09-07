---
{"title":"Константы ERA ERM Framework","summary":"1838 определений: игровые ID, флаги, параметры команд и коды клавиш.","translationStatus":"reviewed"}
---

## Как использовать {#usage}

Пишите `(RES_GOLD)` вместо числового ID ресурса, если файл констант Framework установлен. Имена регистрозависимы. Собственные константы объявляйте с уникальным префиксом и прописными буквами. Нулевой ID может быть реальной сущностью, а -1 — специальным значением; значение определяется конкретной группой.

## Группы {#groups}

- [Логические значения](universal/) — 4
- [Параметры ERM-команд](erm-commands/) — 9
- [Флаги мыши](mouse-clicks/) — 5
- [Действия мыши](mouse-click-subtypes/) — 4
- [Колесо мыши](mouse-wheel-subtypes/) — 2
- [Игроки](players/) — 15
- [Маски игроков](player-bits/) — 8
- [Ресурсы](resources/) — 13
- [Флаги существ](monster-flags/) — 32
- [Навыки героев](hero-skills/) — 41
- [Классы героев](hero-classes/) — 20
- [Герои](heroes/) — 164
- [Существа](monsters/) — 205
- [Агрессивность монстров](monster-aggression-level/) — 10
- [Школы магии](spell-schools/) — 4
- [Тексты заклинаний для SN:H](spell-texts-for-sn-h/) — 7
- [Заклинания](spells/) — 78
- [Слоты артефактов героя](hero-artifact-slots/) — 28
- [Классы артефактов](hero-artifact-levels/) — 6
- [Артефакты](artifacts/) — 177
- [Модификаторы артефактов](artfiact-modifiers/) — 1
- [Типы заданий](quest-types/) — 10
- [Награды заданий](quest-rewards/) — 11
- [Типы объектов](object-types/) — 230
- [Города](towns/) — 15
- [Флаги ERM](erm-flags/) — 4
- [Настройки WoG](wog-options/) — 22
- [Слоты армии](army-slots/) — 9
- [Стороны и контекст боя](battle/) — 18
- [Маски типов боя](battle-type-flags/) — 6
- [Боевые действия](battle-actions/) — 14
- [Клетки поля боя](battle-hexes/) — 3
- [Индексы полей BM:G](bm-g-field-offsets/) — 14
- [Опыт отрядов](stack-experience/) — 1
- [Пределы игровых индексов](game-limits/) — 12
- [Настройки игры](game-settings/) — 39
- [Типы игры](game-types/) — 6
- [Соглашения о вызовах](calling-conventions/) — 11
- [Типы данных UN:C](un-c-data-types/) — 8
- [Типы данных](data-types/) — 21
- [Диалоги](dialogs/) — 18
- [Действия диалогов](dialog-action-types/) — 5
- [Элементы диалогов](dialog-item-ids/) — 92
- [Типы сообщений](h3-message-dialog-types/) — 5
- [Выравнивание текста](h3-dialog-text-alignment/) — 6
- [Команды диалогов](h3-dialog-commands/) — 5
- [Изображения в диалогах](h3-dialog-picture-types/) — 47
- [События чата](era-chat-event/) — 6
- [Адреса памяти](useful-addresses/) — 6
- [Номера битов](bits/) — 32
- [Битовые маски](bit-masks/) — 32
- [Размеры в битах](bit-sizes/) — 5
- [Размеры игровых структур](game-structures/) — 26
- [Адреса игровых функций](game-functions/) — 2
- [Адреса игровых менеджеров](game-managers/) — 10
- [Специальные значения](special-enums/) — 12
- [Win32 API](win32-api/) — 3
- [Машинные инструкции](assembler/) — 3
- [Коды символов](character-codes/) — 62
- [Коды клавиш](key-codes/) — 171
- [Диалоги выбора](radio-dialogs/) — 3

## Состав реестра {#snapshot}

В `9999 era - consts.erm` найдено 1664 определений, в `9999 era - key codes.erm` — 171. Ещё 3 определения находятся в stdlib. Группа внутренних констант выделена отдельно; адреса памяти требуют проверки версии.
