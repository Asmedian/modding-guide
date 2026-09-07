---
{"title":"Пирамиды и новые объекты (PM)","summary":"Ресивер PM: пирамиды и новые объекты, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Пирамиды и новые объекты (PM)"}
---

## Ресивер PM {#ref-rec-pm}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-pm-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>PM</strong>  (пирамиды и новые объекты) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-pm-red"></span><span class="erm-tone-red">!!PM#1/#2/#3:XXXX;</span> 
- Пирамида или <a href="../../tables/wog-object-variants/#ref-form-newobj" data-context="true">новый объект</a> в #1/#2/#3.</strong> Пирамида - <a href="../../tables/objects/#ref-form-objects-pir" data-context="true">тип 63</a>.<br>
<em>Расширенный синтаксис:<br>
</em><strong><span class="erm-tone-red">!!PM$:XXXX;</span> - Пирамида или <a href="../../tables/wog-object-variants/#ref-form-newobj" data-context="true">
новый объект</a> 
в v$/v($+1)/v($+2)</strong></div>
<div class="erm-paragraph">Данный ресивер имеет двойное назначение. Он используется для установки заклинания, 
получаемого после разгрома стражей Пирамиды, но также может быть использован для привлечения ИИ к объекту, 
или наоборот, не давать ИИ посетить его.<br>
ИИ посетит Пирамиду (новый объект), если:
</div><span class="erm-anchor" id="ref-rec-pm-t0"></span><ol class="erm-margin-top-zero"><li>Он имеет достаточно армии для победы над стражниками;</li>
<li>Он имеет мудрость эксперта;</li>
<li>Если этот объект НЕ посещён любым игроком;</li>
<li>Если этот объект НЕ посещён этим игроком.</li></ol>
<div class="erm-paragraph">Мы не можем контролировать первые 2 пункта, но может установить последние два.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-p"></span><span class="erm-anchor" id="command-p-1-1"></span>P#1/$1</strong></span><br>
Установить/проверить/получить флаг «Посещено игроком»
</div><pre>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок-посетитель</a>
        $1 – Статус:
	0 – не посещено
	1 – посещено</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-s"></span><span class="erm-anchor" id="command-s"></span>S$</strong></span><br>
Установить/проверить/получить бонусное <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинание</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-pm-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Установить/проверить/получить флаг «Не посещено»<br>
        0 = посещено<br>
        1 = не посещено<br>
<u></u></div><span class="erm-anchor" id="ref-rec-pm-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-pm-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете использовать PM:V для «привлечения» ИИ к новым объектам (включая <a href="../../tables/wog-object-variants/#ref-form-newobj-sphinx" data-context="true">Сфинкса</a>).<br>
Вы можете установить этот бит и ждать прихода ИИ.</div></details>
<hr>

















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/)



## Связанные команды и таблицы {#reference-links}

[Варианты объектов WoG](../../tables/wog-object-variants/) · [Таблица объектов в игре](../../tables/objects/#values) · [Цвета игроков](../../tables/players/) · [Таблица заклинаний](../../tables/spells/) · [Варианты объектов WoG](../../tables/wog-object-variants/#values)
