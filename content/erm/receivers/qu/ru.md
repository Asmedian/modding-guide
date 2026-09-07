---
{"title":"Задания объектов (QU)","summary":"Ресивер QU: задания объектов, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Задания объектов (QU)"}
---

## Ресивер QU {#ref-rec-qu}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-q4-1-2-3-4-5"></span><span class="erm-anchor" id="command-q5-q5-q6-q6-q7-q8-q9"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-qu-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>QU</strong>
<a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(объект-задание)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-qu-red"></span><span class="erm-tone-red">!!QU#1/#2/#3:XXXX;</span> 
- Объект-задание. Предназначен для изменения атрибутов Хижины Провидца или Стража Границы на карте в координатах X Y L (#1/#2/#3).</strong><br> 
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>!!QU#:XXXX;</strong></span> 
- Объект-задание по координатам в переменных v[#], v[#+1], v[#+2]</div>
<u></u><span class="erm-anchor" id="ref-rec-qu-1"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-qu-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При установке на карту Хижины Провидца (<a href="../../tables/objects/#ref-form-objects-t83" data-context="true">тип 83</a>) или 
Стража Границы (<a href="../../tables/objects/#ref-form-objects" data-context="true">тип 9</a>) с помощью ERM, 
не забудьте вызвать <a href="./#ref-rec-qu-q">QU:I</a> после создания объекта. 
В противном случае Вы не сможете настраивать или взаимодействовать с объектом (скорее всего игра вылетит).</div></details>
<span class="erm-anchor" id="ref-rec-qu-q1"></span><span class="erm-anchor" id="command-q1-q2-1-2-3-4-q3-1-2"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../ob/#ref-rec-ob">!!OB</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Установить/проверить/получить последний день задания в $.<br>
<strong><u>Комментарий</u>:</strong> объект должен иметь задание (проверяется с помощью <a href="./#ref-rec-qu-i">QU:Q</a>), иначе эта команда вызовет ошибку ERM.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-i"></span><span class="erm-anchor" id="command-i-d-n"></span><span class="erm-tone-red"><strong>I</strong></span><br>
Произвести инициализацию объекта.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-m"></span><span class="erm-anchor" id="command-m"></span><span class="erm-tone-red"><strong>M#/^текст^</strong></span><br>
Установить стандартную строку ERM как текст сообщения. Строка может содержать коды отображения переменных.
</div><pre>        # = 0 - сообщение с предложением
        # = 1 - сообщение о продвижении
        # = 2 - сообщение о выполнении</pre>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> объект должен иметь задание (проверяется с помощью <a href="./#ref-rec-qu-q">QU:Q</a>), иначе эта команда вызовет ошибку ERM.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M#/$</strong></span><br>
Установить/получить текст сообщения в строковую переменную.<br>
<em>Расширенный синтакс:</em><br>
<span class="erm-tone-red"><strong>M#/0</strong></span><br>
Удалить сообщение.<br>
<em>Расширенный синтакс (для опытных пользователей):</em><br>
<span class="erm-tone-red"><strong>M#/$</strong></span><br>
Установить текст по указателю $ как текст сообщения или получить указатель на текст сообщения.<br>
<strong><u>Комментарий</u>:</strong> объект должен иметь задание (проверяется с помощью <a href="./#ref-rec-qu-q">QU:Q</a>), 
иначе эта команда вызовет ошибку ERM.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Установить/проверить/получить номер имени провидца (0..47). См. файл <em class="erm-legacy-file">seerhut.txt</em> в игровых ресурсах для полного списка имён.<br>
<strong><u>Комментарий</u>:</strong> в игре есть лишь 48 имён. Интересно, можно ли добавить ещё…</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-q"></span><span class="erm-anchor" id="command-q-q0"></span><span class="erm-tone-red"><strong>Q?$</strong></span><br>
Проверить/получить тип задания в $:</div><pre>
        0 - нет задания
        1 - достичь уровня
        2 - достичь показателей первичных навыков
        3 - убить героя
        4 - убить существо на карте приключений
        5 - принести артефакты
        6 - принести существ
        7 - принести ресурсы
        8 - посетить определённым героем
        9 - быть игроком определённого цвета
</pre>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q0</strong></span><br>
Удалить задание<br>
<strong><u>Комментарий</u>:</strong> без задания нельзя вызвать <a href="./#ref-rec-qu-d">QU:D</a> и <a href="./#ref-rec-qu-m">QU:M</a>.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q1/$</strong></span><br>
Установить/проверить/получить уровень опыта, который необходимо достичь, в $.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q2/$1/$2/$3/$4</strong></span><br>
Установить/проверить/получить Атаку/Защиту/Силу Магии/Знание, которые необходимо достичь, в $1/$2/$3/$4.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q3/$1/$2</strong></span><br>
Установить/проверить/получить <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>, 
которого нужно убить, в $1 и <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">игроков</a>, которые выполнили задание, в $2.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q4/$1/$2/$3/$4/$5</strong></span><br>
Установить/проверить/получить координаты монстра, которого нужно убить, в $1/$2/$3; номер <a href="../../tables/creatures/#ref-form-creature" data-context="true">существа</a>, 
отображаемого в журнале заданий, в $4; и <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрока</a>, убившего существо, в $5.<br>
Наличие существа по указанным координатам не обязательно.<br>
Обратите внимание, $4 может не соответствовать реальному типу существа, это значение нужно исключительно для красоты.<br>
Если по указанным координатам появится другое существо и его убьют, то игрок, убивший предыдущее существо, потеряет право завершить задание.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q5</strong></span><br>
Очистить список артефактов, которые нужно принести</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q5/#/$</strong></span><br>
Установить/проверить/получить кол-во <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефактов #</a>, которые нужно принести, в $.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q6</strong></span><br>
Очистить список существ, которые нужно принести.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q6/#/$</strong></span><br>
Установить/проверить/получить кол-во <a href="../../tables/creatures/#ref-form-creature" data-context="true">существ #</a>, которых нужно принести, в $.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q7/#/$</strong></span><br>
Установить/проверить/получить кол-во <a href="../../tables/resources/#ref-form-resource" data-context="true">ресурсов #</a>, которые нужно принести, в $.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q8/$</strong></span><br>
Установить/проверить/получить <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>, который должен посетить этот объект.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>Q9/$</strong></span><br>
Установить/проверить/получить <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрока</a>, который должен посетить этот объект.<br>
<strong><u>Комментарий</u>:</strong>  это установит тип задания даже при проверке, потому что проверять такое для других типов задания бессмысленно.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-r"></span><span class="erm-anchor" id="command-r-1-2-3"></span><span class="erm-tone-red"><strong>R$1/$2/$3</strong></span><br>
Установить/проверить/получить тип награды в Хижине Провидца в $1 и значения награды в $2 и $3.<br>
Награда может быть следующих типов:
</div><pre>        0 - нет награды
        1 - $2 опыта
        2 - $2 очков заклинаний
        3 - $2 морали
        4 - $2 удачи
        5 - $3 единиц <a href="../../tables/resources/#ref-form-resource" data-context="true">ресурса $2</a>
        6 - $3 очков  <a href="../../framework/constants/hero-skills/#ref-form-primaryskill" data-context="true">первичного навыка $2</a>
        7 - <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">вторичный навык $2</a> уровня $3
        8 - <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт $2</a>
        9 - <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинание $2</a>
        10 - $3 существ <a href="../../tables/creatures/#ref-form-creature" data-context="true">типа $2</a></pre>
<div class="erm-paragraph"><strong><u>Комментарии</u>:</strong> обратите внимание, эта команда может быть вызвана только со всеми тремя параметрами, 
даже если необходимы лишь первые два.<br>
Некоторые значения могут содержать мусор при проверке награды в предустановленных хижинах (например, количество существ). 
Вам придётся привести такие значения к правильному размеру самостоятельно.</div>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-qu-v"></span><span class="erm-anchor" id="command-v-v"></span><span class="erm-tone-red"><strong>V$</strong></span><br>
Установить/проверить/получить <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">цвета игроков</a>, посетивших этот объект.</div>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>V#/$</strong></span><br>
Установить/проверить/получить, посетил ли <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок #</a> этот объект, в $:
</div><pre>        0 - не посетил
        1 - посетил</pre>

<hr>

















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[UN:I](../../receivers/un/) · [H3Quests_RefreshData](../../framework/functions/h3quests-refreshdata/)



## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Таблица объектов в игре](../../tables/objects/#values) · [Таблица объектов в игре](../../tables/objects/) · [Объекты карты (OB)](../ob/) · [Таблица героев](../../tables/heroes/) · [Цвета игроков](../../tables/players/) · [Таблица существ](../../tables/creatures/) · [Таблица артефактов](../../tables/artifacts/) · [Ресурсы](../../tables/resources/) · [Навыки героев](../../framework/constants/hero-skills/) · [Вторичные навыки](../../tables/secondary-skills/) · [Таблица заклинаний](../../tables/spells/)
