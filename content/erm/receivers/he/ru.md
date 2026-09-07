---
{"title":"Герои (HE)","summary":"Ресивер HE: герои, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Герои (HE)"}
---

## Ресивер HE {#ref-rec-he}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-a1-1-2"></span><span class="erm-anchor" id="command-a2-1-2-a3-a4"></span><span class="erm-anchor" id="command-c0-1-2-3-4-c1-1-2-3-4"></span><span class="erm-anchor" id="command-c2-c-1-14-d"></span><span class="erm-anchor" id="command-l1-file-l2-file-l0-l3-l4-l5-1-2"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-he-text"></span><div>
<span class="erm-anchor" id="ref-rec-he-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>HE</strong> (опции героя)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-he-red"></span><span class="erm-tone-red">!!HE#:XXXX;</span> – герой с номером #.</strong> Герой - <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 34</a>.<br>
Каждый герой в игре имеет свой уникальный <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер</a>.<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>!!HE#1/#2/#3:XXXX;</strong></span> – герой в определённых координатах X Y L<br>
<span class="erm-tone-red"><strong>!!HE-1:XXXX;</strong></span> – герой, активировавший триггер. 
Данная команда существенно упрощает скрипт, так как вам не нужно при каждом вызове ресивера HE сохранять координаты героя.<br>
Используется для изменения характеристик, войск, инвентаря, навыков, местоположения и просто всего, что можно вообразить, над героем. 
Также позволяет наложить проклятье или благословение.<br>
<strong><u>Комментарий</u>:</strong> вы можете использовать косвенные ссылки на героев (копии информации):
<pre class="erm-example"><code class="language-erm">!!HE-10:...; применить изменения к атакующему герою
!!HE-20:...; применить изменения к защищающемуся герою</code></pre></div>
<span class="erm-anchor" id="ref-rec-he-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/he/#ref-tr-he">!?HE</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-a"></span><span class="erm-anchor" id="command-a"></span>A#</strong></span><br>
Получить/дать/убрать артефакт<br>
        # – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a><br>
Если # &gt; 0, артефакт будет добавлен<br>
Если # &lt; 0, артефакт будет удалён из всех слотов.<br>
<span class="erm-anchor" id="ref-rec-he-bold"></span><em class="erm-strong">Замечание:</em> полученный этой командой артефакт не будет одет автоматически, а будет помещён в рюкзак. 
Если же рюкзак заполнен полностью (содержит 64 артефакта), то герой указанный командой артефакт не получит.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-38"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show38"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE106:A-1; - удалить все свитки с заклинаниями у Дессы (герой #106)</code></pre></div></details>
<u></u> <span class="erm-anchor" id="ref-rec-he-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"><ul>
<li>Eсли вы удаляете артефакт, добавляющий заклинание герою, с помощью ERM 
(HE:A- или <a href="./#ref-rec-he-a3">HE:A3</a>), заклинание исчезнет из книги героя навсегда.<br>
</li><li>Eсли вы удаляете артефакт командой !!HE:A-, бонусы снимутся корректно, но если вы удалите его командой HE:A3, это не уберёт бонусы.<br>
</li><li>Eсли вы удаляете комбо-артефакт командой HE:A-, заблокированные слоты разблокируются, но если вы удалите его командой HE:A3, блок не уберётся!</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>A1/$1/$2</strong></span><br>
Надеть артефакт<br>
        $1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a><br>
        $2 – <a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">позиция</a>, куда надевать<br>
Если слот занят, флаг 1 устанавливается на 0.<br>
Чтобы узнать, какой артефакт размещён в определённом слоте, используйте синтаксис получения первого параметра ($1):<br>
<span class="erm-anchor" id="ref-rec-he-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:A1/?@/x;</strong> - где @ - <a href="../../variables/#ref-cont-flags-var">переменная</a> для сохранения результата, 
x - номер проверяемого <a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">слота</a>. 
Если артефакта нет, значение переменной равно -1.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"><ul>
<li>Eсли вы используете HE:A1, чтобы надеть герою артефакт, дающий какие-либо заклинания (Том магии, Свиток заклинания или Шляпу Оратора), 
то они не добавятся, пока игрок сам не снимет и не наденет обратно артефакт. 
Новая команда <a href="./#ref-rec-he-a4">HE:A4</a>, добавленная в 3,58, корректно даст заклинания герою.
</li><li>Eсли вы используете команду HE:A1 для экипировки артефакта, он будет надет, независимо от того, блокирован ли он или занят. 
Опять же, команда HE:A4 будет надевать артефакты только на не заблокированные и не занятые слоты.</li></ul></div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>A2/$1/?$2/?$3</strong></span><br>
Подсчитать кол-во артефактов (получить или проверить):<br>
        $1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a><br>
        $2 – получить кол-во артефактов $1 у героя (получить или проверить)<br>
        $3 – получить кол-во артефактов $1, надетых на героя (получить или проверить)<br>
Кол-во невозможно установить. При попытке установки кол-ва ничего не произойдёт.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-a3"></span><span class="erm-tone-red"><strong>A3/$1/$2/$3</strong></span><br>
Удалить несколько копий артефакта:<br>
        $1 – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a> <br>
        $2 – кол-во копий для удаления<br>
        $3 – удалить сначала надетые (1) или в рюкзаке (0)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-39"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show39"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"><ul>
<li>Если артефакт давал заклинание, оно не удалится из книжки героя
</li><li>Если артефакт был удалён этой командой, то все закрытые слоты и бонусы останутся на прежних местах.
</li><li>Удаление этой командой не обновляет в памяти значение числа артефактов в рюкзаке, что может привести к невозможности размещения любого нового артефакта 
(даже, если номинально в рюкзаке ещё есть место; вместимость рюкзака - 64 объекта)</li></ul>
<u>Пример</u> от <span class="erm-anchor" id="ref-rec-he-n1"></span><strong class="erm-tone-purple erm-strong">Algor</strong>'а:<br>
Корректное удаление надетого свитка с заклинанием.<br>
Заклинание у героя удалится, если оно давалось только этим свитком.
<pre class="erm-example"><code class="language-erm">!!HE-1:A3/y1/1/1 A4/1080 A3/1080/1/1;
; y1 - номер свитка = 1001 + [номер заклинания]</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-a4"></span><span class="erm-tone-red"><strong>A4/#</strong></span><br>
Надеть <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт #</a>. Теперь вы можете добавлять заклинания артефактов автоматически. 
Также решена проблема заблокированных слотов. Фактически, здесь используется внутренняя функция получения артефакта. 
Если артефакт может быть надет, он надевается.</div>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-b0"></span><span class="erm-anchor" id="command-b0-b1-b2-b3"></span>
<span class="erm-tone-red"><strong>B0/$</strong></span><br>
Установить/получить имя героя<br>
        $ - текстовая переменная.<br>
<em class="erm-strong">Замечание:</em> в биографии имя не изменится!</div>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-b1"></span>
<span class="erm-tone-red"><strong>B1/$</strong></span><br>
Установить/получить биографию героя<br>
        $ - текстовая переменная.<br>
Если биография или имя героя такое же, как и по умолчанию, вы получите пустую текстовую переменную, а не стандартный текст.</div>
<hr><div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-b2"></span>
<span class="erm-tone-red"><strong>B2/$</strong></span><br>
Установить/получить класс героя<br>
        $ – класс (<a href="../../tables/hero-classes/#ref-form-heroesclasses" data-context="true">0..17</a>)<br>
Разделите полученное значение на 2 и вы получите <a href="../../tables/towns/#ref-form-towns" data-context="true">тип города</a> героя.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-3"></span><details class="erm-comment"><summary>Дополнительно (<span class="erm-anchor" id="ref-rec-he-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Значение 18, 19, 20 установит внешний вид героя на лодку - тёмную, светлую и узкую соответственно. При значении 18 можно заходить в окно героя, 
в случае 19 и 20 это приведёт к критической ошибке (даже простая наводка курсора на изменённого героя), вступление в битву тоже вызовет критическую ошибку во всех трех формах. 
Класс 21,22 представляет собой след от движения лодки игрока, любые вызовы программы на получение класса героя закончатся вылетом игры 
(наведение курсора, заход в окно героя и т.п.). Класс выше 23 - почти то же, что и 21, но со следующим по номеру флагом игрока поверх флага текущего. 
В общем, идёт по DEF'ам из <em class="erm-legacy-file">H3sprite.lod</em>, добавляя/заменяя героя новой анимацией.<br>
<u>Пример</u>:
Давайте узнаем, отталкиваясь от класса героя, кто он по жизни ;-)
<pre class="erm-example"><code class="language-erm">!!HE-1:B0/?z1 B2/?v2;   получаем имя (в z1) и класс (в v2) текущего героя
!!VRv2:%2;		получаем остаток от деления на 2
!!VRz2&amp;v2=0:S^воина^;	
!!VRz2&amp;v2=1:S^мага^;
!!IF:M^Герой %Z1 выбрал путь %Z2.^;</code></pre></div>
<div class="erm-paragraph">Стоит отметить, что существует возможность изменения названия классов героев, используя возможности <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Вот пример готовой функции от <strong class="erm-tone-purple erm-strong">igrik</strong>'а: </div><span class="erm-anchor" id="ref-rec-he-44"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-he-show44"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(WOG_CreateERMHook);
!!SN:Ex1/1/5083661/(SetHeroClassName1);
!!SN:Ex1/1/5093760/(SetHeroClassName2);
!!SN:Ex1/1/5094903/(SetHeroClassName2);
!!SN:Ex1/1/5119462/(SetHeroClassName3);

!?FU(SetHeroClassName1);
!!SN:X?y1/0; !!VRy2:Sy1 +24;
!!FU(GetHeroClassName):Py2/?y4;
!!VRy3:Sy1 +28; !!UN:Cy3/4/y4;
!!VRy5:Sy1 +32; !!UN:Cy5/4/5083660;

!?FU(SetHeroClassName2);
!!SN:X?y1; !!VRy2:Sy1 +24;
!!FU(GetHeroClassName):Py2/?y4;
!!VRy3:Sy1 +28; !!UN:Cy3/4/y4;

!?FU(SetHeroClassName3);
!!SN:X?y1; !!VRy2:Sy1 +28;
!!FU(GetHeroClassName):Py2/?y4;
!!VRy3:Sy1 +24; !!UN:Cy3/4/y4;

!?FU(GetHeroClassName);
; x1 - указатель на структуру героя
; x2 - адрес ссылки на текст (возвращаем)
!!UN:Cx1/4/?y1; 
!!VRy1:+26; 
!!UN:Cy1/4/?x1; [x1 - теперь номер героя]

** устанавливаем все названия классов героев из ERT
!!SN:E7824928/1/[номер ERT переменной];  [все герои будут иметь название класса из указанной ERT переменной]
!!SN&amp;x1=28:E7824928/1/[номер ERT переменной];  [герой 28 Мальком будет иметь своё название класса из другой ERT переменной]
!!VRx2:Sv1;</code></pre></div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>B3/?$</strong></span><br>
Получить оригинальную биографию героя в текстовую переменную (z).<br>
Эта команда всегда будет получать текст по умолчанию, независимо от того, изменяли ли вы текст биографии или нет.<br>
Вы можете использовать только синтаксис получения, как например:
<pre class="erm-example"><code class="language-erm">!!HE0:B3/?z25; записать биографию Оррина в переменную z25</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-c"></span><span class="erm-anchor" id="command-c-experience-modes"></span>C0/#1/$2/$3</strong></span><br>
Изменить монстров<br>
        #1 – номер слота (0..6)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
        $3 – кол-во монстров
<pre class="erm-example"><code class="language-erm">; Уволить всю армию текущего героя:
!!HE-1:C0/0/-1/0 C0/1/-1/0 C0/2/-1/0 C0/3/-1/0 C0/4/-1/0 C0/5/-1/0 C0/6/-1/0;</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>C1/#1/$2/$3</strong></span><br>
Изменить монстров: все монстры <a href="../../tables/creatures/#ref-form-creature" data-context="true">типа #</a> будут изменены на<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
        $3 – кол-во<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-4"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:C1/0/1/d20; добавить 20 юнитов в каждый слот с копейщиками (d20) и заменить всех копейщиков (0) на алебардщиков (1)</code></pre>
Если использовать значение -1 в $2 или 0 в $3, все существа данного типа будут удалены из героя:
<pre class="erm-example"><code class="language-erm">!!HE-1:C1/143/-1/0; прогнать всех Воров из войска</code></pre>
Вы также можете получить кол-во ($3). Нахождение кол-ва позволяет быстро проверить, имеет ли герой существ данного типа, без использования <a href="../do/#ref-rec-do">циклов</a>. 
Но, если герой имеет несколько отрядов, вы получите кол-во существ данного типа в последнем (!) слоте с такими монстрами.
<br>Например, активный герой имеет такое войско:<br> 
<img src="../../../../assets/erm/f46ad655a407bf5b.gif" alt="!!HE-1:C1/0/1/d20; добавить 20 юнитов в каждый слот с копейщиками (d20) и заменить всех копейщиков (0) на алебардщиков (1) Если использовать значение -1 в $2 ил" loading="lazy" decoding="async" class="erm-figure" width="466" height="78"><br>
<pre class="erm-example"><code class="language-erm">Тогда команда !!HE-1:C1/94/?y11/?y12; даст нам y11=94, y12=9  - т.е. найдёт нам Циклопов (94)
А, вот команда !!HE-1:C1/96/?y11/?y12; возвратит y11=0, y12=0 - в армии нет Чудищ (96)</code></pre></div></details>
<hr>
<div class="erm-paragraph"><em>Расширение синтаксиса для команд C0 и C1:<br>
</em><span class="erm-tone-red"><strong>C#/#1/$2/$3/$4/$5</strong></span> <br>
        $4 – кол-во опыта (по умолчанию 0)<br>
        $5 – модификатор опыта (по умолчанию 0)<br></div>
<div class="erm-paragraph">        Поддерживаемые значения для $5:<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-5"></span><details class="erm-comment"><summary>Мод 0 (<span class="erm-anchor" id="ref-rec-he-show5"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для добавления существ, уже имеющих опыт. Новые существа будут иметь опыт в кол-ве $4, 
но старые существа (если вы "добавляете" монстров) сохранят свой опыт. Результат кол-ва опыта на существо можно подсчитать:<br>
<span class="erm-anchor" id="ref-rec-he-step"></span><div class="erm-indent erm-paragraph"><strong>Опыт</strong> = [ОпытСтарых * кол-воСтарыхСуществ + ОпытНовых * кол-воНовых] / [кол-воСтарых + кол-воНовых]
</div><ol>
	<li>Скажем, вы имеет стек Монахов с 1000 опыта (здесь и далее - на существо) и хотите добавить 5 Монахов с опытом 3000.<br>
	Результатом будет: (1000*10+300*5)/15=1666
	<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d100/5000/0; Добавить к 0-ому стеку 100 существ с опытом 5000.</code></pre></li>
	<li>Если вы добавляете существ разных типов, учитывается только опыт новых существ.<br>
	Так, если вы имеете 10 Грифонов с опытом 1000 и хотите добавить 5 Монахов с опытом 3000. Результатом будет 3000;</li>
</ol>
Это используется во избежание проблемы, когда вы сдвигаете стеки из одного слота в другой и опыт смешивается.<br>
Скажем, вы помещаете стек Грифонов в слот 1 и затем изменяете их в Монахов, случайно забыв изменить опыт 
(так что это стек Монахов, хотя система думает, что это стек Грифонов). Теперь, добавляя Монахов, 
система будет думать, что вы изменили тип существ и возьмёт только опыт новых существ.
<span class="erm-anchor" id="ref-rec-he-q2"></span><blockquote class="erm-tone-quote erm-note"><strong>Исключение:</strong> если стек ещё не получил опыта, опыт будет усреднён, как будто вы добавили их без смены типа (как мод 1, см. ниже).</blockquote>
<em class="erm-strong">Замечание:</em> не используйте параметр "d" для $4 с модом 0.</div></details>
<u></u> <span class="erm-anchor" id="ref-rec-he-6"></span><details class="erm-comment"><summary>Мод 1 (<span class="erm-anchor" id="ref-rec-he-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Похож на мод 0, за исключением того, что здесь нет проверки на тип существа. Так что команда всегда работает в соответствии с формулой (выше), 
независимо от опыта и имеющихся у вас существ.<br>
<u>Пример</u>:<br>
Вы хотите установить существ в слоте как Копейщиков и они должны иметь опыт (на существо) предыдущих существ слота (кто бы они ни были) плюс 7 новых существ с 
50 очками опыта.
<pre class="erm-example"><code class="language-erm">!!HE...:C0/1/0/d7/50/1;</code></pre>
<em class="erm-strong">Замечание:</em> не используйте параметр "d" для $4 с модом 1.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-7"></span><details class="erm-comment"><summary>Мод 2 (<span class="erm-anchor" id="ref-rec-he-show7"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для установки опыта для всего стека.<br>
Стек будет иметь $4 опыта.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5000/2; Стек имеет 5000 опыта</code></pre>
<em class="erm-strong">Замечание:</em> если вы используете параметр "d" для $4 с модом 2, опыт будет добавлен к существующему (как мод 3, см. ниже).</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-8"></span><details class="erm-comment"><summary>Мод 3 (<span class="erm-anchor" id="ref-rec-he-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для добавления опыта стеку.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5000/3; Стек получит добавочные 5000 опыта.</code></pre>
Новые существа примут опыт старых существ плюс $4. Опыт не распределяется.<br>
Так, если вы имеете стек с 10 Монахами с 1000 опыта, хотите добавить 5 монахов и добавить 3000 опыта модом 3, результатом будет: 1000+3000=4000.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d5/3000/3; Стек получит +5 существ и +3000 опыта.</code></pre>
Вы также можете использовать этот мод для добавления существ к стеку без уменьшения опыта стека, 
либо изменения типа существ стека, сохраняя опыт неизменным.<br>
Вы можете использовать этот модификатор для временного изменения типа существа, 
так как после возврата в обычное состояние он сохранит весь свой опыт.<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/1/0/d/0/3;
!!HE...:C0/1/99/d/0/3;
!!HE...:C0/1/0/d/0/3;</code></pre>
<em class="erm-strong">Замечание:</em> если вы используете параметр "d" для $4 с модом 3, работа идёт так:<br>
<blockquote class="erm-note">ОпытСтека = СтарыйОпыт+СтарыйОпыт+ДополнительныйОпыт.</blockquote>
Так, если вы имели стек с 2000 опыта, и добавите таким методом 1000 опыта, получится 2000+2000+1000=5000.<br>
Затем, если вы добавите ещё 1000 опыта, получите 5000+5000+1000=11000.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-9"></span><details class="erm-comment"><summary>Мод 4 (<span class="erm-anchor" id="ref-rec-he-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для добавления уровней опыта (рангов) стеку.<br>
Новые существа получат опыт старых существ плюс опыт, равный рангу $4.<br>
Опыт не распределяется.<br>
Так, если вы имели стек из 10 Монахов с 1000 опыта и хотите добавить 5 Монахов и 3 уровня опыта, результат 1000+3ранга = ????<br>
Используем следующие подсчёты:<br>
 - мы имеет E опыта<br>
 - получаем текущий уровень опыта стек L0<br>
 - получаем кол-во опыта E0 для уровня L0<br>
 - получаем: dE как E-E0<br>
 - мы имеем бонус уровня L<br>
 - получаем результирующий уровень L1 как L0+L<br>
 - получаем кол-во опыта E1 для уровня L1<br>
 - получаем финальный опыт E как E1+dE<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5/4; Стек получит +5 уровней опыта.</code></pre>
<em class="erm-strong">Замечание:</em> не используйте параметр "d" для $4 с модом 4.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-10"></span><details class="erm-comment"><summary>Мод 5 (<span class="erm-anchor" id="ref-rec-he-show10"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод, если вы улучшаете существ.<br>
Похож на мод 3, но опыт новых существ получается эквивалентным улучшению существ. 
Новый опыт будет старым опытом, помноженный на множитель улучшения плюс бонус опыта.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/500/5; Стек будет иметь опыта как улучшенный + 500 опыта.</code></pre>
<em class="erm-strong">Замечание:</em> не используйте параметр "d" для $4 с модом 5.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-11"></span><details class="erm-comment"><summary>Мод 10 (<span class="erm-anchor" id="ref-rec-he-show11"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для добавления дополнительных существ с уровнями (рангами) опыта.<br>
Это похоже на мод 0, но $4 показывает дополнительные уровни (ранги) опыта новых существ.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d100/5/10; Добавить к стеку 100 существ с уровнем опыта 5.</code></pre>
<em class="erm-strong">Замечание:</em> не используйте параметр "d" для $4 с модом 10.</div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-12"></span><details class="erm-comment"><summary>Мод 11 (<span class="erm-anchor" id="ref-rec-he-show12"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
То же, что и мод 10, но независимый от типа существ.<br>
Похож на мод 1, но вы добавляете существ с рангом опыта $4.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/3/d100/5/11; Добавить к стеку 100 существ с рангом опыта 5, но также изменить их тип на Стрелков.</code></pre></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-13"></span><details class="erm-comment"><summary>Мод 12 (<span class="erm-anchor" id="ref-rec-he-show13"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для установки уровня опыта (ранга) всему стеку.<br>
Похож на мод 2, но $4 означает уровень опыта (ранг)<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/d/d/5/12; Стек будет иметь 5 уровней (рангов) опыта.</code></pre></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-14"></span><details class="erm-comment"><summary>Мод 13 (<span class="erm-anchor" id="ref-rec-he-show14"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используйте этот мод для установки эквивалентного процента опыта новому типу существ.<br>
Похож на мод 3, но предполагает, что вы изменили тип существа и опыт новых существ берётся как процент имеющегося у старых существ.<br>
Так, если вы имеет стек Монахов с X опыта и изменяете стек на Ангелов, новым опытом будет X*МаксАнгелов/МаксМонахов+dE, 
где МаксАнгелов это максимальный опыт Ангелов и МаксМонахов - максимальный опыт Монахов, dE - это добавляемый опыт.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/../d/1000/13; Новый стек получит соответствующий опыт, имеющийся у старого стека, плюс 1000 опыта.</code></pre>
<blockquote class="erm-note"><strong>НовыйОпыт</strong> = [СтарыйОпыт]*[ОпытНовыхСуществНа10Ранге] / [ОпытСтарыхСуществНа10Ранге + ЭкстраОпыт].</blockquote></div></details><br>
<u></u> <span class="erm-anchor" id="ref-rec-he-15"></span><details class="erm-comment"><summary>Мод 14 (<span class="erm-anchor" id="ref-rec-he-show15"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Похож на мод 13, но добавляет уровни опыта (ранги).<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE...:C0/0/../d/3/14; Новый стек получит соответствующий опыт от старого стека плюс 3 уровня (ранга) опыта.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>C2/#1/#2/#3</strong></span><br>
Добавить новый стек монстров герою:<br>
        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
        #2 – кол-во монстров<br>
        #3 = 1 (спросить человека о присоединении, если все слоты заняты), = 0 (использовать ИИ, 
т.е. если все стеки заняты, заменить менее значимый автоматически)</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>C#1/#2/…/#14</strong></span><br>
Изменить монстров: дать игроку выбор монстров. Используется команда C с 14 параметрами:<br>
        #1 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 
1 (-1 значит нет) <br>
        #2 – кол-во монстров 1<br>
        #3 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 2 (-1 значит нет)<br>
        #4 – кол-во монстров 2<br>
        #5 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 3 (-1 значит нет)<br>
        #6 – кол-во монстров 3<br>
        #7 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 4 (-1 значит нет)<br>
        #8 – кол-во монстров 4<br>
        #9 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 5 (-1 значит нет)<br>
        #10 – кол-во монстров 5<br>
        #11 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 6 (-1 значит нет)<br>
        #12 – кол-во монстров 6<br>
        #13 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> 7 (-1 значит нет)<br>
        #14 – кол-во монстров 7<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-16"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show16"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Это будет представлено в виде диалога для помещения существ на карту:
<pre class="erm-example"><code class="language-erm">!!HE-1:C5/6/7/8/9/10/11/12/13/14/15/16/17/18;
!!HE-1:C1/2/-1/0/-1/0/-1/0/-1/0/-1/0/-1/0;</code></pre></div></details>

<hr> 
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-d"></span>D</strong></span><br>
Вызвать диалог для улучшения армии героя (нет параметров)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-e"></span><span class="erm-anchor" id="command-e-2-1-f-1-2-3-4-1"></span>E$</strong></span><br>
Установить/проверить/получить опыт героя в $<br>
<a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">Таблица опыта героев</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>E$1/$2</strong></span><br>
Установить/проверить/получить опыт героя (дополнительный синтаксис)<br>
        $1 – очки опыта<br>
        $2 – <a href="../../tables/hero-levels/#ref-form-heroeslevels" data-context="true">уровень</a> героя<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-17"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show17"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:Ed/d2; - добавить герою 2 уровня
При этом фактического получения уровня не происходит.</code></pre></div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>E$1/$2/1</strong></span><br>
То же, что и HE:E$1/$2, но без обновления. Для стандартного синтаксиса происходит обновление, даже при простой проверке.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-f"></span>F$1/$2/$3/$4</strong></span><br>
Установить/проверить/получить первичные навыки<br>
        $1 – атака<br>
        $2 – защита<br>
        $3 – сила магии<br>
        $4 – знания</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>F?$1/?$2/?$3/?$4/1</strong></span><br>
Дополнительный синтаксис для проверки первичных навыков. Добавьте /1 в конец команды, и получите значения без влияний артефактов.<br>
        $1 – атака<br>
        $2 – защита<br>
        $3 – сила магии<br>
        $4 – знания<br>
Вы можете использовать только синтаксис получения или проверки.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-40"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show40"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:F?v100/?v101/?v102/?v103/1;</code></pre></div></details>
<div class="erm-paragraph">Команда отнимает только стандартные значения артефактов. Если артефакт был изменен с помощью скрипта, возможно некорректное получение значений.<br>
Также вы можете установить значения, но ничего не произойдёт.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-g"></span><span class="erm-anchor" id="command-g-w-1-i-1"></span>G$</strong></span><br>
Установить начальные очки передвижения героя<br>
        $ – начальные очки передвижения<br>
Если вы установите параметры <a href="./#ref-rec-he-w">HE:W</a> и HE:G одинаковыми, вы сможете копать Грааль.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-h"></span><span class="erm-anchor" id="command-h-1-2-3"></span>H$1/$2/$3/$4</strong></span><br>
Установить армию нанимаемого героя.<br>
        $1 – номер слота (0, 1, 2)<br>
        $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> (-1 – нет монстра)<br>
        $3 – мин. кол-во монстров<br>
        $4 – макс. кол-во монстров (может быть равно $3 для определённого числа)<br>
Команда может установить армию героя, которого нет в таверне на данный момент ни у одного из игроков. 
В случае, если он находится в таверне, никаких изменений в его стартовой армии не произойдёт до следующей недели.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-18"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show18"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!#HE0:H0/98/3/3 H1/-1/2/2 H2/-1/0/0; Установить армию Оррина на Гноллов в начале игры
Команду можно выполнить в любое время игры.</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-i"></span>I$</strong></span><br>
Установить/проверить/получить кол-во маны.<br>
Используйте параметр "d" для упрощения изменения, если вы хотите добавить или отнять ману.<br>
Кол-во маны может быть отрицательным.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-he-24"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show24"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:Id-1; забрать у текущего героя 1 очко маны</code></pre></div></details>

<div class="erm-paragraph"><span class="erm-tone-red"><strong>I$/1</strong></span><br>
То же, что и HE:I$, но без обновления. В стандартном синтаксисе вызывает обновление даже если вы делали проверку.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-k"></span><span class="erm-anchor" id="command-k-k1"></span>K</strong></span><br>
Немедленно убить героя (к примеру, при посещении колодца - упасть в него :) )</div>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>K1</strong></span><br>
То же, что и HE:K, но без обновления</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-l"></span>L#^Портрет.pcx^</strong></span><br>
Установить портрет героя из внешних файлов<br>
        # = 1 – установить маленький портрет – <em class="erm-legacy-file">файл.pcx</em><br>
        # = 2 – установить большой портрет – <em class="erm-legacy-file">файл.pcx</em><br>
<u></u> </div><span class="erm-anchor" id="ref-rec-he-19"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-he-show19"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph"><em class="erm-legacy-file">Файл.pcx</em> будет искаться в директории <em class="erm-legacy-file">DATA</em>, но вы можете изменить поддиректорию.<br>
Например: <em class="erm-legacy-file">^p\name.pcx^</em> - в папке <em class="erm-legacy-file">p</em> директории <em class="erm-legacy-file">DATA</em>. 
Или <em class="erm-legacy-file">^..\maps\1.pcx^</em> - в директории <em class="erm-legacy-file">Maps</em> в игровой папке.<br>
<strong>ВАЖНО!</strong> Полная длина имени файла не может иметь более 12 символов (вместе с путём к папке: точки и слэши учитываются).<br>
Вы также можете установить портрет из файла <em class="erm-legacy-file">DATA\H3bitmap.lod</em>, просто указав полное имя портрета.<br>
<u>Примеры</u>:
<pre class="erm-example"><code class="language-erm">!!HE-1:L1^..\Mods\WoG\Data\p\1.pcx^; слишком длинный путь к портрету вызывет ошибку
...
!!HE18:L1^HPS045WZ.pcx^ L2^HPL045WZ.pcx^; поставить Енове лицо Солмира</code></pre>
Экран будет обновлен автоматически, если вы измените портрет героя.<br>
<u>Требования к картинке</u>: <em>256 цветов; размеры:  58×64 (большой), 48×32 (малый)</em></div>
<div class="erm-paragraph">Стоит отметить, что существует возможность получения портретов героя, используя возможности <a href="../../compatibility/#ref-era-index">ERA</a>.<br>
Вот пример готовой функции для этого: 
</div><span class="erm-anchor" id="ref-rec-he-42"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-he-show42"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; получение портретов героя в указанные z-переменные

!?FU(Hero_GetPortret_Names); 
; x1 - номер героя
; x2 - номер Z переменной для записи малого портрета
; x3 - номер Z переменной для записи большого портрета
!!SN:E7411341/1/x1;
!!VRy10:Sv1 +52;
!!UN:Cy10/1/?y11;
!!VRx1&amp;y11&gt;=0:Sy11;
!!VRx1&amp;y11&lt;0:S256 +y11;
!!UN:C6806760/4/?y1;
!!VRzx2:S^^;
!!VRzx3:S^^;
!!VRx1:*92 +y1 +48;
!!UN:Cx1/4/?y2;
!!VRx1:+4;
!!UN:Cx1/4/?y3;
!!VRx2:*512+9597416;
!!VRx3:*512+9597416;
!!DO(Hero_GetPortret_Names_CopyF)/1/512/1:Py2/x2 Py3/x3;


!?FU(Hero_GetPortret_Names_CopyF); 
!!UN:Cx1/1/?y1 Cx2/1/y1;
!!VRx16&amp;y1=0:S600;
!!VRx1:+1;
!!VRx2:+1;</code></pre></div></details>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L0/$</strong></span><br>
Установить герою портрет, как у <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">героя $</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-l3"></span><span class="erm-tone-red"><strong>L3</strong></span><br>
Восстановить оригинальные портреты<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!HE18:L3; вернуть Енове родной облик</code></pre></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L4/$</strong></span><br>
Установить оба портрета из игры от <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">героя $</a></div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>L5/$1/$2</strong></span><br>
Установить портрет героя из переменной<br>
        $1 – текстовая переменная (z) для большой картинки (0 – не менять)<br>
        $2 – текстовая переменная (z) для маленькой картинки (0 – не менять)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-m"></span><span class="erm-anchor" id="command-m-m-1"></span>M#1/$2</strong></span><br>
Установить/проверить/получить статус заклинания у героя<br>
        #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинание</a><br>
        $2 – значение (0 = удалить, 1 = дать (при проверке на присутствие 1 = есть, 0 = нет))<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-20"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show20"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Для проверки, изучено/получено заклинание или именно изучено, существуют 2 метода:
<ol><li>Вы можете проверить на заклинание, которое герой изучил ИЛИ имеет на свитке или артефакте с заклинанием, 
используя<strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:M#/?$</strong>.<br>
В любом случае, переменная станет = 1, если герой имеет заклинание.</li>
<li>Вы можете проверить на заклинание, которое выучено героем, но НЕ со свитка или артефакта, 
используя <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>:M=#/1</strong>.<br>
Флаг 1 будет установлен на Истину (1), если герой изучил заклинание.<br>
Если герой знает заклинание благодаря свитку/артефакту, флаг 1 будет установлен на Ложь (0).</li>
</ol></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-n"></span><span class="erm-anchor" id="command-n-o-1-p-1-2-3-4"></span>N?$</strong></span><br>
Проверить или получить <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a>.<br>
Не пытайтесь установить номер героя. Это не сработает, или вызовет нестабильность.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-o"></span>O$</strong></span><br>
Установить/проверить/получить хозяина героя (<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">0..7</a>).<br>
        $ – номер игрока, контролирующего героя.<br>
Если героя нет на карте, или он не нанят, хозяин -1.<br>
<strong></strong>
</div><span class="erm-anchor" id="ref-rec-he-21"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-he-show21"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Если вы попытаетесь дать героя игроку, уже имеющему 8 активных 
героев, команда будет просто отменена. <a href="../ow/#ref-rec-ow-h">Проверьте</a> героев игрока для гарантии того, что передача завершится успешно.<br>
Используя второй фантомный параметр в этой команде (например, <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:O5/1</strong>), 
вы мгновенно поменяете хозяина героя. Вы можете использовать это для установки незанятого героя для защиты нейтральных монстров, 
но убедитесь в возвращении к хозяину -1 после битвы. Если вы измените хозяина ненанятого героя путём временного хозяина (от 0 до 7), 
это может быть узнано через HE:O, но <a href="../ba/#ref-rec-ba-o">!!BA:O</a> будет получать значение -1.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-p"></span>P$1/$2/$3</strong></span><br>
Установить/проверить/получить координаты героя (если установить координаты, это будет что-то вроде телепорта). 
Также вы можете "вытащить" в игру ненанятого героя, указав координаты его появления и затем назначив ему хозяина.<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>P$1/$2/$3/$4</strong></span><br>
Переместить героя противника (не вашего цвета) со звуком и операцией обновления:<br>
        если $4&lt;&gt;0 – переместить героя со звуком и обновлением (аля Телепорт)<br>
        если $4 = 0 – старый стиль (герой немедленно перемещается на точку)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-41"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-he-show41"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<ul><li>Старый стиль команды (без $4) <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:P$1/$2/$3;</strong> работает как <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!HE</span>..:P$1/$2/$3/0;</strong></li>
<li>Указанное число для $4 будет воспринято игрой как <a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">биты игроков</a>, 
которым будет открыта точка назначения вместе с телепортированным героем.</li></ul></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-r"></span><span class="erm-anchor" id="command-r-refresh"></span>R0/$</strong></span><br>
Установить/проверить/получить мораль героя (до следующей битвы)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r1"></span><span class="erm-tone-red"><strong>R1/$</strong></span><br>
Установить/проверить/получить удачу героя (до следующей битвы)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r2"></span><span class="erm-tone-red"><strong>R2/$</strong></span><br>
Установить/проверить/получить пол героя<br>
        $ = 0 – мужчина<br>
        $ = 1 – женщина</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r3"></span><span class="erm-tone-red"><strong>R3/$1</strong></span><br>
Установить/проверить/получить доступность героя в таверне для ВСЕХ игроков.<br>
        $1 – разрешить (1) или запретить (0) героя для найма<br>
<em>Расширение синтаксиса:</em><br>
<span class="erm-tone-red"><strong>R3/$1/$2</strong></span><br>
Установить/проверить/получить доступность героя в таверне для каждого игрока.<br>
        $2 – <a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игроки</a>, которые могут нанять<br>
$2 имеет значение, только если вы разрешили героя.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r4"></span><span class="erm-tone-red"><strong>R4/$</strong></span><br>
Установить/проверить/получить возможность расстановки войск в начале боя при наличии тактики.<br>
Пример команды - кнопка внизу справа в окне героя.<br>
        $=1 – разрешить<br>
        $=0 – запретить</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r5"></span><span class="erm-tone-red"><strong>R5/$</strong></span><br>
Установить максимум морали<br>
        $ = 0 – не установлена<br>
        $ = 1 – установлена</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-r6"></span><span class="erm-tone-red"><strong>R6/$</strong></span><br>
Установить максимум удачи<br>
        $ = 0 – максимальная удача не дана<br>
        $ = 1 – максимальная удача дана</div>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-he-r7"></span><span class="erm-tone-red"><strong>R7/$</strong></span><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Установить модификатор посещённого объекта, временно меняющего параметры героя.<br>
        $ = <a href="../../tables/hero-visits/#ref-form-he-r" data-context="true">двоичное слово, битовая маска</a><br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-22"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show22"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
В большинстве случаев, установка или очистка этих бит не изменит удачу, мораль, очки хода или магии - она лишь установит 
(либо очистит) запись о посещении героем объекта в данном периоде, например, на этой неделе, до следующей битвы, и т.д. 
Команда установит или очистит текст, ассоциируемый с посещением этого объекта, если вы кликнете на удаче или морали в окне героя 
(например, "Посещение храма +1"), но вы по-прежнему будете должны установить временную удачу или мораль командами HE:R0 и HE:R1.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-ref"></span><span class="erm-tone-red"><strong>R#1/$/#2</strong></span><br>
Команда обновления (для всех команд HE:R)<br>
        #1 – номер команды R<br>
        $ – значение<br>
        #2 – флаг обновления<br>
             = 0 – нет (по умолчанию)<br>
             = 1 – да<br>
Экран приключений не обновляется автоматически после команд HE:R. 
Если вы хотите обновить его, используйте этот синтаксис с флагом "обновить" (#2 = 1)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-he-s"></span><span class="erm-anchor" id="command-s-s-s-1-2-1"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Установить/проверить кол-во вторич.навыков для показа.<br>
        $ – кол-во навыков, которые будут показаны (0..8)<br>
Если вы хотите показывать лишь один навык, сначала поменяйте его позицию в слот 1 и затем ограничьте кол-во показываемых навыков одним с помощью этой команды.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>S#1/$2</strong></span><br>
Установить/проверить/получить вторичные навыки<br>
        #1 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">номер навыка</a><br>
        $2 – уровень навыка (0 – нет, 1 – базовый, 2 – продвинутый, 3 – эксперт).<br>
Вы можете установить все вторичные навыки (28) сразу, но показываться в экране героя будут только первые 8.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-45"></span><details class="erm-comment"><summary>Дополнительно (<span class="erm-anchor" id="ref-rec-he-show45"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Используя низкоуровневую команду <a href="../un/#ref-rec-un-c">UN:C</a> мы может предоставить возможность программно изучать героем все 28 навыков:
<pre class="erm-example"><code class="language-erm">!!UN:C5091278/1/27 C5121386/1/27; [повышение уровня]
!!UN:C4881872/1/27; [посещение хижины ведьмы]
!!UN:C6229127/1/27 C6229840/1/27; [университет]</code></pre>
</div></details>
<div class="erm-paragraph">Также, вы можете <a href="../ss/#ref-cont-sschange">менять параметры навыка</a> установкой иных значений от указанных в $2.<br>
<em>Расширенный синтаксис:</em><br>
<span class="erm-tone-red"><strong>S$1/$2/1</strong></span><br>
        $1 – номер в окне навыков героя (0 = нет, 1..8 = номер слота)<br>
        $2 – номер навыка (<a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">0..27</a>)<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-he-23"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show23"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете использовать три вариации синтаксиса:
<pre class="erm-example"><code class="language-erm">!!HE#:S?#1/#2/1; - узнать, в каком слоте показывается навык #2 в переменную #1
!!HE#:S#1/?#2/1; - узнать, какой навык находится в слоте #1 в переменную #2
!!HE#:S#1/#2/1; - установить слот #1 на показ навыка #2</code></pre>
В последнем случае, если другие навыки занимают этот слот, навык останется без слота. 
Вы можете использовать эту команду дважды для смены позиций двух навыков.<br>
Когда вы устанавливаете навыки этой командой, вы должны следовать следующим правилам:
<span class="erm-anchor" id="ref-rec-he-t0"></span><ul class="erm-margin-top-zero"><li>вы можете двигать любые два показывающихся навыка для смены их позиций</li>
<li>вы <em>не должны</em> устанавливать навык для показа, если он ниже базового уровня (нет навыка)</li>
<li>вы должны установить навыки для показа в определённом порядке (без пустых мест).</li></ul>
Следовательно, вы не можете использовать команду для скрытия уже показывающихся навыков. Вы также не можете показать навык, если герой не знает его. 
Попытка это сделать вызовет "фантомный" навык (обычно Базовая Мудрость), что повлечёт вылет из игры при клике на ней.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-t"></span><span class="erm-anchor" id="command-t-1-2-3-4-5-u-1-2-3"></span>T$1/$2/$3/$4/$5</strong></span><br>
Вызвать битву с одним типом монстров<br>
        $1 – X<br>
        $2 – Y<br>
        $3 – L<br>
        $4 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстров</a><br>
        $5 – кол-во монстров<br>
X, Y и L используются только для типа почвы и соответствующих бонусов.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-he-u"></span>U$1/$2/$3</strong></span><br>
Установить/проверить/получить позицию и радиус патрулирования для ИИ. Центр патруля X = $1, Y = $2 (уровень фиксирован). 
Радиус будет установлен в $3 (освободить героя от патруля можно установкой $3 = -1)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-v"></span><span class="erm-anchor" id="command-v-v"></span>V#1/$2</strong></span><br>
Установить/проверить/получить, посещал ли герой объекты <a href="../../tables/hero-visits/#ref-form-he-v" data-context="true">типа #1</a> 
($2 используется как <a href="../../tables/bits/#ref-form-hex" data-context="true">битовая</a> маска: 1 для первого объекта, 2 для второго, 4 для третьего и т.д.)<br>
<em>Расширение синтаксиса:</em><span class="erm-tone-red"><strong><br>
V#1/#2/$3<br>
       
</strong></span>#1 – <a href="../../tables/hero-visits/#ref-form-he-v" data-context="true">тип объекта</a><br>
        #2 – номер объекта (0..31)<br>
        $3 – посещено героем (1) или нет (0)<br>
<u>
</u>
</div><span class="erm-anchor" id="ref-rec-he-25"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show25"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!HE-1:V0/0/0; - установить, что Камень знаний под номером 0 не был посещён героем
!!HE-1:V6/2/0; - установить, что Библиотека Просвещения номер 2 не была посещена героем
!!HE-1:V5/2; - установить, что все Деревья Знаний, кроме второго, будут не посещёнными героем (только второе посещено)</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-w"></span>W$</strong></span><br>
Изменить/получить очки движения героя<br>
         $ – очки для изменения (W0, Wd-10, W?i, W&gt;=100…)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-he-26"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show26"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Это число не кол-во шагов, которые может совершить герой, а значительно бо́льшее число (обычно между 1500 и 2000, зависит от скорости войск), 
устанавливаемой игрой автоматически. Проблематично подсчитать варианты бонусов почв и пенальти (плюс Поиск Пути, Логистика, Сапоги-Скороходы и т.п.). 
На траве со смешанными существами 1 шаг равен 100 очкам движения героя.<br>
В Дыхании Смерти и в WoG, герои компьютера получают дополнительные очки движения на высоких уровнях сложности. 
На Эксперте они получают 125 дополнительных очков, на Невозможном - 75. </div></details>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>W$/1</strong></span><br>
То же, что и HE:W$, но без обновления. В стандартном синтаксисе обновление вызывается даже если вы проводите проверку.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-x"></span><span class="erm-anchor" id="command-x-2-3-4-5-6-7"></span>X#1/$2/$3/$4/$5/$6/$7</strong></span><br>
Изменить специальность героя. Установить/проверить/получить все спец. установки.<br>
Типы специальностей (#1):<br>
</div><span class="erm-anchor" id="ref-rec-he-27"></span><details class="erm-comment"><summary><u>#1 = 0</u> – спец по вторичному навыку</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/secondary-skills/#ref-form-secondaryskill" data-context="true">номер вторичного навыка</a><br>
     $3…$7 игнорируются.</div></details><br>
<span class="erm-anchor" id="ref-rec-he-28"></span><details class="erm-comment"><summary><u>#1 = 1</u> – спец по существам</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип существ</a>     <br>
     $3…$7 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-29"></span><details class="erm-comment"><summary><u>#1 = 2</u> – спец по ресурсам</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/resources/#ref-form-resource" data-context="true">тип ресурса</a><br>
     $3…$7 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-30"></span><details class="erm-comment"><summary><u>#1 = 3</u> – спец по заклинанию</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/spells/#ref-form-spell" data-context="true">номер заклинания</a><br>
     $3…$7 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-31"></span><details class="erm-comment"><summary><u>#1 = 4</u> – экстраспец по существам</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип существа</a><br>
     $3 – бонус атаки<br>
     $4 – бонус защиты<br>
     $5 – бонус урона<br>
     $6…$7 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-32"></span><details class="erm-comment"><summary><u>#1 = 5</u> – скорость</summary><div class="erm-comment-body">     $2 = 2 <br>
     $3…$7 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-33"></span><details class="erm-comment"><summary><u>#1 = 6</u> – спец по улучшениям</summary><div class="erm-comment-body">
     $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">существо 1</a> для улучшения<br>
     $6 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">существо 2</a> для улучшения<br>
     $7 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">существо</a> улучшенное<br>
     $3…$5 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-34"></span><details class="erm-comment"><summary><u>#1 = 7</u> – спец по драконам</summary><div class="erm-comment-body">
     $2 = 0<br>
     $3 – бонус атаки<br>
     $4 – бонус защиты<br>
     $5…$7 игнорируются</div></details><br>
<span class="erm-anchor" id="ref-rec-he-35"></span><details class="erm-comment"><summary><u>#1 = 8</u> – экстра-ВоГ – специальность</summary><div class="erm-comment-body">
    $2 =<br>
            1 - Вуаль Тьмы<br>
            2 - Строитель<br>
    $3…$7 игнорируются</div></details><br><br>
<u></u>
<span class="erm-anchor" id="ref-rec-he-36"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show36"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Вы можете использовать параметр "d" для игнорируемых или неизменяемых вами настроек:
<pre class="erm-example"><code class="language-erm">!!HE#:X8/2/d/d/d/d/d; или так !!HE#:X8/2;</code></pre>
Для проверки текущих настроек используйте:
<pre class="erm-example"><code class="language-erm">!!HE#:X?y5/?y6/?y7/?y8/?y9/?y10/?y11;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-y"></span><span class="erm-anchor" id="command-y-1-2-3-4-z"></span>Y$1/$2/$3/$4</strong></span><br>
Благословения и проклятья.     <br>
        $1 – номер благословения/проклятья (<a href="../../tables/blessings/#ref-form-bless" data-context="true">1..65</a>)<br>
        $2 – сила заклятья (не используется для слепоты и блокировки слота)<br>
        $3 – продолжительность в днях<br>
        $4 – что с ним сделать (0 – удалить, 1 – дать, 2 – добавить/убавить)<br>
<pre class="erm-example"><code class="language-erm">!!HE#:Y0/0/0/3; - удаление всех проклятий и благословений</code></pre>
<u></u></div><span class="erm-anchor" id="ref-rec-he-37"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-he-show37"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Каждый герой может иметь только одно заклятье каждого типа.<br>
Так, когда вы добавляете или отнимаете (отнимание - добавление отрицательного значения), 
это означает, что сила и продолжительность будут изменены на сумму старого и нового значений. 
Если вы удаляете проклятье, параметр силы и продолжительности не имеет значения.<br>
<span class="erm-indent">Проклятье заблокированного слота.<br>
$2 - номер слота для блока (-1 = случайный слот).<br>
Если слот содержит артефакт, он будет скрыт и появится на том же месте по окончанию действия проклятья. 
Но (!) при удалении проклятья "закрытый слот" не разблокируется. 
Если же использовать команду снятия всех проклятий, всё в порядке.<br>
Таблица слотов непохожа ни на одну другую таблицу, результаты получены экспериментальным путём - <a href="../../tables/artifact-slots/#ref-form-ap3" data-context="true">номер слота</a><br>
Если закрыть боевую машину, и она уже есть у героя, то закроется один из слотов разное (1..3) в зависимости от номера боевой машины. 
Причём внешне он будет выглядеть как пустой слот, но по окончанию проклятья артефакт вернётся. 
Если во время действия проклятья "поднять" машину в инвентаре, под ней появится замок, и вы не сможете установить её обратно.</span></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-he-z"></span>Z?$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Команда возвращает адрес памяти <a href="../../tables/hero-structure/#ref-form-advhero" data-context="true">структуры указанного героя</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-he-43"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-he-show43"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?FU(Hero_Param);
; Образец функции работы с параметрами героя:
; x1 - номер героя
; x2 - смещение до заданного параметра
; x3 - кол-во байт (1, 2, 4)
; x4 - возвращаемое значение
; x5 - режим работы ф-ции (0=set/1=get)
!!HEx1:Z?y1;
!!UN&amp;x5=0:Cy1/x2/x3/x4; set-режим
!!UN&amp;x5=1:Cy1/x2/x3/?x4; get-режим

; С помощью этой функции можно узнать общее кол-во артефактов Аш (x1=61) в рюкзаке (x2=980; x3=1байт)
!!FU(Hero_Param):P28/980/1/?y10/1; результат занесётся в y10

; А так можно заставить летать Аш (x2=274; x3=4байта) без всяких условностей
!!FU(Hero_Param):P28/274/4/3/0; здесь "3" это эксп.ур. колдовства</code></pre></div></details>
<hr>













</div>
</div>
</section>
:::

## Связанные материалы {#related}

[Framework](../../framework/functions/) · [CO](../../receivers/co/) · [EA](../../receivers/ea/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/) · [Таблица героев](../../tables/heroes/) · [Посещение героя (HE)](../../triggers/he/) · [Таблица артефактов](../../tables/artifacts/) · [Слоты артефактов](../../tables/artifact-slots/) · [Переменные, строки и массивы](../../variables/) · [Классы героев](../../tables/hero-classes/) · [Типы городов](../../tables/towns/) · [Отладка и совместимость ERM](../../compatibility/) · [Таблица существ](../../tables/creatures/) · [Циклические вызовы (DO)](../do/) · [Опыт для уровня героя](../../tables/hero-levels/) · [Таблица заклинаний](../../tables/spells/) · [Цвета игроков](../../tables/players/) · [Игроки (OW)](../ow/#command-h-h) · [Параметры сражения (BA)](../ba/#command-o-1-2) · [Посещения и биты героя](../../tables/hero-visits/) · [Вторичные навыки](../../tables/secondary-skills/) · [Общие игровые операции (UN)](../un/#command-cbase-size-cbase-offset-size) · [Параметры заклинаний (SS)](../ss/) · [Биты, маски и HEX](../../tables/bits/) · [Ресурсы](../../tables/resources/) · [Благословения и проклятия героя](../../tables/blessings/) · [Поля структуры героя](../../tables/hero-structure/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l439) — Modified "HE:B0", "HE:B1", "HE:B3" commands to allow any string as argument.
- [ERA 3.8.3, -](../../compatibility/#era3-v-3-8-3-l1448) — Fixed HE:P command. Previosly if new coordinates were the same as previous hero coordinates, no visual update was performed.
- [ERA 3.5.0, +](../../compatibility/#era3-v-3-5-0-l1676) — Rewritten part of old ERM engine, which was responsible for conditions evaluations. - It's now possible to use spaces and line feeds to decorate complex conditions. Example: !!if|i^Master_Warrior_Hero%(hero)^ <> (prevWas…
- [ERA 3.4.1, +](../../compatibility/#era3-v-3-4-1-l1753) — (CURRENT_HERO) constant (-1) can be safely used in triggers from now. Previosly this global value could be overwritten by nested events. Example: !?HM0; current hero is Orrin !!HE(HERO_XERON):Ed100000; Level up for Xeron…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2415) — Added GetProcessGuid exported function, allowing to retrieve unique 32-character ID of game process run. Each game process start will generate different value. Modders can use this value to check, whether player restarte…
- [ERA 3.1.0, -](../../compatibility/#era3-v-3-1-0-l3130) — Fixed HE receiver to support any ERM variable like !!HEi^heroId^.
- [ERA 3.0.5, +](../../compatibility/#era3-v-3-0-5-l3237) — Added functions for SN:M arrays handling to "Era Erm Framework" mod. !?FU(Array_Join); ; Concatenates array items into single string, using passed glue string. Works with both numeric and string arrays. ; Example: &#91;'one'…
- [ERA 3.0.4, -](../../compatibility/#era3-v-3-0-4-l3406) — Fixed bug: HE:P used to return unsigned 65535 instead of signed -1.
- [ERA 3.0.3, -](../../compatibility/#era3-v-3-0-3-l3427) — HE:P without 4-th parameter now works as in WoG 3.58f for compatibility reasons. If hero belongs to current player, teleport sound is played and screen redrawn. Otherwise teleportation is silent without visual update.
- [ERA 3.0.2, +](../../compatibility/#era3-v-3-0-2-l3450) — Restored short !!HE:X6 syntax support and fixed ERM HE:X7 bug: short syntax worked as X7/a/d/0/0/0/0 instead of X7/0/a/d/0/0/0.
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3548) — It's proposed to decorate functions declarations in the following variants: ; Bried function description like: ; Hides rectangular area on the map. !?FU(es_HideMapSquare); !#VA(x1:x) (y1:x) (x2:x) (y2:x) (level:x); fast …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3871) — ^....^ literal in any ERM command is interpolated and replaced by temporal z-variable index before receiver execution. This z-variable is released right after receiver is executed. Don't use string literals in WoG 3.58 h…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3982) — HE:P command behavior was fixed. Teleport function with sound is called only if any coordinate was really changed. Advanced d-modifiers are supported for the first three parameters.
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3985) — HE:C0 command was rewritten. -1 and -2 values for creature type are not treated as "upgrade"/"degrade" anymore. Command supports any d-modifiers now. Exp. modifier parameter is now SET-only. Previosly !!HE:C0/0/?y1/?y2/d…
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3992) — Rewritten HE:X command to accept any number of parameters and understand any d-modifiers. Example: !!HE-1:X0/27 Xd1; become master of gold dragons
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4046) — Added !!HE:Z?$addr command to get hero structure address.
<!-- ERA3-GENERATED:END -->
