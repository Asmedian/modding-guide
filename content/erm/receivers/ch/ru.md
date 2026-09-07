---
{"title":"Сундук сокровищ (CH)","summary":"Ресивер CH: сундук сокровищ, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер CH {#ref-rec-ch}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ch-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер 
<strong>CH</strong> 
(сундук сокровищ)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ch-red"></span><span class="erm-tone-red"><br>
!!CH#1/#2/#3:XXXX;</span> 
- настройки сундука сокровищ в X Y L (#1, #2, #3)</strong>. Сундук сокровищ - <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 101</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ch-a"></span><span class="erm-anchor" id="command-a"></span><span class="erm-tone-red"><strong>A$</strong></span><br>
$ – номер <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакта</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ch-b"></span><span class="erm-anchor" id="command-b"></span><span class="erm-tone-red"><strong>B$</strong></span><br>
Бонус золота или опыта в $ ($ может быть 0..15):<br>
Золото = $*500,<br>
Опыт = $*500-500.<br>
Если $ = 0, получится выбор между 0 золота и -500 опыта.<br>
Как можно увидеть, максимально можно получить до 7500 золота или 7000 опыта.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ch-s"></span><span class="erm-anchor" id="command-s"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Тип содержимого:<br>
         $ = 1 – 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт</a><br>
         $ = 0 – золото/опыт</div>

<hr>













</div>

</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Таблица артефактов](../../tables/artifacts/)
