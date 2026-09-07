---
{"title":"Гарнизон (GR)","summary":"Ресивер GR: гарнизон, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер GR {#ref-rec-gr}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-gr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>GR</strong> (гарнизоны)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-gr-red"></span><span class="erm-tone-red">!!GR#1/#2/#3:XXXX;</span> - гарнизон в X Y L.</strong> 
Гарнизоны - <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 33</a>.</div>
<div class="erm-paragraph">В игровых таблицах существует объект с типом 219 - Гарнизон (перпендикулярный). Однако, объект гарнизоном не является, и замещается  игрой при загрузке карты на тип 33 (подробнее см. в описании <a href="../un/#ref-rec-un-i">UN:I</a>).</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-gr-f"></span><span class="erm-anchor" id="command-f"></span>F$</strong></span><br>
Установить/проверить/получить возможность удаления стражников.<br>
         $ – нельзя (1), можно (0)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-gr-g"></span><span class="erm-anchor" id="command-g-1-1-2"></span>G#1/$1/$2</strong></span><br>
Установить/проверить/получить монстров – стражников<br>
         #1 – номер слота (0..6)<br>
         $1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">
тип монстра</a> (-1 = нет) <br>
         $2 – кол-во монстров</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-gr-o"></span><span class="erm-anchor" id="command-o"></span>O$</strong></span><br>
Установить/проверить/получить хозяина (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">-1, 0..7</a>)</div>
<hr>


















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Общие игровые операции (UN)](../un/#command-i-x-y-level-type-subtype-refresh) · [Таблица существ](../../tables/creatures/) · [Цвета игроков](../../tables/players/)
