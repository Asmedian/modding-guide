---
{"title":"Ящик Пандоры (PA)","summary":"Ресивер PA: ящик пандоры, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Ящик Пандоры (PA)"}
---

## Ресивер PA {#ref-rec-pa}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-pa-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>PA</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(Ящик Пандоры)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-pa-red"></span><span class="erm-tone-red">!!PA#1/#2/#3:XXXX;</span> 
- изменение атрибутов Ящика Пандоры на карте в координатах X Y L (#1/#2/#3).</strong> Ящик Пандоры - <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 6</a>.<br> 
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>!!PA#:XXXX;</strong></span> 
- Ящик Пандоры по координатам в переменных v[#], v[#+1], v[#+2]</div>
<div class="erm-paragraph">Рисивер PA можно использовать для настройки Событий.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-pa-1"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-pa-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При установке на карту Ящика Пандоры или События с помощью ERM, не забудьте вызвать <a href="./#ref-rec-pa-i">PA:I</a> после создания объекта. 
В противном случае Вы не сможете настраивать или взаимодействовать с объектом (скорее всего игра вылетит).</div></details>
<span class="erm-anchor" id="ref-rec-pa-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../le/#ref-rec-le">!!LE</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-a"></span><span class="erm-anchor" id="command-a-a"></span><span class="erm-tone-red"><strong>A</strong></span><br>
Очистить список артефактов.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>A#/$</strong></span><br>
Установить/проверить/получить кол-во &lt;<a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефактов #</a> в $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-c"></span><span class="erm-anchor" id="command-c-1-2-3-g-1-2-3"></span><span class="erm-tone-red"><strong>C#1/$2/$3</strong></span><br>
Установить/проверить/получить кол-во существ в позиции:<br>
         #1 – позиция (0..6)<br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
         $3 – кол-во</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-e"></span><span class="erm-anchor" id="command-e-f-1-2-3-4"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Установить/проверить/получить опыт в $.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-f"></span><span class="erm-tone-red"><strong>F#1/$2/$3/$4</strong></span><br>
Установить/проверить/получить Атаку/Защиту/Силу Магии/Знание в $1/$2/$3/$4.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-g"></span><span class="erm-tone-red"><strong>G#1/$2/$3</strong></span><br>
Установить/проверить/получить кол-во охранников<br>
         #1 – позиция (0..6)<br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
         $3 – кол-во<br>
<strong><u>Комментарии</u>:</strong> охрана включается и выключается вручную.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-i"></span><span class="erm-anchor" id="command-i"></span><span class="erm-tone-red"><strong>I</strong></span><br>
Произвести инициализацию Ящика Пандоры.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-pa-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-pa-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Ящики Пандоры и События делят один список объектов и имеют общий лимит в 1024 объекта на карте.<br>
PA:I вызовет ошибку при попытке добавить объект сверх лимита.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-m"></span><span class="erm-anchor" id="command-m-m-text-m0"></span><span class="erm-tone-red"><strong>M^текст^</strong></span><br>
Установить стандартную строку ERM как текст сообщения. 
Строка может содержать коды отображения переменных.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M$</strong></span><br>
Установить/получить текст сообщения в строковую переменную.<br>
<em>Расширенный синтакс:</em><br>
<span class="erm-tone-red"><strong>M0</strong></span><br>
Удалить сообщение.<br>
<em>Расширенный синтакс (для опытных пользователей):</em><br>
<span class="erm-tone-red"><strong>M$</strong></span><br>
Установить текст по указателю $ как текст сообщения или получить указатель на текст сообщения.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-n"></span><span class="erm-anchor" id="command-n-n-n"></span><span class="erm-tone-red"><strong>N</strong></span><br>
Очистить список вторичных навыков</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>N$</strong></span><br>
Установить/получить уровни всех вторичных навыков в 28 переменных, начиная с $:<br>
         0 - нет<br>
         1 - базовый<br>
         2 - продвинутый<br>
         3 - экспертный<br>
В качестве параметра необходимо передавать переменную, а не какой-либо индекс.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-pa-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-pa-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!PAx/y/l:N?v1; получить уровни всех навыков в v1..v28
!!PAx/y/l:Ny-17; установить уровни всех навыков из y-17..y-44</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>N#/$</strong></span><br>
Установить/проверить/получить уровень <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">вторичного навыка #</a> в $:<br>
         0 - нет<br>
         1 - базовый<br>
         2 - продвинутый<br>
         3 - экспертный</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-o"></span><span class="erm-anchor" id="command-o-p-r-u"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Установить/проверить/получить мораль в $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-p"></span><span class="erm-tone-red"><strong>P$</strong></span><br>
Установить/проверить/получить очки заклинаний в $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-r"></span><span class="erm-tone-red"><strong>R#/$</strong></span><br>
Установить/проверить/получить кол-во <a href="../../tables/resources/#ref-form-resource" data-context="true">ресурса #</a> в $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-s"></span><span class="erm-anchor" id="command-s-s"></span><span class="erm-tone-red"><strong>S</strong></span><br>
Очистить список заклинаний</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>S#/$</strong></span><br>
Установить/проверить/получить наличие <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинания #</a> в $:<br>
         0 – заклинание не даётся<br>
         1 – заклинание даётся</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-u"></span><span class="erm-tone-red"><strong>U$</strong></span><br>
Установить/проверить/получить удачу в $.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-pa-x"></span><span class="erm-anchor" id="command-x"></span><span class="erm-tone-red"><strong>X$</strong></span><br>
Установить/проверить/получить включена ли охрана:<br>
      $ = 0 – охрана выключена;<br>
      всё остальное – охрана включена</div>

<hr>

















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[LE](../../receivers/le/) · [UN](../../receivers/un/)



## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Таблица объектов в игре](../../tables/objects/) · [Локальные события (LE)](../le/) · [Таблица артефактов](../../tables/artifacts/) · [Таблица существ](../../tables/creatures/) · [Вторичные навыки](../../tables/secondary-skills/) · [Ресурсы](../../tables/resources/) · [Таблица заклинаний](../../tables/spells/)
