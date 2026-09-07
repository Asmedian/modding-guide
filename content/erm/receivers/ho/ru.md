---
{"title":"Доступ к герою (HO)","summary":"Ресивер HO: доступ к герою, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер HO {#ref-rec-ho}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ho-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>HO</strong> 
(действия на героя)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ho-red"></span><span class="erm-tone-red">!!HO$:XXXX;</span> - используется для позволения или запрета взаимодействий с <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">героем $</a>.</strong><br>
В отличие от <a href="../he/#ref-rec-he">!!HE</a>, используется для активирования или деактивирования взаимодействий героя.</div>
<span class="erm-anchor" id="ref-rec-ho-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: событие <a href="../../triggers/#ref-era-new-events-2-10">OnBeforeHeroInteraction</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-d"></span><span class="erm-anchor" id="command-d-e"></span>D$</strong></span><br>
Запретить всем героям <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвета $</a> (-1 – текущий) атаковать (вражеский герой) или посещать (союзник) этого героя.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-e"></span>E$</strong></span><br>
Разрешить всем героям <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвета $</a> (-1 – текущий) атаковать (вражеский герой) или посещать (союзный герой) этого героя.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-h"></span><span class="erm-anchor" id="command-h"></span>H$</strong></span><br>
Установить подсказку для этого героя в переменно z$.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ho-r"></span><span class="erm-anchor" id="command-r-s"></span>R</strong></span><br>
Разрешить всем героям атаковать (вражеский герой) или посещать (союзный герой) этого героя.</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong> <span class="erm-anchor" id="ref-rec-ho-s"></span>S</strong></span><br>
Запретить всем героям атаковать (вражеский герой) или посещать (союзный герой) этого героя.</div>
<hr>


















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[HE](../../receivers/he/)



## Связанные команды и таблицы {#reference-links}

[Таблица героев](../../tables/heroes/) · [Герои (HE)](../he/) · [Триггеры и события ERM](../../triggers/) · [Цвета игроков](../../tables/players/)
