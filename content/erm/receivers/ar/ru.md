---
{"title":"Артефакты и ресурсы на карте (AR)","summary":"Ресивер AR: артефакты и ресурсы на карте, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Артефакты и ресурсы на карте (AR)"}
---

## Ресивер AR {#ref-rec-ar}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ar-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>AR</strong> (артефакты или ресурсы)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-ar-red"></span><span class="erm-tone-red">!!AR#1/#2/#3:XXXX;</span> - артефакт или ресурс в координатах X Y L (#1/#2/#3).</strong><br>
<em>Расширение синтаксиса:</em><br>
<strong><span class="erm-tone-red">!!AR$:XXXX;</span> - </strong>артефакт ИЛИ ресурс в координатах v[$], v[$+1], v[$+2] соответственно.<br>
<strong>Используется для модификации атрибутов артефактов или ресурсов в определённой позиции.</strong><br>
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">Артефакты</a> – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 5</a>, 
свитки с <a href="../../tables/spells/#ref-form-spell" data-context="true">заклинаниями</a> – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 93</a>; 
<a href="../../tables/resources/#ref-form-resource" data-context="true">ресурсы</a> – <a href="../../tables/objects/#ref-form-objects" data-context="true">тип 79</a>.</div>
<div class="erm-paragraph">
Артефакты и ресурсы имеют раздельную нумерацию.</div>
<div class="erm-paragraph">
<strong></strong></div><span class="erm-anchor" id="ref-rec-ar-1"></span><details class="erm-comment"><summary>Важное замечание (<span class="erm-anchor" id="ref-rec-ar-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Большинство этих команд не будут воздействовать на артефакт или кучку 
ресурсов, если он не имеет некие установки, сделанные в Редакторе карт. Это 
может быть простым настраиванием охраны у ресурса или артефакта. Если артефакт 
или ресурс не имеет никакой специальной установки, то появится сообщение о 
ошибке ERM. Вы можете использовать статусы опций вывода ошибок командами 
<a href="../un/#ref-rec-un-p904">UN:P904 P905</a>, во избежание проблем; также можете использовать команду <a href="../ob/#ref-rec-ob-c">
OB:C</a> для получения контрольного числа, и обработки его значения (но команда 
V$ будет работать корректно, даже если свиток или ресурс не будут иметь 
какой-либо установки).</div></details>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-ar-g"></span><span class="erm-anchor" id="command-g-1-2-3"></span>G#1/$2/$3</span></strong><br>
Установить/проверить/получить монстров - охранников <br>
         #1 – позиция (0..6)  <br>
         $2 – <a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a><br>
         $3 – кол-во монстров<br>
Команда не может включить охранников, она может лишь поставить их. Используйте 
опцию <a href="./#ref-rec-ar-x">X</a> для включения.</div>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-ar-m"></span><span class="erm-anchor" id="command-m-text"></span><span class="erm-tone-red">M^ТЕКСТ^</span></strong><br>
Установить текстовое послание ТЕКСТ. Длина текста может превышать 
оригинальный. Послание может содержать любые символы, кроме "^" и ";"</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M#</strong></span><br>
Установить текст сообщения такой же, что и в <a href="../ge/#ref-rec-ge">
глобальном событии</a> под номером #.</div>
<hr><div class="erm-paragraph">
<strong><span class="erm-tone-red">M-1</span></strong><br>
Восстановить оригинальное сообщение для артефакта</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>Mz#</strong></span><br>
Установить текст из текстовой переменной z#</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong>M1/$</strong></span><br>
Установить и получить текстовый параметр. Вы можете использовать 
данную опцию, когда команда M используется для установки имени или сообщения.<br>
         $ – номер текстовой переменно<br>
         = -1 – отключить сообщение (восстановить по умолчанию)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ar-v"></span><span class="erm-anchor" id="command-v"></span>V$</strong></span><br>
Установить/проверить/получить номер 
<a href="../../tables/spells/#ref-form-spell" data-context="true">заклинания</a> в свитке (если ресурс, то кол-во 
ресурса)<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-ar-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ar-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Для артефактов это значение задаёт тип поднимания:<br>
0 – Артефакт просто поднимается<br>
1 – Предложение купить артефакт за 2000 монет<br>
2 – Для поднятия артефакта требуется мудрость<br>
3 – Для поднятия артефакта требуется лидерство<br>
4 – Предложение купить артефакт за 2500 монет и 3 дерева<br>
5 – Предложение купить артефакт за 3000 монет и 5 дерева<br>
6 – У артефакта есть охрана (ещё один способ её включить)<br>
Все значения большие 6 делают артефакт неподнимаемым.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ar-x"></span><span class="erm-anchor" id="command-x"></span>X#</strong></span><br>
Включить охранников, если # не равно нулю, иначе - отключить. Проверки на 
существование охранников нет.</div>
<hr>














</div>

</div>
</section>
:::

## Связанные материалы {#related}

[OB](../../receivers/ob/)



## Связанные команды и таблицы {#reference-links}

[Таблица артефактов](../../tables/artifacts/) · [Таблица объектов в игре](../../tables/objects/) · [Таблица заклинаний](../../tables/spells/) · [Ресурсы](../../tables/resources/) · [Общие игровые операции (UN)](../un/) · [Объекты карты (OB)](../ob/#command-c) · [Таблица существ](../../tables/creatures/) · [Глобальные события (GE)](../ge/)
