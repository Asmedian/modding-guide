---
{"title":"Сопротивление заклинаниям (MR)","summary":"Ресивер MR: сопротивление заклинаниям, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Сопротивление заклинаниям (MR)"}
---

## Ресивер MR {#ref-rec-mr}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mr-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MR</strong> (сопротивление магии стеков)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mr-red"></span><span class="erm-tone-red">!!MR:XXXX;</span> - ресивер для контроля сопротивления магии ERM.</strong><br>
Вы можете вызвать этот ресивер ТОЛЬКО из триггера <a href="../../triggers/mr/#ref-tr-mr">!?MR</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Базовый (без сопротивления) урон<br>
Если вы измените его после триггера <a href="../../triggers/mr/#ref-tr-mr">!?MR0</a>, ваше значение будет использовано как базовый урон заклинания для подсчёта сопротивления существа.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-f"></span><span class="erm-anchor" id="command-f"></span>F$</strong></span><span class="erm-tone-red"><strong></strong></span><br>
Конечный (откорректированный) урон<br>
Если вы проверите его в <a href="../../triggers/mr/#ref-tr-mr">!?MR0</a>, он должен быть равен значению параметра D.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mr-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mr-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Установка данного значения в триггере !?MR0 не повлияет на урон, так как урон подсчитывается после данного триггера. 
Полезно использовать эту команду в триггере !?MR1. Этим путём вы можете игнорировать обычное WoG-сопротивление и установить своё значение.<br>
<span class="erm-anchor" id="ref-rec-mr-bold"></span><em class="erm-strong">Замечание:</em> "Волна смерти" обрабатывается сначала в триггерах !?MR, а потом ещё и в <a href="../../triggers/mf/#ref-tr-mf">!?MF1</a>, 
а потому изменения урона через MR:F не являются для этого заклинания окончательными - учитывайте это при написании скриптов.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-m"></span><span class="erm-anchor" id="command-m-n-s"></span>M$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Тип монстра</a><br>
Обычно вы можете использовать это для получения номера существа, но также можете установить значение для "симуляции" сопротивления 
(фактически, сопротивляемость есть только у Големов и Элементалей)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-n"></span>N$</strong></span><br>
Номер стека на поле боя (0..41)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mr-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mr-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Эта команда должна возвращать номер стека, которого подвергнут магии, но на деле возвращает «мусор».<br>
<em class="erm-strong">Замечание:</em> данный баг исправлен в <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Вот рабочий скрипт, с помощью которого можно сэмитировать действие MR:N..
<pre class="erm-example"><code class="language-erm">
!?FU29999; ф-ция получения ID стека
;vx1 - номер стека (по умолчанию равно -1)
!!UN:C42147184/4/?y1; 
!!VRy1:+56; 
!!UN:Cy1/4/?y2; получить ячейку поля боя, куда колдуют заклинание.
!!FU|y2&lt;0/y2&gt;186:E;
!!BU:Ey2/?y3; получить ID стека в ячейке y2
!!FU&amp;y3=-1:E;
!!VRvx1:Sy3;

!?MR1;
!!VRv2:S-1;
!!FU29999:Pv2; получить ID стека в v2
!!FU&amp;v2=-1:E;
...</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mr-s"></span>S$</strong></span><br>
<a href="../../tables/spells/#ref-form-spell" data-context="true">Номер заклинания</a><br>
Опять же, наиболее полезно получать номер заклинания, но если вы его установите, вы можете привлечь и сопротивление Элементалей. 
Но базовый урон подсчитывается прежде работы триггера, так что изменение заклинания не изменит урона.</div>
<hr>

















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[MR](../../triggers/mr/) · [MF](../../receivers/mf/)



## Связанные команды и таблицы {#reference-links}

[Сопротивление магии (MR)](../../triggers/mr/) · [Расчёт физического урона (MF)](../../triggers/mf/) · [Таблица существ](../../tables/creatures/) · [Отладка и совместимость ERM](../../compatibility/) · [Таблица заклинаний](../../tables/spells/)
