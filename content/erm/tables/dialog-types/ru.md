---
{"title":"Идентификаторы игровых окон","summary":"Идентификаторы, возвращаемые GetGameState в старом комплекте. Плагины WND и HD могут заменять окно; одинаковый номер может объединять несколько диалогов. Значения привязаны к реализации, а не к порядку строк.","translationStatus":"reviewed"}
---

## Игровые идентификаторы диалогов {#ref-form-gamestate}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Таблица идентификаторов игровых диалогов</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-zebra" width="100%">
<span class="erm-anchor" id="ref-form-gamestate-n2"></span><tr class="erm-tone-purple erm-strong"><td width="70">ID</td><td>Игровой диалог</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4205280</td><td>карта приключений (КП)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6053040</td><td>окно города</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5117840</td><td>окно героя</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5957344</td><td>окно встечи героев</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4662240</td><td>окно битвы</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4782512</td><td>прочие диалоги (включая IF:M Q; и все новые от <a href="../../compatibility/#ref-cont-hd">HD-мода</a>)</td></tr>
<tr><td class="erm-align-center">???</td><td>WoG-диалоги (без плагина <span class="erm-tone-purple erm-legacy-event" title="WoG Native Dialog">WND</span>)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4304960</td><td>WoG-диалоги* (с WND: опыт существ, сфинкс, проклятья, IF:B D G и др.)</td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Карта приключений (КП)**</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">5755920</td><td>окно сохранения</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5884864</td><td>книга заклинаний</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4789216</td><td>режим "дверь измерений"</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4790240</td><td>режим "затопить корабль"</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6039360</td><td>окно выбор города (без <a href="../../compatibility/#ref-cont-hd">HD</a>; для Городского Портала или через Врата Инферно)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5217680</td><td>окно повышения уровня героя</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5378592</td><td>окно обзора королевства</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5976864</td><td>окно настроек КП</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4216352</td><td>окно действий на КП</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6275296</td><td>обзор мира (включая заклы Просмотр земли/воздуха)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5425744</td><td>карта-загадка</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6068832</td><td>гильдия воров</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5675664</td><td>инфо по сценарию</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6100112</td><td>окно гарнизона</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6099296</td><td>окно оставления существ (включая шахты)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5570288</td><td>жилища существ/фабрика машин</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5637600</td><td>жертвенный алтарь</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6228784</td><td>университет</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6105344</td><td>верфь</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6183568</td><td>чёрный рынок/торговец артефактами (покупка)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6167072</td><td>рынок (обмен ресурсами)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6175376</td><td>рынок (передача ресурсов игроку)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6241984</td><td>окно статистики монстра/отряда</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5144224</td><td>форт на холме</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6201472</td><td>гильдия наёмников</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6126720</td><td>таверна</td></tr>
<tr><td colspan="2"><span class="erm-anchor" id="ref-form-gamestate-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">** Одноимённые диалоги вне КП имеют те же ID и далее в таблице не упоминаются</div></td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Окно города</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">6087968</td><td>гильдия магов</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6081760</td><td>зал совета</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6119232</td><td>инфо о постройке</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6147920</td><td>форт/замок</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6102528</td><td>кузница</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5661104</td><td>преобразователь скелетов</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">6193120</td><td>торговец артефактами (продажа)</td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Окно героя</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">4304960</td><td>окно командира (с WND)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">5432976</td><td>окно журнала (без плагина на новый диалог)</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4304960</td><td>окно журнала (с плагином на новый диалог)</td></tr>
<tr>
	<td></td><td><span class="erm-tone-muted erm-legacy-gray"><strong>Окно битвы</strong></span></td>
</tr>
<tr><td class="erm-tone-purple erm-legacy-event">4649504</td><td>окно настроек в битве</td></tr>
<tr><td class="erm-tone-purple erm-legacy-event">4658576</td><td>статистика боя</td></tr>
</table></div>

</div>
</section>
:::

## Назначение {#meaning}

Идентификаторы, возвращаемые GetGameState в старом комплекте. Плагины WND и HD могут заменять окно; одинаковый номер может объединять несколько диалогов. Значения привязаны к реализации, а не к порядку строк.

## Значения {#values}

| ID | Окно |
| --- | --- |
| 4205280 | карта приключений (КП) |
| 6053040 | окно города |
| 5117840 | окно героя |
| 5957344 | окно встечи героев |
| 4662240 | окно битвы |
| 4782512 | прочие диалоги (включая IF:M Q; и все новые от HD-мода) |
| 4304960 | WoG-диалоги* (с WND: опыт существ, сфинкс, проклятья, IF:B D G и др.) |
| 5755920 | окно сохранения |
| 5884864 | книга заклинаний |
| 4789216 | режим "дверь измерений" |
| 4790240 | режим "затопить корабль" |
| 6039360 | окно выбор города (без HD; для Городского Портала или через Врата Инферно) |
| 5217680 | окно повышения уровня героя |
| 5378592 | окно обзора королевства |
| 5976864 | окно настроек КП |
| 4216352 | окно действий на КП |
| 6275296 | обзор мира (включая заклы Просмотр земли/воздуха) |
| 5425744 | карта-загадка |
| 6068832 | гильдия воров |
| 5675664 | инфо по сценарию |
| 6100112 | окно гарнизона |
| 6099296 | окно оставления существ (включая шахты) |
| 5570288 | жилища существ/фабрика машин |
| 5637600 | жертвенный алтарь |
| 6228784 | университет |
| 6105344 | верфь |
| 6183568 | чёрный рынок/торговец артефактами (покупка) |
| 6167072 | рынок (обмен ресурсами) |
| 6175376 | рынок (передача ресурсов игроку) |
| 6241984 | окно статистики монстра/отряда |
| 5144224 | форт на холме |
| 6201472 | гильдия наёмников |
| 6126720 | таверна |
| 6087968 | гильдия магов |
| 6081760 | зал совета |
| 6119232 | инфо о постройке |
| 6147920 | форт/замок |
| 6102528 | кузница |
| 5661104 | преобразователь скелетов |
| 6193120 | торговец артефактами (продажа) |
| 4304960 | окно командира (с WND) |
| 5432976 | окно журнала (без плагина на новый диалог) |
| 4304960 | окно журнала (с плагином на новый диалог) |
| 4649504 | окно настроек в битве |
| 4658576 | статистика боя |

## Вызов API {#api}

`GetGameState` записывает структуру из двух последовательных 32-битных целых: `RootDlgId` (родительское окно) и `CurrentDlgId` (текущее окно). Выделите две ячейки; передача адреса одной отдельно выделенной переменной повредит соседнюю память. Framework передаёт `?(mainDialogs[2]:y)` и читает текущее окно из `mainDialogs[1]`. Сигнатура API — процедура `stdcall`, поэтому результат следует читать из структуры, а не полагаться на возвращаемое значение `v1`.

## Связанные команды и таблицы {#related}

[SN:F / GetGameState](../../receivers/sn/#command-f-export-args) · [Все таблицы](../)


## Связанные команды и таблицы {#reference-links}

[Средства ERA, память и звук (SN)](../../receivers/sn/) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-xvalues) · [Средства ERA, память и звук (SN)](../../receivers/sn/#command-f-export-args) · [Триггеры и события ERM](../../triggers/) · [Флаги, сообщения и выбор (IF)](../../receivers/if/) · [Отладка и совместимость ERM](../../compatibility/)
