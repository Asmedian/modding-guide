---
{"title":"Командиры (CO)","summary":"Ресивер CO: командиры, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Командиры (CO)"}
---

## Ресивер CO {#ref-rec-co}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-a1-1-2"></span><span class="erm-anchor" id="command-a2-a3-1-2-a4-1-12"></span><span class="erm-anchor" id="command-b0-b1-1-2"></span><span class="erm-anchor" id="command-b2-b3-1-2"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-co-text"></span><div>
<span class="erm-anchor" id="ref-rec-co-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>CO</strong> (командиры)</span></div>
<div class="erm-paragraph"><br>
<span class="erm-anchor" id="ref-rec-co-red"></span><span class="erm-tone-red"><strong>!!CO#:XXXX;</strong></span><strong> – этот ресивер позволяет вам устанавливать, проверять и изменять параметры командиров.</strong><br>
         # = -4 – применить ко всем командирам защищающейся стороны<br>
         # = -3 – применить ко всем командирам атакующей стороны<br>
         # = -2 – применить ко всем командирам<br>
         # = -1 – применить к текущему командиру (для текущего героя)<br>
         # ≥ 0 – применить к определённому командиру (соответственно номеру героя)</div>
<span class="erm-anchor" id="ref-rec-co-q1"></span><div class="erm-tone-quote erm-note erm-paragraph"><u>См. также</u>: триггер <a href="../../triggers/co/#ref-tr-co">!?CO</a>, <a href="../../un-c/commander-structure/#ref-form-commstr" data-context="true">Структура командира</a>, команда <a href="../un/#ref-rec-un-j13">!!UN:J13</a>.</div>
<div class="erm-paragraph"><u></u></div><span class="erm-anchor" id="ref-rec-co-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-co-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Все командиры, помещённые на карту с помощью ERM, имеют одни и те же вторичные и первичные навыки (но способности зависят от их типа). 
Фактически, это один Командир с разными возможностями. Если вы не установили какие-либо параметры для таких командиров, они будут иметь стандартные для начала игры параметры. 
Для их усиления используйте этот ресивер. Для применения всех изменений к только этим дополнительным командирам используйте номер -3 
(все командиры с атакующей стороны) и -4 (все командиры защищающейся стороны).<br>
Чтобы превратить их в реального командира, вы должны установить командиру статус «живой» (через поцию [<a href="./#ref-rec-co-d">D</a>]), и также установить его тип. 
Вы можете дать любому командиру особые бонусы или установить параметры любого командира как обычного.
Если вы НЕ установите статус «живой», командир будет расценен как "командир-монстр", и всегда будет иметь Полёт и способность Стрелять. 
Параметры и другие бонусы для такого "командира-монстра" должны быть установлены другими командами ERM, а не ресивером CO.<br>
Заметьте, что вы можете установить всё в секции триггеров <a href="../../triggers/ba/#ref-tr-ba">!?BA0</a>/<a href="../../triggers/ba/#ref-tr-ba">!?BA50</a> или позже, в битве. 
Все настройки будут потеряны после битвы и не будут сохранены в игре.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-a"></span><span class="erm-tone-red"><strong>A</strong></span><br>
Поддержка артефактов командира<br>
<span class="erm-tone-red"><strong>A1/#1/#2</strong></span><br>
Добавить артефакт<br>
        #1 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>)<br>
        #2 – кол-во выигранных битв<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-co-2"></span><details class="erm-comment"><summary>Возможные результаты (<span class="erm-anchor" id="ref-rec-co-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
v1 = 0 – артефакт добавлен<br>
v1 = 1 – это не командирский артефакт<br>
v1 = 3 – командир уже имеет этот артефакт<br>
v1 = 4 – нет свободных слотов</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A2/#1</strong></span><br>
Удалить артефакт командира<br>
        #1 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>)<br>
<u>
</u><br></div><span class="erm-anchor" id="ref-rec-co-3"></span><details class="erm-comment"><summary>Возможные результаты (<span class="erm-anchor" id="ref-rec-co-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
v1 = 0 – артефакт удалён<br>
v1 = 1 – у командира нет этого артефакта</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A3/#1/$1/$2</strong></span><br>
Контроль артефакта командира в определённом слоте.<br>
         #1 – слот артефакта (0..5)<br>
         $1 – номер артефакта 
<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">(146..155)</a><br>
         $2 – кол-во выигранных битв<br>
<u>
</u> </div><span class="erm-anchor" id="ref-rec-co-4"></span><details class="erm-comment"><summary>Возможные результаты (<span class="erm-anchor" id="ref-rec-co-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете получить/проверить или установить артефакт и/или кол-во выигранных битв сами. Помните - проверки на номер артефакта нет, проверяйте корректность номера сами. 
Если артефакт не командирский, то вместо его картинки может появиться картинка вторичного навыка командира 
(однако при возвращении этого артефакта-навыка герою артефакт будет выглядеть как обычно), либо пустота.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A4/$1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12</strong></span><br>
Контроль артефактов командира во всех слотах сразу.<br>
Вы можете получить/проверить или установить артефакт и/или кол-во выигранных битв.<br>
         $1 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) в слоте 0<br>
         $2 – кол-во выигранных битв для артефакта в слоте 0<br>
         $3 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) в слоте 1<br>
         $4 – кол-во выигранных битв для артефакта в слоте 1<br>
         $5 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) в слоте 2<br>
         $6 – кол-во выигранных битв для артефакта в слоте 2<br>
         $7 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) в слоте 3<br>
         $8 – кол-во выигранных битв для артефакта в слоте 3<br>
         $9 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) в слоте 4<br>
         $10 – кол-во выигранных битв для артефакта) в слоте 4<br>
         $11 – номер артефакта (<a href="../../tables/artifacts/#ref-form-a1-c" data-context="true">146..155</a>) в слоте 5<br>
         $12 – кол-во выигранных битв для артефакта в слоте 5<br>
Не может быть применено ко всем командирам (-2)<br>
 </div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-b"></span><span class="erm-tone-red"><strong>B#/$1/$2</strong></span><br>
Особые бонусы<span class="erm-tone-red"><strong><br>
B0/$</strong></span><br>
Дать командиру определённые способности<br>
         $ = сумма битов <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">способностей</a><br>
Команда устанавливает бонусы, и отключает все те, которые вы не учли в битовом значении.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-co-6"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-co-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!CO0:B0/3; - даст командиру Оррина Страх и Уменьшение вражеской защиты, но отключит остальные имеющиеся бонусы.</code></pre></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B1/$1/$2</strong></span><br>
Специальный бонус: один спец. бонус<br>
         $1 – номер <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">бонуса</a> (0..14)<br>
         $2 – есть (1) или нет (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B2/$</strong></span><br>
Специальный бонус: запретить несколько выбранных бонусов<br>
         $ – сумма битов запрещённых <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">бонусов</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B3/$1/$2</strong></span><br>
Специальный бонус: запретить один спец. бонус<br>
         $1 – номер <a href="../../tables/commander-bonuses/#ref-form-cobo" data-context="true">бонуса</a> (0..14)<br>
         $2 – разрешён (1) или нет (0)<br>
Вы можете применять любую опцию B для всех командиров, но только для установки параметров. 
Для отдельного командира, как обычно, можно использовать установку, получение и проверку.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-d"></span><span class="erm-anchor" id="command-d-e"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Мёртв или жив командир<br>
         $=1 – мёртв<br>
         $=0 – жив<br>
Наглядный пример использования команды <a href="./#ref-rec-co-ex">см. ниже</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-e"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Разрешить или запретить командира(-ов).<br>
       
$ = <br>
            0 – запретить командиров<br>
            1 – разрешить командиров<br>
           -1 – если командиры отключены</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Установить или получить имя командира.<br>
         $ – номер <em>z</em>-переменной (1..1000, -1..-10)<br>
Вы можете изменить <em>z</em>-переменную после использования (имя копируется в структуру командира). Эту команду нельзя использовать для всех командиров.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-p"></span><span class="erm-anchor" id="command-p"></span><span class="erm-tone-red"><strong>P#/$</strong></span><br>
Параметры командира<br>
         # – тип параметра<br>
                   0 – атака<br>
                   1 – защита<br>
                   2 – здоровье<br>
                   3 – урон<br>
                   4 – сила магии<br>
                   5 – скорость<br>
                   6 – сопротивление магии<br>
         $ – значение</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>P$</strong></span><br>
Установить/проверить/получить «контроль первичных навыков»<br>
         $ = 0 – отключен<br>
         $ = 1 – включен<br>
Если вы установить 1 (вкл), первичные навыки не будут изменяться с продвижением 
командира по уровням. Если установить 0, то здоровье и урон  будут 
автоматически прибавляться вместе с уровнем командира.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-s"></span><span class="erm-anchor" id="command-s-t-x"></span><span class="erm-tone-red"><strong>S#/$</strong></span><br>
Вторичные навыки командиров<br>
         # – тип навыка<br>
                   0 – атака<br>
                   1 – защита<br>
                   2 – здоровье<br>
                   3 – урон<br>
                   4 – сила магии<br>
                   5 – скорость<br>
                   6 – сопротивление магии<br>
         $ – значение</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Тип командира (<a href="../../tables/commanders/#ref-form-commanders" data-context="true">0..8</a>)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-co-x"></span><span class="erm-tone-red"><strong>X#/$</strong></span><br>
Установить/получить <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">опыт</a> командира<br>
         # – тип<br>
                   0 – необходимое кол-во опыта до следующего уровня<br>
                   1 – текущий опыт командира<br>
                   2 – текущий уровень командира<br>
        $ – значение</div>

<hr>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-co-ex"></span>
Демонстрационный скрипт применения <a href="./#ref-rec-co-d">CO:D</a> от <span class="erm-anchor" id="ref-rec-co-n1"></span><code class="erm-tone-purple erm-strong">Timothy Pulver</code><strong> ()</strong></div><span class="erm-anchor" id="ref-rec-co-5"></span><details class="erm-comment"><summary>показать</summary><div class="erm-comment-body">

<pre class="erm-example"><code class="language-erm">** Святилище командира 0.2 by Timothy Pulver

!$OB80;		[пост-триггер на посещение Святилища]
!!UN:P3/?y-1;	[проверить, включены ли командиры: y-1=0 если включены]
!!CO-1:D?y-2;	[проверить, жив ли командир: y-2=1 если мёртв]
!!UN:P76/?y-7;	[проверить, включен ли скрипт: y-7=1 если включен]
!!FU|y-1&lt;&gt;0/y-2&lt;&gt;1/y-7&lt;&gt;1:E;	[выйти, если командиры или скрипт не включены или командир не мёртв]

!!CO-1:T?y-3;	[тип командира: y-3]
!!VRy-4:S174 +y-3 +65536;	[номер картинки для командира]

!!VRy-5:S4 R1;	[случайно - самоцветы или кристаллы]
!!IF&amp;999:Q2/21/y-4/y-5/2/2^Монахи провели вас внутрь и предложили вылечить вашего Командира в обмен на небольшое пожертвование.

Вы согласны?^;

!!IF&amp;-2/999:Q1/21/8/1^"Вы можете оставаться в нашем Святилище сколько пожелаете."^;
!!FU&amp;-2/999:E;	[стоп, если игрок отказался лечить командира]

!!OW:R-1/y-5/?y-6;		[Проверить у текущего игрока наличие ресурса: y-6]
!!OW&amp;y-6&gt;=2:R-1/y-5/d-2;	[Забрать 2 ед. ресурса у игрока]

!!VRz10&amp;999:S^
Монахи унесли вашего Командира в маленький альков, где они совершали мистические ритуалы и заклятья несколько часов.
Наконец, они сказали вам, что всё закончилось.
Вы рады видеть вашего Командира в добром здравии!^;

!!IF&amp;y-6&lt;2/999:Q1/21/8/1^"Мы видим, что у вас недостаточно средств для пожертвования.
Но не волнуйтесь, мы не откажем вам в лечении.
Возможно, вы сможете внести пожертвование позже."
%Z10^;

!!IF&amp;y-6&gt;=2/999:Q1/21/8/1^"Спасибо вам за проявление уважения к нам в виде пожертвования нашему скромному Святилищу."
%Z10^;

!!CO-1:D0;	[Оживить командира]</code></pre>
</div></details>










</div>
</div>
</section>
:::

## Связанные материалы {#related}

[CO](../../triggers/co/)



## Связанные команды и таблицы {#reference-links}

[События командира (CO)](../../triggers/co/) · [Структура командира](../../un-c/commander-structure/) · [Общие игровые операции (UN)](../un/#command-j11-j13-k1-k2-m) · [Начало и завершение боя (BA)](../../triggers/ba/) · [Таблица артефактов](../../tables/artifacts/#values) · [Особые бонусы командира](../../tables/commander-bonuses/) · [Классы командиров](../../tables/commanders/) · [Опыт для уровня героя](../../tables/hero-levels/)
