---
{"title":"Локальные события (LE)","summary":"Ресивер LE: локальные события, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Локальные события (LE)"}
---

## Ресивер LE {#ref-rec-le}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-b1-b2-b3-b4"></span><span class="erm-anchor" id="modern-strings"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-le-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>LE</strong> (локальное событие)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-le-red"></span><span class="erm-tone-red">!!LE#1/#2/#3:XXXX;</span> - локальное событие в X Y L.</strong> 
Используется для изменений параметров события в определённых координатах карты.<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>!!LE$:XXXX;</strong></span> - координаты в переменных v[$], v[$+1], v[$+2]<br>
<u>
</u> </div><span class="erm-anchor" id="ref-rec-le-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-le-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Если событие было установлено как <em>«Удалить после первого посещения»»</em>, после его посещения вы не сможете вернуть его к жизни. 
Оно полностью исчезло.<br>
Теперь существует проверка, есть ли привязанный на событие ERM код. Если он существует, флаг 999 устанавливается на 0 и выполняются все команды.<br>
Если же его нет, флаг 999 устанавливается на 1 и все команды ресивера !!LE пропускаются.<br>
<em>Примечание:</em> вы всё ещё не можете изменить кол-во вторичных навыков и заклинаний, установленных в событии, а только изменить существующие.</div>
<div class="erm-paragraph">Вы можете использовать этот ресивер для редактирования Ящика Пандоры (<a href="../../tables/objects/#ref-form-objects" data-context="true">тип 6</a>).</div></div></details>
<span class="erm-anchor" id="ref-rec-le-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/le/#ref-tr-le">!?LE</a>, ресивер <a href="../pa/#ref-rec-pa">!!PA</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-le-a"></span><span class="erm-anchor" id="command-a-a"></span>A#1/$2</strong></span><br>
Установить/проверить/получить <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт</a> $2 в позиции #1 в таблице артефактов, получаемых в событии.<br>
Вы можете только ИЗМЕНИТЬ артефакт на другой. Если на позиции нет артефактов, то ничего и не произойдет.<br>
<em>Расширенный синтаксис:</em><br>
<span class="erm-tone-red"><strong>A$</strong></span> 
	- проверить/получить кол-во артефактов<br>
Вы можете установить данный параметр, но это ни к чему не приведёт.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-b"></span>B</strong></span><br>
Бонус артефактов<br>
<span class="erm-tone-red"><strong>B1/$</strong></span> 
- проверить/получить кол-во артефактов в таблице артефактов бонусного листа (нельзя установить)<br>
<span class="erm-tone-red"><strong>B2/#/$</strong></span> 
- установить/проверить/получить <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт</a> $  на позиции # (0…) в таблице бонусов.<br>
<span class="erm-tone-red"><strong>B3/$</strong></span> 
- добавить <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт</a> $ в конец бонусной таблицы<br>
<span class="erm-tone-red"><strong>B4/$</strong></span> 
- удалить артефакт на позиции $ в таблице бонусов<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-le-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-le-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Есть, конечно, команда <a href="./#ref-rec-le-a">LE:A</a>, но с её помощью можно только ИЗМЕНЯТЬ артефакты в бонусной таблице. Эта новая команда позволяет вам устанавливать, 
добавлять и удалять артефакт из локальных событий и Ящиков Пандоры.<br>
Вы можете сделать практически неограниченную таблицу артефактов для любого локального события или Ящика Пандоры.<br>
Вы не можете установить свиток как артефакт, игра «поймёт» это не правильно, и вылетит.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-c"></span><span class="erm-anchor" id="command-c-1-2-g-1-2"></span>C#1/$2/$3</strong></span><br>
Установить/проверить/получить получаемых 
	 монстров на позиции #1 (0..6) <a href="../../tables/creatures/#ref-form-creature" data-context="true">типа $2</a> и кол-ва $3</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-d"></span><span class="erm-anchor" id="command-d-i-l"></span>D#1/#2</strong></span><br>
Разрешить/запретить событие для игроков-людей.<br>
        #2 = 1 – запретить<br>
        #2 = 0 – разрешить<br>
Для игрока #1 (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-e"></span><span class="erm-anchor" id="command-e-f-1-2-3-4-o-p-r-u"></span>E$</strong></span><br>
Установить/проверить/получить кол-во опыта в $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-f"></span>F$1/$2/$3/$4</strong></span><br>
Установить/проверить/получить четыре 
<a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">первичных навыка</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-g"></span>G#1/$2/$3</strong></span><br>
Установить/проверить/получить
	<a href="../../tables/creatures/#ref-form-creature" data-context="true">охранников</a> в позиции #1 (0..6) типа $2 и кол-ва $3<br>
Команда только устанавливает стражников, но не включает их.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-i"></span>I#</strong></span><br>
Запретить/разрешить событие для ИИ<br>
        # = 0 – запретить<br>
        # = 1 – разрешить</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-l"></span>L#</strong></span><br>
Отменить (# = 1) или не отменять (# = 0) событие после первого 
посещения</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-m"></span><span class="erm-anchor" id="command-m-text-m-mz-m1"></span>M^текст^</strong></span><br>
Установить текст сообщения. Может содержать любые символы, кроме "^" и ";"</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M#</strong></span><br>
Установить текст сообщения из глобального события номер #</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M-1</strong></span><br>
Не показывать сообщение на экран</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Mz#</strong></span><br>
Установить/получить текст сообщения из текстовой переменной</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M1/$<br>
M1/-1</strong></span><br>
Установить и получить текстовые параметры.<br>
Вы можете использовать это, если команда M использовалась для установки послания.<br>
M1/$ - номер текстовой переменной в $<br>
M1/-1 – отменить сообщение (восстановить по умолчанию) </div> 
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-n"></span><span class="erm-anchor" id="command-n-n-1-2-s-s"></span>N#1/$2/$3</strong></span><br>
Установить/проверить/получить
<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">вторичный навык</a> $2, уровень $3 (0 = баз., 1 = продв., 2 = эксп.) 
на позиции #1 в таблице вторичных навыков, даваемых событием.<br>
Вы можете только ИЗМЕНИТЬ навык на другой. Если нет навыка на позиции, ничего не изменится.<br>
<em>Расширенный синтаксис:</em><br>
<span class="erm-tone-red"><strong>N$</strong></span> 
	- проверить/получить кол-во вторичных навыков<br>
Вы можете установить данный параметр, но это ни к чему не приведёт.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-o"></span>O$</strong></span><br>
Установить/проверить/получить мораль (-3…3)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-p"></span>P$</strong></span><br>
Установить/проверить/получить баллы заклинаний (м.б. отрицательным)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-r"></span>R#1/$2</strong></span><br>
Установить/проверить/получить кол-во
	<a href="../../tables/resources/#ref-form-resource" data-context="true">ресурсов</a> #1в $2 (м.б. отрицательным)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-s"></span>S#1/$2</strong></span><br>
Установить/проверить/получить
<a href="../../tables/spells/#ref-form-spell" data-context="true">заклинание</a> $2 на позиции #1 в таблице заклинаний, даваемых событием.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-le-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-le-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Чтобы удалить заклинание с конкретной позиции, укажите -1 в качестве номера заклинания:
<pre class="erm-example"><code class="language-erm">!!LE998:S0/-1; удалить заклинание с 1ой позиции в таблице заклинаний</code></pre>
<span class="erm-anchor" id="ref-rec-le-bold"></span><em class="erm-strong">Замечание:</em> если в событии изначально на конкретной позиции в таблице ничего не было, то все попытки совершить операции с этой позицией вызовут ошибку.</div></details><div class="erm-paragraph"><em>Расширенный синтаксис:</em><br>
<span class="erm-tone-red"><strong>S$</strong></span> 
	- проверить/получить кол-во заклинаний<br>
Вы можете установить данный параметр, но это ни к чему не приведёт.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-u"></span>U$</strong></span><br>
Установить/проверить/получить удачу (-3…3)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-le-x"></span><span class="erm-anchor" id="command-x"></span>X#</strong></span><br>
Активировать стражников, если # не ноль, иначе - выключить их.</div>
<hr>


















</div>

</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!LE#x/#y/#level:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">A$ читает число артефактов; Aindex/art заменяет уже существующий элемент. Для добавления/удаления используйте B.</div>
<hr>
<div class="erm-paragraph">Число бонусных артефактов; элемент по индексу с 0; добавить ID; удалить по индексу. Свитки этим списком не поддерживаются.</div>
<hr>
<div class="erm-paragraph">C — награда существами, G — охрана: слот 0..6, тип, количество. G не включает охрану автоматически.</div>
<hr>
<div class="erm-paragraph">D: игрок 0..7 и запрет для человека 1/разрешение 0. I: ИИ разрешён 1/нет 0. L: удалять после первого посещения 1/сохранять 0.</div>
<hr>
<div class="erm-paragraph">Опыт; четыре первичных навыка; мораль; мана; ресурс по ID; удача. Отрицательные награды допустимы там, где поддерживаются игрой; мораль и удача -3..3.</div>
<hr>
<div class="erm-paragraph">Текст непосредственно, из глобального события или z. M-1 скрывает сообщение; M1 работает с индексом строки, M1/-1 восстанавливает стандарт.</div>
<hr>
<div class="erm-paragraph">N$ и S$ читают размеры списков. N меняет существующий слот навыка: ID, уровень 0 базовый/1 продвинутый/2 экспертный. S меняет существующее заклинание, -1 удаляет. Размер этих списков не увеличивается.</div>
<hr>
<div class="erm-paragraph">Ненулевое значение включает охрану, 0 отключает.</div>
<hr>
<div class="erm-paragraph">Также применяется к ящику Пандоры. Удалённое после посещения событие не восстанавливается ресивером. Короткий селектор читает координаты из трёх v-переменных.</div>
<hr>
<div class="erm-paragraph">ERA 3.9.15 переписала обработку сообщений: принимаются любые строки. Старый числовой способ подставить текст другого события (например GE:M30) отключён. -1 вместо пустой строки устарел; передавайте <code>^^</code>. Описанные выше числовые формы нужны для чтения старых скриптов.</div></section>
:::

## Связанные материалы {#related}

[PA](../../receivers/pa/) · [LE](../../triggers/le/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Посещение локального события (LE)](../../triggers/le/) · [Ящик Пандоры (PA)](../pa/) · [Таблица артефактов](../../tables/artifacts/) · [Таблица существ](../../tables/creatures/) · [Цвета игроков](../../tables/players/) · [Навыки героев](../../framework/constants/hero-skills/) · [Вторичные навыки](../../tables/secondary-skills/) · [Ресурсы](../../tables/resources/) · [Таблица заклинаний](../../tables/spells/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3995) — Introduces many new d-modifiers for all ERM commands, except for GE:E/N, LE:E/N. d+# - integer addition d-# - integer substraction d*# - integer multiplication d:# - integer division d|# sets bits from # (bitwise OR oper…
<!-- ERA3-GENERATED:END -->
