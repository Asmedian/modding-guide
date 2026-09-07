---
{"title":"Музыка MP3 (MP)","summary":"Ресивер MP: музыка mp3, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Музыка MP3 (MP)"}
---

## Ресивер MP {#ref-rec-mp}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-legacy-c-p-s"></span><span class="erm-anchor" id="command-p0"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-mp-text"></span><div>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MP</strong> (mp3 – контроль)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mp-red"></span><span class="erm-tone-red">!!MP:XXXX;</span> 
</strong>–<strong> mp3 - контроль.</strong><br>
Используется для установки своего mp3-файла для воспроизведения в игре.<br>
Эта команда может быть использована только в теле триггера <a href="../../triggers/mp/#ref-tr-mp">!?MP</a>.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-mp-c"></span><span class="erm-anchor" id="command-c-z"></span><span class="erm-tone-red"><strong>C</strong></span><br>
Остановить текущий проигрываемый трэк.<br>
<span class="erm-tone-red"><strong>C$</strong></span><br>
Установить/получить текущую игровую тему<br>
       $ – номер игрового <a href="../../tables/music/#ref-form-mp3" data-context="true">mp3-трэка</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>P^^</strong></span><br>
Играть определённую игровую тему<br>
<strong><u>Комментарий</u>:</strong> не включайте в название расширение ".mp3", оно добавится автоматически.</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>P1/$</strong></span><br>
Играть определённую игровую тему<br>
       
$ – номер игрового <a href="../../tables/music/#ref-form-mp3" data-context="true">mp3-трэка</a><br>
</div>

<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-mp-s"></span><span class="erm-anchor" id="command-s-1-2-3"></span>S</strong></span><br>
Играть трэк<br>
<span class="erm-tone-red"><strong>S#/^Имя_файла^</strong></span><br>
Имя_файла – название mp3-файла, или<br>
<span class="erm-tone-red"><strong>S#/$<br>
       
</strong></span>$ – номер текстовой переменной (z)<br>
        # – 1..199 (это номер вашего трека) (<a href="../../tables/music/#ref-form-mp3" data-context="true">треки 
игры</a>)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mp-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mp-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Не включайте в название расширение ".mp3", оно добавится автоматически.<br>
Принцип использования: при каком-либо действии в игре проигрывается определённая 
музыка (см. <a href="../../tables/music/#ref-form-mp3" data-context="true">Список MP3</a>), и заменять её можно данным ресивером.<br>
Например, Замку соответствует мелодия №1. Заменяем её так:
<pre class="erm-example"><code class="language-erm">!!MP:S1/^..\data\Sample^; 
; вместо музыки Замка там будет звучать ваш файл в папке MP3.</code></pre>
Изменяйте путь к файлу, если нужно:
<pre class="erm-example"><code class="language-erm">!!MP:S1/^Sample^; - файл в основной папке Героев
!!MP:S1/^..\maps\Sample^; - файл в папке Maps</code></pre>
Стандартные mp3-треки работают корректно, а вот со своими наблюдаются неполадки. 
Очевидно, что у них должны быть какие-то ограничения, но они нигде не указаны.<strong><br>
 </strong></div></details>
<hr>
















</div>


</div>
</section>
:::

## Ресивер MP {#ref-rec-mp-era}

:::erm
<section class="erm-reference" lang="ru">
<div>


<span class="erm-anchor" id="ref-rec-mp-era-text"></span><div>
<span class="erm-anchor" id="ref-rec-mp-era-q2"></span><blockquote class="erm-tone-quote erm-legacy-code erm-note">Ресивер <strong>!!MP</strong> (как и триггер !?MP), начиная с <a href="../../compatibility/#ref-era-index">ERA</a> версии 2.8.7, был полностью переделан.<br>
См. <a href="./#ref-rec-mp">описание старой реализации !!MP</a></blockquote>

<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MP</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a> (новая реализация mp3-контроля)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mp-era-red"></span><span class="erm-tone-red">!!MP:XXXX;</span> 
</strong>–<strong> mp3 - контроль.</strong><br>
Используется для управления воспроизведением mp3-файлов в игре.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mp-era-3"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-mp-era-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вот как можно оформить авторские диалоги, используя звуковое сопровождение (пример от <span class="erm-anchor" id="ref-rec-mp-era-n1"></span><strong class="erm-tone-purple erm-strong">Algor</strong>'а):
<pre class="erm-example"><code class="language-erm">!!MP:C?z1;
!!SN:W^old_track^/z1;		[сохранение текущей музыкальный трэк]
!!MP:P^my_mp3_track^/1/0;	[включение своего трэка (из папки MP3) с начала (1) и без повтора (0)]
!!IF:M^Диалог со звуковым сопровождением^; [можно использовать также с вызовом расширенных диалогов DL:S]
!!SN:W^old_track^/?z1;
!!MP:Pz1/0/1;			[возвращаем пред.трэк с места остановки (0) и с повтором при окончании (1)]</code></pre></div></details>
<span class="erm-anchor" id="ref-rec-mp-era-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/mp/#ref-tr-mp">!?MP</a><br></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-mp-era-c"></span><span class="erm-anchor"></span><span class="erm-tone-red"><strong>C?z#<br>C?s^имя^</strong></span><br>
Получить имя текущей игровой <a href="../../tables/music/#ref-form-track" data-context="true">темы</a> в z# (или в строковую именованную переменную)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-mp-era-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mp-era-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Название темы будет в нижнем регистре и без расширения mp3.<br>
Команда может быть использована в любое время.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">; Пример получения трэка в именованную переменную
!!MP:C?s^theme^;
!!IF:M^Сейчас играет трэк %S(theme).mp3^;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mp-era-p"></span><span class="erm-anchor" id="command-p-name-1-2"></span><span class="erm-tone-red"><strong>Pz#/#1/#2<br>P^имя^/#1/#2</strong></span><br>
Играть определённую игровую тему.
</div><pre>        ^имя^ – имя <a href="../../tables/music/#ref-form-track" data-context="true">mp3-трэка</a> (без расширения mp3)
        #1 – отслеживание позиции воспроизведения (1 = нет, 0 = да)
        #2 – повтор трэка (0 = нет, 1 = да)</pre>
<strong></strong><span class="erm-anchor" id="ref-rec-mp-era-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-mp-era-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Команда вызывает функцию <em class="erm-tone-purple erm-legacy-event">ChangedMp3Theme</em> и генерирует событие <em class="erm-tone-purple erm-legacy-event">OnMp3MusicChange</em> (т.е. <a href="../../triggers/mp/#ref-tr-mp">!?MP</a>).<br>
Если #1=1, воспроизведение трека начинается с начала после возобновления с паузы.<br>
Если #1=0 – текукщее положение проигрывания трэка запоминается, и после возобновления с паузы продолжит с места остановки.<br>
Параметр #2 контролирует автоматическое воспроизведение темы после её окончания (только при #1=0).<br>
Обратите внимание, что параметры #1 и #2 полностью игнорируются, если трэк с тем же именем воспроизводится в данный момент. Возможно, вам придётся приостановить текущий трэк перед запуском другого, чтобы начать воспроизведение с начала или без повтора.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!MP:P^cstletown^/0/1; воспроизводить по кругу игровую тему Замка</code></pre></div></details>

<div class="erm-paragraph"><span class="erm-tone-red"><strong>P0/#</strong></span><br>
Поставить на паузу (0) или возобновить (1) текущую игровую тему.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!MP:P0/0; Тишина - залог крепкого сна ;-)</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mp-era-r"></span><span class="erm-anchor" id="command-r"></span>
<span class="erm-tone-red"><strong>R$</strong></span><br>
Установить/получить режим смены игровой темы (0 = запретить, 1 = разрешить)<br>
Может использоваться для запрета смены музыки на некоторое время.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?MP;
!!MP:R0; Текущий трэк никогда не сменится</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-mp-era-s"></span><span class="erm-anchor"></span>
<span class="erm-tone-red"><strong>S?z#/#1/#2<br>S?^имя^/#1/#2</strong></span><br>
Установить/получить настройки для триггера <a href="../../triggers/mp/#ref-tr-mp">!?MP</a>
</div><pre>        ^имя^ – имя <a href="../../tables/music/#ref-form-track" data-context="true">mp3-трэка</a> (установить/получить)
        #1 – отслеживание позиции воспроизведения (1 = нет, 0 = да)
        #2 – повтор трэка (0 = нет, 1 = да)</pre>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!?MP;
!!MP:S?z2/d/0; Все игровые темы не будут повторяться

!?MP;
!!MP:S^mainmenu^/0/1; Играть тему из главного меню SoD на протяжении всей игры</code></pre>
<hr>
















</div>


</div>
</section>
:::

## Связанные материалы {#related}

[MP](../../triggers/mp/)



## Связанные команды и таблицы {#reference-links}

[Смена музыкальной темы (MP)](../../triggers/mp/) · [Музыка: ID и имена MP3](../../tables/music/) · [Отладка и совместимость ERM](../../compatibility/)
