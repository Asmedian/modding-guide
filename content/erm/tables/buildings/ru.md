---
{"title":"ID городских зданий","summary":"Номер здания для CA и бит в массиве построек. Тип города уточняет смысл специальных строений. Картинки зданий IF:Q используют другую нумерацию.","translationStatus":"reviewed"}
---

## Таблица зданий {#ref-form-buldings}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Таблица строений<br></span></div>

<div class="table-wrap erm-reference-table"><table width="100%">
	<tr>
		<td width="5%"><span class="erm-tone-purple"><strong>Байт</strong></span></td>
		<td width="5%"><span class="erm-tone-purple"><strong>Бит</strong></span></td>
		<td width="5%"><span class="erm-tone-purple"><strong>Номер здания</strong></span></td>
		<td width="85%"><span class="erm-tone-purple"><strong> Имя здания</strong></span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8">0</td>
		<td>01</td>
		<td>0</td>
		<td>Гильдия магов уровня 1</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Гильдия магов уровня 2</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>2</td>
		<td>Гильдия магов уровня 3</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Гильдия магов уровня 4</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>4</td>
		<td>Гильдия магов уровня 5</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Таверна</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>6</td>
		<td>Верфь (0,4,7,8); ??? (1,2,3,5,6)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Форт</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8"><span class="erm-tone-red">1</span></td>
		<td>01</td>
		<td>8</td>
		<td>Цитадель</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Замок</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>10</td>
		<td>Сельская управа</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Префектура</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>12</td>
		<td>Муниципалитет</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Капитолий</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>14</td>
		<td>Рынок</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">15</span></td>
		<td><span class="erm-tone-red">Хранилище ресурсов</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8">2</td>
		<td>01</td>
		<td>16</td>
		<td>Кузница</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">17</span></td>
		<td><span class="erm-tone-red">Маяк (0), Таинственный пруд (1), Торговцы артефактами (2,5,8), ??? (3), Вуаль Тьмы (4), 
		Чёрный ход (6), Клетка богов Войны (7)</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>18</td>
		<td>Строение орды для неулучшенных существ: Грифонов, Гномов, Каменных 
		Горгулий, Бесов, Скелетов, Троглодитов, Гоблинов, Гноллов, Маленьких Фей</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">19</span></td>
		<td><span class="erm-tone-red">Строение орды для улучшенных существ: Королевские Грифоны, Боевые Гномы, 
		Обсидиановые Горгульи, Черти, Скелеты-Воины, Адские Троглодиты, Хобгоблины, Гноллы-Мародёры, Феи</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>20</td>
		<td>Верфь с лодкой (0,4,7,8); ??? (1,2,3,5,6)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">21</span></td>
		<td><span class="erm-tone-red">Конюшни (0), Фонтан Удачи (1), Смотровая башня (2), Серные Тучи (3), 
		Усилитель Некромантии (4), Водоворот Маны (5), Гильдия наёмников (6), Знаки страха (7), Университет магии (8)</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>22</td>
		<td>Братство Меча (0), Сокровищница гномов (1), Библиотека (2), Врата замка (3), Трансформатор Скелетов (4), 
		Портал Вызова (5), Двор Баллист (6), Кровавый Обелиск (7), ??? (8)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">23</span></td>
		<td><span class="erm-tone-red">??? (0,1,4,7,8), Стена Знаний (2), Орден Огня (3), Академия боевых искусств (5), Храм Валгаллы (6)</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8"><span class="erm-tone-red">3</span></td>
		<td>01</td>
		<td>24</td>
		<td>??? (0,2,4,5,6,7,8), Строение орды для неулучшенных существ: Дендроиды-стражники, Адские гончие</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">25</span></td>
		<td><span class="erm-tone-red">??? (0,2,4,5,6,7,8), Строение орды для улучшенных существ: Дендроиды-солдаты, Церберы</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>26</td>
		<td>Грааль</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">27</span></td>
		<td><span class="erm-tone-red">??? (все)</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>28</td>
		<td>??? (все)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">29</span></td>
		<td><span class="erm-tone-red">??? (все)</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>30</td>
		<td>Жилище 1го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">31</span></td>
		<td><span class="erm-tone-red">Жилище 2го уровня</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="8">4</td>
		<td>01</td>
		<td>32</td>
		<td>Жилище 3го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">33</span></td>
		<td><span class="erm-tone-red">Жилище 4го уровня</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>34</td>
		<td>Жилище 5го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">35</span></td>
		<td><span class="erm-tone-red">Жилище 6го уровня</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td>36</td>
		<td>Жилище 7го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">32</span></td>
		<td><span class="erm-tone-red">37</span></td>
		<td><span class="erm-tone-red">Улучшенное жилище 1го уровня</span></td>
	</tr>
	<tr>
		<td>64</td>
		<td>38</td>
		<td>Улучшенное жилище 2го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">128</span></td>
		<td><span class="erm-tone-red">39</span></td>
		<td><span class="erm-tone-red">Улучшенное жилище 3го уровня</span></td>
	</tr>
	<tr>
		<td class="erm-align-center" rowspan="4"><span class="erm-tone-red">5</span></td>
		<td>01</td>
		<td>40</td>
		<td>Улучшенное жилище 4го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">02</span></td>
		<td><span class="erm-tone-red">41</span></td>
		<td><span class="erm-tone-red">Улучшенное жилище 5го уровня</span></td>
	</tr>
	<tr>
		<td>04</td>
		<td>42</td>
		<td>Улучшенное жилище 6го уровня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">08</span></td>
		<td><span class="erm-tone-red">43</span></td>
		<td><span class="erm-tone-red">Улучшенное жилище 7го уровня</span></td>
	</tr>
</table></div>
</div>
</section>
:::

## Назначение {#meaning}

Номер здания для CA и бит в массиве построек. [Тип города](../towns/) уточняет смысл специальных строений. [Картинки зданий IF:Q](../building-pictures/) используют другую нумерацию.

## Значения {#values}

| ID | Байт | Маска | Здание |
| --- | --- | --- | --- |
| 0 {#id-0} | 0 | 1 | Гильдия магов уровня 1 |
| 1 {#id-1} | 0 | 2 | Гильдия магов уровня 2 |
| 2 {#id-2} | 0 | 4 | Гильдия магов уровня 3 |
| 3 {#id-3} | 0 | 8 | Гильдия магов уровня 4 |
| 4 {#id-4} | 0 | 16 | Гильдия магов уровня 5 |
| 5 {#id-5} | 0 | 32 | Таверна |
| 6 {#id-6} | 0 | 64 | Верфь (0,4,7,8); ??? (1,2,3,5,6) |
| 7 {#id-7} | 0 | 128 | Форт |
| 8 {#id-8} | 1 | 1 | Цитадель |
| 9 {#id-9} | 1 | 2 | Замок |
| 10 {#id-10} | 1 | 4 | Сельская управа |
| 11 {#id-11} | 1 | 8 | Префектура |
| 12 {#id-12} | 1 | 16 | Муниципалитет |
| 13 {#id-13} | 1 | 32 | Капитолий |
| 14 {#id-14} | 1 | 64 | Рынок |
| 15 {#id-15} | 1 | 128 | Хранилище ресурсов |
| 16 {#id-16} | 2 | 1 | Кузница |
| 17 {#id-17} | 2 | 2 | Маяк (0), Таинственный пруд (1), Торговцы артефактами (2,5,8), ??? (3), Вуаль Тьмы (4), Чёрный ход (6), Клетка богов Войны (7) |
| 18 {#id-18} | 2 | 4 | Строение орды для неулучшенных существ: Грифонов, Гномов, Каменных Горгулий, Бесов, Скелетов, Троглодитов, Гоблинов, Гноллов, Маленьких Фей |
| 19 {#id-19} | 2 | 8 | Строение орды для улучшенных существ: Королевские Грифоны, Боевые Гномы, Обсидиановые Горгульи, Черти, Скелеты-Воины, Адские Троглодиты, Хобгоблины, Гноллы-Мародёры, Феи |
| 20 {#id-20} | 2 | 16 | Верфь с лодкой (0,4,7,8); ??? (1,2,3,5,6) |
| 21 {#id-21} | 2 | 32 | Конюшни (0), Фонтан Удачи (1), Смотровая башня (2), Серные Тучи (3), Усилитель Некромантии (4), Водоворот Маны (5), Гильдия наёмников (6), Знаки страха (7), Университет магии (8) |
| 22 {#id-22} | 2 | 64 | Братство Меча (0), Сокровищница гномов (1), Библиотека (2), Врата замка (3), Трансформатор Скелетов (4), Портал Вызова (5), Двор Баллист (6), Кровавый Обелиск (7), ??? (8) |
| 23 {#id-23} | 2 | 128 | ??? (0,1,4,7,8), Стена Знаний (2), Орден Огня (3), Академия боевых искусств (5), Храм Валгаллы (6) |
| 24 {#id-24} | 3 | 1 | ??? (0,2,4,5,6,7,8), Строение орды для неулучшенных существ: Дендроиды-стражники, Адские гончие |
| 25 {#id-25} | 3 | 2 | ??? (0,2,4,5,6,7,8), Строение орды для улучшенных существ: Дендроиды-солдаты, Церберы |
| 26 {#id-26} | 3 | 4 | Грааль |
| 27 {#id-27} | 3 | 8 | ??? (все) |
| 28 {#id-28} | 3 | 16 | ??? (все) |
| 29 {#id-29} | 3 | 32 | ??? (все) |
| 30 {#id-30} | 3 | 64 | Жилище 1го уровня |
| 31 {#id-31} | 3 | 128 | Жилище 2го уровня |
| 32 {#id-32} | 4 | 1 | Жилище 3го уровня |
| 33 {#id-33} | 4 | 2 | Жилище 4го уровня |
| 34 {#id-34} | 4 | 4 | Жилище 5го уровня |
| 35 {#id-35} | 4 | 8 | Жилище 6го уровня |
| 36 {#id-36} | 4 | 16 | Жилище 7го уровня |
| 37 {#id-37} | 4 | 32 | Улучшенное жилище 1го уровня |
| 38 {#id-38} | 4 | 64 | Улучшенное жилище 2го уровня |
| 39 {#id-39} | 4 | 128 | Улучшенное жилище 3го уровня |
| 40 {#id-40} | 5 | 1 | Улучшенное жилище 4го уровня |
| 41 {#id-41} | 5 | 2 | Улучшенное жилище 5го уровня |
| 42 {#id-42} | 5 | 4 | Улучшенное жилище 6го уровня |
| 43 {#id-43} | 5 | 8 | Улучшенное жилище 7го уровня |

## Связанные команды и таблицы {#related}

[CA:B](../../receivers/ca/) · [Все таблицы](../)

## Связанные команды и таблицы {#reference-links}

[Города (CA)](../../receivers/ca/#command-b) · [Города (CA)](../../receivers/ca/#command-g-g-1-2-g-1-2-3) · [Города (CA)](../../receivers/ca/#command-h) · [Города (CA)](../../receivers/ca/#command-i) · [Города (CA)](../../receivers/ca/#command-m1-1-2-3) · [Города (CA)](../../receivers/ca/#command-n-text-n-z) · [Города (CA)](../../receivers/ca/#command-o-p-1-2-3) · [Города (CA)](../../receivers/ca/#command-r) · [Города (CA)](../../receivers/ca/#command-t-u) · [Города (CA)](../../receivers/ca/) · [Таблица объектов в игре](../objects/) · [Типы городов](../towns/) · [Таблица заклинаний](../spells/) · [Таблица героев](../heroes/) · [Таблица существ](../creatures/) · [Цвета игроков](../players/)
