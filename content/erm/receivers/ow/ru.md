---
{"title":"Игроки (OW)","summary":"Ресивер OW: игроки, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Игроки (OW)"}
---

## Ресивер OW {#ref-rec-ow}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="current-owner"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ow-text"></span><div>
<span class="erm-anchor" id="ref-rec-ow-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>OW</strong> (параметры игрока) </span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-ow-red"></span><span class="erm-tone-red">!!OW:XXXX;</span> 
- этот ресивер может применять действия к конкретному игроку.</strong> <br>
Используйте эту команду для применения действий к игроку, например, установки ресурсов, команд, кол-ва героев, контролируемых игроком, 
и время, которое может прожить игрок без города.<br>
Если вы хотите дать или забрать деньги у игрока, можно использовать упрощенный синтаксис:
<pre class="erm-example"><code class="language-erm">!!OW../6/d100; – дать 100 золота
!!OW../6/d-100; – забрать 100 золота</code></pre></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-a"></span><span class="erm-anchor" id="command-a-c"></span>A#/$</strong></span><br>
Установить/проверить/получить активного героя<br>
        # – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        $ – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a> (-1 = не выбран)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-c"></span>C?$</strong></span><br>
Проверить/получить цвет текущего игрока<br>
        $ = <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a><br>
Можно только проверить или получить, но не установить.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ow-5"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ow-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
При мультиплеерной игре использование команды даст значение того игрока, кто сейчас ходит, и не важно, кто именно из игроков инициировал ERM-код.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-d"></span><span class="erm-anchor" id="command-d"></span>D#1/#2</strong></span><br>
Установить кол-во дней, сколько может держаться игрок после потери последнего замка.<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">номер игрока</a> (-1 = текущий)<br>
        #2 – дней до проигрыша (0..127) или вечная жизнь (128..254)<br>
Если вы установили 128..254, игрок не будет получать сообщения с предупреждением о потери последнего города. 
255 устанавливает стандарт в 7 дней.<br>
        #1 = -2 – установить стандартное время до проигрыша (обычно = 7).<br>
        #2 = дни (0..127; 128..255)<br>
Если вы установили 128..254, игроки будут получать сообщения о необходимости захвата замка лишь одну неделю.<br>
Если вы установите 255, игроки будут получать сообщение каждый день.<br>
Если вы захватили замок и потеряли его, устанавливается обычное кол-во, настроенное этой командой при # = -2.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-g"></span><span class="erm-anchor" id="command-g-i-1-2"></span>G$1/$2</strong></span><br>
Проверить, перед данным ли ПК сидит игрок. Мультиплеерная команда.<br>
        $1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
        $2 – проверить на игрока (1 = да, это я; 0 = нет, это другой игрок-человек)<br>
Имеет смысл только для мультиплеерной игры. Конечно, главный синтаксис – это получение значения, 
но вы можете также и установить его (но мы бы не рекомендовали пытаться это сделать :-)<br>
<strong><u>Комментарий</u>:</strong> эта команда схожа с действием <a href="../../variables/#ref-cont-flags-999">флага 999</a>, но они неравнозначны.<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-ow-3"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ow-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Допустим, вы играете по сети и вам надо запрещать пользоваться мышью в битве противнику, который ждёт своей очереди ходить..
<pre class="erm-example"><code class="language-erm">!?CM4; - триггер клика мышью на поле боя
!!BA:O?v1/?v2; - сохранить цвет игроков каждой стороны
!!BG:Q?y1; - узнать чьей стороны сейчас ход
!!VRy1:+1; - будем использовать косвенную переменную
!!VRy2:Svy1; - записать в y2 цвет игрока, чей сейчас ход
!!OW:Gy2/?y3;
!!IF&amp;y3=0:M^Извините, но сейчас не ваш ход! Ждите...^; - показать сообщение для ожидающей стороны</code></pre>
Итак, если в битве ходит левый герой, то, при попытке нажать мышью куда-либо игроком правой стороны, ему высветится 
<em>«Извините, но сейчас не ваш ход! Ждите..»</em>
</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ow-h"></span><span class="erm-anchor" id="command-h-h"></span>H#1/$2</strong></span><br>
Подсчитать и получить кол-во (номера) героев игрока.<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        #2 – номер первой <em>v</em>-переменной для записи информации<br>
В v[#2] запишется кол-во героев у игрока.
А в массив <em>v</em>-переменных, начиная с v[#2+1], запишутся все номера героев, которые есть у игрока.<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>H#1/$2/#3</strong></span><br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        #2 – номер <em>v</em>-переменной для записи информации<br>
        #3 – тип<br>
            = 0 - записать кол-во героев игрока в v[#2]<br>
            &gt; 0 - номер героя у игрока для записи его собственного номера в v[#2], 
если у игрока нет героя с таким номером, v[#2] не изменится.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ow-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ow-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!OW:H1/99/0; – записать кол-во героев синего игрока в v99
!!OW:H1/100/1; – записать номер первого героя синего игрока в v100
!!OW:H1/101/2; – записать номер второго героя синего игрока в v101
!!OW:H1/102/3; – записать номер третьего героя синего игрока в v102
!!OW:H1/103/4; – записать номер четвёртого героя синего игрока в v103</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-i"></span>I#1/$2</strong></span><br>
Установить/проверить/получить ИИ<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвет</a><br>
        $2 – контроллер<br>
         = 1 – ИИ<br>
         = 0 – человек<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>I#1/$1/$2</strong></span><br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">цвет</a><br>
        $1 – ИИ/человек<br>
         = 1 – ИИ<br>
         = 0 – человек<br>
        $2 – игрок жив (0) или мёртв (1)</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ow-k"></span><span class="erm-anchor" id="command-k"></span>K#1/#2/$<br></strong></span>
Установить/проверить/получить статус палатки ключника<br>
        #1 – игрок (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>, -1 = текущий)<br>
        #2 – номер палатки (<a href="../../tables/border-colors/#ref-form-bg" data-context="true">0..7</a>)<br>
        $ – посещена (1) или нет (0)<br>
<u>Пример:</u>
<pre class="erm-example"><code class="language-erm">!!OW:K3/4/1; – установить, что зелёный посетил коричневую палатку
!!OW:K3/4/?v123; – проверить, посетил ли зелёный коричневую палатку в v123</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-n"></span><span class="erm-anchor" id="command-n-n-n-0"></span>N#1/$2</strong></span><br>
Установить/проверить/получить активный город<br>
        #1 – хозяин (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>, -1 = текущий)<br>
        $2 – номер города (0..47, -1 – не выбран)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>N#1/#2/$</strong></span><br>
Получить номер замка, находящегося в слоте #2 таблицы замков <br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        #2 – номер слота (0..4)<br>
        $ – номер города (-1 = нет, 0..N – номер города)<br>
Можно только проверить или получить номер города, показываемого в одном из пяти слотов справа. Нельзя установить данное значение.<br>
<u>Пример:</u>
<pre class="erm-example"><code class="language-erm">!!OW:N1/3/?y10; - получить номер города в третьем слоте Синего игрока и записать его в y10</code></pre></div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>N#1/#2/#3/#4<br></strong></span>Двигать город в таблице 
замков<br>        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
        #2 – тип действия:<br>
            1 – двигать в самый верх     <br>
            2 – сдвинуть вверх на одну позицию<br>
            3 – сдвинуть вниз на одну позицию<br>
        #3 – слот города в таблице городов (0..4)<br>
        #4 – фантомный параметр (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-o"></span><span class="erm-anchor" id="command-o-1-9-o-o-0"></span>O#/$1/$2/$3/$4/$5/$6/$7/$8/$9</strong></span><br>
Проверить кол-во всех активных героев<br>
        # – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        $1 – кол-во героев<br>
        $2…$9 – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>, 
принадлежащего этому игроку (-1 = нет героя)<br>
Позволяет вам проверить номера всех активных (максимум 8) героев игрока, показанных в таблице героев 
(справа от главного окна приключений). Они также могут быть установлены, если вы хотите изменить порядок героев в таблице. 
Если у игрока менее 8 героев, их значения будут равны -1.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>O#1/#2/$</strong></span><br>
Установить/проверить номер активного героя в таблице героев. Вы можете получить номер героя, показанного в одном из 5 слотов.<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        #2 – номер слота (0..4)<br>
        $ – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a> (-1 = нет героя)<br>
Этим синтаксисом можно только проверить или получить, но не установить.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>O#1/#2/#3/#4</strong></span><br>
Сдвинуть героя в таблице<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
        #2 – тип действия:<br>
            1 = сдвинуть героя на самый верх<br>
            2 = сдвинуть героя на одну позицию вверх<br>
            3 = сдвинуть героя на одну позицию вних<br>
        #3 – слот героя (0..4)<br>
        #4 – фантомный параметр (0)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-r"></span><span class="erm-anchor" id="command-r"></span>R#1/#2/$3</strong></span><br>
Установить/проверить/получить ресурсы<br>
        #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
        #2 – <a href="../../tables/resources/#ref-form-resource" data-context="true">тип</a> ресурса<br>
        $3 – кол-во ресурса<br>
<span class="erm-anchor" id="ref-rec-ow-bold"></span><em class="erm-strong">Замечание:</em> не пытайтесь установить ресурсы во время загрузки карты 
(т.е. инструкциями или пост-инструкциями), иначе игра вылетит.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-s"></span><span class="erm-anchor" id="command-s"></span>S#1/#2</strong></span><br>
Колдовать заклинание на карте приключений<br>
        #1 – вариант (сейчас 1 или 2)<br>
Вариант 1:<br>
        #2 – номер заклинания (<a href="../../tables/spells/#ref-form-spell" data-context="true">0..9</a>). 
Будет наколдовано текущим героем.<br>Вариант 2:<br>
        #2 – фантомный параметр (скажем, 0). 
Открывается Книга Заклинаний этого героя. Это путь для
симулирования наложения заклинания на карте (что-то типа «руны обелисков»).<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ow-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ow-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
1. Книга заклинаний не необходима, и герою необязательно знать заклинание<br>
2. Уровень навыка всегда основывается на соответствующем элементальном навыке 
героя.<br>
3. Баллы заклинаний забираются у героя при окончании колдования, но если у героя 
недостаточно маны, заклинание всё равно будет выполнено (и не приведет в 
отрицательному кол-ву маны)<br>
4. Герой всё же должен иметь немного очков хода для кастования "Дверь Измерений" 
или "Городской портал" для их срабатывания.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-t"></span><span class="erm-anchor" id="command-t"></span>T#1/$2</strong></span><br>
Установить/проверить/получить команды<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
         $2 – команда (0..6, -1)<br>
<strong><u>Комментарий</u>:</strong> заметьте, что если хозяин - нейтрал (значение хозяина объекта равно -1), не нужно проверять команду. 
Если вы всё же проделаете это, то получите 0 (который в большинстве случаев означает команду с красным игроком).<br>
Если игрок не в команде, значение равно -1.<br>
<em class="erm-strong">Замечание:</em> Команды, настроенные в процессе игры, сбрасываются после каждой загрузки сохранения. 
Поэтому любые изменения команд игроков следует делать в теле триггера <a href="../../triggers/gm/#ref-tr-gm">!?GM0</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-v"></span><span class="erm-anchor" id="command-v-1-2"></span>V#1/$1/$2</strong></span><br>
Установить/проверить/получить героев, доступных в таверне.<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a> (-1 = текущий)<br>
         $1 – левый <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">герой</a> в таверне (-1 = нет)<br>
         $2 – правый <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">герой</a> в таверне (-1 = нет)<br>
Мы не можем гарантировать, что всё будет работать корректно, если вы установите одного героя нескольким игрокам.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ow-w"></span><span class="erm-anchor" id="command-w-w"></span>W#1/$1</strong></span><br>
Установить/проверить/получить кол-во городов под контролем игрока<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
         $1 – кол-во городов у игрока (0..48)<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-ow-4"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-ow-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если вам надо быстро просмотреть все города красного игрока, то..<br>
<pre class="erm-example"><code class="language-erm">!!OW:W0/?y1; - кол-во городов у красного игрока
!!FU&amp;y1&lt;1:E; - стоп, если у игрока нет городов
!!DO17/1/y1/1:P; - запустить цикл поиска городов
!?FU17; тело цикла
!!VRy1:Sx16 -1;
!!OW:W0/y1/?v1; - номер города на карте
!!CA0/v1:P?v2/?v3/?v4; - получить координаты города
!!UN:Lv2/v3/v4/1000; - показать город на карте мира на 1 сек</code></pre>
Кстати, в стандартных скриптах WoG, для этого обычно использовали команду <a href="../un/#ref-rec-un-u">UN:U</a> с перебором всех городов на карте 
и последующей проверкой их на принадлежность игроку, что гораздо дольше по времени выполнения.
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>W#1/#2/$1</strong></span><br>
Установить/проверить/получить номер города из таблицы городов игрока #1<br>
         #1 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрок</a><br>
         #2 – номер города в таблице городов игрока (0..47)<br>
         $1 – номер города на карте (0..47)</div>
<hr>












</div>
</div>
</section>
:::

## Уточнения по современным версиям ERA {#era-notes}

:::erm
<section class="erm-reference"><div class="erm-paragraph"><code>!!OW:подкоманды;</code></div>
<div class="erm-paragraph">В таблице <code>$</code> обозначает параметр с поддержкой чтения/записи, <code>#</code> — входной параметр, <code>?$</code> — выходной. Числа, имена и диапазоны уточняются для каждой команды.</div>
<hr>
<div class="erm-paragraph">A — активный герой игрока (-1 текущий), ID -1 означает отсутствие. C читает игрока, чей ход идёт; это не обязательно локальный инициатор сетевого события.</div>
<hr>
<div class="erm-paragraph">Дни без города: игрок либо -2 для общего стандарта; 0..127 число дней, 128..254 бессрочно, 255 особый стандартный режим. Изменение стандарта применяется после следующей потери города.</div>
<hr>
<div class="erm-paragraph">G проверяет локального человека 1/0. I: 1 ИИ/0 человек; необязательный второй результат 0 жив/1 выбыл.</div>
<hr>
<div class="erm-paragraph">Первый параметр игрок, второй — начальный индекс v. Двухпараметрическая форма пишет число героев и далее все ID. Третье значение 0 пишет только число; положительное выбирает героя по позиции с 1. Для отсутствующего героя приёмник не меняется.</div>
<hr>
<div class="erm-paragraph">Статус палатки: игрок, цвет палатки 0..7, посещена 1/нет 0.</div>
<hr>
<div class="erm-paragraph">Активный город; чтение ID из видимого слота 0..4; перемещение города в списке действием 1 в начало/2 вверх/3 вниз.</div>
<hr>
<div class="erm-paragraph">Число и до 8 ID активных героев (-1 пусто); чтение видимого слота 0..4; перемещение в списке действием 1/2/3 как у N.</div>
<hr>
<div class="erm-paragraph">Игрок, ресурс 0..6, количество. d прибавляет/вычитает. Старый Help запрещает менять ресурсы в ранних инструкциях/PI до готовности игрока.</div>
<hr>
<div class="erm-paragraph">1/ID вызывает приключенческое заклинание 0..9 текущего героя; 2/0 открывает книгу. Не требует знания заклинания, но использует навыки героя; для телепортаций нужны очки движения.</div>
<hr>
<div class="erm-paragraph">Команда игрока: -1 без команды, 0..6 команда. Не запрашивайте владельца -1 как нейтрала. Классические изменения восстанавливайте после загрузки через GM0.</div>
<hr>
<div class="erm-paragraph">Герои левой/правой позиции таверны, -1 отсутствует. Не назначайте одного героя нескольким игрокам одновременно.</div>
<hr>
<div class="erm-paragraph">Число городов игрока либо ID города по индексу с 0 в его полном списке; отличается от пяти видимых слотов N.</div>
<hr>
<div class="erm-paragraph">Игроки 0..7; -1 текущий допустим только в командах, где это определено. Цвет игрока, сторона боя и номер команды — разные пространства ID.</div>
<hr>
<div class="erm-paragraph">Современная форма <code>!!OW:C?(currentOwner:y)/?(thisPcOwner:y);</code> различает активного игрока и владельца на этом ПК. В сетевом коде это не одно и то же.</div></section>
:::

## Связанные материалы {#related}

[CA](../../receivers/ca/)



## Связанные команды и таблицы {#reference-links}

[Цвета игроков](../../tables/players/) · [Таблица героев](../../tables/heroes/) · [Переменные, строки и массивы](../../variables/) · [Цвета палаток и границ](../../tables/border-colors/) · [Ресурсы](../../tables/resources/) · [Таблица заклинаний](../../tables/spells/) · [Сохранение и загрузка (GM)](../../triggers/gm/) · [Общие игровые операции (UN)](../un/#command-t-town-tier-upgrade-monster-u-type-subtype-count)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.3, +](../../compatibility/#era3-v-3-4-3-l1718) — Added new ERM command VR:B. It converts any number to boolean (1 or 0). Any non-zero value becomes 1. Example: !!OW:R(CURRENT_PLAYER)/(RES_GOLD)/?(goldAmount:y); !!VR(hasGold:y):S(goldAmount) B; now hasGold = (TRUE) or (…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2143) — Extended !!OW:C command with the following syntax: OW:C?(owner)/?(thisPcOwner). It became possible to get not only current player, who may play at remote PC, but also this PC human player, who possibly waits for his turn…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
<!-- ERA3-GENERATED:END -->
