---
{"title":"Особые бонусы командира","summary":"CO использует номера бонусов и их битовые маски; маска = 2 в степени номера.","translationStatus":"reviewed"}
---

## Бонусы командиров {#ref-form-cobo}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Бонусы командиров</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-second-center" width="100%">
	<span class="erm-anchor" id="ref-form-cobo-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="5%">Бит</td>
		<td width="5%">Номер</td>
		<td>Описание</td>
	</tr>
	<tr>
		<td>1</td>
		<td>0</td>
		<td>Атака + Защита = уменьшение вражеской защиты на 50%</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">2</span></td>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Атака + Здоровье = страх</span></td>
	</tr>
	<tr>
		<td>4</td>
		<td>2</td>
		<td>Атака + Урон = всегда максимальный урон</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">8</span></td>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Атака + Сила Магии = безответный удар</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>4</td>
		<td>Атака + Скорость = стрельба</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Защита + Здоровье = отвечает всем</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>6</td>
		<td>Защита + Урон = бьёт по всем врагам вокруг</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Защита + Сила Магии = огненный щит</span></td>
	</tr>
	<tr>
		<td>256</td>
		<td>8</td>
		<td>Защита + Скорость = блок</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">512</span></td>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Здоровье + Урон = двойной удар</span></td>
	</tr>
	<tr>
		<td>1024</td>
		<td>10</td>
		<td>Здоровье + Сила Магии = парализация</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">2048</span></td>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Здоровье + Скорость = регенерация</span></td>
	</tr>
	<tr>
		<td>4096</td>
		<td>12</td>
		<td>Урон + Сила Магии = смертельный взгляд</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">8192</span></td>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Урон + Скорость = кавалерийский бонус</span></td>
	</tr>
	<tr>
		<td>16384</td>
		<td>14</td>
		<td>Сила Магии + Скорость = полёт</td>
	</tr>
</table></div>
<br>
 </div>
</section>
:::

## Назначение {#meaning}

CO использует номера бонусов и их битовые маски; маска = 2 в степени номера.

## Значения {#values}

| ID | Значение |
| --- | --- |
| `0 / 1` | Защита врага -50% |
| `1 / 2` | Страх |
| `2 / 4` | Максимальный урон |
| `3 / 8` | Безответный удар |
| `4 / 16` | Стрельба |
| `5 / 32` | Ответ всем |
| `6 / 64` | Атака всех вокруг |
| `7 / 128` | Огненный щит |
| `8 / 256` | Блок |
| `9 / 512` | Двойной удар |
| `10 / 1024` | Паралич |
| `11 / 2048` | Регенерация |
| `12 / 4096` | Смертельный взгляд |
| `13 / 8192` | Кавалерийский бонус |
| `14 / 16384` | Полёт |

## Каталоги {#related}

[Справочные таблицы](../) · [Константы Framework](../../framework/constants/)

## Связанные команды и таблицы {#reference-links}

[Классы героев](../hero-classes/)
