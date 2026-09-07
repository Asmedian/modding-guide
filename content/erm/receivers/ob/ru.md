---
{"title":"Объекты карты (OB)","summary":"Ресивер OB: объекты карты, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Объекты карты (OB)"}
---

## Ресивер OB {#ref-rec-ob}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>

<span class="erm-anchor" id="ref-rec-ob-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>OB</strong> (объекты)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ob-red"></span><span class="erm-tone-red">!!OB#1/#2/#3:XXXX;</span> - ресивер объекта в X Y L, используется для активирования, деактивирования, 
установки типа и других общих характеристик объекта в определённой позиции.</strong><br>
<strong>
</strong></div><span class="erm-anchor" id="ref-rec-ob-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ob-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Этим ресивером вы можете установить/проверить/получить тип объекта, его подтип и контрольное слово. 
Этого достаточно, чтобы создать копию любого объекта, хоть и разного на вид, но одинаковых по свойствам.</div>
<span class="erm-anchor" id="ref-rec-ob-q1"></span><div class="erm-tone-quote erm-note"><span class="erm-anchor" id="ref-rec-ob-bold"></span><em class="erm-strong">Как я могу проверить, человек или ИИ посещает объект?</em></div>
Когда любой герой игрока посещает объект, флаг 1000 устанавливается на 1 (истина), а если это герой ИИ - на 0 (ложь).<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?OB...;
!!IF&amp;1000:M^Игрок^;
!!IF&amp;-1000:M^ИИ^;</code></pre></div></details>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/ob/#ref-tr-ob">!?OB</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-b"></span><span class="erm-anchor" id="command-b-h"></span>B</strong></span><br>
Удалить подсказку по правому клику об объекте.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-c"></span><span class="erm-anchor" id="command-c"></span>C$</strong></span><br>
Установить/проверить/получить <a href="../../tables/object-control-words/#ref-cont-conwords">контрольное слово</a> объекта.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ob-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ob-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<em><strong>Контрольное слово</strong></em> - код объекта в игре, означающий некий внутренний параметр объекта.<br>
Например, «Плавучий Сундук» может хранить такие значения данной команды:<br>
0 = пустой<br>
1 = 1500 золота<br>
2 = 1000 золота и артефакт
<ul><li>Пример <em>определения</em> артефакта в сундуке:
<pre class="erm-example"><code class="language-erm">!!OB998:C?y1;
!!VRy2:Sy1 &amp;7;
!!VRv1&amp;y2=2:Sy1 :8 &amp;255 -1;</code></pre>
Теперь v1 хранит <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a>, если он там есть.<br></li>
<li>Пример <em>установки</em> артефакта в сундук:
<pre class="erm-example"><code class="language-erm">!!OB998:Cx; где 'x' - число артефакта.</code></pre>
Расчёт числа проводится по этой формуле:<br>
<span class="erm-tone-purple">8×<em><strong>z</strong></em> – 8190</span>, где <em><strong>z</strong></em> - <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a>.<br>
Полученное число вписываем вместо <em><strong>x</strong></em>, и теперь в сундуке 1000 золота и ваш артефакт.</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-d"></span><span class="erm-anchor" id="command-d-e"></span>D#</strong></span><br>
Запретить игроку 
	<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвета #</a> использовать этот объект</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-e"></span>E#</strong></span><br>
Разрешить игроку 
	<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвета #</a> использовать этот объект</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-h"></span>H$</strong></span><br>
Задать подсказку для любого <a href="../../tables/objects/#ref-form-objects" data-context="true">объекта</a> (по клику <span class="erm-anchor" id="ref-rec-ob-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">).<br>
Установить сообщение в переменную z ($ - номер <em>z</em>-переменной)<br>
<strong><u>Комментарий</u>:</strong> подсказка может выводиться на экран даже, если объект скрыт туманом.</div>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../ht/#ref-rec-ht">!!HT</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span>M$1/$2/$3</strong></span><br>
Эта команда может отключить множество стандартных игровых сообщений и вопросов для объекта в любое время:<br>
         $1 –
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">какому игроку</a> (-1 – для всех)<br>
         $2 – отменить (1) следующее сообщение при посещении<br>
         $3 – следующий статус $2 после виртуального или реального появления сообщения<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ob-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ob-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Это не настоящая отмена, это АВТОответ (по умолчанию – «нет»). Все сообщения через <a href="../if/#ref-rec-if">ресивер IF</a> будут показаны как обычно.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!OB1/2/0:M-1/1/0;</code></pre>
Последующий посетитель объекта в координатах (1/2/0), невзирая какого он цвета, не получит сообщения/вопроса или других слов, 
будет выглядеть так, будто игрок нажал «нет».</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-r"></span><span class="erm-anchor" id="command-r-s"></span>R</strong></span><br>
Разрешить ВСЕМ игрокам использовать этот объект</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-s"></span>S</strong></span><br>
Запретить ВСЕМ игрокам использовать этот объект<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ob-4"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ob-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Когда объект отключается на карте, при его посещении ERM ресиверы для соответствующего объекта БУДУТ выполняться. 
Эта команда отключает только стандартные свойства объекта.<br>
<strong>ВАЖНО:</strong> будьте осторожны – не используйте команду OB:S для объектов с двумя входами (2 жёлтые клетки).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-t"></span><span class="erm-anchor" id="command-t-u"></span>T$</strong></span><br>
Установить/проверить/получить <a href="../../tables/objects/#ref-form-objects" data-context="true">тип объекта</a></div>
<span class="erm-anchor" id="ref-rec-ob-5"></span><details class="erm-comment"><summary><strong>Комментарий</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-ob-show5"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">Иногда нет возможности через команды [<a href="./#ref-rec-ob-t">T</a>] и [<a href="./#ref-rec-ob-u">U</a>] определить тип/подтип объекта,
если на нём стоит герой. Для этого можно воспользоваться такой функцией:
<pre class="erm-example"><code class="language-erm">!?FU(GetRealObjectOnMap);
; Получение реального типа объекта на карте (например, под героем)
; x1/x2/x3 - координаты объекта на карте
; ?x4/?x5 - возврат значений: тип/подтип объекта
; получаем MapItem
!!UN:C6918840/-4/?y1;
!!UN:Cy1/92/-4/?y2;
!!SN:E4228816/2/y2/x1/x2/x3;
!!VRy3:Sv1;
; получить подтип объекта
!!UN:Cy3/34/2/?x5;
; получить правильный тип объекта
!!SN:E5231136/2/y3;
!!VRx4:Sv1;
!!UN&amp;x4=0:Cy3/30/2/?x4;</code></pre></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ob-u"></span>U$</strong></span><br>
Установить/проверить/получить <a href="../../tables/objects/#ref-form-objects" data-context="true">подтип объекта</a></div>
<hr>

















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../triggers/ob/) · [PA](../../receivers/pa/) · [HT](../../receivers/ht/)



## Связанные команды и таблицы {#reference-links}

[Посещение объекта (OB)](../../triggers/ob/) · [Контрольные слова объектов](../../tables/object-control-words/) · [Таблица артефактов](../../tables/artifacts/) · [Цвета игроков](../../tables/players/) · [Таблица объектов в игре](../../tables/objects/) · [Подсказки типов объектов (HT)](../ht/) · [Флаги, сообщения и выбор (IF)](../if/) · [Отладка и совместимость ERM](../../compatibility/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.2.0, -](../../compatibility/#era3-v-3-2-0-l2812) — Fixed re/FU/DO/OB/...dozens of commands... didn't support global named variables in receiver parameters. Examples: !!FUi^edu_someFunc^:P; !!OBi^edu_x^/i^edu_y^/i^edu_z^:T?(objType:y);
<!-- ERA3-GENERATED:END -->
