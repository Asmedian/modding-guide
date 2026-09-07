---
{"title":"Текст боевой подсказки (MM)","summary":"Ресивер MM: текст боевой подсказки, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер MM {#ref-rec-mm}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MM</strong> (текст в битве)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mm-red"></span><span class="erm-tone-red">!!MM:XXXX;</span> 
- ресивер для получения/установки/проверки текста в битве или получения позиции мыши на поле боя.</strong><br>
<u></u></div><span class="erm-anchor" id="ref-rec-mm-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-mm-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?MM0;
!!MM:M?z5;
!!MM:D?i;
!!VRz10:S^Позиция: %Vi Сообщение: %Z5^;
!!MM:Mz10;
Сообщение будет показано, когда вы сдвинете мышь на поле боя.</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-mm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/mm/#ref-tr-mm">!?MM</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mm-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Получить/проверить текущую позицию (код) курсора <br>
         $ – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">номер позиции</a><br>
Вы можете установить это значение, но ничего не произойдет.</div>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mm-m"></span><span class="erm-anchor" id="command-mz-m-z"></span>Mz#</strong></span><br>
Установить/проверить/получить сообщение, показываемое в окне текста<br>
         z# – номер текстовой переменой для установки или записи текста сообщения.</div>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mm-s"></span><span class="erm-anchor" id="command-sz"></span>Sz#</strong></span><br>
Добавить сообщение из текстовой переменной в текст битвы</div>
<hr>


















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[MM](../../triggers/mm/) · [BU](../../receivers/bu/)



## Связанные команды и таблицы {#reference-links}

[Подсказки интерфейса (MM)](../../triggers/mm/) · [Клетки поля боя](../../tables/battlefield/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.2, +](../../compatibility/#era3-v-3-0-2-l3440) — Added new ERM event 'OnAdvMapTileHint', allowing to get/set hint for any tile, mouse is currently over. Parameters: x, y, z, object type, object subtype. All parameters are given for object entrance. Example: !?FU(OnAdvM…
<!-- ERA3-GENERATED:END -->
