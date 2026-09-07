---
{"title":"Хранилища существ (CB)","summary":"Ресивер CB: хранилища существ, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер CB {#ref-rec-cb}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-a1"></span><span class="erm-anchor" id="command-a2"></span><span class="erm-anchor" id="command-a3-a4"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cb-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>CB</strong> (банки существ)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-cb-red"></span><span class="erm-tone-red">!!CB#1/#2/#3:XXXX;</span> 
- установка параметров банка (хранилища) существ в X Y L.</strong> Банк существ – <a href="../../tables/objects/#ref-form-objects-cb" data-context="true">тип 16</a>.<br>
Вы можете дать в награду неограниченное кол-во артефактов, кроме свитков с заклинаниями.
Если вы поставите в награду свиток, игра вылетит.<br>
Этот ресивер работает также для Ветхого корабля (тип 24), Драконьей утопии (тип 25), Склепа (тип 84), Кораблекрушения (тип 85) (см. <a href="../../tables/objects/#ref-form-objects" data-context="true">объекты</a>).</div>
<span class="erm-anchor" id="ref-rec-cb-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: таблицу <a href="../../tables/creature-banks/#ref-form-cb" data-context="true">хранилищ существ</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-a"></span><strong><span class="erm-tone-red">A</span></strong><br>
Бонус – <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт</a><br>
<span class="erm-tone-red"><strong>A1/$</strong></span> - проверить/получить кол-во артефактов в таблице бонусов (установить нельзя!)<br>
<span class="erm-tone-red"><strong>A2/#/$</strong></span> - установить/проверить/получить <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт $</a> в позиции # (0…) в таблице бонусов<br>
<span class="erm-tone-red"><strong>A3/$</strong></span> - добавить <a href="../../tables/artifacts/#ref-form-a1" data-context="true">артефакт $</a> в конец бонусной таблицы<br>
<span class="erm-tone-red"><strong>A4/$</strong></span> - удалить артефакт в позиции $ (0…) в таблице бонусов.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span><span class="erm-tone-red"><strong>G#1/$2/$3</strong></span><br>
Установить/проверить/получить <a href="../../tables/creatures/#ref-form-creature" data-context="true">охранников</a> в слоте #1 (0..6), типа $2 и кол-вом $3.<br>
<u></u><br></div><span class="erm-anchor" id="ref-rec-cb-1"></span><details class="erm-comment"><summary>Дополнительно (<span class="erm-anchor" id="ref-rec-cb-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Монстры располагаются так:<br>
</div><div class="table-wrap erm-reference-table"><table class="erm-table-offset">
<tr><td>3</td><td>6</td><td>0</td></tr>
<tr><td>5</td><td title="[X] - схематичное расположение армии героя">[X]</td><td>4</td></tr>
<tr><td>2</td><td> </td><td>1</td></tr>
</table></div>
Причём, даже если вы настроили каких-либо монстров в слотах 0..4 включительно, то слоты 5 и 6 будут заняты копейщиками. 
Во избежание этого используйте для слотов 5 и 6 значение монстра-охранника -1 кол-вом 0.
<div class="erm-paragraph">Стоит отметить, что существует возможность изменения типа охраны сокровещниц напрямую, внося изменения в игровую память.<br>
Вот перечень адресов памяти и их значений по умолчанию (предоставил <span class="erm-anchor" id="ref-rec-cb-n1"></span><strong class="erm-tone-purple erm-strong">Igor</strong>): </div><span class="erm-anchor" id="ref-rec-cb-4"></span><details class="erm-comment"><summary>(<span class="erm-anchor" id="ref-rec-cb-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">!!UN:C6750880/1/94;  Хранилище Циклопов
!!UN:C6750900/1/16;  Сокровищница Гномов
!!UN:C6750920/1/4;   Консерватория Грифонов
!!UN:C6751108/1/12;  Консерватория Грифонов награда - Ангелы
!!UN:C6750940/1/42;  Убежище Бесов
!!UN:C6750960/1/76;  Склады Медуз
!!UN:C6750980/1/38;  Банк Наг
!!UN:C6751000/1/104; Улей Змиев
!!UN:C6751124/1/108; Улей Змиев Награда - Виверны
!!UN:C6751020/1/115; Ветхий корабль (Элементаль воды)
!!UN:C6751040/1/60;  Кораблекрушение (Стражи)

** Склеп
!!UN:C6751060/1/56;  Скелет
!!UN:C6751064/1/58;  Зомби
!!UN:C6751068/1/60;  Страж
!!UN:C6751072/1/62;  Вампир

** Утопия драконов
!!UN:C6751080/1/26;  Зелёный дракон
!!UN:C6751084/1/82;  Красный дракон
!!UN:C6751088/1/27;  Золотой дракон
!!UN:C6751092/1/83;  Чёрный дракон</code></pre></div></details>
</div></details>

<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-m"></span><span class="erm-anchor" id="command-m-1-2"></span><span class="erm-tone-red"><strong>M$1/$2</strong></span><br>
Установить/проверить/получить бонусных существ <a href="../../tables/creatures/#ref-form-creature" data-context="true">типа $1</a> и кол-вом $2 (1..127).<br>
Чтобы удалить бонусное существо, установите тип -1 и кол-во 0.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-r"></span><span class="erm-anchor" id="command-r-1-2"></span><span class="erm-tone-red"><strong>R#1/$2</strong></span><br>
Установить/проверить/получить бонус ресурсов <a href="../../tables/resources/#ref-form-resource" data-context="true">типа #1</a> и кол-вом $2. Вы 
можете установить все 7 ресурсов.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-t"></span><span class="erm-anchor" id="command-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Установить/проверить/получить, посещён ли банк (1) или нет (0).<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cb-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cb-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Если вы включаете хранилище снова (устанавливаете данную команду на 0), вам нужно установить как минимум одного охранника, 
иначе следующий герой, посетивший данное хранилище, получит всю награду без битвы.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cb-v"></span><span class="erm-anchor" id="command-v"></span><span class="erm-tone-red"><strong>V$</strong></span><br>
Установить/проверить/получить слово «Посещено» для
<a href="../../tables/players/#ref-form-gamerscolor-bit" data-context="true">игрока $</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cb-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cb-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Это побитная маска, например, если хранилище посещал синий, красный и зелёный, и оно было ограблено синим сразу, 
$ будет равно 2(синий)+1(красный)+8(зелёный)=11. Этим игрокам на жилище будет надпись, что оно посещено. Также, если игрок посетил хранилище, 
но не атаковал, его биты всё равно занесутся в значение, редактируемое этой опцией, и игроку будет в подсказке указано кол-во охранников.</div></details>

<hr>













</div>
</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/)



## Связанные команды и таблицы {#reference-links}

[Таблица объектов в игре](../../tables/objects/#values) · [Таблица объектов в игре](../../tables/objects/) · [Хранилища существ](../../tables/creature-banks/) · [Таблица артефактов](../../tables/artifacts/) · [Таблица существ](../../tables/creatures/) · [Ресурсы](../../tables/resources/) · [Цвета игроков](../../tables/players/)
