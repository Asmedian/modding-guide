---
{"title":"Текущее действие в бою (BG)","summary":"Ресивер BG: текущее действие в бою, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Текущее действие в бою (BG)"}
---

## Ресивер BG {#ref-rec-bg}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bg-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>BG</strong> (действия в битве)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-bg-red"></span><span class="erm-tone-red">!!BG:XXXX;</span> - в битве вы можете установить/проверить/получить параметры действия монстров.</strong></div>
<span class="erm-anchor" id="ref-rec-bg-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггеры <a href="../../triggers/bg/#ref-tr-bg">!?BG</a> и <a href="../../triggers/br/#ref-tr-br">?!BR</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-a"></span><span class="erm-anchor" id="command-a"></span><strong><span class="erm-tone-red">A$</span></strong><br>
Тип действия:<br>
        $ = <br>
             0 – отменить действие (стек 
теоретически может сделать это действие, но это невозможно сделать по некоторой 
причине, к примеру, попытка убежать с оковами войны использует именно это 
действия для отмены)<br>
             1 – герой колдует заклинание<br>
             2 – ходьба<br>
             3 – защита<br>
             4 – убежать с битвы<br>
             5 – откупиться<br>
             6 – идти и атаковать<br>
             7 – стрелять<br>
             8 – ждать<br>
             9 – атака стен (Катапульта, Циклопы)<br>
             10 – монстр колдует заклинание (Сказочный дракон)<br>
             11 – Палатка первой помощи (лечение)<br>
             12 – нет действия (можно использовать как трату хода отряда)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bg-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bg-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Атака башен замков считается обычной стрельбой. Вы можете проверить стрельбу башен через <a href="../mf/#ref-rec-mf-w">MF:W</a>.<br>
<span class="erm-anchor" id="ref-rec-bg-bold"></span><em class="erm-strong">Замечание:</em> при использовании BG:A флаги (ждать, походил, защита) активному стеку не выставляются.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Точка назначения (магия на монстра, движение или атака). См.
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">поле боя</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-e"></span><span class="erm-anchor" id="command-e"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Получить номер отряда, на который направлено действие стека (-1 если монстра 
нет)</div>
<hr><div class="erm-paragraph">
<strong>
<span class="erm-anchor" id="ref-rec-bg-h"></span><span class="erm-anchor" id="command-h"></span><span class="erm-tone-red">H$</span></strong><br>
<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">Номер</a> героя – хозяина активного стека (-1 = нет героя)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Номер текущего активного стека (0..41).<br>
Если используется в триггере <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>, возвращает номер отряда, которому будет передан ход</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-q"></span><span class="erm-anchor" id="command-q"></span><span class="erm-tone-red"><strong>Q?$</strong></span><br>
Текущая ходящая сторона: левая (0) или правая (1). Только получить или проверить.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bg-s"></span><span class="erm-anchor" id="command-s"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Номер колдуемого <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинания</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bg-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bg-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если монстр колдует заклинание перед действием (Чародеи или Тролли (регенерация)), оно идёт <a href="../../triggers/#ref-era-new-events-2-7">перед триггером</a>.<br>
Если монстр подходит атаковать, то эта опция позволяет вам получить номер клетки, откуда он будет бить. 
Если монстр стреляет, значение равно -1.<br>
Номер заклинания, которое сколдовал монстр, всегда равен -1.
<pre class="erm-example"><code class="language-erm">!!BG:A1; колдует Герой
!!BG:S?v1; v1 содержит номер этого заклинания
~~~~~~~~~~~~~~~~~~~~~
!!BG:A10; колдует монстр
!!BG:S?v1; значение в v1 всегда будет -1</code></pre>

Пример, как можно заставить монстра, имеющего заклинание, наколдовать его:
<pre class="erm-example"><code class="language-erm">!!BG:A10 S-1 Dx1; На позиции x1 должен располагаться объект, на который кастуется магия</code></pre>
</div></details>
<hr>













</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!BG:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">Действие: 0 отмена, 1 магия героя, 2 ходьба, 3 защита, 4 бегство, 5 откуп, 6 ходьба и атака, 7 выстрел, 8 ожидание, 9 атака стены, 10 магия существа, 11 лечение палаткой, 12 отсутствие действия с расходом хода. Запись A не выставляет автоматически флаги ожидания/защиты/завершённого хода у стека.</div>
<hr>
<div class="erm-paragraph">Клетка назначения движения, атаки или заклинания.</div>
<hr>
<div class="erm-paragraph">Стек-цель действия; -1, если отряда нет.</div>
<hr>
<div class="erm-paragraph">Герой-владелец активного стека; -1 при отсутствии героя.</div>
<hr>
<div class="erm-paragraph">Активный стек 0..41. В классическом BG1 это уже отряд, которому передаётся ход; для точного окончания действия учитывайте отдельное событие OnBattleActionEnd.</div>
<hr>
<div class="erm-paragraph">Действующая сторона: 0 атакующий, 1 защитник. Только чтение.</div>
<hr>
<div class="erm-paragraph">Значение зависит от действия: ID заклинания героя; для подхода с атакой — клетка, откуда наносится удар; для выстрела и магии существа в классической реализации — -1.</div>
<hr>
<div class="erm-paragraph">Ресивер требует действующего контекста боя. Изменять действие нужно до его исполнения. Не интерпретируйте S как номер заклинания без проверки A. Урон башни относится к стрельбе; дополнительные сведения предоставляет MF.</div></section>
:::

## Связанные материалы {#related}

[BG](../../triggers/bg/) · [MF](../../receivers/mf/)



## Связанные команды и таблицы {#reference-links}

[Действие в бою (BG)](../../triggers/bg/) · [Раунд боя (BR)](../../triggers/br/) · [Физический урон (MF)](../mf/#command-w) · [Клетки поля боя](../../tables/battlefield/) · [Таблица героев](../../tables/heroes/) · [Таблица заклинаний](../../tables/spells/) · [Триггеры и события ERM](../../triggers/)
