---
{"title":"Снаряды и лучи","summary":"Тип изображения выстрела отличается от типа существа и флага стрелка.","translationStatus":"reviewed"}
---

## Типы снаряда {#ref-form-weapon}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Типы снарядов, соответствующие их стандартным изображениям в бою, для конкретных существ<br></span><span><br>
<a href="../creatures/#ref-form-creature">Таблица существ</a>
</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
	<span class="erm-anchor" id="ref-form-weapon-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="15%">Номер</td>
		<td>Существо</td>
	</tr>
	<tr>
		<td>0</td>
		<td>Арбалетчик</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Монах</span></td>
	</tr>
	<tr>
		<td>2</td>
		<td>Эльф</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Мастер-Гремлин</span></td>
	</tr>
	<tr>
		<td>4</td>
		<td>Маг</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Титан</span></td>
	</tr>
	<tr>
		<td>6</td>
		<td>Гог</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Лич</span></td>
	</tr>
	<tr>
		<td>8</td>
		<td>Медуза</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Орк</span></td>
	</tr>
	<tr>
		<td>10</td>
		<td>Циклоп</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Ящер</span></td>
	</tr>
	<tr>
		<td>12</td>
		<td>Элементаль льда</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Хоббит</span></td>
	</tr>
	<tr>
		<td>14</td>
		<td>Катапульта</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">15</span></td>
		<td><span class="erm-tone-red">Баллиста</span></td>
	</tr>
</table></div>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> тип снаряда 16 использует DEF с пустым именем (даже без расширения .def), 
если такой есть в <em class="erm-legacy-file">h3sprite.lod</em> (если его нет, игра вылетает).</div>
</div>
</section>
:::

## Назначение {#meaning}

Тип изображения выстрела отличается от типа существа и флага стрелка.

## Значения {#values}

| ID | Значение |
| --- | --- |
| `0` | Лучник |
| `1` | Монах |
| `2` | Эльф |
| `3` | Мастер-гремлин |
| `4` | Маг |
| `5` | Титан |
| `6` | Гог |
| `7` | Лич |
| `8` | Медуза |
| `9` | Орк |
| `10` | Циклоп |
| `11` | Ящер |
| `12` | Ледяной элементаль |
| `13` | Полурослик |
| `14` | Катапульта |
| `15` | Баллиста |

## Применимость {#limits}

Исторический тип 16 ищет DEF с пустым именем и вызывает сбой, если ресурса нет. Для луча используется флаг 2048; цвета 0 зелёный, 1 белый, 2 чёрный. Диапазоны исходного рецепта относятся к чистому h3wog.exe, не ко всем расширенным существам. [Подробнее о памяти](../../un-c/projectile-type/).

## Каталоги {#related}

[Справочные таблицы](../) · [Константы Framework](../../framework/constants/)

## Связанные команды и таблицы {#reference-links}

[Таблица существ](../creatures/)
