---
{"title":"Общие игровые операции (UN)","summary":"Ресивер UN: общие игровые операции, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Общие игровые операции (UN)"}
---

## Ресивер UN {#ref-rec-un}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value"></span><span class="erm-anchor" id="command-j0-spell-j1-level-experience-j2"></span><span class="erm-anchor" id="command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill"></span><span class="erm-anchor" id="command-n5-z-key-sectionz-filez-n6-z-key-sectionz-filez"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-un-text"></span><div>
<span class="erm-anchor" id="ref-rec-un-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>UN</strong> (универсальная команда) </span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-un-red"></span><span class="erm-tone-red">!!UN:XXXX;</span> 
- универсальная команда. Используется для изменений в карте и/или игре.</strong></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-a"></span><span class="erm-anchor" id="command-a-a"></span><span class="erm-anchor" id="command-a-combo-artifact-part1-part2"></span>A#/$</strong></span><br>
Установить/проверить/получить доступность артефакта на карте:
</div><pre>        # – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a>
        $ = 1 – артефакт запрещён
	$ = 0 – артефакт разрешён</pre>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> запрет не работает при генерировании артефакта на карте (взамен "случайного" артефакта). 
Однако, можно попробовать запретить через <span class="erm-anchor" id="ref-rec-un-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:A#/3/0;</strong></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-a1"></span>A#1/#2/$</strong></span><br>
Установить/проверить/получить информацию про артефакт.
</div><pre>        #1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a>
        #2 – тип информации
	= 1 – цена
	= 2 – <a href="../../tables/artifact-slots/#ref-form-ap2" data-context="true">позиция на теле</a>
	= 3 – тип (класс)
	= 4 – номер <a href="../../tables/combination-artifacts/#ref-form-a2" data-context="true">комбо-артефакта</a>
	= 5 – часть комбо-артефакта
	= 7 – артефакт WoG
	= 8 – даёт заклинание или нет
	= 9 – имя артефакта
	= 10 – описание артефакта
        $ - значение</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<ol>
<li><span class="erm-anchor" id="ref-rec-un-wt"></span><strong class="erm-legacy-label">Цена:</strong> Артефакт можно продать у торговцев артефактами за 1/5 установленной цены, если вы не обладаете дополнительными торговцами. Грааль и новые WoG-артефакты имеют цену 0.</li>
<li><strong class="erm-legacy-label">Позиция на теле:</strong> если вы помещаете артефакт на некорректную позицию с помощью ERM, дополнительные параметры никуда не исчезнут. 
Например, вы установили, что Сандалии Святого надевают на голову вместо ног, вы получите все параметры +2 (и потеряете их, когда снимите).<br>
Если герой имеет уже надетый артефакт и вы измените слот артефакта через ERM, артефакт останется полностью функциональным до его снятия, далее его одеть можно будет только в изменённый слот.</li>
<li><strong class="erm-legacy-label">Тип:</strong> Это значение определяет класс артефакта – нет класса (книга заклинаний, боевые машины и Грааль) (1), сокровище (2), ценный (4), важный (8) и реликт (16), 
которые включают комбо-артефакты и три новых ВоГ-артефакта. Другие значения могут быть установлены для получения смешанного класса (или своего).</li>
<li><strong class="erm-legacy-label">Номер комбо-артефакта:</strong> каждая комбинация имеет свой номер. Первый комбо-артефакт, Альянс Ангелов, имеет номер 0, и последний, Рог Изобилия - 11. Не-комбо-артефакты имеют значение -1.<br>
Внимание: если вы ставите стандартным сборным артефактам (вроде Альянса Ангелов) это значение на -1 (что это НЕ комбо-артефакт), то они не будут добавлять что-либо к параметрам героя, но сохранят свои дополнительные свойства 
(вроде Молитвы или иммунитета к магии до 4го уровня)</li>
<li><strong class="erm-legacy-label">Часть комбо-артефакта:</strong> если артефакт – один из составных частей, значение будет номером комбо-артефакта. И если артефакт не часть комбо, значение будет -1.</li>
<li>НЕ ИСПОЛЬЗУЕТСЯ.</li>
<li><strong class="erm-legacy-label">Артефакт WoG:</strong> данный параметр установлен на 0 у всех артефактов, кроме 141, 142 и 143, у которых он равен 1.</li>
<li><strong class="erm-legacy-label">Даёт заклинание:</strong> это значение установлено на 0 для большинства артефактов, и на 1 для артефактов типа Томов магии, Шляпы оратора, Шляпы капитана – то, что по умолчанию даёт заклинания. 
Сейчас невозможно проверить, какое заклинание добавляется, однако, небольшая проверка всех заклинания героя перед экипировкой и после позволяет их вычислить.<br>
Установка этого значения на 0 (если по умолчанию 1) отменяет получение заклинаний.</li>
<li><strong class="erm-legacy-label">Имя артефакта:</strong> 
этим можно установить имя артефакта. $ - номер <em>z</em>-переменной, содержащей имя артефакта. Значение 0 восстанавливает оригинально название. 
Часто используемый трюк с этой опцией - переименование артефактов и использование их картинок с другим описанием в диалоговых окнах.</li>
<li><strong class="erm-legacy-label">Описание артефакта:</strong> этим можно установить описание артефакта. $ - номер <em>z</em>-переменной, содержащей описание артефакта. Значение = 0 восстанавливает оригинальное описание.</li>
</ol></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-a2"></span>
A#/$/#1/#2[/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14]</strong></span><br>
Менеджер комбо-артефактов.<br>Построить/удалить комбо артефакт:<br>
         # – <a href="../../tables/combination-artifacts/#ref-form-a2" data-context="true">номер комбо</a> (0..31)<br>
         $ – 
установить/проверить/получить 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер комбо-артефакта</a><br>
         #1 – 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">часть 1</a><br>
         #2 –
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">часть 2</a><br>
         #3 –
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">часть 3</a> 
(опционально)<br>
         …<br>
         …<br>
         #14 – 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">часть 14</a> (опционально)<br>
<em>Результат:</em> комбо-артефакт создан. Если успешно, флаг 1 устанавливается на 
1.<br>
<u></u>
</div><span class="erm-anchor" id="ref-rec-un-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"><ul>
<li>Вы можете использовать синтаксис инструкции (!#UN:A).</li>
<li>Все комбо-артефакты записываются в специальную таблицу. Эта таблица вмещает 
до 32 записей. Так что возможно установить до 32 комбо-артефактов. Все 
стандартные комбо уже записаны в таблице (первые 12 строк)</li>
<li>$ = номеру артефакта, который появится при сборке.</li>
<li>Вы можете проверить, пуста строка таблицы комбо-артефактов или нет:
<pre class="erm-example"><code class="language-erm">!!UN:A5/?v100/0/0;</code></pre>
Получить номер комбо-артефакта в строке 5 комбо-таблицы в v100. Два нуля в конце 
нужны для корректной работы команды. В синтаксисе проверки и получения 
дополнительный параметры (нули) игнорируются. Пустая строка комбо-таблицы даст 
значение 0. Так, если в приведенном выше примере, v100 = 0, строка пуста и может 
быть использована. Вы можете удалить комбо-артефакт без добавления нового. 
Используйте номер комбо-артефакта 0 для этого.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:A5/0/0/0;
Первый ноль удаляет информацию о комбо из 5й строки таблицы. 
Следующие два нуля нужны для корректной работы команды.</code></pre></li>
<li>Важно! Только артефакты с номером <strong>менее 160</strong> могут быть <strong>частью</strong> составного 
артефакта, хотя все артефакты могут быть использованы в качестве собранного.</li>
</ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-b"></span><span class="erm-anchor" id="command-b"></span>B#/$</strong></span><br>
Провести операции над новыми сундуками и Мифрилом.
</div><pre>        # – тип
	0 – Мифрил
	1..6 – новые сундуки
	7..10 – камни Силы
        $ – действие (0 = стандартое, 1 = особое)</pre>
<div class="erm-paragraph">Давайте рассмотрим подробнее каждый тип по отдельности:<br>
</div><span class="erm-anchor" id="ref-rec-un-4"></span><details class="erm-comment"><summary><strong>Новый ресурс (<span class="erm-anchor" id="ref-rec-un-show4"></span><strong class="erm-toggle-label">показать</strong>)</strong></summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-un-vc"></span><img src="../../../../assets/erm/9290c47ed2b27925.gif" alt="Мифрил – тип 79 / подтип 7. Для мифрила стандартная операция означает, что когда вы (или ИИ) возьмёте его, вы получите случайный ресурс, кроме дерева и руды и в" loading="lazy" decoding="async" class="erm-figure" width="64" height="32"> 
<a href="../../tables/resources/#ref-form-resource" data-context="true">Мифрил</a> – тип 79 / подтип 7.<br>
Для мифрила стандартная операция означает, что когда вы (или ИИ) возьмёте его, вы получите случайный ресурс, 
кроме дерева и руды и в кол-ве, установленном в редакторе (для золота, как всегда, *100).<br>
Расширенное действие для мифрила означает, что он будет добавляться к имеющемуся кол-ву Мифрила игрока.<br>
Вы можете установить или проверить кол-во мифрила командой <strong class="erm-inline-code"><a href="../ow/#ref-rec-ow-r"><span class="erm-tone-purple erm-legacy-strong">!!OW</span></a>:R#/7/$;</strong> 
Оба действия работают и для ИИ, и для человека. ИИ считает мифрил золотом, вне зависимости, берёт он его или нет.</div></details><br>
<strong></strong><span class="erm-anchor" id="ref-rec-un-3"></span><details class="erm-comment"><summary>Новые сундуки (<span class="erm-anchor" id="ref-rec-un-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-rec-un-step"></span><table class="erm-table-center erm-indent" width="100%">
<tr>
	<td width="37"><img src="../../../../assets/erm/28df6e4bf384fdf4.gif" alt="zchst1" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="130">тип 101, подтип 1</td>
	<td width="5%"></td>
	<td width="37"><img src="../../../../assets/erm/7250950ddfc9c054.gif" alt="zchst4" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="130">тип 101, подтип 4</td>
	<td></td>
</tr>
<tr>
	<td><img src="../../../../assets/erm/807565923848fcc8.gif" alt="zchst2" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>тип 101, подтип 2</td>
	<td></td>
	<td><img src="../../../../assets/erm/db01461679fb7041.gif" alt="zchst5" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>тип 101, подтип 5</td>
	<td></td>
</tr>
<tr>
	<td><img src="../../../../assets/erm/cfb359c841780f97.gif" alt="zchst3" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>тип 101, подтип 3</td>
	<td></td>
	<td><img src="../../../../assets/erm/64072fc0944b718a.gif" alt="zchst6" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>тип 101, подтип 6</td>
	<td></td>
</tr></table></div><br>
Для всех новых сундуков стандартная операция означает стандартный сундук сокровищ.<br>
Расширенное действие ничего не даёт герою-посетителю. В любом случае, сундук исчезает после его посещения.<br>
</div></details><br>
<span class="erm-anchor" id="ref-rec-un-5"></span><details class="erm-comment"><summary><strong>Камни Силы (<span class="erm-anchor" id="ref-rec-un-show5"></span><strong class="erm-toggle-label">показать</strong>)</strong></summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table class="erm-table-center erm-indent" width="100%">
<tr>
	<td width="80"><img src="../../../../assets/erm/dc022d17e0c5b75a.gif" alt="zcbon006" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td width="80"><img src="../../../../assets/erm/c7cf2ff165a5e6ba.gif" alt="zcbon106" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td width="80"><img src="../../../../assets/erm/d322ef5369f9ed9e.gif" alt="zcbon203" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td width="80"><img src="../../../../assets/erm/e1114718882cd4d9.gif" alt="zcbon303" loading="lazy" decoding="async" class="erm-figure" width="64"></td>
	<td width="10">&amp;nbsp</td>
	<td></td>
</tr>
<tr>
	<td colspan="2">тип 101<br>подтип 7</td>		
	<td colspan="2">тип 101<br>подтип 8</td>
	<td colspan="2">тип 101<br>подтип 9</td>
	<td colspan="2">тип 101<br>подтип 10</td>
	<td></td>
</tr></table></div>
<div class="erm-paragraph">Камни силы работают так:
</div><ol><li>Не-WoG'ифицированная wog-карта без ERM, включенные WoG-опции: Командиры 
отключены, *или* Не-WoG'ифицированная карта с опцией "Командиры", включенной с 
помощью ERM, Камни силы отключены через ERM:
<pre class="erm-example"><code class="language-erm">!#UN:P3/0;
!#UN:B7/0;
!#UN:B8/0; 
!#UN:B9/0;
!#UN:B10/0;</code></pre>
*Или* WoG'ифицированная карта с отключенными командирами 
через WoG-опции, Камни силы разрешены или запрещены.<br>Результат: Камни силы 
работают, как обычные сундуки сокровищ.</li>
<li>Не-WoG'ифицированная wog-карта без ERM, включенные WoG-опции: "Командиры 
разрешены", *или* Не-WoG'ифицированная wog-карта с помощью ERM-
разрешёнными командирами  (<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0;</strong>), Камни силы включены через ERM 
или НЕ отключены ERM 
(<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:B7/1;</strong> и т.д.) *или WoG'ифицированная карта с разрешёнными командирами в 
WoG-опциях, Камни силы разрешены или запрещены.<br>
Результат, если командир героя жив: командир получает бонус от Камня силы.<br>
Результат, если командир героя мёртв: вопрос о разрушении камня.</li>
<li>Не-WoG'ифицированная wog-карта с отключенными командирами с помощью ERM, 
(<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/1;</strong>).<br>
Результат: Камни силы работают как более ценные сундуки сокровищ (до 7500 золота/7000 опыта)</li></ol>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-c"></span><span class="erm-anchor" id="command-cbase-size-cbase-offset-size"></span><span class="erm-tone-red"><strong>C#1/#2/$</strong></span><br>
Команда производит запись/чтение напрямую по адресам оперативной памяти:
</div><pre>        #1 – базовый адрес
        #2 – кол-во байт (1, 2, 4)
         $ – значение</pre>
<pre class="erm-example"><code class="language-erm">!!UN:C0/4/0; гарантированный вылет из игры © Berserker</code></pre>
<em>Расширение синтаксиса:</em><br>
<span class="erm-anchor" id="ref-rec-un-c1"></span><span class="erm-tone-red"><strong>C#1/#2/#3/$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>
<pre>        #1 – базовый адрес (всегда используется <em class="erm-legacy-file">GetRealAddr</em>)
        #2 – смещение в байтах
        #3 – кол-во байт
         $ – значение</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-11"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show11"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"> 
<span class="erm-anchor" id="ref-rec-un-q1"></span><blockquote class="erm-tone-quote erm-note"><strong>Структуры</strong> – массивы данных в памяти игры, для удобного хранения информации и чтения/записи программным кодом. Большинство ERM-команд изменяют данные внутри этих структур (таблиц).</blockquote>
UN:C автоматически поддерживает перемещённые структуры, то есть структуры, которые плагины перенесли в другое место памяти. Для этого нужно всегда указывать начало структуры в качестве базового адреса и корректное смещение (прибавить/убавить). Команда подставит новый базовый адрес и прибавит смещение.<br>
Структуры описаны в <a href="http://wforum.heroes35.net/files/wog358_sources.rar">исходном коде WoG 3.58f</a></div></details>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: <a href="../../un-c/#ref-cont-unc">Работа с памятью</a>, <a href="../../un-c/#ref-cont-unc-lib">Готовые решения с использованием команды</a>, <a href="../../examples/#ref-cont-lib">Библиотека нестандартных ф-ций</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-d"></span><span class="erm-anchor" id="command-d-x-y-level-on-w-x1-y1-x2-y2-level-on"></span>D#1/#2/#3</strong></span><br>
Сделать квадрат воды доступным для героя.<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>D#1/#2/#3/$</strong></span><br>
Поместить/удалить путь (бревна) на воде<br>
         $ = 1 – поместить 
(добавить проходимость пешком)<br>
         $ = 0 – не помещать (удалить
проходимость пешком)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-6"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Квадрат с бревном недоступен для лодки, но доступен 
для ходьбы. Если не поместить бревно, квадрат становится обычным (т.е. доступным 
для лодки). Если выставить проходимость для лодки (x/y/l/0) квадрату-не-воде, 
игра выходит в чёрный экран. Если установить проходимость пешком на 
квадрате-не-воде, вместо него появится квадрат с водой и плавающим на ней 
бревном. В его описании будет написано "Болото (можно копать)", и при раскопке 
на нём появится болотистая ямка.<br>
На данный момент единственная ERM-команда, которая 
опускаемый четвёртый параметр принимает как значение 1 (хотя все другие как 0).</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-e"></span><span class="erm-anchor" id="command-e-x-y-level-f-x-y-level-dx-dy"></span>E#1/#2/#3</strong></span><br>
Проверить, можно ли поместить объект в координаты <br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
Осуществляет проверку на возможность помещения одноклеточного объекта в эти 
координаты. Если возможно, флаг 1 будет равен лжи, если нет, истине.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-45"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-un-show45"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:E1/2/0;
!!IF&amp;1:M^Сюда нельзя поместить объект^;
!!IF&amp;-1:M^Сюда можно поместить объект^;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-f"></span>F$1/$2/$3/$4/$5</strong></span><br>
Вызвать пожар (если возможно)<br>
         $1 – X координата<br>
         $2 – Y координата<br>
         $3 – L (0-поверхность, 1-подземелье)<br>
         $4 – dX<br>
         $5 – dY<br>
dX, dY: имеем прямоугольник.<br>
Если верхний левый угол с координатами x и y…<br>
А нижний правый, допустим, x2 и y2… Тогда<br>
dX=x2-x<br>
dY=y2-y<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-7"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Пока что данная команда возможна лишь для одного объекта - дерева. Этот объект можно найти в редактор карт → Замки → последний элемент. Вы можете увидеть действие этого скрипта, когда разрушите город Горыныча. 
Деревья около замка автоматически загораются при его разрушении.<br>
<span class="erm-anchor" id="ref-rec-un-n1"></span><strong class="erm-tone-purple erm-strong">WoG-Team</strong>: «<em>Мы хотели сделать больше таких объектов (больше деревьев), но не успели. 
Мы можем сделать динамическую анимацию горения деревьев, затопления и чего-либо ещё. Всё готово, но объектов нет.</em>«</div></details> 
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-g"></span>G0/#1/#2/#3</strong></span><br>
Установить текст вторичного навыка.
</div><pre>        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">номер навыка</a> (0..27)
        #2 – тип текста (0..3)
	0 – имя навыка
	1 – базовый уровень (описание)
	2 – продвинутый уровень (описание)
	3 – экспертный уровень (описание)
        $3 – номер <em>z</em>-переменной (1..1000)
	0 – восстановить оригинальный текст</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-8"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
похоже на изменение имени и описания артефакта.<br>
Вы должны установить <em>z</em>-переменную с соответствующим текстом (вы можете 
использовать только глобальные <em>z</em>-переменные z1…z1000). Если вы измените текст 
использованной здесь <em>z</em>-переменной, он немедленно станет новым текстом навыка. 
Так что не используйте эти переменные для других дел.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!#VRz10:S^Новое имя^;
!#VRz11:S^Новое описание^;

!$LE7/5/0;
!!UN:G0/2/0/10;
!!UN:G0/2/1/11;

!$LE8/5/0;
!!UN:G0/2/1/0;</code></pre>
Данный скрипт установит имя и описание навыка Логистики на новые, если вы 
посетите локальное событие 7/5/0. Оригинальное описание базового уровня 
Логистики будет восстановлено после посещения локального события в 8/5/0.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-g1"></span>G1/#1/#2/$</strong></span><br>
Изменить имя монстра.
</div><pre>        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">номер монстра</a>
        #2 – тип текста
	0 – имя монстра в ед.ч.
	1 – имя монстра во мн.ч.
	2 – специальный текст (описание)
        $ - <em>z</em>-переменная (или её номер), содержащая новый текст
	0 – восстановить исходный текст (по умолчанию)</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-g2"></span>G2/#1/#2/#3</strong></span><br>
Позволяет вам установить текст и картинку специализации героя.
</div><pre>        #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>
        #2 – что установить
	1 - малую картинку (видна в окне встречи героев, и т.п)
	2 – описание
	3 – картинку
        #3 – это:
	– номер <em>z</em>-переменной (0 – восстановить по умолчанию), если #2 = 2
	– номер картинки (<a href="../../tables/specialty-pictures/#ref-form-heroesspec" data-context="true">0..356</a>), если #2 = (1 или 3)</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-h"></span><span class="erm-anchor" id="command-h-x-y-level-player-radius-s-x-y-level-player-radius"></span>H#1/#2/#3/#4/#5</strong></span><br>
Скрыть часть карты (область – круг)<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L (уровень)<br>
         #4 – 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
         #5 – радиус<br>
<strong></strong> </div><span class="erm-anchor" id="ref-rec-un-9"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Область будет скрыта <em>для всех</em>, <em>кроме</em> 
указанного игрока. Проверки на корректность номера игрока нет, т.е. игра обрабатывает значения вроде ±5678765 
без ошибок (результат - закрытый участок для всех игроков 0..7).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-i"></span><span class="erm-anchor" id="command-i-x-y-level-type-subtype-refresh"></span><span class="erm-anchor" id="command-i-x-y-level-type-subtype-viewtype-viewsubtype-terrain-refresh"></span>I#1/#2/#3/#4/#5/#6</strong></span><br>
Поместить объект.
</div><pre>        #1 – X
        #2 – Y
        #3 – L (уровень)
        #4 – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип объекта</a>
        #5 – <a href="../../tables/objects/#ref-form-objects" data-context="true">подтип объекта</a>
        #6 – обновить?
	1 – да (по умолчанию)
	0 – нет</pre>
<div class="erm-paragraph">Эта команда очень полезна, но есть несколько ограничений. Некоторые объекты нельзя поставить этой командой, 
т.к. они нуждаются в предварительной настройке в редакторе, а некоторые вообще не будут работать и могут вызвать нестабильность 
игры.<br>
<em>Дополнительный синтаксис:</em><br>
<span class="erm-tone-red"><strong>I#1/#2/#3/#4/#5/#6/#7/#8/#9</strong></span>
</div><pre>        #1…#5 – см. выше
        #6 – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип объекта 2</a>
        #7 – <a href="../../tables/objects/#ref-form-objects" data-context="true">подтип объекта 2</a>
        #8 – <a href="../../tables/terrain/#ref-form-terrain" data-context="true">почва</a>
        #9 – обновить?
	1 – да (по умолчанию)
	0 – нет</pre>
<div class="erm-paragraph">Это означает, что появится объект/подтип, который будет выглядеть как 
объект2/подтип2. Используйте эту команду с указанием нужной почвы для помещения 
объектов, сделанных под почву.<br>
<u>

</u>
</div><span class="erm-anchor" id="ref-rec-un-10"></span><details class="erm-comment"><summary>Дополнительно о команде UN:I (<span class="erm-anchor" id="ref-rec-un-show10"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Перед тем, как проверять, ставится ли на карту объект при помощи ERM, нужно удостовериться, что его def-файл есть в Lod'е, а объект прописан в <em class="erm-legacy-file">zobjcts.txt</em>. 
Впрочем, для теста можно просто поменять тип и подтип какому-нибудь объекту.
Тип для ВСЕХ объектов может лежать в пределах 4 байт (-2147483648…+2147483647), а подтип - в пределах 2 байт (-32768…32767). Установка подсказок работает нормально на отрицательных подтипах. 
Если превысить значение подтипа, то возможны два варианта:
Если поставить инструкцией, то на карте появится случайный монстр в случайном кол-ве. :-)
Если пост-инструкцией или позднее - то случайный монстр из редактора карт (тип=71, подтип=0, со входом, активен, но не монстр - ерунда, в общем).<br>
<br>
Список объектов, которые <em>будут</em> работать корректно без дополнительных настроек. Многие 
могут быть настроены специальным ресивером объекта, при желании.
<br><br>
<strong>·</strong> Артефакт (тип=5, подтип=<a href="../../tables/artifacts/#ref-form-a1" data-context="true">0..143</a>) - ресивер <a href="../ar/#ref-rec-ar">!!AR</a><br>
<strong>·</strong> Лодка (тип=8, подтип=0..2)<br>
<strong>·</strong> Вуаль Тьмы (тип=15, подтип = 0)<br>
<strong>·</strong> Жилище существ (тип=17, подтип=<a href="../../tables/creature-dwellings/#ref-form-creaturedwellings" data-context="true">0..88</a> и 20, подтип=0..1) - ресивер 
<a href="../dw/#ref-rec-dw">
!!DW</a><br>
<strong>·</strong> <span class="erm-anchor" id="ref-rec-un-gar"></span><a href="./#ref-rec-un">Гарнизон</a> (тип=33, подтип=0 (обычный), =1  (антимагический), =2 (перпендикулярный), =3 (антимагический перпендикулярный) - ресивер <a href="../gr/#ref-rec-gr">!!GR</a></div><span class="erm-anchor" id="ref-rec-un-47"></span><details class="erm-comment"><summary>см. выше</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table width="100%"><tr>
	<td class="erm-align-center" width="120"><img src="../../../../assets/erm/f29b7b602dd54547.png" alt="avcgar10" loading="lazy" decoding="async" class="erm-figure"></td>
	<td width="90%">Подтипов 2 и 3 нет в стандартной игре. Для помещения будет верно:<br>
	 <strong>·</strong> Обычный - 33/0<br>
	 <strong>·</strong> Обычный перпендикулярный - 219/0<br>
	 <strong>·</strong> Антимагический - 33/1<br>
	 <strong>·</strong> Антимагический перпендикулярный - 219/1</td></tr>
	<tr><td colspan="2">Все гарнизоны помещаются нормально. Тип 219 неактивен при помещении, однако достаточно сменить тип на 33 (см. <a href="../ob/#ref-rec-ob-t">OB:T</a>) и всё будет в порядке.<br>
	Сама игра меняет тип перпендикулярным гарнизонам при загрузке карты, а тип 219 ей нужен для инициализации.<br>
	Гарнизоны с подтипом &gt; 1 воспринимаются как обычные.</td></tr>
</table></div><br></div></details>
<strong>·</strong> Грааль (тип=36, подтип=0) - при помещении нескольких Граалей, учитывается только 
последний помещённый, таким методом можно обойти ограничение в 9 клеток от края карты.<br>
<strong>·</strong> Маяк (тип=42, подтип=0..7 для <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвета</a> игрока или -1 для нейтрального) - ресивер
<a href="../mn/#ref-rec-mn">!!MN</a> (как и для шахт)<br>
<strong>·</strong> Башня Марлетто (тип=23, подтип=0)<br>
<strong>·</strong> Двусторонний монолит (тип=45, подтип=<a href="../../tables/two-way-monoliths/#ref-form-two-way-monolith" data-context="true">0..7</a>)<br>
<strong>·</strong> Шахта (тип=53, подтип=<a href="../../tables/mines/#ref-form-mines" data-context="true">0..7</a>) - ресивер <a href="../mn/#ref-rec-mn">!!MN</a><br>
<strong>·</strong> Монстр (тип=54, подтип=<a href="../../tables/creatures/#ref-form-creature" data-context="true">0..196</a>) - ресивер <a href="../mo/#ref-rec-mo">!!MO</a><br>
<strong>·</strong> Океанская бутыль (тип=59, подтип=0) - ресивер <a href="../sg/#ref-rec-sg">!!SG</a> (как для знаков)<br>
<strong>·</strong> Обсерватория красного дерева (тип=58, подтип=0)<br>
<strong>·</strong> Ресурс (тип=79, подтип=0..6) - ресивер <a href="../ar/#ref-rec-ar">!!AR</a> (как для артефактов)<br>
<strong>·</strong> Святилище (тип=80, подтип=0)<br>
<strong>·</strong> Верфь (тип=87, подтип=0..7 по <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвету</a> игрока или -1 для нейтрального) - ресивер <a href="../sy/#ref-rec-sy">!!SY</a><br>
<strong>·</strong> Знак (тип=91, подтип=0) - ресивер <a href="../sg/#ref-rec-sg">!!SG</a><br>
<strong>·</strong> Свиток заклинания (тип=93, подтип=<a href="../../tables/spells/#ref-form-spell" data-context="true">0..69</a>) - ресивер <a href="../ar/#ref-rec-ar">!!AR</a><br>
<strong>·</strong> Замок (тип=98, подтип=0..8) - ресивер <a href="../ca/#ref-rec-ca">!!CA</a><br>
<strong>·</strong> Университет (тип=104, подтип=0) - ресивер <a href="../ur/#ref-rec-ur">!!UR</a><br>
<strong>·</strong> Хижина ведьмы (тип=113, подтип=0..27) - ресивер <a href="../wh/#ref-rec-wh">!!WH</a><br>
<br>
Эти объекты потребуют дополнительной настройки через определённый ресивер для корректной работы:<br>
<br>
<strong>·</strong> Костёр покинутого лагеря (тип=12, подтип=0) - ресивер <a href="../fr/#ref-rec-fr">!!FR</a> (при помещении ресурс не задан)<br>
<strong>·</strong> Лебединое озеро (тип=14, подтип=0) - ресивер <a href="../sw/#ref-rec-sw">!!SW</a> (имеет нулевой номер при помещении)<br>
<strong>·</strong> Скелет (труп) (тип=22, подтип=0) - ресивер <a href="../sk/#ref-rec-sk">!!SK</a> (при помещении не имеет артефакта?)<br>
<strong>·</strong> Событие (тип=26, подтип=0) - ресивер <a href="../le/#ref-rec-le">!!LE</a> - если событие помещено командой UN:I, 
оно будет разрешено для всех игроков и НЕ будет отменено после посещения.<br>
<strong>·</strong> Навес (погреб) (тип=39, подтип=0) - ресивер <a href="../ln/#ref-rec-ln">!!LN</a> (при помещении не имеет ресурса)<br>
<strong>·</strong> Камень знаний (тип=100, подтип=0) - ресивер <a href="../st/#ref-rec-st">!!ST</a> (имеет нулевой номер при помещении)<br>
<strong>·</strong> Святыня магии (тип=88..90, подтип=0) - ресивер <a href="../sr/#ref-rec-sr">!!SR</a> (при помещении учат заклинанию "Вызов корабля")<br>
<strong>·</strong> Магический источник (тип=48, подтип=0) - ресивер <a href="../sp/#ref-rec-sp">!!SP</a> (считается посещённым при помещении)<br>
<strong>·</strong> Мистический сад (тип=55, подтип=0) - ресивер <a href="../gd/#ref-rec-gd">!!GD</a> (считается посещённым при помещении)<br>
<strong>·</strong> Обелиск (тип=57, подтип=0) - ресивер <a href="../mt/#ref-rec-mt">!!MT</a> (имеет нулевой номер при помещении)<br>
<strong>·</strong> Пирамида (тип=63, подтип=0)  - ресивер <a href="../pm/#ref-rec-pm">!!PM</a> (считается посещённым при помещении)<br>
<strong>·</strong> Учёный (тип=81, подтип=0) - ресивер <a href="../sc/#ref-rec-sc">!!SC</a> (при помещении учит +1 атаки)<br>
<strong>·</strong> Потерпевший кораблекрушение (тип = 86, подтип=0) (используйте <a href="../ob/#ref-rec-ob-c">OB:C</a> для настройки артефакта, при помещении у него Книга Заклинаний)<br>
<strong>·</strong> Сундук сокровищ (тип=101, подтип=0) - ресивер <a href="../ch/#ref-rec-ch">!!CH</a> (значение CH:B0 при помещении)<br>
<strong>·</strong> Древо знаний (тип=102, подтип=0) - ресивер <a href="../kt/#ref-rec-kt">!!KT</a> (учит бесплатно, имеет нулевой номер при помещении)<br>
<strong>·</strong> Телега (тип=105, подтип=0) - ресивер <a href="../wg/#ref-rec-wg">!!WG</a> (при помещении находка не задана)<br>
<strong>·</strong> Гробница воина (тип=108, подтип=0) - ресивер <a href="../wt/#ref-rec-wt">!!WT</a> (при помещении артефакт не задан)<br>
<strong>·</strong> Водяная мельница (тип=109, подтип=0) - ресивер <a href="../wm/#ref-rec-wm">!!WM</a> (при помещении не имеет золота)<br>
<strong>·</strong> Ветряная мельница (тип=112, подтип=0) - ресивер <a href="../ml/#ref-rec-ml">!!ML</a> (при помещении не имеет ресурса)
<div class="erm-paragraph">Эти объекты НЕ будут работать корректно и могут вызвать нестабильность игры, вылет карты или другие проблемы при помещении:</div>
<div class="erm-paragraph"><strong>·</strong> Пустышка (тип = 1) - игра вылетит при попытке помещения объекта<br>
<strong>·</strong> Якорь (тип = 3) - ресивер <a href="../pa/#ref-rec-pa">!!PA</a> (игра вылетит при попытке помещения объекта)<br>
<strong>·</strong> Ящик Пандоры (тип=6) - игра вылетит при посещении объекта<br>
<strong>·</strong> Чёрный рынок (тип=7) - игра вылетит при посещении объекта<br>
<strong>·</strong> Герой (тип=34) - используйте команду <a href="../he/#ref-rec-he-p">HE:P</a> для помещения героя на карту<br>
<strong>·</strong> Тип 50 - объект изначально отсутствует в игре<br>
<strong>·</strong> Тюрьма (тип=62) - видимых проблем не создаёт, при посещении объявляется, что герой был освобождён королём, и тюрьма исчезает.<br>
<strong>·</strong> Хижина провидца (тип=83) - игра вылетает при наведении мышью на объект или при посещении, НО вы можете корректно поместить объект (см. ниже)<br>
<strong>·</strong> Страж прохода (тип=215)<br>
<strong>·</strong> Гарнизон (тип = 219) - гарнизон просто не работает ( о причине)</div>
<div class="erm-paragraph">Некоторые объекты имеют разные модели для разной почвы. Для их помещения используйте синтаксис…
<pre class="erm-example"><code class="language-erm">!!UN:Ix/y/l/T/S/T/S/tr;</code></pre> где <strong>x/y/l</strong> - координаты, <strong>T</strong> - тип 
объекта, <strong>S</strong> - подтип, <strong>tr</strong> - <a href="../../tables/terrain/#ref-form-terrain" data-context="true">почва</a>, на которой находится нужный объект.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:I25/25/0/12/0/12/0/0; - поместить обычный костёр
!!UN:I26/25/0/12/0/12/0/3; - поместить костёр с текстурами снега
!!UN:I24/25/0/12/0/12/0/1; - поместить костёр с текстурами песка</code></pre></div>
<div class="erm-paragraph"><strong>·</strong> Костёр покинутого лагеря (тип = 12) - имеет вариации для песка, снега, подземелья, лавы.<br>
<strong>·</strong> Лебединое озеро (тип = 14) - имеет вариации для грязи, травы и болота<br>
<strong>·</strong> Фонтан удачи (тип = 30) - имеет заснеженную вариацию<br>
<strong>·</strong> Форт на холме (тип = 35) - имеет заснеженную вариацию<br>
<strong>·</strong> Волшебный колодец (тип = 49) - имеет заснеженную вариацию<br>
<strong>·</strong> Шахты (тип = 53) - имеют вариации для разных почв<br>
<strong>·</strong> Обелиск (тип = 57) - имеет вариации цвета для каждой почвы<br>
<strong>·</strong> Обсерватория красного дерева (тип = 58) - имеет снежную вариацию<br>
<strong>·</strong> Хижина провидца (тип = 83, подтип 0-2) - с помощью данного синтаксиса вы можете поместить её, но она будет заброшена провидцем, почва не влияет на внешний вид.<br>
<strong>·</strong> Склеп (тип = 84) - имеет вариацию со снегом (по умолчанию) и без<br>
<strong>·</strong> Знак (тип = 91) - имеет вариации для разных почв<br>
<strong>·</strong> Рынок (тип = 99) - имеет вариации для грязи, скал<br>
<strong>·</strong> Водяная мельница (тип = 109) - имеет вариации для травы и для снега (по умолчанию)<br>
<strong>·</strong> Ветряная мельница (тип = 112) - имеет вариации для травы (по умолчанию) и для снега</div></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-j"></span>J#<br>
J0/#/$</strong></span><br>
Запретить заклинание.
</div><pre>        # – <a href="../../tables/spells/#ref-form-spell" data-context="true">номер заклинания</a> (0..69)
        $ – разрешить (0) или запретить (1)</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-12"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show12"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Этот запрет работает только для гильдий магов и пирамид, но вы можете проверить значение, установленное здесь, для любого ERM-скрипта. 
Так как магические гильдии и пирамиды генерируют заклинание в начале карты (перед полной загрузкой), мы советуем использовать эту команду как инструкцию.<br>
Для Святынь магии запрет не работает, т.к. используются другие внутренние механизмы. 
Однако вы можете изменить заклинание Святыни проверкой через ресивер <a href="../sr/#ref-rec-sr">!!SR</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j1"></span>J1/$1/?$2</strong></span><br>
Установить/получить ограничение уровнем и опытом.<br>
         $1 – уровень ограничен $1 (установить/проверить/получить)<br>
         $2 – опыт для этого <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">уровня</a> (только получить)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-13"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show13"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Опыт автоматически устанавливается для этого уровня.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J1/35/?y10;
Здесь мы установим потолок в 35 уровней и запомним число опыта до 35го уровня в y10.

!!UN:J1/?y1/d J1/30/?y2 J1/y1/d;
Найдём кол-во опыта, которое будет при получении 30 уровня, не изменяя ограничения на уровень и опыт
(т.е. мы можем динамически находить нужные числа, не прибегая к таблице)</code></pre>
<div class="erm-paragraph">Если вам необходимо убрать в игре сообщение об ограничении опыта, используйте следующий код:
<pre class="erm-example"><code class="language-erm">; отключить сообщение об ограничении опыта
; © Berserker
!!UN:C5125902/4/34281 C5125907/1/144;</code></pre></div>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j2"></span>J2/$</strong></span><br>
Установить/проверить/получить сложность, выбранную игроком (0..4)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j3"></span><span class="erm-anchor" id="command-j3-file-j4-j5"></span>J3</strong></span><br>
Эта команда позволяет вам установить путь к файлу, содержащему настройки 
WoG'ификации.<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-un-14"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-un-show14"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:J3/^МойФайлНастроек^;</code></pre>
Путь может содержать папку или абсолютный путь, как эти:<br>
          <span class="erm-tone-red erm-inline-code">^МоиОпции.xxx^</span> - файл в папке героев<br>
          <span class="erm-tone-red erm-inline-code">^maps\опции.yyy^</span> - файл в папке <em class="erm-legacy-file">Maps</em><br>
          <span class="erm-tone-red erm-inline-code">^C:\xxx.yyy^</span> - файл на диске <em class="erm-legacy-file">C:</em></div></details>
<div class="erm-paragraph"><em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>J3/^:clear:^</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Отключает все WoG-опции и устанавливает игровое правило "Использование правил, отмеченных ниже".
<pre class="erm-example"><code class="language-erm">!#UN:J3/^:clear:^;</code></pre>
</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j4"></span>J4/$</strong></span><br>
Установить/проверить/получить радиус «раздумий» ИИ<br>
         $ = 32000 в Дыхании Смерти по 
умолчанию<br>
            = 4096 – 
текущее в WoG<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-15"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show15"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Это не кол-во квадратов, анализируемых ИИ. Это общий радиус ИИ, основанный на его очках хода и почве. 
Для травы, один квадрат тратит 100 очков. Значение не сохраняется при сохранении игры. 
Если значение слишком мало, герой ИИ будет просто стоять на месте, не двигаясь вообще.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j5"></span>J5/$</strong></span><br>
Разрешить/запретить «автосохранение»<br>
         $ = 1 – разрешить<br>
         $ = 0 – запретить<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-16"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show16"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Статус "запретить" не сохраняется в файле игры, так 
что если вам нужно восстановить отмену, поместите эту команду после триггера 
<a href="../../triggers/gm/#ref-tr-gm">!?GM0</a>. В большинстве случаев мы рекомендуем не отключать автосохранение, так как 
оно может стать точкой восстановления игры, если что-либо пойдет не так.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j6"></span><span class="erm-anchor" id="command-j6-class-artifact-j7-slot-artifact"></span>J6/#/$</strong></span><br>
Генерировать случайный артефакт определённого уровня.
</div><pre>        # – установить класс
	= -1 – случайный
	= 1 – внеклассовый (Грааль и WoG-артефакты)
	= 2 – сокровище
	= 4 – ценный
	= 8 – важный
	= 16 – реликт
        $ – получить/проверить номер артефакта.</pre>
<u></u><span class="erm-anchor" id="ref-rec-un-17"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show17"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Функция генерирует только разрешённые артефакты. 
Артефакты 1го класса включают в себя Грааль, Книгу заклинаний, Свиток заклинания и все боевые машины.<br>
Вы можете генерировать артефакт из нескольких классов, например 18 = реликты и сокровища. 
Сгенерированные артефакты в одном и том же триггере НЕ повторятся.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J6/16/?v10; - получить случайный реликт в v10.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j7"></span>J7/#/$</strong></span><br>
Установить/проверить/получить артефакт, продаваемый у торговца артефактами.<br>
         # – номер слота (0..6)<br>
         $ – номер <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакта</a> в слоте<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-18"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show18"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете установить, получить или проверить артефакт («-1» значит отсутствие артефакта).<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:J7/3/?v10; - получить артефакт в слоте 3
!!UN:J7/v5/v20; - установить артефакт v20 в слот v5</code></pre>
Данная команда не работает для Чёрного рынка. Для этого вам придётся прибегнуть к использованию UN:C…
<pre class="erm-example"><code class="language-erm">; управлять ценами на Чёрных рынках (1..13)
; © feanor
!!UN:C6202647/4/13; [5 - стандарт, 13 - номинал]
!!UN:C5392593/1/13; [для AI]</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j8"></span><span class="erm-anchor" id="command-j8-location-string-j9-location-z-j10"></span>J8/$1/$2<br>
J8/$1/^Текст^</strong></span><br>
Команда, проверяющая существование внешних файлов<br>
         $1 – 
</div><span class="erm-anchor" id="ref-rec-un-19"></span><details class="erm-comment erm-inline-comment"><summary>место поиска</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-un-t0"></span><pre class="erm-margin-top-zero">	0 – в папке героев
	1 – в <em class="erm-legacy-file">Data</em>
	2 – в <em class="erm-legacy-file">Maps</em>
	3 – в <em class="erm-legacy-file">Random maps</em>
	4 – в <em class="erm-legacy-file">Games</em>
	5 – в <em class="erm-legacy-file">Data/S</em>
	6 – в <em class="erm-legacy-file">Data/P</em>
	7 – в <em class="erm-legacy-file">Data/ZVS/LIB1.res</em>
	8 – в <em class="erm-legacy-file">Data/ZVS/CMP.res</em>
	9 – в <em class="erm-legacy-file">ERM_HELP</em>
	10 – полный путь, указанный в <em>z</em>-переменной либо в ^…^</pre></div></details>
<div>         $2 – номер <em>z</em>-переменной или ^…^ с именем файла.<br>
Флаг 1 установится на истину, если файл существует, иначе - на ложь.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j9"></span>J9/$1/$2</strong></span><br>
Команда копирует путь к папке героев<br>
         $1 – место назначения (см. <a href="./#ref-rec-un-j8">UN:J8</a>)<br>
         $2 – номер <em>z</em>-переменной, куда его записать.<br>
Пример: скопируем путь в z10. Пусть Герои у нас установлены в <em class="erm-legacy-file">C:\HOMM\WOG</em>, команда <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:J9/2/10;</strong><br>
Получаем в z10 следующий текст:
<pre class="erm-example"><code class="language-erm">C:\HOMM\WOG</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j10"></span>J10</strong></span><br>
Занести переменные в <em class="erm-legacy-file">WOGERMLOG.TXT</em><br>
Эту команду можно использовать в любое время (записать все ненулевые переменные в файл)</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-j11"></span><span class="erm-anchor" id="command-j11-j13-k1-k2-m"></span>J11/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Установить/проверить/получить поведение мыши при клике <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> на вражеском стеке в бою.<br>
       $ = 0 – окно остаётся на экране (WoG-style).<br>
       $ = 1 – окно закрывается при отпускании кнопки мыши (SoD-style)<br>
Информация о команде сохраняется в игре.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-j13"></span><span class="erm-tone-red"><strong>J13/$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Обнуление командиров (в зависимости от текущего состояния <a href="./#ref-rec-un-p2">WoG-опций</a> 3 и 6).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-k"></span>K#/$</strong></span><br>
Установить параметры «Новой недели»<br>
K1/$ – запретить ($ = 1) все «Неделя …» (монстров/бесов) или разрешить ($ = 0)<br>
K2/$ – установить сообщение при наступлении новой недели в текстовую переменную $<br>
</div><span class="erm-anchor" id="ref-rec-un-48"></span><details class="erm-comment"><summary><u><strong>Комментарий (<span class="erm-anchor" id="ref-rec-un-show48"></span><strong class="erm-toggle-label">показать</strong>)</strong></u></summary><div class="erm-comment-body">
Эта команда НЕ отменяет появление недели/месяца Бесов, если в Инферно построен Грааль. Однако, это можно обойти, применив следующий код:
<pre class="erm-example"><code class="language-erm">; Убираем бонус Грааля Инферно
!!UN:C5015000/1/10; (в оригинале = 3)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-l"></span><span class="erm-anchor" id="command-l-x-y-level-time-l-player-obelisk"></span>L#1/#2/#3/#4</strong></span><br>
Переместить взгляд на позицию<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L<br>
         #4 – время ожидания (1000 = 1 
секунда)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-20"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show20"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Пример 
	использования команды - обычный Глаз Мага, открывающий карту, 
но данная команда лишь переносит взгляд. Также, если вы используете эту команду 
в триггере объекта, имеющего стандартные, не ERM функции, может открыться окно 
обмена между героем и его фантомным клоном. Во избежание этого отключайте 
свойства объекта командой <a href="../ob/#ref-rec-ob-s">
OB:S</a>, и после выполнения этого ресивера включайте обратно (если нужно).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-l1"></span>L#1/#2/$</strong></span><br>
Установить/проверить/получить посещён ли обелиск?
</div><pre>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">номер игрока</a> (0..7)
	-2 = для всех
	-1 = для текущего
        #2 – номер обелиска (0..47; -1 = все)
        $ – обелиск посещён (1) или нет (0)</pre>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../mt/#ref-rec-mt">!!MT</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-m"></span>M#[/$]</strong></span><br>
Установить параметры «Месяц …»<br>
M0 – обычный, неизменённый месяц<br>
M1 – запретить месяца монстров *2 и /2<br>
M2/$ – установить месяц
<a href="../../tables/creatures/#ref-form-creature" data-context="true">монстра $</a>*2<br>
M3 – установить месяц чумы (все существа /2)<br>
<span class="erm-anchor" id="ref-rec-un-bold"></span><em class="erm-strong">Замечание:</em> месяц Беса, если в Инферно построен Грааль, эта команда НЕ отменяет (но есть иной выход — см. <a href="./#ref-rec-un-k">здесь</a>).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-n"></span>N…</strong></span><br>
Узнать название:<br>
<span class="erm-tone-red"><strong>N0/z#/$</strong></span> – имя <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакта</a> ($ = номер)<br>
<span class="erm-tone-red"><strong>N1/z#/$</strong></span> – имя <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинания</a> ($ = номер)<br>
<span class="erm-tone-red"><strong>N2/z#/$1/$2</strong></span> 
– <a href="../../tables/buildings/#ref-form-buldings" data-context="true">имя здания</a> ($2) в городе $1 (0..8)<br>
<span class="erm-tone-red"><strong>N3/z#/$1/$2</strong></span> 
– имя <a href="../../tables/creatures/#ref-form-creature" data-context="true">монстра</a> ($1) (одиночного: $2=0, 
нескольких: $2 = 1)<br>
<span class="erm-tone-red"><strong>N4/z#/$</strong></span> – имя <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">вторичного навыка</a> ($ = номер)<br>
Эта команда позволяет вам получить имя артефакта, заклинания, строения, монстра 
или вторичного навыка по его номеру и занести его в <em>z</em>-переменную для дальнейшего 
использования в сообщениях.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-un-21"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-un-show21"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:N0/z100/5;
!#UN:N1/z101/6;
!#UN:N2/102/7/1;
!#UN:N3/103/8/0;
!#UN:N3/104/8/1;
!#IF:M^=%Z100=%Z101=%Z102=%Z103=%Z104=^;</code></pre></div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>N5/#1/#2/#3/#4</strong></span><br>
Записать <em>z</em>-переменную в общую секцию INI-файла:
</div><pre>        #1 – номер <em>z</em>-переменной для записи
        #2 – номер опции (любое положительное значение)
        #3 – опциональный параметр - номер <em>z</em>-переменной для записи в пользовательскую секцию
        #4 – опциональный параметр - номер <em>z</em>-переменной, хранящей имя файла (без части ".INI"), можно с абсолютным путём.
<em>Примечание:</em> если вы используете параметр #4, вы должны использовать параметр #3.</pre>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>N6/#1/#2//#3/#4</strong></span><br>
Прочитать <em>z</em>-переменную из общей секции INI-файла:
</div><pre>        #1 – номер <em>z</em>-переменной для сохранения текста
        #2 – номер опции (любое положительное значение)
        #3 – опциональный параметр - номер <em>z</em>-переменной для использования пользовательской секции вместо общей.
        #4 – опциональный параметр - номер <em>z</em>-переменной, хранящей имя файла (без части ".INI"), можно с абсолютным путём.
<em>Примечание:</em> если вы используете параметр #4, вы должны использовать параметр #3.</pre>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-un-22"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show22"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Вы можете сохранять и загружать глобальные или местные <em>z</em>-переменные. Номер опции должен быть уникален для процедуры сохранения 
или загрузки (один номер опции на <em>z</em>-переменную). Так, если вы сохранили 
<em>z</em>-переменную как опцию 123456, вы можете загрузить сохранённое значение в любую 
другую <em>z</em>-переменную, используя ту же опцию 123456.<br>
Значение не сохраняется при сохранении игры, но записывается во внешнем INI 
файле (<em class="erm-legacy-file">wog,ini</em>, если параметр 4 опущен). Вы можете использовать эту команду без 
проблем как инструкцию. Так, для записи переменной z-1, названной 
"Главная_переменная", в файл <em class="erm-legacy-file">Мой.var</em> в папку <em class="erm-legacy-file">GAMES</em> (секция "MyLocalSettings") 
с опцией 4, используйте:
<pre class="erm-example"><code class="language-erm">!!VRy1:S4;
!!VRz-1:S^Главная_переменная^;
!!VRz-2:S^MyLocalSettings^;
!!VRz-3:S^GAMES\My.var^;
!!UN:N5/z-1/y1/-2/-3;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-o"></span><span class="erm-anchor" id="command-o-x-y-level-hint-refresh"></span>O$1/$2/$3</strong></span><br>
Удалить объект
</div><pre>        $1 – X
        $2 – Y
        $3 – L (уровень)
<em>Дополнительный синтаксис:</em>
<span class="erm-tone-red"><strong>O$1/$2/$3[/#4/#5]</strong></span>
Удалить объект в X/Y/L и описание (если было установлено)
        #4 – удалить описание?
	1 – да
	0 – нет (по умолчанию)
        #5 - обновить?
	1 – да (по умолчанию)
	0 – нет</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-23"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show23"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
В обоих случаях X/Y/L означает правый нижний угол объекта.<br>
Существует несколько таблиц для каждого объекта на карте. И перекрёстные ссылки не всегда существуют. 
Обычно Герои используют поиск по координатам. Когда вы удаляете объект, некоторые таблицы остаются (храня информацию об удалённом объекте). 
Если вы затем добавляете новый объект в то же место, новая информация будет добавлена в таблицу. 
Но затем, когда игре понадобится получить информацию об этом новом объекте, она начнёт поиск в таблице по позиции. 
Очевидно, что сначала будет найдена информация о старом (удалённом) объекте.<br>
Я рекомендую настроить старый объект, удалить его, поместить новый и снова настроить.<br>
Помните, что эта проблем возможна для объектов одного типа и не в каждом случае.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-p"></span><span class="erm-anchor" id="command-p-p-option"></span>P$</strong></span><br>
Установить поведение жилищ 8го уровня<br>
         $ = 1 – жилище 8го уровня (после найма не работает)<br>
         $ = 0 – как обычное<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-24"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show24"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Поведение как у обычного жилища означает, что жилища 
8го уровня будут функционировать как любое другое жилище в игре, т.е. вы должны посещать жилище для найма существ каждую неделю, 
и если как 8го уровня, то они только добавятся к соответствующим монстрам восьмого уровня в соответствующем замке при соответственном жилище 7го уровня.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-un-p2"></span><span class="erm-tone-red"><strong>P#/$</strong></span><br>
Установка WoG-опций<br>
         # - номер опции<br>
         $ - статус опции<br>
Некоторые опции:<br>
                   # = 0 – поведение жилищ 8го уровня (см. выше)<br>
                   # = 1 – опыт стрелковых башен: как в SoD (1) или как в WoG (0)<br>
                   # = 2 – можно оставлять монстров на карте (1 – нельзя, 0 – можно)<br>
                   # = 3 – командиры: 1 – запретить, 0 – разрешить.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-un-25"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show25"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Сейчас, если карта имеет внутренние скрипты и не имеет команды <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/#</strong>, 
карта запускается в условиях WoG 3.56 (без командиров и т.п.). Но если карта имеет данную команду (не важно, 
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> или <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/1</strong>), карта принимается как новая и запускается в условиях WoG 3.57 
(так, все внутренние особенности WoG устанавливаются из файла настроек WoG'ификации или командами UN:P). 
Сейчас исправлена проблема с невозможностью включить командиров инструкцией <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> при использовании в триггере таймера.</div></details>
<div>                   # = 4 – разрушение замков: запретить (1) или разрешить (0)<br>
                   # = 5 – WoGифицировать: нет (0), все карты формата WoG (1), все карты любого формата (2)<br>
                   # = 6 – герои начинают с командирами или нет (0 – с, 1 – без (должен быть нанят)</div>
<u></u><span class="erm-anchor" id="ref-rec-un-26"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show26"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Чтобы командир нанимался в городе за 100 золотых, вместо автоматического получения героем в начале игры, 
нужно использовать <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P6/1</strong> перед командой <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P3/0</strong>.</div></details>
<div>                   # = 7 – жилища копят существ: 0 – нет, 1 – да<br>
                   # = 8 – жилища копят охранников: 0 – нет, 1 – да<br>
                   # = 9 – создание Сильванских Кентавров: 1 - разрешено, 0 - нет</div>
<u></u><span class="erm-anchor" id="ref-rec-un-27"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show27"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если опция включена, Сильванские кентавры могут быть бесплатно созданы с помощью нажатия <span class="erm-key">Ctrl</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> по отряду Капитанов-Кентавров или Благородных Эльфов в ОКНЕ ГЕРОЯ (!). 
Равное число кентавров и эльфов будет заменено равным кол-вом Сильванских кентавров.<br>
Т.е. 10 Благородных Эльфов плюс 10 Капитанов-Кентавров = 10 Сильванских кентавров.<br>
<em class="erm-strong">Замечание:</em> Сильванские кентавры не сохраняют никакого опыта от имеющегося у кентавров или эльфов перед слиянием.</div></details>
<div>                   # = 10 – оставленные отряды будут присоединятся обратно (1) или нет (0)</div>
<u></u><span class="erm-anchor" id="ref-rec-un-28"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show28"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Если активно, отряды, оставленные правым кликом, присоединятся обратно к герою, если он нападет на них.<br>
<em class="erm-strong">Замечание:</em> весь опыт отряда будет потерян при оставлении существ.</div></details>
<div class="erm-paragraph">
WoGифицированные и не WoGифицированные WoG карты без скриптов будут использовать 
опции WoG выше.<br>
Не-WoGифицированные WoG-карты со скриптами будут иметь отключенных командиров по 
умолчанию. Для их включения вы должны использовать <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:P3/0</strong> после начала карты. 
Установка этой команды инструкцией - <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#UN</span>:P3/0</strong> - НЕ разрешит командиров на этой карте.<br>
Для установки командиров-наёмников за 1000 золота используйте команду <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P6/1</strong> перед командой <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">UN</span>:P3/0</strong>. Вы можете вставить обе команды в одну строку:
<pre class="erm-example"><code class="language-erm">!!UN:P6/1 P3/0;</code></pre><br>
                   # = 900 – опыт стеков: 0 – выключен, 1 – включен<br>
                   # = 901 – система опыта стеков: <br>
                       0 – каждое существо получает полное кол-во опыта;<br>
                       1 – высокое деление: 
существа малого уровня получают больше опыта, чем существа большого уровня; <br>
                       2 - низкое деление: существа высокого уровня получают больше опыта, чем существа 
малого уровня; <br>
                       3 - делится поровну между всеми существами<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-29"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show29"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Сейчас система опыта по умолчанию 0. Другие опции были использованы ранее, для нахождения лучшей для использования. Хоть и 
отвергнутые, они остались в игре, так что любой может поэкспериментировать с 
данной опцией. Если вы решили использовать альтернативную систему, возможно, 
понадобится также установить более высокий множитель командой <a href="../ea/#ref-rec-ea-h">EA:H</a> для игроков-людей, и 
<a href="../ea/#ref-rec-ea-a">EA:A</a> (также, возможно,
<a href="../ea/#ref-rec-ea-s">EA:S</a> и/или <a href="../ea/#ref-rec-ea-t">EA:T</a>) для 
игроков-компьютеров, т.к. опыт начнёт делиться между всеми существами в бою, и 
будет существенно меньше.</div></details>
<div class="erm-paragraph">                   
# = 902 – можно выбрасывать артефакты на карту: 0 – нет, 1 – да<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-30"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show30"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете использовать старую опцию 2 и новую 902 вместе:
<div class="table-wrap erm-reference-table"><table width="45%">
<tr>
	<td colspan="2">
	<div class="erm-align-center erm-paragraph">Номер опции</div></td>
	<td class="erm-align-center" rowspan="2" width="83%">Эффект</td>
</tr>
<tr>
	<td colspan="2">
	<div class="erm-align-center erm-paragraph">Статус</div></td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">
	<div class="erm-align-center erm-paragraph">2</div></td>
	<td class="erm-align-center" width="9%">902</td>
	<td class="erm-align-center" width="83%"> </td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">0</td>
	<td class="erm-align-center" width="9%">0</td>
	<td class="erm-align-center" width="83%">можно оставлять войска</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">0</td>
	<td class="erm-align-center" width="9%">1</td>
	<td class="erm-align-center" width="83%">можно оставлять войска или артефакты</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">1</td>
	<td class="erm-align-center" width="9%">0</td>
	<td class="erm-align-center" width="83%">нельзя оставлять ничего</td>
</tr>
<tr>
	<td class="erm-align-center" width="4%">1</td>
	<td class="erm-align-center" width="9%">1</td>
	<td class="erm-align-center" width="83%">можно оставлять артефакты</td>
</tr></table></div></div></details>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-cheat"></span>
                   
# = 903 – чит-коды и чит-меню: 0 – разрешить, 1 – запретить<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-31"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show31"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Отключает читы и чит-меню (если разрешены). 
Если включается чит-меню, оно будет показано, даже если отключено этой опцией, но не будет производить какого-либо эффекта.<br>
<em>Примечание</em>: хотя коды и отключены в сетевой игре, эта опция позволит предотвратить использование игроками читов при загрузке через одиночную игру.</div></details><br>
<div>                   
<span class="erm-anchor" id="ref-rec-un-p904"></span># = 904, 905 – установки появлений сообщений об ошибке. Если 1, любое сообщение 
об ошибке не будет появляться, но опция 905 в любом случае установится на 1. 
Если опция 904 = 0, сообщение будет показано, и опция 905 установится на 1. 
Более того, если сообщение отменено, выполнение скрипта не будет прекращено (в 
секции текущего триггера). Так, вы можете использовать "рискованные" команды.
<u></u><span class="erm-anchor" id="ref-rec-un-32"></span><details class="erm-comment"><summary>
Пример (<span class="erm-anchor" id="ref-rec-un-show32"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"><blockquote class="erm-note">
	<pre class="erm-example"><code class="language-erm">!?FU...
...
!!UN:P904/1 P905/0; отменить сообщение о ошибке
!!HE-1:N?v99; получить номер героя в v99
!!UN:P905/?i;
!!FU&amp;i&gt;0:E; выйти, если ошибка

Если вы используете стандартную версию..
!?FU...
...
!!HE-1:N?v99;
..ошибка появится, если герой не участвует в триггере.</code></pre></blockquote></div></details></div><br>
<div>                   
# = 906 – получение существами опыта: 0 – могут получить, 1 – не могут.<br>
<em>Примечание:</em> если вы установите эту опцию на 1, а система опыта будет 
включена, существа не будут получать опыт в битвах, но вы сможете установить 
опыт через ERM.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-q"></span><span class="erm-anchor" id="command-q-1-r"></span>Q#</strong></span><br>
Выиграть или проиграть игру для ТЕКУЩЕГО игрока<br>
         # = 0 – проиграть<br>
         # = 1 – выиграть<br>
<em>Расширенный синтаксис:</em><br>
<span class="erm-tone-red"><strong>Q#/1</strong></span><br>
Если вы используете второй фантомный параметр, победа или проигрыш игры выполняется другими функциями.<br>
Используйте в случае неработоспособности предыдущего.<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-un-33"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-un-show33"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:Q0/1; - проигрыш текущего игрока
!!UN:Q1/1; - победа текущего игрока</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-r"></span>R#</strong></span><br>
Обновить экран<br>
         # = 1 – обновить карту и экран героя (всё с правой стороны)<br>
         # = 2 – обновить строку ресурсов<br>
         # = 3 – обновить внутри окна героя. 
…</div><span class="erm-anchor" id="ref-rec-un-44"></span><details class="erm-comment"><summary>Подробнее</summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!UN</span>:R3/#;</strong> - обновить экран <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">героя #</a> (-1 – для текущего).<br>
Команда работает ТОЛЬКО пока открыто окно героя (т.е. внутри триггера <a href="../../triggers/cm/#ref-tr-cm">!?CM2</a>).<br>
Попытка использовать эту команду в другом месте вызовет вылет игры.</blockquote></div></details>
<div>         # = 4 – обновить экран города (не используйте вне экрана города!)<br>

<span class="erm-anchor" id="ref-rec-un-49"></span><details class="erm-comment"><summary><strong>Комментарий</strong> (<span class="erm-anchor" id="ref-rec-un-show49"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">К сожалению, в базовом ERM нет команды для обновления экрана встречи героев.<br>
Однако, существует готовое решение для <a href="../../compatibility/#ref-era-index">ERA</a> - команда <a href="../sn/#ref-rec-sn-era-d">SN:D</a>.</div></details></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r5"></span><span class="erm-anchor" id="command-r5-r6-r7"></span>R5/$1/$2</strong></span><br>
Установить вид курсора<br>
         $1 –
<a href="../../tables/cursors/#ref-form-mousepointers" data-context="true">тип курсора</a><br>
         $2 – подтип курсора<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-34"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show34"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Покажите любой диалог для обратного превращения курсора в стрелку. 
Если вы установили любой курсор, он будет возвращён на обычный после команды <a href="./#ref-rec-un-r7">UN:R7</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r6"></span>R6/$</strong></span><br>
Ждать<br>
         $ – время в мс (1000 = 1 секунда)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-r7"></span>R7/$1/$2<br>
R7/$1</strong></span><br>
Курсор мыши: скрытие и деактивирование<br>
         $1 – показать (0) или скрыть (1) курсор<br>
         $2 – разрешить (0) или запретить (1) изменения курсора<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-35"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show35"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Когда вы посещаете любой объект (например, рыболовный колодец), триггер <a href="../../triggers/ob/#ref-tr-ob">!?OB</a> начинает работу, курсор исчезает. Так что, если ваш скрипт достаточно длинный, вы можете настроить курсор в виде песочных часов 
вручную. Затем, чтобы вернуть курсор по умолчанию, нужно сделать что-либо следующее:<br>
         - начать новую игру<br>
         - загрузить игру<br>
         - любое сообщение (можно с ERM)<br>
         - любой расширенный диалог WoG<br>
<pre class="erm-example"><code class="language-erm">Так, для рыболовного колодца может быть так:
!!UN:R5/1/1; курсор "песочные часы"
!!UN:R7/0/1;
Затем, если вы покажете сообщение или вопрос:
!!IF:...
снова отменяем курсор:
!!UN:R5/1/1;
!!UN:R7/0/1;
в конце скрипта вы можете включить курсор:
!!UN:R7/0/0;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-s"></span>S#1/#2/#3/#4/#5</strong></span><br>
Открыть (показать) часть карты (область – круг)<br>
         #1 – X<br>
         #2 – Y<br>
         #3 – L (уровень)<br>
         #4 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
         #5 – радиус<br>
<em class="erm-strong">Замечание:</em> НЕ используйте эту команду для показа подземелья в 
одноуровневой карты (это повлечёт за собой критические ошибки в прорисовке)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-t"></span><span class="erm-anchor" id="command-t-town-tier-upgrade-monster-u-type-subtype-count"></span>T#1/#2/#3/$</strong></span><br>
Установить монстра для найма в замке<br>
         #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a> 
(0..8)<br>
         #2 – уровень (0..6)<br>
         #3 – базовый (0) или улучшенный 
(1)<br>
         $ – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-36"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show36"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Команда работает во 
	всех городах, включительно ИИ. Вы можете установить команду как инструкцию. Помните, что вы можете усилить 
"важность" существа для ИИ установкой ИИ значения командой <a href="../ma/#ref-rec-ma-i">!!MA:I</a>. 
Дополнительные ресурсы предполагаются только для жилища 7го уровня.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-u"></span><span class="erm-anchor" id="command-u-type-subtype-ordinal-vindex"></span>U#1/#2/?$</strong></span><br>
Сосчитать все объекты на карте<br>
         #1 –
<a href="../../tables/objects/#ref-form-objects" data-context="true">тип объекта</a><br>
         #2 –
<a href="../../tables/objects/#ref-form-objects" data-context="true">подтип объекта</a> (-1 – любой)<br>
         $ – кол-во объектов типа 
#1, подтипа #2 (только проверить или получить)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-46"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show46"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если вы подсчитываете города, то помните, что в начале игры счётчик не учитывает случайные города 
(т.к. они имеют <a href="../../tables/objects/#ref-form-objects" data-context="true">тип</a> 77, а не 98). Будьте внимательны.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:U54/i/?n;
В переменной n теперь хранится кол-во объектов типа 54 и подтипа i.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-un-u1"></span>U#1/#2/#3/#4</strong></span><br>
Получить координаты объекта<br>
         #1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип объекта</a><br>
         #2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">подтип объекта</a> (-1 – любой)<br>
         #3 – номер объекта (1…последний 
объект; -1 – с первого объекта, -2 – с последнего объекта)<br>
         #4 – <em>v</em>-переменная с коодинатами: v[#4]=X; v[#4+1] = Y; v[#4+2] = L<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!UN:U54/i/3/324; 
v324, v325, v326 теперь содержат координаты объекта типа 54, подтипа i и под номером 3.</code></pre>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-37"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show37"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Все объекты считаются так: слева направо, сверху вниз; поверхность, а потом подземелье.<br>
<div class="table-wrap erm-reference-table"><table class="erm-table-offset">
<tr><td>0</td><td>1</td><td>3</td><td>6</td></tr>
<tr><td>2</td><td>4</td><td>7</td></tr>
<tr><td>5</td><td>8</td></tr>
<tr><td>9</td></tr>
</table></div>
</div></details>
<u></u><br><span class="erm-anchor" id="ref-rec-un-38"></span><details class="erm-comment"><summary>Техника быстрого поиска (<span class="erm-anchor" id="ref-rec-un-show38"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если вы используете синтаксис поиска объекта 
UN:Uтип/подтип/номер/номер_переменной, вы можете установить номер на -1. Это 
означает, что поиск объекта будет вестись, основываясь на координатах 
предыдущего найденного объекта того же типа.<br>
В стандартном синтаксисе (номер = 1…) UN:U проверяет все объекты такого типа 
до нахождения искомого номера. Это долгий процесс на больших картах, особенно 
если это часто встречающийся объект.<br>
С новым синтаксисом (номер = -1) координаты возвращаются в 
v[номер_переменной]/v[номер_переменной+1]/v[номер_переменной+2], и поиск 
следующего объекта ведётся не с начала карты, а с последнего найденного. Поясняю 
- процесс идёт быстрее, но требует вашего НЕ вмешательства в переменные с 
координатами последнего найденного объекта.<br>
<u>
</u><br><span class="erm-anchor" id="ref-rec-un-39"></span><details class="erm-comment"><summary>Пример 1 (<span class="erm-anchor" id="ref-rec-un-show39"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<ul><li>Этот скрипт работает нормально
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (получить координаты шахты 1: v1/v2/v3)...
!!VRv1:S99; (изменить v1 на что-либо)
...
!!UN:U53/-1/2/1; (получить координаты шахты 2: v1/v2/v3)
...</code></pre></li>
<li>Этот скрипт работает <em>неправильно!</em> v1 была изменена
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (получить координаты шахты 1: v1/v2/v3)
...
!!VRv1:S99; (изменить v1 на что-либо)
...
!!UN:U53/-1/-1/1; (получить координаты 'следующей' шахты (2): v1/v2/v3)
...</code></pre></li>
<li>Этот скрипт работает нормально
<pre class="erm-example"><code class="language-erm">!!UN:U53/-1/1/1; (получить координаты шахты 1: v1/v2/v3)
... (v1/v2/v3 НЕ изменялись)
!!UN:U53/-1/-1/1; (получить координаты 'следующей' шахты (2): v1/v2/v3)
... (v1/v2/v3 НЕ изменялись)
!!UN:U53/-1/-1/1; (получить координаты 'следующей' шахты (3): v1/v2/v3)
...</code></pre></li>
<li>Этот скрипт работает нормально
<pre class="erm-example"><code class="language-erm">!!VRv1:S-1; (начать поиск с первого объекта на карте)
!!UN:U53/-1/-1/1; (получить координаты 'следующей' шахты (1): v1/v2/v3)
... (v1/v2/v3 НЕ изменялись)
!!UN:U53/-1/-1/1; (получить координаты 'следующей' шахты (2): v1/v2/v3)
... (v1/v2/v3 НЕ изменялись)
!!UN:U53/-1/-1/1; (получить координаты 'следующей' шахты (3): v1/v2/v3)
...</code></pre></li></ul></div></details>
<u>
</u><br><span class="erm-anchor" id="ref-rec-un-40"></span><details class="erm-comment"><summary>Пример 2 (<span class="erm-anchor" id="ref-rec-un-show40"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!#TM1:S1/999/1/1; установить таймер 1 для красного

!?TM1;
!!UN:U16/-1/?v100;
!!VRv1:S-1;
!!IF:M^Найдено %V100 банков существ. Теперь пройдемся через все:^;
!!DO123/1/v100/1:P;

!!IF:M^Пелена окутывает вас...^;
!!UN:H72/72/1/1/100; закрыть для красного

!!VRv1:S-2;
!!IF:M^Теперь в обратном порядке^;
!!DO124/1/v100/1:P;

!?FU123;
!!UN:U16/-1/-1/1;
!!UN:Sv1/v2/v3/0/3; Открыть для красного
!!UN:Lv1/v2/v3/100; Передвинуть взгляд на 100 мс

!?FU124;
!!UN:U16/-1/-2/1;

!!UN:Sv1/v2/v3/0/3; открыть для красного
!!UN:Lv1/v2/v3/100; передвинуть взгляд на 100 мс</code></pre>
Скрипт прокрутит перед вами все банки существ в обычном и обратном порядке.</div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-v"></span><span class="erm-anchor" id="command-v-1-2-3-4-5-6-7-x-1-2"></span>V?$1/?$2</strong></span><br>
Получить версию WoG и используемого ERM.<br>
         $1 – версия WoG (3.58 = 358)<br>
         $2 – версия ERM (2.81 = 281)<br>
<em class="erm-strong">Замечание:</em> для ERA версия игры = 400, версия ERM = [версия ERA] × 1000<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-un-41"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show41"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете только проверить или получить значение, но не установить.<br>
Используйте команду инструкцией для проверки на наличие у игрока нужной версии 
и затем покажите сообщение для игрока об устаревшей версии дополнения, если она такова. 
Это лучше, чем если игрок пройдёт половину карты перед тем, 
как наткнётся на некорректный для данной версии скрипт и не закончит карту.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!#UN:V?y1/?y2;
!#IF|y1&lt;358/y2&lt;280:M^Для работы этой карты нужен WoG не старее 3.58 и версией ERM не старее 2.80.
Пожалуйста, обновите свои файлы.^;</code></pre></div></details>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-un-v2"></span>
<span class="erm-tone-red"><strong>V?$1/?$2/?$3/?$4/?$5</strong></span><br>
Получить версию WoG и используемого ERM. Продвинутый синтаксис:
</div><pre>        $1 – версия WoG
        $2 – версия используемого ERM
        $3 – один или более людей в игре
	= 1 – человек один
	= 2 – больше одного
        $4 – один или более ПК в игре
	= 0 – один ПК
	= 1 – больше одного
        $5 – тип игры
	= 0 – один игрок
	= 1 – IPX
	= 2 – TCP/IP
	= 3 – Hot Seat
	= 4 – Direct Connect
	= 5 – модем
<em>Расширенный синтаксис:</em><span class="erm-anchor" id="ref-rec-un-v3"></span>
<span class="erm-tone-red"><strong>V?$1/?$2/$?3/?$4/?$5/?$6/?$7</strong></span>
        $1…$5 – см. выше
        $6 – чит-меню: активировано (1) или отключено (0)
        $7 – использование читов: было (1) или нет (0)</pre>
<u></u> <span class="erm-anchor" id="ref-rec-un-42"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-un-show42"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Вы не можете включить или отключить статус использования читов, но можете узнать его.<br>
В мультиплеере коды не работают. Если вы отменили коды, это сработает для кодов с клавиатуры и для чит-меню 
(даже если оно было включено)</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-w"></span>W#1/#2/#3/#4/#5</strong></span><br>
Сделать линию воды доступной для героя, но не для лодки.<br>
         #1 – X1<br>
         #2 – Y1<br>
         #3 – X2<br>
         #4 – Y2<br>
         #5 – L (уровень)<br>
<em>Дополнительный синтаксис:</em><br>
<span class="erm-tone-red"><strong>W#X1/#Y1/#X2/#Y2/#L/$</strong></span><br>
Поместить/удалить путь (бревна) на воде<br>
         $ – поместить (1) или убрать (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-un-x"></span>X?$1/?$2</strong></span><br>
Получить размер карты<br>
         $1 – номер переменной, куда занесётся размер (X=Y)<br>
         $2 – равно 0 (один уровень) и 1 (подземелье/поверхность).<br>
Можно только проверить или получить.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-un-43"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-un-show43"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#UN:X?i/?j;
!#VRz1:S^только один уровень^;
!#VRz1&amp;j=1:S^два уровня^;
!#IF:M^Карта имеет %Z1 и размер X=%Vi Y=%Vi^;</code></pre>
</div></details>
<hr>














</div>
</div>
</section>
:::

## Связанные материалы {#related}

[UN:C](../../un-c/) · [SN](../../receivers/sn/) · [Константы / Constants](../../framework/constants/)



## Связанные команды и таблицы {#reference-links}

[Таблица артефактов](../../tables/artifacts/) · [Слоты артефактов](../../tables/artifact-slots/) · [Сборные артефакты](../../tables/combination-artifacts/) · [Ресурсы](../../tables/resources/) · [Игроки (OW)](../ow/#command-r) · [Отладка и совместимость ERM](../../compatibility/) · [UN:C — работа с памятью](../../un-c/) · [Примеры ERM](../../examples/) · [Вторичные навыки](../../tables/secondary-skills/) · [Таблица существ](../../tables/creatures/) · [Таблица героев](../../tables/heroes/) · [Картинки специальностей героя](../../tables/specialty-pictures/) · [Цвета игроков](../../tables/players/) · [Таблица объектов в игре](../../tables/objects/) · [Типы почвы](../../tables/terrain/) · [Артефакты и ресурсы на карте (AR)](../ar/) · [Жилища существ на карте](../../tables/creature-dwellings/) · [Жилища существ (DW)](../dw/) · [Гарнизон (GR)](../gr/) · [Объекты карты (OB)](../ob/#command-t-u) · [Шахты (MN)](../mn/) · [Двусторонние монолиты](../../tables/two-way-monoliths/) · [Типы шахт](../../tables/mines/) · [Нейтральные монстры на карте (MO)](../mo/) · [Знак и океанская бутыль (SG)](../sg/) · [Верфь (SY)](../sy/) · [Таблица заклинаний](../../tables/spells/) · [Города (CA)](../ca/) · [Университет (UR)](../ur/) · [Хижина ведьмы (WH)](../wh/) · [Костёр (FR)](../fr/) · [Лебединое озеро (SW)](../sw/) · [Скелет на карте (SK)](../sk/) · [Локальные события (LE)](../le/) · [Навес (LN)](../ln/) · [Камень знаний (ST)](../st/) · [Святыня магии (SR)](../sr/) · [Магический источник (SP)](../sp/) · [Мистический сад (GD)](../gd/) · [Обелиск (MT)](../mt/) · [Пирамиды и новые объекты (PM)](../pm/) · [Учёный (SC)](../sc/) · [Объекты карты (OB)](../ob/#command-c) · [Сундук сокровищ (CH)](../ch/) · [Древо знаний (KT)](../kt/) · [Телега (WG)](../wg/) · [Гробница воина (WT)](../wt/) · [Водяная мельница (WM)](../wm/) · [Ветряная мельница (ML)](../ml/) · [Ящик Пандоры (PA)](../pa/) · [Герои (HE)](../he/#command-n-o-1-p-1-2-3-4) · [Опыт для уровня героя](../../tables/hero-levels/) · [Сохранение и загрузка (GM)](../../triggers/gm/) · [Объекты карты (OB)](../ob/#command-r-s) · [ID городских зданий](../../tables/buildings/) · [Опыт и бонусы существ (EA)](../ea/#command-a-h-s-t) · [Клики мыши (CM)](../../triggers/cm/) · [Средства ERA, память и звук (SN)](../sn/#command-d-o-x-y-level) · [Курсоры мыши](../../tables/cursors/) · [Посещение объекта (OB)](../../triggers/ob/) · [Типы городов](../../tables/towns/) · [Параметры типов существ (MA)](../ma/#command-i)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.18, +](../../compatibility/#era3-v-3-9-18-l245) — Added "Tools/UN C to bin" utility for conversion of UN:C ERM commands into binary patches.
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l263) — Introduced another directory for ERM global library scripts: "Data/s/lib_end". Scripts from this directory will be loaded after all other map/global/library scripts. Likewise "lib" directory, these scripts do not depend …
- [ERA 3.9.16, *](../../compatibility/#era3-v-3-9-16-l387) — From now on, Era always asks permission to load global scripts on map start or scripts reloading if map has internal scripts. The permission text was changed from "skip" to "load" by default. The following language key m…
- [ERA 3.9.14, +](../../compatibility/#era3-v-3-9-14-l662) — Added support for "OnGameEnter" and "OnGameLeave" events in network games. Previously savegame transfer and loading on remote side used to trigger "OnAfterSavegameLoad", but not "OnGameLeave" + "OnGameEnter". That's why …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l761) — Added GAME_TYPE_XXX constants to Era Erm Framework (see UN:V 5-th parameter).
- [ERA 3.8.1, +](../../compatibility/#era3-v-3-8-1-l1524) — Added new Javascript utility to convert UN:C patches into binary patches. See "Tools/UncToBin/index.html".
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3079) — Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature objects counting is required. A new syntax with 6 parameters was added to allow using ar…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3104) — Added exported function FindNextObject (ObjType, ObjSubtype: integer; var x, y, z: integer; Direction: integer): integer; stdcall; It works the same as UN:U with fast search syntax, but does not raise error on no more ob…
- [ERA 3.1.0, -](../../compatibility/#era3-v-3-1-0-l3144) — Fixed UN:C. It didn't accept negative size argument, while -1, -2 and -4 are valid sizes. Prefer to use (UNC_XXX) constants to specify valid data type.
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4038) — Enhanced !!UN:C command. It supports all d-modifiers now. New syntax with offset from address is available: !!UN:C#addr/#offset/#size/$value; Era always calls GetRealAddr for #addr, thus !!UN:C supports all extended/relo…
<!-- ERA3-GENERATED:END -->
