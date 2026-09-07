---
{"title":"Разрушение и зависимости зданий (CD)","summary":"Ресивер CD: разрушение и зависимости зданий, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер CD {#ref-rec-cd}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-b0-1-2"></span><span class="erm-anchor" id="command-b1-1-2-1-2"></span><span class="erm-anchor" id="command-b2-1-2"></span><span class="erm-anchor" id="command-b3-1-2-1-2"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cd-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>CD</strong> (разрушение замков)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-cd-red"></span><span class="erm-tone-red">!!CD:XXXX;</span> - используется для установки параметров разрушения города игроком<br>
</strong> <br></div><span class="erm-anchor" id="ref-rec-cd-1"></span><details class="erm-comment"><summary>Вопросы и ответы (<span class="erm-anchor" id="ref-rec-cd-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-cd-q1"></span><div class="erm-tone-quote erm-note erm-paragraph"><span class="erm-anchor" id="ref-rec-cd-bold"></span><em class="erm-strong">Что произойдет, если я полностью разрушу замок, где в гарнизоне находится мой герой?</em></div>
Внешний герой (герой-гость) не имеет выбора, кроме как уйти на 6 дней. Герой в гарнизоне будет потерян хозяином :-) Он станет ничьим героем. 
Он всегда будет стоять внутри и защищать замок от каждого. Если он победит, он получит опыт :-)
<br>
<div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">Может ли ИИ разрушать замки?</em></div>
На данный момент ИИ не может разрушать замки. Проблема в том, что очень сложно вывести формулу, в каком случае делать это ИИ 
(если вообще возможно). Если вы хотите, чтобы ИИ разрушил свой замок, используйте ERM-скрипт (проконтролируйте, когда ИИ посещает замок, 
решите за него, что делать, и наслаждайтесь). Но ИИ будет перестраивать город в родной замок герой.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-a"></span><span class="erm-anchor" id="command-a-1-2-3"></span><span class="erm-tone-red"><strong>A#1/#$2/$3</strong></span><br>
Задать минимальное кол-во здоровья армии героя для разрушения здания в 
определённом типе города<br>
         $1 –
<a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a><br>
         $2 –
<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">тип здания</a><br>
         $3 – минимальное здоровье армии 
героя</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-cd-b"></span>B0/#1/#2/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Глобальное разрешение/запрещение построек<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a><br>
        #2 – <a href="../../tables/buildings/#ref-form-buldings" data-context="true">номер здания</a><br>
        $ – 0=запретить, 1=разрешить<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-cd-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-cd-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#CD:B0/7/2/0; - запрет гильдий 3 уровня (2) для всех Крепостей (7) с самого старта игры</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>B1/#1/#2/$1/$2</strong></span><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Установить зависимость построек для здания.<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a><br>
        #2 – <a href="../../tables/buildings/#ref-form-buldings" data-context="true">номер здания</a><br>
        $1 – первое значение (байты 0..3), см. <a href="../../tables/buildings/#ref-form-buldings" data-context="true">
номера зданий</a><br>
        $2 – второе значение (байты 4..5), см. <a href="../../tables/buildings/#ref-form-buldings" data-context="true">номера зданий</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cd-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cd-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Каждый бит в $1 (первое значение) или в $2 (второе) означает, что здание может быть построено, когда все постройки с входящими в указанные значениями битами будут построены.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!CD:B1/0/3/36/0; 4 (гильдия 3го уровня) + 32 (таверна) = 36
Эта команда означает, что гильдия магов уровня 4 в Замке (0) может быть построена лишь при гильдии магов 3го уровня и Таверны.</code></pre></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>B2/#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14/#15/#16</strong></span><br>
Установить зависимость построек для здания<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a><br>
        #2 – <a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">тип здания</a><br>
        #3…#16 – номера зданий, от которых зависит здание #2<br>
Можно использовать как инструкцию, опускать ненужные параметры. Нельзя проверить или получить.</div>
<hr>
<div class="erm-paragraph"><strong><span class="erm-tone-red">B3/#1/#2/$1/$2</span><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></strong><br>
Установить исключающие зависимости для здания.<br>
        #1 – <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a><br>
        #2 – <a href="../../tables/buildings/#ref-form-buldings" data-context="true">номер здания</a><br>
        $1 – первое значение (байты 0..3), см. <a href="../../tables/buildings/#ref-form-buldings" data-context="true">номера зданий</a><br>
        $2 – второе значение (байты 4..5), см. <a href="../../tables/buildings/#ref-form-buldings" data-context="true">
номера зданий</a><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-cd-4"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cd-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Каждый бит в $1 (первое значение) или в $2 
(второе) означает, что если здание #2 построено, все постройки с входящими в 
указанные значения битами будут скрыты (визуально) с экрана города.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!CD:B3/0/43/31/0;  вся гильдия магов = 1 + 2 + 4 + 8 + 16 = 31
Эта команда означает, что после постройки Улучш. Портала Славы (43)(Замок) гильдия магов (если есть) не будет показана.</code></pre></div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-d"></span><span class="erm-anchor" id="command-d-m"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
$ - максимальное кол-во разрушений в день</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-e"></span><span class="erm-anchor" id="command-e-1-2-3"></span><span class="erm-tone-red"><strong>E#1/#2/$3</strong></span><br>
Установить минимальный уровень опыта героя для разрушения определённого здания в 
городе.<br>
         $1 –
<a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a><br>
         $2 –
<a href="../../tables/building-pictures/#ref-form-buldingsintowns" data-context="true">тип здания</a><br>
         $3 – опыт</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-m"></span><span class="erm-tone-red"><strong>M$</strong></span><br>
       
$ – кол-во очков хода героя, тратящихся на каждое разрушение.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-n"></span><span class="erm-anchor" id="command-n-1-2"></span><span class="erm-tone-red"><strong>N#1/$2</strong></span><br>
         $1 – номер разрушения на 
сегодня (первое, второе, и т.д.)<br>
         $2 – цена за разрушение 
следующего строения в этот же день</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cd-p"></span><span class="erm-anchor" id="command-p-1-2-3-4-5"></span><span class="erm-tone-red"><strong>P$1/$2/$3/$4/$5</strong></span><br>
Используется для установки места на карте, где будет проводиться битва с 
монстрами (если вы захотите разрушить жилище с не-нанятыми в нём монстрами). 
Используется только для типа земли и территориальных бонусов, не более.<br>
         $1 – номер монстра в городе 
(0..7 – неулучшенные, 8..13 – улучшенные)<br>
         $2 – X<br>
         $3 – Y<br>
         $4 – L (уровень)<br>
         $5 – соответственные (1)/точные (0) координаты.<em><br>
Примечание</em><strong>:</strong> соответственные координаты (1) означают, что битва будет 
проводиться на земле, которая расположена на входе в замок.</div>

<hr>










</div>
</div>
</section>
:::

## Связанные материалы {#related}

[CA](../../receivers/ca/) · [FC](../../receivers/fc/)



## Связанные команды и таблицы {#reference-links}

[Типы городов](../../tables/towns/) · [Картинки зданий по городам](../../tables/building-pictures/) · [Отладка и совместимость ERM](../../compatibility/) · [ID городских зданий](../../tables/buildings/)
