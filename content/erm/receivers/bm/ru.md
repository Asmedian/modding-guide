---
{"title":"Боевой стек (BM)","summary":"Ресивер BM: боевой стек, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Боевой стек (BM)"}
---

## Ресивер BM {#ref-rec-bm}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-bm-text"></span><div>
<span class="erm-anchor" id="ref-rec-bm-up"></span>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>BM</strong> (параметры существ в бою)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-bm-red"></span><span class="erm-tone-red">
!!BM#:XXXX;</span> 
- установить/проверить/получить некоторые параметры стека монстров.</strong><br>
# - номер стека (0..41). Используются номера 0..20 для первого (0) игрока и 21..41 для второго (1) игрока.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-a"></span><span class="erm-anchor" id="command-a-d-h-s"></span><span class="erm-tone-red"><strong>A$</strong><br>

</span>Атака (параметр) монстра</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-b"></span><span class="erm-anchor" id="command-b-n"></span><span class="erm-tone-red"><strong>B$</strong></span><br>
Кол-во монстров в стеке (в начале битвы)<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-bm-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-bm-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!BM0:B?v51; - записать исходное кол-во существ в v51
!!BM0:B100; - установить кол-во монстра на начало битвы (монстры не добавятся)
Потери подсчитываются так: Число юнитов в начале битвы (BM:B) минус оставшиеся в живых (BM:N) - отрицательных потерь быть не может.</code></pre>
</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-c"></span><span class="erm-anchor" id="command-c-1-2-3-4-5"></span><span class="erm-tone-red"><strong>C#1/#2/#3/#4/#5</strong></span><br>
Колдовать заклинание:<br>
         #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">номер заклинания</a><br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиция для заклинания</a><br>
         #3 – уровень заклинания (0..3): это как уровень навыка (нет/баз/продв/эксп)<br>
         #4 – сила заклинания (сила/длительность): это как Колдовская Сила героя<br>
         #5 – проверка на существование монстра (0 - не выполнять, 1 - выполнить)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bm-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">5ый параметр должен быть равен 1, чтобы не вызвать 
ошибки при выполнении, но большая часть заклинаний работает и с 0.<br>
Существует баг, что нельзя наложить таким методом Воскрешение (игра выходит в тёмный экран). </div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Защита (параметр) существа</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-e"></span><span class="erm-anchor" id="command-e-f"></span><span class="erm-tone-red"><strong>E$</strong></span><br>
Кол-во заклинаний (для существ-колдунов)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bm-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Это кол-во заклинаний, которое может наложить существо за одну битву.<br>
Например, у Архангелов это значение равно 1. После того, как они кого-либо воскрешат, значение выставляется в 0.<br>
Для триггера <a href="../../triggers/bg/#ref-tr-bg">!?BG</a>: значение изменяется <strong>после</strong> триггера наложения заклинания.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
<a href="../../tables/creature-flags/#ref-form-flaggedabilities" data-context="true">Флаги</a> монстров<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-bm-4"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bm-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Для проверки этих бит используйте BM:F, затем <a href="../vr/#ref-rec-vr-and">VR:&amp;</a> со 
значением соответствующего бита, интересующего вас. Помните, что флаги 32-битны.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!!BM0:F?i; записать значения флагов первого стека в переменную i
!!VRi:&amp;33554432; проверить на ожидание
!!IF&amp;i&gt;0:M^Стек ждёт лучшего момента для действия^;</code></pre>
Однако, стоит добавить, что в данном примере флаг ожидания возвращает "истину", пока нет всеобщей фазы ожидания в бою (когда все отряды уже получали возможность совершить действие). А уже эту всеобщую фазу можно определить через:
<pre class="erm-example"><code class="language-erm">!!UN:C6919200/4/?y9;
!!VRy10:Sy9 +81380;
!!UN:Cy10/1/?y11; проверка на фазу ожидания: 0=НЕТ, 1=ДА</code></pre>
Таким образом, чтобы узнать, в ожидании отряд или нет, когда настала всеобщая фаза ожидания, надо сделать проверку на саму фазу, сделать проверку на спец.флаги 26 (стек походил) и 27 (стек в защите).</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-g"></span><span class="erm-anchor" id="command-g-1-2"></span><span class="erm-tone-red"><strong>G#/$1/$2</strong></span><br>
Установить/проверить/получить параметры активных заклинаний<br>
         # – <a href="../../tables/spells/#ref-form-spell" data-context="true">номер заклинания</a><br>
         $1 – установить/проверить/получить продолжительность<br>
         $2 – установить/проверить/получить силу заклинания<br>
При установке длительности заклинания на 0 картинка по-прежнему остаётся, а действие заклинания исчезает.<br>
<br></div><span class="erm-anchor" id="ref-rec-bm-5"></span><details class="erm-comment"><summary><strong>Дополнительно</strong> (<span class="erm-anchor" id="ref-rec-bm-show5"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
<strong>BM:G</strong> – это "неаккуратно" сделанная функция, и позволяет менять сотни характеристик существа, а не только наложенные заклинания.<br>
<div class="erm-paragraph">Вызов: <span class="erm-anchor" id="ref-rec-bm-erm"></span><strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!BM</span>x:G#/$/d;</strong>, где:<br>
    <strong>#</strong> - некий числовой параметр (см. таблицу ниже), используя который, можно изменять любую информацию о монстре как доступную (атака, здоровье и др.), так и недоступную (например, звуки, анимацию).<br>
    <strong>$</strong> - значение для параметра #.<br>
Во избежание ошибок, "/d" в конце команды обязательно.</div>
<span class="erm-anchor" id="ref-rec-bm-n2"></span><h4 class="erm-tone-purple erm-strong">Таблица известных значений для BM:G:</h4>
<span class="erm-anchor" id="ref-rec-bm-q1"></span><blockquote class="erm-tone-quote erm-note"><span class="erm-tone-red">Красным</span> выделены строковые параметры - для изменения вам потребуются <a href="../../examples/#ref-cont-lib-str">функции для работы со строками на низком уровне</a>.<br>
<span class="erm-tone-accent">Серым</span> выделено то, что менять проблемно - можно только посоветовать прочитать данные у одного монстра и поставить их другому.</blockquote>
<div class="erm-paragraph"><strong>-100</strong>: Видимость существа (4 - виден, 8 - не виден)<br>
Отряды теряют невидимость при любом действии на поле боя. Но её можно восстановить в триггере <a href="../../triggers/bg/#ref-tr-bg">!?BG1</a>.<br>
<strong>-90</strong>: Есть ли цифры кол-ва существ? (0 = есть, 1 = нет)<br>
Отряд не имеет обозначения кол-ва существ, пока не походит. При этом на него можно колдовать магию и бить. 
Кол-во показывается при щелчке <span class="erm-anchor" id="ref-rec-bm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> в нижнем правом углу картинки (где обычно, в общем).<br>
<strong>-89</strong>: Тип существа<br>
Параметры отряда становятся как у существа, номер которого установлен, но сразу же снижаются до стандартных параметров существа, которое меняют. 
Имя отряда в меню при щелчке <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> по существу меняется; когда его бьют - имя остаётся изменённым. 
Когда битва окончена - на картинке будет показан настроенный отряд, а не старый. Если изменить тип существа, битву становится невозможно выиграть 
(логика игры требует убить того, на кого нападал, и изменения типа существ равнозначно вызову другого существа, без уничтожения старого (по логике опять же игры)). 
Эта проблема делает параметр практически бесполезным.<br>
<strong>-88</strong>: Позиция существа <br>
Если сменить, на старом месте останется стоять копия. Копия не может ходить и быть атакованной, занимает место.<br>
<strong>-87</strong>: Номер анимации<br>
При значение 2,6,9… (много ещё где) игра выдаёт чёрный экран. Кадры берутся в том порядке, как и при создании.<br>
<strong>-86</strong>: Номер кадра в анимации<br>
Анимация возвращается к нормальной, если навести мышкой<br>
<strong>-83</strong>: Кол-во существ (реальное)<br>
<strong>-82</strong>: Кол-во существ для отображения <br>
Может не совпадать с кол-вом. В этом случае написано будет одно, а реально другое. По умолчанию равно <strong>-1</strong> – значит "полностью совпадает с реальным".<br>
После того, как любое существо попадет под атаку, данному значению станет равно кол-во реальное; в итогах битвы показывается реальное кол-во убитых; 
при атаке изменённого существа фантомные монстры не учитываются (т.е. если изменить 10 монстров на 100 этой командой и атаковать, то урон будет нанесен именно этими 10). 
Но его можно восстановить в триггере !?BG1.<br>
<strong>-81</strong>: Безвозвратные потери.<br>
Кол-во существ после выигранной битвы (или после откупа) равно "текущее кол-во существ" минус "безвозвратные потери". 
Потери могут быть записаны в безвозвратные при использовании, например, после Воскрешения без навыка Магия Земли или с ней, но на базовом уровне.<br>
<strong>-80</strong>: Разница между текущим здоровьем и полным.<br>
Если 0 значит стек здоров.<br>
<strong>-79</strong>: Номер слота героя (0..6), -1 – будет удалён после битвы<br>
<strong>-78</strong>: Кол-во существ в начале боя<br>
<strong>-73</strong>: Город-владелец (существа)<br>
<strong>-69</strong>: Флаги существа<br>
<span class="erm-tone-red"><strong>-68</strong>: Название существа<br>
<strong>-67: </strong>Название существа (множественное число)<br>
<strong>-66</strong>: Строка состояния (например, "Нет штрафа рукопашной")</span><br>
<strong>-54</strong>: Здоровье (полное)<br>
<strong>-53</strong>: Скорость<br>
<strong>-52</strong>: Атака<br>
<strong>-51</strong>: Защита<br>
<strong>-50</strong>: Мин. урон<br>
<strong>-49</strong>: Макс. урон<br>
<strong>-48</strong>: Боезапас<br>
<strong>-41</strong>: Владелец (не вполне корректно работает)<br>
<strong>-40</strong>: Номер стека (0..21)<br>
<strong>-38</strong>: Смещение существа по Y<br>
<strong>-37</strong>: Смещение существа по X<br>
От того места, где существо должно быть. В пикселях.<br>
<strong>-19</strong>: Смещение по оси OX прямоугольника с кол-вом существ.<br>
<strong>-17</strong>: Частота проигрывания случайной анимации.<br>
Чем меньше, тем чаще. Так, значение 200 даст беспрерывную анимацию.<br>
<span class="erm-tone-accent"><strong>-13</strong>: Анимация существа<br>
<strong>-12</strong>: Анимация снаряда (см. <a href="../../tables/projectiles/#ref-form-weapon" data-context="true">таблицу</a>)<br>
<strong>-10</strong>: Звук перемещения<br>
<strong>-9</strong>: Звук атаки<br>
<strong>-8</strong>: Звук урона<br>
<strong>-7</strong>: Звук выстрела<br>
<strong>-6</strong>: Звук смерти<br>
<strong>-5</strong>: Звук защиты</span><br>
<strong>-1</strong>: Кол-во активных заклинаний (для отображения цвета кол-ва существ).<br>
[<span class="erm-anchor" id="ref-rec-bm-wt"></span><strong class="erm-legacy-label">0..65</strong>]: работа с заклинаниями (нормальное функционирование команды BM:G)<br>
<strong>173</strong>: Кол-во активных заклинаний (для отображения при щелчке <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">).<br>
<strong>212</strong>: Мораль существа<br>
<strong>213</strong>: Удача существа<br>
Мораль и удача пересчитывается при передаче хода другому существу. Поэтому полезно только для получения или проверки. 
Если очень нужно менять, то можно делать это или перед атакой, или каждый ход.</div></div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-h"></span><span class="erm-tone-red"><strong>H$</strong></span><br>
Максимальное здоровье существа</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-i"></span><span class="erm-anchor" id="command-i-o-t"></span><span class="erm-tone-red"><strong>I$</strong></span><br>
Принадлежность герою $: <br>
         0 – левому<br>
         1 – правому</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-j"></span><span class="erm-anchor" id="command-j-k-l"></span><span class="erm-tone-red"><strong>J?$</strong></span><br>
Получить или проверить кол-во активных заклинаний</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-k"></span><span class="erm-tone-red"><strong>K#</strong></span><br>
Нанести # урона существу<br>
При данном действии триггер 
<a href="../../triggers/mf/#ref-tr-mf">!?MF</a> не срабатывает</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-l"></span><span class="erm-tone-red"><strong>L$</strong></span><br>
Кол-во потерянного здоровья монстра в стеке<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-6"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bm-show6"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Например, если у Арбалетчика 10 здоровья, и ему нанесли 4 ед. урона, то значение команды будет равно 4.<br>
Если нанесли 10 ед. урона, то Арбалетчик погибает, а следующий Арбалетчик будет иметь значение этой команды 0.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-m"></span><span class="erm-anchor" id="command-m-1-2-3"></span><span class="erm-tone-red"><strong>M#1/#2/#3</strong></span><br>
Наложить заклинание на монстра<br>
         #1 – <a href="../../tables/spells/#ref-form-spell" data-context="true">номер заклинания</a><br>
         #2 – продолжительность<br>
         #3 – уровень навыка (0 – нет, 1 – базовый, 2 – продвинутый, 3 – эксперт)<br>
Если вы накладываете заклинание, которое монстр уже имеет, это будет игнорироваться. Но вы можете использовать «Снятие заклинания» :)<br>
<br></div><span class="erm-anchor" id="ref-rec-bm-7"></span><details class="erm-comment"><summary><strong>Дополнительно</strong> (<span class="erm-anchor" id="ref-rec-bm-show7"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
Также вы можете наложить специальные заклинания:<br>
70. Окаменение<br>
71. Яд<br>
72. Корни<br>
73. Болезнь<br>
74. Паралич<br>
75. Старость<br>
Вы можете установить эти 6 заклинаний без проблем, разве что Привязанное существо никогда не сможет двинуться (продолжительность игнорируется), 
и отравленное существо не получит урона в первом раунде битвы. И, конечно, нет графики наложения заклинаний, 
хотя внутри существа всё отображается корректно - окаменевшее существо выглядит как камень и не получает хода, и.т.д.<br>
Вы можете установить любое другое заклинание данной командой, даже то, которое не имеет значения в битве - 
например, вы можете дать существу "Вызов корабля" на 3 раунда.<br>
Графика будет показана при правом клике на существе, и будет выглядеть как "вызов корабля". Существо будет иметь зелёный показатель кол-ва 
(т.е. положительное заклинание), за исключением заклинаний, показываемых красным цветом (Волшебная стрела, Взрыв). 
Дополнительные заклинания с номера 76, кажется, использовались для способностей существ, имеющих картинку и эффект, но не действующий на стек постоянно 
(т.е. не показывается при правом клике на существо). Вы можете установить эти заклинания на существо этой командой, но не будет показано никакой картинки 
(но, всё же, показывается название при наведении на пустой квадрат) либо последует вылет из игры (и это не последовательно - иногда следует вылет, иногда вы видите пустой квадрат).<br>
И если вы используете <a href="./#ref-rec-bm-c">BG:C</a>, чтобы попытаться "наколдовать" одно из этих заклинаний, либо ничего не происходит, либо - вылет.<br>
76. Облако смерти<br>
77. Удар молнии<br>
78. Снятие полезных заклинаний<br>
79. Смертельный взгляд<br>
80. Кислотное дыхание</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-n"></span><span class="erm-tone-red"><strong>N$</strong></span><br>
Кол-во монстров в стеке (текущее)</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-o"></span><span class="erm-tone-red"><strong>O$</strong></span><br>
Номер слота существа в армии героя (0..6, -1)<br>
Если $  = -1, стек не принадлежит армии героя 
(вызван)<br>
<span class="erm-anchor" id="ref-rec-bm-bold"></span><em class="erm-strong">Замечание:</em> стеки 20 и 41 всегда имеют значение 0.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-p"></span><span class="erm-anchor" id="command-p-r"></span><span class="erm-tone-red"><strong>P$</strong></span><br>
Позиция на <a href="../../tables/battlefield/#ref-form-bf" data-context="true">поле боя</a><br>
Можно использовать как телепорт</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-q"></span><span class="erm-anchor" id="command-q-1-2-3"></span><span class="erm-tone-red"><strong>Q#1/#2/#3</strong></span><br>
Поместить участок Зыбучего песка или мину в позицию<br>
         #1 – тип (0 – песок, 1 – мины)<br>
         #2 – <a href="../../tables/battlefield/#ref-form-bf" data-context="true">позиция</a><br>
         #3 – обновить (1 – да, 0 – нет)<br>
<u></u></div><span class="erm-anchor" id="ref-rec-bm-8"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bm-show8"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Данная команда автоматически проверяет, можете ли вы поместить мину или песок. Вы можете использовать стек номер 0 для левого героя и 21 для правого, 
чтобы быть в уверенности помещения препятствия (стек может быть мёртв - всё, что нужно, это номер стороны (т.е. можете использовать 0-20 для левого героя и 21-41 для правого)</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Кол-во ответов на атаки (проверка для Королевских грифонов)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-9"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-bm-show9"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Это кол-во ответов стека, оставшихся до конца раунда. Оно каждый раунд равно одному и после ответа равен 0. Королевские грифоны каждый раунд имеют 5000 ответов.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-s"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Скорость существа.<br>
<strong><u>Комментарий</u>:</strong> полученное значение не включает магические эффекты влияния на скорость.</div>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: команда <a href="./#ref-rec-bm-u6">BM:U6</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
<a href="../../tables/creatures/#ref-form-creature" data-context="true">Тип монстра</a></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-u"></span><span class="erm-anchor" id="command-u"></span><span class="erm-tone-red"><strong>U#/$</strong></span><br>
Изменить параметры монстров<br>
         # = 1 – установить/проверить/получить минимальный урон в $<br>
         # = 2 – установить/проверить/получить максимальный урон в $<br>
         # = 3 – установить/проверить/получить кол-во выстрелов в $<br>
         # = 4 – изменить заклинание существа на $<br>
         # = 5 - клон стека. Если клонов стека не существует, $ = -1, 
иначе равен 0..41 - номер стека-клона искомого стека (искомый – это # в <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!BM</span>#:U5/$;</strong>). 
Если существо погибает, его клоны умирают тоже.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-bm-10"></span><details class="erm-comment"><summary>Комментарии (<span class="erm-anchor" id="ref-rec-bm-show10"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете изменить заклинание существа только на родственное. Например, если существо колдует заклинание на союзных существ 
(скажем, Огры-Шаманы - Жажду крови), вы можете изменить заклинание на любое одинарное положительное заклинание (например, Радость или Ускорение), 
но не атакующее (Волшебная стрела или Замедление), иначе ИИ никогда не будет использовать его. Однако, если вам нужно, 
чтобы такая особенность была только у игроков-людей, вы можете настроить почти любое заклинание без проблем.<br>
Данный пример подтверждён Командирами, они колдуют заклинание как Огры-шаманы.<br>
Также помните, что данная команда не действует на существ, колдующих случайное заклинание (например, Сказочный дракон и Мастер-Джинн)</div></details> 
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-u6"></span><span class="erm-tone-red"><strong>U6/?$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Получить реальную скорость стека (учитываются все бонусы/штрафы).</div>
<div class="erm-tone-quote erm-note erm-paragraph">См. также: команда <a href="./#ref-rec-bm-s">BM:S</a>.
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-v"></span><span class="erm-anchor" id="command-v-z"></span><span class="erm-tone-red"><strong>V#</strong></span><br>
Показать <a href="../../tables/combat-animations/#ref-form-formatanimation" data-context="true">анимацию #</a> для стека.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-bm-z"></span><span class="erm-tone-red"><strong>Z?$</strong></span><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a><br>
Команда возвращает адрес памяти <a href="../../tables/combat-stack-structure/#ref-form-combatmon" data-context="true">структуры указанного стека</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-bm-11"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-bm-show11"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">; Данная функция узнает общее кол-во заклинаний (x2=404 и x3=4байта), наложенных на первый стек атакующей стороны (x1=0)
!!FU(BattleStack_GetParam):P0/404/4/?y10; результат занесётся в y10

!?FU(BattleStack_GetParam);
; Образец функции получения параметров боевого стека:
; x1 - номер стека в битве
; x2 - смещение до заданного параметра
; x3 - кол-во байт (1, 2, 4)
; x4 - возвращаемое значение
!!BMx1:Z?y1;
!!UN:Cy1/x2/x3/?x4;</code></pre></div></details>

<hr>














</div>
</div>
</section>
:::

## Связанные материалы {#related}

[MA](../../receivers/ma/) · [UN:C](../../un-c/)



## Связанные команды и таблицы {#reference-links}

[Таблица заклинаний](../../tables/spells/) · [Клетки поля боя](../../tables/battlefield/) · [Действие в бою (BG)](../../triggers/bg/) · [Битовые флаги существ](../../tables/creature-flags/) · [Переменные и выражения (VR)](../vr/) · [Примеры ERM](../../examples/) · [Снаряды и лучи](../../tables/projectiles/) · [Расчёт физического урона (MF)](../../triggers/mf/) · [Таблица существ](../../tables/creatures/) · [Отладка и совместимость ERM](../../compatibility/) · [Анимации BM:V](../../tables/combat-animations/) · [Поля боевого отряда](../../tables/combat-stack-structure/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.19, +](../../compatibility/#era3-v-3-9-19-l197) — Added automatic grid and selection redraw after using BM:Q on inactive stack.
- [ERA 3.9.18, +](../../compatibility/#era3-v-3-9-18-l246) — Implemented automatic shadow/grid/selection border redraw after calling BM:C.
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l266) — Improved CombatManager::CastSpell function (used also in BM:C) by temporarily setting CombatManager->ControlSide to the side, controlling casting stack. Casting stack may differ from active stack (it may be counter attac…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2214) — Added the following functions to "Era Erm Framework" mod: !?FU(GetTimeMsec); ; Returns current time in milliseconds (time from computer start, overflowing each 49.71 days) !#VA(result:x); !?FU(PackUnion); ; Safely packs …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4045) — Added !!BM:Z?$addr command to get battle stack structure address.
<!-- ERA3-GENERATED:END -->
