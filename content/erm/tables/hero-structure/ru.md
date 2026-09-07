---
{"title":"Поля структуры героя","summary":"Смещения HEX относительно указателя на структуру из старого снимка WoG. Это описание формата, не универсальные адреса для UN:C. Поля с неясным назначением не трактуются как API. Проверяйте размер и расположение структуры в своей сборке.","translationStatus":"reviewed"}
---

## Cтруктура героя {#ref-form-advhero}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Cтруктура героя на карте приключений</span></div>
<div class="erm-paragraph">   <span class="erm-anchor" id="ref-form-advhero-wt"></span><code class="erm-legacy-label">HEX-конвертер:</code> <span class="erm-anchor" id="ref-form-advhero-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Введите hex-значение нужного вам смещения.." title="Введите hex-значение нужного вам смещения..">
<span class="erm-anchor" id="ref-form-advhero-inputdec"></span><output class="erm-radix-result" aria-label="10-тичное значение указанного вами смещения" title="10-тичное значение указанного вами смещения"></output></div>
<span class="erm-anchor" id="ref-form-advhero-q1"></span><div class="erm-tone-quote erm-note">Все смещения указаны в hex-нотации.</div></div>

<div>
<pre>   // <span class="erm-anchor" id="ref-form-advhero-dred"></span><strong class="erm-tone-red">+00</strong> dw = X координата
   // <strong class="erm-tone-red">+02</strong> dw = Y координата
   // <strong class="erm-tone-red">+04</strong> dw = L уровень, старшая часть Y (Y&lt;&lt;2&gt;&gt;C)
   // <strong class="erm-tone-red">+06</strong> db = 1: есть на карте (вне фокуса или не активен)
<small>Byte  _u1[17];</small>
<small>Dword MapItemXYZ[4];</small>
   // <strong class="erm-tone-red">+07</strong> db = X
   // <strong class="erm-tone-red">+08</strong> db = (?) мусор (к X)
   // <strong class="erm-tone-red">+09</strong> db = Y
   // <strong class="erm-tone-red">+0A</strong> db = L(?) мусор (к Y)
   // <strong class="erm-tone-red">+0B</strong> db = ?
<small>Byte  _u1;</small>
   // <strong class="erm-tone-red">+0C</strong> dd - тип объекта, на котором герой стоит
<small>PlOType;</small> // dd +1E с карты
   // <strong class="erm-tone-red">+10</strong> db - бит занятости во флагах поверхности (0x0C)
<small>Pl0Cflag;</small> // этот бит означает, что здесь есть/была точка входа (жёлтая клетка)
   // <strong class="erm-tone-red">+14</strong> dd - Контрольное слово объекта, на котором герой стоит
<small>PlSetUp;</small> // dd +0 с карты
   // <strong class="erm-tone-red">+18</strong> dw = баллы заклинаний
   // <strong class="erm-tone-red">+1A</strong> dd = номер подтипа (конкретный герой)
<small>_unk_Id;</small> // <strong class="erm-tone-red">+1E</strong> dd = ??? Id
   // <strong class="erm-tone-red">+22</strong> db = хозяин (цвет игрока)
<small>char   Name[13];</small> // <strong class="erm-tone-red">+23</strong> db*D = имя героя
   // <strong class="erm-tone-red">+30</strong> dd = <span class="erm-anchor" id="ref-form-advhero-5"></span><details class="erm-comment"><summary>класс</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-form-advhero-t0"></span><blockquote class="erm-margin-top-zero erm-note">
str[8] str=(*[<em class="erm-tone-purple erm-legacy-event">67CD08</em>])[номер подтипа *5C]
// 00000001 - 0x00 Рыцарь 
// 00000002 - 0x01 Клирик 
// 00000004 - 0x02 Рейнджер 
// 00000008 - 0x03 Друид 
// 00000010 - 0x04 Алхимик 
// 00000020 - 0x05 Волшебник 
// 00000040 - 0x06 Демон 
// 00000080 - 0x07 Еретик 
// 00000100 - 0x08 Рыцарь смерти 
// 00000200 - 0x09 Некромант 
// 00000400 - 0x0A Лорд 
// 00000800 - 0x0B Чернокнижник 
// 00001000 - 0x0C Варвар 
// 00002000 - 0x0D Боевой маг 
// 00004000 - 0x0E Хозяин зверей 
// 00008000 - 0x0F Ведьма 
// 00010000 - 0x10 Путешественник 
// 00020000 - 0x11 Элементалист 
// 00040000 - 0x12 sprite лодки (только внешне, нельзя плавать)</blockquote></div></details>
   // <strong class="erm-tone-red">+34</strong> db = номер картинки портрета (0..156)
   // <strong class="erm-tone-red">+35</strong> db = намеченная коорд. X куда побежать
   // <strong class="erm-tone-red">+39</strong> db = намеченная коорд. Y куда побежать
   // <strong class="erm-tone-red">+3D</strong> db = уровень на карте, где намечен путь перемещения
<small>Byte  _u2[15];</small>
   // <strong class="erm-tone-red">+3E</strong> db - ??? <em class="erm-tone-purple erm-legacy-event">4E3BB5</em> - используется для подсчёта Удачи
   // <strong class="erm-tone-red">+44</strong> db = базовый X для патрулирования (FF = не ограничен)
   // <strong class="erm-tone-red">+45</strong> db = базовый Y для патрулирования (FF = не ограничен)
   // <strong class="erm-tone-red">+46</strong> db = радиус патрулирования (FF = не ограничен)
   // <strong class="erm-tone-red">+47</strong> db = ???
   // <strong class="erm-tone-red">+48</strong> 8*bb  (<em class="erm-tone-purple erm-legacy-event">463253</em>)<span class="erm-anchor" id="ref-form-advhero-4"></span><details class="erm-comment"><summary>флаги</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// 01 - тип группировки юнитов
// 02 - разрешена тактика для героя</blockquote></div></details>
   // <strong class="erm-tone-red">+49</strong> dd = полное перемещение начальное
   // <strong class="erm-tone-red">+4D</strong> dd = оставшиеся перемещения
   // <strong class="erm-tone-red">+51</strong> dd = опыт
   // <strong class="erm-tone-red">+55</strong> dw = уровень
<small>Visited[10];</small> //  (как <a href="../../receivers/he/#ref-rec-he-v">HE:V</a>)<span class="erm-anchor" id="ref-form-advhero-3"></span><details class="erm-comment"><summary>Флаги посещения объектов</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// * bitfields of 32 visited object types per hero
// <strong class="erm-tone-red">+57</strong> dd Камень знаний (1=посещён, 2=нет)
// <strong class="erm-tone-red">+5B</strong> dd Башня Марлетто
// <strong class="erm-tone-red">+5F</strong> dd Сад откровения
// <strong class="erm-tone-red">+63</strong> dd Лагерь наёмников
// <strong class="erm-tone-red">+67</strong> dd Звёздное колесо
// <strong class="erm-tone-red">+6B</strong> dd Древо знаний
// <strong class="erm-tone-red">+6F</strong> dd Библиотека просвещения
// <strong class="erm-tone-red">+73</strong> dd Арена
// <strong class="erm-tone-red">+77</strong> dd Школа магии
// <strong class="erm-tone-red">+7B</strong> dd Школа войны</blockquote></div></details>
<small>_u4[18];</small> // <strong class="erm-tone-red">+7F</strong> db
<small>int   Ct[7];</small> // <strong class="erm-tone-red">+91</strong> dd*7 = тип существ (-1 = нет)
<small>int   Cn[7];</small> // <strong class="erm-tone-red">+AD</strong> dd*7 = кол-во
<small>SSkill[28];</small> // <strong class="erm-tone-red">+C9</strong> db*1C = 
   //один байт = уровень этого навыка: 1,2,3; 0=нет<span class="erm-anchor" id="ref-form-advhero-1"></span><details class="erm-comment"><summary>уровень вторич.навыков</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// <strong class="erm-tone-red">+C9</strong> = Поиск пути
// <strong class="erm-tone-red">+CA</strong> = Стрельба
// <strong class="erm-tone-red">+CB</strong> = Логистика
// <strong class="erm-tone-red">+CC</strong> = Разведка
// <strong class="erm-tone-red">+CD</strong> = Дипломатия
// <strong class="erm-tone-red">+CE</strong> = Навигация
// <strong class="erm-tone-red">+CF</strong> = Лидерство
// <strong class="erm-tone-red">+D0</strong> = Мудрость
// <strong class="erm-tone-red">+D1</strong> = Мистицизм
// <strong class="erm-tone-red">+D2</strong> = Удача
// <strong class="erm-tone-red">+D3</strong> = Баллистика
// <strong class="erm-tone-red">+D4</strong> = Орлиный глаз
// <strong class="erm-tone-red">+D5</strong> = Некромантия
// <strong class="erm-tone-red">+D6</strong> = Имущество
// <strong class="erm-tone-red">+D7</strong> = Магия огня
// <strong class="erm-tone-red">+D8</strong> = Магия воздуха
// <strong class="erm-tone-red">+D9</strong> = Магия воды
// <strong class="erm-tone-red">+DA</strong> = Магия земли
// <strong class="erm-tone-red">+DB</strong> = Грамотность
// <strong class="erm-tone-red">+DC</strong> = Тактика
// <strong class="erm-tone-red">+DD</strong> = Артиллерия
// <strong class="erm-tone-red">+DE</strong> = Обучение
// <strong class="erm-tone-red">+DF</strong> = Нападение
// <strong class="erm-tone-red">+E0</strong> = Оборона
// <strong class="erm-tone-red">+E1</strong> = Интеллект
// <strong class="erm-tone-red">+E2</strong> = Волшебство
// <strong class="erm-tone-red">+E3</strong> = Сопротивление
// <strong class="erm-tone-red">+E4</strong> = Первая помощь</blockquote></div></details>
<small>SShow[28];</small> // <strong class="erm-tone-red">+E5</strong> db*1C = порядок отображения вторич.навыков в окне героя (1,2,3,4,5,6)
   // <strong class="erm-tone-red">+101</strong> dd = кол-во вторич.навыков
<small>RefData1;</small> // <strong class="erm-tone-red">+105</strong> db <em class="erm-tone-purple erm-legacy-event">4814D3</em> + …
<small>RefData2;</small> // <strong class="erm-tone-red">+107</strong> db <em class="erm-tone-purple erm-legacy-event">4DA466</em>
   // <strong class="erm-tone-red">+105</strong> dd  (<a href="../../receivers/he/#ref-rec-he-r7">HE:R7</a>)<span class="erm-anchor" id="ref-form-advhero-2"></span><details class="erm-comment"><summary>временные модификаторы морали</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
// нач. иниц. при найме 0xFFF9FFFF
// 00000001 - 0x00 Волшебный колодец
// 00000002 - 0x01 Конюшни
// 00000004 - 0x02 Буй
// 00000008 - 0x03 Лебединое озеро
// 00000010 - 0x04 Идол удачи (дни 1..6)
// 00000020 - 0x05 Фонтан удачи (-1 удача)
// 00000040 - 0x06 Водоворот
// 00000080 - 0x07 Оазис
// 00000100 - 0x08 Храм (дни 1..6)
// 00000200 - 0x09 Кораблекрушение
// 00000400 - 0x0A Склеп
// 00000800 - 0x0B Ветхий корабль
// 00001000 - 0x0C Пирамида
// 00002000 - 0x0D Домик фей
// 00004000 - 0x0E Фонтан молодости
// 00008000 - 0x0F Русалки
// 00010000 - 0x10 Флаг битвы
// 00020000 - 0x11 ?
// 00040000 - 0x12 В лодке (герой на воде)
// 00080000 - 0x13 ?
// 00100000 - 0x14 Сирены
// 00200000 - 0x15 Гробница воина
// 00400000 - 0x16 Максимум удачи (как <a href="../../receivers/he/#ref-rec-he-r6">HE:R6</a>)
// 00800000 - 0x17 Максимум морали (как <a href="../../receivers/he/#ref-rec-he-r5">HE:R5</a>)
// 01000000 - 0x18 WOGSHADOWFAX (чит-код на 1 млн. очков хода)
// 02000000 - 0x19 Идол удачи (день 7)
// 04000000 - 0x1A Храм (день 7)
// 08000000 - 0x1B Фонтан удачи (+1 удачи)
// 10000000 - 0x1C Фонтан удачи (+2 удачи)
// 20000000 - 0x1D Фонтан удачи (+3 удачи)
// 40000000 - 0x1E ?
// 80000000 - 0x1F ?</blockquote></div></details>
<small>Byte  _u6[9];</small> // <strong class="erm-tone-red">+109</strong>
   // <strong class="erm-tone-red">+10D</strong> db = сколько раз в этот день сколдовал Дверь измерений
   // <strong class="erm-tone-red">+10E</strong> dd = сила, с которой сколдована Маскировка (0..3), -1 = не активно
   // <strong class="erm-tone-red">+112</strong> dd = сила, с которой сколдован Полёт (0..3), -1 = не активно
   // <strong class="erm-tone-red">+116</strong> dd = сила, с которой сколдовано Хождение по воде (0..3), -1 = не активно
   // <strong class="erm-tone-red">+11A</strong> db - модиф.морали до след.битвы (оазис), накапливаются
   // <strong class="erm-tone-red">+11B</strong> db - модиф.удачи до след.битвы
   // <strong class="erm-tone-red">+11C</strong> db = 1, герой СПИТ
   // <strong class="erm-tone-red">+129</strong> dd = сила, с которой сколдовано Видение (0..3), -1 = не активно
<small>int   IArt[19][2];</small> // <strong class="erm-tone-red">+12D</strong> dd*2*13h = артефакты dd-номер, dd-номер закла (или -1) (книга 3,FF)
<small>FreeAddSlots;</small> // <strong class="erm-tone-red">+1C5</strong> db = количество пустых доп. слотов слева
<small>char  LockedSlot[14];</small> // <strong class="erm-tone-red">+1C6</strong>
<small>int   OArt[64][2];</small> // <strong class="erm-tone-red">+1D4</strong> dd*2*4 = арт в рюкзаке dd-номер, dd-номер закла(или -1)
<small>Byte    OANum;</small> // <strong class="erm-tone-red">+3D4</strong> db = число артефактов в рюкзаке
   // <strong class="erm-tone-red">+3D5</strong> dd = пол (как <a href="../../receivers/he/#ref-rec-he-r2">HE:R2</a>)
   // <strong class="erm-tone-red">+3D9</strong> db = есть настроенная биография
   // <strong class="erm-tone-red">+3DA</strong> dd → биография
<small>Byte  _u7[12];</small> // <strong class="erm-tone-red">+3DE</strong>
<small>Spell[70];</small> // <strong class="erm-tone-red">+3EA</strong> db*46 = заклинание (есть/нет)
<small>LSpell[70];</small> // <strong class="erm-tone-red">+430</strong> db*46 = уровень заклинания (&gt;=1)
<small>char   PSkill[4];</small>
   // <strong class="erm-tone-red">+476</strong> db = Атака
   // <strong class="erm-tone-red">+477</strong> db = Защита
   // <strong class="erm-tone-red">+478</strong> db = Сила магии
   // <strong class="erm-tone-red">+479</strong> db = Знания
<small>Byte  _u8[24];</small> // <strong class="erm-tone-red">+47A</strong> * AI stuff</pre>



</div></div>
</section>
:::

## Назначение {#meaning}

Смещения HEX относительно указателя на структуру из старого снимка WoG. Это описание формата, не универсальные адреса для UN:C. Поля с неясным назначением не трактуются как API. Проверяйте размер и расположение структуры в своей сборке.

## Значения {#values}

| HEX | Байты | Поле |
| --- | --- | --- |
| `00` {#offset-00} | 2 | Координата X |
| `02` {#offset-02} | 2 | Координата Y |
| `0C` {#offset-0c} | 4 | Тип объекта под героем |
| `14` {#offset-14} | 4 | Контрольное слово объекта |
| `18` {#offset-18} | 2 | Мана |
| `1A` {#offset-1a} | 4 | ID героя |
| `22` {#offset-22} | 1 | Владелец |
| `23` {#offset-23} | 13 | Имя героя |
| `30` {#offset-30} | 4 | Класс |
| `34` {#offset-34} | 1 | Портрет |
| `44` {#offset-44} | 1 | Начало патруля X |
| `45` {#offset-45} | 1 | Начало патруля Y |
| `46` {#offset-46} | 1 | Радиус патруля |
| `49` {#offset-49} | 4 | Начальные очки движения |
| `4D` {#offset-4d} | 4 | Оставшиеся очки движения |
| `51` {#offset-51} | 4 | Опыт |
| `55` {#offset-55} | 2 | Уровень |
| `57` {#offset-57} | 4 × 10 | Флаги посещения HE:V |
| `91` {#offset-91} | 4 × 7 | ID существ армии |
| `AD` {#offset-ad} | 4 × 7 | Количество существ армии |
| `C9` {#offset-c9} | 1 × 28 | Уровни вторичных навыков |
| `E5` {#offset-e5} | 1 × 28 | Порядок вторичных навыков |
| `101` {#offset-101} | 4 | Количество вторичных навыков |
| `105` {#offset-105} | 4 | Временные флаги HE:R7 |
| `10D` {#offset-10d} | 1 | Число Дверей измерений за день |
| `10E` {#offset-10e} | 4 | Маскировка, −1 неактивна |
| `112` {#offset-112} | 4 | Полёт, −1 неактивен |
| `116` {#offset-116} | 4 | Хождение по воде, −1 неактивно |
| `11A` {#offset-11a} | 1 | Временная мораль |
| `11B` {#offset-11b} | 1 | Временная удача |
| `11C` {#offset-11c} | 1 | Спящий герой |
| `129` {#offset-129} | 4 | Видения, −1 неактивны |
| `12D` {#offset-12d} | 8 × 19 | Экипированные артефакты: ID и заклинание |
| `1C5` {#offset-1c5} | 1 | Свободные дополнительные слоты |
| `1C6` {#offset-1c6} | 14 | Заблокированные слоты |
| `1D4` {#offset-1d4} | 8 × 64 | Рюкзак: ID артефакта и заклинание |
| `3D4` {#offset-3d4} | 1 | Количество артефактов в рюкзаке |
| `3D5` {#offset-3d5} | 4 | Пол героя |
| `3D9` {#offset-3d9} | 1 | Пользовательская биография |
| `3DA` {#offset-3da} | 4 | Указатель на биографию |
| `3EA` {#offset-3ea} | 1 × 70 | Наличие заклинаний |
| `430` {#offset-430} | 1 × 70 | Доступность заклинаний |
| `476` {#offset-476} | 1 × 4 | Атака, защита, сила магии, знания |

## Связанные команды и таблицы {#related}

[HE](../../receivers/he/) · [Все таблицы](../)

## Связанные команды и таблицы {#reference-links}

[Герои (HE)](../../receivers/he/#command-v-v) · [Герои (HE)](../../receivers/he/) · [Герои (HE)](../../receivers/he/#command-a) · [Герои (HE)](../../receivers/he/#command-b0-b1-b2-b3) · [Герои (HE)](../../receivers/he/#command-c-experience-modes) · [Герои (HE)](../../receivers/he/#command-c2-c-1-14-d) · [Герои (HE)](../../receivers/he/#command-e-2-1-f-1-2-3-4-1) · [Герои (HE)](../../receivers/he/#command-g-w-1-i-1) · [Герои (HE)](../../receivers/he/#command-h-1-2-3) · [Герои (HE)](../../receivers/he/#command-k-k1) · [Герои (HE)](../../receivers/he/#command-l1-file-l2-file-l0-l3-l4-l5-1-2) · [Герои (HE)](../../receivers/he/#command-m-m-1) · [Герои (HE)](../../receivers/he/#command-n-o-1-p-1-2-3-4) · [Герои (HE)](../../receivers/he/#command-r-refresh) · [Герои (HE)](../../receivers/he/#command-s-s-s-1-2-1) · [Герои (HE)](../../receivers/he/#command-t-1-2-3-4-5-u-1-2-3) · [Герои (HE)](../../receivers/he/#command-x-2-3-4-5-6-7) · [Герои (HE)](../../receivers/he/#command-y-1-2-3-4-z) · [Таблица объектов в игре](../objects/) · [Таблица героев](../heroes/) · [Посещение героя (HE)](../../triggers/he/) · [Таблица артефактов](../artifacts/) · [Герои (HE)](../../receivers/he/#command-a2-1-2-a3-a4) · [Слоты артефактов](../artifact-slots/) · [Переменные, строки и массивы](../../variables/) · [Классы героев](../hero-classes/) · [Типы городов](../towns/) · [Отладка и совместимость ERM](../../compatibility/) · [Таблица существ](../creatures/) · [Циклические вызовы (DO)](../../receivers/do/) · [Опыт для уровня героя](../hero-levels/) · [Таблица заклинаний](../spells/) · [Цвета игроков](../players/) · [Игроки (OW)](../../receivers/ow/#command-h-h) · [Параметры сражения (BA)](../../receivers/ba/#command-o-1-2) · [Посещения и биты героя](../hero-visits/) · [Вторичные навыки](../secondary-skills/) · [Общие игровые операции (UN)](../../receivers/un/#command-cbase-size-cbase-offset-size) · [Параметры заклинаний (SS)](../../receivers/ss/) · [Биты, маски и HEX](../bits/) · [Ресурсы](../resources/) · [Благословения и проклятия героя](../blessings/)
