---
{"title":"Переменные и выражения (VR)","summary":"Ресивер VR: переменные и выражения, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Переменные и выражения (VR)"}
---

## Ресивер VR {#ref-rec-vr}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-f-min-max-errors-default-b"></span><span class="erm-anchor" id="command-m1-source-start-count-m2-source-index-m3-value-base"></span><span class="erm-anchor" id="command-mask-or-xmask-sd-bits-sd-bits"></span><span class="erm-anchor" id="command-value--value-value-value-value"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-vr-text"></span><div>
<span class="erm-anchor" id="ref-rec-vr-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>VR</strong> 
	(переменные) </span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-vr-red"></span><span class="erm-tone-red">!!VR@:XXXX;</span> 
	- менеджмент переменных.</strong> Используется для действий с переменными 
(установка, сравнение, математические действия).</div>
<span class="erm-anchor" id="ref-rec-vr-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: <a href="./#ref-rec-vr-string">команды над <em>z</em>-переменными</a>, <a href="./#ref-rec-vr-addstring">соединение <em>z</em>-переменных</a>, 
<a href="../../variables/#ref-cont-flags-var-show">переменные в сообщениях</a>, <a href="../../variables/#ref-cont-flags">флаги и переменные</a></div>

<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-c"></span>
C$1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12/$13/$14/$15/$16</strong></span><br>
Установить/проверить <em>v</em>-переменные<br>
         $ – значение для <em>v</em>-переменной @<br>
         $1 – установить/проверить <em>v</em>-переменную (@)<br>
         $2 – установить/проверить <em>v</em>-переменную (@+1)<br>
  <span class="erm-anchor" id="ref-rec-vr-step"></span><em class="erm-indent">…</em><br>
  <em class="erm-indent">…</em><br>
         $16 – установить/проверить <em>v</em>-переменную (@+15)<br>
Команда поддерживает до 16 параметров.<br>
<span class="erm-anchor" id="ref-rec-vr-bold"></span><em class="erm-strong">Замечание:</em> в <a href="../../compatibility/#ref-era-index">ERA</a> добавлена поддержка <em>v</em>, <em>y</em>, <em>x</em> и <em>w</em>-переменных.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRv123:C23/v15/?i/y4;
Результат:
v123 = 23, v124 = v15, i = v125, v126 = y4</code></pre>
<u>Пример</u> от <span class="erm-anchor" id="ref-rec-vr-n1"></span><code class="erm-tone-purple erm-strong">Donald</code>'а:<br>
Можно использовать эту команду для составления таблицы; это простой метод 
получения случайного заклинания. К примеру:
<pre class="erm-example"><code class="language-erm">!!VRv600:C0/3/5/15/27/31/32/35/37/41/42/43/46/53/54; - таблица номеров заклинания первого уровня
!!VRy1:S600 R14; - случайное число в интервале 600..614
!!VRv1:Svy1; - теперь v1 хранит случайное заклинание первого уровня</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-r"></span><span class="erm-anchor" id="command-r-r-r0-min-max-free-t"></span>Rx</strong></span><br>
Генерировать случайное значение от 0 до x (включительно) и ДОБАВИТЬ его к текущему значению.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRi:R25; - будет сгенерированно случайное число в диапазоне [0..25] и добавлено к текущему значению переменной</code></pre>
</div><hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>R#/$</strong></span><br>
Установить генератор случайных чисел на одно значение.<br>
       
$ – номер случайного числа в генераторе для синхронизации.<br>
       
# – фантомный параметр (не используется)<br>
Если вы не уверены, что генератор случайных чисел в одинаковой 
позиции на обоих компьютерах, вы можете просто перезапустить их на один ритм.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-s"></span><span class="erm-anchor" id="command-s-c-1-16"></span>S#</strong></span><br>
Установить переменную @ на # (здесь и ниже # может означать имя другой переменной).<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRv5:C0/0/0; записать нули в v5..v7
!!VRv5:S12; v5=12
!!VRv6:Sv5; v6=v5
!!VRv6:S?v7; v7=v6
Имеем: v5 = v6 = v7 = 12</code></pre></div>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-vr-t"></span>T$</strong></span><br>
Генерировать случайное значение от 0 до $ и добавить его к текущему 
значению переменной. Значение базируется на значении времени.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-14"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-vr-show14"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При использовании этой команды, если вы сгенерируете два или более значения за один ресивер, они могут быть равными, поэтому в таких ситуациях используйте VR:R.<br>
Состояние генератора НЕ синхронизируется автоматически между удалёнными ПК. Не используйте команду в режиме битвы для повышения совместимости вашего кода с мультиплеером.</div></details>

<hr><h3><span class="erm-anchor" id="ref-rec-vr-log"></span>Логические битовые операции</h3>
<div class="erm-paragraph">См. также: <a href="../../tables/object-control-words/#ref-cont-conwords-logic">Логические битовые операции в WoG</a></div>
<div class="erm-paragraph"><strong class="erm-tone-red"><span class="erm-anchor" id="ref-rec-vr-and"></span>&amp;$</strong></div>
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-rec-vr-le"></span><table class="erm-align-left"><tr class="erm-legacy-code-line">
<span class="erm-anchor" id="ref-rec-vr-dl2"></span><td class="erm-game-text">AND</td>
<td>0 и 0 → <strong>0</strong></td>
<td>0 и 1 → <strong>0</strong></td>
<td>1 и 0 → <strong>0</strong></td>
<td>1 и 1 → <strong>1</strong></td>
</tr></table></div>
<div class="erm-paragraph">«<strong>&amp;</strong>» - битовая операция И над битами переменной, может быть использована для 
проверки, был ли установлен определённый <a href="../../tables/bits/#ref-form-hex" data-context="true">бит</a>.<br>
Например, проверим, есть ли в v1-переменной 4ый бит (16):<br>
<pre class="erm-example"><code class="language-erm">!!VRv1:&amp;16;
v1 будет установлена на 16, если 4ый бит существует, и на 0, если не существует.</code></pre> 
Так, эта команда может быть очень полезна, к примеру, при проверке на <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">флаги существ</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!BMx16:F?i; - записать флаги стека в переменную i
!!VRi:&amp;134217728; - посмотреть, существует ли бит "Защита"
!!IF&amp;i&gt;0:M^Этот отряд принял защитную стойку^;</code></pre></div></details>
<div class="erm-paragraph">Вы также можете удалить определённый бит без удаления остальных бит в переменной.<br>
Для этого используйте: &amp;-(N+1), где N - значение удаляемого бита.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-12"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show12"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Для удаления у монстра флага «живой» (бит 16), используйте: -(16+1) = -17.
<pre class="erm-example"><code class="language-erm">...
!!VRv1:&amp;-17;</code></pre>
Вместе с тем, часто многими скриптерами используется такой способ удаления флага, когда перед самим удалением этот же флаг прибавляется. 
Такой способ исключает ситуацию, когда вы будете удалять флаг, которого у монстра изначально не было (эдакая защита "от дурака").
<pre class="erm-example"><code class="language-erm">...
!!VRv1:|16 -16;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><strong class="erm-tone-red"><span class="erm-anchor" id="ref-rec-vr-or"></span>|$</strong></div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text">OR</td>
<td>0 и 0 → <strong>0</strong></td>
<td>0 и 1 → <strong>1</strong></td>
<td>1 и 0 → <strong>1</strong></td>
<td>1 и 1 → <strong>1</strong></td>
</tr></table></div>
<div class="erm-paragraph">«<strong>|</strong>» - битовая операция ИЛИ над битами переменных, может быть использована 
для установки определённого бита без изменения других бит. Например, установим 5й бит (32) в v1:
<pre class="erm-example"><code class="language-erm">!!VRv1:|32;</code></pre>
Если v1 уже имеет этот бит, ничего не изменится. Если нет, бит будет установлен.<br>
Это может быть полезно для добавления новых <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">флагов монстрам</a>, если вы не знаете, 
какие флаги они уже имеют, и фактически, это единственный полностью безопасный синтаксис для этого действия.</div>

<hr>
<div class="erm-paragraph"><strong class="erm-tone-red"><span class="erm-anchor" id="ref-rec-vr-xor"></span>X$</strong></div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text">XOR</td>
<td>0 и 0 → <strong>0</strong></td>
<td>0 и 1 → <strong>1</strong></td>
<td>1 и 0 → <strong>1</strong></td>
<td>1 и 1 → <strong>0</strong></td>
</tr></table></div>
<div class="erm-paragraph">Выполняет битовое исключающее ИЛИ над битами переменной.<br>
Например, X-1 инвертирует биты переменной.<br>
Для проверки разницы между двумя переменными используйте синтаксис: <strong><span class="erm-tone-purple erm-legacy-strong">!!VR</span></strong>@:X$,
где @ - переменная, являющаяся одной из переменных для сравнения и также получающая результат сравнения; 
$ - вторая переменная для сравнения.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-3"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Скажем, v1=163 (10100011) и v2=106 (01101010). 
Тогда..
<pre class="erm-example"><code class="language-erm">!!VRv1:Xv2; в v2 всё ещё 106

 10100011
 01101010
;-------- XOR
 11001001</code></pre>
Итак, v1=201 (11001001).<br>
Давайте теперь инвертируем статус бита переменной:
<pre class="erm-example"><code class="language-erm">!!VRi:X256;
Если переменная i имеет включенный 8ой бит (256), он отключится, иначе - включится.</code></pre></div></details>

<hr><h3><span class="erm-anchor" id="ref-rec-vr-mat"></span>Арифметические операции с переменными.</h3>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center">
	<tr><td width="30"><strong class="erm-tone-red">+#</strong></td><td>Добавить # к переменной</td></tr>
	<tr><td><strong class="erm-tone-red">-#</strong></td><td>Отнять # от переменной</td></tr>
	<tr><td><strong class="erm-tone-red">*#</strong></td><td>Умножить переменную на #</td></tr>
	<tr><td><strong class="erm-tone-red">:#</strong></td><td>Разделить переменную на # (не пытайтесь разделить на 0)</td></tr>
	<tr><td><strong class="erm-tone-red">%#</strong></td><td>Установить переменную на значение остатка от деления на #</td></tr>
</table></div>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRi:-1 +v15; - отнять единицу и прибавить v15</code></pre>
<u></u><span class="erm-anchor" id="ref-rec-vr-13"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-vr-show13"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<ul>
	<li>Делить на ноль по-прежнему нельзя :) Если такое всё же произойдёт, появится ошибка ERM: <span class="erm-anchor" id="ref-rec-vr-dl3"></span><span class="erm-game-text">Sorry. Division by zero :-)</span>.</li>
	<li>Нахождение остатка от деления, когда у вас отрицательное делимое, происходит так же, как и для положительного числа, но остаток получается отрицательным:
<pre class="erm-example"><code class="language-erm">!!VRv1:S-5;	Пусть v1=-5
!!VRv1:%2;	тогда остаток от деления на 2 будет = -1</code></pre>
Т.е. для таких операций знак берётся по делимому. Остальное подчиняется формуле: [Частное] × [Делитель] + [Остаток] = [Делимое].</li>
	<li>Существует баг – после операций с переменной <em>i</em> для того же ресивера арифмет.операции <strong>+</strong>/<strong>-</strong> не срабатывают, когда идут следом через пробел (исправлено в <a href="../../compatibility/#ref-era-index">ERA</a>).
<pre class="erm-example"><code class="language-erm">!!VRi:S10;
!!VRy1:Si -1; [y1=10, что не верно]
!!VRy2:Si +1; [y2=10, что не верно]
!!VRy3:Si -j; [будет ошибка ЕРМ]
!!VRy4:Si +y1; [будет ошибка ЕРМ]</code></pre>
</li>
</ul></div></details>


<hr><h3><span class="erm-anchor" id="ref-rec-vr-string"></span>Команды над текстовыми переменными</h3>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>!!VRz#</strong></span><br>
Есть следующие текстовые переменные:<br>
z1…z1000. Они могут быть изменены (любая переменная) для использования.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vr-h"></span><span class="erm-anchor" id="command-h-flag-ustring"></span>H#</strong></span><br>
Установить, содержит ли <em>z</em>-переменная пустое значение или нет.<br>
         # – номер флага для сохранения 
результата      <br>
          = 1 – если там текст<br>
          = 0 – если переменная пуста<br>
Все знаки вроде пробела, новых строк будут игнорированы и расценены как пустые.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-4"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz100:S^Здорово!^;
!!VRz101:S^^;
!!VRz102:S^ ^;
!!VRz100:H300; - флаг 300 = 1
!!VRz101:H301; - флаг 301 = 0
!!VRz102:H302; - флаг 302 = 0</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m"></span>
<span class="erm-tone-red"><strong>M#<br>!!VRz#:M1/z#1/#2/#3</strong></span><br>
Получить подтекст из переменной z#1 и установить его в z#<br>
         z# – переменная, куда сохранять 
результат<br>
         z#1 – переменная-исходник<br>
         #2 – позиция, откуда начинать 
копирование (0 – по умолчанию) (в символах)<br>
         #3 – длина подтекста для 
копирования (в символах)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-5"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz1:S^Давайте попытаемся скопировать этот текст^;
!!VRz2:M1/z1/8/10;</code></pre>
Получим: z2 = «попытаемся»</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m2"></span>
<span class="erm-tone-red"><strong>!!VRz#:M2/z#1/#2</strong></span><br>
Получить слово с порядковым номером #2 из переменной z#1 и установить его в z#<br>
         z# – переменная, куда сохранится слово<br>
         z#1 – переменная-исходник<br>
         #2 – номер слова (по умолчанию – 0)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-6"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-vr-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Разделители: пробелы, точки, запятые, знаки табуляции, новые строки, – не нумеруются.<br>
<u>Пример</u>:<br>
«Переменная, которая содержит.. И ещё много         слов»<br>
Мы получим следующие слова:
<pre class="erm-example"><code class="language-erm">0 -&gt; «Переменная»
1 -&gt; «которая»
2 -&gt; «содержит»
3 -&gt; «И»
4 -&gt; «ещё»
5 -&gt; «много»
6 -&gt; «слов»</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m3"></span>
<span class="erm-tone-red"><strong>!!VRz#:M3/#1/#2<br>!!VRz#:M3/#1</strong></span><br>
Конвертирует число в текст.<br>
         z# – переменная, которая будет 
содержать результат<br>
         #1 – любое число (переменная) 
для конвертирования<br>
         #2 – система исчисления (по 
умолчанию – 10)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-7"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz1:M3/123; - z1 = «123»
!!VRz1:M3/123/10; - z1 = «123» (как и выше)
!!VRz1:M3/-123; - z1 = «-123»
!!VRz1:M3/127/16; - z1 = «0x7F» (шестнадцатеричная система счисления)</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m4"></span><span class="erm-anchor" id="command-m4-length-m5-first-m6-last"></span>
<span class="erm-tone-red"><strong>!!VR#:M4/?$</strong></span><br>
Получить длину текста<br>
         # – <em>z</em>-переменная<br>
         $ – любая числовая переменная 
(для записи длины)<br>
В длину включаются пробелы.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m5"></span>
<span class="erm-tone-red"><strong>!!VR#:M5/?$</strong></span><br>
Получить кол-во пробелов в начале текстовой переменной<br>
         # – <em>z</em>-переменная<br>
         $ – любая числовая переменная 
(для записи номера позиции)<br>
Счёт начинается с 0 (нет пробелов). Если 
переменная (текстовая) пуста, позиция равна -1.</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-m6"></span>
<span class="erm-tone-red"><strong>!!VR#:M6/?$</strong></span><br>
Получить номер последнего символа (не пробела)<br>
         # – <em>z</em>-переменная<br>
         $ – любая числовая переменная 
(для записи номера позиции)<br>
Счёт начинается с 0. Если переменная пуста, позиция равна 0.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-8"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!VRz10:S^  Абв Где   ^; - текст
!!VRz10:M4/?y5; - получить длину в y5
!!VRz10:M5/?y6;	- получить порядковый номер первого символа (не пробел)
!!VRz10:M6/?y7;	- получить порядковый номер последнего символа (не пробел)
Итого: y5 = 12, y6 = 2, y7 = 8.</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-v"></span><span class="erm-anchor" id="command-vstring-zstring-sstring-string"></span>
<span class="erm-tone-red"><strong>!!VR$:Vz#</strong></span><br>
Конвертировать текст в целое значение или значение с плавающей запятой.<br>
         $ – любая переменная для 
интегрирования (f…t, v#, w#, x#, y#) или с плавающей запятой (e)<br>
         z# – переменная-исходник (z)<br>
Вы можете использовать синтаксис …е… (инженерский 
стандарт чисел с плавающей запятой). Если значение не может быть конвертировано, 
то устанавливается на 0. Знаки пробела игнорируются.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-vr-9"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
«123» → 123<br>
«+123» → 123<br>
«-123» → -123<br>
«.325» → 0.325<br>
«-1.25e+1» → -12.5 (-1.25 * 10^1)</div></details> 
<hr> 
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-str-set"></span>
<span class="erm-tone-red"><strong>S^Текст^</strong></span><br>
Установить текст текстовой переменной.</div> 
<div class="erm-paragraph"><strong><span class="erm-tone-red">S#</span></strong><br>
Копировать текст из переменной z# в текущую.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-15"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-vr-show15"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Здесь можно указывать переменную без префикса <em>z</em>. ERM учитывает только индекс.<br>
В <a href="../../compatibility/#ref-era-index">ERA</a> рекомендовано писать с префиксом <em>z</em>.
<pre class="erm-example"><code class="language-erm">!!VRz2:S1; аналогична !!VRz2:Sz1;</code></pre>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vr-u"></span>
<span class="erm-tone-red"><strong>!!VRz#1:Uz#2<br>!!VRz#1:U^текст^</strong></span><br>
Подтекстный поиск в <em>z</em>-переменных.<br>
Поиск слова/символа/знака из переменной z#2 или из строки ^текст^ в переменной z#1, 
с последующей установой флага 1 на ИСТИНА, если найдено.<br> 
В обоих случаях <em>z</em>-переменная может быть любого типа (обычная, локальная, ERT).<br>
Эта команда может быть с лёгкостью ERT'ифицирована.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-vr-10"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-vr-show10"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Не зависит от регистра. Так «Меч» будет найден и в «мЕЧ». Пробелы игнорируются, так что 
«Привет    », «   привЕт» и 
«   ПривЕт      » - все будут значить просто "привет". 
Но эта команда не пропускает пробелы, если после них идёт какой-либо текст. Так что <br>
«привет,    это я» и «привет,  это я» будут различными.<br>
<u></u><span class="erm-anchor" id="ref-rec-vr-11"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-vr-show11"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Здесь вы получите два сообщения: «Да!» и «Снова да!»
<pre class="erm-example"><code class="language-erm">ZVSE
!#VRz100:S^  Меч

^;
!#VRz200:S^
Это Текст про_меч

^;
!#VRz200:Uz100;
!#IF&amp;1:M^Да!^;
!#VRz200:U^

МеЧ
^;
!#IF&amp;1:M^Снова да!^;</code></pre></div></details></div></details>

<hr>
<h3><span class="erm-anchor" id="ref-rec-vr-addstring"></span>Соединение текстовых переменных</h3>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>+#</strong></span><br>
Соединить текстовую переменную z# с текущей (добавляется в конец)</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>+^текст^</strong></span><br>
Соединить текстовую переменную z# с определённым текстом (добавляется в конец)</div>
<hr>

















</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!VRvariable:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">S присваивает с числовым преобразованием по типу; S?$ читает. C обрабатывает последовательные переменные и копирует битовое представление, включая float: целое 1 через C не превращается в float 1.0.</div>
<hr>
<div class="erm-paragraph">Сложение, вычитание, умножение, деление, остаток выполняются последовательно. Нулевой делитель недопустим; знак остатка совпадает с делимым (-5 % 2 = -1).</div>
<hr>
<div class="erm-paragraph">&amp; оставляет общие биты, вертикальная черта устанавливает биты, X переключает. Сдвиги ERM 2 работают с битовым представлением. Для удаления маски N используйте AND с инверсией N; не вычитайте отсутствующий бит.</div>
<hr>
<div class="erm-paragraph">Классический R добавляет случайное 0..# включительно; двухпараметрический R задаёт состояние генератора. Современный трёхпараметрический выбирает min..max; четвёртый free влияет на детерминизм сетевого PvP. T использует независимый непредсказуемый генератор и не подходит для синхронной игровой логики.</div>
<hr>
<div class="erm-paragraph">F ограничивает числовой диапазон; min&gt;max даёт min. Третий аргумент управляет ошибкой, четвёртый заменяет выход за диапазон default. Типы границ должны совпадать. B превращает ненулевое число в 1, ноль в 0.</div>
<hr>
<div class="erm-paragraph">Для строки H задаёт флаг непустого текста, игнорируя пробелы/переносы. U ищет подстроку без регистра, обрезая крайние пробелы, и записывает результат во флаг 1.</div>
<hr>
<div class="erm-paragraph">Подстрока с позиции 0; слово с индекса 0 (разделители пробел, точка, запятая, табуляция, перенос); число в текст (основание по умолчанию 10).</div>
<hr>
<div class="erm-paragraph">Длина с пробелами; первый непробельный символ (-1 для пустой строки); последний непробельный (классический пустой результат 0).</div>
<hr>
<div class="erm-paragraph">V преобразует строку в int/float, неудача даёт 0. Z создаёт временную ERM-строку и записывает её индекс для возврата из FU. S копирует текст, + дописывает; используйте явные z-переменные.</div>
<hr>
<div class="erm-paragraph">Отделяйте числовую арифметику, сырое копирование и строковые индексы от адресов памяти. Современные дополнения описаны по ERA III changelog; старые ошибки операций с i исправлены.</div></section>
:::

## Связанные материалы {#related}

[Переменные / Variables](../../variables/) · [SN](../../receivers/sn/)



## Связанные команды и таблицы {#reference-links}

[Переменные, строки и массивы](../../variables/) · [Отладка и совместимость ERM](../../compatibility/) · [Контрольные слова объектов](../../tables/object-control-words/#values) · [Биты, маски и HEX](../../tables/bits/) · [Битовые флаги существ](../../tables/creature-flags/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.16, ?](../../compatibility/#era3-v-3-9-16-l281) — Note on generating random values in battles. Era uses deterministic random number generator in network PvP battles in order to prevent most of possible desynchronizations. Generator state depends on current round ID, aut…
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l308) — Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in PvP battles. Example: !?FU(OnBattleScreenMouseClick)&i^mouse_action^=(MOUSE_R…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l448) — Extended 'VR:F' command with the 4-th parameter. VR(intVar):F(minValue)/(maxValue)/(showErrors)/(defaultValue); If (defaultValue) is specified and variable does not fit (minValue)..(maxValue) range, it will be set to (de…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l479) — Added the following functions to Era Erm Framework: !?FU(Interpolate); ; Interpolates ERM variables inside given string (%v1, etc). Can be used for nested translation strings like %T(...) is json. !#VA(strPtr:x); Source …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l802) — Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting existing values in a smart way. ; The parts may have overlapping indexes. The s…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.4, +](../../compatibility/#era3-v-3-9-4-l1094) — Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack ID to pass control to. !?FU(PrepareMultiPicDialog); ; Initializes IF:N dialo…
- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1167) — Rewrote game random number generator (RNG) engine. Main changes: - All RNGs are not thread safe now. They should be used in the main thread only. - There are two main RNGs: the global one (rand/srand/VR:R) and the unique…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1230) — Added new events to Era Erm Framework: "OnKeyReleased_AdvMap", "OnKeyReleased_Battle", "OnKeyReleased_HeroScreen", "OnKeyReleased_HeroMeetingScreen", "OnKeyReleased_Town", occuring right after "OnKeyReleased" events and …
- [ERA 3.8.4, +](../../compatibility/#era3-v-3-8-4-l1436) — Era uses two separate Mersenne Twister generators now. The first one is used as native rand()/srand()/VR:R replacement for all cases except of pre-battle configuration, network PvP battle and VR:T command. The second one…
- [ERA 3.8.1, +](../../compatibility/#era3-v-3-8-1-l1515) — Implemented stable multiplayer battles support by introducing deterministic pseudo random number generator in PvP battles. Thanks to ZVS for idea. Deterministic generator influences all calls to rand() function, includin…
- [ERA 3.8.1, +](../../compatibility/#era3-v-3-8-1-l1519) — Added "DebugRng" option to heroes3.ini. If set to 1, rand/srand/VR:R commands will generate debug messages.
- [ERA 3.8.1, -](../../compatibility/#era3-v-3-8-1-l1529) — Fixed game random number generator behavior: reseeding does not influence Mersenne Twister generator state anymore. VR:T will not return the same values after battle.
- [ERA 3.5.0, +](../../compatibility/#era3-v-3-5-0-l1676) — Rewritten part of old ERM engine, which was responsible for conditions evaluations. - It's now possible to use spaces and line feeds to decorate complex conditions. Example: !!if|i^Master_Warrior_Hero%(hero)^ <> (prevWas…
- [ERA 3.4.3, +](../../compatibility/#era3-v-3-4-3-l1718) — Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1. Example: !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/?(goldAmount:y); !!VR(hasGold:y):S(goldAmount) B; now hasGold = (TRUE) or (…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1895) — Implemented automatical static and dynamic index checking for ERM 2.0 arrays. Invalid indexes are reported and forced to valid range. Example: !#VA(msgType&#91;7&#93;:y) (msgColor&#91;7&#93;:y); !!re i/(PLAYER_FIRST)/(PLAYER_LAST); !!VR…
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1946) — !!VR:F command can be called with 3 parameters now: !!VR(var):F(minValue)/(maxValue)/(showErrors); If the third parameter is specified and not (FALSE), values outside specified range are reported using regular ERM error …
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2141) — Restored VR:S?$ syntax support from Era 2.
- [Все связанные записи](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
