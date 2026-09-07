---
{"title":"Опыт армейского отряда (EX)","summary":"Ресивер EX: опыт армейского отряда, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Опыт армейского отряда (EX)"}
---

## Ресивер EX {#ref-rec-ex}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ex-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>EX</strong> (опыт стеков)</span></div>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-ex-red"></span><span class="erm-tone-red">
<br>
<strong>!!EX$1/$2:XXXX;</strong></span> 
- <strong>опыт стека существ.</strong> 
 <br>
    $1 – номер героя (<a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">0..155</a>, 
-1),     <br>
    $2 – номер слота (0..6).<br>
<em>Расширение синтаксиса 1:<br>
</em><span class="erm-tone-red"><strong>!!EX$1/$2/$3/$4:XXXX;</strong></span>
<br>
    $1 – X (0…)<br>
    $2 – Y (0…)<br>
    $3 – L (0 - поверхность, 1 - подземелье)<br>
    $4 – номер слота (в этой позиции может быть герой, город, 
гарнизон или шахта)<br>
<em>Расширение синтаксиса 2:<br>
</em><span class="erm-tone-red"><strong>!!EX$1/$2/$3/$4/$5:XXXX;</strong></span><br>
    $1 – X<br>
    $2 – Y<br>
    $3 – L<br>
    $4 – номер слота (0..6)<br>
    $5 – тип объекта<br>
         1 = герой<br>
         2 = город<br>
         3 = шахта<br>
         4 = гарнизон<br>
         другое число = любой выше 
перечисленный<br>
Если вы используете 4 параметра, пятый по умолчанию 
находится в состоянии "первый найденный". Поиск идёт в следующем порядке: герои, 
города, шахты, гарнизоны.</div>
<hr>
<div class="erm-paragraph">
<strong><span class="erm-tone-red">
<span class="erm-anchor" id="ref-rec-ex-a"></span><span class="erm-anchor" id="command-a-1-2-3"></span>A$1/$2/$3</span></strong><br>
Установить/проверить/получить информацию по стеку:<br>
         $1 –
<a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> (255 – пустой слот)<br>
         $2 – кол-во существ<br>
         $3 – кол-во опыта у существа</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-c"></span><span class="erm-anchor" id="command-c-1-2-3-4-5-6"></span>C$1/$2/$3[/$4/$5/$6]</strong></span><br>
Соединить стеки<br>
         
<strong>$1</strong> – тип исходного стека<br>
             $1 = 0 
– у героя<br>
                 $2 – 
номер героя (-1 – текущий)<br>
                 $3 – 
слот героя (0..6)<br>
                [$4] – 
показ предупреждения (см. ниже)<br>
            $1=1 – герой в координатах <br>
            $1=2 – город в координатах <br>
            $1=3 – шахта в координатах <br>
            $1=4 – гарнизон в координатах <br>
        $2 – X-позиция<br>
        $3 – Y-позиция<br>
        $4 – уровень (0 = поверхность, 1 = подземелье)<br>
        $5 – слот армии (0..6)<br>
       [$6] – показ предупреждения<br>
<strong>Результаты</strong><br>
Эта команда установит переменную v1 на:<br>
    -1, если это разные существа (нельзя комбинировать)<br>
    0, если произошла ошибка (нельзя комбинировать)<br>
    1, если комбинирование прошло успешно.<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ex-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ex-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Эта команда добавит исходный стек к слоту армии, вместе с комбинированием 
параметров. Весь опыт распространится поровну на всех солдат, артефакты 
суммируются. Если вы установите <strong>тип предупреждения</strong> на 1 (по умолчанию 0), 
вы не получите сообщение, что эти стеки различны.<br>
<u>Пример 1</u>:<br>
Герой посещает объект и его стек 3 добавляется к стеку 1 (они должны быть одного типа):
<pre class="erm-example"><code class="language-erm">!?OB5/3/0;
!!EX-1/1:C0/-1/3;</code></pre>
<br>
<u>Пример 2</u>:<br>
Вы посещаете объект и ваш текущий герой "добавляет" первый стек в город (вход 3/2/0) к стеку №3.
<pre class="erm-example"><code class="language-erm">!?OB5/3/0;
!!EX-1/3:C2/3/2/0/1;</code></pre></div></details>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-e"></span><span class="erm-anchor" id="command-e-n-t"></span>E$</strong></span><br>
Установить/проверить/получить опыт существ:<br>
         $ – опыт существ</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-n"></span>N$</strong></span><br>
Установить/проверить/получить кол-во существ<br>
	         $ – кол-во
</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-r"></span><span class="erm-anchor" id="command-r-1-2"></span><span class="erm-anchor" id="command-r-1-2-3-4"></span>R$1/$2</strong></span><br>
Установить/проверить/получить артефакт и опцию<br>
         $1 – номер артефакта (доступен только <a href="../../tables/artifacts/#ref-form-a1-z" data-context="true" title="Знамя Полководца">артефакт #156</a>)<br>
         $2 – </div><span class="erm-anchor" id="ref-rec-ex-2"></span><details class="erm-comment"><summary>опция артефакта (0..8)</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-ex-t0"></span><blockquote class="erm-margin-top-zero erm-note">
	<div class="table-wrap erm-reference-table"><table width="100%">
		<tr>
			<td class="erm-align-center" width="40">0</td>
			<td> +2 здоровья плюс удвоение текущего бонуса здоровья в бою</td>
		</tr>
		<tr>
			<td class="erm-align-center">1</td>
			<td> +2 атаки плюс удвоение текущего бонуса атаки в бою</td>
		</tr>
		<tr>
			<td class="erm-align-center">2</td>
			<td> +2 защиты плюс удвоение текущего бонуса защиты в бою</td>
		</tr>
		<tr>
			<td class="erm-align-center">3</td>
			<td> +1 урона плюс удвоение текущего бонуса минимального и максимального урона в бою</td>
		</tr>
		<tr>
			<td class="erm-align-center">4</td>
			<td> +1 скорости плюс удвоение текущего бонуса скорости в бою</td>
		</tr>
		<tr>
			<td class="erm-align-center">5</td>
			<td> +50% опыта отряду за битву</td>
		</tr>
		<tr>
			<td class="erm-align-center">6</td>
			<td> Уменьшение защиты цели на 25%</td>
		</tr>
		<tr>
			<td class="erm-align-center">7</td>
			<td> 25% шанс блокирования 50% урона</td>
		</tr>
		<tr>
			<td class="erm-align-center">8</td>
			<td> 2 дополнительных ответа</td>
		</tr>
	</table></div></blockquote></div></details>
<div class="erm-paragraph">
<em>Расширение синтаксиса: </em> <br>
<span class="erm-tone-red"><strong>R$1/$2/$3/$4</strong></span><br>
         $1 – есть артефакт или нет (0 = 
нет, 1 = да)<br>
         $2 – номер артефакта (сейчас 
только 156)<br>
         $3 – подтип артефакта (опции 
0..15 – ещё не все используются)<br>
         $4 – кол-во копий артефакта 
(0..3)</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-ex-t"></span>T$</strong></span><br>
Установить/проверить/получить тип монстра<br>
         $ – 
<a href="../../tables/creatures/#ref-form-creature" data-context="true">тип монстра</a> (255 – пустой слот)</div>

<hr>





</div>
</div>
</section>
:::

## Связанные материалы {#related}

[EA](../../receivers/ea/)



## Связанные команды и таблицы {#reference-links}

[Таблица героев](../../tables/heroes/) · [Таблица существ](../../tables/creatures/) · [Таблица артефактов](../../tables/artifacts/#values)
