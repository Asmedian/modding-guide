---
{"title":"Подсказки типов объектов (HT)","summary":"Ресивер HT: подсказки типов объектов, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер HT {#ref-rec-ht}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ht-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>HT</strong> (текст подсказки)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-ht-red"></span><span class="erm-tone-red">!!HT$1/$2:XXXX;</span> 
- позволяет вам установить подсказку </strong>(текст по <span class="erm-anchor" id="ref-rec-ht-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> )<strong> для всех объектов карты определённого типа и подтипа.</strong>
</div><span class="erm-anchor" id="ref-rec-ht-t0"></span><pre class="erm-margin-top-zero">	$1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип объекта</a> (может быть переменной)
	$2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">подтип</a> (-1 = все) (может быть переменной)</pre>
<strong></strong><span class="erm-anchor" id="ref-rec-ht-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ht-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Сначала всегда ищется подсказка для определённого объекта.<br>
Если она не найдена, то ищется по типу и подтипу любой команды HT (W,V)<br>
Если не найдена, то ищется по типу и любому подтипу.<br>
Команда не имеет проверки на видимость объекта, т.е. вы можете получить текст подсказки, даже щёлкнув на неизведанную точку с заданным в ней описанием. Используйте триггер <a href="../../triggers/cm/#ref-tr-cm">!?CМ</a> и команду <a href="../tr/#ref-rec-tr-v">!!TR:V</a> для устранения подобных случаев.  
<br>
<u>Простой пример</u> - установка текста подсказки для всех объектов определённого типа и подтипа (без изменений):
<pre class="erm-example"><code class="language-erm">ZVSE
!#VRz100:S^Клык летучей Мыши^;
!#VRv25:S0;
!#HT98/1:V25/0/100;
Этот пример изменяет текст подсказки всех городов Оплота на карте на "Клык летучей Мыши" при старте игры.</code></pre><br>
Более <u>полный пример</u>, иллюстрирующий все три команды, представлен ниже. Поместите этот ERM код в событие на тестовой карте 
и вставьте на карту три колонки трёх типов грибных зданий с четырьмя грибными зданиями в колонке:<br>

<pre class="erm-example"><code class="language-erm">ZVSE
!#HT63/18:V10/0/10; !#VRz10:S^Инициализация 63/18^;
!#HT63/18:V10/1/11; !#VRz11:S^Один 63/18^;
!#HT63/18:V10/2/12; !#VRz12:S^Два 63/18^;
!#HT63/18:V10/3/13; !#VRz13:S^Три 63/18^;
!#VRv10:S0;
!?OB63/18;
!!VRv10:+1;

!#HT63/14:W10/0/20; !#VRz20:S^Инициализация 63/14^;
!#HT63/14:W10/1/21; !#VRz21:S^Один 63/14^;
!#HT63/14:W10/2/22; !#VRz22:S^Два 63/14^;
!#HT63/14:W10/3/23; !#VRz23:S^Три 63/14^;
!#HT63/14:W10/4/24; !#VRz24:S^Четыре 63/14^;
!#HT63/14:W10/5/25; !#VRz25:S^Пять 63/14^;
!?OB63/14;
!!IF:W-1;
!!VRw10:+1;

!#HT63/30:P0/30; !#VRz30:S^Инициализация 63/30^;
!#HT63/30:P1/31; !#VRz31:S^Один 63/30^;
!#HT63/30:P2/32; !#VRz32:S^Два 63/30^;
!#HT63/30:P3/33; !#VRz33:S^Три 63/30^;
!#HT63/30:P4/34; !#VRz34:S^Четыре 63/30^;
!#HT63/30:P5/35; !#VRz35:S^Пять 63/30^;
!?OB63/30;
!!PO998:Nd1;
</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-ht-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: команда <a href="../ob/#ref-rec-ob-h">!!OB:H</a></div>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-p"></span><span class="erm-anchor" id="command-p-1-2"></span>P$1/$2</strong></span><br>
Подсказка зависит от <a href="../po/#ref-rec-po-n">PO:N</a> – номера<br>
        $1 – число (0..15). Если число равно числу PO:N, тогда используется переменная z$2 как текст подсказки;<br>
        $2 – номер <em>z</em>-переменной (1..1000), содержащей подсказку (0 = удалить)<br>
Используйте этот метод, когда вам нужно установить подсказку для объекта, не изменяя остальные подсказки других таких же объектов.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-t"></span><span class="erm-anchor" id="command-t"></span>T$</strong></span><br>
Установить подсказку для всех объектов определённого типа и подтипа в <em>z</em>-переменной (0 = удалить)<br>
К примеру, вы можете установить подсказку по артефакту: 
<span class="erm-anchor" id="ref-rec-ht-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!HT</strong>5/<a href="../../tables/artifacts/#ref-form-a1" data-context="true" title="… номер артефакта"><strong>#</strong></a>:T$;</span><br>
Эта подсказка будет использоваться только, если не установлены другие типы подсказок.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-v"></span><span class="erm-anchor" id="command-v-1-2-3"></span>V$1/$2/$3</strong></span><br>
Подсказка, зависящая от <em>v</em>-переменной<br>
         $1 – номер <em>v</em>-переменной<br>
         $2 – значение (0..3). Если переменная v$1 равна $2, то используем в подсказке z$3 <br>
         $3 – номер <em>z</em>-переменной (1..1000), содержащей текст (0 = удалить)<br>
Используйте этот метод, когда вы хотите изменить подсказку по объекту после посещения его героем.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ht-w"></span><span class="erm-anchor" id="command-w-1-2-3"></span>W$1/$2/$3</strong></span><br>
Подсказка, зависящая от <em>w</em>-переменной<br>
         $1 – номер <em>w</em>-переменной текущего героя<br>
         $2 – значение. Если W-переменная ($1) текущего героя равна $2, то используем в подсказке z$3<br>
         $3 – номер <em>z</em>-переменной (1..1000), содержащей текст (0 = удалить)<br>
Используйте эту команду, когда вы хотите изменять подсказку по объекту для каждого героя, кто посетил или не посетил объект.<br><br>
<span class="erm-anchor" id="ref-rec-ht-bold"></span><em class="erm-strong">Замечание:</em> переменные героя w101…w200 не работают с HT:W. Здесь вы можете использовать только w1…w100!</div>
<hr>
















</div>


</div>
</section>
:::

## Связанные материалы {#related}

[PO](../../receivers/po/) · [TR](../../receivers/tr/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Клики мыши (CM)](../../triggers/cm/) · [Клетки карты (TR)](../tr/#command-v) · [Объекты карты (OB)](../ob/#command-b-h) · [Данные клеток карты (PO)](../po/#command-h-n-o-s-t) · [Таблица артефактов](../../tables/artifacts/)
