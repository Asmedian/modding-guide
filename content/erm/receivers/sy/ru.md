---
{"title":"Верфь (SY)","summary":"Ресивер SY: верфь, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер SY {#ref-rec-sy}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-sy-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>SY</strong> (верфь) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-sy-red"></span><span class="erm-tone-red">!!SY#1/#2/#3:XXXX;</span> 
- верфь в X Y L.</strong> 
Верфь – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 87</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-sy-o"></span><span class="erm-anchor" id="command-o"></span>O$</strong></span><br>
Установить/проверить/получить хозяина (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">-1, 0..7</a>)<br>
Если установить некорректные значения (8..255), флаг 
может окраситься в самые необычные цвета, но обычно - в белый.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-sy-p"></span><span class="erm-anchor" id="command-p-1-2"></span>P$1/$2</strong></span><br>
Установить точку на карте, где появится лодка при покупке. Обычно это x+1 и y+1 
от правого угла верфи. Вы можете поставить точку не только на воде. Если точка 
вне карты, вы не можете купить лодку.<br>
Если лодка покупается дистанционно, правым кликом по 
верфи, то эти параметры игнорируются и лодка строится в ближайшей водной клетке.</div>
<hr>
















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Цвета игроков](../../tables/players/)
