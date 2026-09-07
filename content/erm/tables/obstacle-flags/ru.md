---
{"title":"Флаги препятствий","summary":"BU:O возвращает комбинацию битов клетки; номер бита и его значение различаются.","translationStatus":"reviewed"}
---

## Таблица битов препятствий {#ref-form-obstacles-bit}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Флаги боевых препятствий</span></div>
<span class="erm-anchor" id="ref-form-obstacles-bit-q1"></span><div class="erm-tone-quote erm-legacy-code erm-note">Используется командой <a href="../../receivers/bu/#ref-rec-bu-o">BU:O</a></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
<span class="erm-anchor" id="ref-form-obstacles-bit-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="35">Бит</td>
	<td>Описание флага</td>
</tr>
<tr>
	<td>1</td>
	<td>Магическое препятствие</td></tr>
<tr>
	<td><span class="erm-tone-red">2</span></td>
	<td><span class="erm-tone-red">Препятствие</span></td></tr>
<tr>
	<td>4</td>
	<td>Зыбучие пески (магия)</td></tr>
<tr>
	<td><span class="erm-tone-red">8</span></td>
	<td><span class="erm-tone-red">Мины (магия)</span></td></tr>
<tr>
	<td>16</td>
	<td>Стена огня (магия)</td></tr>
<tr>
	<td><span class="erm-tone-red">32</span></td>
	<td><span class="erm-tone-red">Силовое поле (магия)</span></td></tr>
</table></div>

</div>
</section>
:::

## Назначение {#meaning}

BU:O возвращает комбинацию битов клетки; номер бита и его значение различаются.

## Значения {#values}

| ID | Значение |
| --- | --- |
| `1` | Магическое препятствие |
| `2` | Препятствие |
| `4` | Зыбучие пески |
| `8` | Мины |
| `16` | Стена огня |
| `32` | Силовое поле |

## Каталоги {#related}

[Справочные таблицы](../) · [Константы Framework](../../framework/constants/)

## Связанные команды и таблицы {#reference-links}

[Подготовка поля боя (BF)](../../receivers/bf/#command-o-1-2) · [Управление полем боя (BU)](../../receivers/bu/#command-o)
