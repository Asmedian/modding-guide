---
{"title":"Параметры типов существ (MA)","summary":"Ресивер MA: параметры типов существ, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Параметры типов существ (MA)"}
---

## Ресивер MA {#ref-rec-ma}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ma-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MA</strong> (характеристики монстров)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-ma-red"></span><span class="erm-tone-red">!!MA:XXXX;</span> - общее изменение характеристик
<a href="../../tables/creatures/#ref-form-creature" data-context="true">монстров</a> определённого типа для всех монстров на карте этого типа.</strong><br>
Для всех команд можно установить, проверить и получить значения.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-a"></span><span class="erm-anchor" id="command-a"></span>A#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет атаку $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-b"></span><span class="erm-anchor" id="command-b"></span>B#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> (заклинатель) может колдовать своё заклинание $ раз за битву</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-c"></span><span class="erm-anchor" id="command-c-1-2"></span>C#1/#2/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> сто́ит : 
<a href="../../tables/resources/#ref-form-resource" data-context="true">ресурс #2</a> в кол-ве $<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ma-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ma-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Не устанавливайте цену золотом (номер ресурса - 6) на 0. Если вы установите более одного доп. ресурса (0..5), будет использоваться только 
первый. Если вы хотите изменить второй ресурс (в дополнение к золоту) с первого на второй, установите предыдущий ресурс на 0.<br>
<pre class="erm-example"><code class="language-erm">!#MA:C1/2/3; 		- установить цену в 3 руды (золото+руда)
!#MA:C1/2/0 C1/0/5;	- установить цену в 5 дерева и 0 руды (золото+дерево)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-d"></span><span class="erm-anchor" id="command-d"></span>D#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет защиту $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-e"></span><span class="erm-anchor" id="command-e"></span>E#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет максимальный урон $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-f"></span><span class="erm-anchor" id="command-f"></span>F#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет боевую ценность $ (используется для ИИ)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-g"></span><span class="erm-anchor" id="command-g"></span>G#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет скорость прироста $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-h"></span><span class="erm-anchor" id="command-h"></span>H#/$</strong></span><br>
Максимальное кол-во <a href="../../tables/creatures/#ref-form-creature" data-context="true">монстра #</a> на карте в начале игры равно $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-i"></span><span class="erm-anchor" id="command-i"></span>I#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет ценность $ для ИИ </div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-l"></span><span class="erm-anchor" id="command-l"></span>L#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет уровень $ (0..6)<br>
<strong><u>Комментарий</u>:</strong> монстры, считающиеся в игре выше 7го уровня, так же имеют $ = 6.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-m"></span><span class="erm-anchor" id="command-m"></span>M#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет минимальный урон $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-n"></span><span class="erm-anchor" id="command-n"></span>N#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a>  имеет $ выстрелов </div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-o"></span><span class="erm-anchor" id="command-o"></span>O#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> принадлежит <a href="../../tables/towns/#ref-form-towns" data-context="true">замку $</a> 
(-1 = нейтрал)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-p"></span><span class="erm-anchor" id="command-p"></span>P#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет $ здоровья</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ma-r"></span><span class="erm-anchor" id="command-r"></span>R#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет дополнительный прирост $<br>
<strong><u>Комментарий</u>:</strong> имеется ввиду прирост при постройке дополнительных зданий.<br>
К примеру, Бастион Грифонов даёт +3 Грифона. Изменяя данное значение Грифонам, 
вы добьётесь изменения прироста после постройки Бастиона.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-s"></span><span class="erm-anchor" id="command-s"></span>S#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> имеет скорость $</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-u"></span><span class="erm-anchor" id="command-u"></span>U#/$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Монстр #</a> может улучшаться в монстра $.<br>
         $ = -2 – не улучшается<br>
         $ = -1 – использовать обычное улучшение<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ma-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ma-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете установить свой ряд улучшений ;-) Например, так:
<pre class="erm-example"><code class="language-erm">!#MA:U0/1 U1/2 U2/3 U3/4...</code></pre>
Это выглядит прекрасно и вы можете улучшать их всех. Если вы установите круговое 
улучшение двух существ, игрок сможет выбрать лучшее существо. Вы можете 
использовать <a href="../do/#ref-rec-do">круговую функцию</a> (это быстрее) для прохода по всем существам и 
установки улучшений для каждого (в следующее существо).<br>
В городе вы можете улучшать только то, что можете обычно там улучшить. Так, вы 
можете установить улучшение Копейщиков в другое существо, но сможете улучшить их 
только в Замке или форте на холме. Если вы установите улучшение Алебардщиков в 
другое существо, улучшить их сможете только в форте на холме, так как дальнейшее 
улучшение для них не разрешено в городах.<br>
<span class="erm-anchor" id="ref-rec-ma-bold"></span><em class="erm-strong">Замечание:</em> использование команды <span class="erm-anchor" id="ref-rec-ma-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!!MA</span>:U#/-2;</strong> приводит к тому, что любое существо при её установке будет улучшаться в Копейщика (исправлено в <a href="../../compatibility/#ref-era-index">ERA</a>).</div></details>
<hr>
<div><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ma-v"></span><span class="erm-anchor" id="command-v"></span>V#/$</strong></span><br>
Минимальное кол-во <a href="../../tables/creatures/#ref-form-creature" data-context="true">монстра #</a> в начале игры на карте равно $
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ma-x"></span><span class="erm-anchor" id="command-x"></span>X#/$</strong></span><br>
Установить <a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">флаг $</a> <a href="../../tables/creatures/#ref-form-creature" data-context="true">монстру #</a>.<br> 
Работая с флагами, очень внимательно проверяйте их значения (см. <a href="../vr/#ref-rec-vr-and">битовые операции</a>).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ma-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ma-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Дать флаг монстру
!!IF:M^Теперь Арбалетчики стреляют дважды^; 
!!MA:X2/?y1;          [записать все флаги монстра #2 в y1]
!!VRy1:|32768;        [добавить флаг двойной атаки] 
!!MA:X2/y1;           [установить новые значения флагов монстру #2]</code></pre>
	
<pre class="erm-example"><code class="language-erm">; Забрать флаг у монстра
!!IF:M^Теперь Тяжёлые Арбалетчики стреляют единожды^; 
!!MA:X3/?y1;          [записать все флаги монстра #3 в y1] 
!!VRy1:|32768 -32768; [безопасный способ: сначала дать флаг, потом забрать его] 
!!MA:X3/y1;           [установить новые значения флагов монстру #3]</code></pre></div></details>
<hr>















</div></div>
</div>
</section>
:::

## Связанные материалы {#related}

[BM](../../receivers/bm/)



## Связанные команды и таблицы {#reference-links}

[Таблица существ](../../tables/creatures/) · [Ресурсы](../../tables/resources/) · [Типы городов](../../tables/towns/) · [Циклические вызовы (DO)](../do/) · [Отладка и совместимость ERM](../../compatibility/) · [Битовые флаги существ](../../tables/creature-flags/) · [Переменные и выражения (VR)](../vr/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.5, +](../../compatibility/#era3-v-3-0-5-l3237) — Added functions for SN:M arrays handling to "Era Erm Framework" mod. !?FU(Array_Join); ; Concatenates array items into single string, using passed glue string. Works with both numeric and string arrays. ; Example: &#91;'one'…
<!-- ERA3-GENERATED:END -->
