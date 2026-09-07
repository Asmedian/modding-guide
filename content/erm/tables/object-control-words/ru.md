---
{"title":"Контрольные слова объектов","summary":"32-битное поле OB:C с разной упаковкой для разных типов объектов. Ниже приведены исследованные поля старого WoG; неизвестные биты сохраняйте. Ёмкость поля не означает допустимость всех его значений. Для собственных данных используйте PO.","translationStatus":"reviewed"}
---

## Исправленные ссылки исходника {#source-link-corrections}

В исходном описании скелета (тип 22) написано SC:N / SC:A / SC:S. Это опечатки: соответствующие команды принадлежат [ресиверу SK](../../receivers/sk/). Текст исходника сохранён, а назначения трёх ссылок исправлены. Ссылка с подписью MT:N в описании обелиска (тип 57) также исправлена: она ведёт к [MT:N](../../receivers/mt/#ref-rec-mt-n), а не к шахтам MN.

## Исследование контрольных слов объектов {#ref-cont-conwords}

:::erm
<section class="erm-reference" lang="ru">
<div>

<span class="erm-anchor" id="ref-cont-conwords-text"></span><div>
<span class="erm-anchor" id="ref-cont-conwords-up"></span>

<h3 class="erm-align-center">Исследование «контрольных слов» объектов карты.</h3>
<span class="erm-anchor" id="ref-cont-conwords-ri"></span><div class="erm-align-right erm-paragraph"><em>Миханик © 2008 г.</em></div>

<span class="erm-anchor" id="ref-cont-conwords-1"></span><h3>Что такое контрольное слово?</h3>

<div class="erm-paragraph">Контрольное слово – это 32-битовое число (-2147483648..2147483647) («слово» в ассемблере как раз означает такой объём памяти), 
являющееся одним из параметров каждой клетки поля и редактирующееся командой <a href="../../receivers/ob/#ref-rec-ob-c">OB:C</a>. В отличие от таких параметров, как тип почвы или проходимость, он, 
подобно <a href="../../receivers/po/#ref-rec-po">ресиверу PO</a>, задаёт не характеристики самой почвы, а характеристики стоящего на ней объекта (и поэтому-то для доступа к нему используется <a href="../../receivers/ob/#ref-rec-ob">!!OB</a>). 
Как известно, в Героях 3 существует более двухсот <a href="../objects/#ref-form-objects" data-context="true">типов объектов</a>, и только 62 из них имеют такие характеристики. Данное исследование ставит целью разобрать, 
какие параметры задаёт контрольное слово в каждом из этих 62-х случаев. В принципе, почти ничего нового здесь не содержится, т. к. некоторые ERM-команды, помимо <a href="../../receivers/ob/#ref-rec-ob-c">OB:C</a>, 
также редактируют контрольное слово. Чуть ниже это будет указано. Но немного нового всё же есть.</div>

<h4>Двоичное представление чисел в ассемблере</h4>

<div class="erm-paragraph">Прежде чем начать, нужно дать тем из читателей, кто не знаком с ассемблером, представление о двоичном формате чисел в нём. Кратко затрону эту тему чисто с практической стороны. 
(Я думаю, что уж двоичную систему счисления все знают.) В WoG'е используются преимущественно 32-битные числа, т. е. числа с длиной не больше 32 двоичных знаков. 
(В дальнейшем "бит" как раз будет обозначать двоичный знак. Как принято в ассемблере, биты нумеруются справа налево, начиная с 0.) Но дело в том, что последний бит используется для записи знака числа ("+" или "-"), 
и на само число реально отводится только 31 бит. Но это ещё не всё! Если 863 записывается как 1101011111, или 00000000000000000000001101011111, то -863 записывается не как 10000000000000000000001101011111, 
а как 11111111111111111111110010100001, что есть ни что иное, как число 000000000000000000001101011110 = 862, в котором единицы заменили нулями и наоборот. Так записываются все отрицательные числа, 
в частности -1 записывается как 32 единицы, поскольку противоположное ему число есть 0. Это позволяет уместить в 32 бита число -2147483648, которое в обычном двоичном формате записалось бы как -10000000000000000000000000000000, 
т. е. 32 цифры и знак "-", и в 32 бита бы не влезло. Кроме того (и это главное), такой формат значительно упрощает вычисления компьютеру. Но нам это неважно.</div>

<h4><span class="erm-anchor" id="ref-cont-conwords-logic"></span>Логические битовые операции в WoG</h4>

<div class="erm-paragraph">Также необходимо объяснить, как обращаться с двоичными числами. Для того, чтобы заменить, скажем, биты с 5 по 12 и не затронуть остальные (в дальнейшем это понадобится), пользуются логическими операциями. 
В WoG'е их три: <a href="../../receivers/vr/#ref-rec-vr-and">VR:&amp;amp</a>, <a href="../../receivers/vr/#ref-rec-vr-or">VR:|</a> (знак <strong>|</strong> здесь - не <em>i</em> прописное, а специальная вертикальная палочка, в английской раскладке - <span class="erm-key">Shift</span>+<span class="erm-key">\</span>) и <a href="../../receivers/vr/#ref-rec-vr-xor">VR:X</a>. Они, соответственно, у программистов называются AND, OR и XOR, а по научному – конъюнкция, дизъюнкция и исключающая дизъюнкция. 
Работают они так: берётся два числа (здесь - одно из переменной, другое как параметр, напр. <span class="erm-anchor" id="ref-cont-conwords-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>y12:S86 |12;</strong> - здесь исходными числами будут 86 и 12), потом берутся их первые биты, обрабатываются по определённому правилу, то, что получилось, записывается в первый бит результата. 
Аналогично происходит со вторыми битами, третьими и всеми остальными. (У нас результат опять записывается в переменную.) 
Правила эти таковы:</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-center">
<span class="erm-anchor" id="ref-cont-conwords-n2"></span><tr class="erm-tone-purple erm-align-center erm-strong" style="background-color:#60b0b0">	
	<td>AND</td><td>OR</td><td>XOR</td></tr>
<tr>
	<td>0 и 0 → 0</td><td>0 и 0 → 0</td><td>0 и 0 → 0</td></tr>
<tr>
	<td>0 и 1 → 0</td><td>0 и 1 → 1</td><td>0 и 1 → 1</td></tr>
<tr>
	<td>1 и 0 → 0</td><td>1 и 0 → 1</td><td>1 и 0 → 1</td></tr>
<tr>
	<td>1 и 1 → 1</td><td>1 и 1 → 1</td><td>1 и 1 → 0</td></tr>
</table></div>


<div class="erm-paragraph">Теперь - как использовать их в данном случае.<br>Покажем это всё на том же примере - записать в число y1 число y2 в биты с 5 по 12.
</div><ol>
<li> Сначала подготовим число y2.<br>
Поскольку под его запись отведено 8 битов, оно не должно быть длиннее их. На всякий случай "обрежем" его. Как это сделать? Применим команду:
<pre class="erm-example"><code class="language-erm">!!VRy2:&amp;255;</code></pre>
Что она делает? В двоичной записи число 255 выглядит как 00000000000000000000000011111111. Очевидно, что первые 8 битов числа y2 не изменятся - см. выше, 
а остальные превратятся в нули вне зависимости от первоначального значения. Но это нам и надо!</li>
<li> Теперь подготовим y1.<br>В нём нужно "расчистить место" для y2. Сделаем это аналогичным образом:
<pre class="erm-example"><code class="language-erm">!!VRy1:&amp;-4081; , 
где -4081 = 11111111111111111111000000001111 имеет нули как раз с 5 по 12 бит.</code></pre></li>
<li> Можно вставлять y2 в y1.<br>Для этого сначала переделаем y2 так, чтобы нужные нам биты располагались не с 1 по 8, а с 5 по 12, там же, где они и должны быть в y1. 
Это равнозначно приписыванию к y2 четырёх нулей, т. е. умножению его на 10000 = 16:
<pre class="erm-example"><code class="language-erm">!!VRy2:*16;</code></pre></li>
<li> И, наконец, объединяем y1 и y2.<br>Для этого обратим внимание, что в команде VR:<strong>|</strong> при соединении с нулём биты не изменяются.<br>
(В принципе VR:X обладает тем же свойством, но его не принято так использовать.)<br>
А у нас с 1 по 4 и с 13 по 32 биты в y2 нули, и нули же в y1 с 5 по 12 биты. Таким образом, после команды:
<pre class="erm-example"><code class="language-erm">!!VRy1:|y2;</code></pre>
… в y1 1..4 и 6..32 биты не изменятся, а 5..12 заместятся битами из y2. А это нам и надо.<br>
Получаем итоговый скрипт:
<pre class="erm-example"><code class="language-erm">!!VRy2:&amp;255;
!!VRy1:&amp;-4081;
!!VRy2:*16;
!!VRy1:|y2;
; или
!!VRy2:&amp;255 *16;
!!VRy1:&amp;-4081 |y2;</code></pre></li>
</ol>
<div class="erm-paragraph">Поставим более общую задачу: записать в y1 y2 в биты с №<code><strong>a</strong></code> по №<code><strong>b</strong></code>.<br>
Соответствующий скрипт выглядит так:
<pre class="erm-example"><code class="language-erm">!!VRy2:&amp;f *g;
!!VRy1:&amp;h |y2; ,</code></pre>
где <strong>f</strong> = 2<sup>(b-a+1)</sup>-1, <strong>g</strong>=2<sup>(a-1)</sup>, <strong>h</strong>=-f×g-1=2<sup>(a-1)</sup>-2<sup>b</sup>-1.<br>
Этим скриптом и пользуйтесь.</div>
<span class="erm-anchor" id="ref-cont-conwords-2"></span><h3>Структура контрольных слов разных типов объектов</h3>

<div> 
	<ul title="Быстрый переход к нужному объекту...">
	<li><a href="./#ref-cont-conwords">------------ выбор объекта ------------</a></li>
		<li><a href="./#ref-cont-conwords-t4">4. Арена</a></li>
		<li><a href="./#ref-cont-conwords-t5">5. Артефакт</a></li>
		<li><a href="./#ref-cont-conwords-t6">6. Ящик Пандоры</a></li>
		<li><a href="./#ref-cont-conwords-t12">12. Костёр покинутого лагеря</a></li>
		<li><a href="./#ref-cont-conwords-t14">14. Лебединое озеро</a></li>
		<li><a href="./#ref-cont-conwords-t16">16. Банк существ</a></li>
		<li><a href="./#ref-cont-conwords-t17">17-20. Генераторы существ</a></li>
		<li><a href="./#ref-cont-conwords-t22">22. Скелет</a></li>
		<li><a href="./#ref-cont-conwords-t23">23. Башня Марлетто</a></li>
		<li><a href="./#ref-cont-conwords-t24">24. Ветхий корабль</a></li>
		<li><a href="./#ref-cont-conwords-t25">25. Утопия драконов</a></li>
		<li><a href="./#ref-cont-conwords-t26">26. Событие</a></li>
		<li><a href="./#ref-cont-conwords-t29">29. Обломки</a></li>
		<li><a href="./#ref-cont-conwords-t30">30. Фонтан удачи</a></li>
		<li><a href="./#ref-cont-conwords-t32">32. Сад откровения</a></li>
		<li><a href="./#ref-cont-conwords-t33">33. Гарнизон</a></li>
		<li><a href="./#ref-cont-conwords-t34">34. Герой</a></li>
		<li><a href="./#ref-cont-conwords-t39">39. Погреб / Навес</a></li>
		<li><a href="./#ref-cont-conwords-t41">41. Библиотека Просвещения</a></li>
		<li><a href="./#ref-cont-conwords-t42">42. Маяк</a></li>
		<li><a href="./#ref-cont-conwords-t44">44. Монолит выхода</a></li>
		<li><a href="./#ref-cont-conwords-t45">45. Двусторонний монолит</a></li>
		<li><a href="./#ref-cont-conwords-t47">47. Школа магии</a></li>
		<li><a href="./#ref-cont-conwords-t48">48. Магический источник</a></li>
		<li><a href="./#ref-cont-conwords-t51">51. Лагерь наёмников</a></li>
		<li><a href="./#ref-cont-conwords-t53">53. Шахта</a></li>
		<li><a href="./#ref-cont-conwords-t54">54. Монстр</a></li>
		<li><a href="./#ref-cont-conwords-t55">55. Мистический сад</a></li>
		<li><a href="./#ref-cont-conwords-t57">57. Обелиск</a></li>
		<li><a href="./#ref-cont-conwords-t59">59. Океанская бутыль</a></li>
		<li><a href="./#ref-cont-conwords-t61">61. Звёздное колесо</a></li>
		<li><a href="./#ref-cont-conwords-t62">62. Тюрьма</a></li>
		<li><a href="./#ref-cont-conwords-t63">63. Пирамида</a></li>
		<li><a href="./#ref-cont-conwords-t78">78. Лагерь беженцев</a></li>
		<li><a href="./#ref-cont-conwords-t79">79. Ресурс</a></li>
		<li><a href="./#ref-cont-conwords-t81">81. Учёный</a></li>
		<li><a href="./#ref-cont-conwords-t82">82. Морской сундук</a></li>
		<li><a href="./#ref-cont-conwords-t83">83. Хижина провидца</a></li>
		<li><a href="./#ref-cont-conwords-t84">84. Склеп</a></li>
		<li><a href="./#ref-cont-conwords-t85">85. Кораблекрушение</a></li>
		<li><a href="./#ref-cont-conwords-t86">86. Потерпевший..</a></li>
		<li><a href="./#ref-cont-conwords-t87">87. Верфь</a></li>
		<li><a href="./#ref-cont-conwords-t88">88-90. Святыни магии</a></li>
		<li><a href="./#ref-cont-conwords-t91">91. Знак</a></li>
		<li><a href="./#ref-cont-conwords-t93">93. Свиток с заклинанием</a></li>
		<li><a href="./#ref-cont-conwords-t98">98. Город</a></li>
		<li><a href="./#ref-cont-conwords-t100">100. Камень знаний</a></li>
		<li><a href="./#ref-cont-conwords-t101">101. Сундук с сокровищами</a></li>
		<li><a href="./#ref-cont-conwords-t102">102. Древо знаний</a></li>
		<li><a href="./#ref-cont-conwords-t103">103. Врата подземного мира</a></li>
		<li><a href="./#ref-cont-conwords-t104">104. Университет</a></li>
		<li><a href="./#ref-cont-conwords-t105">105. Телега</a></li>
		<li><a href="./#ref-cont-conwords-t107">107. Школа войны</a></li>
		<li><a href="./#ref-cont-conwords-t108">108. Могила воина</a></li>
		<li><a href="./#ref-cont-conwords-t109">109. Водяное колесо</a></li>
		<li><a href="./#ref-cont-conwords-t112">112. Ветряная мельница</a></li>
		<li><a href="./#ref-cont-conwords-t113">113. Хижина ведьмы</a></li>
		<li><a href="./#ref-cont-conwords-t215">215. Страж прохода</a></li>
	<li>Дающие ресурсы..
		<li><a href="./#ref-cont-conwords-t12">12. Костёр покинутого лагеря</a></li>
		<li><a href="./#ref-cont-conwords-t29">29. Обломки</a></li>
		<li><a href="./#ref-cont-conwords-t39">39. Погреб / Навес</a></li>
		<li><a href="./#ref-cont-conwords-t53">53. Шахта</a></li>
		<li><a href="./#ref-cont-conwords-t55">55. Мистический сад</a></li>
		<li><a href="./#ref-cont-conwords-t79">79. Ресурс</a></li>
		<li><a href="./#ref-cont-conwords-t86">86. Потерпевший..</a></li>
		<li><a href="./#ref-cont-conwords-t101">101. Сундук с сокровищами*</a></li>
		<li><a href="./#ref-cont-conwords-t105">105. Телега</a></li>
		<li><a href="./#ref-cont-conwords-t109">109. Водяное колесо</a></li>
		<li><a href="./#ref-cont-conwords-t112">112. Ветряная мельница</a></li>
	</li>
	<li>С бонусами для героя..
		<li><a href="./#ref-cont-conwords-t4">4. Арена</a></li>
		<li><a href="./#ref-cont-conwords-t14">14. Лебединое озеро</a></li>
		<li><a href="./#ref-cont-conwords-t23">23. Башня Марлетто</a></li>
		<li><a href="./#ref-cont-conwords-t30">30. Фонтан удачи</a></li>
		<li><a href="./#ref-cont-conwords-t32">32. Сад откровения</a></li>
		<li><a href="./#ref-cont-conwords-t41">41. Библиотека Просвещения</a></li>
		<li><a href="./#ref-cont-conwords-t47">47. Школа магии</a></li>
		<li><a href="./#ref-cont-conwords-t51">51. Лагерь наёмников</a></li>
		<li><a href="./#ref-cont-conwords-t61">61. Звёздное колесо</a></li>
		<li><a href="./#ref-cont-conwords-t100">100. Камень знаний</a></li>
		<li><a href="./#ref-cont-conwords-t107">107. Школа войны</a></li>
		<li><a href="./#ref-cont-conwords-t30">30. Фонтан удачи</a></li>
		<li><a href="./#ref-cont-conwords-t48">48. Магический источник</a></li>
		<li><a href="./#ref-cont-conwords-t81">81. Учёный</a></li>
		<li><a href="./#ref-cont-conwords-t83">83. Хижина провидца</a></li>
		<li><a href="./#ref-cont-conwords-t88">88-90. Святыни магии</a></li>
		<li><a href="./#ref-cont-conwords-t101">101. Сундук с сокровищами</a></li>
		<li><a href="./#ref-cont-conwords-t102">102. Древо знаний</a></li>
		<li><a href="./#ref-cont-conwords-t104">104. Университет</a></li>
		<li><a href="./#ref-cont-conwords-t108">108. Могила воина</a></li>
		<li><a href="./#ref-cont-conwords-t113">113. Хижина ведьмы</a></li>
	</li>
	<li>Имеющие охрану..
		<li><a href="./#ref-cont-conwords-t6">6. Ящик Пандоры*</a></li>
		<li><a href="./#ref-cont-conwords-t16">16. Банк существ</a></li>
		<li><a href="./#ref-cont-conwords-t17">17-20. Генераторы существ*</a></li>
		<li><a href="./#ref-cont-conwords-t24">24. Ветхий корабль</a></li>
		<li><a href="./#ref-cont-conwords-t25">25. Утопия драконов</a></li>
		<li><a href="./#ref-cont-conwords-t84">84. Склеп</a></li>
		<li><a href="./#ref-cont-conwords-t85">85. Кораблекрушение</a></li>
	</li>
	<li>Морские объекты..
		<li><a href="./#ref-cont-conwords-t24">24. Ветхий корабль</a></li>
		<li><a href="./#ref-cont-conwords-t29">29. Обломки</a></li>
		<li><a href="./#ref-cont-conwords-t59">59. Океанская бутыль</a></li>
		<li><a href="./#ref-cont-conwords-t82">82. Морской сундук</a></li>
		<li><a href="./#ref-cont-conwords-t85">85. Кораблекрушение</a></li>
		<li><a href="./#ref-cont-conwords-t86">86. Потерпевший..</a></li>
	</li>		
		<li>Однотипные по контрол.слову..
		<li><a href="./#ref-cont-conwords-t4">4. Арена</a></li>
		<li><a href="./#ref-cont-conwords-t23">23. Башня Марлетто</a></li>
		<li><a href="./#ref-cont-conwords-t32">32. Сад откровения</a></li>
		<li><a href="./#ref-cont-conwords-t41">41. Библиотека Просвещения</a></li>
		<li><a href="./#ref-cont-conwords-t47">47. Школа магии</a></li>
		<li><a href="./#ref-cont-conwords-t51">51. Лагерь наёмников</a></li>
		<li><a href="./#ref-cont-conwords-t61">61. Звёздное колесо</a></li>
		<li><a href="./#ref-cont-conwords-t100">100. Камень знаний</a></li>
		<li><a href="./#ref-cont-conwords-t107">107. Школа войны</a></li>
	</li></ul>
</div>

<div class="erm-paragraph">Вот мы и подошли к основной части исследования. Здесь подробно разобраны все 62 типа объектов, содержащих контрольные слова. В случае необходимости указаны первоисточники или соответствующие команды ERM. 
Надо заметить, что кое-что я раскопал сам, и если эту информацию кто-то добыл независимо от меня, не обижайтесь. Итак…</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t4"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 4</a>. <strong>Арена</strong><br><img src="../../../../assets/erm/01259e6211a10e7f.png" alt="Тип 4. Арена Контрольное слово представляет собой номер от 0 до 31, занимающий первые 5 битов, остальные игнорируются и обычно пусты. Сама Арена параметров не и" loading="lazy" decoding="async" class="erm-figure">
Контрольное слово представляет собой номер от 0 до 31, занимающий первые 5 битов, остальные игнорируются и обычно пусты. 
Сама Арена параметров не имеет, но, как известно, каждый герой может посетить каждую Арену только раз в жизни, поэтому их необходимо различать. 
Посетил ли герой Арену или нет, редактируется командой <a href="../../receivers/he/#ref-rec-he-v">HE:V7</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t5"></span><a href="../artifacts/#ref-form-a1" data-context="true">Тип 5</a>. <strong>Артефакт</strong><br>
В контрольное слово записывается несколько параметров:<br>
<span class="erm-anchor" id="ref-cont-conwords-wt"></span><strong class="erm-legacy-label">Биты 0-14</strong>: соответствует команде <a href="../../receivers/ar/#ref-rec-ar-v">AR:V</a>: номер заклинания в свитке (0..32767) или (!) тип подбора артефакта (раскопал <span class="erm-anchor" id="ref-cont-conwords-n1"></span><code class="erm-tone-purple erm-strong">ShadowTheAge</code>):<br>
   0 – свободный подбор,<br>
   1 – за 2000 золотых,<br>
   2 – требуется мудрость,<br>
   3 – требуется лидерство,<br>
   4 – 2500 золотых и 3 дерева,<br>
   5 – 3000 золотых и 5 дерева,<br>
   6 – включается охрана (вне зависимости от значения <a href="../../receivers/ar/#ref-rec-ar-x">AR:X</a>), </div>
<span class="erm-anchor" id="ref-cont-conwords-6"></span><details class="erm-comment"><summary><strong>подробнее</strong> (<span class="erm-anchor" id="ref-cont-conwords-show6"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-cont-conwords-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>Дополнение</strong> от <strong class="erm-tone-purple erm-strong">XEPOMAHT</strong>'а: для этого типа подбора артефакта в контрольном слове кодируется флаг, номер монстров и их кол-во. 
<pre>Формат такой (по битам):
<strong class="erm-legacy-label">0..3</strong>: тип подбора (6)
<strong class="erm-legacy-label">4..11</strong>: номер монстра (0..255)
<strong class="erm-legacy-label">12..16</strong>: не используется
<strong class="erm-legacy-label">17..28</strong>: количество монстров (0..4096)
<strong class="erm-legacy-label">29..31</strong>: не используется</pre></blockquote></div></details>
<div class="erm-paragraph">   значения больше 6 – артефакт не поднимается.<br>
При отсутствии охраны пытается запуститься бой с нулём Церберов, который автоматически выигрывается (раскопал <code class="erm-tone-purple erm-strong">feanor</code>).
Где-то в справке к редактору карт SoD’а написано, что в начале игры выбирается 10-15% артефактов и им устанавливается определённая цена. Или что-то вроде этого.<br>
<strong class="erm-legacy-label">Биты 15-18</strong>: <span class="erm-anchor" id="ref-cont-conwords-dred"></span><del class="erm-tone-red"><span class="erm-tone-accent">по-видимому, ничего не значат. Обычно там стоит 0.</span></del></div>
<blockquote class="erm-tone-quote erm-note"><strong>Замечание</strong> от <strong class="erm-tone-purple erm-strong">XEPOMAHT</strong>'а: <strong class="erm-legacy-label">биты 15-18</strong> на самом деле содержат тип ресурса (для значений типа подбора артефакта равных 4 или 5), 
берущийся так же из Контрольного слова битовым сдвигом (по умолчанию там 0 → дерево).</blockquote>
<div class="erm-paragraph"><strong class="erm-legacy-label">Биты 19-30</strong>: персональный номер артефакта (0..4095). Каждому номеру соответствует своя отдельная область данных, где хранятся данные, 
доступ к которым обеспечивается командами <a href="../../receivers/ar/#ref-rec-ar">AR</a>:G M X.<br>
<strong class="erm-legacy-label">Бит 31</strong>: есть ли этот номер (1) или его нет (0). Номера может и не быть, если у артефакта нет ни охраны, ни сообщения. В таком случае команды <a href="../../receivers/ar/#ref-rec-ar">AR</a>:G M X не работают.<br>
31 бит определяет знак числа, поэтому есть простой признак: если контрольное слово отрицательное, то эти команды работают, нет – не работают. (Первым такой признак раскопал <code class="erm-tone-purple erm-strong">GrayFace</code>)</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/b9ee7384cccab247.png" alt="Тип 6. Ящик Пандоры Биты 0-9: персональный номер (0..1023). Опять же, соответствует области данных с командами LE:A B C E F G M N O P R S U X. Биты 10-31 игнори" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t6"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 6</a>. <strong>Ящик Пандоры</strong><br>
<strong class="erm-legacy-label">Биты 0-9</strong>: персональный номер (0..1023). Опять же, соответствует области данных с командами <a href="../../receivers/le/#ref-rec-le">LE</a>:A B C E F G M N O P R S U X.<br>
<strong class="erm-legacy-label">Биты 10-31</strong> игнорируются.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/aca11ff49be06851.png" alt="Тип 12. Костёр покинутого лагеря Биты 0-3:тип ресурса (0..15). Соответствует первому параметру команды FR:B. Интересно, что хотя ресурсы имеют номера с 0 по 7 (" loading="lazy" decoding="async" class="erm-figure">
<span class="erm-anchor" id="ref-cont-conwords-t12"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 12</a>. <strong>Костёр покинутого лагеря</strong><br>
<strong class="erm-legacy-label">Биты 0-3</strong>:тип ресурса (0..15). Соответствует первому параметру команды <a href="../../receivers/fr/#ref-rec-fr-b">FR:B</a>. Интересно, что хотя ресурсы имеют номера с 0 по 7 (3 бита), 4ый бит не игнорируется. 
Устанавливая значения с 8 по 15, мы можем получать в сообщении вместо картинки ресурса картинки артефактов, заклинаний, флагов, удачи и морали – нумерация, как в <a href="../dialog-pictures/#ref-form-picts" data-context="true">IF:Q</a>. 
Конечно же, на самом деле артефакты и прочее герою не добавляются, но их можно добавить с помощью ERM. Вторым параметром для картинок является кол-во ресурса.<br>
<strong class="erm-legacy-label">Биты 4-19</strong>:кол-во ресурса. Может быть отрицательным: от -32768 до +32767. Соответствует второму параметру <a href="../../receivers/fr/#ref-rec-fr-b">FR:B</a>.<br>
<strong class="erm-legacy-label">Биты 20-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t14"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 14</a>. <strong>Лебединое озеро</strong><br>
Нужно отметить о таком широко распространённом заблуждении, будто лебединое озеро имеет параметры. Почему-то <a href="../../#ref-cont-wogteam" data-context="true">WoG Team</a> создала ресивер, редактирующий его контрольное слово, 
с возможностью задания кол-ва удачи и персонального номера. На самом деле номера у озера нет, да и зачем он ему? А удача всегда +2. Ресивер всё равно пытается редактировать контрольное слово, но бесполезно. 
Вообще-то в нём (в слове) всегда стоит -1, но тем не менее приведём его состав, каким он предстаёт в воображении разработчиков ERM:<br>
<strong class="erm-legacy-label">Биты 0-4</strong> содержат номер пруда (0..31), что соответствует <a href="../../receivers/sw/#ref-rec-sw-n">SW:N</a>.<br><img src="../../../../assets/erm/574c9d95ad62389a.png" alt="Тип 14. Лебединое озеро Нужно отметить о таком широко распространённом заблуждении, будто лебединое озеро имеет параметры. Почему-то WoG Team создала ресивер, р" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 5-12</strong> игнорируются и обычно пусты. (То есть на самом-то деле они  по умолчанию заполнены, как и все, однако при изменении бонуса удачи они зачем-то обнуляются. 
Возможно, здесь должна была быть информация о посещении игроками.)<br>
<strong class="erm-legacy-label">Биты 13-16</strong> соответствуют бонусу удачи – то ли от 0 до 15, то ли от -8 до +7. (Хотя в справке указаны предельные значения от 1 до 3.)<br>
<strong class="erm-legacy-label">Биты 17-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t16"></span><a href="../creature-banks/#ref-form-cb" data-context="true">Тип 16</a>. <strong>Банк существ</strong><br>
<strong class="erm-legacy-label">Биты 0-4</strong> игнорируются и обычно заполнены.<br>
<strong class="erm-legacy-label">Биты 5-12</strong> содержат информацию о посещении игроками (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>), что соответствует <a href="../../receivers/cb/#ref-rec-cb-v">CB:V</a>. 
Если посещено, то в подсказке выводится охрана.<br>
<strong class="erm-legacy-label">Биты 13-24</strong> содержат персональный номер (от 0 до 4095), ссылающийся на <a href="../../receivers/cb/#ref-rec-cb">CB</a>:A G M R.<br>
<strong class="erm-legacy-label">Бит 25</strong> содержит, убиты ли стражи или ещё нет, и редактируется командой <a href="../../receivers/cb/#ref-rec-cb-t">CB:T</a>.<br>
<strong class="erm-legacy-label">Биты 26-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t17"></span><a href="../creature-dwellings/#ref-form-creaturedwellings" data-context="true">Типы 17-20</a>. <strong>Генератор существ</strong><br>
<strong class="erm-legacy-label">Биты 0-28</strong> содержат персональный номер (от 0 до 536870911) со всеми параметрами <a href="../../receivers/dw/#ref-rec-dw">DW</a>.<br>
<strong class="erm-legacy-label">Биты 29-30</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/efdf82bd945a6de8.png" alt="Тип 22. Скелет Биты 0-4: номер скелета (0..31) – SC:N. Бит 5 игнорируется и обычно заполнен. Биты 6-15: номер артефакта (0..1023) – SC:A. Бит 16: есть ли артефа" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t22"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 22</a>. <strong>Скелет</strong><br>
<strong class="erm-legacy-label">Биты 0-4</strong>: номер скелета (0..31) – <a href="../../receivers/sk/#ref-rec-sk-n" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:N</a>.<br>
<strong class="erm-legacy-label">Бит 5</strong> игнорируется и обычно заполнен.<br>
<strong class="erm-legacy-label">Биты 6-15</strong>: номер артефакта (0..1023) – <a href="../../receivers/sk/#ref-rec-sk-a" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:A</a>.<br>
<strong class="erm-legacy-label">Бит 16</strong>: есть ли артефакт – <a href="../../receivers/sk/#ref-rec-sk-s" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:S</a>.<br>
<strong class="erm-legacy-label">Биты 17-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0237688e6f8182a3.png" alt="Тип 23. Башня Марлетто Так же, как Арена, биты 0-4 – номер, остальные игнорируются и обычно пусты. У героя посещение башни Марлетто редактируется командой HE:V1" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t23"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 23</a>. <strong>Башня Марлетто</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>, <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты. У героя посещение башни Марлетто редактируется командой <a href="../../receivers/he/#ref-rec-he-v">HE:V1</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/54d228cc45ee2857.png" alt="Тип 24. Ветхий корабль Структура контрольного слова полностью идентична с типом 16. Интересно, что, хотя обычно, если посетить ветхий корабль и отказаться от би" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t24"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 24</a>. <strong>Ветхий корабль</strong><br>
Структура контрольного слова полностью идентична с <a href="./#ref-cont-conwords-t16">типом 16</a>. Интересно, что, хотя обычно, если посетить ветхий корабль и отказаться от битвы, после этого, в отличие от банка существ, 
в подсказке к кораблю информации об охране не появляется. А если установить <a href="../../receivers/cb/#ref-rec-cb-v">CB:V</a> на «посещено» для текущего игрока, эта информация появится.
</div><div><img src="../../../../assets/erm/0520ec5e013dcdf9.png" alt="avsutop0" loading="lazy" decoding="async" class="erm-figure"></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t25"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 25</a>. <strong>Утопия драконов</strong><br>
И опять полное совпадение с <a href="./#ref-cont-conwords-t16">типом 16</a>. Можно не описывать.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t26"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 26</a>. <strong>Событие</strong><br>
Событие и Ящик Пандоры описываются одним ресивером, а Ящик Пандоры я уже описывал. Можно было бы сослаться на него, но у события есть несколько дополнительных параметров, причём все они в контрольном слове.<br>
<strong class="erm-legacy-label">Биты 0-9</strong>: персональный номер (0..1023). Как и у ящика Пандоры. Соответствует командам <a href="../../receivers/le/#ref-rec-le">LE</a>:A B C E F G M N O P R S U X.<br>
<strong class="erm-legacy-label">Биты 10-17</strong> содержат информацию о том, каким игрокам НЕЛЬЗЯ активировать событие (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>) Соответствует <a href="../../receivers/le/#ref-rec-le-d">LE:D</a>.<br>
<strong class="erm-legacy-label">Бит 18</strong>: разрешать ли ИИ активировать событие. Соответствует <a href="../../receivers/le/#ref-rec-le-i">LE:I</a>.<br>
<strong class="erm-legacy-label">Бит 19</strong>: отменять ли событие после первого посещения. Соответствует <a href="../../receivers/le/#ref-rec-le-l">LE:L</a>.<br>
<strong class="erm-legacy-label">Биты 20-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t29"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 29</a>. <strong>Обломки</strong><br>
Для этого объекта ресивер пока не придумали.<br><img src="../../../../assets/erm/124dcfa10c2ee6f5.png" alt="Тип 29. Обломки Для этого объекта ресивер пока не придумали. Контрольное слово Обломков может принимать следующие значения: 0 – ничего нет, выдаётся сообщение, " loading="lazy" decoding="async" class="erm-figure">
Контрольное слово Обломков может принимать следующие значения:<br>
0 – ничего нет, выдаётся сообщение, что ничего не найдено.<br>
1 – 5 дерева.<br>
2 – 5 дерева и 200 золота.<br>
3 – 10 дерева и 500 золота.<br>
Другие значения в игре не встречаются, а если установить число, большее 3 (или меньшее 0), то обломки будут исчезать без всякого сообщения или прибавления ресурсов. Это можно использовать в ERM, если нужно, 
чтобы объект плавно исчез при подборе: берём обломки, делаем им в редакторе (пропатченом) другой DEF, ставим им скриптом контрольное слово больше 3, например, 4, делаем им другую подсказку, 
и в триггере на их посещение делаем нужное нам сообщение или действие. Ничего особенно сложного. (Здесь надо заметить, что такое же поведение можно настроить сундукам командой <a href="../../receivers/un/#ref-rec-un-b">UN:B</a>. 
Но, сравните алгоритмы:<br>
</div><ul>	<li>[изменяем UN:B]→[меняем тип]→[герой посещает]→[восстанавливаем UN:B];</li>
	<li>[меняем тип и контрольное слово (один ресивер)]→[герой посещает].</li></ul>
Второй явно короче.

<div class="erm-paragraph"><img src="../../../../assets/erm/21fc97d921457a6c.png" alt="Тип 30. Фонтан удачи Опять же для этого типа нет ресивера. Поскольку мне не приходилось встречать ничего на эту тему, я сам разобрал контрольное слово этого тип" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t30"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 30</a>. <strong>Фонтан удачи</strong><br>
Опять же для этого типа нет ресивера. Поскольку мне не приходилось встречать ничего на эту тему, я сам разобрал контрольное слово этого типа, и вот что у меня вышло:<br>
<strong class="erm-legacy-label">Биты 0-4</strong> игнорируются и обычно заполнены.<br>
<strong class="erm-legacy-label">Биты 5-12</strong> содержат информацию о посещении игроками (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>). Если игрок посетил фонтан, в подсказке выводится, что он делает.<br>
<strong class="erm-legacy-label">Биты 13-16</strong>: кол-во удачи – от -8 до +7.<br>
<strong class="erm-legacy-label">Биты 17-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/303edd7845dc3bde.png" alt="Тип 32. Сад откровения Так же, как Арена: биты 0-4 – номер, остальные игнорируются и обычно пусты. Посетил ли герой Сад откровения, определяет команда HE:V2." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t32"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 32</a>. <strong>Сад откровения</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты. Посетил ли герой Сад откровения, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V2</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/f29b7b602dd54547.png" alt="Тип 33. Гарнизон Биты 0-25: персональный номер (0..67108863). Ему соответствуют все команды GR. Биты 26-30 игнорируются и обычно пусты." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t33"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 33</a>. <strong>Гарнизон</strong><br>
<strong class="erm-legacy-label">Биты 0-25</strong>: персональный номер (0..67108863). Ему соответствуют все команды <a href="../../receivers/gr/#ref-rec-gr">GR</a>.<br>
<strong class="erm-legacy-label">Биты 26-30</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/1f995c6e7ad10ca4.png" alt="Тип 34. Герой Контрольное слово содержит номер героя. Учитываются все биты. К сожалению, сменить героя сменой номера нельзя. Поставив произвольной жёлтой клетке" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t34"></span><a href="../heroes/#ref-form-numberheroes" data-context="true">Тип 34</a>. <strong>Герой</strong><br>
Контрольное слово содержит номер героя. Учитываются <strong class="erm-legacy-label">все биты</strong>.<br>
К сожалению, сменить героя сменой номера нельзя. Поставив произвольной жёлтой клетке тип 34 и контрольное слово некоего героя, мы создадим клон героя, которым невозможно управлять, 
а если этой клеткой будет другой герой, клон исчезнет при его выделении.<br>
Зато мы можем обмениваться с ним армиями, даже если настоящий герой на другом конце карты.<br>
Можно также "вызвать" вражеского или ненанятого героя и сразиться с ним. Причём клоны после поражения исчезают только визуально, но с ними можно сразиться ещё раз (хотя они будут нейтральными, 
и у них будет типичная армия убитого героя – 1 существо 1го уровня). А "оригинальный" вражеский герой, где бы он ни был, также визуально исчезнет (это происходит оттого, что в игре нет графики для нейтральных героев), 
но с ним можно будет сражаться. Правда, в отличие от клона, всего один раз.<br>
Создавая клоны своих героев, мы можем добиться их раздвоения: так, если создать клон героя, сидящего в гарнизоне, и выделить его мышкой (иконка "шлем"), то герой появится у входа в замок, 
т.е. в гостевом слоте, оставаясь в то же время в гарнизоне. Вообще, игра мало предназначена для такого рода экспериментов.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/8c6ffb85b7b308ad.png" alt="Тип 39. Чей-то погреб / Навес Биты 0-4: персональный номер (0-31). Соответствует LN:N. Бит 5 игнорируется и обычно заполнен. Биты 6-9: кол-во ресурса(0-15). Есл" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t39"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 39</a>. <strong><strong>Чей-то погреб</strong> / Навес</strong><br>
<strong class="erm-legacy-label">Биты 0-4</strong>: персональный номер (0-31). Соответствует <a href="../../receivers/ln/#ref-rec-ln-n">LN:N</a>.<br>
<strong class="erm-legacy-label">Бит 5</strong> игнорируется и обычно заполнен.<br>
<strong class="erm-legacy-label">Биты 6-9</strong>: кол-во ресурса(0-15). Если 0, погреб считается посещённым. Соответствует второму параметру <a href="../../receivers/ln/#ref-rec-ln-b">LN:B</a>.<br>
<strong class="erm-legacy-label">Биты 10-13</strong>: тип ресурса (0-15). Соответствует первому параметру <a href="../../receivers/ln/#ref-rec-ln-b">LN:B</a>. О некорректных типах см. <a href="./#ref-cont-conwords-t12">Костёр покинутого лагеря</a>.<br>
<strong class="erm-legacy-label">Биты 14-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/424fc777f39ad48d.png" alt="Тип 41. Библиотека Просвещения Так же, как Арена: биты 0-4 – номер, остальные игнорируются и обычно пусты. Посетил ли герой Библиотеку, определяет команда HE:V6" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t41"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 41</a>. <strong>Библиотека Просвещения</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты. Посетил ли герой Библиотеку, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V6</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/95da127f363ccd46.png" alt="Тип 42. Маяк Биты 0-25: персональный номер (0..67108863). Номер ссылается на ту же область данных, что и у Шахты, и Маяк редактируется командами MN. Тип ресурса" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t42"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 42</a>. <strong>Маяк</strong><br>
<strong class="erm-legacy-label">Биты 0-25</strong>: персональный номер (0..67108863). Номер ссылается на ту же область данных, что и у Шахты, и Маяк редактируется командами <a href="../../receivers/mn/#ref-rec-mn">MN</a>. 
Тип ресурса для него - 100, однако если поставить что-либо другое, хранитель Маяка начнёт это "что-либо" усердно добывать. Охрана игнорируется. (За эту информацию спасибо <code class="erm-tone-purple erm-strong">sergroj</code>`у.)<br>
<strong class="erm-legacy-label">Биты 26-31</strong> игнорируются (как и охрана).</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/8998e813e1280f6d.png" alt="Тип 44. Монолит выхода Контрольное слово представляет собой номер монолита. Каждый подтип нумеруется отдельно. Неизвестно, на что он влияет, поэтому трудно опре" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t44"></span><a href="../one-way-monoliths/#ref-form-one-way-monolith" data-context="true">Тип 44</a>. <strong>Монолит выхода</strong><br>
Контрольное слово представляет собой номер монолита. Каждый подтип нумеруется отдельно. Неизвестно, на что он влияет, поэтому трудно определить, сколько битов используется. 
Единственное, что ясно – это то, что, если поставить -1, монолит перестаёт работать. При всех остальных значениях он работает. Это заставляет предположить, что читаются все биты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/f30796cf63b01291.gif" alt="Тип 45. Двусторонний монолит Опять же, контрольное слово – персональный номер с отдельной нумерацией подтипов. Учитываются все биты. Назначение номера в игре в " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t45"></span><a href="../two-way-monoliths/#ref-form-two-way-monolith" data-context="true">Тип 45</a>. <strong>Двусторонний монолит</strong><br>
Опять же, контрольное слово – персональный номер с отдельной нумерацией подтипов. Учитываются <strong class="erm-legacy-label">все биты</strong>. Назначение номера в игре в том, чтобы монолит не телепортировал сам в себя. 
Таким образом, если поставить двум монолитам одинаковый номер, они не будут друг в друга телепортировать.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/84b3c6f9903ac7b7.png" alt="Тип 47. Школа магии Так же, как Арена: биты 0-4 – номер, остальные игнорируются и обычно пусты. Посетил ли герой Школу магии, определяет команда HE:V8." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t47"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 47</a>. <strong>Школа магии</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты.<br>
Посетил ли герой Школу магии, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V8</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t48"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 48</a>. <strong>Магический источник</strong><br><img src="../../../../assets/erm/a5df2be0a0679eea.png" alt="Тип 48. Магический источник Биты 0-4: номер источника (0..31) – SP:N. Зачем он нужен – непонятно. Бит 5 игнорируется и обычно заполнен. Бит 6: посещён (1) или н" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-4</strong>: номер источника (0..31) – <a href="../../receivers/sp/#ref-rec-sp-n">SP:N</a>. Зачем он нужен – непонятно.<br>
<strong class="erm-legacy-label">Бит 5</strong> игнорируется и обычно заполнен.<br>
<strong class="erm-legacy-label">Бит 6</strong>: посещён (1) или нет (0) – <a href="../../receivers/sp/#ref-rec-sp-s">SP:S</a>.<br>
<strong class="erm-legacy-label">Биты 7-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c866a86ce59e1abf.png" alt="Тип 51. Лагерь наёмников Так же, как Арена: биты 0-4 – номер, остальные игнорируются и обычно пусты. Посетил ли герой Лагерь, определяет команда HE:V3." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t51"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 51</a>. <strong>Лагерь наёмников</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты. Посетил ли герой Лагерь, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V3</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/ab197513f5a6c9a4.png" alt="Тип 53. Шахта Биты 0-25: персональный номер (0..67108863) со всеми командами MN. Обращу внимание, что Шахты нумеруются параллельно с Маяками, как один тип. Биты" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t53"></span><a href="../mines/#ref-form-mines" data-context="true">Тип 53</a>. <strong>Шахта</strong><br>
<strong class="erm-legacy-label">Биты 0-25</strong>: персональный номер (0..67108863) со всеми командами <a href="../../receivers/mn/#ref-rec-mn">MN</a>. Обращу внимание, что Шахты нумеруются параллельно с <a href="./#ref-cont-conwords-t42">Маяками</a>, как один тип.<br>
<strong class="erm-legacy-label">Биты 26-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t54"></span><a href="../creatures/#ref-form-creature" data-context="true">Тип 54</a>. <strong>Монстр</strong><br>
<strong class="erm-legacy-label">Биты 0-11</strong>: кол-во монстров (0..4095) – <a href="../../receivers/mo/#ref-rec-mo-g">MO:G</a>. 
Интересно, что, если поставить значение 4095, при щелчке <span class="erm-anchor" id="ref-cont-conwords-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> появляется предложение убрать этот отряд с карты, т. к. он чересчур велик.<br>
<strong class="erm-legacy-label">Биты 12-15</strong>: вероятность неприсоединения монстра в десятках % (0..10) – <a href="../../receivers/mo/#ref-rec-mo-r">MO:R</a> с 2 параметрами; если больше 10 – то же, что и 10.<br>
<strong class="erm-legacy-label">Бит 16</strong>: присоединится ли монстр – <a href="../../receivers/mo/#ref-rec-mo-r">MO:R</a> с 1 параметром (причём перевёрнутое); если пуст, действует присоединение с вероятностью (предыдущий пункт).<br>
<strong class="erm-legacy-label">Бит 17</strong>: если заполнен, монстр никогда не убегает – <a href="../../receivers/mo/#ref-rec-mo-u">MO:U</a>.<br>
<strong class="erm-legacy-label">Бит 18</strong>: кол-во монстров не увеличивается – <a href="../../receivers/mo/#ref-rec-mo-o">MO:O</a>.<br>
<strong class="erm-legacy-label">Биты 19-26</strong>: персональный номер (0..255) с командами <a href="../../receivers/mo/#ref-rec-mo">MO</a>:A B M.<br>
<strong class="erm-legacy-label">Биты 27-30</strong> игнорируются и обычно пусты.<br>
<strong class="erm-legacy-label">Бит 31</strong>: есть ли номер. Аналогично с артефактом, если нет ни артефакта, ни ресурса, ни сообщения, номер не устанавливается. Тогда <a href="../../receivers/mo/#ref-rec-mo">MO</a>:A B M не работают. 
Это также упомянуто в описании <a href="../../receivers/mo/#ref-rec-mo">ресивера MO</a>, и проверка на отрицательность здесь также уместна.<br>
Тип монстра задаётся в подтипе объекта.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t55"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 55</a>. <strong>Мистический сад</strong><br><img src="../../../../assets/erm/237e5338f415d321.png" alt="Тип 55. Мистический сад Биты 0-4: персональный номер (0..31) – GD:N. Бит 5 игнорируется и обычно заполнен. Биты 6-9: тип бонусного ресурса (0..15) – GD:B. Если " loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-4</strong>: персональный номер (0..31) – <a href="../../receivers/gd/#ref-rec-gd-n">GD:N</a>.<br>
<strong class="erm-legacy-label">Бит 5</strong> игнорируется и обычно заполнен.<br>
<strong class="erm-legacy-label">Биты 6-9</strong>: тип бонусного ресурса (0..15) – <a href="../../receivers/gd/#ref-rec-gd-b">GD:B</a>. Если поставить 8..15, игра вылетает.<br>
<strong class="erm-legacy-label">Бит 10</strong>: есть ли бонус – <a href="../../receivers/gd/#ref-rec-gd-t">GD:T</a>.<br>
<strong class="erm-legacy-label">Биты 11-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/3e217521e012f28c.png" alt="Тип 57. Обелиск Контрольное слово являет собой персональный номер от 0 до 47, что соответствует MT:N. Если указать число, большее 47, программа залезает в не пр" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t57"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 57</a>. <strong>Обелиск</strong><br>
Контрольное слово являет собой персональный номер от 0 до 47, что соответствует <a href="../../receivers/mt/#ref-rec-mt-n" title="The label MT:N refers to the Obelisk receiver MT, not MN.">MT:N</a>. Если указать число, большее 47, программа залезает в не предназначенную для Обелисков память, 
поэтому обелиск может оказаться посещённым, а если и нет, то при посещении Обелиска карта загадки всё равно не меняется. Кроме того, если указать очень большое значение – порядка десятков миллионов и больше 
(предельное значение каждый раз разное) – игра вылетает. Какие Обелиски посетил тот или иной игрок, контролирует <a href="../../receivers/un/#ref-rec-un-l1">UN:L</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t59"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 59</a>. <strong>Океанская бутыль</strong><br><img src="../../../../assets/erm/3baab00b6520165a.png" alt="Тип 59. Океанская бутыль Биты 0-29: персональный номер (0..1073741823) с командой SG:M. Нужно заметить, что, если текст не введён или стёрт (SG:M-1), то в качес" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-29</strong>: персональный номер (0..1073741823) с командой <a href="../../receivers/sg/#ref-rec-sg-m">SG:M</a>. Нужно заметить, что, если текст не введён или стёрт (<a href="../../receivers/sg/#ref-rec-sg-m">SG:M-1</a>), 
то в качестве сообщения берётся случайное из RANDSIGN.TXT, находящегося в h3bitmap.lod. При этом текст генерируется непосредственно перед посещением на основе координат Бутыли, и, 
если поставить двум бутылкам одинаковый номер, соответствующий случайному тексту, то текст при посещении почти наверняка будет разный.<br>
<strong class="erm-legacy-label">Биты 30-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c0c80ba766f81f82.png" alt="Тип 61. Звёздное колесо Так же, как Арена: биты 0-4 – номер, остальные игнорируются и обычно пусты. Посетил ли герой Колесо, определяет команда HE:V4." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t61"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 61</a>. <strong>Звёздное колесо</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты. Посетил ли герой Колесо, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V4</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t62"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 62</a>. <strong>Тюрьма</strong><br><img src="../../../../assets/erm/2e601a21168a053f.png" alt="Тип 62. Тюрьма Контрольное слово представляет собой номер заключённого героя. При этом можно ставить только номера заключённых в других тюрьмах героев: если пос" loading="lazy" decoding="async" class="erm-figure">
Контрольное слово представляет собой номер заключённого героя. При этом можно ставить только номера заключённых в других тюрьмах героев: если поставить номер свободного или ненанятого героя, 
то выводится сообщение, что здесь когда-то сидел герой, но потом король его освободил. (По-видимому,  где-то в параметрах героя есть байт, определяющий, сидит он или на свободе.) 
То же выводится при небольших некорректных номерах. При очень больших номерах (порядка десятков миллионов и больше) игра вылетает.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/cd0e8c46f4866578.png" alt="Тип 63. Пирамида Бит 0: есть ли стражи – PM:V. Биты 1-4 игнорируются и обычно заполнены. Биты 5-12: какими игроками посещено (побитно) – PM:P. Биты 13-20: номер" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t63"></span><a href="../wog-object-variants/#ref-form-newobj" data-context="true">Тип 63</a>. <strong>Пирамида</strong><br>
<strong class="erm-legacy-label">Бит 0</strong>: есть ли стражи – <a href="../../receivers/pm/#ref-rec-pm-v">PM:V</a>.<br>
<strong class="erm-legacy-label">Биты 1-4</strong> игнорируются и обычно заполнены.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: какими игроками посещено (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>) – <a href="../../receivers/pm/#ref-rec-pm-p">PM:P</a>.<br>
<strong class="erm-legacy-label">Биты 13-20</strong>: номер заклинания (0..255) – <a href="../../receivers/pm/#ref-rec-pm-s">PM:S</a>.<br>
<strong class="erm-legacy-label">Биты 21-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c7dd34f429e9cda7.png" alt="Тип 78. Лагерь беженцев Биты 0-15: число монстров (-32768..32767). Биты 16-31 игнорируются и обычно пусты. Тип монстров задаётся в подтипе лагеря." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t78"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 78</a>. <strong>Лагерь беженцев</strong><br>
<strong class="erm-legacy-label">Биты 0-15</strong>: число монстров (-32768..32767).<br>
<strong class="erm-legacy-label">Биты 16-31</strong> игнорируются и обычно пусты.<br>
Тип монстров задаётся в подтипе лагеря.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t79"></span><a href="../resources/#ref-form-resource" data-context="true">Тип 79</a>. <strong>Ресурс</strong><br>
Контрольное слово устроено точно так же, как и у <a href="./#ref-cont-conwords-t5">артефакта</a>, только <strong class="erm-legacy-label">биты 0-14</strong>, соответствующие <a href="../../receivers/ar/#ref-rec-ar-v">AR:V</a>, содержат кол-во ресурса.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/b0494277d24d37a2.png" alt="Тип 81. Учёный Биты 0-2: тип бонуса (0..7) – SC:T: 0 – первичный навык; 1 – вторичный навык; 2 – заклинание; 3..7 – Учёный ничего не даёт и плавно исчезает без " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t81"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 81</a>. <strong>Учёный</strong><br>
<strong class="erm-legacy-label">Биты 0-2</strong>: тип бонуса (0..7) – <a href="../../receivers/sc/#ref-rec-sc-t">SC:T</a>:<br>
0 – первичный навык; 1 – вторичный навык; 2 – заклинание;<br>
3..7 – Учёный ничего не даёт и плавно исчезает без сообщения. Это можно использовать так же, как и аналогичное свойство <a href="./#ref-cont-conwords-t29">Обломков</a>.<br>
<strong class="erm-legacy-label">Биты 3-5</strong>: тип первичного навыка (0..7) – <a href="../../receivers/sc/#ref-rec-sc-p">SC:P</a>. Если поставить от 4 до 7, первичные навыки не меняются, а Учёный, судя по картинкам, 
обучает вас строить Гильдии Магов 2 уровня в Темнице, Цитадели, Крепости и Сопряжении, соответственно.<br>
<strong class="erm-legacy-label">Биты 6-12</strong>: номер вторичного навыка (0..127) – <a href="../../receivers/sk/#ref-rec-sk-s" title="Original Skeleton links say SC; the Skeleton receiver is SK.">SC:S</a>. Если поставить некорректное заклинание и установить <a href="../../receivers/sc/#ref-rec-sc-t">SC:T1</a>, игра при посещении вылетает.<br>
<strong class="erm-legacy-label">Биты 13-22</strong>: номер заклинания (0..1023) – <a href="../../receivers/sc/#ref-rec-sc-l">SC:L</a>. Если поставить некорректное, уже изученное или неизучаемое данным героем заклинание – будет изучаться первичный навык.<br>
<strong class="erm-legacy-label">Бит 23</strong> игнорируется и обычно пуст.<br>
<strong class="erm-legacy-label">Биты 24-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t82"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 82</a>. <strong>Морской сундук</strong><br><img src="../../../../assets/erm/aa6b54cb2fcfe77e.png" alt="Тип 82. Морской сундук Для этого типа ресивера нет, но бдительные форумчане, носящие гордые имена Demiurg, DracoLich и Чёртос-2 (или кто-то один из них; или дво" loading="lazy" decoding="async" class="erm-figure">
Для этого типа ресивера нет, но бдительные форумчане, носящие гордые имена <code class="erm-tone-purple erm-strong">Demiurg</code>, <code class="erm-tone-purple erm-strong">DracoLich</code> и <code class="erm-tone-purple erm-strong">Чёртос-2</code> 
(или кто-то один из них; или двое; все трое писали про это посты, но никто не претендовал на авторство), расшифровали-таки значение его контрольного слова. Привожу здесь их открытие. Естественно, своими словами.<br>
<strong class="erm-legacy-label">Биты 0-2</strong>: тип подбора сундука (0..7): 0 – пусто, 1 – 1500 золота, 2 – 1000 золота и артефакт. Если установлено значение от 3 до 7, то сундук плавно исчезает безо всякого сообщения, 
и этому можно найти применение – см. <a href="./#ref-cont-conwords-t29">Обломки</a>.<br>
<strong class="erm-legacy-label">Биты 3-12</strong>: номер артефакта (0..1023). Если поставить некорректное значение и установить тип подбора 2, то при подборе игра вылетает. Если поставлен тип подбора 0 или 1, здесь по умолчанию стоит -1, т. е. 1023.<br>
<strong class="erm-legacy-label">Биты 13-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/860eb101052c1faa.png" alt="Тип 83. Хижина провидца Контрольное слово представляет собой персональный номер, ссылающийся на недоступную нам область данных, где и находятся все параметры хи" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t83"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 83</a>. <strong>Хижина провидца</strong><br>
Контрольное слово представляет собой персональный номер, ссылающийся на недоступную нам область данных, где и находятся все параметры хижины.<br>
Учитываются <strong class="erm-legacy-label">все биты</strong>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/e8726705b0987cf0.png" alt="Тип 84. Склеп Структура контрольного слова полностью идентична типу 16. Здесь уместно то же замечание, что и для Ветхого корабля." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t84"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 84</a>. <strong>Склеп</strong><br>
Структура контрольного слова полностью идентична <a href="./#ref-cont-conwords-t16">типу 16</a>.<br>
Здесь уместно то же замечание, что и для <a href="./#ref-cont-conwords-t24">Ветхого корабля</a>.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t85"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 85</a>. <strong>Кораблекрушение</strong><br>
То же, что <a href="./#ref-cont-conwords-t24">Ветхий корабль</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0556e4d87f5a5d03.png" alt="Тип 86. Потерпевший кораблекрушение Опять же, здесь меня опередил Demiurg. Тем не менее запишем: Биты 0-29: номер артефакта (0..1073741823). Если поставить очен" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t86"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 86</a>. <strong>Потерпевший кораблекрушение</strong><br>
Опять же, здесь меня опередил <code class="erm-tone-purple erm-strong">Demiurg</code>. Тем не менее запишем:<br>
<strong class="erm-legacy-label">Биты 0-29</strong>: номер артефакта (0..1073741823). Если поставить очень большие некорректные значения, вроде [2<sup>28</sup>+<a href="../artifacts/#ref-form-a1" data-context="true">номер артефакта</a>], 
то этот артефакт даже получится поднять без вылета. Правда, кликать на него после этого <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> или пытаться передвинуть в другой слот я бы не советовал.<br>
<strong class="erm-legacy-label">Биты 30-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t87"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 87</a>. <strong>Верфь</strong><br><img src="../../../../assets/erm/039fea092887dc67.png" alt="Тип 87. Верфь Биты 0-7: владелец верфи (0..255) – SY:O. Некорректные значения могут окрасить флаг в самые неожиданные цвета, хотя обычно этот цвет – белый. Биты" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-7</strong>: владелец верфи (0..255) – <a href="../../receivers/sy/#ref-rec-sy-o">SY:O</a>. Некорректные значения могут окрасить флаг в самые неожиданные цвета, хотя обычно этот цвет – белый.<br>
<strong class="erm-legacy-label">Биты 8-15</strong>: X-координата для постройки корабля (0..255) – <a href="../../receivers/sy/#ref-rec-sy-p">SY:P</a>.<br>
<strong class="erm-legacy-label">Биты 16-23</strong>: Y-координата для постройки корабля (0..255) – <a href="../../receivers/sy/#ref-rec-sy-p">SY:P</a>. Нужно заметить, что, когда лодка покупается дистанционно, кликом по верфи, 
то эти параметры игнорируются и лодка строится в ближайшей водной клетке. Если поставить выходящие за край карты значения, вылетать не будет, просто лодка нигде не построится. 
Скорее всего вместо этого изменятся другие совершенно посторонние данные.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t88"></span><a href="../objects/#ref-form-objects" data-context="true">Типы 88-90</a>. <strong>Святыни магического воплощения, жеста и мысли</strong><br><img src="../../../../assets/erm/8cff49a5f9851782.png" alt="Типы 88-90. Святыни магического воплощения, жеста и мысли Биты 0-4 игнорируются и обычно заполнены. Биты 5-12: какие игроки посетили Святыню (побитно). Если игр" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-4</strong> игнорируются и обычно заполнены.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: какие игроки посетили Святыню (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>). Если игрок посетил Святыню, он знает, что в ней изучают.<br>
<strong class="erm-legacy-label">Биты 13-22</strong>: номер изучаемого заклинания (0..1024) – <a href="../../receivers/sr/#ref-rec-sr-s">SR:S</a>. Если поставить некорректное значение, пишут, что вы уже изучили это заклинание. Хотя я не проверял все значения.<br>
<strong class="erm-legacy-label">Биты 23-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/e05a43208f2dee30.png" alt="Тип 91. Знак Аналогично с Океанской бутылью. Только Знак не исчезает после подбора." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t91"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 91</a>. <strong>Знак</strong><br>
Аналогично с <a href="./#ref-cont-conwords-t59">Океанской бутылью</a>. Только Знак не исчезает после подбора.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/131f6a5e5426e74a.gif" alt="Тип 93. Свиток с заклинанием Контрольное слово представляет собой номер заклинания. Учитываются все биты." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t93"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 93</a>. <strong>Свиток с заклинанием</strong><br>
Контрольное слово представляет собой <a href="../spells/#ref-form-spell" data-context="true">номер заклинания</a>.<br>
Учитываются <strong class="erm-legacy-label">все биты</strong>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/410a259950773ad9.png" alt="Тип 98. Город Биты 0-28: персональный номер (0..536870911) со всеми параметрами. Биты 29-31 игнорируются и обычно пусты. Если поставить одному городу номер друг" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t98"></span><a href="../towns/#ref-form-towns" data-context="true">Тип 98</a>. <strong>Город</strong><br>
<strong class="erm-legacy-label">Биты 0-28</strong>: персональный номер (0..536870911) со всеми параметрами.<br>
<strong class="erm-legacy-label">Биты 29-31</strong> игнорируются и обычно пусты.<br>
Если поставить одному городу номер другого, произойдёт следующее:
</div><span class="erm-anchor" id="ref-cont-conwords-t0"></span><ol class="erm-margin-top-zero">
<li>Если номер сменён не на входе:
	<ol><li>Сменится подсказка по щелчку <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> на этой клетке города, но не на других; подсказка по наведении останется неизменной.</li>
	<li>При клике на эту клетку выделится город, номер которого поставлен; если он уже выделен, откроется меню города, однако, если город не ваш, при наведении на эту клетку курсор на иконку замка не изменится. 
Город не будет выделяться (самое начало предложения), если он принадлежит не вам и выделен какой-либо герой, а не город.</li></ol>
</li>
<li>	Если номер сменён на входе:
	<ol><li>В дополнение к предыдущему изменится также подсказка при наведении (на любую клетку города): сменится имя города. Тип города останется неизменным, он зависит от подтипа клетки при входе.</li>
	<li>Также сменится цвет флажков.</li>
	<li>Если зайти в изменённый вход, сначала совершатся некоторые проверки, связанные с исходным городом: так, если он принадлежит не вам и там есть охрана, вас заставят сражаться; 
	после победы, или если не было охраны, хозяином города станете вы, в чём можно убедиться, поставив на вход исходный номер.</li>
	<li>После чего откроется меню исходного города. Зашедшего героя там не будет, т.к. он будет находиться в гостевом слоте сменённого города.</li>
	<li>Если переместить зашедшего героя в гарнизон и обратно, то он переместится в сменённый город уже на глобальной карте.</li>
	<li>Если попытаться нанять в исходном городе героя, игра вылетит.</li>
	<li>Самые жестокие глюки получаются, если обменять номера у двух городов. Герой-посетитель может уйти из города и одновременно остаться в гостевом слоте, может попасть в гостевые слоты и гарнизоны обоих городов сразу, 
	оказаться в гостевом слоте и гарнизоне одного города одновременно и раздвоиться… ещё тысячей других способов.</li></ol>
</li></ol>

<div class="erm-paragraph"><img src="../../../../assets/erm/8c8c6c4c74f49479.png" alt="Тип 100. Камень знаний Так же, как Арена: биты 0-4 – номер, остальные игнорируются и обычно пусты. Посетил ли герой Камень, определяет команда HE:V0." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t100"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 100</a>. <strong>Камень знаний</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong> – номер, остальные игнорируются и обычно пусты. Посетил ли герой Камень, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V0</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/0e23e7cd429987cb.png" alt="Тип 101. Сундук с сокровищами Биты 0-9: номер артефакта (0..1023) – CH:A. Бит 10: тип бонуса (0 – золото, 1 – артефакт) – CH:S. Биты 11-14: показатель кол-ва зо" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t101"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 101</a>. <strong>Сундук с сокровищами</strong><br>
<strong class="erm-legacy-label">Биты 0-9</strong>: номер артефакта (0..1023) – <a href="../../receivers/ch/#ref-rec-ch-a">CH:A</a>.<br>
<strong class="erm-legacy-label">Бит 10</strong>: тип бонуса (0 – золото, 1 – артефакт) – <a href="../../receivers/ch/#ref-rec-ch-s">CH:S</a>.<br>
<strong class="erm-legacy-label">Биты 11-14</strong>: показатель кол-ва золота (0..15) – <a href="../../receivers/ch/#ref-rec-ch-b">CH:B</a>. Кол-во золота = [показатель] * 500.<br>
<strong class="erm-legacy-label">Биты 15-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t102"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 102</a>. <strong>Древо знаний</strong><br><img src="../../../../assets/erm/837a190b760e5ef2.png" alt="Тип 102. Древо знаний Биты 0-4: номер Древа (0..31) – KT:N. Посетил ли герой Древо, определяет команда HE:V5. Биты 5-12: информация о посещении игроками (побитн" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-4</strong>: номер Древа (0..31) – <a href="../../receivers/kt/#ref-rec-kt-n">KT:N</a>. Посетил ли герой Древо, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V5</a>.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: информация о посещении игроками (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>). Игрок, посетивший Древо, видит в подсказке для него тип получения уровня.<br>
<strong class="erm-legacy-label">Биты 13-15</strong>: тип получения уровня (0..3) – <a href="../../receivers/kt/#ref-rec-kt-s">KT:S</a>. Если поставить тип подбора 3, при посещении Древа игра зависает, 
а в подсказке (если поставить в биты 5-12, что Дерево уже посещали) пишется, что Древо это ни что иное, как улучшенный генератор существ 4 уровня.<br>
<strong class="erm-legacy-label">Биты 16-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/1c4a71943621227a.png" alt="Тип 103. Врата подземного мира Биты 0-29: персональный номер Врат (0..1073741823). Номер ссылается на область данных, где записаны координаты целевых врат или о" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t103"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 103</a>. <strong>Врата подземного мира</strong><br>
<strong class="erm-legacy-label">Биты 0-29</strong>: персональный номер Врат (0..1073741823). Номер ссылается на область данных, где записаны координаты целевых врат или отсутствие оных – если на одном уровне врат больше, часть отключается.<br>
<strong class="erm-legacy-label">Биты 30-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t104"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 104</a>. <strong>Университет</strong><br><img src="../../../../assets/erm/d60f94284d92a049.png" alt="Тип 104. Университет Биты 0-4 игнорируются и обычно заполнены. Биты 5-12 игнорируются и обычно пусты. Эти биты обычно содержат информацию о посещении игроками, " loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-4</strong> игнорируются и обычно заполнены.<br>
<strong class="erm-legacy-label">Биты 5-12</strong> игнорируются и обычно пусты. Эти биты обычно содержат информацию о посещении игроками, но я не заметил ни каких-либо изменений в контрольном слове Университета при посещении, 
ни каких-либо изменений в подсказке Университета при заполнении этих битов.<br>
<strong class="erm-legacy-label">Биты 13-24</strong>: персональный номер Университета (0..4095) с командой <a href="../../receivers/ur/#ref-rec-ur-s">UR:S</a>.<br>
<strong class="erm-legacy-label">Биты 25-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/233630a511ba7d92.png" alt="Тип 105. Телега Биты 0-4: кол-во ресурсов (0..31) – второй параметр WG:R. Биты 5-12: какие игроки посетили телегу (побитно). Бит13: есть ли что-то в телеге – WG" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t105"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 105</a>. <strong>Телега</strong><br>
<strong class="erm-legacy-label">Биты 0-4</strong>: кол-во ресурсов (0..31) – второй параметр <a href="../../receivers/wg/#ref-rec-wg-r">WG:R</a>.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: какие игроки посетили телегу (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>).<br>
<strong class="erm-legacy-label">Бит13</strong>: есть ли что-то в телеге – <a href="../../receivers/wg/#ref-rec-wg-s">WG:S</a>.<br>
<strong class="erm-legacy-label">Бит14</strong>: тип бонуса (0 – ресурсы, 1 – артефакт) – <a href="../../receivers/wg/#ref-rec-wg-b">WG:B</a>.<br>
<strong class="erm-legacy-label">Биты 15-24</strong>: номер артефакта (0..1023) – <a href="../../receivers/wg/#ref-rec-wg-a">WG:A</a>.<br>
<strong class="erm-legacy-label">Биты 25-28</strong>: тип ресурса (0..15) – первый параметр <a href="../../receivers/wg/#ref-rec-wg-r">WG:R</a>.<br>
<strong class="erm-legacy-label">Биты 29-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/ed174f90f0cc1eec.png" alt="Тип 107. Школа войны Так же, как Арена: биты 0-4: – номер, остальные игнорируются и обычно пусты. Посетил ли герой Школу, определяет команда HE:V9." loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t107"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 107</a>. <strong>Школа войны</strong><br>
Так же, как <a href="./#ref-cont-conwords-t4">Арена</a>: <strong class="erm-legacy-label">биты 0-4</strong>: – номер, остальные игнорируются и обычно пусты. Посетил ли герой Школу, определяет команда <a href="../../receivers/he/#ref-rec-he-v">HE:V9</a>.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/c88d56c26956009d.png" alt="Тип 108. Могила воина Бит 0: есть ли артефакт – WT:S. Биты 1-4 игнорируются и обычно заполнены. Биты 5-12: какие игроки посетили могилу (побитно). Биты 13-22: н" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t108"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 108</a>. <strong>Могила воина</strong><br>
<strong class="erm-legacy-label">Бит 0</strong>: есть ли артефакт – <a href="../../receivers/wt/#ref-rec-wt-s">WT:S</a>.<br>
<strong class="erm-legacy-label">Биты 1-4</strong> игнорируются и обычно заполнены.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: какие игроки посетили могилу (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>).<br>
<strong class="erm-legacy-label">Биты 13-22</strong>: номер артефакта (0..1023) – <a href="../../receivers/wt/#ref-rec-wt-a">WT:A</a>. Если поставить некорректный номер, при попытке обыскать могилу игра вылетает.<br>
<strong class="erm-legacy-label">Биты 23-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/a83fa31e3072bfba.png" alt="Тип 109. Водяное колесо Биты 0-4: показатель кол-ва золота (0..15) – WM:B. Кол-во золота = [показатель] * 500. Если показатель равен 0, то мельник говорит, что " loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t109"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 109</a>. <strong>Водяное колесо</strong><br>
<strong class="erm-legacy-label">Биты 0-4</strong>: показатель кол-ва золота (0..15) – <a href="../../receivers/wm/#ref-rec-wm-b">WM:B</a>. Кол-во золота = [показатель] * 500. Если показатель равен 0, то мельник говорит, что золота нет.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: какие игроки посетили колесо (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>). Если игрок посетил колесо, в подсказке для него пишется, заходил ли он туда на этой неделе.<br>
<strong class="erm-legacy-label">Биты 13-31</strong> игнорируются и обычно заполнены.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-conwords-t112"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 112</a>. <strong>Ветряная мельница</strong><br><img src="../../../../assets/erm/22835f7bdfa045b8.png" alt="Тип 112. Ветряная мельница Биты 0-3: тип ресурса (0..15) – первый параметр ML:B. Если поставить некорректное значение, игра вылетает. Бит 4 игнорируется и обычн" loading="lazy" decoding="async" class="erm-figure">
<strong class="erm-legacy-label">Биты 0-3</strong>: тип ресурса (0..15) – первый параметр <a href="../../receivers/ml/#ref-rec-ml-b">ML:B</a>. Если поставить некорректное значение, игра вылетает.<br>
<strong class="erm-legacy-label">Бит 4</strong> игнорируется и обычно пуст.<br>
<strong class="erm-legacy-label">Биты 5-12</strong>: какие игроки посетили мельницу (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>). Если игрок посетил мельницу, в подсказке для него пишется, заходил ли он туда на этой неделе.<br>
<strong class="erm-legacy-label">Биты 13-16</strong>: кол-во ресурсов (0..15) – второй параметр <a href="../../receivers/ml/#ref-rec-ml-b">ML:B</a>. Если 0, мельник говорит, что ресурсов нет.<br>
<strong class="erm-legacy-label">Биты 17-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/3785b9fba274d0c5.png" alt="Тип 113. Хижина ведьмы Биты 5-12: информация о посещении игроками (побитно). Игрок, посетивший хижину, видит в подсказке для неё изучаемый навык. Биты 13-19: из" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t113"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 113</a>. <strong>Хижина ведьмы</strong><br>
<strong class="erm-legacy-label">Биты 5-12</strong>: информация о посещении игроками (<a href="../players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>). Игрок, посетивший хижину, видит в подсказке для неё изучаемый навык.<br>
<strong class="erm-legacy-label">Биты 13-19</strong>: изучаемый навык (0..127). Если поставить некорректное значение в подсказке навык будет именоваться как (null), а при посещении игра вылетит.<br>
<strong class="erm-legacy-label">Биты 20-31</strong> игнорируются и обычно пусты.</div>

<div class="erm-paragraph"><img src="../../../../assets/erm/bbee729dffc4a659.png" alt="Тип 215. Страж прохода Контрольное слово представляет собой персональный номер Стража. Учитываются все биты. Мы пока не можем изменять параметры Стражей прохода" loading="lazy" decoding="async" class="erm-figure"><span class="erm-anchor" id="ref-cont-conwords-t215"></span><a href="../objects/#ref-form-objects" data-context="true">Тип 215</a>. <strong>Страж прохода</strong><br>
Контрольное слово представляет собой персональный номер Стража.<br>
Учитываются <strong class="erm-legacy-label">все биты</strong>.<br>
Мы пока не можем изменять параметры Стражей прохода и Хижин провидца, но можем менять их номера как готовые наборы параметров. 
К сожалению, после открытия прохода задание у Стража (по аналогии с Хижиной провидца) стирается, и если мы поставим двум Стражам одинаковый номер, то открыть можно будет лишь один из них: 
после открытия одного второй превратится в каменный столб и не будет выдавать сообщений при посещении, как то случается с ненастроенными Стражами. В принципе, и это можно использовать.<br>
Например, в "Жизни приключений", когда герою предстоит выбрать две из четырёх стихий магии, можно было бы поставить Cтражам прохода, требующим одинаковые брелки, одинаковый номер. 
Тогда не осталось бы лишних записей в журнале и можно было бы поставить недоступному после выбора Cтражу сообщение типа "Вы уже сделали свой выбор.".</div>

<span class="erm-anchor" id="ref-cont-conwords-3"></span><h3>Зачем это всё нужно?</h3>
<div class="erm-paragraph">Как можно заметить, я несколько абзацев сначала объяснял, как правильно складывать 10 и 10, чтобы получить 100, а не 110101 (и не 20), а затем долго и нудно излагал, где какие биты что означают. 
У читателя, прочитавшего это всё целиком, если такие есть (на что я не надеюсь; я всё-таки пишу не беллетристику, а своего рода справочник), или хотя бы бегло всё просмотревшего, складывается впечатление, 
что автор страдает гибридом графомании и трудоголии и ему некуда девать свои созидательные усилия, кроме как на всякого рода макулатуру.<br>
Короче, читатель задаёт себе вопрос: а зачем это всё нужно?<br>
Отвечаю. В исследовании есть немного полезной и действительно новой информации. Например, контрольное слово для Фонтана удачи и расположения персональных номеров и информации о посещении, для которой зачастую нет команды ERM. 
В тех же случаях, когда я разбирал, скажем, Магический источник, все параметры которого задаются через ERM, я также сделал немного полезного. 
Из приведённого расположения можно выковырять целых 27 свободных для записи битов для тех, кто не знает, что такое <a href="../../receivers/po/#ref-rec-po">!!PO</a> или просто экономит.<br>
Кроме того, систематизация – великая вещь. Авось кому-либо пригодится.<br>
Наконец, у меня чётко указан диапазон возможных значений параметра. Во-первых, в ERM Help он не всегда указан, во-вторых, часто бывают некорректные значения, которые иногда дают интересный эффект, и, 
наконец, всегда можно сказать, сколько артефактов, заклинаний или чего-то ещё в этом роде может "выдержать" игра. Так, артефакту почти везде отводится 10 бит 
(за исключением Потерпевшего кораблекрушение: там номер артефакта занимает аж 30 бит!), и поэтому будет достаточно сложно сделать 1025 и более артефактов (придётся привлекать ERM), а вот 1024 – пожалуйста. 
Заклинанию также обычно уделяется 10 бит, только в Пирамиде под него отводится лишь 8. Но последнее можно устранить лёгким исправлением exe-шника (хотя 256 заклинаний можно наделать и без него), 
а вот 1025 и более разных магий – это уже проблематично.</div>

<h3>А что у нас нового?</h3>
<div class="erm-paragraph">Но, возможно, не все захотят вылавливать клецки истины из супа словоблудия, и специально для этих лентяев я выпишу ту самую полезную и новую информацию сжато и конспективно в небольшом списке. 
Читайте на здоровье. Итак, у нас в программе:
</div><ul>
<li>	Персональные номера для типов 5, 6, 16 и многих других: где их искать и что с ними делать. Много интересных фактов.</li>
<li>	Если поставить Костру покинутого лагеря значения 8-15 в качестве типа ресурса, то… Почитайте, узнаете.</li>
<li>	Лебединое озеро не имеет параметров! Зачем же тогда !!SW? Не знаю. Вероятно, для красоты.</li>
<li>	При некоторых значениях контрольного слова Обломки и Учёные (а также неиспользуемые сундуки – но это все знают) при посещении плавно исчезают без всякого сообщения. 
Это самое плавное исчезновение средствами ERM не получишь – только так. Зато тип и контрольное слово мы менять умеем…</li>
<li>	Контрольное слово для Фонтана удачи – впервые на арене!</li>
<li>	К чему приводит баловство с номерами городов и героев – подробное описание.</li>
<li>	Если в Чьём-то погребе (или мельницах) указать кол-во ресурса 0, он считается посещённым, в отличие от телеги, где вы всегда сможете найти 0 дерева или руды.</li>
<li>	Если поставить монстрам кол-во 4095, то по клику <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> появится предложение убрать его с карты, т.к. он чересчур велик.</li>
<li>	Рассмотрены проблемы генерации случайных сообщений в Знаках и Океанских бутылях.</li>
<li>	Рассказано, что будет, если поставить Учёного, обучающего первичным навыкам под номерами 4-7.</li>
<li>	В битах 5-12 многих объектов находится информация об их посещении игроками, однако далеко не всегда это редактируется ERM.</li></ul>
<div class="erm-paragraph">А также многое другое, что я посчитал ненужным вылавливать.</div>
<div class="erm-paragraph">На этом позвольте закончить.</div>

</div>
</div>
</section>
:::

## Назначение {#meaning}

32-битное поле OB:C с разной упаковкой для разных типов объектов. Ниже приведены исследованные поля старого WoG; неизвестные биты сохраняйте. Ёмкость поля не означает допустимость всех его значений. Для собственных данных используйте PO.

## Значения {#values}

| Тип объекта | Поля и связанные команды |
| --- | --- |
| [4](../objects/#id-4) {#type-4} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V7. |
| [5](../objects/#id-5) {#type-5} | 0–14: AR:V, заклинание свитка или режим подбора; 15–18: ресурс для режимов 4/5; 19–30: индекс дополнительных данных; 31: наличие дополнительных данных AR:G/M/X. Режим 6 имеет иную упаковку охраны. |
| [6](../objects/#id-6) {#type-6} | 0–9: индекс записи параметров LE (0–1023). |
| [12](../objects/#id-12) {#type-12} | 0–3: вид ресурса; 4–19: знаковое количество от −32768 до 32767. Индексы 8–15 меняют картинку сообщения, но не выдают артефакт или заклинание. |
| [14](../objects/#id-14) {#type-14} | SW меняет 0–4 (номер) и 13–16 (удача), но исследование старого WoG сообщает, что игра их игнорирует и даёт +2 удачи. Не считайте запись доказательством изменения эффекта. |
| [16](../objects/#id-16) {#type-16} | 5–12: посещения игроков (CB:V); 13–24: индекс банка (CB:A/G/M/R); 25: стражи убиты (CB:T). |
| [17](../objects/#id-17) {#type-17} | 0–28: индекс записи DW. |
| [18](../objects/#id-18) {#type-18} | 0–28: индекс записи DW. |
| [19](../objects/#id-19) {#type-19} | 0–28: индекс записи DW. |
| [20](../objects/#id-20) {#type-20} | 0–28: индекс записи DW. |
| [22](../objects/#id-22) {#type-22} | 0–4: индекс скелета; 6–15: ID артефакта; 16: наличие артефакта (SK). |
| [23](../objects/#id-23) {#type-23} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V1. |
| [24](../objects/#id-24) {#type-24} | 5–12: посещения игроков (CB:V); 13–24: индекс банка (CB:A/G/M/R); 25: стражи убиты (CB:T). |
| [25](../objects/#id-25) {#type-25} | 5–12: посещения игроков (CB:V); 13–24: индекс банка (CB:A/G/M/R); 25: стражи убиты (CB:T). |
| [26](../objects/#id-26) {#type-26} | 0–9: индекс LE; 10–17: игроки, которым запрещена активация; 18: разрешение ИИ; 19: удаление после первого посещения. |
| [29](../objects/#id-29) {#type-29} | Всё слово: 0 пусто, 1 — 5 дерева, 2 — 5 дерева и 200 золота, 3 — 10 дерева и 500 золота. Прочие значения в старом WoG убирают объект без награды и сообщения. |
| [30](../objects/#id-30) {#type-30} | 5–12: посещения игроков; 13–16: знаковая удача от −8 до +7. |
| [32](../objects/#id-32) {#type-32} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V2. |
| [33](../objects/#id-33) {#type-33} | 0–25: индекс записи GR. |
| [34](../objects/#id-34) {#type-34} | Всё слово: ID героя. Подмена номера не создаёт корректного независимого героя и может нарушить состояние армии и гарнизона. |
| [39](../objects/#id-39) {#type-39} | 0–4: индекс LN; 6–9: количество ресурса (0 означает опустошённый объект); 10–13: вид ресурса. |
| [41](../objects/#id-41) {#type-41} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V6. |
| [42](../objects/#id-42) {#type-42} | 0–25: индекс записи MN. Шахты и маяки разделяют пространство записей; вид ресурса маяка в старом формате — 100. |
| [44](../objects/#id-44) {#type-44} | Номер выходного монолита, отдельный для каждого подтипа. −1 отключает выход в исследованной версии. |
| [45](../objects/#id-45) {#type-45} | Всё слово: персональный номер монолита. Равные номера не дают паре монолитов направлять героя друг в друга. |
| [47](../objects/#id-47) {#type-47} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V8. |
| [48](../objects/#id-48) {#type-48} | 0–4: индекс источника (SP:N); 6: посещён (SP:S). |
| [51](../objects/#id-51) {#type-51} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V3. |
| [53](../objects/#id-53) {#type-53} | 0–25: индекс записи MN. Шахты и маяки разделяют пространство записей; вид ресурса маяка в старом формате — 100. |
| [54](../objects/#id-54) {#type-54} | 0–11: количество; 12–15: вероятность отказа в десятках процентов; 16: режим присоединения; 17: не убегает; 18: нет роста; 19–26: индекс дополнительных данных; 31: данные существуют. Тип существа находится в подтипе объекта. |
| [55](../objects/#id-55) {#type-55} | 0–4: индекс GD; 6–9: ресурс; 10: наличие награды. Значения ресурса 8–15 некорректны. |
| [57](../objects/#id-57) {#type-57} | Персональный номер обелиска 0–47 (MT:N); посещения игроков хранятся отдельно (UN:L). |
| [59](../objects/#id-59) {#type-59} | 0–29: индекс текста SG:M. Без назначенного текста используется RANDSIGN.TXT; одинаковый индекс не гарантирует одинаковый случайный текст. |
| [61](../objects/#id-61) {#type-61} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V4. |
| [62](../objects/#id-62) {#type-62} | ID заключённого героя. Произвольный ID свободного героя не превращает его в узника. |
| [63](../objects/#id-63) {#type-63} | 0: стражи; 5–12: посещения игроков; 13–20: ID заклинания (PM). |
| [78](../objects/#id-78) {#type-78} | 0–15: знаковое количество существ; вид существа задаёт подтип. |
| [79](../objects/#id-79) {#type-79} | 0–14: количество ресурса; 19–30 и 31: индекс дополнительных данных и признак их наличия, как у артефакта. |
| [81](../objects/#id-81) {#type-81} | 0–2: вид награды; 3–5: первичный навык; 6–12: вторичный навык; 13–22: заклинание. Используйте только действительные ID (SC). |
| [82](../objects/#id-82) {#type-82} | 0–2: 0 пусто, 1 — 1500 золота, 2 — 1000 золота и артефакт; 3–12: артефакт. Режимы 3–7 в старом WoG удаляют сундук без награды. |
| [83](../objects/#id-83) {#type-83} | Всё слово: индекс записи задания. Общий индекс означает общие данные; выполнение одного задания может очистить параметры другого объекта. |
| [84](../objects/#id-84) {#type-84} | 5–12: посещения игроков (CB:V); 13–24: индекс банка (CB:A/G/M/R); 25: стражи убиты (CB:T). |
| [85](../objects/#id-85) {#type-85} | 5–12: посещения игроков (CB:V); 13–24: индекс банка (CB:A/G/M/R); 25: стражи убиты (CB:T). |
| [86](../objects/#id-86) {#type-86} | 0–29: ID артефакта. Большая разрядность поля не увеличивает количество допустимых игровых артефактов. |
| [87](../objects/#id-87) {#type-87} | 0–7: владелец; 8–15: X для лодки; 16–23: Y для лодки (SY). Дистанционная покупка может выбирать ближайшую водную клетку. |
| [88](../objects/#id-88) {#type-88} | 5–12: посещения игроков; 13–22: ID заклинания (10 бит, 0–1023 — ёмкость поля, не допустимый набор заклинаний). |
| [89](../objects/#id-89) {#type-89} | 5–12: посещения игроков; 13–22: ID заклинания (10 бит, 0–1023 — ёмкость поля, не допустимый набор заклинаний). |
| [90](../objects/#id-90) {#type-90} | 5–12: посещения игроков; 13–22: ID заклинания (10 бит, 0–1023 — ёмкость поля, не допустимый набор заклинаний). |
| [91](../objects/#id-91) {#type-91} | 0–29: индекс текста SG:M. Без назначенного текста используется RANDSIGN.TXT; одинаковый индекс не гарантирует одинаковый случайный текст. |
| [93](../objects/#id-93) {#type-93} | Всё слово: ID заклинания. |
| [98](../objects/#id-98) {#type-98} | 0–28: индекс записи города. Подмена номера может рассинхронизировать владельца, гостей и гарнизон; используйте CA для штатных изменений. |
| [100](../objects/#id-100) {#type-100} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V0. |
| [101](../objects/#id-101) {#type-101} | 0–9: ID артефакта; 10: 0 золото / 1 артефакт; 11–14: множитель золота ×500 (CH). |
| [102](../objects/#id-102) {#type-102} | 0–4: индекс дерева; 5–12: посещения игроков; 13–15: вид платы. Используйте только штатные режимы KT:S; режим 3 в источнике вызывает зависание. |
| [103](../objects/#id-103) {#type-103} | 0–29: индекс записи подземных врат с координатами парного выхода. |
| [104](../objects/#id-104) {#type-104} | 13–24: индекс университета (UR:S). |
| [105](../objects/#id-105) {#type-105} | 0–4: количество ресурса; 5–12: посещения; 13: есть награда; 14: 0 ресурс / 1 артефакт; 15–24: ID артефакта; 25–28: ресурс (WG). |
| [107](../objects/#id-107) {#type-107} | 0–4: номер посещаемого объекта (0–31); посещение героя — HE:V9. |
| [108](../objects/#id-108) {#type-108} | 0: есть артефакт; 5–12: посещения игроков; 13–22: артефакт (WT). |
| [109](../objects/#id-109) {#type-109} | 0–4: множитель золота ×500; 5–12: посещения игроков (WM). |
| [112](../objects/#id-112) {#type-112} | 0–3: ресурс; 5–12: посещения игроков; 13–16: количество (ML). |
| [113](../objects/#id-113) {#type-113} | 5–12: посещения игроков; 13–19: вторичный навык. |
| [215](../objects/#id-215) {#type-215} | Всё слово: индекс записи задания. Общий индекс означает общие данные; выполнение одного задания может очистить параметры другого объекта. |

## Связанные команды и таблицы {#related}

[OB:C](../../receivers/ob/) · [Все таблицы](../)

## Связанные команды и таблицы {#reference-links}

[Объекты карты (OB)](../../receivers/ob/#command-b-h) · [Объекты карты (OB)](../../receivers/ob/#command-c) · [Объекты карты (OB)](../../receivers/ob/#command-d-e) · [Объекты карты (OB)](../../receivers/ob/#command-m-1-2-3) · [Объекты карты (OB)](../../receivers/ob/#command-r-s) · [Объекты карты (OB)](../../receivers/ob/#command-t-u) · [Посещение объекта (OB)](../../triggers/ob/) · [Таблица артефактов](../artifacts/) · [Цвета игроков](../players/) · [Таблица объектов в игре](../objects/) · [Подсказки типов объектов (HT)](../../receivers/ht/) · [Флаги, сообщения и выбор (IF)](../../receivers/if/) · [Отладка и совместимость ERM](../../compatibility/)
