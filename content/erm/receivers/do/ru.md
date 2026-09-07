---
{"title":"Циклические вызовы (DO)","summary":"Ресивер DO: циклические вызовы, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Циклические вызовы (DO)"}
---

## Ресивер DO {#ref-rec-do}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-do-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>DO</strong> 
(циклическая функция)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-do-red"></span><span class="erm-tone-red">!!DO#1/#2/#3/#4:XXXX;</span> 
- вызывает функцию несколько раз.</strong><br>
         #1 – номер функции<br>
         #2 – начальное значение<br>
         #3 – конечное значение<br>
         #4 – шаг<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-do-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-do-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Как и для <a href="../fu/#ref-rec-fu">FU</a>, если вы вызываете циклическую ф-цию инструкцией, тело функции должно быть описано ДО инструкции !#DO.<br>
Переменная x16 всегда хранит номер текущего круга функции. Например, если дельта функции (конечное значение минус начальное) равна 12, 
в первый раз x16 будет равно 1, во второй 2 и т.д. до 12. 
Изменяя переменную x16 фактически можно замедлять или ускорять выполнение функции, или завершить её, 
установив в x16 конечное значение функции (можно большее конечного значения). 
Помните - параметры функций можно устанавливать только внутри самой функции!
Для каждой функции все <em>x</em>-переменные (x1..x16) уникальны, т.е. две разные функции будут иметь разные значения <em>x</em>-переменных.<br>
<span class="erm-anchor" id="ref-rec-do-7"></span><details class="erm-comment"><summary><strong>Замечание</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-do-show7"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">Переменные x1..x15 устанавливаются только один раз при старте функции, а x16 – один раз для каждого круга циклической функции.<br>
Синтаксис "<strong>?$</strong>" поддерживается, но значения будут установлены по окончании выполнения фукции, а не на каждом её круге, как это описано <a href="./#ref-rec-do-more">ниже</a>.</div></details><br>
<br><u></u><span class="erm-anchor" id="ref-rec-do-2"></span><details class="erm-comment"><summary>Пример 1 (<span class="erm-anchor" id="ref-rec-do-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!DO1/2/10/2:P5;
...
!?FU1;
!!IF:M^Переменная x1=%X1 и x16=%X16^;
!!VRx1:+1;
!!VRx16:+1;</code></pre>
Вы должны увидеть следующее:
<pre class="erm-example"><code class="language-erm"> Переменная x1=5 и x16=2
 Переменная x1=6 и x16=5
 Переменная x1=7 и x16=8</code></pre></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-do-3"></span><details class="erm-comment"><summary>Пример 2 (<span class="erm-anchor" id="ref-rec-do-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!DO2/1/66/1:P47/11; - установить значение 47 для переменной x1
!?FU2;
!!VRv5:Sx1+1-x16;
!!IF:M^Значения переменных: x16=%X16 , и v5=%V5^;
!!VRx16:+7; - прыжок на 8</code></pre>
Вместо 66 вы получите лишь 9 циклов, с такими значениями:<pre>
<strong>x16:</strong>	 1	 9	17	25	33	41	49	57	 65
<strong>v5:</strong>	47	39	31	23	15	 7	-1	-9	-17</pre>

Также <span class="erm-anchor" id="ref-rec-do-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!VR</strong>x16:+7;</span> может быть заменено (например) на R7:
<pre class="erm-example"><code class="language-erm">!!VRx16:R7; - следующий прыжок будет сразу на седьмой цикл</code></pre>
или (например) с Rx2: 
<pre class="erm-example"><code class="language-erm">!!VRx16:Rx2; - добавление случайного числа до x2, в случае выше x2 равно 11.</code></pre></div></details>
</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-do-8"></span><details class="erm-comment"><summary>Вопросы и ответы (<span class="erm-anchor" id="ref-rec-do-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-do-q1"></span><div class="erm-tone-quote erm-note"><span class="erm-anchor" id="ref-rec-do-bold"></span><em class="erm-strong">Как x16 влияет на "вложенные" DO-ресиверы?</em></div>
Каждый DO-ресивер имеет своё отдельное значение x16.
<div class="erm-tone-quote erm-note"><em class="erm-strong">Скажем, у меня есть следующий код: (это будет отражать, скажем, проверку массива 10х11 для чего-либо).
<pre class="erm-example"><code class="language-erm">!!DO1/1/10/1:P;
!?FU1;
!!DO2/20/30/1:P;
;точка А
!?FU2;
;точка Б</code></pre>
Мой вопрос - точка Б будет иметь значение x16 между 1 и 10 или между 20 и 30?</em></div>
Между 20 и 30.
<div class="erm-tone-quote erm-note"><em class="erm-strong">Также, в точке А x16 будет принимать значение от DO1 или DO2?</em></div>
DO1, потому что линия находится внутри функции FU1.
<div class="erm-tone-quote erm-note"><em class="erm-strong">У меня есть главная функция, покрывающая всех героев (DO1/0/155/1), 
но у каждого героя я должен узнать существ в его слотах (DO2/0/6/1). Как это можно?</em></div>
Это решается простым "вложением" одной функции в другую.</div></details>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: ресиверы-циклы <a href="../../loops/#ref-rec-re">re/br/co</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-do-p"></span><span class="erm-anchor" id="command-p-1-15"></span><strong><span class="erm-tone-red">P$1[/$2/$3/../$16]</span></strong><br>
$1, $2 … $16 служат для установки x1..x16. Эти параметры могут быть использованы где угодно (в пределах функции) 
вместо использования стандартных переменных. Когда вы вызываете другую функцию, все параметры будут наследованы.<br>
Функция начинает работать после указания команды P, например:
<pre class="erm-example"><code class="language-erm">!!DO1/1/15/1:P; - правильно
!!DO1/1/15/1; - неправильно</code></pre>
Все команды ERM (ресиверы, инструкции) для использования имеют хотя бы один 
параметр в обязательном порядке.</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-do-more"></span>
<strong><u></u></strong><br></div><span class="erm-anchor" id="ref-rec-do-4"></span><details class="erm-comment"><summary>Расширение синтаксиса ресивера DO (<span class="erm-anchor" id="ref-rec-do-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Ресиверы FU и DO имеют расширенный синтаксис для запоминания некоторых значений. 
Теперь вы можете использовать синтаксис "<strong>?$</strong>" (получить) для записи значения в переменную. 
Вы можете использовать <em>v</em>, <em>y-</em> или <em>y</em> переменные для записи значений.<br>
Например:
<pre class="erm-example"><code class="language-erm">!!FU...:Pv1/v2/v3/?v4;</code></pre>
Теперь, если вы измените значение переменной x4 внутри функции, к примеру: 
<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>x4:Sx1;</strong>, - значение будет скопировано в v4 после окончания циклич.функции (цикла). 
Само значение переменной (v4) не передаётся в x4 при вызове функции, взамен передаёт номер переменной (в примере x4 будет равно 4). 
В ресивере DO значение номера (4) будет одинаковым при каждом цикле.<br>
Так, если вы установите её внутри тела функции, значение будет скопировано в переменную-получатель после окончания цикла 
и восстановлено на индекс переменной в начале следующего цикла.<br>
<u></u><span class="erm-anchor" id="ref-rec-do-5"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-do-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU2;
!!VRx2:Sx2+17;
!!VRx3:Sx1+17;

!?FU1;
!!FU2:P13/?y-1/?y-2;

!#IF:M^%Y-1, %Y-2^;
!#FU1:P;
!#IF:M^%Y-1, %Y-2^;
Вы увидите "0, 0" и затем "16, 30"</code></pre></div></details>

<div class="erm-paragraph">Также, вы можете использовать синтаксис "<strong>=$</strong>" для установки значения на каждом цикле DO. Т.е если вы измените данную переменную внутри тела функции, переменная будет допущена в следующий цикл функции изменённой.<br>
<em class="erm-strong">Замечание:</em> используйте такой синтаксис для циклич. фунций предельно внимательно, иначе ваш скрипт будет работать не так как задумывалось, и вы не сразу поймёте причину ошибки.</div>
<u></u><span class="erm-anchor" id="ref-rec-do-6"></span><details class="erm-comment"><summary>Примеры (<span class="erm-anchor" id="ref-rec-do-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"><div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">...
!!VRv35:S10;
!!DO3...:P=v35;
!?FU3;
!!VRv35:Sx1 +1;</code></pre>
В таком случае вы получите значения x1 равными 10, 11, 12, 13… при начале каждого цикла.<br>
Но если вы напишите код как
<pre class="erm-example"><code class="language-erm">...
!!VRv35:S10;
!!DO3...:Pv35;
!?FU3;
!!VRv35:Sx1 +1;</code></pre>
то x1 будет равен 10, 10, 10… в начале каждого цикла.<br>
Можно использовать несколько таких переменных в функции.</div>
<div class="erm-paragraph">Вы можете использовать похожие переменные (см. пример ниже) с синтаксисом "<strong>?$</strong>" и "<strong>=$</strong>".
<pre class="erm-example"><code class="language-erm">!?FU2;
!!VRx2:Sx1 +17;
!!IF:M^x=%X1^;

!?FU1;
!!VRy-1:S33;
!!DO2/1/20/1:P=y-1/?y-1;

!#FU1:P;
Вы увидите 33, 50, 67...</code></pre></div>
</div></details>

<hr>



</div></details>
</div></div>
</section>
:::

## Связанные материалы {#related}

[Циклы / Loops](../../loops/) · [FU](../../receivers/fu/)



## Связанные команды и таблицы {#reference-links}

[Вызовы функций (FU)](../fu/) · [Отладка и совместимость ERM](../../compatibility/) · [Циклы: re, br, co и DO](../../loops/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3515) — All function x-parameters, which were not passed, are now initialised with zeroes. This behavior is suitable for optional arguments. Just don't pass odd arguments in !!FU:P/!!DO:P/etc, and they will have 0 value.
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4007) — Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar to pass-by-reference in other programming languages. Example: !?FU(Add3):; ;…
<!-- ERA3-GENERATED:END -->
