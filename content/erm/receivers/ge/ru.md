---
{"title":"Глобальные события (GE)","summary":"Ресивер GE: глобальные события, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер GE {#ref-rec-ge}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="modern-strings"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ge-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>GE</strong> (глобальные события)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ge-red"></span><span class="erm-tone-red">!!GE#:XXXX;</span> 
- ресивер для глобальных событий (# - номер события).</strong> 
Номер – первое число в тексте сообщения (например, "100Привет!" будет показываться как "Привет!", 
а событие будет иметь номер 100). Используется для изменения параметров глобальных (таймерных) событий.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ge-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ge-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Обнуление стартовых ресурсов игрока без каких-либо пояснений и картинок (инструкцию использовать нельзя):
<pre class="erm-example"><code class="language-erm">!?GE1; - должно присутствовать глобальное событие, начинающееся на 1.
!!OW:R0/0/0; - обнулить все ресурсы игрока 0 (красного)
!!OW:R0/1/0;
!!OW:R0/2/0;
!!OW:R0/3/0;
!!OW:R0/4/0;
!!OW:R0/5/0;
!!OW:R0/6/0;</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-ge-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/ge/#ref-tr-ge">!?GE</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-b"></span><span class="erm-anchor" id="command-b-1-2"></span>B#1/$2</strong></span><br>
Установить/проверить/получить кол-во ресурса #1 (<a href="../../tables/resources/#ref-form-resource" data-context="true">0..6</a>) 
на $2 (может быть отрицательным)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-d"></span><span class="erm-anchor" id="command-d-1-2"></span>D#1/#2</strong></span><br>
Запретить (#2 = 1) или разрешить (#2 = 0) событие для <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрока #1</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-e"></span><span class="erm-anchor" id="command-e-n"></span>E$</strong></span><br>
Установить <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">игроков</a>, которым разрешено получать событие.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-ge-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ge-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Если вы используете $, начинающееся с параметра d, это будет 
означать как "или", т.е. вы можете дать возможность игрокам получать событие, 
без изменения остальных игроков.<br>
Пример: E3 даёт возможность получить событие только красному и синему игроку, 
в то время как Ed3 разрешает получение события красному и синему игроку, причём остальные цвета, 
установленные в самом событии в редакторе, остаются без изменений.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-f"></span><span class="erm-anchor" id="command-f-r"></span>F$</strong></span><br>
Установить/проверить/получить день первого появления на $</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-h"></span><span class="erm-anchor" id="command-h-q"></span>H#</strong></span><br>
Применить или проверить, разрешено ли события для игроков-людей (1 = разрешено, 0 = запрещено)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-m"></span><span class="erm-anchor" id="command-m-text-m-m-1"></span>M^Текст^</strong></span><br>
Установить текстовое послание. Оно не может быть длиннее 
оригинального. Может содержать любые символы, кроме "^" и ";"</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>M#</strong></span><br>
Установить текст события такой же, что и в глобальном событии под номером #.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Не показывать сообщение, записанное в самом событии</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-n"></span>N$</strong></span><br>
Установить <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">игроков</a>, которые НЕ могут активировать событие.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ge-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ge-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если вы используете $, начинающееся с параметра d, это будет означать как "И", 
т.е. вы можете запретить игрокам получать событие, без изменения остальных игроков.<br>
Пример: N3 запрещает возможность получить событие только красному и синему игроку, 
в то время как Nd3 запрещает получение события красному и синему игроку, причём остальные цвета, 
установленные в самом событии в редакторе, остаются без изменений.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-q"></span>Q#</strong></span><br>
Применить или проверить, разрешено ли событие для компьютерных игроков (1 = разрешено, 0 = запрещено)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ge-r"></span>R$</strong></span><br>
Установить/проверить/получить интервал между появлениями на $.</div>
<hr>


















</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!GE#:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">Ресурс 0..6 и количество; отрицательная награда отнимает ресурс.</div>
<hr>
<div class="erm-paragraph">Маска разрешённых (E) или запрещённых (N) игроков. Префикс d меняет перечисленные разрешения, сохраняя остальные, а не просто прибавляет число к маске.</div>
<hr>
<div class="erm-paragraph">F — первый игровой день, R — интервал повторения.</div>
<hr>
<div class="erm-paragraph">H разрешает событие людям, Q компьютеру: 1 разрешено, 0 запрещено.</div>
<hr>
<div class="erm-paragraph">Текст сообщения, текст другого глобального события по номеру либо отключение сообщения (-1). В классической реализации новый литерал не должен быть длиннее исходного текста.</div>
<hr>
<div class="erm-paragraph">ID игрока и запрет события: 1 запретить, 0 разрешить.</div>
<hr>
<div class="erm-paragraph">Номер задаётся первым числом в тексте события. Это не индекс в списке редактора. Событие должно существовать на карте; ресивер меняет его параметры.</div>
<hr>
<div class="erm-paragraph">ERA 3.9.15 переписала обработку сообщений: принимаются любые строки. Старый числовой способ подставить текст другого события (например GE:M30) отключён. -1 вместо пустой строки устарел; передавайте <code>^^</code>. Описанные выше числовые формы нужны для чтения старых скриптов.</div></section>
:::

## Связанные материалы {#related}

[GE](../../triggers/ge/)



## Связанные команды и таблицы {#reference-links}

[Глобальное событие карты (GE)](../../triggers/ge/) · [Ресурсы](../../tables/resources/) · [Цвета игроков](../../tables/players/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l441) — Rewritten WoG "ApplyString" and "NewMesMan" functions, allowing any string in multiple ERM commands (CA, LE, GE, etc). Disabled syntax of setting event message to the one from event with given ID (ex, "GE:M30" for event …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3995) — Introduces many new d-modifiers for all ERM commands, except for GE:E/N, LE:E/N. d+# - integer addition d-# - integer substraction d*# - integer multiplication d:# - integer division d|# sets bits from # (bitwise OR oper…
<!-- ERA3-GENERATED:END -->
