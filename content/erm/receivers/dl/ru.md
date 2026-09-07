---
{"title":"Пользовательские диалоги (DL)","summary":"Ресивер DL: пользовательские диалоги, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Пользовательские диалоги (DL)"}
---

## Ресивер DL {#ref-rec-dl}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>



<span class="erm-anchor" id="ref-rec-dl-text"></span><div>
<span class="erm-anchor" id="ref-rec-dl-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>DL</strong><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon">(нестандартные  диалоги)</span></div>
<div class="erm-paragraph">
<br><strong><span class="erm-anchor" id="ref-rec-dl-red"></span><span class="erm-tone-red">!!DL#:XXXX;</span> работа с диалогом # (#&gt;0)</strong><br>
На данный момент (TE) команда "сырая", <u>полный</u> 
функционал и описание <u>отсутствуют</u>.</div>
<span class="erm-anchor" id="ref-rec-dl-23"></span><details class="erm-comment"><summary><strong>Дополнительно</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(<span class="erm-anchor" id="ref-rec-dl-show23"></span><u class="erm-toggle-label">скрыть</u>)</summary><div class="erm-comment-body">
При использовании пользовательских диалогов часто возникают задачи/желания, решение которых штатными возможностями ЕРМ не осуществимо. 
Для таких целей опытными скриптерами были написаны особые функции влияния на память игры:
<ul><li> Показать/удалить диалог по нажатию <span class="erm-anchor" id="ref-rec-dl-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">
<pre class="erm-example"><code class="language-erm">!!SN:E5864096/1;                    [Останавливаем анимацию]
; y2 = dialog id
!!UN:Cy2/4/?v1;                     [v1 = находим наш диалог в памяти]
!!SN:E6245264/2/v1;                 [показываем окно]
!!SN:E5864272/1;                    [Возвращаем анимацию]
!!SN:E7518240/2/y2;                 [Уничтожаем HDlg]</code></pre></li>
<li>По умолчанию пользовательские диалоги отображаются в центре экрана.<br>
Для изменение координат отображения DL-диалогов, используйте такую функцию:
<pre class="erm-example"><code class="language-erm">!!DL[№]:N^Dialog.ini^;   [файл с настройкаим диалога]
!!FU(DL_ChangeCoords):P[№]/[X]/[Y];  [изменение координат диалога]
!!DL[№]:S?v1;            [вызов диалога]

!?FU(DL_ChangeCoords);
; x1 - WoG dialog id
; x2 - coord X (-1 center)
; x3 - coord Y (-1 center)
!!VRy1:Sv1;
!!SN:E7510739/1/x1;
!!VRy2:Sv1;
!!if&amp;y2&lt;&gt;0:;
  !!UN:Cy2/4/?y3;
  !!if&amp;x2&gt;=0:;  
    !!UN:Cy3/32/4/?y4;
    !!VRy5:Sy4 :2;
    !!VRx2:-y5;
    ; check for out of bounds X &lt; 0
    !!if&amp;x2&lt;0:;
      !!VRx2:S0; 
    !!el:  
      ; check for out of bounds X &gt; HD_X
      !!UN:C4199496/2/?y6;
      !!VRy7:Sy6 -16 -y4;
      !!VRx2&amp;x2&gt;y7:Sy7;
    !!en;
    ; set x coord
    !!UN:Cy3/24/4/x2;
  !!en:;
  !!if&amp;x3&gt;=0:;  
    !!UN:Cy3/36/4/?y8;
    !!VRy9:Sy8 :2;
    !!VRx3:-y9;
    ; check for out of bounds Y &lt; 0
    !!if&amp;x3&lt;0:;
      !!VRx3:S0; 
    !!el:  
      ; check for out of bounds Y &gt; HD_Y
      !!UN:C4199503/2/?y10;
      !!VRy11:Sy10 -16 -y8;
      !!VRx3&amp;x3&gt;y11:Sy11;
    !!en;    
    ; set y coord
    !!UN:Cy3/28/4/x3;
  !!en:;
!!en:;
!!VRv1:Sy1;</code></pre></li>
<li>Если по каким-то причинам рамка DL-диалога не отрисовывает соответствующие игроку цвета, то используйте в коде такую функцию:
<pre class="erm-example"><code class="language-erm">!?FU(test_DlgSetColor);
; x1 - номер диалога
!!SN:E7510739/1/x1;
!!UN:Cv1/4/?y1;
!!VRy2:Sy1 +76;
!!UN:Cy2/4/?y3;
!!OW:C?y4;
!!SN:E6288384/2/y1/512/13/y3/y4;</code></pre></li>
<li>При отлаживании элементов DL-диалога очень востребовано обновлять txt-шаблон "на лету" (без перезапуска игры).<br>
Просто выполняйте следующий код любым кликом или нажатием, для удобства:
<pre class="erm-example"><code class="language-erm">!!VRz1:S^ШАБЛОН.txt^; здесь укажите название своего шаблона
!!SN:E5620400/3/z1;
!!VRv2:Sv1+24;
!!UN:Cv2/4/1;
!!SN:E5624576/3/v1;
; Шаблон обновлён в памяти - можно смотреть вновь ваш DL-диалог ;)</code></pre></li>
</ul>
</div></details>
<span class="erm-anchor" id="ref-rec-dl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/dl/#ref-tr-dl">!?DL</a>, <a href="./#ref-rec-dl-format">Формат шаблона</a>, <a href="./#ref-rec-dl-name">Элементы шаблона</a>.</div>

<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-dl-a"></span><span class="erm-anchor" id="command-a-item-command-value-1"></span>A#1/#2/#3/1<br></strong></span>Изменить параметр элемента диалога<br>
        #1 – номер элемента<br>
        #2 – параметр:<br>
</div><span class="erm-anchor" id="ref-rec-dl-t0"></span><blockquote class="erm-margin-top-zero erm-note"><span class="erm-anchor" id="ref-rec-dl-step"></span><div class="erm-indent">
<strong></strong><span class="erm-anchor" id="ref-rec-dl-1"></span><details class="erm-comment"><summary>Подтипы любого элемента управления (<span class="erm-anchor" id="ref-rec-dl-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
52 – установить положение по X (без перерисовки) (число/числовая переменная)<br>
53 – установить положение по Y (без перерисовки) (число/числовая переменная)<br>
61 – установить ширину (без перерисовки) (число/числовая переменная)</div></details><br>
<strong></strong><span class="erm-anchor" id="ref-rec-dl-2"></span><details class="erm-comment"><summary>Подтипы def (<span class="erm-anchor" id="ref-rec-dl-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
9 – установить имя файла (текстовая переменная)<br>
4 – установить кадр (число/числовая переменная)<br>
12 – установить группу (число/числовая переменная)<br>
8 – установить CloseDialog ?<br>
10 – установить палитру (устройства) ?<br>
13 – установить используемый цвет игрока<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-3"></span><details class="erm-comment"><summary>Подтипы кнопок (<span class="erm-anchor" id="ref-rec-dl-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
9 – установить имя файла (текстовая переменная)<br>
10 – установить палитру (устройства) ?<br>
13 – установить используемый цвет игрока<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-4"></span><details class="erm-comment"><summary>Подтипы pcx (<span class="erm-anchor" id="ref-rec-dl-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
11 – установить имя файла (текстовая переменная)<br>
10 – установить палитру (устройства) ?<br>
13 – установить используемый цвет игрока<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-5"></span><details class="erm-comment"><summary>Подтипы прокрутки (<span class="erm-anchor" id="ref-rec-dl-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
49 – установить позицию (число/числовая переменная)<br>
50 – установить кол-во позиций (число/числовая переменная)<br></div></details><br>
<u></u><span class="erm-anchor" id="ref-rec-dl-6"></span><details class="erm-comment"><summary>Подтипы поля ввода (<span class="erm-anchor" id="ref-rec-dl-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
51 – установить максимальную длину (число/числовая переменная)<br>
3 – установить текст (текстовая переменная)<br>
7 – получить текст ?</div></details></div>
</blockquote>
<div class="erm-paragraph">        #3 – значение зависит от #2<br>
Последний элемент команды [1] – обновление (фантомный параметр, который лучше не игнорировать)</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-dl-bold"></span><em class="erm-strong">Замечание:</em> команда может быть вызвана в триггере <a href="../../triggers/dl/#ref-tr-dl">!?DL</a>, а также для редактирования диалога "на лету".<br>
Устанавливает флаг 1 на Истину после своего выполнения.</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red"><span class="erm-anchor" id="ref-rec-dl-c"></span><span class="erm-anchor" id="command-c"></span>C#/$2/$3</span></strong><br>
Установить особое <a href="./#ref-rec-dl-cb">callback</a>-действие ИЛИ изменить курсор мыши.
</div><pre>        # - тип действия:
	= 1 - закрыть диалог и возвратить данный код в качестве результата
	= (1000 + #) - установить курсор # (см. <a href="../../tables/cursors/#ref-form-mousepointers-c1" data-context="true">таблицу курсоров</a>)</pre>
<u></u><br><span class="erm-anchor" id="ref-rec-dl-7"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-dl-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Для данной команды вам не нужно устанавливать номер диалога в части триггера<a href="../../triggers/dl/#ref-tr-dl">!?DL</a>. 
Она сработает для активного диалога и на любой объект.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!DL:C1; - закрыть диалог
!!DL:C1000; - изменить курсор на стрелку (обычный курсор)
!!DL:C1042; - изменить курсор на "затопить корабль"</code></pre>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-dl-cb"></span><strong>Callback</strong>-действие (или функция в программировании) – это действие, 
которое будет исполнено (вызвано, если речь идёт о функции) по выходу из текущего блока кода (обычно функции).<br>
На примерах <span class="erm-anchor" id="ref-rec-dl-n1"></span><strong class="erm-tone-purple erm-strong">Славы</strong> видно, что при каждом событии диалога (таким, как движение мышью) вызывается определённая ЕRМ-функция, 
которая и управляет всей остальной логикой. В функции мы выбираем, на какие действия как реагировать, а что игнорировать. 
Команда <span class="erm-anchor" id="ref-rec-dl-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">DL</span>:C1</strong> была бы обычной функцией, если бы закрывала диалог и тут же выходила из текущего блока кода. 
Но выполнения кода идёт вплоть до конца триггера.</div></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-e"></span><span class="erm-anchor" id="command-e-h"></span>E#1/#2</strong></span><br>
Включить элемент диалога<br>
        #1 – номер элемента<br>
        #2 – включить (1) или выключить (0)<br>
<strong><u>Комментарий</u>:</strong> при выключении кнопки на элементе будет отображаться следующий кадр в def-источнике.<br>
Устанавливает флаг 1 на Истину после своего выполнения</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-h"></span>H#1/#2</strong></span><br>
Настроить подсказку для элемента диалога<br>
        #1 – номер предмета диалога<br>
        #2 – подсказка (появится при наведении мышью на элемент)<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-dl-9"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-dl-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Параметр #2 может быть глобальной или статической <em>z</em>-переменной.<br>
Команда устанавливает флаг 1 на Ложь после своего выполнения.<br>
<em class="erm-strong">Замечание:</em> если устанавливать подсказку для элемента, которому уже задана подсказка в текстовом шаблоне диалога - последует вылет игры. Но если в шаблоне подсказка для элемента НЕ задана (пустая строка) - она нормально устанавливается через <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!DL</span>:H…</strong> .</div></details>
<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-n"></span><span class="erm-anchor" id="command-n-template-txt-s"></span>Nz#<br>
N^текст^</strong></span><br>
Анализ шаблона диалога<br>
        # – имя файла шаблона (может быть текстом или любой <em>z</em>-переменной)<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-dl-8"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-dl-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Текст анализируется перед использованием.<br>
Эта команда загружает файл шаблона (если ещё не загружен), ищет диалог 
(используя Id) в файле и анализирует его.<br>
Она не показывает диалог.<br>
Главная цель этого дать нам шанс настроить загруженный диалог перед его показом.<br>
Результат:<br>
Флаг 1 = 1, если успешно<br>
Флаг 1 = 0, если случились ошибки (не найден шаблон диалога, к примеру)<br>
Формат шаблона описан <a href="./#ref-rec-dl-format">ниже</a>.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-dl-p"></span><span class="erm-anchor" id="command-p-function"></span>P$</strong></span><br>
Передать действие функции $<br>
Параметры функции:
</div><pre>        x1 – действие:
	0 – мышь двигается к другому квадрату
	12 – нажата левая кнопка
	13 – отпущена левая кнопка
	14 – нажата правая кнопка
        x2 – X-координата кликнутого квадрата
        x3 – Y-координата кликнутого квадрата
        x4 – Уровень кликнутого квадрата</pre>
<u>
</u><span class="erm-anchor" id="ref-rec-dl-10"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-dl-show10"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?OB8/11/0;
!!DL:P12345;
!!IF:M^Теперь заклинание окончилось.^;
!?FU12345;
!!if&amp;x1=0:;          мышь двигается
  !!OBx2/x3/x4:T?y1; получить тип объекта в квадрате
  !!if&amp;y1=34:;       герой?
    !!DL:C1042;      курсор "Затопить корабль"
  !!el:;
    !!DL:C1000;      курсор-стрелка
  !!en:;
  !!FU:E;
!!en:;
!!if&amp;x1=13:;         левая кнопка отпущена
  !!OBx2/x3/x4:T?y1 C?y2;
  !!if&amp;y1=34:;       герой
    !!HEy2:K;        убить героя
    !!DL:C1000;      курсор-стрелка
  !!en:;
  !!FU:E;
!!en:;
!!if&amp;x1=14:;         нажата левая кнопка
  !!DL:C1;
!!en:;</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<strong>
<span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-dl-s"></span>S$</span><br>

</strong>Показать диалог<br>
        $ – получаемый объект (активный объект при закрытии)<br>
Устанавливает флаг 1 на Ложь после своего выполнения<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-dl-11"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-dl-show11"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Показывает диалог (с определённым номером), и ждёт его закрытия. Т.е. дальнейшие команды будут выполнены не сразу, а только после закрытия диалога. Вы можете не использовать параметр вообще, тогда получаемый предмет просто проигнорируется. 
Вы можете показать один диалог "из другого" и последовательность может быть бесконечной, 
но вы можете иметь лишь ОДИН диалог одного типа на экране. Т.е. вы не можете вызвать диалог X из диалога X.</div></details>
<hr>
<h3><span class="erm-anchor" id="ref-rec-dl-format"></span>Формат шаблонов.</h3>
<div class="erm-paragraph">Это стандартный файл текстовой таблицы Героев 3.<br>
Первые две строки пропускаются (могут быть заполнены текстом или оставлены пустыми).<br>
Самый левый столбик также игнорируется (может быть заполнен текстом или оставлен пустым).</div>
<div class="erm-paragraph">В шаблоне должно быть как минимум 14 колонок. Последняя графа в характеристике пункта 
(сразу после "флаг") это всегда текст подсказки – если текстовый пункт для подсказки присутствует. 
Подсказка требует для себя места даже там, где её не надо. Если графа пуста, то и подсказки как бы нет. 
Если же шаблон "обрезан", например, до 13 колонок, то для пункта "Text" 
(как самого "длинного") вместо пустой и "невидимой" подсказки выведится надпись <span class="erm-anchor" id="ref-rec-dl-dl3"></span><span class="erm-game-text">…not 
found the text resourse…</span>.</div>
<div class="erm-paragraph">Диалог начинается со следующих строк (в порядке столбца):
</div><blockquote class="erm-note">0: пропускается (можно использовать для внутренних заметок)<br>
1: знак '#' - означает начало нового шаблона диалога<br>
2: xxx номер - уникальный Id диалога<br>
3: номер x позиции - X позиция от верхнего левого угла (-1 = центр экрана)<br>
4: номер y позиции - Y позиция от верхнего левого угла (-1 = центр экрана)<br>
5: dx номер - горизонтальный размер диалога<br>
6: dy номер - вертикальный размер диалога<br>
7: xxx номер - кол-во пунктов диалога (вы можете использовать меньше, но не больше, чем выбрали)<br>
8: xxx номер - установить цвет рамки диалога под цвет номера игрока (-1 = для текущего игрока)<br>
9: текст - имя PCX файла, который будет фоном. 
<span class="erm-anchor" id="ref-rec-dl-20"></span><details class="erm-comment"><summary><strong>Примечание</strong> (<span class="erm-anchor" id="ref-rec-dl-show20"></span><u class="erm-toggle-label">скрыть</u>)</summary><div class="erm-comment-body">
Если не указывать имя PCX файла (оставить поле пустым), то фон будет создан автоматически под указанные размеры диалога 
(стандартный фон игровых диалогов).<br></div></details><br>
10: XXX номер - Id текстового пункта, который используется как поле с описанием 'hint' 
(для игнорирования укажите пустое значение поля).</blockquote>
<div class="erm-paragraph">Следующие строки анализируются как пункты диалога до тех пор, пока не будет знака '#' в первом столбце. 
Это может быть просто пустая строка с '#', или линия с началом нового диалога.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-dl-name"></span>Самый главный элемент - первый символ в первом столбце.<br>
Поддерживаемые на данный момент элементы:</div>
<div class="erm-paragraph"><u></u></div><span class="erm-anchor" id="ref-rec-dl-12"></span><details class="erm-comment"><summary>'P' - PCX рисунок (<span class="erm-anchor" id="ref-rec-dl-show12"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'P'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: dx номер - горизонтальный размер пункта<br>
6: dy номер - вертикальный размер пункта<br>
7: текст - имя PCX файла<br>
8: флаги - для 'P'-элемента значение равно 2048<br>
9: 'hint' - выводимый текст в диалоговом поле описания при наведении курсора на данный элемент диалога</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-13"></span><details class="erm-comment"><summary>'D' - кадр DEF рисунка (<span class="erm-anchor" id="ref-rec-dl-show13"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'D'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: dx номер - горизонтальный размер пункта<br>
6: dy номер - вертикальный размер пункта<br>
7: текст - имя DEF файла<br>
8: кадр - изображения внутри DEF'а для вывода<br>
9: флаги - для 'D'-элемента значение равно 16<br>
10: 'hint' - выводимый текст в диалоговом поле описания при наведении курсора на данный элемент диалога</div></details>
<div class="erm-paragraph">
<strong>'A' - анимированный DEF рисунок</strong><br>
 Ещё не поддерживается</div>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-14"></span><details class="erm-comment"><summary>'B' - кнопка (особый DEF) (<span class="erm-anchor" id="ref-rec-dl-show14"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'B'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: dx номер - горизонтальный размер пункта<br>
6: dy номер - вертикальный размер пункта<br>
7: текст - имя DEF файла<br>
8: флаги -  для 'B'-элемента значение соответствует игровому коду <span class="erm-anchor" id="ref-rec-dl-21"></span><details class="erm-comment"><summary><strong>горячей клавиши</strong> (<span class="erm-anchor" id="ref-rec-dl-show21"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
<div class="erm-indent erm-paragraph"><img src="../../../../assets/erm/ce4395ac72421f21.png" alt="hkeys" loading="lazy" decoding="async" class="erm-figure"></div></div></details><br>
9: 'hint' - выводимый текст в диалоговом поле описания при наведении курсора на данный элемент диалога<br>
<div class="erm-tone-quote erm-note erm-paragraph"><em class="erm-strong">Замечание</em>: в DEF'е кнопки должно быть как минимум 2 кадра. При нажатии на 
кнопку показывается второй кадр. Также при отключении кнопки (переводе элемента 
диалога в режим выключен) показывается второй кадр. Например, если вы сделаете 
кнопкой DEF с заклинаниями, то будет изображено заклинания "Вызов лодки", а при 
нажатии или выключении вы увидите следующее заклинание - "Затопить лодку".<br>
При нажатии на кнопку (не удерживая) происходит выход из диалога (выход в предыдущий диалог, 
если диалог был открыт из другого диалога, и, конечно, кнопка должна быть включена).</div>
<div class="erm-paragraph"><u>Совет</u> от <strong class="erm-tone-purple erm-strong">Master</strong>'а: кнопкам всегда лучше давать отрицательные идентификаторы (Id = -32768…-1). 
Это гарантированно исключит совпадения и конфликты с прочими элементами геройских окон (других кнопок, надписей, картинок, DEF'ов и пр.), 
многие из которых незадокументированы в ERM-справке. Отрицательные Id работают совершенно нормально, но в геройском коде никогда не встречаются.</div></div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-15"></span><details class="erm-comment"><summary>'T' - текст (<span class="erm-anchor" id="ref-rec-dl-show15"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'T'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: dx номер - горизонтальный размер пункта<br>
6: dy номер - вертикальный размер пункта<br>
7: текст - текст (может быть пустым и заполняться позже)<br>
8: шрифт - имя файла шрифта<br>
9: цвет - цвет текста (<a href="./#ref-rec-dl-color">см. ниже</a>)<br>
10: bkcol - <span class="erm-anchor" id="ref-rec-dl-25"></span><details class="erm-comment"><summary><strong>цвета фона</strong> (<span class="erm-anchor" id="ref-rec-dl-show25"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
<br>
<div class="table-wrap erm-reference-table"><table class="erm-tone-text">
<tr class="erm-small">
	<td width="20">0</td>
	<td width="20">-1</td>
	<td width="20">-4</td>
	<td width="20">-13</td>
	<td width="20">-18</td>
	<td width="20">4</td>
	<td width="20">33</td>
	<td width="20">-16</td>
	<td width="20">-14</td>
	<td width="20">9</td>
	<td width="20">35</td>

	<td width="20">6</td>
	<td width="20">2</td>
	<td width="20">24</td>
	<td width="20">22</td>
	<td width="20">3</td>
	<td width="20">-5</td>
	<td width="20">-11</td>
	<td width="20">23</td>
	<td width="20">8</td>

	<td width="20">12</td>
	<td width="20">11</td>
	<td width="20">16</td>
	<td width="20">25</td>
	<td width="20">10</td>

	<td width="20">-6</td>
	<td width="20">1</td>

	<td width="20">-12</td>
	<td width="20">-10</td>
	<td width="20">5</td>
	<td width="20">7</td>
	
	<td width="20">13</td>
</tr><tr>
	<td class="erm-align-center" height="22">-</td>
	<td style="background-color:black"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:blue"></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:Aqua"></td>

	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:lime"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>

	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>

	<td></td>
	<td></td>

	<td></td>
	<td></td>
	<td></td>
	<td></td>
	
	<td style="background-color:white"></td>
</tr><tr><td class="erm-small"> </td></tr></table></div>
</div></details><br>
11: выравнивание - <a href="../../tables/text-alignment/#ref-form-align" data-context="true">выравнивание текста</a><br>
12: флаги - для 'T'-элемента значение равно 8<br>
13: 'hint' - выводимый текст в диалоговом поле описания при наведении курсора на данный элемент диалога</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-16"></span><details class="erm-comment"><summary>'S' - текст с вертикальной прокруткой (<span class="erm-anchor" id="ref-rec-dl-show16"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'S'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: dx номер - горизонтальный размер пункта<br>
6: dy номер - вертикальный размер пункта<br>
7: текст - текст (может быть пустым и заполняться позже)<br>
8: шрифт - имя файла шрифта<br>
9: цвет - цвет текста (<a href="./#ref-rec-dl-color">см. ниже</a>)<br>
10: цвет2 - цвет полосы прокрутки (0 = не окрашивать; любое другое значение = окрасить синим)<br>
11: 'hint' - выводимый текст в диалоговом поле описания при наведении курсора на данный элемент диалога (работает только, если элемент прокрутки имеет id=-1)<br></div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-17"></span><details class="erm-comment"><summary>'E' - отредактированный текст (<span class="erm-anchor" id="ref-rec-dl-show17"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'E'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: dx номер - горизонтальный размер пункта<br>
6: dy номер - вертикальный размер пункта<br>
7: текст - текст (может быть пустым и заполняться позже)<br>
8: шрифт - имя файла шрифта<br>
9: 'hint' - выводимый текст в диалоговом поле описания при наведении курсора на данный элемент диалога</div></details>
<div class="erm-paragraph">
<u></u></div><span class="erm-anchor" id="ref-rec-dl-18"></span><details class="erm-comment"><summary>'V' - SMK или BIK видео (<span class="erm-anchor" id="ref-rec-dl-show18"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
0: пропускается<br>
1: 'V'…<br>
2: xxx номер - уникальный Id пункта<br>
3: номер x позиции - X позиция в диалоге от верхнего левого угла<br>
4: номер y позиции - Y позиция в диалоге от верхнего левого угла<br>
5: номер видео - внутренний номер <a href="../../tables/videos/#ref-form-video" data-context="true">игрового видео</a><br>
Видео выводится поверх любых других пунктов диалога и не имеет поддержки 'hint' описания. 
Это значит, что вам нужно следить, чтобы видео не вылазило за границы окна диалога, 
чтобы не получить проблем с перерисовкой.<br>
Также вы можете использовать только одно видео за диалог.</div></details>
<div class="erm-paragraph">
<em>Примечания:</em><br>
Вы можете хранить больше одного диалога в файле шаблона.<br>
Вы не должны использовать одинаковые Id диалогов в различных файлах шаблонов. 
Каждый диалог должен иметь свой унильный Id. Это также значит, что некоторые Id будут заняты под WoG-диалоги.<br>
Пункт с номером 30721 - пункт отмены по умолчанию. Так, если игрок нажимает кнопку <span class="erm-key">ESC</span> когда выведен диалог - диалог закроется.</div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-dl-color"></span>
<u></u></div><span class="erm-anchor" id="ref-rec-dl-19"></span><details class="erm-comment"><summary>Цвета текста (<span class="erm-anchor" id="ref-rec-dl-show19"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="table-wrap erm-reference-table"><table>
<tr class="erm-small">
	<td width="18"> </td>
	<td width="18">0</td>
	<td width="18">1</td>
	<td width="18">2</td>
	<td width="18">3</td>
	<td width="18">4</td>
	<td width="18">5</td>
	<td width="18">6</td>
	<td width="18">7</td>
	<td width="18">8</td>
	<td width="18">9</td>
	<td width="18">10</td>
	<td width="18">11</td>
	<td width="18">12</td>
	<td width="18">13</td>
	<td width="18">14</td>
	<td width="18">15</td>
	<td width="18">16</td><td></td>
</tr><tr>
	<td>Цвет текста (для элементов 'T' и 'S')</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:white"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td style="background-color:white"></td>
	<td></td>
	<td style="background-color:lime"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr><tr><td><br><br><br><br><br><br><br><br><br><br></td><td colspan="18"><span class="erm-anchor" id="ref-rec-dl-24"></span><details class="erm-comment"><summary>ещё цвета…</summary><div class="erm-comment-body">
<em>Белый: 17, 18, 30 <br>
Светло-жёлтый: 19, 21, 22<br>
Жёлтый: 20, 29<br>
Светло-зелёный: -6<br>
Зелёный: -10, -4, 25<br>
Голубой: -8, 26<br>
Синий: 24<br>
Фиолетовый: 28<br>
Красный: 27<br>
Тёмно-красный: -2<br>
Чёрный: -9, -7, -5, -3, -1, 23</em></div></details></td>
</tr></table></div>
</div></details>

</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!DL#id:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">N загружает и разбирает шаблон для выбранного ID, не показывает его; флаг 1 сообщает успех. S показывает и ждёт закрытия, выход — активный элемент при закрытии.</div>
<hr>
<div class="erm-paragraph">Команды элемента: 52 X, 53 Y, 61 ширина; DEF 9 имя/4 кадр/12 группа/13 цвет игрока; PCX 11 имя; прокрутка 49 позиция/50 число позиций; поле ввода 51 длина/3 текст. Последняя 1 — классический служебный параметр. ERA 3.0.4 принимает строки непосредственно и устраняет сбой при пропущенном четвёртом аргументе.</div>
<hr>
<div class="erm-paragraph">C1 назначает закрытие активного диалога после обработчика, не прерывая оставшийся ERM-код. C(1000+cursor) меняет курсор.</div>
<hr>
<div class="erm-paragraph">E включает элемент 1/выключает 0. H задаёт подсказку; в старой реализации нельзя заменять уже непустую подсказку шаблона — оставьте её пустой при создании.</div>
<hr>
<div class="erm-paragraph">Запускает выбор клетки карты с callback: x1 действие 0 движение/12 ЛКМ вниз/13 ЛКМ вверх/14 ПКМ, x2/x3/x4 координаты. DL:C1 завершает этот режим.</div>
<hr>
<div class="erm-paragraph">ID диалога уникален между файлами. Нельзя одновременно показать второй экземпляр того же ID из первого. Для перемещения, цвета рамки и ПКМ-показа используйте DL_* функции Framework.</div></section>
:::

## Связанные материалы {#related}

[DL](../../triggers/dl/) · [Шаблон / Template](../../tables/dialog-templates/) · [Framework](../../framework/functions/)



## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Событие пользовательского диалога (DL)](../../triggers/dl/) · [Курсоры мыши](../../tables/cursors/#c1) · [Выравнивание текста DL](../../tables/text-alignment/) · [Игровое видео](../../tables/videos/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l436) — Fixed DL:H command. Any string is accepted as hint. The hint is copied to a dialog internal location and automatically freed on dialog closing. No more need to use global z-variables for custom dialog hints. Hints are no…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2214) — Added the following functions to "Era Erm Framework" mod: !?FU(GetTimeMsec); ; Returns current time in milliseconds (time from computer start, overflowing each 49.71 days) !#VA(result:x); !?FU(PackUnion); ; Safely packs …
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2618) — Added the following functions to "Era Erm Framework" mod: !?FU(NewIntArray); ; Creates and returns trigger local array of integers. ; Alternative function arguments: ; (?result) The result array will have 0 items. ; (siz…
- [ERA 3.0.4, +](../../compatibility/#era3-v-3-0-4-l3387) — Improved ERM stability. Now all non-specified parameters are treated as 0 in X# syntax and ignored in X$ syntax. As a result, !!DL:A without the 4-th parameter will not randomly crash anymore and !!TR may be used with an…
- [ERA 3.0.4, +](../../compatibility/#era3-v-3-0-4-l3391) — !!DL:A was improved, accepting any string including string literal as the 3-d parameter.
- [ERA 3.0.4, -](../../compatibility/#era3-v-3-0-4-l3402) — Fixed WoG bug, disallowing to set dialog hints twice using DL:H command. Credits: gamecreator.
<!-- ERA3-GENERATED:END -->
