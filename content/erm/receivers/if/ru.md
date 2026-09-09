---
{"title":"Флаги, сообщения и выбор (IF)","summary":"Ресивер IF: флаги, сообщения и выбор, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Флаги, сообщения и выбор (IF)"}
---

## Ресивер IF {#ref-rec-if}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-a0100010000-s0100010000-r0100010000-v"></span><span class="erm-anchor" id="modern-picture-dialog"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-if-text"></span><div>
<span class="erm-anchor" id="ref-rec-if-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>IF</strong> 
(менеджер флагов и сообщений) </span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-if-red"></span><span class="erm-tone-red"><br>
!!IF:XXXX;</span> 
- менеджер условных флагов (1..1000), вопросов, показ сообщений и картинок.</strong><br>
Используется для менеджмента условных флагов, вопросов к игроку, показа 
сообщений и картинок, выбор героя для использования <em>w</em>-переменных, расширенные 
окна диалогов.<br>
* Команды [<a href="./#ref-rec-if-a">A</a>], [<a href="./#ref-rec-if-r">R</a>] и [<a href="./#ref-rec-if-s">S</a>] данного ресивера работают только с первыми 10-ю флагами.<br>
* Любой триггер и ресивер может зависеть от максимум 16 условий.<br>
* Флаг 1000 принимает значение "Игрок" (0 = ИИ, 1 = человек) при выполнении 
практически любых действий. Может быть использован во всех ресиверах и 
триггерах.</div>
<div class="erm-paragraph"><strong></strong></div><span class="erm-anchor" id="ref-rec-if-11"></span><details class="erm-comment"><summary>Примечание (<span class="erm-anchor" id="ref-rec-if-show11"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Поскольку ресивер IF включает текстовые сообщения, в них не допускается использовать символы ";" и "^".<br>
<u>Пример</u>:<div>
<pre class="erm-example"><code class="language-erm">!!IF:M^Это ошибочный текст; он содержит ^ запрещённые символы^;</code></pre>
<pre class="erm-example"><code class="language-erm">!!VRz567:S^Ошибочный текст; содержит ^запрещённые символы^;</code></pre>
<pre class="erm-example"><code class="language-erm">!!IF:M^Это корректный текст. Он не содержит запрещённых символов^;</code></pre></div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-if-select"></span>Также следует указать на возможность выделения текста внутри диалога с помощью круглых скобок (они не отображаются в диалоге): 
<span class="erm-anchor" id="ref-rec-if-erm"></span><strong class="erm-inline-code"><span class="erm-tone-red">{текст}</span></strong>. Стоит лишь заключить в эти скобки ваш текст (или отдельные его слова), и слова окрасятся в 
<span class="erm-anchor" id="ref-rec-if-dl2"></span><span class="erm-game-text">золотисто-жёлтый цвет</span>.
<pre class="erm-example"><code class="language-erm">!!IF:M^Среди всех слов только {это} будет выделено^;
!!IF:M^{Этот текст весь будет выделенным}^;</code></pre>
Однако здесь стоит сказать, что "выделение текста" работает тогда, пока обе скобки находятся на одной строке внутри диалога, или же вы сами не внесли перенос текста. В этом случае "выделение" перенесённой части предложения сбросится. Учитывайте данный момент при оформлении своих диалогов.
<pre class="erm-example"><code class="language-erm">!!IF:M^{Эта часть предложения будет выделена,
а эта часть останется простой}^;</code></pre>
Чтобы избежать подобные проблемы с вашим текстом, можно прибегнуть к такому способу выделения:
<pre class="erm-example"><code class="language-erm">!!IF:M^{Достаточно {перед {каждым {словом {открывать {скобку}^;</code></pre></div>
<div class="erm-paragraph">Помимо этого, вы можете дополнительно окрашивать ваш текст в диалоге с помощью особого синтаксиса: <a href="./#ref-era-color-text">см. детали</a>…</div></div></details>
<span class="erm-anchor" id="ref-rec-if-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: <a href="./#ref-rec-if-more">подробнее по ресиверу IF</a>, <a href="./#ref-cont-db">доп.информация по диалогам</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-if-a"></span>Axxxxxxxxxx</strong></span><br>
Установить значения первых десяти флагов.<br>
Линия XXXX содержит 10 нулей и/или единиц, соответственно, "1" для флага, который нужно установить как «Истина», и "0" - «Ложь»<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!IF:A0100010000; Установить все флаги на 0, кроме второго и шестого.</code></pre>
В начале игры все флаги установлены на "0"</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-b"></span><span class="erm-anchor" id="command-b-1-2-p"></span>B#/$1/$2</strong></span><br>
Установка или изменение одиночного 
изображения или анимации для показа командой <a href="./#ref-rec-if-p">IF:P</a>.<br>
        # – номер диалога (1..100)<br>
        $1 – номер текстовой переменной, где 
записано имя файла/изображения (BMP/GIF/JPG или AVI)<br>
	        $2 – для AVI – повторять снова 
(1) или нет (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-d"></span><span class="erm-anchor" id="command-d-1-15-f-1-2-3-4-5-e"></span>D#/$1/$2/$3/$4/$5/$6/$7/$8/$9/$10/$11/$12/$13/$14/$15</strong></span><br>
Установка или изменение расширенных диалогов для показа командой <a href="./#ref-rec-if-e">IF:E</a>.<br>
        # – номер диалога (1..100)<br>
*$ = номер переменной z, в которой установлен текст для использования<br>
        $1 – титульный текст (белый) сверху 
диалогового окна (текст выравнивается по центру; допускается несколько строк)<br>
        $2 – левое описание (жёлтое) выше 
окна ввода (29 символов максимум, дальше обрезается)<br>
        $3 – правое описание (жёлтое) об окне 
выбора (29 символов максимум, дальше обрезается)<br>
        $4 – картинка/AVI 1 (левый), файл в <em class="erm-legacy-file">папка_героев/maps</em><br>
        $5 – картинка/AVI 2, файл в <em class="erm-legacy-file">папка_героев/maps</em><br>
        $6 – картинка/AVI 3, файл в <em class="erm-legacy-file">папка_героев/maps</em><br>
        $7 – картинка/AVI 4 (правый), файл в <em class="erm-legacy-file">папка_героев/maps</em><br>
        $8 – описание картинки 1 (при 
наведении мыши)<br>
        $9 – описание картинки 2 (при 
наведении мыши)<br>
        $10 – описание картинки 3 (при 
наведении мыши)<br>
        $11 – описание картинки 4 (при 
наведении мыши)<br>
        $12 – выбор 1 (окно ввода) – текст 
кнопки<br>
        $13 – выбор 2 (окно ввода) – текст 
кнопки<br>
        $14 – выбор 3 (окно ввода) – текст 
кнопки<br>
        $15 – выбор 4 (окно ввода) – текст 
кнопки<br>
<strong>
</strong></div><span class="erm-anchor" id="ref-rec-if-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-if-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Если вы используете 0 или пустой параметр, это 
означает пропуск. Полный путь к файлу, включая имя (до 256 символов) может быть 
изменён, но помните, что он начинает обработку с <em class="erm-legacy-file">Maps</em>, поэтому можно делать так: <strong class="erm-tone-red erm-inline-code">^../data/mypic.bmp^</strong>. Максимальный размер картинки 100*100, но может быть меньше 
(выравнивание по центру автоматически). Поддерживает форматы 
JPG, BMP. Из видео - поддерживает небольшие AVI. Установочная информация не 
сохраняется при сохранении игры, так что всегда делайте установку перед 
использованием IF:E</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-e"></span>E$1/$2</strong></span><br>
Показ расширенного диалога, 
установленного ранее командой 
<a href="./#ref-rec-if-d">IF:D</a> 
(возможно <a href="./#ref-rec-if-f">IF:F</a>).<br>
        $1 – номер <em>v</em>-переменной для 
сохранения выбора<br>
        $2 – номер диалога<br>
<strong><u>Комментарий</u>:</strong> переменная будет равна 1, 2, 3 или 4 соответственно, если сделан выбор, либо -1, если нажат выход.<br>
Текст с окна ввода автоматически занесётся в z1, даже если окна нет.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-f"></span>F$1/$2/$3/$4/$5/$6</strong></span><br>
Добавление текста подсказок в окно выбора 
в расширенном диалоге. Расширение команды <a href="./#ref-rec-if-d">IF:D</a>.<br>
        #1 – номер диалога (1..100)<br>
        $2 – номер <em>z</em>-переменной с текстом для 
1ого выбора<br>
        $3 – номер <em>z</em>-переменной с текстом для 
2ого выбора<br>
        $4 – номер <em>z</em>-переменной с текстом для 
3его выбора<br>
        $5 – номер <em>z</em>-переменной с текстом для 
4ого выбора<br>
        $6 – разрешить кнопку выхода (1) или 
нет (0)<br>
<strong><u>Комментарий</u>:</strong> установочная информация не будет сохранена при 
сохранении, поэтому всегда делайте установки перед использованием команды <a href="./#ref-rec-if-e">
IF:E</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-g"></span><span class="erm-anchor" id="command-g-single-result-mask-title-item1-item12"></span>G#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14/#15/#16</strong></span><br>
Установить диалог выбора (до 12 вариантов)<br>
        #1 – тип диалога:<br>
            1 – 
однокнопочный (один выбор)<br>
            0 – 
мультикнопочный (несколько выборов)<br>
        #2 – номер <em>v</em>-переменной, куда 
занесётся результат<br>
        #3 – начальный статус кнопок<br>
        #4 – номер <em>z</em>-переменной – титульной 
(верх окна; рекомендуется не более 3-х строк)<br>
        #5 – номер <em>z</em>-переменной с именем 1ого 
предмета (0 – не показывать)<br>
        #6 – номер <em>z</em>-переменной с именем 2ого 
предмета (0 – не показывать)<br>
       …    <br>
        #16 – номер <em>z</em>-переменной с именем 
12ого предмета (0 – не показывать)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-if-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-if-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Статус выбранного исчисляется <a href="../../tables/bits/#ref-form-hex" data-context="true">побитно</a>.<br>
выбор 1 = 1<br>
выбор 2 = 2<br>
выбор 3 = 4<br>
выбор 4 = 8<br>
выбор 5 = 16..<br>
Так, все предметы будут равны = 4095. Для установки предмета 2, 4, 5, 8 и 10 
значение будет 2+8+16+128=154. Всё отключено = 0.<br>
<u>Пример</u>:<br>
<img src="../../../../assets/erm/507bc28814eae0c4.jpg" alt="Статус выбранного исчисляется побитно. выбор 1 = 1 выбор 2 = 2 выбор 3 = 4 выбор 4 = 8 выбор 5 = 16.. Так, все предметы будут равны = 4095. Для установки предме" loading="lazy" decoding="async" class="erm-figure" width="401" height="336"></div></details>
<hr>
<div class="erm-paragraph"><strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-if-l"></span><span class="erm-anchor" id="command-l-text-m-text-m0-4-text-m1-z"></span>L^Текст^</span></strong><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Добавить сообщение в лог на экране.<br>
<strong>L^Текст^</strong> – добавит "текст"<br>
<strong>L$</strong> – добавит значение переменной z$<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-if-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-if-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Похоже на то, что вы нажали <span class="erm-key">Tab</span>, ввели сообщение, и 
нажали <span class="erm-key">Enter</span>.<br>
Сообщение всплывает под предыдущим.<br>
Возможно до 20 сообщений на экране.<br>
Каждое сообщение остаётся на экране 20 секунд.<br>
Работает и в экране приключений, и в бою.<br>
Когда вы входите или выходите из битвы, сообщение остаётся на экране.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-m"></span>M^Текст^</strong></span><br>
Показать сообщение (текст). Сообщение может содержать любые символы, 
кроме "^" и ";"<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-4"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-if-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/6b9b390f8a081632.jpg" alt="ifm" loading="lazy" decoding="async" class="erm-figure" width="319" height="191"></div></details>
<div class="erm-paragraph"><em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>M0/4/^Подсказка^</strong></span> <br>
Позволяет показать сообщение без картинок и кнопок (при обычном щелчке <span class="erm-anchor" id="ref-rec-if-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">). Может быть использовано 
для подсказок в триггерах <a href="../../triggers/cm/#ref-tr-cm">!?CM</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>M1/$</strong></span><br>
Установить или получить текст сообщения<br>
        $ – номер текстовой <em>z</em>-переменной</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-n"></span><span class="erm-anchor" id="command-ntype-subtype-n-text"></span>N#1/#2/#3/#4/#5/#6/#7/#8/#9/#10/#11/#12/#13/#14/#15/#16</strong></span><br>
Сообщение с текстом и до 8 картинок любого типа, имеющихся в игре.<br>
Похожее вы можете увидеть, установив <a href="../ge/#ref-rec-ge">глобальное событие</a> с несколькими ресурсами<br>
<em>Синтаксис таков:</em><br>
<strong><span class="erm-tone-red">!!IF:N…</span></strong><br>
Диалог не показывается, это лишь подготовительная фаза.<br>
Если вы установите более трёх параметров, интерпретатор поймёт их как 
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип</a> и <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">подтип</a> 
картинок так же, как и в команде <a href="./#ref-rec-if-q">IF:Q</a>.<br>
Вы можете установить до 8 картинок (16 параметров), но минимум 2 картинки (4 параметра).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-if-13"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-if-show13"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!IF:N3/8/10/2/11/3/13/2/17/1000/21/99/22/4;</code></pre>
Означает, что будут показаны: 3/8 – ресурс - сера, кол-во 8, следующий – 
флаг коричневого игрока (10/2), потом Удача и т.д. Как вы можете увидеть, здесь 7 картинок.</div></details>
<div class="erm-paragraph"><em>Другой синтаксис:</em><br>
Если вы имеете менее четырёх параметров, интерпретатор поймёт это как 
команду для показа диалога, который был приготовлен предыдущим синтаксисом.<br>
Единственный параметр здесь - это текст для показа:<br>
<strong><span class="erm-tone-red">!!IF:N^Текст^</span></strong> - прямой текст, или<br>
<strong><span class="erm-tone-red">!!IF:N1/z1</span></strong> - текст из z1.<br>
Если вы укажите другую <em>z</em>-переменную, в диалог всё-равно попадёт значение z1.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-if-12"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-if-show12"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Есть ограничение максимума строк – если в тексте будет больше строк, чем показано в следующем примере, игра вылетит:
<pre class="erm-example"><code class="language-erm">!!IF:N^ Это
Ооооо...
...
...
...
чень
длин...
...
...
ный
текст^;
</code></pre></div></details>
<div class="erm-paragraph">Пример показа готового диалога с использованием IF:N см. <a href="./#ref-cont-db-n">здесь</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-p"></span>P#</strong></span><br>
Показа одиночного изображения/анимации в 
расширенном окне диалога, предварительно установленном командой <a href="./#ref-rec-if-b">IF:B</a><br>
        # – номер диалога</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-q"></span><span class="erm-anchor" id="command-q-text-q-type-subtype-type-subtype-mode-text"></span>Q#^Вопрос^</strong></span><br>
Спросить игрока (вопрос). Ответ (да = 1, отмена = 0) заносится во 
флаг # (1..1000). Вопрос может содержать любые символы, кроме "^" и ";"<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-5"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-if-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/6d7babaee92f6d9e.jpg" alt="ifq2" loading="lazy" decoding="async" class="erm-figure" width="318" height="190"><br><br></div></details>
<div class="erm-paragraph"><strong><span class="erm-tone-red">Q#1/#2/#3/#4^текст^</span></strong><br>
Показать сообщение или вопрос с одной картинкой<br>
        #1 – номер флага<br>
        #2 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип картинки</a><br>
        #3 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">подтип картинки</a><br>
        #4 – </div><span class="erm-anchor" id="ref-rec-if-6"></span><details class="erm-comment"><summary>тип сообщения</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	1 – сообщение<br>2 – вопрос типа да/нет (устанавливается во флаг)<br>4 – сообщение без кнопок 
	(используйте этот формат с триггером <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> для сообщений по правому клику и 
	используйте значение -1 для типа и подтипа картинки, если она вам не нужна)</blockquote>
</div></details>
<div class="erm-paragraph"><em>Примечание</em>: вы должны использовать параметр ^текст^, или команда не будет 
работать.<br>Если вы не хотите использовать текст, используйте ^^.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-7"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-if-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/b115f7b4877ac7b9.jpg" alt="ifq1" loading="lazy" decoding="async" class="erm-figure" width="312" height="376"></div></details>
<div class="erm-paragraph"><strong><span class="erm-tone-red">Q#1/#2/#3/#4/#5/#6^текст^</span></strong><br>
Показать сообщение или вопрос с двумя картинками<br>
        #1 – номер флага<br>
        #2 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип картинки</a> 1<br>
        #3 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">подтип картинки</a> 1<br>
        #4 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип картинки</a> 2<br>
        #5 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">подтип картинки</a> 2<br>
        #6 – </div><span class="erm-anchor" id="ref-rec-if-8"></span><details class="erm-comment"><summary>тип сообщения</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	1 – сообщение<br>
	2 – вопрос типа да/нет (устанавливается во флаг)<br>
	4 – сообщение без кнопок (используйте этот формат с триггером <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> для сообщений по правому клику и 
	используйте значение -1 для типа и подтипа картинки, если она вам не нужна)<br>
	7 – выбор одной из картинок:<br>
	     0 = правая<br>
	     1 = левая<br>
	10 – выбор из двух картинок + кнопка отмены: результат будет занесён в <em>v</em>-переменную #. 
	Она сможет принять такие значения:<br>
	     0 = нажат выход<br>
	     1 = левая картинка выбрана<br>
	     2 = правая картинка выбрана</blockquote>
</div></details>
<div class="erm-paragraph"><em>Примечание</em>: вы должны использовать параметр ^текст^, или команда не будет 
работать.<br>Если вы не хотите вводить текст, используйте ^^.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-if-9"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-if-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<img src="../../../../assets/erm/09fec3c187adb052.jpg" alt="ifq4" loading="lazy" decoding="async" class="erm-figure" width="317" height="318"></div></details>
<div class="erm-paragraph"><strong><span class="erm-tone-red">Q#1/#2/#3/#4/#5/#6/#7/#8^текст^</span></strong><br>
Показать сообщение или вопрос с тремя картинками<br>
        #1 – номер флага<br>
        #2 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип картинки</a> 1<br>
        #3 – <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">
подтип картинки</a> 1<br>
        #4 – 
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип картинки</a>2<br>
        #5 – <a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">
подтип картинки</a> 2<br>
        #6 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">тип картинки</a> 3<br>
        #7 –
<a href="../../tables/dialog-pictures/#ref-form-picts" data-context="true">подтип картинки</a> 3<br>
        #8 – </div><span class="erm-anchor" id="ref-rec-if-10"></span><details class="erm-comment"><summary>тип сообщения</summary><div class="erm-comment-body">
	<blockquote class="erm-note">
	1 – сообщение<br>
	2 – вопрос типа да/нет (устанавливается во флаг)<br>
	4 – сообщение без кнопок (используйте этот формат с триггером <a href="../../triggers/cm/#ref-tr-cm">!?CM</a> для сообщений по правому клику и 
	используйте значение -1 для типа и подтипа картинки, если она вам не нужна)<br>
	Здесь так же (как и для диалога с двумя картинками) можно указывать тип 7 и 10, и тогда игрок сможет выбирать из первых двух картинок диалога, в то время, как третья будет просто декоративной :)</blockquote></div></details>
<div class="erm-paragraph"><em>Примечание</em>: вы должны использовать параметр ^текст^, или команда не будет 
работать.<br>Если вы не хотите вводить текст, используйте ^^.</div>
<div class="erm-paragraph">
Вместо любого ^текст^ можно использовать номер <em>z</em>-переменной.<br><em>Синтаксис таков:</em><br>
<strong><span class="erm-tone-red">Q…/#/z#</span></strong><br>
где <strong>#</strong> – тип сообщения, <strong>z#</strong> – номер <em>z</em>-переменной с текстом.</div>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-if-s"></span>Sxxxxxxxxxx</strong></span><br>
Установить некоторые флаги на истину (синтаксис, обратный R)<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!IF:S0100010000; – установить второй и шестой на 1, остальные оставить без изменений.</code></pre></div>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-if-r"></span>Rxxxxxxxxxx</strong></span><br>
Установить некоторые флаги на ложь (синтаксис, обратный S)<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!IF:R0100010000; – установить второй и шестой флаг на 0, остальные оставить без изменений.</code></pre></div>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-v"></span>V#1/#2</strong></span><br>
Установить условный флаг #1 (1..1000) в значение #2 (1 или 0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-w"></span><span class="erm-anchor" id="command-w-x"></span>W$</strong></span><br>
Каждый герой имеет 200 индивидуальных переменных.<br>
Они называются w# (# = 1..200)<br>
Они могут быть использованы везде, где и переменные f…t.<br>
Вы должны установить героя, у которого и будут проверяться эти значения ($ = 
<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>, -1 = текущий)<br>
Каждый раз, когда вы применяете эту команду, вы обращаетесь к переменным определённого героя.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-if-15"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-if-show15"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!IF:W-1;	текущий герой
!!VRw55:S10;	записать в w55 текущего героя значение 10</code></pre></div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-if-x"></span>X$</strong></span><br>
Задать игроку вопрос Сфинкса<br>
$ – номер вопроса (-1 – случайный)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-if-14"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-if-show14"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Происходит вызов диалогового окна со Сфинксом. Все 
вопросы и ответы берутся из файла <em class="erm-legacy-file">ZSphinx.txt</em>. Если у вас нет TxtEditor, вы 
можете использовать CmdEditor для каких-либо добавлений. Первая колонка - 
вопросы, вторая - ответы. Сейчас совпадение написанного игроком с ответом 
означает корректность ответа. Флаг 1 устанавливается на истину (1), если ответ 
правилен, на ложь (0), если неправилен.</div></details>
<hr>
<h3 class="erm-align-center"><span class="erm-anchor" id="ref-rec-if-more"></span><em>Дополнительная информация для ресивера IF</em></h3>
<div class="erm-paragraph">В ERM-сообщениях (<a href="./#ref-rec-if-m">M</a>- и <a href="./#ref-rec-if-q">Q</a>-команды) вы можете использовать специальный синтаксис показа:<br>
“%%” → знак процентов “%”<br>
“%Dd” → текущий день недели<br>
“%Dw” → текущую неделю <br>
“%Dm” → текущий месяц<br>
“%Da” → текущий день с начала игры<br>
“%Gc” → цвет текущего игрока (текстом)<br>
См. также <a href="../../variables/#ref-cont-flags-var-show">показ переменных</a> в сообщениях.
</div>

<h4>Просмотр названия</h4><div class="erm-paragraph">
Иногда вы будете знать номер монстра, артефакта, здания, вторичного навыка или 
заклинания, но не будете знать его название (особенно при случайной генерации). В 
таких ситуациях используйте команду просмотра названия - <a href="../un/#ref-rec-un-n">UN:N</a>. Эта команда 
позволит вам, указав номер, получить название (имя), записанное в конкретную <em>z</em>-переменную, которую уже можно будет вставить в вашем диалоге.</div>

<h4>Интерпретация значений в IF:Q</h4><div class="erm-paragraph">
Игра "переводит" некоторые значения в IF:Q немного по другому: отрицательные 
значения как "кол-во в день", поэтому таким образом вы не можете показать 
отрицательное кол-во золота. Но! Если вы отнимете от такого числа ещё 100000, то всё 
будет работать корректно.<br>
Так:
<pre class="erm-example"><code class="language-erm">!#IF:Q1/6/200/1^Сообщение^;	- золото: "200"
!#IF:Q1/6/-200/1^Сообщение^;	- золото: "200 в день"
!#IF:Q1/6/-100200/1^Сообщение^;	- золото: "-200"</code></pre>
Так же для денег:
<pre class="erm-example"><code class="language-erm">!#IF:Q1/36/-100/1^Сообщение^;	- монеты: "100 в день"
!#IF:Q1/36/-100100/1^Сообщение^;- монеты: "-100"</code></pre>
Для монстров же вы можете задавать кол-во так:<br>
[подтип картинки] = [кол-во монстров]×65536 + <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a>
<pre class="erm-example"><code class="language-erm">!#IF:Q1/21/327686/1^Сообщение^;	- 5 мечников (65536*5 +6)
!#IF:Q1/21/65542/1^Сообщение^;	- 1 мечник (65536*1 +6)
!#IF:Q1/21/6/1^Сообщение^;	- мечник</code></pre></div>
<hr>

</div>
</div>
</section>
:::

## Диалоговые окна {#ref-cont-db}

:::erm
<section class="erm-reference" lang="ru">
<div><h3 class="erm-align-center">Диалоговые окна (ресивер <a href="./#ref-rec-if">IF</a>)</h3>
<div class="erm-paragraph">Если вам нужно показать игроку сообщение, задать вопрос, показать картинку или 
анимацию игроку, или дать игроку выбрать между опциями, или дать напечатать 
что-либо (например, своё имя), вы должны использовать диалоговые окна.</div>
<h3>Типы диалоговых окон</h3>
<div class="erm-paragraph">Есть два основных типа диалоговых окон, которые могут быть показаны с помощью 
ERM. Первый - стандартный диалог, который вы регулярно видели в оригинальных 
Героях. Второй - расширенный диалог, который используется для показа внешних 
картинок и анимаций, делают возможным ввод данных с клавиатуры и выбор из 
каких-либо опций. От вашего выбора будет зависеть тип информации, которую вы 
сможете показать. Вы можете использовать оба типа для показа только информации, 
или для показа картинки и вопроса к игроку, в конце концов, простой выбор между 
"Да" и "Нет" (Отмена). Стандартные диалоговые окна более просты в использовании, 
чем расширенные, которые требуют дополнительные команды.</div>
<h3>Использование стандартных диалоговых окон</h3>
<div class="erm-paragraph">Они базируются всего лишь на двух командах для стандартного окна диалога: <a href="./#ref-rec-if-m">IF:M</a>, 
который используется для одиночных сообщений, и <a href="./#ref-rec-if-q">IF:Q</a>, который используется для 
вопросов типа "Да/Нет" и для показа картинок. В обоих случаях, всё зависит 
только от вашего желания ;)</div>
<ul>
<li>Пример показа простого диалогового окна - сообщения командой <a href="./#ref-rec-if-m">
IF:M</a> :
<span class="erm-anchor" id="ref-cont-db-m"></span><pre class="erm-example"><code class="language-erm">!!IF:M^В этой загадочной стране летающие существа не летают, но им не отвечают на атаку.^;</code></pre>
В этом коде будет показано сообщение, которое вы видите ниже, белым текстом, выровненное по центру. 
Ниже будет одна кнопка ОК, которую должен нажать игрок для продолжения игры.
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/6b9b390f8a081632.jpg" alt="ifm" loading="lazy" decoding="async" class="erm-figure" width="319" height="191"></div></li>

<li>Пример показа простого окна вопроса командой <a href="./#ref-rec-if-q">IF:Q</a> (без картинки):
<span class="erm-anchor" id="ref-cont-db-q2"></span><pre class="erm-example"><code class="language-erm">!!IF:Q2^Особые правила модифицируют игру. Вы хотите выбрать их вручную? 
(Если нет, одна или две опции будут выбраны случайно.)^;</code></pre>
В этом примере появится, как видно, диалоговое окно с двумя кнопками: ОК и Отмена.
Число 2 после IF:Q означает, что флаг 2 будет принимать значение выбранной кнопки, и установится на Ложь (0), если будет нажата Отмена.<br>
Для вопроса может быть выбран любой флаг. См. <a href="../../variables/#ref-cont-flags">флаги и переменные</a> для дополнительной информации.
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/6d7babaee92f6d9e.jpg" alt="ifq2" loading="lazy" decoding="async" class="erm-figure" width="318" height="190"></div></li>

<li>Пример показа сообщения с картинкой (без вопроса):
<span class="erm-anchor" id="ref-cont-db-q-pic"></span><pre class="erm-example"><code class="language-erm">!!IF:Q2/20/53/1^{Гриб Магии Воды}
Гриб Магии Воды даёт навык Магия Воды эксперта до конца недели...
Вы вдыхаете споры гриба...
Вы стали Экспертом Магии Воды!^;</code></pre>
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/b115f7b4877ac7b9.jpg" alt="ifq1" loading="lazy" decoding="async" class="erm-figure" width="312" height="376"></div></li>

<li>Пример показа сообщения и двух картинок - игрок должен нажать на картинку для её выбора и нажать кнопку ОК:
<span class="erm-anchor" id="ref-cont-db-q7-pic"></span><pre class="erm-example"><code class="language-erm">!!IF:Q2/5//8/141/7^Вы желаете сыграть на {ресурсы} или {артефакты}?^;</code></pre>
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/09fec3c187adb052.jpg" alt="ifq4" loading="lazy" decoding="async" class="erm-figure" width="317" height="318"></div></li>
</ul>

<div class="erm-paragraph">Однако, есть и ещё один тип диалога, использующий стандартные ресурсы игры - это команда <a href="./#ref-rec-if-n">IF:N</a>. 
Здесь может быть до 8 картинок одновременно, параметры показа которых такие же, как и для <a href="./#ref-rec-if-q">IF:Q</a>.
<span class="erm-anchor" id="ref-cont-db-n"></span><span class="erm-anchor"></span><pre class="erm-example"><code class="language-erm">!!HE-1:B0/?z2;	получить имя текущего героя в z2
!!VRz1:S^%Z2 учит особые заклинания...^;
!!IF:N9/10/9/11/9/12/9/13;
!!IF:N1/z1;</code></pre>
</div><div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/acb064539d0659c8.jpg" alt="ifn" loading="lazy" decoding="async" class="erm-figure" width="502" height="246"></div>
<div class="erm-paragraph">Как видите, есть много комбинаций с этими командами ресивера <a href="./#ref-rec-if">!!IF</a>. Экспериментируйте!</div>
<h3>Использование Расширенного диалогового окна #1 - многозадачный диалог</h3>
<div class="erm-paragraph">Если вы хотите разрешить игроку ввести текст, позволить ему выбрать что-либо 
из четырёх вариантов, и/или показать определённые картинки или анимации, вы 
должны использовать расширенные диалоговые окна. В общем, вам нужно записать 
некоторый текст в <em>z</em>-переменную и затем использовать её для установки команд в 
расширенном диалоговом окне. Для их установки воспользуйтесь командами
<a href="./#ref-rec-if-d">IF:D</a> и <a href="./#ref-rec-if-f">IF:F</a>, а 
для показа - командой <a href="./#ref-rec-if-e">IF:E</a>. Любая опция ниже может 
быть соединена в многозадачный диалог:</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-cont-db-step"></span><strong class="erm-indent">1. Показ картинок:</strong> в отличии от стандартного диалогового окна, 
расширенное не может показывать внутренние, т.е. игровые, картинки, а только 
внешние картинки, с определённым типом и размером. Если вам нужно показать ещё и 
внутреннюю картинку игры, воспользуйтесь клавишей <span class="erm-key">Print Screen</span> и вырежьте нужную 
картинку. Путь к картинке может содержать до 256 символов, и начинается с 
директории <em class="erm-legacy-file">Heroes3\Maps</em>. Картинки могут быть BMP, GIF или JPG с максимальным 
размером 100х100 пикселей. Если изображение меньше, оно будет выровнено по 
центру свободного пространства. Если изображение больше, только 100х100 пикселей 
будет показано. Для BMP верхний левый пиксель будет интерпретироваться как 
прозрачный. Вы можете смешивать и менять картинки как захотите. Команда <a href="./#ref-rec-if-d">
IF:D</a> используется для установки картинок для многозадачного диалогового окна.</div>
<u>Пример 1</u>:
<pre class="erm-example"><code class="language-erm">!!VRz10:S^Земли, в которых вы путешествуете, прекрасны.^;
!!VRz11:S^blue forest.jpg^;
!!VRz12:S^sparkling lake.bmp^;
!!VRz13:S^rainbow.gif^;
!!VRz14:S^mountains.jpg^;
!!VRz15:S^Мрачный лес^;
!!VRz16:S^Кристальное озеро^;
!!VRz17:S^Мистический дождь^;
!!VRz18:S^Туманные горы^;
!!IF:D5/10/0/0/11/12/13/14/15/16/17/18/0/0/0/0;
!!IF:E1/5;</code></pre>
<div class="erm-paragraph">В этом примере, в z10 записан заглавный текст для диалога, в 
z11..z14 записаны имена картинок в папке Maps, и в z15..z18 записаны подсказки 
для каждой картинки. Мы использовали диалоговое окно №5 (первый параметр), далее 
номер <em>z</em>-переменной, содержащей главный текст, далее два 0, означающие "Не 
изменять эти параметры". После этого - <em>z</em>-переменные с именами файлов (11..14) и 
<em>z</em>-переменные для подсказок (15..18). Последние четыре параметры также не 
используются в этом примере и мы заменяем их нулями.</div>
<div class="erm-paragraph"><strong class="erm-indent">2. Показ анимации:</strong> вы можете использовать расширенный диалог для 
показа анимации или клипа в формате AVI. AVI-анимация может быть показана вместо 
картинки и может быть комбинирована с картинками (например, вы можете показать 
две анимации и две картинки в одном диалоге). Работает 
AVI как раз несжатая,  или сжатая плохо (RLE, например). 
Большинство компрессий, в том числе DivX и XviD, приводят к ошибке <em class="erm-legacy-file">zvslib1.dll</em>. 
Это, кстати, затрудняет использование AVI в дополнениях, потому как даже 
короткая AVI-uncompressed занимаем мегабайты.<br>
Отличия проигрывания GIF от AVI в wog-диалогах:
</div><ul><li>AVI стабильно проигрывается, не исходя полосками, в отличие от GiF.</li>
<li>С другой стороны, в формате IF:D, когда в диалоге нет пунктов выбора 
($12..$15), GIF не вылазит за пределы диалога, в отличие от AVI.</li></ul>
Как и картинки, анимация ограничена 100х100 
пикселей. Опять же, используйте <a href="./#ref-rec-if-d">IF:D</a> для установки анимации для расширенного 
диалогового окна.
<div class="erm-paragraph"><strong class="erm-indent">3. Чекбоксы:</strong> если вы хотите дать игроку выбор между четырьмя (или 
более) опциями, вы можете использовать чекбоксы. Там вы можете ввести заголовок 
сообщения (текст будет жёлтым). Каждая опция чекбокса будет иметь текст в 
табличке, и также может иметь текст-подсказку (показывается внизу диалогового 
окна при наведении курсора на опцию). И хотя вы не можете поместить картинку в 
сам чекбокс, вы можете соотнести выбранную опцию и картинку в ней, которая будет 
показана выше. Когда диалог появится, ни одна опция не будет выбрана. Игрок 
может выбрать только одну опцию, выбор другой автоматически отключит предыдущую. 
После нажатия игрока на ОК, вы можете проверить, какая опция была выбрана, её 
номер запоминается в <em>v</em>-переменную. Устанавливается диалог так же, как и картинки 
и анимации:
<a href="./#ref-rec-if-d">IF:D</a> и <a href="./#ref-rec-if-f">IF:F</a> для 
добавления текста-подсказок для чекбоксов, если захотите.</div>
<div class="erm-paragraph"><strong class="erm-indent">4. Ввод текста:</strong> если в хотите получить текстовое сообщение от игрока, 
вы можете показать окно ввода. Над ним вы можете ввести небольшое сообщение 
(текст будет жёлтым). Текст, введенный игроком в окно ввода, занесётся в 
текстовую переменную (<em>z</em>-переменную), и может быть использован для имени города 
или героя, текста-подсказки, текста знака, часть другого сообщения, или может 
быть проверена, правильный ли ответ или нет. Вы также можете использовать 
введенный текст с командой
<a href="../un/#ref-rec-un-n">UN:N</a> для поиска, например, артефакта с введенным 
именем, или монстра, постройки замка или имени навыка. <a href="./#ref-rec-if-d">
IF:D</a> 
используется для установки окна ввода текста.</div>
<div class="erm-paragraph"><strong class="erm-indent">5. Текст заголовка:</strong> текст вверху диалогового окна (белый) можно 
установить командой <a href="./#ref-rec-if-d">IF:D</a>, и жёлтый текст для 
чекбоксов может быть использован, даже если вы не использовали чекбоксы в диалоге.</div>
<div class="erm-paragraph"><strong class="erm-indent">6. Кнопка отмены:</strong> команда <a href="./#ref-rec-if-f">IF:F</a> может 
быть использованна для отключения или включения кнопки "Отмена" (и клавишей <span class="erm-key">Esc</span> на 
клавиатуре) для расширенного многозадачного диалогового окна.</div>
<u>Пример 2</u>:
<pre class="erm-example"><code class="language-erm">!#IF:F1/z21/z22/z23/z24/0; - установить подсказки и отключить кнопку отмены.</code></pre><br>
<u>Пример 3</u>:
<pre class="erm-example"><code class="language-erm">!#VRz199:S^..\Data\Zvs\Cmp.res^;
!#VRz10:S^Время играть!^;
!#VRz11:S^Ваше имя^;
!#VRz12:S^Выберите ваше заклинание^;
!#VRz13:S^%Z199\21_001.BMP^;
!#VRz14:S^%Z199\21_002.BMP^;
!#VRz15:S^%Z199\21_003.BMP^;
!#VRz16:S^%Z199\21_004.BMP^;
!#VRz17:S^Жажда крови^;
!#VRz18:S^Благословение^;
!#VRz19:S^Волшебная стрела^;
!#VRz20:S^Замедление^;
!#VRz21:S^Ваш герой начнёт с заклинанием Жажда крови^;
!#VRz22:S^Ваш герой начнёт с заклинанием Благословение^;
!#VRz23:S^Ваш герой начнёт с заклинанием Волшебная стрела^;
!#VRz24:S^Ваш героя начнёт с заклинанием Замедление^;
!#IF:D1/z10/z11/z12/z13/z14/z15/z16/z17/z18/z19/z20/z17/z18/z19/z20;
!#IF:F1/z21/z22/z23/z24/0; - установить подсказки и отменить кнопку отмены
!#IF:E100/1; - записать выбор диалога номер 1 в v100
!#VRz400:Sz1; - ваше имя
!#VRz400:H10; - Проверить, если строка осталась пустой, во флаг 10
!#VRz400&amp;-10:S^DracoL1ch^; - если строка пуста, установить имя на DracoL1ch</code></pre>
И вот что вы увидите в итоге:
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/6810cee45b45dc9b.jpg" alt="ifdm" loading="lazy" decoding="async" class="erm-figure" width="432" height="336"></div>
<h3>Использование расширенных диалоговых окон #2 - диалог одиночного изображения/анимации</h3>
<div class="erm-paragraph">Если вы хотите показать одиночное изображение или одиночный AVI-файл, вы можете 
использовать второй тип расширенных диалогов. Эти диалоги более просты для 
установки, чем многозадачные (меньше параметров), и имеют преимущество в том, 
что могут показывать изображение или видео почти любого размера. Главный 
недостаток - вы не можете включить никакой текст вместе с изображением или 
видео. Когда вы вызываете этот диалог, вы получаете простое окно сообщение с 
изображением или AVI в центре и кнопку ОК ниже. Команда для установки этого 
сообщения - <a href="./#ref-rec-if-b">IF:B</a>, и команда для показа - <a href="./#ref-rec-if-p">
IF:P</a>.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^..\Data\Chaos.gif^;
!!IF:B99/1/0;
!!IF:P99;</code></pre>
</div><div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/73da468cd33716b7.jpg" alt="ifb" loading="lazy" decoding="async" class="erm-figure" width="181" height="266"></div><br>
Но некоторое перекрывание командой <a href="./#ref-rec-if-d">IF:D</a> 
(используется для установки многозадачного диалога) - если вы используете 
команду <a href="./#ref-rec-if-d">IF:D</a> 
вместо <a href="./#ref-rec-if-b">IF:B</a>, первая картинка или AVI в таблице 
параметров будет показано командой <a href="./#ref-rec-if-p">IF:P</a>, а 
дополнительные картинки или анимации будут проигнорированы.
<h3>Расширенный диалог #3: радио- или чекбокс-диалог (до 12 опций)</h3>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!#VRz1:S^Отметьте правила для этой игры - на ваш выбор (страница 1 из 2).^;
!#VRz2:S^Атака без контрудара вместо полёта^;
!#VRz3:S^Инвертированная скорость существ^;
!#VRz4:S^Половинная стоимость существ на 7ой день^;
!#VRz5:S^Создание героями магического ландшафта^;
!#VRz6:S^Двойная атака для всех существ^;
!#VRz7:S^Растущие армии^;
!#VRz8:S^Продажа кабанов во всех внешних жилищах^;
!#VRz9:S^Начало с героями пятого уровня^;
!#VRz10:S^Дублирование артефактов^;
!#VRz11:S^Туман войны^;
!#IF:G0/100/4/1/2/3/4/5/6/7/8/9/10/11/0/0;</code></pre>
Вот так будет выглядеть диалог с использованием команды <a href="./#ref-rec-if-g">IF:G</a>
<div class="erm-align-center erm-paragraph"><img src="../../../../assets/erm/507bc28814eae0c4.jpg" alt="ifg" loading="lazy" decoding="async" class="erm-figure" width="401" height="336"></div>



</div>
</section>
:::

## Цветной текст {#ref-era-color-text}

:::erm
<section class="erm-reference" lang="ru">
<div>
<h3 class="erm-align-center">Цветной текст<a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a></h3>

<div class="erm-paragraph">Во всех игровых диалогах для текста используется комбинация из двух цветов: <span class="erm-anchor" id="ref-era-color-text-dl3"></span><span class="erm-game-text">бежево-белого и<span class="erm-anchor" id="ref-era-color-text-dl2"></span><span class="erm-game-text">золотисто-жёлтого.</span></span><br>
Обрамляя текст специальными скобками: <span class="erm-anchor" id="ref-era-color-text-erm"></span><strong class="erm-inline-code"><span class="erm-tone-red">{слово}</span></strong>, - вы выделяете его таким "жёлтым" цветом. 
Подобная практика называется «использование меток цвета».</div>
<div class="erm-paragraph">ERA добавляет в игру поддержку цветных меток в следующем формате: 
<strong class="erm-inline-code"><span class="erm-tone-red">{~название/код цвета}…текст, включая вложенные метки…{~}</span></strong><br>
Используется тот же принцип, что и в языке HTML:<br>
Открывающая метка (<strong class="erm-inline-code"><span class="erm-tone-red">{~цвет}</span></strong>) красит текст в указанный цвет до тех пор, пока не встретит метку другого цвета или закрывающую метку <strong class="erm-inline-code"><span class="erm-tone-red">{~}</span></strong>. 
Закрывающая метка возвращает предыдущий цвет.<br>
Следующий пример наглядно проиллюстрирует вышесказанное:<br>
<pre class="erm-example"><code class="language-erm">!!IF:M^Белый {~red} Красный {~gold} Золотой {~} Красный {~} Белый^;</code></pre>
В диалоге вы это увидите так: <span class="erm-game-text">Белый <span class="erm-tone-red">Красный <span class="erm-tone-accent">Золотой</span> Красный</span> Белый</span></div>
<div class="erm-paragraph">Цвет текста может быть указан либо в числовом 16-ричном виде (xxxxxx, например: ff0057), либо через зарегистрированное имя цвета.<br>
Полный список зарегистрированных 147 стандартных html-цветов можно просмотреть в 
<a href="../../tables/text-colors/#ref-form-colors" data-context="true">таблице стандартных цветов</a>.</div>
<div class="erm-paragraph">Кроме этого, сторонние модули могут регистрировать новые имена в событии <em class="erm-tone-purple erm-legacy-event">OnAfterCreateWindow</em>, 
а также для них имеется список кратких синонимов цветов:
</div><div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-era-color-text-step"></span><table class="erm-indent">
<tr><td width="30"><strong>r</strong></td><td width="60">Red</td><td width="20" style="background-color:red"></td></tr>
<tr><td><strong>o</strong></td><td>Orange</td><td style="background-color:orange"></td></tr>
<tr><td><strong>y</strong></td><td>Yellow</td><td style="background-color:yellow"></td></tr>
<tr><td><strong>g</strong></td><td>Green</td><td style="background-color:green"></td></tr>
<tr><td><strong>a</strong></td><td>Aqua</td><td style="background-color:aqua"></td></tr>
<tr><td><strong>b</strong></td><td>Blue</td><td style="background-color:blue"></td></tr>
<tr><td><strong>p</strong></td><td>Purple</td><td style="background-color:purple"></td></tr>
<tr><td><strong>w</strong></td><td>White</td><td style="background-color:white"></td></tr>
</table></div>

</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!IF:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">A заменяет первые 10 флагов; S устанавливает отмеченные, R очищает отмеченные. V задаёт конкретный флаг 1..1000 в 0/1. Системные флаги не используйте как долговременное состояние мода.</div>
<hr>
<div class="erm-paragraph">Настройка изображения/AVI: ID диалога 1..100, индекс строки имени, повтор AVI 1/0. P показывает подготовленное.</div>
<hr>
<div class="erm-paragraph">D задаёт заголовок, два описания, четыре изображения, четыре подсказки, четыре подписи выбора через индексы z. F добавляет четыре подсказки выбора и разрешение выхода. E принимает индекс v-результата и ID диалога; результат 1..4 или -1, ввод попадает в z1. Настройка не сохраняется — выполняйте перед показом.</div>
<hr>
<div class="erm-paragraph">Диалог до 12 вариантов: single 1 один/0 несколько; result — индекс v, mask — исходные биты. Нулевой индекс строки скрывает вариант. Результат — битовая маска, не номер пункта. Framework RadioDlg упрощает одиночный выбор.</div>
<hr>
<div class="erm-paragraph">L добавляет экранный журнал; M показывает сообщение; M0/4 — подсказка без кнопок; M1 использует строку. Учитывайте действующее окно и игрока-человека.</div>
<hr>
<div class="erm-paragraph">От 4 до 16 числовых параметров готовят 2..8 пар картинок. Короткая текстовая форма показывает подготовленный диалог. Не полагайтесь на старую форму N1/zN: Help отмечает подстановку z1. Для подготовки используйте PrepareMultiPicDialog.</div>
<hr>
<div class="erm-paragraph">Вопрос записывает Да/Нет во флаг. С картинками режимы 1 сообщение, 2 вопрос, 4 ПКМ-подсказка. При двух картинках 7 выбирает левую=1/правую=0; 10 пишет в v по индексу первого аргумента: 0 отмена/1 левая/2 правая. Третья картинка декоративная. Текст обязателен, хотя бы ^^.</div>
<hr>
<div class="erm-paragraph">W выбирает героя для w-переменных (-1 текущий). X задаёт вопрос Сфинкса из ZSphinx.txt (-1 случайный), правильность — флаг 1.</div>
<hr>
<div class="erm-paragraph">Для ресурсов в картинках отрицательное число означает доход в день; отрицательное количество показывается как -100000-abs(amount). Существо с количеством: subtype=count×65536+monsterId. Тексты модов храните в JSON и читайте SN:T. В ERA 3.9.30 старое поведение закрывающей } вынесено в Text.OldClosingBracketOpt; оформляйте теги сбалансированно.</div>
<hr>
<div class="erm-paragraph">ERA 3.2.0: <code>!!IF:N(msgType)/^text^/?result/textAlignment/preselectedPicId/selectablePicsMask;</code>. Маска определяет, какие уже добавленные изображения можно выбрать; -1 разрешает все. Для первого и четвёртого изображения маска 1+8=9. Остальные могут оставаться декоративными.</div></section>
:::

## Связанные материалы {#related}

[SN:T](../../receivers/sn/#ref-rec-sn-era-t) · [RadioDlg](../../framework/functions/radiodlg-show/)



## Связанные команды и таблицы {#reference-links}

[Биты, маски и HEX](../../tables/bits/) · [Отладка и совместимость ERM](../../compatibility/) · [Клики мыши (CM)](../../triggers/cm/) · [Глобальные события (GE)](../ge/) · [Картинки для IF:Q](../../tables/dialog-pictures/) · [Таблица героев](../../tables/heroes/) · [Переменные, строки и массивы](../../variables/) · [Общие игровые операции (UN)](../un/#command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill) · [Таблица существ](../../tables/creatures/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.21, +](../../compatibility/#era3-v-3-9-21-l155) — Added the following functions to Era Erm Framework: !?FU(ReadJsonIntArray); ; Reads integer array from json config into either existing dynamic array or into automatically created local one. !#VA(jsonKeyPtr:x); JSON full…
- [ERA 3.9.21, -](../../compatibility/#era3-v-3-9-21-l185) — Fixed images path prefix to use backward slashes as path delimiters in IF:D dialogs.
- [ERA 3.9.21, -](../../compatibility/#era3-v-3-9-21-l186) — Fixed IF:D dialog: cancel button should be enabled by default.
- [ERA 3.9.17, -](../../compatibility/#era3-v-3-9-17-l254) — Fixed IF:D command: parameters 3 and 4 were mixed up in places.
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l272) — Rewritten IF:D, IF:F, IF:E commands (multipurpose dialog implementation). Features: -) Whenever string is accepted as a parameter, it may be any string or string literal. The value will be copied to global settings, no m…
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l308) — Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in PvP battles. Example: !?FU(OnBattleScreenMouseClick)&i^mouse_action^=(MOUSE_R…
- [ERA 3.9.16, *](../../compatibility/#era3-v-3-9-16-l396) — Updated "wog native dialogs.era" plugin to be more tolerant of unsupported image types for IF:E dialogs.
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l438) — Modified "IF:L" command to allow any string as argument and automatically escape '%' character. Previously strings with '%' led to garbage results or even crashes.
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l479) — Added the following functions to Era Erm Framework: !?FU(Interpolate); ; Interpolates ERM variables inside given string (%v1, etc). Can be used for nested translation strings like %T(...) is json. !#VA(strPtr:x); Source …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l802) — Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting existing values in a smart way. ; The parts may have overlapping indexes. The s…
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.7, +](../../compatibility/#era3-v-3-9-7-l1031) — Added support for arrays and primitive types in language json files, because they are often used as config files. Numbers are converted to strings, booleans are converted to "0" and "1", null values are ignored (the same…
- [ERA 3.9.4, +](../../compatibility/#era3-v-3-9-4-l1094) — Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack ID to pass control to. !?FU(PrepareMultiPicDialog); ; Initializes IF:N dialo…
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1221) — Added new "OnKeyReleased" event, occuring on keyboard key release. Parameters: keyCode, preventDefault. Example: !?FU(OnKeyReleased); !#VA(key:x) (preventDefault:x); !!IF:M^Released key %(key)^;
- [ERA 3.9.2, +](../../compatibility/#era3-v-3-9-2-l1230) — Added new events to Era Erm Framework: "OnKeyReleased_AdvMap", "OnKeyReleased_Battle", "OnKeyReleased_HeroScreen", "OnKeyReleased_HeroMeetingScreen", "OnKeyReleased_Town", occuring right after "OnKeyReleased" events and …
- [ERA 3.7.0, +](../../compatibility/#era3-v-3-7-0-l1579) — Added new SN:H syntax to work with spell texts. !!SN:H^spell^/#spell_id/#spell_text_type/$text where #spell_text_type is one of SPELL_TEXT_XXX constants. This command deprecates SS usage for texts. Deletion syntax works …
- [ERA 3.5.0, +](../../compatibility/#era3-v-3-5-0-l1676) — Rewritten part of old ERM engine, which was responsible for conditions evaluations. - It's now possible to use spaces and line feeds to decorate complex conditions. Example: !!if|i^Master_Warrior_Hero%(hero)^ <> (prevWas…
- [ERA 3.4.3, +](../../compatibility/#era3-v-3-4-3-l1718) — Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1. Example: !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/?(goldAmount:y); !!VR(hasGold:y):S(goldAmount) B; now hasGold = (TRUE) or (…
- [ERA 3.4.1, +](../../compatibility/#era3-v-3-4-1-l1760) — Implemented high level API for WoG radio dialogs (IF:G). Configure dialog before showing. Optionally assign value and tag to each item. Optionally add special "cancel" item. The result is item index, value and tag. No ne…
- [Все связанные записи](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
