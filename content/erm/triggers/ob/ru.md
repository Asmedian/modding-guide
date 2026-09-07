---
{"title":"Посещение объекта (OB)","summary":"Можно выбрать тип, тип/подтип либо точные координаты входа. Объект должен иметь входную клетку. Монстры, ресурсы и артефакты подходят; герои используют HE.","translationStatus":"reviewed"}
---

## Триггер OB {#ref-tr-ob}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>OB</strong> (объекты)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ob-red"></span><span class="erm-tone-red">!?OB#1/#2/#3;</span> - триггер при посещении объекта в определённой точке #1/#2/#3 (соответственно, X Y L).<br>
<span class="erm-tone-red">!?OB#1/#2;</span> - триггер при посещении любого объекта определённого типа и подтипа.<br>
<span class="erm-tone-red">!?OB#1;</span> - триггер при посещении любого объекта определённого типа.</strong><br>
</div><div class="erm-paragraph">Работает для любого объекта со «входом» (<a href="../../receivers/tr/#ref-rec-tr-e">жёлтой клеткой</a> в редакторе).<br>
<u>Примечание</u>: этот триггер включает монстров, артефакты и ресурсы, но не героев 
(для героев используйте триггер <a href="../he/#ref-tr-he">!?HE</a>)</div>
<div class="erm-paragraph">Варианты триггеров объекта:
</div><span class="erm-anchor" id="ref-tr-ob-t0"></span><ol class="erm-margin-top-zero">
<li>!?OB#1/#2/#3; - сработает при посещении объекта в определённой точке.</li>
<li>!?OB#1/#2; - сработает при посещении <a href="../../tables/objects/#ref-form-objects" data-context="true">объекта</a> типа #1 / подтипа #2</li>
<li>!?OB#1; - сработает при посещении <a href="../../tables/objects/#ref-form-objects" data-context="true">объекта</a> типа #1</li>
</ol>
Если несколько вариантов триггера !?OB используются для одного объекта, то сначала срабатывает триггер "вариант 2", 
а затем варианты "1" и "3". Варианты "1" и "3" выполняются в порядке расположения в скрипте.<br>
Когда триггер "вариант 2" срабатывает, координаты объекта записываются в v998, v999, v1000, как X Y L соответственно.<br>
Так вы можете получить координаты любых других посещаемых объектов без их указания.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?OB101; - любой сундук с сокровищами на карте
!!CH998:...; - изменить опции посещаемого сундука.</code></pre>
Вы можете использовать ссылочные координаты для всех ресиверов, требующих точных координат, по такому шаблону:
<span class="erm-legacy-code"><strong class="erm-tone-purple erm-legacy-strong">!!XX</strong><span class="erm-anchor" id="ref-tr-ob-dred"></span><strong class="erm-tone-red">@</strong>:…;</span> , где
<pre>      <strong class="erm-tone-purple erm-legacy-strong">XX</strong> - имя ресивера,
      <strong class="erm-tone-red">@</strong> = номер <em>v</em>-переменной, хранящей координату X (v[@]=X, v[@+1]=Y, v[@+2]=Уровень)</pre>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">...
!!OB10:...; 10 - это номер v-переменной, хранящей координату X</code></pre>
Так же можно и через <a href="../../variables/#ref-cont-flags-var-ref">косвенные ссылки</a>:
<pre class="erm-example"><code class="language-erm">...
!!OBv11:...; значение v11 принимается как ссылка, так что v[v11]=X, v[v11+1]=Y, v[v11+2]=Уровень.</code></pre>

<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">
Пост-триггер <strong>OB</strong></span></div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>!$OB#1/#2/#3;</strong></span> - пост-триггер для объекта в определённой точке на карте.<br>
<strong><span class="erm-tone-red">!$OB#1/#2;</span></strong> - пост-триггер для любого <a href="../../tables/objects/#ref-form-objects" data-context="true">объекта</a> типа #1 / подтипа #2.<br>
<span class="erm-tone-red"><strong>!$OB#1;</strong></span> - пост-триггер для любого <a href="../../tables/objects/#ref-form-objects" data-context="true">объекта</a> типа #1.<br>
Принцип действия триггера как и у обычного триггера !?OB…; но данный триггер срабатывает после выполнения стандартных свойств объекта.<br>
Например, пост-триггер используется в жилище, срабатывая после покупки любого существа.
Пост-триггер для замка сработает после конца битвы, если замок был атакован.<br>
<strong></strong></div><span class="erm-anchor" id="ref-tr-ob-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-tr-ob-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!$OB16;
; после посещения банка существ, переменные v998/v999/v1000 содержат координаты посещаемого объекта
!!CB998:G0/d/?y1 G1/d/?y2 G2/d/?y3 G3/d/?y4 G4/d/?y5 G5/d/?y6 G6/d/?y7; y1..y7 - число стражей в отрядах, охраняющих банк
!!OB998&amp;y1=0/y2=0/y3=0/y4=0/y5=0/y6=0/y7=0:S; запрет посещения объекта для всех игроков, если ни одного стража нет (банк разграблен)</code></pre></div></details>
<span class="erm-anchor" id="ref-tr-ob-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/ob/#ref-rec-ob">!!OB</a>, <a href="../../tables/objects/#ref-form-objects" data-context="true">таблица объектов</a></div>

</div>
</section>
:::

## Когда срабатывает {#event}

Можно выбрать тип, тип/подтип либо точные координаты входа. Объект должен иметь входную клетку. Монстры, ресурсы и артефакты подходят; герои используют HE.

## Объявление {#syntax}

```erm
!?OBtype; / !?OBtype/subtype; / !?OBx/y/level;
```

## Ограничения и порядок {#limits}

Пост-триггер !$OB выполняется после стандартной реакции. Для трёх форм порядок не просто от общего к частному: тип/подтип вызывается первым, затем координатный и типовой обработчики в порядке скрипта. v998/v999/v1000 задают координаты посещаемого объекта.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Клетки карты (TR)](../../receivers/tr/#command-e-p) · [Посещение героя (HE)](../he/) · [Таблица объектов в игре](../../tables/objects/) · [Переменные, строки и массивы](../../variables/) · [Объекты карты (OB)](../../receivers/ob/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3871) — ^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver execution. This z-variable is released right after receiver is executed. Don't use string literals in WoG 3.58 h…
<!-- ERA3-GENERATED:END -->
