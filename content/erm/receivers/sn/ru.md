---
{"title":"Средства ERA, память и звук (SN)","summary":"Ресивер SN: средства era, память и звук, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Средства ERA, память и звук (SN)"}
---

## Ресивер !!SN {#ref-rec-sn}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-baddress-resultaddress-value"></span><span class="erm-anchor" id="command-c-constant-value-exists"></span><span class="erm-anchor" id="command-kstring-length-kstring-index-char-kbytes-source-destination-dummy"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-sn-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>SN</strong> (звуки игры)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-sn-red"></span><span class="erm-tone-red">!!SN:XXXX;</span> - позволяет вам 
проиграть внешний или внутренний звуковой файл почти любого типа.</strong><br>
Если вы попытаетесь проиграть звук, сработает триггер <a href="../../triggers/sn/#ref-tr-sn">
!?SN</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-1"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-sn-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете заменить звуковое событие игрока с помощью ERM.<br>
Есть некоторые ограничения. Первое: звуковые файлы не могут быть длиннее 10 
секунд. Файлы с большей продолжительностью будут звучать только первые 10 
секунд. Во-вторых, когда игра пробует проиграть звук, она проверяет, играется ли 
этот же звук сейчас. Если да, запускается другая копия. Если нет, звук 
производится снова. Максимально допустимая длина имени - первые 12 символов, 
предполагая, что файл DOS, первые 8 символов есть имя, и 3 символа после точки 
есть разрешение, и находится в папке <em class="erm-legacy-file">DATA</em>. Так, если 
вы ожидаете, что звук будет проигрываться редко, это вообще не проблема, иначе - 
убедитесь в этом.<br>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-sn-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вот короткий обзор, как изменить звуки для объектов.<br>
Например, мы можем изменить звук при посещении камня знаний.<br>
Сначала нам нужен файл с новым звуком. Мы будем использовать звуковой файл, 
названный для примера <em class="erm-legacy-file">1.wav</em>. Тогда нам нужен "скрытый" файл для избежания 
сообщения "ресурс не найден" (вы можете найти файл <em class="erm-legacy-file">ZQUIET.WAV</em> в папке <em class="erm-legacy-file">DATA</em>).<br>
Теперь разместите немного камней знаний на карту и 
добавьте скрипт:
<pre class="erm-example"><code class="language-erm">ZVSE
!?OB100; 		  посещается ли камень знаний?
!!VRz10:S^..\data\1.wav^; внешний WAV или 82M файл
!!SN:P10; 		  играть!
!?SN; 			  триггер звука
!!SN:S?z100; 		  установить имя проигрываемого файла
!!VRz99:S^Gazebo.wav^; 	  камень знаний?
!!FU&amp;z100&lt;&gt;z99:E; 	  продолжать, если это камень знаний
!!VRz100:S^ZQUIET.WAV^;   ничего, просто тишина
!!SN:S100; 		  тишина...</code></pre></div></details></div></details>

<a href="../../tables/sounds/#ref-form-sound" data-context="true">Список звуков</a><br>
 не будут вызывать триггер <a href="../../triggers/sn/#ref-tr-sn">
!?SN</a>…<span class="erm-anchor" id="ref-rec-sn-3"></span><details class="erm-comment"><summary>Некоторые звуки</summary><div class="erm-comment-body">
<span class="erm-anchor" id="ref-rec-sn-t0"></span><blockquote class="erm-margin-top-zero erm-note">- колдовство других заклинаний на карте, кроме просмотра воздуха и земли<br>
- постройка здания в городе,<br>
- копание (в поисках Грааля)<br>
- начало битвы<br>
- звук битвы<br>
- активация чит-кодов<br>
- будучи «рядом» с жилищем (например, пение монастыря, шум караульной и т.п.) 
или любой ЛЮБОЙ другой объект (например, ветряная мельница), где вы можете 
слышать проигрываемый звуковой файл [Большинство жилищ из Клинка Армагеддона 
(например, Чародеев, Ржавых драконов), и WoG-жилищ (вместе с 8 уровнем), все 
имеют тот же самый звук, как Бараки.]<br>
- звук телепорта<br>
- бег лошади героя<br>
- клик мышью (например, на "Просмотр королевства")</blockquote></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-sn-p"></span><span class="erm-anchor" id="command-pz-s"></span>
P#<br></strong></span>Проиграть звуковой файл с именем в z#.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-sn-4"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-sn-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Здесь можно указывать переменную без префикса <em>z</em>. ERM учитывает только индекс.<br>
В <a href="../../compatibility/#ref-era-index">ERA</a> рекомендовано писать с префиксом <em>z</em>.
<pre class="erm-example"><code class="language-erm">!!VRz1:S^view.wav^;
!!SN:P1; аналогична !!SN:Pz1;</code></pre>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-sn-s"></span>
S$</strong></span><br>
Установить/проверить/получить имя проигрываемого звукового файла в <em>z</em>-переменную ($ – её номер).</div>
<hr>
















</div>
</div>
</section>
:::

## Ресивер SN: новые команды {#ref-rec-sn-era}

:::erm
<section class="erm-reference" lang="ru">
<div>


<span class="erm-anchor" id="ref-rec-sn-era-text"></span><div>									
<span class="erm-anchor" id="ref-rec-sn-era-q2"></span><blockquote class="erm-tone-quote erm-legacy-code erm-note">При помощи расширения стандартного ресивера <strong>!!SN</strong> были введены основные новые команды для <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
См. <a href="./#ref-rec-sn" title="Контроль воспроизведения звуков (WAV/82M)">описание стандартных команд !!SN</a></blockquote>

<span class="erm-anchor" id="ref-rec-sn-era-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>SN</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>: новые команды</span></div>
<div class="erm-paragraph">
<br>Все команды ERA могут работать со следующими элементами ERM:
</div><span class="erm-anchor" id="ref-rec-sn-era-t0"></span><ul class="erm-margin-top-zero">
<li>Положительными и отрицательными числами;</li>
<li>Синтаксисом установки (без модификатора <em>"d"</em>) и получения (<strong>?</strong>) значений;</li>
<li>Переменными <em>y+</em>, <em>v</em>, <em>w</em>, <em>x</em>, <em>z+</em>, <em>f..t</em>, <em>e</em>;</li>
<li>Глобальными именованными переменными вида i^…^ (для чисел) и s^…^ (для строк);</li>
<li>Строковыми литералами в виде ^…^ с поддержкой спецификаторов %Y, %V, %W, %X, %Z, %I(…), %S(…), %T(…), %E с положительными индексами.</li>
</ul>
<div class="erm-paragraph">Также, стоит отметить, что в отличии от стандартных <em>z</em>-переменных (длиной до 511 символов) строковые литералы ERA (^…^ или ^%S(…)^) могут иметь длину до 1млн. символов.</div>
<div class="erm-paragraph">Более того, для всех команд новых ресиверов ERA (<a href="./#ref-rec-sn-era">SN</a>/<a href="../mp/#ref-rec-mp-era">MP</a>/<a href="../rd/#ref-rec-rd">RD</a>) реализована поддержка:
</div><ul class="erm-margin-top-zero"><li>конкатенации строковых переменных (d, где <strong>#</strong> - z-переменная или ^текст^);</li>
<li>числовых операций с модификатором <em>d</em> (d+, d-, d*, d:);</li>
<li>операций установки/получения для именованных переменных (SN:W-ключей) числового (i^имя^) и строкового (s^имя^) типов.</li></ul>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-era-1"></span><details class="erm-comment"><summary>Примеры (<span class="erm-anchor" id="ref-rec-sn-era-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:W^Gold^/y1 W^Gold^/d-500 W^Gold^/d*11 W^Gold^/d:10; Gold = y1 -500 * 1.1

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
!!SN:W^report^/^Сегодня мы напоролись на чужаков... Это были ^;
!!SN:W^report^/d&amp;^орки!^;
!!IF:M^%S(report)^;</code></pre>
На экране мы увидим:<span class="erm-anchor" id="ref-rec-sn-era-dl3"></span><span class="erm-game-text">Сегодня мы напоролись на чужаков... Это были орки!</span></div></details>
<div class="erm-paragraph">Ядро ERA передаёт командам набор целых чисел (<em>4 байта каждое</em>). В случае строк или синтаксиса получения значения, 
эти числа представляют собой адреса переменных. Адрес переменной – числовое значение, описывающее местоположение данных в оперативной памяти.<br>
Максимальное количество параметров команды: 64.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-sn-era-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:Xv1; передать число в v1
!!SN:X?v1; передать адрес переменной v1
!!SN:Xz1; передать адрес переменной z1
!!SN:X^текст^; сохранить текст и передать его адрес
!!SN:Xe1 X?y1; перевести значение из float формата в dec</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-l"></span><span class="erm-anchor" id="command-l-library-handle-ahandle-export-address"></span><span class="erm-anchor" id="ref-rec-sn-era-red"></span><span class="erm-tone-red"><strong>SN:L</strong></span><br>
Подгрузка динамической библиотеки (DLL)</div>
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-rec-sn-era-le"></span><table class="erm-align-left"><tr class="erm-legacy-code-line">
<span class="erm-anchor" id="ref-rec-sn-era-dl2"></span><td class="erm-game-text"><strong>L</strong></td>
<td>путь к библиотеке</td>
<td><strong>/</strong>?</td>
<td>описатель загруженной библиотеки</td>
</tr></table></div><br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:L^HD_WOG.dll^/?y2; игра с HD_mod? (y2=0 – игра без HD)</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-a"></span><span class="erm-tone-red"><strong>SN:A</strong></span><br>
Получить адрес машинной функции из библиотеки </div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>A</strong></td>
<td>описатель загруженной библиотеки</td>
<td><strong>/</strong></td>
<td><a href="./#ref-era-api">название функции</a></td>
<td><strong>/</strong>?</td>
<td>адрес функции</td>
</tr></table></div><br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:L^kernel32.dll^/?y1;
!!SN:Ay1/^lstrcpyA^/?y2;</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-e"></span><span class="erm-anchor" id="command-eaddress-convention-args"></span><span class="erm-tone-red"><strong>SN:E</strong></span><br>
Выполнить машинную функцию</div>
<span class="erm-anchor" id="ref-rec-sn-era-q1"></span><pre class="erm-tone-quote erm-note"><strong>Соглашение о вызове:</strong>
   0  (PASCAL)
   1  (CDECL или STDCALL)
   2  (THISCALL)
   3  (FASTCALL)</pre>
<div class="erm-paragraph">По умолчанию от функции ожидается целочисленный результат, который будет помещён в переменную v1. Если же функция возвращает вещественный результат, 
то к номеру соглашения нужно прибавить 4 (сам же результат сохранится в e1). Все системные библиотеки используют соглашение <em class="erm-legacy-file">STDCALL</em>.</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>E</strong></td>
<td>адрес функции</td>
<td><strong>/</strong></td>
<td>соглашение о вызове</td>
<td><strong>/</strong>аргументы…</td>
</tr></table></div><br>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!!SN:L^kernel32.dll^/?y1;
!!SN:Ay1/^lstrcpyA^/?y2;
!!SN:Ey2/1/z1/z2; Скопировать содержимое z2 в z1. Аналог !!VRz1:Sz2;</code></pre>
Получить ID текущего игрового диалога:
<pre class="erm-example"><code class="language-erm">!!SN:L^Era.dll^/?y2; получили описатель библиотеки ERA в y2
!!SN:Ay2/^GetGameState^/?y3; y3 - адрес функции GetGameState
!!SN:Ey3/1/?y4/?y5; y4 - ID родительского диалога, y5 - ID текущего диалога</code></pre>
Вычисление корня квадратного на примере стороннего модуля:
<pre class="erm-example"><code class="language-erm">!!SN:L^math.era^/?y1;
!!SN:Ay1/^sqrt^/?y2;
!!VRe2:S169; будем извлекать квадратный корень из 169
!!SN:Ey2/5/e2; здесь 5 - соглашение STDCALL (1+4)
!!IF:M^e1=%E1^;</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-f"></span><span class="erm-anchor" id="command-f-export-args"></span><span class="erm-tone-red"><strong>SN:F</strong></span><br>
Выполнить функцию с указанными аргументами для её выполнения из библиотеки <em class="erm-legacy-file">era.dll</em> или <em class="erm-legacy-file">kernel32.dll</em> 
(ERA сама выберет нужную библиотеку для функции и закэширует её адрес по имени).<br>
Нет необходимости, в большинстве случаев, использовать последовательность команд SN:L→SN:A→SN:E.</div>
<div class="erm-tone-quote erm-note erm-paragraph">Используется соглашение <em class="erm-legacy-file">STDCALL</em>.</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>F</strong></td>
<td><a href="./#ref-era-api">название функции</a></td>
<td><strong>/</strong></td>
<td>аргументы ф-ции…</td>
</tr></table></div><br>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!!SN:F^ReadStrFromIni^/^key^/^section name^/^Data\test.ini^/?z2; аналог команды UN:N6

!!SN:F^CopyFileA^/^heroes3.ini^/^heroes3.ini.bak^/0; сделать резервную копию файла настроек игры

!!SN:F^GetButtonID^/^testBtn^; v1 получит ID кнопки

!!SN:F^PluginExists^/^era_hooker^; если v1=0, то плагин не найден</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-d"></span><span class="erm-anchor" id="command-d-o-x-y-level"></span><span class="erm-tone-red"><strong>SN:D</strong></span><br>
Перерисовать (обновить) экран героя, города, встречи двух героев, карты приключений.<br>
<strong><u>Комментарий</u>:</strong> команда более безопасна, чем аналогичная ей <a href="../un/#ref-rec-un-r">UN:R</a>.<br>
Команду следует использовать, непосредственно, в указанных выше игровых окнах, т.к. каждому игровому окну соответствует своя функция обновления и только для него.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?CM2; экран героя
!!CM:I?y1 T?y2;
!!FU|y1&lt;&gt;30720/y2&lt;&gt;512:E; если кликнули ПКМ на кнопке Выход
!!HE-1:L4/148; 		  сделать текущему герою лицо как у Гелу
!!SN:D;
</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-g"></span><span class="erm-anchor" id="command-g-label-q"></span><span class="erm-tone-red"><strong>SN:G[имя]</strong></span><br>
Переход на определённую команду текущего триггера.</div>
<blockquote class="erm-tone-quote erm-note">На сегодня команда SN:G считается устаревшей и её использование в скриптах крайне не рекомендуется!<br>
Изначально команда создавалась как промежуточный вариант выполнения быстрых циклов. 
Сейчас предпочтительнее для этих целей использовать связку <a href="../../conditions/#ref-rec-iee">!!if</a> / <a href="../../loops/#ref-rec-re">!!re</a>.</blockquote>
<div class="erm-paragraph">Для выполнения переходов реализованы командные «ярлыки» (метки), которые заменяются на порядковый номер ресивера внутри текущего триггера, 
перед которым они стоят (отсчёт начинается с 0). В «счётчик» команд попадают все <span class="erm-anchor" id="ref-rec-sn-era-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!XX</span></strong>-подобные ресиверы. Самим меткам порядковый номер, как команде внутри триггера, не присваивается.<br>
Синтаксис использования следующий:
</div><dl><dd><span class="erm-anchor" id="ref-rec-sn-era-n2"></span><strong class="erm-tone-purple erm-strong">[имя_метки]</strong> – использование метки (будет заменено номером ресивера, для которого метка объявлена)</dd>
<dd><strong class="erm-tone-purple erm-strong">[:имя_метки]</strong> – объявление метки (текущий номер ресивера запоминается и связывается с именем метки)</dd></dl>
<div class="erm-paragraph">В качестве имени метки допускается любой произвольный текст. Использовать метки можно как до, так и после их объявления.<br>
Метки используются только с командой SN:G для выполнения циклов и условий.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">...
!!VRv1:S0 R10;
!!SN&amp;v1&gt;5:G[прыжок];
!!FU:E; "ERM-забор" =)
[:прыжок]
!!IF:M^Вы перепрыгнули забор :)^;</code></pre>
<strong>ВАЖНО:</strong> не разрешается использовать SN:G для "прыжков" как из структурных блоков, так и в структурные блоки.<br>
<u>Пример</u>:<br>
Для прерывания цикла есть команда <a href="../../loops/#ref-rec-re-br-co">!!br</a>. Эмулировать SN:G можно так:
<pre class="erm-example"><code class="language-erm">!!re i/1/1; выполнить один раз блок
  ...
  !!br&amp;условие:; выход из блока по условию
  ...
!!en:;</code></pre></div>
<div class="erm-paragraph"><em>Старый синтаксис:</em><br>
<span class="erm-tone-red"><strong>SN:G#</strong></span> - переход на команду # (0…) текущего триггера.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-6"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-sn-era-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?CM0;
; ПКМ на карте приключений
;0 !!SN:G2; перейти на команду №2
;1 !!IF:M^Данный текст вы никогда не увидите!^;
;2 !!IF:M^Сейчас вы читаете это текст?^;
; Нумерация команд триггера приведена для наглядности</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h"></span><span class="erm-anchor" id="command-h-monname-h-secskill"></span><span class="erm-anchor" id="command-h-object-x-y-level-h-object-type-subtype"></span><span class="erm-anchor" id="command-h-spec-h-art-h-spell"></span><span class="erm-tone-red"><strong>SN:H^xxx^…</strong></span><br>
Команда позволяет работать с названиями/подсказками/описаниями без необходимости хранить текст в выделенных для этого <em>z</em>-переменных.<br>
На данный момент реализованы следующие типы команд SN:H:
</div><ul class="erm-margin-top-zero">
<li>^<a href="./#ref-rec-sn-era-h-mon">monname</a>^</li>
<li>^<a href="./#ref-rec-sn-era-h-obj">object</a>^</li>
<li>^<a href="./#ref-rec-sn-era-h-skl">secskill</a>^</li>
<li>^<a href="./#ref-rec-sn-era-h-spec">spec</a>^</li>
<li>^<a href="./#ref-rec-sn-era" title="Команда доступна на ERA3+">art</a>^</li>
<li>^<a href="./#ref-rec-sn-era" title="Команда доступна на ERA3+">spell</a>^</li></ul>
<div class="erm-paragraph">Режим получения текста работает со всеми этими типами команд, давая возможность получать актуальный текст/описание в <em>z</em>-переменные для последующего вывода:
<pre class="erm-example"><code class="language-erm">...
!!SN:H^monname^/13/2/?z2;	получить в z2 описание архангела</code></pre>
Для удаления (актуальных значений или установленных ранее через SN:H) или восстановления (стандартный текст) подсказок/описания используйте синтаксис <span class="erm-tone-red"><strong>^-xxx^</strong></span> …<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:H^-spec^/5/2/^^; восстановить описание специальности Сорше</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-mon"></span><span class="erm-tone-red"><strong>H^monname^/#1/#2/^текст^</strong></span><br>
<span class="erm-tone-red"><strong>H^monname^/#1/#2/?z#</strong></span><br>
Изменение имени существ, их описания.
</div><pre>        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">номер монстра</a>
        #2 – тип текста:
	0 – имя монстра в ед.ч.
	1 – имя монстра во мн.ч.
	2 – специальный текст (описание)</pre>
<strong><u>Комментарий</u>:</strong> команда отличается от аналогичной ей <a href="../un/#ref-rec-un-g1">UN:G1</a> тем, что не требует использования <em>z</em>-переменныx.
<div class="erm-paragraph"><u>Пример</u>:
<pre class="erm-example"><code class="language-erm">Изменим имена и описания копейщиков:
!?PI;
!!SN:H^monname^/0/0/^Слабый^;
!!SN:H^monname^/0/1/^Больные^;		переименовать копейщика (1 = мн.ч.)
!!SN:H^monname^/0/2/^Разносит заразу^;  сменить описание (2) копейщика</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-obj"></span><span class="erm-tone-red"><strong>H^object^/X/Y/L/^текст^</strong></span><br>
Установить подсказку для объекта на карте в координатах X Y L.<br>
<span class="erm-tone-red"><strong>H^object^/#1/#2/^текст^</strong></span><br>
Установить подсказку для объекта определённого типа/подтипа.
</div><pre>        #1 – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип</a> (-1 = пропустить) 
        #2 – <a href="../../tables/objects/#ref-form-objects" data-context="true">подтип</a> (-1 = пропустить)</pre>
<div class="erm-paragraph">Если используется несколько вариантов установки подсказок для одного объекта, то приоритет поиска подсказки таков:
</div><ol><li>объект с точными координатами</li>
<li>объект с указанными типом/подтипом</li>
<li>объект с указанным типом и подтипом -1</li>
<li>объект с типом -1 и указанным подтипом</li>
<li>объект c типом/подтипом как -1</li></ol>
<strong><u>Комментарий</u>:</strong> команда отличается от схожих с ней команды <a href="../ob/#ref-rec-ob-h">OB:H</a> и ресивера <a href="../ht/#ref-rec-ht">HT</a> тем, что не требует использования <em>z</em>-переменныx.
<div class="erm-paragraph"><u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^{Обледенелое озеро}
Осторожно, лёд очень тонкий!^;
!!SN:H^object^/121/-1/^%Z1^; установить свою подсказку для объекта 121 (замёрзшее озеро)</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-skl"></span><span class="erm-tone-red"><strong>H^secskill^/#1/#2/^текст^</strong></span><br>
<span class="erm-tone-red"><strong>H^secskill^/#1/#2/?z#</strong></span><br>
Возможность установки текста вторичных навыков:
</div><pre>        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">вторич.навык</a> (0..27)
        #2 – тип текста:
	0 – имя навыка
	1 – базовый уровень (описание)
	2 – продвинутый уровень (описание)
	3 – экспертный уровень (описание)</pre>
<strong><u>Комментарий</u>:</strong> команда отличается от аналогичной ей <a href="../un/#ref-rec-un-g">UN:G0</a> тем, что не требует использования <em>z</em>-переменныx.
<div class="erm-paragraph">
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRz5:S^тест^;
!!SN:H^secskill^/21/0/^%Z5^;	установить навыку обучение (21) название из z5
!!IF:M1/z5;			показать текст из z5
!!SN:H^-secskill^/21/0/^^;	вернуть стандартное название обучения
!!SN:H^secskill^/21/0/?z5;	получить в z5 текущее название навыка
!!IF:M1/z5;			показать текст из z5</code></pre>
Вы получите два разных сообщения:<em class="erm-game-text">тест</em> и <em class="erm-game-text">Обучение</em>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-h-spec"></span><span class="erm-tone-red"><strong>H^spec^/#1/#2/^текст^</strong></span><br>
<span class="erm-tone-red"><strong>H^spec^/#1/#2/?z#</strong></span><br>
Настроить свой текст для специализации героя
</div><pre>        #1 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">герой</a>
        #2 – тип текста для специализации:
	0 – название (не используется в игре)
	1 – краткое описание (не используется в игре)
	2 – полное описание</pre>
<strong><u>Комментарий</u>:</strong> команда отличается от аналогичной ей <a href="../un/#ref-rec-un-g2">UN:G2</a> тем, что не требует использования <em>z</em>-переменныx.
<div class="erm-paragraph"><u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:N?y1 B0/?z1;			получить номер и имя текущего героя
!!SN:H^spec^/y1/2/^{~red}Коддер{~}
Специализация %Z1: лютый коддинг!^; установить описание (2) спецухи этому же герою</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-i"></span><span class="erm-anchor" id="command-istring-result-t-key-result-name-value"></span><span class="erm-tone-red"><strong>SN:I</strong></span><br>
Динамическая интерполяция строковых переменных.<br>
Команда может использоваться для интерполяции строковых переменных, получамых из внешних источников, таких как ini-файлы и команда <a href="./#ref-rec-sn-era-t">SN:T</a> 
(хотя её использование рекомендуется только для отладки и портирования).</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>I</strong></td>
<td>строковая переменная</td>
<td><strong>/</strong>?</td>
<td>z#</td>
</tr></table></div><br>
<u>Пример</u>:<br>
Допустим, в переменной z2 хранится следующее: <strong class="erm-inline-code"><span class="erm-tone-red">%Y5 %V996 текст %Z5</span></strong><br>
Нам надо увидеть, какие значения каждая переменная содержит на данный момент.<br>
Для этого мы используем следующее:
<pre class="erm-example"><code class="language-erm">!!SN:Iz2/?z3;</code></pre>
Теперь z3 содержит всю информацию из z2, включая все значения интерполированных переменных.

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-o"></span><span class="erm-tone-red"><strong>SN:O?X/?Y/?L</strong></span><br>
Получить координаты входа объекта на карте.<br>
Команде передаются три числовые переменные с координатами объекта, в которые и будут записаны координаты входа объекта.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-5"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-sn-era-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<ul class="erm-margin-top-zero"><li>Если кликнуть на объекте без входа, команда возвращает координату объекта, где кликнули;</li>
<li>Если кликнуть на объекте с двумя и более входами, возвращает координату входа, который ближе к правому нижнему краю объекта.<br>
Если же кликнуть на любом из входов объекта, возвращает координату этого же входа.<br>
<span class="erm-anchor" id="ref-rec-sn-era-bold"></span><em class="erm-strong">Замечание:</em> команда вызывает сбои игры, если кликнуть на входе, где стоит другой герой.</li></ul>
<u>Пример</u>:<br>
Давайте узнаем координаты входа объекта, кликнув на другой части объекта…
<pre class="erm-example"><code class="language-erm">!?CM0; клик на карте
!!CM:R0 P?y1/?y2/?y3; получаем координаты объекта
!!VRv2:Cy1/y2/y3;     сохраняем копию координат в v2/v3/v4
!!SN:O?y1/?y2/?y3;    получаем координаты входа объекта
!!IF:M0/4/^%V2 %V3 %V4 =&gt; %Y1 %Y2 %Y3^; сравниваем наглядно</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-q"></span><span class="erm-tone-red"><strong>SN:Q</strong></span><br>
Прервать обработку текущего события<br>
<strong><u>Комментарий</u>:</strong> команда отличается от <a href="../fu/#ref-rec-fu-e">FU:E</a> тем, что прерывает всю цепочку однотипных триггеров.</div>
<div class="erm-paragraph"><u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?FU40000;
!!SN:Q; покинуть цепочку триггеров FU40000

!?FU40000;
!!IF:M^это сообщение никогда не будет показано^;

!?CM0;
!!FU40000:P; вызвать функцию 40000</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-r"></span><span class="erm-anchor" id="command-r-old-new"></span><span class="erm-tone-red"><strong>SN:R</strong></span><br>
Подменяет в игре "на лету" имена ресурсов.</div>
<div class="erm-tone-quote erm-note erm-paragraph">Используется соглашение <em class="erm-legacy-file">STDCALL</em>.</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>R</strong></td>
<td>^старое имя файла^</td>
<td>/</td>
<td>^новое имя файла^</td>
</tr></table></div><br>
Для сброса подмены файла укажите пустое значение вместо параметра "новое имя".<br>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-era-7"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-sn-era-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Команда представляет собой обёртку над экпортируемой функцией <em class="erm-tone-purple erm-legacy-event">RedirectFile</em> из <em class="erm-legacy-file">era.dll</em>. Если более детально, то SN:R ни что иное как:
<pre class="erm-example"><code class="language-erm">!!SN:L^Era.dll^/?y1 Ay1/^RedirectFile^/?y2 Ey2/1/^старое^/^новое^;</code></pre>
Все подмены файлов локальны, запоминаются в сохранениях игры и отменяются при выходе из игрового сценария (карты).<br>
Игра выгружает неиспользуемые ресурсы, поэтому большинство ресурсов могут динамически подменяться, пока вы играете.<br>
Если ресурс используется в Окне героя, выполняйте подмену перед тем, как откроется это окно (т.е. <a href="../../triggers/#ref-era-new-events-2-4">до кэширования ресурсов</a>).<br>
Пользовательские игровые фоны могут так же быть внедрены, давая возможность игроку переключать темы прямо во время игры 
(необходимо загрузить сохранение игры для визуального обновления).<br>
Указав шаблон <em class="erm-legacy-file">*.mp3</em> для параметра "старое имя" подмена произойдёт для всех mp3-файлов сразу.</div></details>

<div class="erm-paragraph"><u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!#SN:R^cgriff.def^/^croc.def^; пусть Грифоны выглядят как Птицы Рух (только боевая модель)

!!SN:R^SNOW.MP3^/^my_snow.mp3^; подмена родной темы для поверхности "Снег" на свой трэк</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-t"></span><span class="erm-tone-red"><strong>SN:T^имя^/?z#/#1/?$1.../#7/?$7</strong></span><br>
Позволяет получать переводы строк по ключам (произвольным уникальным строковым идентификаторам).<br>
В json-файлах хранятся пары вида «Ключ - Значение», где значением является текст перевода с опциональными параметрами.
</div><pre>	(имя) – имя ключа
	z# – <em>z</em>-переменная для получения результата
	#1 – наименование параметра 1
	$1 – значение параметра 1
	…
	…
	#7 – наименование параметра 7
	$7 – значение параметра 7</pre>
<strong></strong><span class="erm-anchor" id="ref-rec-sn-era-8"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-sn-era-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!OW:R-1/6/?y1; y1 = кол-во золота у игрока
!!SN:T^test.gold_amount_report^/?z2/^gold^/y1; 
!!IF:M^%Z2^; покажет "У вас осталось 12850 золотых. Неплохо!"</code></pre>
Мой test.json:<blockquote class="erm-tone-quote erm-note"><pre class="erm-legacy-code">{
  "test.gold_amount_report": "У вас осталось @gold@ золотых. Неплохо!"
}</pre></blockquote></div></details>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: <a href="../../tables/text-resources/#ref-cont-json">Выдержка из истории изменений ERA по json-файлам</a>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-x"></span><span class="erm-anchor" id="command-xvalues"></span><span class="erm-tone-red"><strong>SN:X</strong></span><br>
Доступ к параметрам новых событий</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>X</strong></td>
<td>до 16 параметров</td>
<td>…</td>
</tr></table></div><br>
Новые события ERA и добавляемые модулями события нуждаются в возможности обмениваться данными со скриптами. 
Эту возможность обеспечивает команда , выступающая в качестве хранилища значений. Тип значений определяется способом работы с ними. 
Так, можно установить в слот 0 значение 5, а потом получить его в вещественную <em>e</em>-переменную. 
Поскольку работа происходит на машинном уровне, то в <em>e</em>-переменной окажется вовсе не 5, а неопределённый мусор. 
В случае получения строковой переменной (текста), команда трактует значение в слоте как адрес. Поэтому, <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!SN</span>:X0; <span class="erm-tone-purple erm-legacy-strong">!!SN</span>:X?z1;</strong> приведёт к вылету, 
т.к. по адресу 0 нет никакой строки.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:Xz1; записать в 1ый параметр адрес строковой переменной z1
!!SN:X?y1; получить в y1 адрес z1</code></pre>
Т.к. в ERA переменные x1..x16 доступны для любых триггеров, SN:X параметры и есть x1..x16.<br>
<em class="erm-strong">Замечание:</em> на данный момент команда SN:X устарела, т.к. параметры событий можно читать/писать, обращаясь напрямую к x1..x16.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?(OnRecruitDlgRecalc);
!!VRx1:S777; = !!SN:X777;
!!VRy2:Sx1; = !!SN:X?y2;
!!VRy3:Cx1/x2; = !!SN:X?y3/?y4;</code></pre>
Команду X целесообразно использовать только для редко требуемых операций по низкоуровневому преобразованию типов или получению адресов…
<pre class="erm-example"><code class="language-erm">!!SN:X?y1 Xs^мой текст^ X?y2 Xy1; получить в y2 адрес именованной переменной
Описание каждой команды в отдельности:
 » X?y1;		сохранить значение 1го параметра триггера
 » Xs^мой текст^;	передать в x1 адрес именованной строки
 » X?y2;		получить адрес именованной переменной
 » Xy1;			возвращаем значение 1го параметра триггера</code></pre>

<hr>
<h3><span class="erm-anchor" id="ref-rec-sn-era-m"></span><span class="erm-anchor" id="command-m-m-m-index-m-address-index"></span><span class="erm-anchor" id="command-m-id-size-type-storage-result"></span><span class="erm-anchor" id="command-m-id-size-type-storage-address-v-id-index-values"></span>Работа с дополнительной памятью</h3>
<span class="erm-tone-red"><strong>SN:M…</strong></span>
<div class="erm-paragraph">ERM переменные статичны и ограничены в количестве. 
Статичность приводит к невозможности организовывать динамические структуры данных (например, списки), 
для которых нужны функции выделения и освобождения памяти, 
а ограниченное количество ведёт к необходимости строгого учёта индексов без возможности выйти за их пределы. 
Более того, ERM строки в виде <em>z</em>-переменных занимают ровно 512 байт каждая в независимости от размера их содержимого. 
ERA предоставляет программисту до 2 млрд. слотов под массивы новых переменных (числовых или строковых). 
Размер массивов может изменяться средствами ERM. 
Поскольку работа с динамическими структурами предполагает автоматическое выделение номеров слотов, 
то такая возможность присутствует. Слоты с положительными индексами принадлежат пользователю, 
а с отрицательными используются при автовыделении памяти.<br>
<em class="erm-strong">Замечание:</em> команды SN:M не поддерживают работу переменных с косвенными ссылками…
<pre class="erm-example"><code class="language-erm">!!SN:My1/y2/xy3; вызовет ошибку ЕРМ

Безопасный способ:
!!VRy4:Sxy3;
!!SN:My1/y2/y4;</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m1"></span><span class="erm-tone-red"><strong>M#</strong></span><br>
Удаление слота памяти</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>M</strong></td>
<td>номер слота, начиная с 0</td>
</tr></table></div><br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M5; удалить 6й слот</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m2"></span><span class="erm-tone-red"><strong>M#1/$2</strong></span><br>
Установка/получение размера слота<br>
(Размер слота – это количество элементов в массиве)</div>
<pre>        #1 – номер слота
        $2 – кол-во элементов</pre>
<div class="erm-paragraph">Команда возвращает -1, если слот не существует.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M2/5; установить количество элементов в слоте 2 равное 5.
!!SN:My1/?y2; получить размер слота y1 в переменную y2.</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m3"></span><span class="erm-tone-red"><strong>M#1/#2/$3</strong></span><br>
Работа со значениями элементов слотов<br>
</div><pre>        #1 – номер слота
        #2 – номер элемента, начиная с 0
        $3 – значение</pre>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M1/3; размер слота 1 = 3 элемента
!!SN:M1/0/111 M1/1/222 M1/2/333; содержимое слота 1: 111, 222, 333
!!SN:M1/1/?y5; y5 - содержимое 1-го элемента слота 1
!!IF:M^%Y5^; покажет: "222"</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m4"></span><span class="erm-tone-red"><strong>M#1/?#2/#3</strong></span><br>
Получение адреса элемента слота<br>
</div><pre>        #1 - номер слота
        #2 - адрес элемента (только получение)
        #3 - номер элемента</pre>
<div class="erm-paragraph"><strong><u>Комментари</u>:</strong> при удалении слота или изменении его размера – адрес станет недействительным!<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-sn-era-9"></span><details class="erm-comment"><summary>Примеры (<span class="erm-anchor" id="ref-rec-sn-era-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:M1/?y1/2; y1 содержит адрес 2-го элемента слота 1</code></pre>
А вот другой пример, когда требуется скопировать строковое значение из массива в массив напрямую.<br>
Как уже было сказано ранее, все команды ERA получают параметры в виде 4-байтовых чисел. Для строк это обычно адрес первого символа. Когда мы пишем z1, команда получает адрес этой переменной. 
Когда строковое значение ^текст^ – строка сперва сохраняется во временном буфере, затем команде передаётся её адрес, после чего буфер освобождается..
<pre class="erm-example"><code class="language-erm">!!SN:M(src array)/?y1/(src index); записывает в y1 адрес первого символа строки в указанном массиве
!!SN:M(dst array)/(dst index)/y1; устанавливает новое значение элемента массива (команде передаётся адрес строки)
; команды ERA, принимающие строки, одинаково хорошо переваривают и адреса pchar'ов</code></pre>
Таким образом, длинные строки (&gt;512 байт) можно копировать между собой и использовать как буфер для накопления:
<pre class="erm-example"><code class="language-erm">!!SN:M../../d&amp;^ соединение строк^;</code></pre></div></details>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-m5"></span><span class="erm-tone-red"><strong>M#1/#2/#3/#4</strong></span><br>
Создание нового слота<br>
</div><pre>
        #1 – номер слота: "-1" для автовыделения свободного номера и помещения его в v1
        #2 – кол-во элементов в слоте
        #3 – тип элементов: 0 (число) и 1 (строка)
        #4 – запоминать ли значения в сохранёнках:
	= 0 (нет, при загрузке игры содержимое элементов будет представлять собой случайный мусор)
	= 1 (да, содержимое нужно сохранять как есть)</pre>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> старое содержимое слота (если оно было), уничтожается.<br>
Если значения в сохранениях не запоминать (#4=0), то экономится место в файле и возрастает скорость сохранения.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:M0/4/1/1; выделить массив из 4-х строк в слоте 0. Сохранять их содержимое при загрузке
!!SN:M0/2/^привет^; установить значение 2-й строки слота 0
!!SN:M0/3/^мир^; установить значение 3-й строки слота 0
!!SN:M0/2/?z1 M0/3/?z2; получить значения 2-й и третьей строк в z1, z2
!!IF:M^%Z1 %Z2^; выведет "привет мир"
!!SN:M0; удалить слот 0
!!SN:M-1/0/0/0; выделить пустой слот под временный массив чисел
!!VRy1:S1 R6; сгенерировали случайное число 1..7
!!SN:Mv1/y1; установили размер нового слота в это число
!!VRy1:-1; y1 - индекс последнего элемента в слоте
!!SN:Mv1/y1/777; значение последнего элемента слота - 777</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-k1"></span><span class="erm-tone-red"><strong>SN:K…</strong></span><br>
Команды SN:K работают как со строками (текстовыми переменными), так и с их адресами в памяти. 
Это делает SN:K более низкоуровневой и функциональной, чем схожие с ней по некоторым действиям команды <a href="../vr/#ref-rec-vr-m">VR:M#</a>.</div>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>K#1/?#2</strong></span><br>
Получение размера строки (включая пробелы)</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>K</strong></td>
<td>строка или её адрес</td>
<td><strong>/</strong>?</td>
<td>размер строки</td>
</tr></table></div><br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^123 4^;
!!SN:Kz1/?y1; y1 = 5</code></pre>

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-k2"></span><span class="erm-tone-red"><strong>K#1/#2/$3</strong></span><br>
Работа с символами строки</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>K</strong></td>
<td>строка или её адрес</td>
<td><strong>/</strong></td>
<td>номер символа, начиная с 0</td>
<td><strong>/</strong>[?]</td>
<td>значение символа</td>
</tr></table></div><br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^XYZ^;
!!SN:Kz1/2/^L^; установить 2-й символ строки z1 в "L"
!!IF:M^%Z1^; покажет нам "XYL"</code></pre>
<em class="erm-strong">Замечание:</em> синтаксис получения символа в $3 параметр работает некорректно.

<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-k3"></span><span class="erm-tone-red"><strong>K#1/#2/#3/#4</strong></span><br>
Копирование блока памяти</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>K</strong></td>
<td>кол-во байт</td>
<td><strong>/</strong></td>
<td>адрес источника</td>
<td><strong>/</strong></td>
<td>адрес приёмника</td>
<td><strong>/</strong></td>
<td>произвольное значение</td>
</tr></table></div><br>
<strong><u>Комментарий</u>:</strong> поддерживаются числовые и строковые переменные.
<div class="erm-paragraph"><u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!SN:K12/?v1/?y1/1; скопировать 12 байт (3 числа по 4 байта) из v1, v2, v3 в y1, y2, y3
!!VRv1:C1/2/3; v1 = 1, v2 = 2, v3 = 3
!!SN:K12/?y1/?v1/1; восстановить значения v1, v2, v3</code></pre>
</div>
<hr>
<h3><span class="erm-anchor" id="ref-rec-sn-era-w"></span><span class="erm-anchor" id="command-w-w-key-w-key"></span>Работа с ассоциативной памятью</h3>
<span class="erm-tone-red"><strong>SN:W[…]</strong></span>
<div class="erm-paragraph">Очень часто бывает нужно завести переменные для конкретных героев, конкретных клеток карты или объектов по запросам игрока.<br>
Выделение статической памяти для всех героев, всех объектов или всех клеток обладает существенными недостатками: 
чрезмерное потребление памяти, замедление процесса сохранения игры, ограниченность размеров.<br>
Все эти проблемы решаются при работе с глобальным хранилищем пар типа «Ключ - Значение», напоминающем ini-файлы.<br>
Каждому ключу может соответствовать 1 числовое и 1 строковое значение.<br>
Значения 0/пусто не записываются в сохранения, что позволяет экономить место.<br>
При запросе несуществующего ключа будет возвращено 0/пусто, в зависимости от типа приёмника.<br>
<u>Пример</u>:<br>
Давайте создадим ключ и запишем в него значения разных типов, при этом они пересекаться не будут:
<pre class="erm-example"><code class="language-erm">!!SN:W^имя^/y1 W^имя^/z1;
!!SN:W^имя^/?y2 W^имя^/?z2; y2=y1, z2=z1</code></pre>
</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-w1"></span><span class="erm-tone-red"><strong>W</strong></span><br>
Полная очистка ассоциативной памяти</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-w2"></span><span class="erm-tone-red"><strong>W^имя^/$</strong></span><br>
Работа с переменной</div>
<div class="table-wrap erm-reference-table"><table class="erm-align-left"><tr class="erm-legacy-code-line">
<td class="erm-game-text"><strong>W</strong></td>
<td>имя переменной</td>
<td><strong>/</strong>[?]</td>
<td>значение переменной</td>
</tr></table></div><br>
<u>Пример</u>:<br>
Пусть щелчок правой кнопкой мыши на карте приключений приводит к отображению количества щелчков по данной клетке.<br>
Фактически, это аналог команды <a href="../po/#ref-rec-po">!!PO</a> по требованию.
<pre class="erm-example"><code class="language-erm">!?CM0;
!!CM:R0 P?y1/?y2/?y3;
!!SN:W^Map%Y1/%Y2/%Y3^/?y4;
!!VRy4:+1;
!!IF:L^{~gold}Вы щёлкнули на этой клетке %Y4 раз(а){~}^;
!!SN:W^Map%Y1/%Y2/%Y3^/y4;</code></pre>
<em class="erm-strong">Замечание:</em> внутри %I() нельзя использовать символ процентов (%).

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-sn-era-w3"></span><span class="erm-tone-red"><strong>W^имя^</strong></span><br>
Удаление переменной
</div>
<hr>

</div>
</div>
</section>
:::

## Описание API ERA {#ref-era-api}

:::erm
<section class="erm-reference" lang="ru">
<div>


<span class="erm-anchor" id="ref-era-api-text"></span><div>
<span class="erm-anchor" id="ref-era-api-up"></span>

<h3 class="erm-align-center">Описание экспортируемых функций ERA</h3>
<div class="erm-paragraph">Ниже будут описаны основые функции и процедуры ERA. Более полная технической документации располагается в каталоге <em class="erm-legacy-file">Игра\Tools\Era\</em>, или же вы можете задать конкретные вопросы непосредственно на <a href="http://wforum.heroes35.net/forumdisplay.php?fid=182">официальном форуме</a> проекта.</div>
<ul>
<li><span class="erm-anchor" id="ref-era-api-hook"></span><code>PROCEDURE <span class="erm-anchor" id="ref-era-api-red"></span><span class="erm-tone-red"><strong>Hook</strong></span> (HandlerAddr: POINTER; HookType: INTEGER; PatchSize: INTEGER; CodeAddr: POINTER); STDCALL;</code><br>
Универсальная функция для установки программных перехватчиков в коде. Наиболее удобный и автоматизированный режим: <code>HookType = HOOKTYPE_BRIDGE</code>, 
при котором низкоуровневый переходник к высокоуровневой функции будет сгенерирован автоматически.<br>
<u>Пример высокоуровневой функции</u>:
<span class="erm-anchor" id="ref-era-api-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>PROCEDURE Hook_X (Context: PHookHandlerArgs): LONGBOOL; STDCALL;</code></div>
Функция возвращает флаг того, что нужно выполнить затёртый перехватчиком код по умолчанию. Этот код не должен содержать прыжков, но может содержать любые команды для работы со стеком. 
Высокоуровневый перехватчик может изменять регистры через обращение к структуре THookHandlerArgs. Через неё же может быть изменён и адрес возврата в оригинальный код.</div></li>
<li><span class="erm-anchor" id="ref-era-api-apihook"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ApiHook</strong></span>; STDCALL;</code><br>
Определяет минимальный размер заплатки самостоятельно, в отличие от функции <em class="erm-tone-purple erm-legacy-event">Hook</em>.<br>
И <em class="erm-tone-purple erm-legacy-event">ApiHook</em>, и <em class="erm-tone-purple erm-legacy-event">Hook</em> функции возвращают новый адрес затёртого кода в режиме моста (<code>BRIDGE</code>), 
что позволяет вызывать также и оригинальные функции, минуя установленные перехватчики.</li>
<li><span class="erm-anchor" id="ref-era-api-clall"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ClearAllIniCache</strong></span>; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-clini"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ClearIniCache</strong></span>; STDCALL;</code><br>
Полностью очищает кэш загруженных в память ini-файлов.</li>
<li><span class="erm-anchor" id="ref-era-api-execerm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ExecErmCmd</strong></span> (CmdStr: PCHAR); STDCALL;</code><br>
Выполняет указанную одиночную ERM команду в формате <span class="erm-anchor" id="ref-era-api-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">XX</span>:...</strong> без условий.<br>
<u>Пример</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>ExecErmCmd('IF:L^Hello, World!^;');</code></div></div></li>
<li><span class="erm-anchor" id="ref-era-api-exterm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ExtractErm</strong></span>; STDCALL;</code><br>
Экспортирует все стандартные скрипты (00..99) в папку <em class="erm-legacy-file">Data\s\ExtractedScripts</em>.</li>
<li><span class="erm-anchor" id="ref-era-api-error"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FatalError</strong></span> (Err: PCHAR); STDCALL;</code><br>
Отображает сообщение о критической ошибке и тихо завершает текущий процесс.</li>
<li><span class="erm-anchor" id="ref-era-api-firevnt"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FireEvent</strong></span> (EventName: PCHAR; {n} EventData: POINTER; DataSize: INTEGER); STDCALL;</code><br>
Генерирует событие и извещает о нём всех подписанных обработчиков. <code>EventData</code> указывает на блок параметров события (если есть), а <code>DataSize</code> определяет размер этого блока. 
Посредством данного механизма можно передавать обработчикам ценную информацию о событии.</li>
<li><span class="erm-anchor" id="ref-era-api-firerm"></span><code>PROCEDURE <span class="erm-tone-red"><strong>FireErmEvent</strong></span> (EventID: INTEGER); STDCALL;</code><br>
Генерирует новое ERM событие путём вызова ERM функции с указанным номером. Такой вызов не сохраняет отрицательные <em>z</em>-переменные.<br>
ERA обязует создателей плагинов сохранять предыдущие параметры событий (<a href="./#ref-rec-sn-era-x">SN:X</a>) через функцию <a href="./#ref-era-api-savent">SaveEventParams</a> ДО вызова <em class="erm-tone-purple erm-legacy-event">FireErmEvent</em> и 
восстанавливать через функцию <a href="./#ref-era-api-resent">RestoreEventParams</a> ПОСЛЕ вызова, чтобы каждое новое событие обладало своим набором <a href="./#ref-rec-sn-era-x">SN:X</a> параметров.</li>
<li><span class="erm-anchor" id="ref-era-api-txtunload"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ForceTxtUnload</strong></span> (Name: PCHAR); STDCALL;</code><br>
Заставляет игру выгрузить txt-таблицу из памяти.<br>
<span class="erm-anchor" id="ref-era-api-bold"></span><em class="erm-strong">Замечание:</em> используйте с осторожностью!</li>
<li><span class="erm-anchor" id="ref-era-api-getbtn"></span><code>FUNCTION <span class="erm-tone-red"><strong>GetButtonID</strong></span> (ButtonName: PCHAR): INTEGER; STDCALL;</code><br>
Функция даёт возможность получить уникальный идентификатор (ID) пользовательской кнопки по указанному имени в игровом диалоге. Если такое имя не было зарегистрировано, то функция вернёт -1.<br>
<u></u><span class="erm-anchor" id="ref-era-api-9"></span><details class="erm-comment"><summary>Подробнее (<span class="erm-anchor" id="ref-era-api-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
В ERA cтало возможным иметь пользовательские кнопки в большинстве игровых диалогах. Пользовательские кнопки описываются в <em class="erm-legacy-file">*.btn</em> файлах, которые подгружаются из папки <em class="erm-legacy-file">Data\Buttons</em> при старте игры. Каждый <em class="erm-legacy-file">*.btn</em> файл (чистый txt-формат) содержит строки (по одной на кнопку) в следующем формате:
<div class="erm-paragraph"><span class="erm-anchor" id="ref-era-api-n3"></span><strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Экран кнопки</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Уникальное имя кнопки</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">DEF кнопки</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">X</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Y</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Ширина</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Высота</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Длинное описание</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Короткое описание</strong>;<strong class="erm-tone-purple erm-legacy-code-box erm-inline-code">Код горячей клавиши</strong></div>
, где <code>[Экран кнопки]</code> может принимать одно из следующих значений:
<span class="erm-anchor" id="ref-era-api-t0"></span><ul class="erm-margin-top-zero">
<li><code>Advmap</code> (для карты приключений)</li>
<li><code>Town</code> (для города)</li>
<li><code>Hero</code> (для экрана героя)</li>
<li><code>Heroes</code> (для экрана встречи героев)</li>
<li><code>Battle</code> (для экрана битвы)</li>
<li><code>Dummy</code> (если кнопка не используется)</li></ul>
Каждой такой настроенной кнопке автоматически назначается свой уникальный ID.<br>
<u>Пример</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>Hero;SecSkills.ScrollUp;ScrollUp.def;300;303;12;44;sss.scroll_up;sss.scroll_up;38</code></div></div>
</div></details></li>
<li><span class="erm-anchor" id="ref-era-api-getgame"></span><span class="erm-anchor" id="ref-era-api-state"></span><code>PROCEDURE <span class="erm-tone-red"><strong>GetGameState</strong></span> (VAR GameState: TGameState); STDCALL;</code><br>
Получает текущее состояние игры в виде пары <a href="../../tables/dialog-types/#ref-form-gamestate" data-context="true">идентификаторов диалогов</a>: главного родительского и текущего дочернего (0 = диалоги ещё не созданы).<br>
Функция полезна для определения, в каком диалоге происходит нажатие клавиши.<br>
По умолчанию от функции ID текущего диалога будет помещён в переменную v1.<br>
<u></u><span class="erm-anchor" id="ref-era-api-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-era-api-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(OnKeyPressed)&amp;x1=81; нажата клавиша "Q"
!!SN:F^GetGameState^/?y1; y1 - ID родительского диалога, y2 - текущего (v1 так же получит ID текущего диалога)
!!FU&amp;v1&lt;&gt;4662240:E;	выход, если не бой
!!VRx2:S1;		запрет стандартной реакции</code></pre>
<u>Расшифровка примера</u>: <a href="./#ref-rec-sn-era-f">SN:F</a> вызывает внешнюю функцию <em class="erm-tone-purple erm-legacy-event">GetGameState</em>. <strong>?y1</strong> означает передачу в качестве параметра адрес y1 в памяти (y1 занимает 4 байта, y2 тоже четыре).
А функция на самом деле работает с адресом структуры в 8 байт из двух полей:<br>
- родительский диалог (ID); приходится на y1<br>
- дочерний (текущий) диалог (ID); приходится на y2<br>
Если текущий диалог – экран боя и нажата клавиша <span class="erm-key">Q</span>, то отменяем обработку нажатия, установив 2ой параметр события <a href="../../triggers/#ref-era-new-events-2-3">OnKeyPressed</a> в 1.</div></details></li>
<li><span class="erm-anchor" id="ref-era-api-getaddr"></span><code>FUNCTION <span class="erm-tone-red"><strong>GetRealAddr</strong></span> (Addr: POINTER): POINTER; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-killproc"></span><code>PROCEDURE <span class="erm-tone-red"><strong>KillThisProcess</strong></span>; STDCALL;</code><br>
Тихо убивает текущий процесс.</li>
<li><span class="erm-anchor" id="ref-era-api-loadimg"></span><code>FUNCTION <span class="erm-tone-red"><strong>LoadImageAsPcx16</strong></span> (FilePath, PcxName: PCHAR; Width, Height, MaxWidth, MaxHeight, ResizeAlg: INTEGER): {OU} Heroes.PPcx16Item; STDCALL;</code><br>
Функция даёт возможность загружать любые PNG/JPG/BMP-файлы как игровые PCX-картинки, подходящие для замены внутриигровых изображений или для показа в диалогах. Она поддерживает ограничение размера (0 - без ограничений) и .
<span class="erm-anchor" id="ref-era-api-10"></span><details class="erm-comment"><summary>алгоритмы масштабирования</summary><div class="erm-comment-body">
<blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-era-api-step"></span><div class="erm-indent">RESIZE_ALG_NO_RESIZE = 0; // Не применять никакие ограничения и не менять размер картинки<br>
RESIZE_ALG_STRETCH   = 1; // Задать ширину и высоту картинки для ширины и высоты окна, масштабировать непропорционально<br>
RESIZE_ALG_CONTAIN   = 2; // Изменить размер картинки так, чтобы по крайней мере один из её размеров стал таким же, как размер окна, а другой стал меньше или равным размеру окна<br>
RESIZE_ALG_DOWNSCALE = 3; // Только пропорционально сжимать картинки, не растягивать маленькие картинки<br>
RESIZE_ALG_UPSCALE   = 4; // Только пропорционально масштабировать маленькие картинки, большие картинки оставлять как есть<br>
RESIZE_ALG_COVER     = 5; // НЕ РЕАЛИЗОВАНО<br>
RESIZE_ALG_FILL      = 6; // Использовать картинку как плитка для заполнения всего окна<br>

Используйте ALG_STRETCH для установки фиксированных размеров, ALG_FILL - для заполнения окна плитками и ALG_DOWNSCALE - для настраиваемых диалогов, чтобы пропорционально сужать большие картинки.</div></blockquote></div></details><br>
<u></u><span class="erm-anchor" id="ref-era-api-2"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-era-api-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Давайте возмём свою JPG-картинку для DL-диалога.
<pre class="erm-example"><code class="language-erm">!!SN:F^LoadImageAsPcx16^/^Data\Pics\test.jpg^/^rW3.cust.pcx^/400/300/0/0/1;
!!VRy1:Sv1; y1 - image resource
... вызовем DL-диалог, где используется rW3.cust.pcx
!!SN:F^DecRef^/y1; free image resource</code></pre></div></details></li>
<li><span class="erm-anchor" id="ref-era-api-loadtxt"></span><code>FUNCTION <span class="erm-tone-red"><strong>LoadTxt</strong></span> (Name: PCHAR): {n} PTxtFile; STDCALL;</code><br>
Загружает txt-таблицу средствами игры.</li>
<li><span class="erm-anchor" id="ref-era-api-color"></span><code>PROCEDURE <span class="erm-tone-red"><strong>NameColor</strong></span> (Color32: INTEGER; Name: PCHAR); STDCALL;</code><br>
Функция должна вызываться в событии <em class="erm-tone-purple erm-legacy-event">OnAfterCreateWindow</em> и предназначена для создания или переопределения названий цветов для <a href="../if/#ref-era-color-text">цветного текста ERA</a>.<br>
<u>Пример</u>:
<div class="erm-tone-quote erm-legacy-code erm-note"><div class="erm-paragraph"><code>NameColor($000000, 'bl'); теперь можно использовать {~bl}...{~} для чёрного текста</code></div></div></li>
<li><span class="erm-anchor" id="ref-era-api-pexist"></span><code>FUNCTION <span class="erm-tone-red"><strong>PatchExists</strong></span> (Name: STRING): BOOLEAN; STDCALL;</code><br>
<code>FUNCTION <span class="erm-tone-red"><strong>PluginExists</strong></span> (Name: STRING): BOOLEAN; STDCALL;</code><br>
Проверяют наличие патча/плагина в ERA.<br>
<u></u><span class="erm-anchor" id="ref-era-api-3"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-era-api-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!SN:F^PatchExists^/^fix erm tr r roads.bin^;
!!IF&amp;v1=0:M^Патч, исправляющий баг команды TR:R, не был найден!^;</code></pre></div></details></li>
<li><span class="erm-anchor" id="ref-era-api-readsavsec"></span><code>FUNCTION <span class="erm-tone-red"><strong>ReadSavegameSection</strong></span> (DataSize: INTEGER; {n} Dest: POINTER; SectionName: PCHAR): INTEGER; STDCALL;</code><br>
Функция должна вызываться в событии <a href="../../triggers/#ref-era-new-events-2-2">OnSavegameRead</a> и служит для чтения пользовательских данных из именованной файловой секции. 
Последовательное чтение из одной и той же секции допустимо. Возвращает количество прочитанных байт.</li>
<li><span class="erm-anchor" id="ref-era-api-wrtsavsec"></span><code>PROCEDURE <span class="erm-tone-red"><strong>WriteSavegameSection</strong></span> (DataSize: INTEGER; {n} Data: POINTER; SectionName: PCHAR); STDCALL;</code><br>
Функция должна вызываться в событии <a href="../../triggers/#ref-era-new-events-2-1">OnSavegameWrite</a> и служит для записи пользовательских данных в именованную файловую секцию. 
Допускается последовательная запись в одну и ту же секцию.</li>
<li><span class="erm-anchor" id="ref-era-api-readstr"></span><code>FUNCTION <span class="erm-tone-red"><strong>ReadStrFromIni</strong></span> (Key, SectionName, FilePath, Res: PCHAR): BOOLEAN; STDCALL;</code><br>
Считывает значение из указанного ini-файла в буфер <code>Res</code>. При первом же чтении ini-файл анализируется, кэшируется и дальнейшие запросы приводят к выборкам из ассоциативного массива, 
которые происходят очень быстро и без обращения к жёсткому диску.</li>
<li><span class="erm-anchor" id="ref-era-api-wrtstr"></span><code>FUNCTION <span class="erm-tone-red"><strong>WriteStrToIni</strong></span> (Key, Value, SectionName, FilePath: PCHAR): BOOLEAN; STDCALL;</code><br>
Записывает значение в ini-файл. Каждый вызов функции приводит к записи всего файла на диск.</li>
<li><span class="erm-anchor" id="ref-era-api-recall"></span><code>FUNCTION <span class="erm-tone-red"><strong>RecallAPI</strong></span> (Context: PHookHandlerArgs; NumArgs: INTEGER): INTEGER; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-redir"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RedirectFile</strong></span> (OldFileName, NewFileName: PCHAR); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-glbredir"></span><code>PROCEDURE <span class="erm-tone-red"><strong>GlobalRedirectFile</strong></span> (OldFileName, NewFileName: PCHAR); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-redirmem"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RedirectMemoryBlock</strong></span> (OldAddr: POINTER; BlockSize: INTEGER; NewAddr: POINTER); STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-regist"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RegisterHandler</strong></span> (Handler: TEventHandler; EventName: PCHAR); STDCALL;</code><br>
Регистрирует обработчик указанного события. Обработчики вызываются в порядке их регистрации. Список событий можно просмотреть в файле <em class="erm-legacy-file">Tools\Era\SDK\triggers.txt</em>. 
Два ключевых события, в которым должен быть расположен код инициализации модулей и регистрации обработчиков: <em class="erm-tone-purple erm-legacy-event">OnBeforeWoG</em>, <em class="erm-tone-purple erm-legacy-event">OnAfterWoG</em>.</li>
<li><span class="erm-anchor" id="ref-era-api-reload"></span><code>PROCEDURE <span class="erm-tone-red"><strong>ReloadErm</strong></span>; STDCALL;</code><br>
Вызывает полную перезагрузку и перекомпиляцию всех erm/ert скриптов (00..99). Аналогична нажатию клавиши <span class="erm-key">F12</span>.</li>
<li><span class="erm-anchor" id="ref-era-api-savent"></span><code>PROCEDURE <span class="erm-tone-red"><strong>SaveEventParams</strong></span>; STDCALL;</code><br>
Сохраняет <a href="./#ref-rec-sn-era-x">SN:X</a> параметры события в стековой структуре.</li>
<li><span class="erm-anchor" id="ref-era-api-resent"></span><code>PROCEDURE <span class="erm-tone-red"><strong>RestoreEventParams</strong></span>; STDCALL;</code><br>
Восстанавливает сохранённые <a href="./#ref-rec-sn-era-x">SN:X</a> параметры из стековой структуры.</li>
<li><span class="erm-anchor" id="ref-era-api-savini"></span><code>FUNCTION <span class="erm-tone-red"><strong>SaveIni</strong></span> (FilePath: PCHAR): BOOLEAN; STDCALL;</code><br>
</li>
<li><span class="erm-anchor" id="ref-era-api-wrtcode"></span><code>PROCEDURE <span class="erm-tone-red"><strong>WriteAtCode</strong></span> (Count: INTEGER; Src, Dst: POINTER); STDCALL;</code><br>
Производит безопасное копирование блока памяти из источника в место назначения.</li>
</ul>












</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!SN:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">P воспроизводит звук по имени из z. S читает/заменяет имя в контексте звукового события. Старые ограничения: имя 8.3, длительность до 10 секунд; не все игровые звуки проходят через SN-триггер.</div>
<hr>
<div class="erm-paragraph">L загружает DLL и возвращает дескриптор; 0 означает неудачу. A получает адрес экспортируемой функции. Это загрузка модуля, не просто проверка наличия: для проверки используйте IsDllLoaded.</div>
<hr>
<div class="erm-paragraph">Вызывает машинную функцию. Соглашения: 0 Pascal, 1 Cdecl/Stdcall, 2 Thiscall, 3 Fastcall. Прибавление 4 означает вещественный результат в e1; обычный результат в v1. Аргументы должны точно соответствовать машинной сигнатуре.</div>
<hr>
<div class="erm-paragraph">Разрешает и кэширует экспорт по имени, использует Stdcall; поддерживает ERA, kernel32 и user32. Префикс точкой возвращает float. С ERA 3.9.29 форма plugin:function выбирает другой модуль; без расширения проверяются .era и .dll. v1 не годится для долговременного хранения между вызовами.</div>
<hr>
<div class="erm-paragraph">Низкоуровневый буфер: первый целочисленный аргумент без ? — адрес, с ? — адрес переменной. Строка всегда означает адрес первого символа. Два аргумента получают адрес; три (с d во втором) читают/пишут значение. Проверяйте размер и время жизни буфера.</div>
<hr>
<div class="erm-paragraph">Ищет именованную константу во время выполнения. Проверяйте exists перед использованием значения; подходит для символических значений JSON.</div>
<hr>
<div class="erm-paragraph">D перерисовывает активное поддерживаемое окно: герой, город, встреча, карта. O заменяет координаты части объекта его входом; несколько входов выбираются по правилам объекта. Современная ERA исправляет старое скрытие героя/лодки, но O не поддерживает именованные глобальные переменные.</div>
<hr>
<div class="erm-paragraph">G — устаревший переход внутри обработчика; нельзя пересекать границы структурных блоков. Q прекращает цепочку события, но современные _Quit всё равно вызываются. Q устарел: способен пропустить чужие обработчики и нарушить работу библиотек.</div>
<hr>
<div class="erm-paragraph">Тексты существ: 0 единственное/1 множественное/2 описание. Навыки: 0 имя/1 базовое/2 продвинутое/3 экспертное описание. Принимают текст и GET; префикс - перед категорией восстанавливает исходное.</div>
<hr>
<div class="erm-paragraph">Подсказки объектов: точные координаты приоритетнее пары type/subtype, затем type/-1, -1/subtype, -1/-1. Современная ERA не выдаёт подсказки невидимой текущему игроку клетки.</div>
<hr>
<div class="erm-paragraph">Специализация: герой и вид текста 0 имя/1 краткий/2 полный (в игре используется полный). Артефакты: 0 — имя, 1 — описание (ERA 3.0.3+). Для заклинаний используйте SPELL_TEXT_* константы. Заклинания: имя, краткое имя, описания без навыка/базовое/продвинутое/экспертное, звук.</div>
<hr>
<div class="erm-paragraph">I интерполирует ERM-переменные в строке. T получает локализованный JSON-текст с именованными подстановками @name@; отсутствующий ключ возвращается как текст ключа. Не смешивайте эти два механизма подстановки.</div>
<hr>
<div class="erm-paragraph">Перенаправляет ресурс. Пустое новое имя снимает замену. Перенаправления сохраняются с картой и снимаются при выходе; уже закэшированный ресурс может требовать повторного открытия окна. Для PNG-кадров используется def:group_frame.png.</div>
<hr>
<div class="erm-paragraph">Удалить массив; размер (GET=-1 если отсутствует); прочитать/записать элемент; получить его адрес. Отрицательные индексы элементов отсчитываются от конца. Адрес теряет силу после изменения размера или удаления.</div>
<hr>
<div class="erm-paragraph">Создание: id=-1 автоматический, type 0 числа/1 строки, storage -1 локальный триггеру/0 временный/1 сохраняемый. Современная пятиаргументная форма возвращает ID явно и не меняет v1. Создание поверх прежнего ID уничтожает содержимое.</div>
<hr>
<div class="erm-paragraph">M с 4/5 аргументами и GET среди size/type/storage читает метаданные; SET там игнорируется. V читает/пишет несколько последовательных элементов. Не сохраняйте адрес массива вместо его ID.</div>
<hr>
<div class="erm-paragraph">Длина строки; символ по индексу 0; копирование блока памяти. Современная ERA возвращает код символа в числовой приёмник. Копирование не проверяет вместимость назначения за вас.</div>
<hr>
<div class="erm-paragraph">Без аргументов очищает всё ассоциативное хранилище; с ключом удаляет ключ; с значением читает/пишет. У ключа независимые числовая и строковая части, отсутствующие дают 0/пусто. Используйте префикс мода и адресное удаление.</div>
<hr>
<div class="erm-paragraph">Низкоуровневое представление x1..x16. Передача строки помещает адрес, чтение строки трактует число как адрес. Для обычных параметров событий используйте x напрямую; случайная трактовка числа как указателя вызывает сбой.</div>
<hr>
<div class="erm-paragraph">SN объединяет старые звуковые команды и расширения ERA. Не переносите ограничения старого Help на новые версии без сверки: синтаксис, локальные массивы, строки и генераторы менялись.</div></section>
:::

## Связанные материалы {#related}

[SN:E](../../examples/sn-e/) · [SN:F](../../examples/sn-f/) · [Framework](../../framework/) · [UN:C](../../un-c/)



## Связанные команды и таблицы {#reference-links}

[Воспроизведение звука (SN)](../../triggers/sn/) · [Звуки игровых событий](../../tables/sounds/) · [Отладка и совместимость ERM](../../compatibility/) · [Музыка MP3 (MP)](../mp/) · [Найм существ (RD)](../rd/) · [Общие игровые операции (UN)](../un/#command-q-1-r) · [Условия и ветвления](../../conditions/) · [Циклы: re, br, co и DO](../../loops/) · [Таблица существ](../../tables/creatures/) · [Общие игровые операции (UN)](../un/#command-g0-skill-text-z-g1-monster-text-z-g2-hero-field-value) · [Таблица объектов в игре](../../tables/objects/) · [Объекты карты (OB)](../ob/#command-b-h) · [Подсказки типов объектов (HT)](../ht/) · [Вторичные навыки](../../tables/secondary-skills/) · [Таблица героев](../../tables/heroes/) · [Вызовы функций (FU)](../fu/#command-e) · [Триггеры и события ERM](../../triggers/) · [Тексты: ERT, ERS и JSON](../../tables/text-resources/) · [Переменные и выражения (VR)](../vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Данные клеток карты (PO)](../po/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.30, +](../../compatibility/#era3-v-3-9-30-l7) — Added the following exported functions to era.dll: (* Returns current language/locale string. The buffer must be freed by calling Era.MemFree *) function GetLanguage: {O} pchar; stdcall; (* Changes code page (encoding) u…
- [ERA 3.9.29, +](../../compatibility/#era3-v-3-9-29-l21) — Extended SN:F syntax with possibility to call arbitrary plugin or dll functions: SN:F^plugin_name:function_name^/... If plugin name is provided without a dot, ".era" and ".dll" are tested one by one. Otherwise the name i…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l446) — Extended SN:K(str)/(ind)/&#91;?&#93;(strchar or char code) syntax. If result is integer variable, char code is returned instead.
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l539) — Added the following exported functions to era.dll: (* Compiles single ERM command without !! prefix and conditions and saves its compiled code in persisted memory storage. Returns non-nil opaque pointer on success and ni…
- [ERA 3.9.15, *](../../compatibility/#era3-v-3-9-15-l581) — Modified some exported function signatures. Many of them now use TInt32Bool type (32 bit 0 or 1) instead of boolean for better compatiblity with ERM. type TIsCommanderIdFunc = function (MonId: integer): TInt32Bool stdcal…
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l691) — Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising …
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l709) — Commanders without UNDEAD flag are also handled by Elixir of Life now. Plugins may override IsElixirOfLifeStack exported function to implement other behavior.
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l712) — Added exported functions to era.dll, more steps on moving WoG hard-coded mechanics into replacable API format. API setters return previously set implementation functions or null. type TIsCommanderIdFunc = function (MonId…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l875) — Added the following exported functions to era.dll: // Allocates new function ID and binds it to specified name if name is free, otherwise returns already binded ID. // This function can be used to implement custom ERM ev…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l934) — Exported function 'SetRegenerationAbility' in era.dll for plugins only (like new creature plugins) and/or global map-mods. All plugins should use this function to turn on/off regeneration ability instead of manually hook…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l944) — Exported function 'SetStdRegenerationEffect' in era.dll for plugins only (like new creature plugins) and/or global map-mods. The function changes parameters of standard regeneration effect. // Level7Percents is 0..100 pe…
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l1014) — Added the following exported function to era.dll: // Calculates data hash sum of arbitrary length function Hash32 (Data: pchar; DataSize: integer): integer; stdcall; // Generates new random value using SplitMix32 algorit…
- [ERA 3.9.6, +](../../compatibility/#era3-v-3-9-6-l1066) — Added new exported function to era.dll: // Changes current language code in memory without altering ini files or reloading already loaded data SetLanguage (NewLanguage: pchar): TDwordBool; stdcall; // Reloads all json fi…
- [ERA 3.9.6, -](../../compatibility/#era3-v-3-9-6-l1073) — Fixed "SN:H" command and "OnAdvMapTileHint" event behavior. No hint is applied and no event is generated if tile is not visible by current player.
- [ERA 3.9.3, +](../../compatibility/#era3-v-3-9-3-l1189) — Implemented easy-to-use means to generate remote Era events with arbitrary data. The whole process of data compressing/decompressing/splitting/joining is hidden from clients. Support for progress callbacks is implemented…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1288) — Added new exported functions to era.dll: - PcxPngExists (const PcxName: pchar): integer; stdcall; Tries to load PNG replacement for pcx file name and returns success flag (0 or 1).
- [ERA 3.9, +](../../compatibility/#era3-v-3-9-l1340) — Added support for separate DEF PNG frames redirections. Command template: SN:R^defname.def:groupIndex_frameIndex.png^/^new path to png, relative to root directory.png^. Prefer to use single backslashes as path separators…
- [ERA 3.8.8, +](../../compatibility/#era3-v-3-8-8-l1402) — Png def frames/pcx replacements honor def/pcx redirections (SN:R) from now.
- [Все связанные записи](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
