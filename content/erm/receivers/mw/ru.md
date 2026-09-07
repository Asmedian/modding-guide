---
{"title":"Бродячие монстры (MW)","summary":"Ресивер MW: бродячие монстры, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Бродячие монстры (MW)"}
---

## Ресивер MW {#ref-rec-mw}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-a1-1-2-3-a2-1-2-3"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mw-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MW</strong> (бродячие монстры)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mw-red"></span><span class="erm-tone-red">!!MW#:XXXX;</span> – используется для активирования или деактивирования взаимодействий с бродячими монстрами.</strong><br>
         # – номер бродячего монстра (1..1000)<br>
Бродячие монстры имеют радиус поиска 20 (можно установить командой <a href="./#ref-rec-mw-a4">MW:A4</a>). В начале каждого хода бродячие монстры куда-то идут/атакуют.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-mw-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-mw-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE
!#TM1:S1/1/1/2;
!?TM1;
!!MW:P4/8/0/9/?v100;
!!IF:M^v100:%V100^;
!!MWv100:A2/0/0/0A3/1/1/0/1/1/0;
!!MW:P1/8/0/10/?v110;
!!IF:M^v110:%V110^;
!!MWv110:A2/10/10/0A3/1/1/1/0/1/0;

!?MW0;
!!IF:M^MW0:%V997^;

!?MW1;
!!IF:M^MW1:%V997^;</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-mw-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/mw/#ref-tr-mw">!?MW</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-a"></span>A1/x/y/l</strong></span><br>
Установить/проверить/получить (прыжок при установке) бродячего монстра в позицию X Y L</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mw-a2"></span>A2/x/y/l</strong></span><br>
Установить/проверить/получить точку назначения для бродячего монстра<br>
<strong><u>Комментарий</u>:</strong> для бродячего монстра, ищущего героя, здесь <strong>x</strong> – это <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mw-a3"></span><span class="erm-anchor" id="command-a3-1-2-3-4-5-6-7"></span>A3/$1/$2/$3/$4/$5/$6/$7</strong></span><br>
Менеджмент бродячих монстров<br>
        $1 – Установить/проверить/получить флаг: 
вызвать триггер (1) <a href="../../triggers/mw/#ref-tr-mw">!?MW0</a> или нет (0), когда монстр достигнет точки назначения/перед атакой целевого героя.<br>
        $2 – Установить/проверить/получить флаг: 
вызвать триггер (1) <a href="../../triggers/mw/#ref-tr-mw">!?MW1</a> или нет (0), если монстр был убит (когда бродячий монстр убит, он больше не имеет номера, и этот номер может быть установлен другому монстру при создании)<br>
        $3 – Установить/проверить/получить флаг: идти к точке назначения <br>
        $4 – Установить/проверить/получить флаг: ищет ли монстр какого-либо героя<br>
        $5 – Установить/проверить/получить флаг: будет ли монстр стоять после прибытия на точку/к герою. 
Сейчас монстры, достигшие, атаковавшие и победившие героя, становятся свободными. Если вы установите этот флаг, монстр останется стоять до следующей команды. 
Для свободных существ включенный данный флаг означает стоять на месте.<br>
        $6 – Установить/проверить/получить флаг: поиск определённого <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрока</a> (-1 = любой)<br>
Этот флаг используется только для свободных монстров. Если его установить, точка назначения должна содержать номер цвета игрока вместо <strong>x</strong>. 
Если он не -1, свободные бродячие монстры будут искать героев и замки только этого определённого игрока.<br>
        $7 – Установить/проверить/получить флаг: может двигаться по земле и/или воде <br>
            0 = обычно (только по пустому пространству)<br>
            1 = только по воде.<br>
            2 = может двигаться и там, и там</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-mw-a4"></span><span class="erm-anchor" id="command-a4"></span>A4/#</strong></span><br>
Установить/проверить/получить радиус (#) для поиска (по умолчанию 20)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-c"></span><span class="erm-anchor" id="command-c-1-2-3-e"></span>Cx/y/l/?$</strong></span><br>
Проверить, есть ли бродячий монстр в позиции<br>
        x/y/l – позиция для проверки<br>
Переменная $ будет содержать номер бродячего монстра (1…) или 0, если его там нет.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-e"></span>E?$</strong></span><br>
Проверить на существование бродячего монстра #.<br>
Если не существует, $=0; если существует, $ = номеру бродячего монстра.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-m"></span><span class="erm-anchor" id="command-m-1-2-3-p-1-2-3-4"></span>Mx/y/l/?$</strong></span><br>
Сделать монстра бродячим<br>
        x/y/l – локация с существующим монстром<br>
        $ – переменная примет значение номера бродячего монстра. Если $ равна 0, значит, 
бродячий монстр не был создан по какой-либо причине.<br>
Вы также можете установить монстра через <a href="../mo/#ref-rec-mo">ресивер !!MO</a> (по позиции) после генерации бродячего монстра через !!MW:P.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mw-p"></span>Px/y/l/#/?$</strong></span><br>
Установить (сгенерировать) монстра на позиции<br>
        # – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
        $ – в переменную занесётся номер бродячего монстра (для дальнейших операций)<br>
Для этой команды номер бродячего монстра (!!MW#) не нужен, т.к. он ещё не известен.</div>
<hr>















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[MW](../../triggers/mw/) · [MO](../../receivers/mo/)



## Связанные команды и таблицы {#reference-links}

[Бродячие монстры (MW)](../../triggers/mw/) · [Таблица героев](../../tables/heroes/) · [Цвета игроков](../../tables/players/) · [Нейтральные монстры на карте (MO)](../mo/) · [Таблица существ](../../tables/creatures/)
