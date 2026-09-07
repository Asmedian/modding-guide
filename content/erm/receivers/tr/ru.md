---
{"title":"Клетки карты (TR)","summary":"Ресивер TR: клетки карты, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Клетки карты (TR)"}
---

## Ресивер TR {#ref-rec-tr}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-tr-text"></span><div> 
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>TR</strong> (настройка территорий)
</span></div>
<div class="erm-paragraph">
<strong><br>
<span class="erm-anchor" id="ref-rec-tr-red"></span><span class="erm-tone-red">!!TRx/y/l:XXXX;</span> 
- установить тип земли (почвы) или изменить проходимость квадрата в позиции X Y L.</strong> 
Используется для установки типа земли на карте или изменения проходимости этого квадрата.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tr-e"></span><span class="erm-anchor" id="command-e-p"></span>E$</strong></span><br>
Квадрат – как вход (жёлтый квадрат) или нет<br>
         $ = 0 – жёлтый квадрат<br>
         $ = 1 – нет жёлтого квадрата</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tr-g"></span><span class="erm-anchor" id="command-g"></span>G?$</strong></span><br>
Тип накладного ландшафта поверх почвы.<br>
Можно только ПОЛУЧИТЬ или ПРОВЕРИТЬ.<br>
<u>
</u><br>
</div><span class="erm-anchor" id="ref-rec-tr-1"></span><details class="erm-comment"><summary>Возможные ландшафты (<span class="erm-anchor" id="ref-rec-tr-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
46      Магические равнины<br>
21      Проклятая земля<br>
227    Святая земля<br>
224    Дьявольский туман<br>
222    Клеверное поле<br>
225    Попутный ветер<br>
228    Прозрачные пруды<br>
226    Огненные поля<br>
231    Скалистая земля<br>
229    Магические облака</div></details>
<hr><div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-tr-p"></span>
P$<br></strong></span>Установить/проверить/получить проходимость квадрата (красный квадрат)<br>
         $ = 1 – означает, что проходим<br>
         $ = 0 – не проходим</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-tr-t"></span><span class="erm-anchor" id="command-t-1-2-3-4-5-6-7-8"></span>
T$1/$2/$3/$4/$5/$6/$7/$8</strong></span><br>
Установить/проверить/получить тип почвы<br>
         $1 – <a href="../../tables/terrain/#ref-form-terrain" data-context="true">тип почвы</a>
<br>
         $2 – </div><span class="erm-anchor" id="ref-rec-tr-3"></span><details class="erm-comment"><summary>подтип почвы</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="erm-paragraph"><img src="../../../../assets/erm/0e5843b648a09023.gif" alt="dirtsand" loading="lazy" decoding="async" class="erm-figure" width="422" height="299"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/2a115150c138b4a2.gif" alt="grass" loading="lazy" decoding="async" class="erm-figure" width="439" height="303"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/49e53bd1fa7f8f5f.gif" alt="snow" loading="lazy" decoding="async" class="erm-figure" width="448" height="310"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/ce36992f383080fe.gif" alt="swamp" loading="lazy" decoding="async" class="erm-figure" width="435" height="303"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/f470fb5d64ecd86e.gif" alt="rock" loading="lazy" decoding="async" class="erm-figure" width="436" height="298"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/aed03ee79b0fc207.gif" alt="subtr" loading="lazy" decoding="async" class="erm-figure" width="439" height="307"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/89db327678cdca73.gif" alt="lava" loading="lazy" decoding="async" class="erm-figure" width="432" height="300"></div>
<div class="erm-paragraph"><img src="../../../../assets/erm/d10bfa6064055420.gif" alt="waterempt" loading="lazy" decoding="async" class="erm-figure"></div></blockquote></div></details>
         $3 – <span class="erm-anchor" id="ref-rec-tr-4"></span><details class="erm-comment"><summary>тип реки</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-tr-t0"></span><blockquote class="erm-margin-top-zero erm-note">
	<strong>0</strong> = нет<br>
	<strong>1</strong> = чистая<br>
	<strong>2</strong> = замёрзшая<br>
	<strong>3</strong> = мутная<br>
	<strong>4</strong> = лавовая</blockquote></div></details><br>
         $4 – <span class="erm-anchor" id="ref-rec-tr-5"></span><details class="erm-comment"><summary>подтип реки</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="table-wrap erm-reference-table"><table width="50%">
	<span class="erm-anchor" id="ref-rec-tr-n2"></span><tr class="erm-tone-purple erm-align-center erm-strong">
		<td>Номер</td>
		<td>Картинка</td>
		<td>Номер</td>
		<td>Картинка</td>
	</tr>
	<tr class="erm-align-center">
		<td>00</td>
		<td><img src="../../../../assets/erm/c9c1ce98777b05f2.gif" alt="1" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>07</td>
		<td><img src="../../../../assets/erm/415c248d020a7620.gif" alt="8" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>01</td>
		<td><img src="../../../../assets/erm/f64fe86fa381a00d.gif" alt="2" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>08</td>
		<td><img src="../../../../assets/erm/6a804e3ffc400264.gif" alt="9" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>02</td>
		<td><img src="../../../../assets/erm/28aa3ab828a6a3f3.gif" alt="3" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>09</td>
		<td><img src="../../../../assets/erm/a0b3ed8ea1d20177.gif" alt="10" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>03</td>
		<td><img src="../../../../assets/erm/c623441dc87430be.gif" alt="4" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>10</td>
		<td><img src="../../../../assets/erm/a3722f2c46b27edb.gif" alt="11" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>04</td>
		<td><img src="../../../../assets/erm/280259abf8d93058.gif" alt="5" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>11</td>
		<td><img src="../../../../assets/erm/77b7e152461d2a28.gif" alt="12" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>05</td>
		<td><img src="../../../../assets/erm/bf487c063538315c.gif" alt="6" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>12</td>
		<td><img src="../../../../assets/erm/8e2e6b5eb6600aa0.gif" alt="13" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>06</td>
		<td><img src="../../../../assets/erm/1801c38f30bdb724.gif" alt="7" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
</table></div></blockquote></div></details><br>
         $5 – <span class="erm-anchor" id="ref-rec-tr-6"></span><details class="erm-comment"><summary>тип дороги</summary><div class="erm-comment-body"><blockquote class="erm-margin-top-zero erm-note">
<strong>0</strong> = нет<br>
<strong>1</strong> = грязевая<br>
<strong>2</strong> = гравийная<br>
<strong>3</strong> = каменная</blockquote></div></details><br>
         $6 – <span class="erm-anchor" id="ref-rec-tr-7"></span><details class="erm-comment"><summary>подтип дороги</summary><div class="erm-comment-body"><blockquote class="erm-note">
<div class="table-wrap erm-reference-table"><table width="30%">
	<tr class="erm-tone-purple erm-align-center erm-strong">
		<td>Номер</td>
		<td>Картинка</td>
		<td>Номер</td>
		<td>Картинка</td>
	</tr>
	<tr class="erm-align-center">
		<td>0</td>
		<td><img src="../../../../assets/erm/999a0801c67f4daa.gif" alt="r0" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>9</td>
		<td><img src="../../../../assets/erm/9254f298cb264702.gif" alt="r9" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>1</td>
		<td><img src="../../../../assets/erm/3e75fdb6c745ee1f.gif" alt="r1" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>10</td>
		<td><img src="../../../../assets/erm/85fee582fd32e5a7.gif" alt="r10" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>2</td>
		<td><img src="../../../../assets/erm/ebd91a762e587a63.gif" alt="r2" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>11</td>
		<td><img src="../../../../assets/erm/3117e518ebbb9774.gif" alt="r11" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>3</td>
		<td><img src="../../../../assets/erm/03c7821217b3af22.gif" alt="r3" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>12</td>
		<td><img src="../../../../assets/erm/fbb8d466fa46fd74.gif" alt="r12" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>4</td>
		<td><img src="../../../../assets/erm/26776ff15a46da63.gif" alt="r4" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>13</td>
		<td><img src="../../../../assets/erm/e28f759bff4d858a.gif" alt="r13" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>5</td>
		<td><img src="../../../../assets/erm/d4425d4c17480b3a.gif" alt="r5" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>14</td>
		<td><img src="../../../../assets/erm/6ee9305ce736c01f.gif" alt="r14" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>6</td>
		<td><img src="../../../../assets/erm/e26c1a8b977146bf.gif" alt="r6" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>15</td>
		<td><img src="../../../../assets/erm/20778034a0247886.gif" alt="r15" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>7</td>
		<td><img src="../../../../assets/erm/cbe69ab82f6ae4ad.gif" alt="r7" loading="lazy" decoding="async" class="erm-figure"></td>
		<td>16</td>
		<td><img src="../../../../assets/erm/cdc545938fa2364e.gif" alt="r16" loading="lazy" decoding="async" class="erm-figure"></td>
	</tr>
	<tr class="erm-align-center">
		<td>8</td>
		<td><img src="../../../../assets/erm/502dc4648f440637.gif" alt="r8" loading="lazy" decoding="async" class="erm-figure"></td>
		<td></td>
		<td></td>
	</tr>
</table></div>
<div class="erm-paragraph"><u>Для версии 3.58f, <a href="../../compatibility/#ref-cont-te">TE</a></u>: к сожалению, похоже, что здесь закралась ошибка кода, потому что для любого типа дороги (0..16) появляется один и тот же фрагмент:
   <span class="erm-anchor" id="ref-rec-tr-vc"></span><img src="../../../../assets/erm/766702f37b6017ca.gif" alt="Для версии 3.58f, TE: к сожалению, похоже, что здесь закралась ошибка кода, потому что для любого типа дороги (0..16) появляется один и тот же фрагмент: . Поэто" loading="lazy" decoding="async" class="erm-figure">.<br>
Поэтому невозможно сделать дорогу через ERM, если только сильно 
извилистую, диагональную, используя различные зеркала :).<br>
Хотя есть несколько способов исправить это:
</div><ul class="erm-margin-top-zero">
<li>Вы можете изменять тип уже нарисованной дороги так: !!TR…:Td/d/d/d/тип_дороги/d/d/d; 
- и указанный в координатах фрагмент дороги превратится в фрагмент указанного типа.</li>
<li>Вы можете пост-инструкцией изменить тип нарисованной в редакторе дороги 
на 0 (что означает «нет дороги», но все биты квадрата сохраняются), а затем, при 
выполнении чего-либо, восстановить дорогу.</li>
<li>А можете использовать вот такой скрипт, устраняющий данный баг скриптового кода WoG:
<pre class="erm-example"><code class="language-erm">!?PI;
!!UN:C7570147/1/9;
!?GM0;
!!UN:C7570147/1/9;</code></pre></li></ul>
<u>Для поздних версий игры</u>: данный баг исправлен в <a href="../../compatibility/#ref-era-index">ERA</a>.</blockquote></div></details><br>
         $7 – <span class="erm-anchor" id="ref-rec-tr-8"></span><details class="erm-comment"><summary>тип зеркала</summary><div class="erm-comment-body"><blockquote class="erm-note">
<a href="../../tables/bits/#ref-form-hex" data-context="true">Биты</a>: 76543210<br>
--CcBbAa ("-" означает "не имеет значения")<br>
a - горизонтальное зеркало для почвы<br>
A - вертикальное зеркало для почвы<br>
b - горизонтальное зеркало для реки<br>
B - вертикальное зеркало для реки <br>
c - горизонтальное зеркало для дороги <br>
C - вертикальное зеркало для дороги<br>
<br><u>Пример</u>:<br>
<div class="table-wrap erm-reference-table"><table width="100%">
<tr>
	<td><img src="../../../../assets/erm/b1442e85b03bdcaf.gif" alt="blank" loading="lazy" decoding="async" class="erm-figure" width="140" height="0"></td><td width="95%"></td></tr>
<tr>
	<td><img src="../../../../assets/erm/6718d35488ddc512.gif" alt="↔ Зеркало 0" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Зеркало 0</td>
	<td>Скажем, вот наш квадрат …<br>
	Так он будет выглядеть, если используется зеркало 0</td></tr>
<tr>
	<td><img src="../../../../assets/erm/180c7cead9d18ee7.gif" alt="↔ Зеркало 1" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Зеркало 1</td>
	<td>Затем установим первый бит (зеркало = 1)<br>
	Это зеркало отражает квадрат горизонтально</td></tr>
<tr>
	<td><img src="../../../../assets/erm/3efef80748341d8e.gif" alt="↔ Зеркало 2" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Зеркало 2</td>
	<td>Или установим второй бит (зеркало = 2)<br>	
	Квадрат отразится вертикально</td></tr>
<tr>
	<td><img src="../../../../assets/erm/d1d227cbd2f2f530.gif" alt="↔ Зеркало 3" loading="lazy" decoding="async" class="erm-figure" width="32"> ↔ Зеркало 3</td>
	<td>Или установим оба бита (зеркало = 3 [2+1] )<br>	
	Квадрат отразится вертикально и горизонтально.</td></tr>
</table></div><br>
<u>
</u><span class="erm-anchor" id="ref-rec-tr-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-tr-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Давайте сделаем так, чтобы каждый щелчок ПКМ на карте горизонтально зеркалил клетку ландшафта под курсором..
<pre class="erm-example"><code class="language-erm">!?CM; триггер обработки кликов мышки на карте
!!CM:S?y1 P?v2/?v3/?v4; смотрим координаты клика на карте
!!FU&amp;y1&lt;&gt;14:E; только для ПКМ
!!TR2:Td/d/d/d/d/d/?y2/d; получаем битовую маску зеркал клетки
!!VRy2:X1; меняем состояние 1 бита (отвечает за горизонталь)
!!TR2:Td/d/d/d/d/d/y2/d; возвращаем клетке изменённую битовую маску</code></pre></div></details><br><br>
То же самое и с зеркалами дорог и рек.<br>
Горизонтальное зеркало для рек = 4<br>
Вертикальное зеркало для рек = 8<br>
Зеркало обоих типов для рек = 12 [8+4]<br>
Горизонтальное зеркало для дорог = 16<br>
Вертикальное зеркало для дорог = 32<br>
Зеркало обоих типов для дорог = 48 [32+16]<br>
Вы можете комбинировать все зеркала.<br>
Скажем, горизонтальное зеркало для почвы, вертикальное зеркало для реки и 
зеркало обоих типов для дороги = 57 [1+8+16+32]</blockquote></div></details><br>
         $8 – <span class="erm-anchor" id="ref-rec-tr-9"></span><details class="erm-comment"><summary>битовая маска доступности</summary><div class="erm-comment-body"><blockquote class="erm-note">
<a href="../../tables/bits/#ref-form-hex" data-context="true">Биты</a>: 76543210<br>
???E???P ("?" означает нет информации)<br>
P - проходимый квадрат<br>
E - вход<br>
Эти биты могут быть установлены индивидуально через команды 
<a href="./#ref-rec-tr-p">TR:P</a> и <a href="./#ref-rec-tr-e">TR:E</a></blockquote></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tr-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Установить/проверить/получить видимость квадрата (<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">побитно</a>).<br>
Похоже на <a href="../un/#ref-rec-un-s">UN:S</a> или <a href="../un/#ref-rec-un-h">UN:H</a>, но для 
определённого квадрата. Например, если квадрат видят красный, синий и фиолетовый 
игрок, то значение будет 1+2+32=35.<br>
Монстры тоже имеют видимость вокруг себя; их бит - 256. К примеру, установив 
всем квадратам вокруг монстра флаг 255 (видим всем, кроме 256 - монстров), напасть на 
монстра можно будет лишь прямой атакой (обычно радиус атаки - одна клетка, но вы 
"ослепили" монстров)</div>
<hr>

















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/)



## Связанные команды и таблицы {#reference-links}

[Типы почвы](../../tables/terrain/) · [Отладка и совместимость ERM](../../compatibility/) · [Биты, маски и HEX](../../tables/bits/) · [Цвета игроков](../../tables/players/) · [Общие игровые операции (UN)](../un/#command-h-x-y-level-player-radius-s-x-y-level-player-radius)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l3077) — Improved TR:T to allow any number of arguments.
- [ERA 3.0.4, +](../../compatibility/#era3-v-3-0-4-l3387) — Improved ERM stability. Now all non-specified parameters are treated as 0 in X# syntax and ignored in X$ syntax. As a result, !!DL:A without the 4-th parameter will not randomly crash anymore and !!TR may be used with an…
<!-- ERA3-GENERATED:END -->
