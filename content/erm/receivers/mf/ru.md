---
{"title":"Физический урон (MF)","summary":"Ресивер MF: физический урон, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Физический урон (MF)"}
---

## Ресивер MF {#ref-rec-mf}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mf-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MF</strong> (физическое повреждение)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-mf-red"></span><span class="erm-tone-red">!!MF:XXXX;</span> - ресивер для контроля получаемого стеком физического повреждения.</strong><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mf-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mf-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете проверить номер стека для получения детальной информации об этом стеке. Вы можете установить урон командой F$. 
Вы можете игнорировать урон полностью, используя команду E0.<br>
<u>Пример</u>:<br>
Для симуляции через ERM способности магического блока, вы можете использовать триггер <a href="../../triggers/mf/#ref-tr-mf">!?MF</a>, подсчитать шанс срабатывания блока, 
отменить повреждение командой <a href="./#ref-rec-mf-e">MF:E0</a>, показать анимацию блока с помощью <a href="../bm/#ref-rec-bm-v">BM:V84</a> 
(а также, <a href="../bm/#ref-rec-bm-f">установить флаг</a> "отряд принял защитное положение" для большей реалистичности) 
и добавить соответствующее сообщение в лист ведения боя командой <a href="../mm/#ref-rec-mm-s">MM:S</a>.</div></details>
<span class="erm-anchor" id="ref-rec-mf-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/mf/#ref-tr-mf">!?MF</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-d"></span><span class="erm-anchor" id="command-d-f"></span>D$</strong></span><br>
Текущий урон, который получит отряд</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-e"></span><span class="erm-anchor" id="command-e"></span>E$</strong></span><br>
Разрешить (1 – по умолчанию) или запретить (0) получение повреждения.<br>
Отмена будет означать, что стек не получит урона.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-f"></span>F$</strong></span><br>
Откорректированный урон, который получит стек.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mf-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mf-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если у вас несколько скриптов, где изменяется урон для стека, то учитывайте, что стек получит урон, установленный через MF:F в последнем триггере.<br>
<u>Пример</u> от <span class="erm-anchor" id="ref-rec-mf-n1"></span><code class="erm-tone-purple erm-strong">Algor</code>'а:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:Fd5;
!?MF1; !!MF:Fd3;
Будет суммарное изменение урона (+8)</code></pre>
Однако, если так выставлять урон:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:F5;
!?MF1; !!MF:F3;
Будет просто урон 3.</code></pre>
Если нужно сделать два независимых скрипта, один из которых будет увеличивать урон на 20%, а другой - уменьшать на 15%, то лучше привязаться к базовому урону и считать проценты от него. Так получится результат, не зависящий от порядка выполнения триггеров:
<pre class="erm-example"><code class="language-erm">!?MF1; !!MF:D?y1; !!VRy1:*20 :100; !!MF:Fdy1; [увеличиваем получаемый урон на 20%]
!?MF1; !!MF:D?y1; !!VRy1:*-15 :100; !!MF:Fdy1; [снижаем получаемый урон на 15%]</code></pre></div></details><hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-n"></span><span class="erm-anchor" id="command-n"></span>N$</strong></span><br>
Номер стека (0..41), получающего урон. Может использоваться для получения более детальной информации командой <a href="../bm/#ref-rec-bm">!!BM</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mf-w"></span><span class="erm-anchor" id="command-w"></span>W$</strong></span><br>
Проверить/получить тип атаки:<br>
        $ = 2 – выстрел башни<br>
           = 1 – ров<br>
           = 0 – другой (для конкретизации типа см. доп.информацию по <a href="../../triggers/mf/#ref-tr-mf">!?MF</a>)</div>
<hr>
















</div>

</div>
</section>
:::

## Связанные материалы {#related}

[MF](../../triggers/mf/)



## Связанные команды и таблицы {#reference-links}

[Расчёт физического урона (MF)](../../triggers/mf/) · [Боевой стек (BM)](../bm/#command-v-z) · [Боевой стек (BM)](../bm/#command-e-f) · [Текст боевой подсказки (MM)](../mm/#command-sz) · [Боевой стек (BM)](../bm/)
