---
{"title":"Жилища существ (DW)","summary":"Ресивер DW: жилища существ, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер DW {#ref-rec-dw}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-dw-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>DW</strong> (жилище 
существ)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-dw-red"></span><span class="erm-tone-red"><br>
!!DW#1/#2/#3:XXXX;</span> 
- жилище монстров в X Y L.</strong> 
Жилище – <a href="../../tables/creature-dwellings/#ref-form-creaturedwellings" data-context="true">тип 17 и 20</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span>G#1/$2/$3</strong></span><br>
Установить монстров-охранников:<br>
         #1 – номер слота (0..6)<br>
         #2 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 
(-1 – нет)<br>
         #3 – кол-во монстров</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M#1/$2/$3</strong></span><br>
Установить монстров для найма:<br>
         #1 – слот (0..3) - вы можете 
установить до четырёх различных монстров в одном жилище<br>
         #2 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 
(-1 – отключить слот)<br>
         #3 – кол-во для найма</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dw-o"></span><span class="erm-anchor" id="command-o-o-1"></span>O$</strong></span><br>
Установить 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">хозяина $</a> (без обновления)<br>
<em>Расширенный синтаксис:</em><span class="erm-tone-red"><strong><br>
O$/1</strong></span><br>
Передать контроль другому игроку, $ – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">хозяин</a><br>
<strong><u>Комментарий</u>:</strong> в отличии от DW:O$, этот синтаксис изменяет хозяина жилища с обновлением внутренних игровых структур (корректируются все показатели в статистике еженедельного прироста в городах соответствующей фракции; обновляется радиус обзора вокруг жилища).<br>
<span class="erm-anchor" id="ref-rec-dw-bold"></span><em class="erm-strong">Замечание:</em> для корректной работы ваших скриптов в сетевом режиме используйте только этот синтаксис.</div>

<hr>















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Связанные команды и таблицы {#reference-links}

[Жилища существ на карте](../../tables/creature-dwellings/) · [Таблица существ](../../tables/creatures/) · [Цвета игроков](../../tables/players/)
