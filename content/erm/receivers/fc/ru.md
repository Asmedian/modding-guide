---
{"title":"Параметры городской фракции (FC)","summary":"Ресивер FC: параметры городской фракции, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер FC {#ref-rec-fc}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-fc-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>FC</strong> 
(управление городской фракцией)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-fc-red"></span><span class="erm-tone-red">!!FC#:XXXX;</span> – изменение атрибутов городских фракций # (0..9).</strong> <br>
<u></u></div><span class="erm-anchor" id="ref-rec-fc-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-fc-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Данный ресивер задумывался не столько для изменения шаблонов городов, сколько для работы в тандеме с ассоциативными массивами. Впрочем, благодаря ему многие вещи теперь действительно можно реализовать без плагинов и патчей.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-b0"></span><span class="erm-anchor" id="command-b0-b1"></span>B0/$</strong></span><br>
Установить/проверить/получить существо, покупаемое в кузнице.</div>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-b1"></span>B1/$</strong></span><br>
Установить/проверить/получить сушество, показываемое в кузнице.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!FC0:B0/7 B1/7; В кузнице Замка можно покупать Крестоносца</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-c"></span><span class="erm-anchor" id="command-c-1-2-3-4"></span>C$1/$2/$3/$4</strong></span><br>
Координаты зданий на экране города.<br>
         $1 – номер здания<br>
         $2 – кол-во кадров в DEF'е<br>
         $3/$4 – позиции X/Y.<br>
<strong><u>Комментарий</u>:</strong> если какой-то параметр не надо модифицировать, можно использовать значения -1 или d0.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-d"></span><span class="erm-anchor" id="command-d-1-2"></span>D$1/$2</strong></span><br>
Установить/проверить/получить приоритет отображения строений.<br>
         $1 – индекс элемента массива<br>
         $2 – номер строения</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-h"></span><span class="erm-anchor" id="command-h-1-2"></span>H#/$1/$2</strong></span><br>
Настройка параметров строения "Орда #" ($1 - неулучшенное существо, $2 – улучшенное существо).<br>
         # = 0 – прирост в строении орды 1<br>
         # = 1 - прирост в строении орды 2<br>
         # = 2 – уровень сушеств в строении орды 1<br>
         # = 3 - уровень сушеств в строении орды 2<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!FC2:H0/10/10; Крылья ваятеля увеличивают прирост Гаргулий на 10</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-h4"></span>H4/$1/$2/$3</strong></span><br>
Тип простых $2 и улучшенных $3 существ в строении орды $1 (1/2).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-m"></span><span class="erm-anchor" id="command-m-m0-m1"></span>M</strong></span><br>
Получить ширину рва (0..2; 0 = рва нет) в переменную v1.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-m0"></span>M0/#</strong></span><br>
Установить тип рва (2, 1, нет).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-m1"></span>M1/$</strong></span><br>
Установить/проверить/получить урон от рва.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-r"></span><span class="erm-anchor" id="command-r-1-2"></span>R$1/$2</strong></span><br>
Установить/проверить/получить ресурсы $1 (0..6) в хранилище ресурсов (где $2 - кол-во).<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!FC1:R4/1000; Хранилище Оплота приносит 1000 кристаллов</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-s"></span><span class="erm-anchor" id="command-s-t"></span>S$</strong></span><br>
Установить/проверить/получить существо в стрелковой башне.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!FC8:S8; В башнях Сопряжения теперь будут Монахи</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-fc-t"></span>T$</strong></span><br>
Установить/проверить/получить родную почву фракции (0..9).</div>
<hr>
















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[CA](../../receivers/ca/)
