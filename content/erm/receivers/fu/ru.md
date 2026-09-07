---
{"title":"Вызовы функций (FU)","summary":"Ресивер FU: вызовы функций, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Вызовы функций (FU)"}
---

## Ресивер FU {#ref-rec-fu}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-fu-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>FU</strong> (функция)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-fu-red"></span><span class="erm-tone-red"><br>
!!FU#:XXXX;</span> 
- ресивер функции – передаёт контроль ERM-коду функции.</strong><br>
         # = 1..30000</div>
<div class="erm-paragraph">Используется для создания специальной секции кода, к которой можно получить доступ из нескольких мест, и использовать повторно.<br>
Функции вызываются ресивером FU. А триггер функции (<a href="../../triggers/fu/#ref-tr-fu">!?FU</a>) определяет начало кода функции.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-fu-5"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-fu-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если вы вызываете функцию инструкцией, функция должна быть описана ДО инструкции. Например, если вы хотите 
вызвать функцию FU100 в начале карты, вы можете поместить её как инструкцию <span class="erm-anchor" id="ref-rec-fu-erm"></span><span class="erm-inline-code"><strong class="erm-tone-gold erm-legacy-strong">!#FU</strong>100:P;</span> 
но она не будет работать, если функция не была описана ранее. Так что триггер функции (и её код) должны быть первыми.
<pre class="erm-example"><code class="language-erm">ZVSE
!?FU100;
!!IF:M^Это функция 100.^;
!#FU100:P;</code></pre>
Пример выше работает отлично, но если <span class="erm-inline-code"><strong class="erm-tone-gold erm-legacy-strong">!#FU</strong>100:P;</span> поставить на первое место 
(прямо после ZVSE), она не будет работать. Вы не получите сообщения об ошибке, но функция не будет выполняться.<br>
Вы можете использовать переменные в ресивере функции. Так, вы можете, к примеру, использовать такой код: 
<span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!FU</strong>v10:P;</span> и функция под номером, равном числу, записанному <em>сейчас</em> в v10, 
начнёт работу (если триггер этой функции существует).<br>
<br>
<u>
</u><span class="erm-anchor" id="ref-rec-fu-1"></span><details class="erm-comment"><summary>Примеры функций (<span class="erm-anchor" id="ref-rec-fu-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<u>Пример 1</u>
<pre class="erm-example"><code class="language-erm">!?FU1;
!!IF:M^Здесь мы вначале. %X1 %X16^;
!!VRx1:+1;
!!FU2:Px1;
!!IF:M^А здесь - в конце. %X1 %X16^;</code></pre>
<br><u>Пример 2</u>
<pre class="erm-example"><code class="language-erm">...
!!VRv10:S5;
!!FUv10:P;</code></pre>
В этом примере функция будет иметь номер 5 и заработает, только если триггер !?FU5 существует.<br>
<br>
Каждая функция имеет 100 уникальных переменных (y1..y100). Вы можете устанавливать, проверять и получать эти переменные. 
Каждый вызов создаёт индивидуальные переменные, которые после выполнения функции опять обратятся в нули. 
Так что все операции над локальными переменными могут иметь место только в теле функции.<br>
<br>
<u>Пример 3</u>
<pre class="erm-example"><code class="language-erm">...
!!FU1:Pi/102/v10/35;
!?FU1;
!!IF:M^x1=%X1, x2=%X2^;</code></pre>
<br>
Здесь, если вы вызовете функцию с параметрами, переменные x1…x16 в теле функции будут иметь соответственные значения.
<pre class="erm-example"><code class="language-erm">...
!!FU1:P10/20;	будет показано "x1=10, x2=20"
!!VRv5:S33;
!!FU1:Pv5/0;	будет показано "x1=33, x2=0"</code></pre>
Переменные y1..y100 служат локальными переменными. Вы можете использовать их внутри функции для любых нужд. 
Все функции имеют свои собственные уникальные локальные переменные, даже если вы вызываете новые функции. 
Когда функция оканчивается, <em>y</em>-переменные сбрасываются на 0.
<pre class="erm-example"><code class="language-erm">!!FU1:P;	вызвать функцию 1

!?FU1;		y1 не настроена (y1=0)
!!VRy1:S1;	y1=1
!!FU2:P;	вызвать функцию 2
!!IF:M^y1=%Y1^; "y1=1" (y1 возвратит оригинальное значение 1, установленное перед вызовом функции 2)
!?FU2;		y1 не настроена (y1=0)
!!VRy1:S2;	y1=2
!!IF:M^y1=%Y1^;	"y1=2"</code></pre>
Вы можете добавлять код (ресиверы) к уже существующему триггеру функции, 
используя одинаковые триггеры два или более раз.<br>
<br>
<u>Пример 4</u>
<pre class="erm-example"><code class="language-erm">!?FU1;
!!... ресиверы 1
...
!?FU1;
!!... ресиверы 2
...
!!FU1:...</code></pre>
Последний вызов выполнит все ресиверы 1 и затем все ресиверы 2 в том же порядке.
</div></details></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-fu-a"></span><span class="erm-anchor" id="command-a"></span>A?$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Возвращает кол-во <em>x</em>-аргументов (не включая x16 для <a href="../do/#ref-rec-do">DO:P</a>), полученных функцией.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-fu-10"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-fu-show10"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Т.е. даёт возможность запрашивать кол-во аргументов функций, вызываемых через FU:P, FU:D, DO:P.<br>
Такой механизм позволяет писать функции с необязательными параметрами (параметры со значениями по умолчанию) и 
функции с переменным числом аргументов.<br>
<u>Пример 1</u>:
<pre class="erm-example"><code class="language-erm">!?FU(KillHero);
; Убить указанного героя. Демонстрация необязательных параметров.
; [x1] - номер героя (опционально, -1 = по умолчанию)
!!FU:A?k;       получить число аргументов ф-ции
!!VRx1&amp;k=0:S-1; установить в x1 значение -1, если нет ни одного аргумента
!!HEx1:K;       убить героя

!?CM0;
!!FU(KillHero):P; убить текущего героя
!!FU(KillHero):P155; убить Ксерона</code></pre><br>
<u>Пример 2</u>:
<pre class="erm-example"><code class="language-erm"> !?FU(sum);
; Вычислить сумму всех указанных параметров
; x1..x[n] - аргументы для суммирования
; x[n+1] - результат вычисления
!!FU:A?k;  подсчитать число аргументов
!!VRxk:S0; установить результат = 0

!!VRi:S0;
[:for]
!!SN&amp;i&gt;=k:G[end-for]; повторить k раз
!!VRxk:+xi; добавить значение следующего аргумента к результату
!!VRi:+1;
!!SN:G[for];
[:end-for]

!?CM0;
!!FU(sum):P100/200/300/400/?s; получить 100 + 200 + 300 + 400 в переменную "s"
!!IF:M^%Vs^; покажет "1000"
</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fu-c"></span><span class="erm-anchor" id="command-c"></span>C$</strong></span><br>
Проверить на неправильные <em>y</em>-переменные. Можно использовать без 
параметров, что равнозначно !!FU:C0;<br>
         $ = 0 – разрешить проверку (можно просто FU:C)<br>
         $ =1 – запретить проверку (установлено по умолчанию на старте)
<br>
Команда лишь проверит, использовали ли вы <em>y</em>-переменные вне тела функции (во время выполнения), 
ведь зачастую это главный источник проблем. Наиболее логично использовать эту команду как инструкцию и она может 
быть полезна при тестировании скриптов.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-fu-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-fu-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!#FU:C;
!#TM1:S1/999/1/1; - установить таймер 1 для красного игрока
!?TM1;
!!VRy1:S1;
!!FU123:P;
!?FU123;
!!VRy1:S2;</code></pre>
В этом примере, когда таймер начнёт свою работу, вы получите сообщение, что 
<em>y</em>-переменная используется вне тела функции.</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-fu-d"></span><span class="erm-anchor" id="command-d-1-16"></span>D$1[/$2/$3/…/$16]</strong></span><br>
Поддержка сетевых игр. Вызывает функцию на стороне сетевого оппонента. 
Синтаксис такой же, как и <a href="./#ref-rec-fu-p">FU:P</a>, и, соответственно, особенности 
такие же. Для получения доступа к параметрам используйте синтаксис x# (# = 
1..16). Они могут быть использованы где угодно (внутри функции) как обычные 
переменные. Когда вы вызываете функцию, все параметры, которые не были 
установлены, будут наследованы.<br>
<em>Примечание:</em> параметр D$1 должен быть помещён в вызове !!FU (даже если 
нет значений, необходимых для передачи в функцию) для корректной работы команды.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-fu-3"></span><details class="erm-comment"><summary>Пример 1 (<span class="erm-anchor" id="ref-rec-fu-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Скажем, вы используете некоторые специфические команды, которые возымеют эффект на поле боя (например, кастование заклинаний с 
помощью ERM). Опять же, если вы проведете действия на одной стороне, возникнет проблема, потому что ничего не произошло на другой стороне. 
Теперь вы можете использовать дистанционный вызов для таких случаев. Это означает, что вы вызываете функцию, 
но она запускается не на этом, текущем, компьютере, а на втором (компьютере оппонента). Передаётся до 16 параметров.<br>
К примеру, на своей стороне вы имеете:
<pre class="erm-example"><code class="language-erm">...
!!BMv10:Mi/y5/5;</code></pre>
Для корректного выполнения вы должны проделать некоторые вещи:
<pre class="erm-example"><code class="language-erm">!!BMv10:Mi/y5/5;
!!FU12345:Dv10/i/y5/5;
!?FU12345;
!!BMx1:Mx2/x3/x4;
</code></pre>
Это всё. Принцип работы: FU:D немедленно передаёт все <em>x</em>-параметры на другой 
компьютер и вызовет там функцию 12345. Так команда <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>v10:M...;</span> будет работать на 
одном компьютере и команда <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>x1:M...;</span> на другом. Если вы сделаете всё правильно, 
то получите одинаковый эффект на обеих сторонах.<br>
Заметьте, что вы можете передать значения некоторых переменных командой <a href="../ip/#ref-rec-ip-v">IP:V</a> и затем 
вызвать FU:D для передачи более, чем 16 <em>x</em>-параметров на другой компьютер.</div></details>
<u>
</u><span class="erm-anchor" id="ref-rec-fu-4"></span><details class="erm-comment"><summary>Пример 2 (<span class="erm-anchor" id="ref-rec-fu-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!?BG0;
!!IF:M^Привет!^;
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;
!!IP:V99/100;
!!FU123:D1/2/3/4/5;

!?FU123;
!!IF:M^V99=%V99, V100=%V100, V101=%V101, X1=%X1, X2=%X2, X3=%X3, X4=%X4, X5=%X5^;
</code></pre>
Вы увидите сообщение <em>"Привет!"</em> при любом действии стека, далее увидите сообщение <em>
"V99=99, V100=100, V101=0, X1=1, X2=2, X3=3, X4=4, X5=5"</em> на другом компьютере. 
Затем вы получите сообщение <em>"Привет!"</em> на другом компьютере.<br>
Если вы продолжите, следующее полученное вами сообщение будет <em>"V99=99, V100=100, 
V101=101, X1=1, X2=2, X3=3, X4=4, X5=5"</em>. Так, изменилась v101. Это потому что вы 
отправили v99 и v100 через сеть и вызвали функцию, которая покажет сообщение 
(поэтому v101 = 0). Но затем триггер !?BG0 сработал на стороне защищающегося и 
v101 была установлена на значение 101.<br>
Этот пример лишь демонстрация действий, потому что этот скрипт:
<pre class="erm-example"><code class="language-erm">!?BG0;
!!IF:M^Привет!^:
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;</code></pre>… будет работать одинаково на обеих сторонах. Но, если вы запустите скрипт как 
реакцию на действие человека (обычно клик мыши), вам нужно будет продумать 
передачу изменений на другой компьютер.</div></details><br>
См. также: <a href="../ip/#ref-rec-ip">ресивер IP</a>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fu-e"></span><span class="erm-anchor" id="command-e"></span>E</strong></span><br>
Эта команда немедленно выходит из последней запущенной функции или 
триггера.<br>
Вы можете использовать эту команду для избежания 
перезапуска функции.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-fu-6"></span><details class="erm-comment"><summary>Пример 1 (<span class="erm-anchor" id="ref-rec-fu-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Было:<pre class="erm-example"><code class="language-erm">!?FU123;
...
!!VRv10:S0 T10; получить случайное значение
!?FU123&amp;v10&lt;5; продолжать, только если случайное значение меньше 5
...</code></pre>
Теперь вы можете использовать следующий способ:
<pre class="erm-example"><code class="language-erm">!?FU123;
...
!!VRv10:S0 T10; получить случайное значение
!!FU&amp;v10&gt;=5:E; выйти из функции, только если случайное значение больше либо равно 5
...</code></pre></div></details>
<u></u><span class="erm-anchor" id="ref-rec-fu-7"></span><details class="erm-comment"><summary>Пример 2 (<span class="erm-anchor" id="ref-rec-fu-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE3/4/0; все триггеры для локальных событий
!!IF:M^L0-0^;
!!FU123:P;
!!IF:M^L0-1^;
!!FU:E; 	выход
!!IF:M^L0-2^;

!?FU123;
!!IF:M^L1-0^;
!!FU124:P;

!!IF:M^L1-1^;
!!FU:E; 	выход
!!IF:M^L1-2^;

!?FU124;
!!IF:M^L2-0^;
!!FU125:P;
!!IF:M^L2-1^;
!!IF:M^L2-1a^;

!?FU125;
!!IF:M^L3-0^;
!!FU126:P;
!!IF:M^L3-1^;
!!FU:E; выход
!!IF:M^L3-2^;

!?FU126;
!!IF:M^L4-0^;
!!IF:M^L4-1^;

!!FU:E; выход
!!IF:M^L4-2^;
</code></pre>
<br>
Вы получите следующие сообщения:<pre class="erm-example"><code class="language-erm">L0-0
L1-0
L2-0
L3-0
L4-0
L4-1
L3-1
L2-1
L2-1a
L1-1
L0-1</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fu-p"></span><span class="erm-anchor" id="command-p-1-16"></span>P$1[/$2/$3/../$16]</strong></span><br>
Означает старт функции, позволяет получить доступ к параметрам x1..x16.<br>
Опция P всегда должна существовать для старта функции:
<pre class="erm-example"><code class="language-erm">!!FU1:P; - правильно,
!!FU1;	 - неправильно</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-fu-s"></span><span class="erm-anchor" id="command-s"></span>S#/?$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Даёт возможность запрашивать синтаксис, который использовался для определённого параметра функции.
</div><pre>        # – индекс аргумента
        $ – тип синтаксиса:
	0 - получить: например <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!FU</span>..:P?y1;</strong>
	1 - установить: например <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!FU</span>..:P10;</strong>
	2 - добавить: применяется через префикс "<em>d</em>", например <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!FU</span>..:Pd200;</strong></pre>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> используя эту команду, скриптеры смогут писать функции, которые будут действовать так же, как обычные команды ERM. Например, одна функция для получения/установки/добавления рекрутов в жилище существ.
</div>
<hr>











</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!FU(FunctionName):подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">Число фактически переданных аргументов; счётчик x16 от DO не включается.</div>
<hr>
<div class="erm-paragraph">Устаревшая проверка y вне функций: 0 включает, 1 отключает. Современный ERA-контекст локальных переменных шире классического WoG.</div>
<hr>
<div class="erm-paragraph">Удалённый вызов в сетевой игре. Код должен существовать у обеих сторон; не передавайте адреса памяти как переносимые значения.</div>
<hr>
<div class="erm-paragraph">Заканчивает текущий обработчик. Не отменяет игровое действие и не останавливает оставшиеся обработчики того же события; для всей цепочки существует SN:Q.</div>
<hr>
<div class="erm-paragraph">Вызывает функцию и передаёт x1..x16. Выходы задавайте через ?; для современных правил GET/SET/ADD смотрите статью о функциях.</div>
<hr>
<div class="erm-paragraph">Синтаксис аргумента по позиции: 0 GET, 1 SET, 2 ADD. Позволяет реализовать функции чтения/записи.</div>
<hr>
<div class="erm-paragraph">Для собственных функций используйте уникальные имена с префиксом мода. Вызов инструкцией выполняется по порядку загрузки: определение должно уже существовать.</div></section>
:::

## Связанные материалы {#related}

[FU](../../functions/) · [DO](../../receivers/do/)



## Связанные команды и таблицы {#reference-links}

[Обработчик функции (FU)](../../triggers/fu/) · [Отладка и совместимость ERM](../../compatibility/) · [Циклические вызовы (DO)](../do/) · [Сетевая синхронизация (IP)](../ip/#command-f-1-2-v-1-2) · [Сетевая синхронизация (IP)](../ip/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.19, *](../../compatibility/#era3-v-3-9-19-l238) — "OnRemoteEvent" is not triggered for FU:D call anymore. Era now uses FireRemoteEvent to synchronize the creation of objects on adventure map in multiplayer.
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.4, -](../../compatibility/#era3-v-3-9-4-l1161) — Fixed bug: custom network events and FU:D didn't work in battle.
- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1205) — Erm "FU:D" command was fully rewritten. Fixed bug: HD mod used to disable FU:D on adventure map. From now FU:D supports arbitrary string parameters and d-modifiers.
- [ERA 3.4.0, *](../../compatibility/#era3-v-3-4-0-l2044) — Renamed "OnTownHallMouseClick" to more accurate "OnTownFortMouseClick". &#91;!&#93; SN:Q is deprecated and shoudn't be used for new scripts because it may break any ERM library/mod/script functionality. ERM interpreter and Era E…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2469) — Added support for d- syntax in function parameters. !!FU(edu_Test):Pd-200; will pass -200, previously 200
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2481) — Improved Heroes 3 complex dialogs support. Credits: Berserker, igrik. IF:N(msgType)/^text^&#91;/?result/(textAlignment)/(preselectedPicId)/(selectablePicsMask)&#93;. selectablePicsMask - bit mask of pictures, allowed for selecti…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2574) — Added new constants to "Era Erm Framework" mod: - ARG_SYNTAX_GET, ARG_SYNTAX_SET, ARG_SYNTAX_ADD for FU:S argument syntax types. - Numerous other new constants.
- [ERA 3.2.0, -](../../compatibility/#era3-v-3-2-0-l2812) — Fixed re/FU/DO/OB/...dozens of commands... didn't support global named variables in receiver parameters. Examples: !!FUi^edu_someFunc^:P; !!OBi^edu_x^/i^edu_y^/i^edu_z^:T?(objType:y);
- [ERA 3.2.0, -](../../compatibility/#era3-v-3-2-0-l2817) — Fixed bug: FU:S used to return corrupted values.
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3013) — Added Era exported function ShowErmError (Error: pchar); stdcall; The function shows regular ERM error dialog and can be used for ERM scripts error reporting and debugging. Example: !!if|(baseFaction)<(NO_TOWN)/(baseFact…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3050) — Added support for local z-strings as function parameters. They will be converted to temporary read-only z-variable indexes. Example: !!VR(str:z):S^haVe A nIce day!^; !!FU(StrToUpper):P(str); here z-1 will be converted in…
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3474) — !!FU/DO receivers can now be really called without arguments. For all WoG 3.58 ERM receivers except SN/MP calling subcommand without parameters actually passes single parameter with 0 value. Example: !!CM:R; is the same …
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3509) — Updated ERM Editor, based on Sublime Text. &#91;!&#93; !!FU:C is deprecated and not supported anymore. It may be reused in future.
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3515) — All function x-parameters, which were not passed, are now initialised with zeroes. This behavior is suitable for optional arguments. Just don't pass odd arguments in !!FU:P/!!DO:P/etc, and they will have 0 value.
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3518) — Added new syntax to !!FU:A command. Set default values for parameters. !!FU:A#1/&#91;#2.../#3...&#93;; #1 - default value for the first parameter (x1) #2 - default value for the second parameter... The command changes values onl…
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3548) — It's proposed to decorate functions declarations in the following variants: ; Bried function description like: ; Hides rectangular area on the map. !?FU(es_HideMapSquare); !#VA(x1:x) (y1:x) (x2:x) (y2:x) (level:x); fast …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4007) — Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar to pass-by-reference in other programming languages. Example: !?FU(Add3):; ;…
<!-- ERA3-GENERATED:END -->
