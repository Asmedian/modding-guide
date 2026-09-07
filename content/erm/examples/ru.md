---
{"title":"Примеры ERM","summary":"Небольшие образцы с объяснёнными предусловиями и результатом.","translationStatus":"reviewed"}
---

## Библиотека функций {#ref-cont-lib}

:::erm
<section class="erm-reference" lang="ru">
<div>


<span class="erm-anchor" id="ref-cont-lib-text"></span><div>

<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title">Библиотека функций UN:C</span></strong></div>
<div class="erm-align-left erm-paragraph"><span>Команда <a href="../receivers/un/#ref-rec-un-c">UN:C</a> работает с памятью. Используя её, можно редактировать даже те области героев, 
которые казались за гранью достижимого. Здесь приведено несколько полезных функций, не являющихся стандартными. Пользуйтесь!</span></div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title"><strong><span class="erm-anchor" id="ref-cont-lib-portal1"></span>Контроль типа нанимаемого в Портале Вызова существа</strong></span></div>
<div class="erm-align-left erm-paragraph">
<pre class="erm-example"><code class="language-erm">!?FU20114&amp;x1=-1;
!!UN:C6919500/4/?y1;
!!VRy1:+56;
!!UN:Cy1/4/?y2;
!!VRy2:+60;
!!UN&amp;x3=0:Cy2/4/x2;
!!UN&amp;x3&lt;&gt;0:Cy2/4/?x2;
!?FU20114&amp;x1&lt;&gt;-1;
!!UN:C6933756/4/?y1;
!!VRy1:+2884;
!!UN:Cy1/4/?y2;
!!VRx1:*360 +60 +y2;
!!UN&amp;x3=0:Cx1/4/x2;
!!UN&amp;x3&lt;&gt;0:Cx1/4/?x2;</code></pre>
<em>Вызов:</em>
<pre class="erm-example"><code class="language-erm">!!FU20114:P#1/$/#2;
!!FU20114:P#1/$; (#2=0)</code></pre>
<strong>#1</strong>:     № города (-1 = текущий)<br>
<strong>$</strong>:        
<a href="../tables/creatures/#ref-form-creature" data-context="true">тип существа</a>. -1 – значит нет Портала, 
или ещё не сгенерирован тип (сгенерируется при заходе в окно замка).<br>
<strong>#2</strong>:     0 - 
установить $, любое другое значение - получить $.</div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">
<span class="erm-anchor" id="ref-cont-lib-portal2"></span>Контроль кол-ва нанимаемых в Портале Вызова существ</span></div>
<div class="erm-align-left erm-paragraph">
<pre class="erm-example"><code class="language-erm">!?FU20115&amp;x1=-1;
!!UN:C6919500/4/?y1;
!!VRy1:+56;
!!UN:Cy1/4/?y2;
!!VRy2:+64;
!!UN&amp;x3=0:Cy2/2/x2;
!!UN&amp;x3&lt;&gt;0:Cy2/2/?x2;
!?FU20115&amp;x1&lt;&gt;-1;
!!UN:C6933756/4/?y1;
!!VRy1:+2884;
!!UN:Cy1/4/?y2;
!!VRx1:*360 +64 +y2;
!!UN&amp;x3=0:Cx1/2/x2;
!!UN&amp;x3&lt;&gt;0:Cx1/2/?x2;</code></pre>
<em>Вызов:</em>
<pre class="erm-example"><code class="language-erm">!!FU20115:P#1/$/#2;
!!FU20115:P#1/$; (#2=0)</code></pre>
#1:     № города (-1 = текущий)<br>
<strong>$:</strong>     кол-во существ<br>
<strong>#2:    </strong> 0 - установить $, 
любое другое значение - получить $.<br>
<strong>
Примечание</strong> - если на первой неделе в город ни разу не 
заходили (или нет Портала), тип и кол-во существ ещё не сгенерированы, 
и кол-во будет выдавать всякий мусор.</div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"><span class="erm-anchor" id="ref-cont-lib-he"></span>Прочтение результатов диалога HE:C</span></strong></div>
<div class="erm-align-left erm-paragraph"><em>Позволяет после команды
<a href="../receivers/he/#ref-rec-he-c">HE:C</a> посмотреть, что осталось в верхних 
(добавляемых) слотах, и использовать её не только для добавления существ, но и 
для оставления, без особых трудностей. Для WoG 3.58f и <a href="../compatibility/#ref-cont-te"><span class="erm-anchor" id="ref-cont-lib-red"></span><span class="erm-tone-red">TE</span></a>.<br>
</em>
<pre class="erm-example"><code class="language-erm">!?FU20116;
!!UN:V=358/?i;
!!VRy1&amp;1:S8585652;
!!VRy1&amp;-1:S8647508;
!!UN:Cy1/4/?x1;
!!VRy1:+4;
!!UN:Cy1/4/?x3;
!!VRy1:+4;
!!UN:Cy1/4/?x5;
!!VRy1:+4;
!!UN:Cy1/4/?x7;
!!VRy1:+4;
!!UN:Cy1/4/?x9;
!!VRy1:+4;
!!UN:Cy1/4/?x11;
!!VRy1:+4;
!!UN:Cy1/4/?x13;
!!VRy1:+4;
!!UN:Cy1/4/?x2;
!!VRy1:+4;
!!UN:Cy1/4/?x4;
!!VRy1:+4;
!!UN:Cy1/4/?x6;
!!VRy1:+4;
!!UN:Cy1/4/?x8;
!!VRy1:+4;
!!UN:Cy1/4/?x10;
!!VRy1:+4;
!!UN:Cy1/4/?x12;
!!VRy1:+4;
!!UN:Cy1/4/?x14;</code></pre>
<em>Вызов:</em>
<pre class="erm-example"><code class="language-erm">!!FU20116:P?1/?2/?3/?4/?5/?6/?7/?8/?9/?10/?11/?12/?13/?14;</code></pre>
?1,?3…?13 - типы существ в слотах 1..7 соответственно,<br>
?2,?4…?14 - их кол-во.</div>

<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"><span class="erm-anchor" id="ref-cont-lib-str"></span>Функция для работы со строками на низком уровне</span></strong></div>
<em>Иногда при работе с !!UN:C требуется 
работать со строками. Приходится писать для этого функции. Написать их несложно, 
и я решил поделиться:</em><br>
<br>
Получение адреса <em>z</em>-переменной номер x1 (возврат в x2)<br>
Поддерживаются версии: <strong>3.58f, <a href="../compatibility/#ref-cont-te"><span class="erm-tone-red">TE</span></a></strong>
<pre class="erm-example"><code class="language-erm">!?FU12925;
!!UN:V?y1/?y2;
!!VRy3&amp;y1=358:S40225400;
!!VRy3&amp;y1=359:S9597416;
!!VRx2&amp;y3=0:S0;
!!FU&amp;y3=0:E;
!!VRx2:Sx1*512+y3;

!?FU12926; Копирование строки по адресу. x1 - источник, x2 - приёмник.
!!DO12927/0/511/1:Px1/x2;

!?FU12927;
!!VRy1:Sx1+x16;
!!VRy2:Sx2+x16;
!!UN:Cy1/1/?y3 Cy2/1/y3;
!!VRx16&amp;y3=0:S511;</code></pre>
<div class="erm-paragraph"><em>А теперь сразу же полезный скрипт, использующий их.</em></div>
<div class="erm-align-center erm-paragraph"><strong><span class="erm-source-title"><span class="erm-anchor" id="ref-cont-lib-def"></span>Проигрывание любой анимации на юните в бою</span></strong><br></div>
<br>
<em>Данный скрипт позволяет проигрывать любую анимацию (из DEF) на любом юните в бою (т. е. 
не только из списка <a href="../tables/combat-animations/#ref-form-formatanimation" data-context="true">анимаций</a>). 
Требует наличия функции 12925 для работы (см. выше).<br>
</em>
<pre class="erm-example"><code class="language-erm">!?FU12930;
!!UN:V?y10/?y11;
!!VRy12&amp;y10=358:S69016332;
!!VRy12&amp;y10=359:S61479692;
!!UN&amp;y12&lt;&gt;0:Cy12/4/-1;
!!UN:C4454270/4/?y1;
!!VRy1:+660;
!!VRy2:Sy1+8;
!!VRx4:*256+x3;
!!FU12925:Px2/?y5;
!!UN:Cy1/4/?y3Cy2/4/?y4Cy1/4/y5Cy2/4/x4;
!!BMx1:V55;
!!UN:Cy1/4/y3Cy2/4/y4;</code></pre>

Использование функции:<br>
<strong>x1</strong> - номер стека в бою<br>
<strong>x2</strong> - номер <em>z</em>-переменной, в которой хранится имя def-файла для проигрывания<br>
<strong>Примечание:</strong> Для работы требуется функция 12925 из функций работы со строками<br>
<strong>x3</strong> - позиция относительно монстра:<br>
<strong>0</strong>: Нижняя часть анимации совпадает с нижней частью существа (например, молитва)<br>
<strong>1</strong>: Центр анимации совпадает с центром существа (например, инферно)<br>
<strong>2</strong>: Анимация находится сверху существа (пример в голову не лезет)<br>
<strong>3</strong>: Анимация находится спереди существа (срабатывание гномского сопротивления)<br>
<strong>4</strong>: Анимация находится в углу возле атакующего героя<br>
<strong>x4</strong> - Полупрозрачность (0 - нету, т.е. анимация непрозрачна, 1 - анимация 
полупрозрачна)<br>
К примеру, полупрозрачность - как молитва, воскрешение, лечение, 
страх, …<br>
Непрозрачное: Мораль, проклятие, старость, болезнь, … <br>
<br>
Работают любые def-файлы, хоть с карты приключений, любые. Анимация 
проигрывается один раз, после чего пропадает.<div class="erm-paragraph"><em>К сожалению скрипт сейчас 
лучше не использовать, т.к. имеют место некоторые проблемы с кешированием. "Хорошее" 
решение этой проблемы, к сожалению, найти не удалось…</em></div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title"><strong><span class="erm-anchor" id="ref-cont-lib-str2"></span>Получение адресов переменных ВоГа</strong></span></div>
<div class="erm-align-left erm-paragraph"><em>При работе с UN:C бывает нужно получить адрес какой-то 
Z-переменной.<br>
Вот скрипт, записывающий адрес z1 в v4138.<br>
Для WoG 3.58f и <a href="../compatibility/#ref-cont-te"><span class="erm-tone-red">TE</span></a></em></div>
<div class="erm-paragraph">
<pre class="erm-example"><code class="language-erm">!#UN:A0/9/?y10; [бэкап номера переменной Z]
!#UN&amp;y10&lt;0:A0/9/?z-1; [бэкап текста (3.59)]

!#UN:A0/9/1; [art0.Name = z1]&gt;
!#UN:C6687592/4/?y1; [получить адрес массива артефактов]
!#UN:Cy1/4/?v4138; [получить art0. Имя - адрес z1. Имя идёт первым в инфо артефакта, так y1 указывает на art0.Name]
[v4138 хранит адрес z1]

!#UN&amp;y10&gt;=0:A0/9/y10; [восстановить номер переменной Z]
!#UN&amp;y10&lt;0:A0/9/z-1; [восстановить текст (3.59)]</code></pre></div>

</div>
</div>
</section>
:::

## Каталог примеров {#catalog}

- [SN:E: вызов по адресу](./sn-e/)
- [SN:F: вызов экспорта](./sn-f/)
- [UN:C: рецепты памяти](../un-c/)
- [ERM Hooker: установка и удаление](../hooker/)
- [Именованные переменные и локальный массив](../variables/#local-arrays)
- [Framework: динамический массив](../framework/#example)

## Как проверять пример {#validation}

Проверяйте новую игру и загрузку, повторный вызов и отсутствие нужного объекта; для боевого кода — тактику, автобой и теоретический расчёт ИИ. Сигнатуры с #/$ в справочнике являются схемами, а блоки примеров содержат ERM-код. Наличие ZVSE2 не включает Framework автоматически.
