---
{"title":"Справочные таблицы","summary":"ID, флаги, константы, слоты и форматы данных для команд ERM.","translationStatus":"reviewed"}
---

## Таблицы {#ref-cont-form}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">Таблицы</span></strong></div>
<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
		<td width="50%"><a href="artifacts/#ref-form-a1" data-context="true">Артефакты</a></td><td width="10"></td>
		<td><a href="cursors/#ref-form-mousepointers" data-context="true">Курсоры</a></td>
	</tr>
	<tr>
		<td><a href="combination-artifacts/#ref-form-a2" data-context="true">Артефакты: комбо</a></td><td></td>
		<td><a href="../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">Навыки: первичные</a></td>
	</tr>
	<tr>
		<td><a href="artifact-slots/#ref-form-ap" data-context="true">Артефакты: позиции</a></td><td></td>
		<td><a href="secondary-skills/#ref-form-secondaryskill" data-context="true">Навыки: вторичные</a></td>
	</tr>
	<tr>
		<td><a href="bits/#ref-form-hex" data-context="true">Биты: значения</a></td><td></td>
		<td><a href="objects/#ref-form-objects" data-context="true">Объекты в игре</a></td>
	</tr>
	<tr>
		<td><a href="heroes/#ref-form-numberheroes" data-context="true">Герои</a></td><td></td>
		<td><a href="creature-banks/#ref-form-cb" data-context="true">Объекты: банки существ</a></td>
	</tr>
	<tr>
		<td><a href="hero-classes/#ref-form-heroesclasses" data-context="true">Герои: классы</a></td><td></td>
		<td><a href="creature-dwellings/#ref-form-creaturedwellings" data-context="true">Объекты: жилища существ</a></td>
	</tr>
	<tr>
		<td><a href="hero-levels/#ref-form-heroeslevels" data-context="true">Герои: уровень и опыт</a></td><td></td>
		<td><a href="mines/#ref-form-mines" data-context="true">Объекты: шахты</a></td>
	</tr>
	<tr>
		<td><a href="specialty-pictures/#ref-form-heroesspec" data-context="true">Герои: специализации</a></td><td></td>
		<td><a href="wog-object-variants/#ref-form-newobj" data-context="true">Объекты: WoG</a></td>
	</tr>
	<tr>
		<td><a href="towns/#ref-form-towns" data-context="true">Города</a></td><td></td>
		<td><a href="battlefield/#ref-form-bf" data-context="true">Поле боя</a></td>
	</tr>
	<tr>
		<td><a href="building-pictures/#ref-form-buldingsintowns" data-context="true">Города: здания</a></td><td></td>
		<td><a href="combat-animations/#ref-form-formatanimation" data-context="true">Поле боя: анимация стека</a></td>
	</tr>
	<tr>
		<td><a href="buildings/#ref-form-buldings" data-context="true">Города: биты зданий</a></td><td></td>
		<td><a href="obstacles/#ref-form-obstacles" data-context="true">Поле боя: препятствия</a></td>
	</tr>
	<tr>
		<td><a href="spells/#ref-form-spell" data-context="true">Заклинания</a></td><td></td>
		<td><a href="battle-terrain/#ref-form-bug" data-context="true">Поле боя: спец.ландшафты</a></td>
	</tr>
	<tr>
		<td><a href="players/#ref-form-gamerscolor" data-context="true">Игроки</a></td><td></td>
		<td><a href="battle-backgrounds/#ref-form-ba-b" data-context="true">Поле боя: фоны</a></td>
	</tr>
	<tr>
		<td><a href="players/#ref-form-gamerscolor-bit" data-context="true">Игроки: биты</a></td><td></td>
		<td><a href="terrain/#ref-form-terrain" data-context="true">Почвы</a></td>
	</tr>
	<tr>
		<td><a href="sounds/#ref-form-sound" data-context="true">Игра: звуки</a></td><td></td>
		<td><a href="blessings/#ref-form-bless" data-context="true">Проклятия и благословения</a></td>
	</tr>
	<tr>
		<td><a href="music/#ref-form-mp3" data-context="true">Игра: mp3-трэки</a></td><td></td>
		<td><a href="resources/#ref-form-resource" data-context="true">Ресурсы</a></td>
	</tr>
	<tr>
		<td><a href="dialog-items/#ref-form-cmi" data-context="true">Игра: области кликов</a></td><td></td>
		<td><a href="creatures/#ref-form-creature" data-context="true">Существа</a></td>
	</tr>
	<tr>
		<td><a href="dialog-pictures/#ref-form-picts" data-context="true">Картинки диалогов</a></td><td></td>
		<td><a href="stack-experience-abilities/#ref-form-specexp1" data-context="true">Существа: бонусы</a></td>
	</tr>
	<tr>
		<td><a href="../framework/constants/key-codes/#ref-form-keys" data-context="true">Коды клавиш</a></td><td></td>
		<td><a href="creature-flags/#ref-form-flaggedabilities" data-context="true">Существа: спец.флаги</a></td>
	</tr>
	<tr>
		<td><a href="commanders/#ref-form-commanders" data-context="true">Командиры</a></td><td></td>
		<td><a href="creature-resources/#ref-form-cr-def-snd" data-context="true">Существа: ресурсные файлы</a></td>
	</tr>
	</table></div>
</div>
</section>
:::

## Идентификаторы и именованные значения {#ids}

Таблицы ниже связывают числовые ID с именами Framework. Выбирайте таблицу конкретного параметра: ID заклинания, анимации и изображения диалога не взаимозаменяемы. Для расширенных модов верхняя граница зависит от установленного расширения.

## Все справочные таблицы {#native-tables}

- [DEF и звуки существ](./creature-resources/)
- [ID городских зданий](./buildings/)
- [Анимации BM:V](./combat-animations/)
- [Битовые флаги существ](./creature-flags/)
- [Биты, маски и HEX](./bits/)
- [Благословения и проклятия героя](./blessings/)
- [Варианты объектов WoG](./wog-object-variants/)
- [Вторичные навыки](./secondary-skills/)
- [Выравнивание текста DL](./text-alignment/)
- [Двусторонние монолиты](./two-way-monoliths/)
- [Диалог найма RD](./recruitment-dialog/)
- [Жилища существ на карте](./creature-dwellings/)
- [Заклинания без урона EA:B](./stack-experience-spells/)
- [Звуки игровых событий](./sounds/)
- [Игровое видео](./videos/)
- [Идентификаторы игровых окон](./dialog-types/)
- [Именованные цвета текста](./text-colors/)
- [Иммунитеты EA:B](./stack-experience-immunities/)
- [Картинки вторичных навыков](./secondary-skill-pictures/)
- [Картинки для IF:Q](./dialog-pictures/)
- [Картинки зданий по городам](./building-pictures/)
- [Картинки специальностей героя](./specialty-pictures/)
- [Классы героев](./hero-classes/)
- [Классы командиров](./commanders/)
- [Клетки поля боя](./battlefield/)
- [Контрольные слова объектов](./object-control-words/)
- [Курсоры мыши](./cursors/)
- [Модификаторы EA:B](./stack-experience-modifiers/)
- [Музыка: ID и имена MP3](./music/)
- [Накладные ландшафты BU:G](./battle-terrain/)
- [Области кликов CM:I](./dialog-items/)
- [Односторонние монолиты](./one-way-monoliths/)
- [Опыт для уровня героя](./hero-levels/)
- [Особые бонусы командира](./commander-bonuses/)
- [Поля боевого отряда](./combat-stack-structure/)
- [Поля структуры героя](./hero-structure/)
- [Посещения и биты героя](./hero-visits/)
- [Препятствия на поле боя](./obstacles/)
- [Ресурсы](./resources/)
- [Сборные артефакты](./combination-artifacts/)
- [Слоты артефактов](./artifact-slots/)
- [Снаряды и лучи](./projectiles/)
- [Специальные земли](./special-terrain/)
- [Способности от опыта существ](./stack-experience-abilities/)
- [Таблица артефактов](./artifacts/)
- [Таблица героев](./heroes/)
- [Таблица заклинаний](./spells/)
- [Таблица объектов в игре](./objects/)
- [Таблица существ](./creatures/)
- [Тексты: ERT, ERS и JSON](./text-resources/)
- [Типы городов](./towns/)
- [Типы почвы](./terrain/)
- [Типы шахт](./mines/)
- [Флаги препятствий](./obstacle-flags/)
- [Флаговые способности EA:B](./stack-experience-flags/)
- [Фоны битвы](./battle-backgrounds/)
- [Хранилища существ](./creature-banks/)
- [Цвета игроков](./players/)
- [Цвета палаток и границ](./border-colors/)
- [Шаблоны диалогов DL](./dialog-templates/)

## Все тематические таблицы констант {#constants}

- [Слоты армии](../framework/constants/army-slots/)
- [Модификаторы артефактов](../framework/constants/artfiact-modifiers/)
- [Артефакты](../framework/constants/artifacts/)
- [Машинные инструкции](../framework/constants/assembler/)
- [Стороны и контекст боя](../framework/constants/battle/)
- [Боевые действия](../framework/constants/battle-actions/)
- [Клетки поля боя](../framework/constants/battle-hexes/)
- [Маски типов боя](../framework/constants/battle-type-flags/)
- [Битовые маски](../framework/constants/bit-masks/)
- [Размеры в битах](../framework/constants/bit-sizes/)
- [Номера битов](../framework/constants/bits/)
- [Индексы полей BM:G](../framework/constants/bm-g-field-offsets/)
- [Соглашения о вызовах](../framework/constants/calling-conventions/)
- [Коды символов](../framework/constants/character-codes/)
- [Типы данных](../framework/constants/data-types/)
- [Действия диалогов](../framework/constants/dialog-action-types/)
- [Элементы диалогов](../framework/constants/dialog-item-ids/)
- [Диалоги](../framework/constants/dialogs/)
- [События чата](../framework/constants/era-chat-event/)
- [Параметры ERM-команд](../framework/constants/erm-commands/)
- [Флаги ERM](../framework/constants/erm-flags/)
- [Адреса игровых функций](../framework/constants/game-functions/)
- [Пределы игровых индексов](../framework/constants/game-limits/)
- [Адреса игровых менеджеров](../framework/constants/game-managers/)
- [Настройки игры](../framework/constants/game-settings/)
- [Размеры игровых структур](../framework/constants/game-structures/)
- [Типы игры](../framework/constants/game-types/)
- [Команды диалогов](../framework/constants/h3-dialog-commands/)
- [Изображения в диалогах](../framework/constants/h3-dialog-picture-types/)
- [Выравнивание текста](../framework/constants/h3-dialog-text-alignment/)
- [Типы сообщений](../framework/constants/h3-message-dialog-types/)
- [Классы артефактов](../framework/constants/hero-artifact-levels/)
- [Слоты артефактов героя](../framework/constants/hero-artifact-slots/)
- [Классы героев](../framework/constants/hero-classes/)
- [Навыки героев](../framework/constants/hero-skills/)
- [Герои](../framework/constants/heroes/)
- [Коды клавиш](../framework/constants/key-codes/)
- [Агрессивность монстров](../framework/constants/monster-aggression-level/)
- [Флаги существ](../framework/constants/monster-flags/)
- [Существа](../framework/constants/monsters/)
- [Действия мыши](../framework/constants/mouse-click-subtypes/)
- [Флаги мыши](../framework/constants/mouse-clicks/)
- [Колесо мыши](../framework/constants/mouse-wheel-subtypes/)
- [Типы объектов](../framework/constants/object-types/)
- [Маски игроков](../framework/constants/player-bits/)
- [Игроки](../framework/constants/players/)
- [Награды заданий](../framework/constants/quest-rewards/)
- [Типы заданий](../framework/constants/quest-types/)
- [Диалоги выбора](../framework/constants/radio-dialogs/)
- [Ресурсы](../framework/constants/resources/)
- [Специальные значения](../framework/constants/special-enums/)
- [Школы магии](../framework/constants/spell-schools/)
- [Тексты заклинаний для SN:H](../framework/constants/spell-texts-for-sn-h/)
- [Заклинания](../framework/constants/spells/)
- [Опыт отрядов](../framework/constants/stack-experience/)
- [Города](../framework/constants/towns/)
- [Типы данных UN:C](../framework/constants/un-c-data-types/)
- [Логические значения](../framework/constants/universal/)
- [Адреса памяти](../framework/constants/useful-addresses/)
- [Win32 API](../framework/constants/win32-api/)
- [Настройки WoG](../framework/constants/wog-options/)

## Специальные форматы {#special}

- [Слоты артефактов](./artifact-slots/)
- [Цвета палаток и границ](./border-colors/)
- [Анимации BM:V](./combat-animations/)
- [Особые бонусы командира](./commander-bonuses/)
- [Шаблоны диалогов DL](./dialog-templates/)
- [Посещения и биты героя](./hero-visits/)
- [Флаги препятствий](./obstacle-flags/)
- [Снаряды и лучи](./projectiles/)
- [Тексты: ERT, ERS и JSON](./text-resources/)

## Числа, маски и системы счисления {#hex}

Hex 0x10 = decimal 16; hex 0xFF = 255. Номер бита 5 означает маску 32. Суммируйте независимые биты; не складывайте одинаковый бит дважды. В старом ERM адреса из дизассемблера переводились в десятичные значения; записанный без поддержки формата 0x адрес не становится числом автоматически.

## Связанные команды и таблицы {#reference-links}

[Таблица артефактов](artifacts/) · [Курсоры мыши](cursors/) · [Сборные артефакты](combination-artifacts/) · [Навыки героев](../framework/constants/hero-skills/) · [Слоты артефактов](artifact-slots/) · [Вторичные навыки](secondary-skills/) · [Биты, маски и HEX](bits/) · [Таблица объектов в игре](objects/) · [Таблица героев](heroes/) · [Хранилища существ](creature-banks/) · [Классы героев](hero-classes/) · [Жилища существ на карте](creature-dwellings/) · [Опыт для уровня героя](hero-levels/) · [Типы шахт](mines/) · [Картинки специальностей героя](specialty-pictures/) · [Варианты объектов WoG](wog-object-variants/) · [Типы городов](towns/) · [Клетки поля боя](battlefield/) · [Картинки зданий по городам](building-pictures/) · [Анимации BM:V](combat-animations/) · [ID городских зданий](buildings/) · [Препятствия на поле боя](obstacles/) · [Таблица заклинаний](spells/) · [Накладные ландшафты BU:G](battle-terrain/) · [Цвета игроков](players/) · [Фоны битвы](battle-backgrounds/) · [Типы почвы](terrain/) · [Звуки игровых событий](sounds/) · [Благословения и проклятия героя](blessings/) · [Музыка: ID и имена MP3](music/) · [Ресурсы](resources/) · [Области кликов CM:I](dialog-items/) · [Таблица существ](creatures/) · [Картинки для IF:Q](dialog-pictures/) · [Способности от опыта существ](stack-experience-abilities/) · [Коды клавиш](../framework/constants/key-codes/) · [Битовые флаги существ](creature-flags/) · [Классы командиров](commanders/) · [DEF и звуки существ](creature-resources/)
