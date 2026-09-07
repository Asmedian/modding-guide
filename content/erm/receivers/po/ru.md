---
{"title":"Данные клеток карты (PO)","summary":"Ресивер PO: данные клеток карты, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Данные клеток карты (PO)"}
---

## Ресивер PO {#ref-rec-po}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-po-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>PO</strong> (параметры квадратов) </span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-po-red"></span><span class="erm-tone-red">!!PO#1/#2/#3:XXXX;</span> </strong>–<strong> установить/проверить 
квадрат в X Y L.</strong> Используется для установки или проверки информации любого 
квадрата карты.<br>
<em>Расширенный синтаксис:</em><br>
<strong><span class="erm-tone-red">!!PO$:XXXX;</span> – X Y L соответственно равны v[$], v[$+1], v[$+2].</strong><br>
Может быть полезен, если вы хотите контролировать кол-во героев или 
игроков, которые могут посетить объект (за бонусом и т.п.).<br>
Все команды, за исключением разве что подсчёта, нужны лишь для удобства; 
они ВСЕ могут быть использованы для хранения любых числовых данных.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-1"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-po-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!?OB63/3; – триггер для каждой "Разрушенной башни" на карте
; X=v998, Y=v999, L=v1000
!!FU100:P; – вызвать функцию 100

!?FU100; тело функции 100 
!!HE-1:O?y1 N?y2; 	y1=хозяин, y2=номер
!!OB998:T?y3 U?y4; 	y3=тип объекта, y4=подтип объекта
!!PO998:Hy2 Oy1 Ty3 Sy4; записать инфу о последнем посетителе, его "цвете", типе/подтипе объекта.</code></pre>
</div></details>
<span class="erm-anchor" id="ref-rec-po-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/ob/#ref-tr-ob">!?OB</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-b"></span><span class="erm-anchor" id="command-b"></span>B#/$</strong></span><br>
Установить/проверить/получить большое целое значение 
(-2147483648…2147483647). Вы можете установить 2 значения.<br>
         # – номер значения (0 и 1)<br>
         $ – числовое значение<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-3"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-po-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Чтобы запомнить два числа, Y1 и Y2, в PO:B0, вам надо сделать так:
<pre class="erm-example"><code class="language-erm">!!VRv3:S46000*y1 +y2;
!!PO...:B0/v3;</code></pre>
Здесь Y1 и Y2 каждое могут быть не более 45999.<br>
Давайте теперь "достанем" назад эти числа:
<pre class="erm-example"><code class="language-erm">!!PO...:B0/?v3;
!!VRy1:Sv3 :46000;
!!VRy1:Sv3 %46000;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-c"></span><span class="erm-anchor" id="command-c-1-2-3-4-5"></span>C$1/$2/$3/$4/$5</strong></span><br>
Подсчитать все "объекты на карте" с общими данными (результат запишется в v1).</div><pre>
        $1 – данные, сравниваемые со значением, записанным через PO:T
        $2 – данные, сравниваемые со значением, записанным через PO:S
        $3 – данные, сравниваемые со значением, записанным через PO:H
        $4 – данные, сравниваемые со значением, записанным через PO:O
        $5 – данные, сравниваемые со значением, записанным через PO:N</pre>
<div class="erm-paragraph">Для игнорирования любого параметра используйте -1.<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-po-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Команда "проходится" по всей карте и ищет объекты, соответствующие вашему запросу.<br>
Эта команда может быть очень полезна, если вы хотите контролировать посетителей того или иного объекта.<br>
В базовых скриптах WoG была принята следующая система использования данных для команд ресивера PO:<br>
<span class="erm-anchor" id="ref-rec-po-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!PO</strong>..:C<a href="../../tables/objects/#ref-form-objects" data-context="true">тип</a>/<a href="../../tables/objects/#ref-form-objects" data-context="true">подтип</a>/<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">герой</a>/<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">хозяин</a>/$5;</span><br>
<u>Пример</u>:<br>
Используя такую систему, вы можете оперативно подсчитать все объекты определённого типа:
<pre class="erm-example"><code class="language-erm">!!PO0/0/0:C63/3/45/-1/-1;</code></pre>
Теперь v1 хранит кол-во объектов типа 63 и подтипа 3, посещённых Солмиром (45), независимо от его хозяина.</div></details>

<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-h"></span><span class="erm-anchor" id="command-h-n-o-s-t"></span>H$</strong></span><br>
Установить/проверить/получить пользовательское число (0..255)<br>
В начале игры это значение равно 255 для всех квадратов.<br>
<strong><u>Комментарий</u>:</strong> в базовых скриптах WoG этот параметр, в основном, используют для 
<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номера героя</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-n"></span>N$</strong></span><br>
Установить/проверить/получить пользовательское число (0..15)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-o"></span>O$</strong></span><br>
Установить/проверить/получить пользовательское число (-8..8)<br>
В начале игры это значение равно -1 для всех квадратов.<br>
<strong><u>Комментарий</u>:</strong> в базовых скриптах WoG этот параметр, в основном, используют для записи числа, соответствующего номеру 
<a href="../../tables/players/#ref-form-gamerscolor" data-context="true">игрока</a>.<br>
<span class="erm-anchor" id="ref-rec-po-n1"></span><strong class="erm-tone-purple erm-strong">Слава</strong>:<em>"Информацию по квадрату на карте можно использовать для цвета: положительное значения для какого-либо бонуса, 
и отрицательное для обратного – штрафа</em>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-s"></span>S$</strong></span><br>
Установить/проверить/получить пользовательское число (0..255)<br>
<strong><u>Комментарий</u>:</strong> в базовых скриптах WoG этот параметр, в основном, используют для записи 
<a href="../../tables/objects/#ref-form-objects" data-context="true">подтипа объекта</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-t"></span>T$</strong></span><br>
Установить/проверить/получить пользовательское число (0..255)<br>
<strong><u>Комментарий</u>:</strong> в базовых скриптах WoG этот параметр, в основном, используют для записи 
<a href="../../tables/objects/#ref-form-objects" data-context="true">типа объекта</a>.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-po-v"></span><span class="erm-anchor" id="command-v"></span>V#/$</strong></span><br>
Установить/проверить/получить целое значение (-32768…32767). Вы можете установить до 4 значений.<br>
         # – номер значения для установки (0..3)<br>
         $ – значение для установки/проверки/получения<br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-po-4"></span><details class="erm-comment"><summary>Пример (<span class="erm-anchor" id="ref-rec-po-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Давайте, к примеру, запомним три числа меньших 100. Пусть это будут 19, 37 и 46
<pre class="erm-example"><code class="language-erm">!!VRv1:S19;
!!VRv2:S37;
!!VRv3:S46;
!!VRv100:Sv1*100+v2*100+v3; = 193746
А теперь вернём их из v100...
!!VRv1:Sv100:10000; = 19
!!VRv2:Sv100%10000:100; = 37
!!VRv3:Sv100%1000; = 46</code></pre></div></details>
<hr>
















</div>
</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/) · [HT](../../receivers/ht/)



## Связанные команды и таблицы {#reference-links}

[Посещение объекта (OB)](../../triggers/ob/) · [Таблица объектов в игре](../../tables/objects/) · [Таблица героев](../../tables/heroes/) · [Цвета игроков](../../tables/players/)
