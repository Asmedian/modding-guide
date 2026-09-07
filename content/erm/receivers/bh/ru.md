---
{"title":"Действия героя в бою (BH)","summary":"Ресивер BH: действия героя в бою, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Действия героя в бою (BH)"}
---

## Ресивер BH {#ref-rec-bh}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bh-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер 
<strong>BH </strong>(действия героя)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-bh-red"></span><span class="erm-tone-red"><br>
!!BH#:XXXX;</span> 
- в битве вы можете установить/проверить/получить параметры действия героя.</strong><br>
# – сторона, которая совершит действие (0 – атакующий, 1 – защищающийся)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-c"></span><span class="erm-anchor" id="command-c-1-2-3-4"></span><span class="erm-tone-red"><strong>C#1/#2/#3/#4</strong></span><br>
Колдовать заклинание<br>
         #1 –
<a href="../../tables/spells/#ref-form-spell" data-context="true">заклинание</a><br>
         #2 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиция</a><br>
         #3 – уровень навыка героя (0..3)<br>
         #4 – проверить существование 
цели (0=игнорировать, заклинание будет срабатывать на всех союзных заклинателю)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-bh-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bh-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Вы можете наложить на всех союзных существ заклинания, не имеющих массового эффекта (например, Волшебное зеркало); для 
этого используйте в качестве 4го параметра 0. Но не все заклинания работают корректно таким методом (например, Клон).<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!BH:C36/0/0/0; - наложить Волшебное зеркало на 3 раунда на всю союзную армию
!!BH:C36/18/3/1; - наложить Волшебное зеркало на 3 раунда на существо в квадрате 18, если оно там есть.</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-bh-m"></span><span class="erm-anchor" id="command-m"></span>M$</strong></span><br>
Разрешить (0) или запретить (1) колдовство заклинания<br>
<strong></strong> 
</div><span class="erm-anchor" id="ref-rec-bh-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bh-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Если вы повторно разрешаете колдовство заклинания после произошедшего колдовства, то кнопка Книги Заклинаний станет активной только после совершения какого-либо игрового действия в бою (например, смена активного отряда). Однако, сам вызов Книги Заклинаний (щелчок на герое/клавиша C), будет доступен сразу же, как только вы повторно разрешите колдовство.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-n"></span><span class="erm-anchor" id="command-n"></span><span class="erm-tone-red"><strong>N?$</strong></span><br>
Получить или проверить 
	<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер</a> ходящего героя (-1 если нет 
героя)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bh-q"></span><span class="erm-anchor" id="command-q-1-2-3"></span><span class="erm-tone-red"><strong>Q#1/#2/#3</strong></span><br>
Поместить участок Зыбучих песков или Мин в позицию<br>
         #1 – тип (0 = зыбучие пески, 1 
= мины)<br>
         #2 –
<a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиция</a><br>
         #3 – обновить (1) или нет (0)<br>
Позиция будет проверена автоматически на наличие препятствия (если оно есть, то заклинание ничего не разместит)</div>

<hr>












</div>
</div>
</section>
:::

## Связанные материалы {#related}

[BA](../../receivers/ba/)



## Связанные команды и таблицы {#reference-links}

[Таблица заклинаний](../../tables/spells/) · [Клетки поля боя](../../tables/battlefield/) · [Таблица героев](../../tables/heroes/)
