---
{"title":"Картинки для IF:Q","summary":"Тип картинки определяет трактовку следующего параметра. Для города выбирается 22 + тип города.","translationStatus":"reviewed"}
---

## Картинки для IF:Q {#ref-form-picts}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Типы картинок</span></div>
<span class="erm-anchor" id="ref-form-picts-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note"><span>Используются командой <a href="../../receivers/if/#ref-rec-if-q">IF:Q</a></span>
</div>
<div class="table-wrap erm-reference-table"><table class="erm-table-second-center" width="100%">
	<span class="erm-anchor" id="ref-form-picts-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="20%">Название</td>
		<td>Тип</td>
		<td>Подтип</td>
	</tr>
	<tr>
		<td>Ресурс</td>
		<td><a href="../resources/#ref-form-resource">0..7</a></td>
		<td>Кол-во</td>
	</tr>
	<tr>
		<td>Артефакт</td>
		<td>8</td>
		<td><a href="../artifacts/#ref-form-a1">Номер артефакта</a></td>
	</tr>
	<tr>
		<td>Заклинание</td>
		<td>9</td>
		<td><a href="../spells/#ref-form-spell">Номер заклинания</a></td>
	</tr>
	<tr>
		<td>Флаг</td>
		<td>10</td>
		<td><a href="../players/#ref-form-if-flags">Номер флага</a></td>
	</tr>
	<tr>
		<td>Удача<br><small>позитивная</small></td>
		<td>11</td>
		<td>+ удачи</td>
	</tr>
	<tr>
		<td>Удача<br><small>нейтральная</small></td>
		<td>12</td>
		<td>Не имеет значения</td>
	</tr>
	<tr>
		<td>Удача<br><small>отрицательная</small></td>
		<td>13</td>
		<td>- удачи</td>
	</tr>
	<tr>
		<td>Мораль<br><small>позитивная</small></td>
		<td>14</td>
		<td>+ морали</td>
	</tr>
	<tr>
		<td>Мораль<br><small>нейтральная</small></td>
		<td>15</td>
		<td>Не имеет значения</td>
	</tr>
	<tr>
		<td>Мораль<br><small>отрицательная</small></td>
		<td>16</td>
		<td>- морали</td>
	</tr>
	<tr>
		<td>Опыт</td>
		<td>17</td>
		<td>Кол-во [<a href="./#ref-form-picts" title="Опыт с подтипом &quot;-1&quot; даёт картинку опыта с подписью &quot;+1 уровень&quot;.
(как у Древа Знаний)"> ? </a>]</td>
	</tr>
	<tr>
		<td>Вторичный навык</td>
		<td>20</td>
		<td><a href="../secondary-skill-pictures/#ref-form-secondaryskill-if">Навык + уровень</a></td>
	</tr>
	<tr>
		<td>Монстр</td>
		<td>21</td>
		<td><a href="../creatures/#ref-form-creature">Тип монстра</a></td>
	</tr>
	<tr>
		<td>Здание в городе</td>
		<td>22…30<br><small>в зависимости от <a href="../towns/#ref-form-towns">типа города</a></small></td>
		<td><a href="../buildings/#ref-form-buldings">Номер строения</a></td>
	</tr>
	<tr>
		<td>Первичный навык</td>
		<td>31..34<br><small>в зависимости от <a href="../../framework/constants/hero-skills/#ref-form-primaryskill">навыка</a></small></td>
		<td>Кол-во</td>
	</tr>
	<tr>
		<td>Баллы заклинаний</td>
		<td>35</td>
		<td>Кол-во</td>
	</tr>
	<tr>
		<td>Монеты</td>
		<td>36</td>
		<td>Кол-во</td>
	</tr>
</table></div><br>
</div>
</section>
:::

## Назначение {#meaning}

Тип картинки определяет трактовку следующего параметра. Для города выбирается 22 + тип города.

## Значения {#values}

| Тип | Картинка | Подтип |
| --- | --- | --- |
| 0–7 | Ресурс | [Количество](../resources/) |
| 8 | Артефакт | [ID артефакта](../artifacts/) |
| 9 | Заклинание | [ID заклинания](../spells/) |
| 10 | Флаг | [Цвет игрока](../players/) |
| 11 / 12 / 13 | Удача: плюс / ноль / минус | Величина, кроме нейтральной |
| 14 / 15 / 16 | Мораль: плюс / ноль / минус | Величина, кроме нейтральной |
| 17 | Опыт | Количество; отображение зависит от команды |
| 20 | Вторичный навык | [Навык и уровень](../secondary-skill-pictures/) |
| 21 | Существо | [ID существа](../creatures/) |
| 22–30 | Городское здание | [Номер картинки здания](../building-pictures/) |
| 31–34 | Первичный навык | Количество |
| 35 | Мана | Количество |
| 36 | Монеты | Количество |

## Связанные команды и таблицы {#related}

[IF:Q](../../receivers/if/) · [Все таблицы](../)

## Связанные команды и таблицы {#reference-links}

[Флаги, сообщения и выбор (IF)](../../receivers/if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Ресурсы](../resources/) · [Таблица артефактов](../artifacts/) · [Таблица заклинаний](../spells/) · [Цвета игроков](../players/) · [Картинки вторичных навыков](../secondary-skill-pictures/) · [Таблица существ](../creatures/) · [Типы городов](../towns/) · [ID городских зданий](../buildings/) · [Навыки героев](../../framework/constants/hero-skills/) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-a0100010000-s0100010000-r0100010000-v) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-b-1-2-p) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-d-1-15-f-1-2-3-4-5-e) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-g-single-result-mask-title-item1-item12) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-l-text-m-text-m0-4-text-m1-z) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-ntype-subtype-n-text) · [Флаги, сообщения и выбор (IF)](../../receivers/if/) · [Флаги, сообщения и выбор (IF)](../../receivers/if/#command-w-x) · [Биты, маски и HEX](../bits/) · [Отладка и совместимость ERM](../../compatibility/) · [Клики мыши (CM)](../../triggers/cm/) · [Глобальные события (GE)](../../receivers/ge/) · [Таблица героев](../heroes/) · [Переменные, строки и массивы](../../variables/) · [Общие игровые операции (UN)](../../receivers/un/#command-n0-z-id-n1-z-id-n2-z-town-building-n3-z-monster-plural-n4-z-skill)
