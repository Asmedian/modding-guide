---
{"title":"Параметры заклинаний (SS)","summary":"Ресивер SS: параметры заклинаний, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Параметры заклинаний (SS)"}
---

## Ресивер SS {#ref-rec-ss}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ss-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>SS</strong><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(поддержка заклинаний)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ss-red"></span><span class="erm-tone-red">!!SS#:XXXX;</span> - позволяет вам менять параметры 
<a href="../../tables/spells/#ref-form-spell" data-context="true">заклинания</a> #.</strong></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-a"></span><span class="erm-anchor" id="command-a-n-d-w"></span><span class="erm-tone-red"><strong>A$</strong></span><br>
Установить сокращенное название<br>
        $ – текстовая переменная.<br>
См. комментарий <a href="./#ref-rec-ss-co">ниже</a>.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-c"></span><span class="erm-anchor" id="command-c-e-i"></span><span class="erm-tone-red"><strong>C#/$</strong></span><br>
Установить/проверить/получить кол-во маны.<br>
        # – уровень (0..3, зависит от знания школы магии)<br>
        $ – кол-во маны для колдовства.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-d"></span><span class="erm-tone-red"><strong>D#/$</strong></span><br>
Установить/проверить/получить описание<br>
        # – уровень (0..3, зависит от знания школы магии)<br>
        $ – текстовая переменная.<br>
См. комментарий <a href="./#ref-rec-ss-co">ниже</a></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-e"></span><span class="erm-tone-red"><strong>E#/$</strong></span><br>
Установить/проверить/получить номер эффекта<br>
        # – уровень (0..3, зависит от знания школы магии)<br>
        $ – эффект<br>
Различные магии имеют разные эффекты</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-f"></span><span class="erm-anchor" id="command-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Установить/проверить/получить флаги.<br>
        $ – 
</div><span class="erm-anchor" id="ref-rec-ss-1"></span><details class="erm-comment"><summary>флаги</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="table-wrap erm-reference-table"><table class="erm-table-zebra" width="100%">
<span class="erm-anchor" id="ref-rec-ss-n2"></span><tr class="erm-tone-purple erm-strong"><td width="5%">#</td><td>Описание</td></tr>
<tr><td>1</td><td>боевое заклинание</td></tr>
<tr><td>2</td><td>заклинание карты приключений</td></tr>
<tr><td>4</td><td>имеет ограничение времени</td></tr>
<tr><td>8</td><td>заклинание существ</td></tr>
<tr><td>16</td><td>цель - один отряд</td></tr>
<tr><td>32</td><td>цель - один стреляющий отряд</td></tr>
<tr><td>64</td><td>имеет массовое воздействие на уровне эксперта</td></tr>
<tr><td>128</td><td>цель - любое место</td></tr>
<tr><td>256</td><td>цель - препятствие</td></tr>
<tr><td>512</td><td>заклинание с уроном</td></tr>
<tr><td>1024</td><td>заклинание разума</td></tr>
<tr><td>2048</td><td>дружественное и имеет масс. воздействие</td></tr>
<tr><td>4096</td><td>нельзя накладывать на боевые машины</td></tr>
<tr><td>8192</td><td>заклинание от артефакта</td></tr>
<tr><td>16384</td><td>защищающее заклинание</td></tr>
<tr><td>32768</td><td>ИИ (Метеоритный дождь, Волшебная стрела, Ледяная молния, Удар молнии, 
	Взрыв, Кольцо холода, Огненный шар, Гром Титанов, не Цепная молния, не Инферно)</td></tr>
<tr><td>65536</td><td>ИИ (воздействие по площади)</td></tr>
<tr><td>131072</td><td>ИИ (Армагеддон, Уничтожить нежить, Волна Смерти)</td></tr>
<tr><td>262144</td><td>ИИ (Благословение, Проклятье, Жажда крови, Точность, Слабость, 
	Каменная кожа, Разрушающий луч, Молитва, Радость, Печаль, Удача, Неудача, Ускорение, 
	Замедление, Палач, Бешенство, Клон, Слепота, Телепорт, Контрудар, Берсерк, 
	Щит, Воздушный щит, Огненный щит, Защита от стихий, Антимагия, 
	Снятие заклинаний, Зеркало, Лечение)</td></tr>
<tr><td>524288</td><td>ИИ (кол-во/принадлежность существ может измениться)</td></tr>
<tr><td>1048576</td><td>ИИ (Вызвать лодку, Полёт, Хождение по воде, Дверь измерений, 
	Городской портал, Землетрясение, Гром Титанов)</td></tr>
</table></div></blockquote></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-h"></span><span class="erm-anchor" id="command-h"></span><span class="erm-tone-red"><strong>H#/$</strong></span><br>
Установить/проверить/получить шанс появления в городе<br>
        # – <a href="../../tables/towns/#ref-form-towns" data-context="true">тип</a> города<br>
        $ – шанс появления</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-i"></span><span class="erm-tone-red"><strong>I#/$</strong></span><br>
Установить/проверить/получить значимость 
для ИИ<br>
        # – уровень (0..3, зависит от знания школы магии)<br>
        $ – значение для ИИ</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-l"></span><span class="erm-anchor" id="command-l-o-p"></span><span class="erm-tone-red"><strong>L$</strong></span><br>
Установить/проверить/получить уровень заклинания<br>
        $ – уровень</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Установить/проверить/получить название заклинания<br>
        $ – текстовая <em>z</em>-переменная</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-o"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Установить/проверить/получить тип цели.
</div><pre>        $ – тип:
	= 1 – цель - дружественный отряд
	= -1 – цель - вражеский отряд
	= 0 – любая точка</pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-p"></span><span class="erm-tone-red"><strong>P$</strong></span><br>
Установить/проверить/получить силу магии.<br>
Разные заклинания используют это значение по разному</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-s"></span><span class="erm-anchor" id="command-s-x"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Установить/проверить/получить биты школ магии.
</div><pre>        $ – флаг (используются только первые 4 бита):
	= 1 – школа магии Воздуха
	= 2 – школа магии Огня
	= 4 – школа магии Воды
	= 8 – школа магии Земли</pre>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-w"></span><span class="erm-tone-red"><strong>W$</strong></span><br>
Установить/проверить/получить звуковой файл заклинания<br>
        $ – <em>z</em>-переменная с именем файла<br>
См. комментарий <a href="./#ref-rec-ss-co">ниже</a></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-ss-x"></span><span class="erm-tone-red"><strong>X$</strong></span><br>
Установить/проверить/получить индекс Def-анимации<br>
        $ – <a href="../../tables/combat-animations/#ref-form-defspell" data-context="true">индекс</a><br></div>
<hr>
<div class="erm-paragraph"><u><strong><span class="erm-anchor" id="ref-rec-ss-co"></span>Комментарии к опциям A, N, D, W</strong></u>:<br>
Вы можете не получать стандартное имя файла, но можете установить его (и проверить позже) через <em>z</em>-переменные.<br>
Вы можете использовать стандартные <em>z</em>-переменные [1..1000] или статические из файла ERT [&gt;1000].<br>
Если вы установите имя и затем проверите его, вы получите номер <em>z</em>-переменной установленного имени.<br>
Если вы не установили имя, вы получите 0.</div>


















</div>

</div>
</section>
:::

## Вторичные навыки {#ref-cont-sschange}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div><h3 class="erm-align-center">Изменение вторичных навыков</h3>
<span><span class="erm-anchor" id="ref-cont-sschange-red"></span><span class="erm-tone-red">
Внимание!</span> Небезопасный скрипт</span></div>
<div class="erm-paragraph">Все параметры навыков записаны в таблицу (см. <a href="./#ref-cont-sschange-tab">ниже</a>), и при установке значения уровня навыка отличного от 0..3, 
игра будет брать параметры соседних навыков.</div>
<div class="erm-paragraph">Это таблица параметров навыков по уровням, используемых в игре (для навыков, которые используют процентные значения).<br>
Есть четыре значения для каждого навыка: 0 - нет, 1 - основной, 2 - продвинутый, 3 - эксперт.<br>
Если вы установить навык выше (или ниже) этого значения, игра будет смотреть на параметры, следующие далее (прежде) в таблице.<br>
<br>
Например, если навык Стрельба установить на уровень 7, игра прочтёт значение Нападения 3го уровня и даст бонус 30%. А если установить уровень Некромантии на 58, 
то после битвы поднимете все трупы врага, т.е по 1 скелету за 1 юнита врага. Кстати, значения выше 100 для Некромантии не имеют значения, к примеру, 
при уровне навыка равном 60, скелеты не поднимутся вообще, а при 59 - как и при 58.</div>
<div class="erm-paragraph">Расчёт: чтобы Оборона Эксперта снижала урон на 60% (по значениям подойдёт Орлиный Глаз Эксперта, 
расположенная дальше по таблице), вам нужно установить её уровень равным<br>
<strong>[№_Орлиного_глаза_эксперта_в_таблице]</strong> минус <strong>[№_Обороны_эксперта_в_таблице]</strong>; т.е. 
32-24=8;
<pre class="erm-example"><code class="language-erm">!!HE#:S23/8;</code></pre>
Если нужно, чтобы Оборона Эксперта снижала урон на 25% (по значениям подойдёт Продвинутая Стрельба, расположенная ранее в таблице), вам нужно установить её уровень равным<br>
<strong>[№_Продвинутой_стрельбы_в_таблице]</strong> минус <strong>[№_Обороны_эксперта_в_таблице]</strong>; т.е. 15-24=-9;
<pre class="erm-example"><code class="language-erm">!!HE#:S23/-9;</code></pre></div>
<span class="erm-anchor" id="ref-cont-sschange-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>Единственная проблема</strong> – игра будет неправильно показывать навык в окне героя или даже <span class="erm-anchor" id="ref-cont-sschange-dred"></span><span class="erm-tone-red">ВЫЛЕТИТ.</span>
<br>
Можно использовать другие значения навыков с боевыми навыками, применяя смещение в триггере <a href="../../triggers/ba/#ref-tr-ba">!?BA0</a> и удаляя его в триггере <a href="../../triggers/ba/#ref-tr-ba">!?BA1</a>.<br>
Такой метод позволит избежать ошибок и даст возможность нормально качать навыки, если вы получите уровень после битвы.</blockquote>
<strong>Примечание:</strong> '*' в таблице означает, что соответствующий навык был отгадан по значениям, и фактически не тестировался.<br>
 
<span class="erm-anchor" id="ref-cont-sschange-tab"></span>
<div class="table-wrap erm-reference-table"><table class="erm-align-center" width="80%">
<tr><td><strong>1. </strong>Некромантия<br>
1) 0<br>
2) 10<br>
3) 20<br>
4) 30</td>
<td><strong>2. ?<br></strong>5) 0<br>
6) 0<br>
7) 0<br>
8) 0</td>
<td><strong>3. ?<br></strong>
9) 0<br>
10)0<br>
11)0<br>
12)0</td></tr>
<tr><td><strong>4. </strong>Стрельба<br>
13) 0<br>
14) 10<br>
15) 25<br>
16) 50</td>
<td><strong>5. </strong>Нападение<br>
17) 0<br>
18) 10<br>
19) 20<br>
20) 30</td>
<td><strong>6. </strong>Оборона<br>
21) 0<br>
22) 5<br>
23) 10<br>
24) 15</td></tr>
<tr><td><strong>7. ?</strong><br>
25) 0<br>
26) 0<br>
27) 0<br>
28) 0</td>
<td><strong>8. </strong>Орлиный Глаз*<br>
29) 0<br>
30) 40<br>
31) 50<br>
32) 60</td>
<td><strong>9. </strong>Дипломатия*<br>
33) 0<br>
34) 20<br>
35) 40<br>
36) 60</td></tr>
<tr><td><strong>10. </strong>Сопротивление<br>
37) 0<br>
38) 5<br>
39) 10<br>
40) 20</td>
<td><strong>11. </strong>Обучение<br>
41) 0<br>
42) 5<br>
43) 10<br>
44) 15</td>
<td><strong>12. </strong>Логистика*<br>
45) 0<br>
46) 10<br>
47) 20<br>
48) 30</td></tr>
<tr><td><strong>13. </strong>Волшебство<br>
49) 0<br>
50) 5<br>
51) 10<br>
52) 15</td>
<td><strong>14. </strong>Интеллект*<br>
53) 0<br>
54) 25<br>
55) 50<br>
56) 100</td>
<td><strong>15. </strong>Первая помощь*<br>
57) 0<br>
58) 100<br>
59) 200<br>
60) 300</td></tr>
<tr><td colspan="3" height="40"><strong> Дальнейшие значения непохожи на часть таблицы, но всё же работают</strong></td></tr>
<tr><td><strong>16. ?</strong><br>
61) 0<br>
62) 0<br>
63) 0<br>
64) 0</td>
<td><strong>17. ?</strong><br>
65) 0<br>
66) 0<br>
67) 0<br>
68) 0</td>
<td><strong>18. ?</strong><br>
69) 0<br>
70) 0<br>
71) 0<br>
72) 0</td></tr>
<tr><td><strong>19. ?</strong><br>
73) 0<br>
74) 0<br>
75) 105<br>
76) 5</td>
<td><strong>20. ?</strong><br>
77) 0<br>
78) 0<br>
79) 0<br>
80) 0</td>
<td><strong>21. ?</strong><br>
81) 0<br>
82) 0<br>
83) 0<br>
84) 0</td></tr>
<tr><td><strong>22. ?</strong><br>
85) 0<br>
86) 0<br>
87) 0<br>
88) 0</td>
<td><strong>23. ?</strong><br>
86) 0<br>
87) 0<br>
88) 0<br>
89) 30</td>
<td><strong>24. ?</strong><br>
90) 15<br>
91) 90<br>
92) 150<br>
93) 0</td></tr>
<tr><td><strong>25. ?</strong><br>
94) 0<br>
95) 0<br>
96) 0<br>
97) 0</td>
<td><strong>26. ?</strong><br>
98) 0<br>
99) 0<br>
100) 25<br>
101) 50</td>
<td><strong>27. ?</strong><br>
102) 75<br>
103) 100<br>
104) 100<br>
105) 100</td></tr>
<tr><td><strong>28. ?</strong><br>
106) 0<br>
107) 0<br>
108) 0<br>
109) 0</td>
<td><strong>29. ?</strong><br>
110) 0<br>
111) 0<br>
112) 0<br>
113) 0</td>
<td></td></tr>
</table></div>

<div class="erm-paragraph">Дальнейшие значения тоже могут быть использованы, здесь лишь приведена исследованная часть.</div>
</div>
</section>
:::

## Связанные материалы {#related}

[SN](../../receivers/sn/)



## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Таблица заклинаний](../../tables/spells/) · [Типы городов](../../tables/towns/) · [Анимации BM:V](../../tables/combat-animations/)
