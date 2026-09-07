---
{"title":"Игровые таймеры (TM)","summary":"Ресивер TM: игровые таймеры, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер TM {#ref-rec-tm}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="example"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-tm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>TM</strong> (таймеры)
</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-tm-red"></span><span class="erm-tone-red">!!TM#:XXXX;</span> - это установки для ERM-таймера</strong><br>
         # – номер таймера (1-100)<br>
Эта команда - эквивалент событиям в теле карты. Она может быть использована для повтора любого ERM-кода через определённый интервал 
(или только раз), срабатывать и останавливаться в определённое время. Этот ресивер имеет своё тело, начинающееся с триггера !?TM$, 
где $ - число от 1 до 100, означающее номер таймера. <br>
Будьте осторожны, если вы разрешаете таймер для нескольких цветов. Если этот таймер показывает сообщение, вы будете получать его дважды или более раз. 
Чаще всего эта команда используется для установки таймера через инструкцию, чем ресивер.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">; Установить таймер 1 на срабатывание каждые 7 дней, начиная с первого, для всех игроков (255), срок действия неограничен (999)
!#TM1:S1/999/7/255;
</code></pre></div>
<span class="erm-anchor" id="ref-rec-tm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/tm/#ref-tr-tm">!?TM</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tm-d"></span><span class="erm-anchor" id="command-d-e"></span>D$</strong></span><br>
Запретить игрокам <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">цвета $</a> 
активировать этот таймер</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tm-e"></span>E$</strong></span><br>
Разрешить игрокам <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">цвета $</a> 
активировать этот таймер</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tm-s"></span><span class="erm-anchor" id="command-s-1-2-3-4"></span>S$1/$2/$3/$4</strong></span><br>
Установить/проверить/получить установки таймера<br>
         $1 – день первого появления<br>
         $2 – день последнего появления<br>
         $3 – интервал (в днях) <br>
         $4 – 
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">игроки</a>, для которых активирован 
таймер (0 – запретить всем игрокам)<br>
<u>Пример</u>:<br>
Таймер для красного, коричневого и зелёного игрока = 8 + 4 + 1 = 13 (0 запретит таймер всем цветам)</div>
<hr>















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[TM](../../triggers/tm/)



## Связанные команды и таблицы {#reference-links}

[Игровой таймер (TM)](../../triggers/tm/) · [Цвета игроков](../../tables/players/)
