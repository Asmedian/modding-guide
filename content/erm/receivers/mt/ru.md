---
{"title":"Обелиск (MT)","summary":"Ресивер MT: обелиск, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер MT {#ref-rec-mt}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mt-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MT</strong> 
(обелиск)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mt-red"></span><span class="erm-tone-red">!!MT#1/#2/#3:XXXX;</span></strong> – <strong>обелиск в X Y L.</strong> 
Обелиск – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 57</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-mt-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mt-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используя низкоуровневую команду <a href="../un/#ref-rec-un-c">UN:C</a> мы может, к примеру, получить координаты закопанного Грааля при посещении обелиска:
<pre class="erm-example"><code class="language-erm">!?OB57&amp;1000;
!!UN:C6919480/4/?у1;
!!VRy1:+128656;
!!UN:Cy1/2/?у2; у2 - х
!!VRy1:+2;
!!UN:Cy1/2/?у3; у3 - у
!!VRy1:+2;
!!UN:Cy1/1/?у4; у4 - z
!!VRy1:+2;
!!UN:Cy1/1/?у5; у5=1 Грааль закопан, y5=0 Грааль вырыт</code></pre>
</div></details>
<span class="erm-anchor" id="ref-rec-mt-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: команда <a href="../un/#ref-rec-un-l1" title="Контроль посещения обелиска">!!UN:L</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mt-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Номер обелиска (0…)</div>
<hr>
















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/) · [UN](../../receivers/un/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Общие игровые операции (UN)](../un/#command-cbase-size-cbase-offset-size) · [Общие игровые операции (UN)](../un/)
