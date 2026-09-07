---
{"title":"Управление полем боя (BU)","summary":"Ресивер BU: управление полем боя, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Управление полем боя (BU)"}
---

## Ресивер BU {#ref-rec-bu}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bu-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>BU</strong> 
(универсальные параметры битвы)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-bu-red"></span><span class="erm-tone-red"><br>
!!BU:XXXX;</span> 
- установить/проверить/получить некоторые универсальные параметры битвы.</strong> </div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-c"></span><span class="erm-anchor" id="command-c"></span><span class="erm-tone-red"><strong>C?$</strong><br>

</span>Используется для точного определения, закончился бой или нет<br>
         $ = 1 если да<br>
         $ = 0 если нет.<br>
Рационально использовать в <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>;</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D#/?$</strong></span><br>
Получить или проверить <a href="../../tables/battlefield/#ref-form-bf" data-context="true">позицию 
#</a> на мёртвых монстров (в $ будет номер мёртвого стека).<br>
         $ = номер стека мёртвых монстров<br>
           -1 если вообще нет 
монстров на позиции<br>
           -2 если на позиции 
живой стек</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-e"></span><span class="erm-anchor" id="command-e"></span><span class="erm-tone-red"><strong>E#/?$</strong></span><br>
Получить или проверить номер стека $ на живых монстров в 
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиции #</a>. Если живых монстров в этой 
позиции нет, $ = -1.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-g"></span><span class="erm-anchor" id="command-g"></span><span class="erm-tone-red"><strong>G$</strong></span><br>
Установить/проверить/получить специальные ландшафты и их бонусы в битве.<br>
     $ – <a href="../../tables/battle-terrain/#ref-form-bug" data-context="true">тип ландшафта</a><br>
<u></u></div><span class="erm-anchor" id="ref-rec-bu-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bu-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Ели вы установите данный параметр до обработки битвы, игра подберёт корректный фон. 
Если вы измените это значение в ходе битвы, фон не изменится, но бонусы установленного ландшафта будут работать.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-m"></span><span class="erm-anchor" id="command-mz"></span><span class="erm-tone-red"><strong>Mz#</strong></span><br>
Добавить сообщение в битву<br>
         z# – <em>z</em>-переменная с текстом<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bu-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bu-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Эта команда отличается от команды <a href="../mm/#ref-rec-mm-m">MM:M</a> тем, что MM:M сообщение только показывает в лог битвы, не сохраняя его, 
когда как через BU:M текст и показывается, и добавляется в таблицу событий, т.е. вы сможете с помощью стрелочек вверх и вниз пролистнуть и найти это сообщение в дальнейшем.<br>
Помните, что вы не можете устранить оригинальный текст.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-o"></span><span class="erm-anchor" id="command-o"></span><span class="erm-tone-red"><strong>O#/?$</strong></span><br>
Получить или проверить <a href="../../tables/obstacle-flags/#ref-form-obstacles-bit" data-context="true">флаги препятствий</a> ($) для <a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиции #</a> на поле боя.<br>
         $ = 0, если нет препятствий<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bu-5"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bu-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Команда может быть использована для проверки битов препятствий на интересующем гексе поля боя.<br>
Так, если на позиции мина, то получим $ = 9 (1+8)<br>
<span class="erm-anchor" id="ref-rec-bu-bold"></span><em class="erm-strong">Замечание:</em> у Силового поля для начальной клетки (нижняя) игра выставляет значение $=35 (1+2+32), а для остальных - $=34 (2+32). 
Так же и для всех препятствий, установленных командой <a href="../bf/#ref-rec-bf-o">BF:O</a>, у которых начальная клетка будет иметь $=3 (1+2), а все остальные - $=2 (когда препятствие занимает более 1 клетки).<br>
<span class="erm-anchor" id="ref-rec-bu-4"></span><details class="erm-comment"><summary><strong>Дополнительно</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-bu-show4"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
При работе с препятствиями команда BU:O не всегда может помочь. Например, когда вам понадобится проверять клетки у ворот (при осаде).

<pre class="erm-example"><code class="language-erm">!!UN:C6919200/4/?y50; Менеджер Битвы
!!SN:E4625904/2/y50/[индекс гекса]; Записываем в v1, можно ли встать на это место. 0 - можно, 1 - нельзя.
; Если ворота не пробиты, значение для атакующего будет 1, иначе - 0.</code></pre>
</div></details></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R</strong></span><br>
Обновить поле боя после каких-либо действий<br>
<em class="erm-strong">Замечание:</em> не используйте эту команду в триггере <a href="../../triggers/bf/#ref-tr-bf">!?BF</a>.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-bu-3"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-bu-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
К сожалению, данная команда не обновляет сетку перемещения активного стека. Однако это можно сделать, используя возможности <a href="../../compatibility/#ref-era-index">ERA</a>:
<pre class="erm-example"><code class="language-erm">; Обновить тень возможного перемещения после изменения скорости стека
!!UN:C6919200/4/?y2;    [Менеджер битвы]
!!SN:E4797616/2/y2/0/1; [обновить сетку поля боя]
!!BU:R;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-s"></span><span class="erm-anchor" id="command-s-1-2-3-4-5-6"></span><span class="erm-tone-red"><strong>S#1/#2/#3/#4/#5/#6</strong></span><br>
Вызвать монстров на поле боя<br>
         #1 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
         #2 – кол-во монстров<br>
         #3 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиция</a><br>
         #4 – сторона (0 – левый герой, 
1 – правый)<br>
         #5 – номер слота героя (-1 – 
отсутствует (исчезнет после битвы))<br>
         #6 – обновить (1 – да, 0 – нет)<br>
Позиция должна быть корректна, свободна от 
других монстров и препятствий, и не может быть более 20 стеков с каждой стороны.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-t"></span><span class="erm-anchor" id="command-t"></span><span class="erm-tone-red"><strong>T?$</strong></span><br>
Проверить, имеет ли битва тактическую фазу<br>
         $ = 1 если да<br>
         $ = 0 если нет</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bu-v"></span><span class="erm-anchor" id="command-v"></span><span class="erm-tone-red"><strong>V#</strong></span><br>
Выиграть в битве<br>
         # - сторона победителя<br>
                   
0 = правый (защитник)<br>
                   
1 = левый (атакующий)</div>

<hr>













</div>
</div>
</section>
:::

## Связанные материалы {#related}

[BF](../../receivers/bf/) · [BM](../../receivers/bm/)



## Связанные команды и таблицы {#reference-links}

[Действие в бою (BG)](../../triggers/bg/) · [Клетки поля боя](../../tables/battlefield/) · [Накладные ландшафты BU:G](../../tables/battle-terrain/) · [Текст боевой подсказки (MM)](../mm/#command-mz-m-z) · [Флаги препятствий](../../tables/obstacle-flags/) · [Подготовка поля боя (BF)](../bf/#command-o-1-2) · [Отладка и совместимость ERM](../../compatibility/) · [Подготовка поля боя (BF)](../../triggers/bf/) · [Таблица существ](../../tables/creatures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, *](../../compatibility/#era3-v-3-0-0-l3976) — Fixed WoG bug with tactics detection on the very first round. Do not use BU:R in !?BR or !?FU(OnCombatRound) for zero round, because a few structures are not initialized at this moment and random crash may occur. First r…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4088) — SN:D may be used now in battle, being equal to BU:R.
<!-- ERA3-GENERATED:END -->
