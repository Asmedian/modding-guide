---
{"title":"Подготовка поля боя (BF)","summary":"Ресивер BF: подготовка поля боя, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Подготовка поля боя (BF)"}
---

## Ресивер BF {#ref-rec-bf}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-bf-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>BF</strong> (поле битвы)</span></div>
<div class="erm-paragraph"><br>
<span class="erm-anchor" id="ref-rec-bf-red"></span><span class="erm-tone-red"><strong>!!BF:XXXX;</strong></span> <strong>- установки <a href="../../tables/battlefield/#ref-form-bf" data-context="true">поля боя</a>.</strong><br>
Эта команда позволяет вам настраивать поле битвы и может быть использована только после триггер <a href="../../triggers/bf/#ref-tr-bf">!?BF</a>, 
т.к. подготовка поля битвы начинается до битвы, хотя и размещение препятствий ВОЗМОЖНО непосредственно в течение боя.<br>
<strong></strong><br></div><span class="erm-anchor" id="ref-rec-bf-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bf-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Также мы заметили, что <a href="../vr/#ref-rec-vr-r">VR:R</a> не работает внутри триггера BF, или, скорее, воспроизводит один и тот же ряд чисел для каждого сражения. 
Первое число, сгенерированное в сражении, всегда то же самое, сгенерированное в любом другом сражении. 
Хотя, команда <a href="../vr/#ref-rec-vr-t">VR:T</a> работает прекрасно, но, понятно, может использоваться только один раз в триггере !?BF.<br>
<strong>Ответ от <span class="erm-anchor" id="ref-rec-bf-n1"></span><strong class="erm-tone-purple erm-strong">Славы Сальникова</strong> aka <strong class="erm-tone-purple erm-strong">ZVS</strong>:</strong><br>
Я думаю, это сделано нарочно, таким образом вы сможете использовать тот же самый образец сражения всякий раз при загрузке карты. 
Но есть способ обойти это:<br>
1. Генерируем число командой VR:T → n<br>
2. Теперь генерируем n-случайных чисел командой VR:R и пропускаем их<br>
3. Теперь всё готово для использования VR:R в вашем скрипте.</div></details>
<span class="erm-anchor" id="ref-rec-bf-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/bf/#ref-tr-bf">!?BF</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bf-c"></span><span class="erm-anchor" id="command-c"></span><span class="erm-tone-red"><strong>C</strong></span><br>
Очистить поле боя (каждый квадрат доступен)
<br>
<strong><u>Комментарий</u>:</strong> если вам нужно удалить какое-либо определённое препятствие, при том не стирая остальное поле боя, попробуйте наложить на него заклинание "Убрать препятствие".<br>
<span class="erm-anchor" id="ref-rec-bf-bold"></span><em class="erm-strong">Замечание:</em> если использовать команду при осаде замка, замок потеряет все стены и башни (будут считаться разбитыми).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bf-m"></span><span class="erm-anchor" id="command-m-1-11-12"></span><strong><span class="erm-tone-red">
M#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11(/#12)</span></strong><br>
Поместить скалу в определённую позицию на поле боя<br>
         #1 – побитная позиция от 0 до 16<br>
         #2 – побитная позиция от 17 до 33<br>
         #3 – побитная позиция от 34 до 50…<br>
        …<br>
         #11 – побитная позиция от 170 до 186<br>
         #12 – <a href="../../tables/obstacles/#ref-form-obstacles" data-context="true">тип препятствия</a> (0..90)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bf-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bf-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Данная команда включает в себя функционал <a href="./#ref-rec-bf-c">BF:С</a>.<br>
Если 12ый параметр опущен, используется препятствие 84.<br>
Вы также можете поставить "невидимое" препятствие, используя для #12 значение -1. Оно невидимо и занимает 1 клетку. 
Так, можно создать особый фон для поля боя с расчётом на непроходимость некоторых мест, которые через скрипт сделать непроходимыми с помощью невидимых препятствий. 
Такие препятствия невозможно удалить заклинаниями "Убрать препятствие" и "Снять заклинания".<br>
<u>Пример</u>: (<a href="../../tables/battlefield/#ref-form-bf-s1" data-context="true">см. скриншот</a>)<br>
Побитная позиция: пусть в верхнем ряду поля битвы должны будут быть скалы: 11111111111111111 = 131071 (1+2+4+8+…+65536)<br>
В остальных – пусть скала только одна в начале и одна в конце: 10000000000000001 = 65537 (65536+1)
<pre class="erm-example"><code class="language-erm">ZVSE
!?BF;
!!BF:M131071/65537/65537/65537/65537/65537/65537/65537/65537/65537/131071;</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-bf-o"></span><span class="erm-anchor" id="command-o-1-2"></span><strong>O#1/#2</strong></span><br>
Поместить отдельный объект<br>
         #1 – <a href="../../tables/obstacles/#ref-form-obstacles" data-context="true">тип препятствия</a> (0..90)<br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиция</a> (0..186)<br>
<strong><u>Комментарий</u>:</strong> некоторые препятствия выглядят должным образом лишь на "родной" земле</div>

<hr>
<div class="erm-paragraph"><strong>Поле боя:</strong><br><img src="../../../../assets/erm/7176e1b1eafc3a84.png" alt="Поле боя:" loading="lazy" decoding="async" class="erm-figure"></div>









</div>
</div>
</section>
:::

## Связанные материалы {#related}

[BF](../../triggers/bf/) · [BU](../../receivers/bu/)



## Связанные команды и таблицы {#reference-links}

[Клетки поля боя](../../tables/battlefield/) · [Подготовка поля боя (BF)](../../triggers/bf/) · [Переменные и выражения (VR)](../vr/#command-r-r-r0-min-max-free-t) · [Препятствия на поле боя](../../tables/obstacles/)
