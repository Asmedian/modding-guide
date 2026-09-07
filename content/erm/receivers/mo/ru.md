---
{"title":"Нейтральные монстры на карте (MO)","summary":"Ресивер MO: нейтральные монстры на карте, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Нейтральные монстры на карте (MO)"}
---

## Ресивер MO {#ref-rec-mo}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-mo-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MO</strong> 
(монстр на позиции)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mo-red"></span><span class="erm-tone-red">!!MO#1/#2/#3:XXXX;</span> 
</strong>–<strong> параметры монстра в X Y L.</strong><br>
<em>Расширение синтаксиса 1:</em><br>
<span class="erm-tone-red"><strong>!!MO#1/#2/#3/#4:XXXX;</strong></span> – монстр в координатах X Y L, четвёртый параметр используется для отмены проверки существования монстра в начале карты.<br>
<em>Расширение синтаксиса 2:</em><br>
<span class="erm-tone-red"><strong>!!MO$:XXXX;</strong></span> – монстр в координатах: v[$], v[$+1], v[$+2]<br>
<strong>Используется для изменения параметров монстров в определённой позиции.<br>
</strong></div><span class="erm-anchor" id="ref-rec-mo-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mo-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Теперь команды MO#1/#2/#3 и MO#1/#2/#3/1 одинаковы по смыслу. 
В обоих случаях присутствие монстра на карте не обязательно, но формат остался для совместимости.<u><strong></strong><br>
</u>Команды M, B и A могут быть использованы лишь для изменённых в редакторе монстров (сообщение, ресурс или артефакт). 
Вы не можете установить сообщение монстру, но вы можете изменить агрессивность, кол-во и т.п. Если вы попытаетесь это сделать, 
то получите сообщение об ошибке, для избегания этого используете статусы опций <a href="../un/#ref-rec-un-p904">UN:P904</a>, либо значения 
<a href="../ob/#ref-rec-ob-c">OB:C</a> для получения контрольного числа, и обработки его значения. Помните, что вы можете настроить все параметры монстра, если он уже помещён на карту. 
Для всех монстров, помещаемых командой <a href="../un/#ref-rec-un-i">UN:I</a>, вы можете применить любую команду.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-a"></span><span class="erm-anchor" id="command-a-b-1-2"></span>A$</strong></span><br>
Установить/проверить/получить <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт</a> монстров в $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-b"></span>B#1/$2</strong></span><br>
Установить/проверить/получить кол-во <a href="../../tables/resources/#ref-form-resource" data-context="true">ресурса #1</a> в $2 (м.б. отрицательным)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-g"></span><span class="erm-anchor" id="command-g"></span>G$</strong></span><br>
Установить/проверить/получить кол-во монстров в $.<br>
<span class="erm-anchor" id="ref-rec-mo-bold"></span><em class="erm-strong">Замечание:</em> максимальное число монстров в виде отряда на карте – 4095 (или 12 бит). При бо́льших значениях есть вероятность порчи данных касаемо агрессии отряда.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-m"></span><span class="erm-anchor" id="command-m-text-mz-m1"></span>M^Текст^</strong></span><br>
Установить послание. Длина текста не может быть длинней оригинального. Может содержать любые символы, кроме ^ и ;</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M#</strong></span><br>
Установить текст из глобального события номер #</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Не показывать сообщение, указанное в редакторе</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Mz#</strong></span><br>
Установить/получить текст сообщения в текстовую переменную</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M1/$<br>
M1/-1</strong></span><br>
Установить и получить текстовые параметры.<br>
Вы можете использовать эту команду, если команда M использовалась для установки послания.<br>
M1/$ – номер текстовой переменной в $<br>
M1/-1 – отменить (восстановить по умолчанию) сообщение</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-o"></span><span class="erm-anchor" id="command-o-u"></span>O#</strong></span><br>
Установить/проверить/получить, может ли увеличиваться отряд<br>
        # = 1 – кол-во не увеличивается<br>
        # &lt; &gt; 1 – кол-во увеличивается</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-r"></span><span class="erm-anchor" id="command-r"></span>R$/#</strong></span><br>
Установить/проверить/получить агрессивность<br>
        $ – </div><span class="erm-anchor" id="ref-rec-mo-3"></span><details class="erm-comment"><summary>уровень агрессии</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	0       – податливые (всегда присоединятся)<br>
	1..7   – дружелюбные<br>
	1..10 – агрессивные <br>
	4..10 – враждебные<br>
	10     – кровожадные (никогда не присоединятся)</blockquote></div></details>
<div>        # – фантомный параметр (не используется, но нужен для различия от старого синтаксиса), может принимать любые значения<br>
<u>
</u><span class="erm-anchor" id="ref-rec-mo-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-mo-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Допустим, нам надо сделать герою Гелар способность снижать агрессию нейтралов на 1 уровень…<br>
Вот вариант такой реализации:
<pre class="erm-example"><code class="language-erm">!?OB54;
!!OW:A-1/?y1;	текущий герой
!!FU&amp;y1&lt;&gt;142:E;	стоп, если не Гелар
!!MO998:R?y2/1;	узнать злобность монстров
!!FU&amp;y2=0:E;	стоп, монстры и так податливы
!!VRv5249:Sy2;	сохраняем исходную злобность
!!VRy3:S0;
; настраиваем новую враждебность..
 !!VRy3&amp;y2&gt;0/y2&lt;4:S0;	Податливы
 !!VRy3&amp;y2&gt;3/y2&lt;8:S1;	Дружелюбны
 !!VRy3&amp;y2&gt;7/y2&lt;10:S4;	Агрессивы
 !!VRy3&amp;y2&gt;9:S7;	Враждебны
;
!!MO998:Ry3/1;		сменить злобность
!!IF:V540/1;	выставляем флаг "активации способности"

!$OB54&amp;540; 	Гелар "задействовал" спрособность
!!IF:V540/0;	сброс флага
!!OB998:T?y1;
!!FU&amp;y1&lt;&gt;54:E;    стоп, если уже нету монстра
!!MO998:Rv5249/1; вернуть прежнюю злобность</code></pre></div></details></div>
<div class="erm-paragraph"><em>Старый синтаксис:</em> <span class="erm-tone-red"><strong>MO:R0</strong></span> (присоединятся) или <span class="erm-tone-red"><strong>MO:R1</strong></span> (не присоединятся).</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mo-u"></span>U#</strong></span><br>
Установить/проверить/получить, может ли монстр сбежать.<br>
         # = 1 – не может<br>
         # &lt; &gt; 1 – может</div>
<hr>













</div>
</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/)



## Связанные команды и таблицы {#reference-links}

[Общие игровые операции (UN)](../un/) · [Объекты карты (OB)](../ob/#command-c) · [Общие игровые операции (UN)](../un/#command-i-x-y-level-type-subtype-refresh) · [Таблица артефактов](../../tables/artifacts/) · [Ресурсы](../../tables/resources/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1881) — Improved ERM 2 compiler. It became possible to use named local variables and quick variables (f..t) as arrays subscripts. Syntax: (array&#91;index&#93;) or (array&#91;i&#93;). Index value is evaluated BEFORE current receiver, thus do no…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3079) — Improved UN:U command. It does not raise error if no more objects are found, but sets x-coordinate to -1 instead. Thus no premature objects counting is required. A new syntax with 6 parameters was added to allow using ar…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3104) — Added exported function FindNextObject (ObjType, ObjSubtype: integer; var x, y, z: integer; Direction: integer): integer; stdcall; It works the same as UN:U with fast search syntax, but does not raise error on no more ob…
<!-- ERA3-GENERATED:END -->
