---
{"title":"Лимит времени хода (TL)","summary":"Ресивер TL: лимит времени хода, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер TL {#ref-rec-tl}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-tl-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>TL</strong><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(контроль лимита хода)</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-tl-red"></span><span class="erm-tone-red">!!TL:XXXX;</span> - осуществляет ограничение хода, поддерживает мультиплеерные игры.</strong></div>
<span class="erm-anchor" id="ref-rec-tl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/tl/#ref-tr-tl">!?TL</a></div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tl-c"></span><span class="erm-anchor" id="command-c"></span>C#</strong></span><br>
Включить отсчёт таймера<br>
        # = 1 - запустить таймер<br>
        # = 0 - остановить отсчёт<u><strong></strong><br>
</u>Работает последняя команда. Вы можете приостановить 10 раз, но запустить один раз, и таймер заработает.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tl-e"></span><span class="erm-anchor" id="command-e"></span>E$</strong></span><br>
Включить "показ остатка времени"<br>
        $ = 1 - включено<br>
        $ = 0 - выключено<br>
Если вы включили его, будет показываться остаток секунд постоянно, а не последние 10 секунд, как обычно.</div>
<hr><div class="erm-paragraph">
<span class="erm-tone-red"><strong>
<span class="erm-anchor" id="ref-rec-tl-t"></span><span class="erm-anchor" id="command-t"></span>T#/$</strong></span><br>
</div><span class="erm-anchor" id="ref-rec-tl-2"></span><details class="erm-comment"><summary>Получение времени</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-tl-t0"></span><blockquote class="erm-margin-top-zero erm-note">
<div class="table-wrap erm-reference-table"><table width="50%">
	<tr>
		<td width="25"><span class="erm-anchor" id="ref-rec-tl-n2"></span><strong class="erm-tone-purple erm-strong">#</strong>
		</td><td> <strong class="erm-tone-purple erm-strong">$</strong> - установить/проверить/получить
	</td></tr>
	<tr>
		<td>0</td>
		<td> текущее время в мс</td>
	</tr>
	<tr>
		<td>1</td>
		<td> текущее время в с</td>
	</tr>
	<tr>
		<td>2</td>
		<td> стартовое время в мс </td>
	</tr>
	<tr>
		<td>3</td>
		<td> стартовое время в с</td>
	</tr>
	<tr>
		<td>4</td>
		<td> время паузы в мс</td>
	</tr>
	<tr>
		<td>5</td>
		<td> время паузы в с</td>
	</tr>
	<tr>
		<td>6</td>
		<td> длина хода в мс</td>
	</tr>
	<tr>
		<td>7</td>
		<td> длина хода в с</td>
	</tr>
</table></div></blockquote></div></details>
<hr>

<div class="erm-paragraph">Когда игрок получает контроль, текущее время записывается в "стартовое время". Затем каждую секунду движок проверяет:
</div><blockquote class="erm-note"><strong>[текущее время] - [стартовое время] &lt; [длины хода]</strong></blockquote>
<div class="erm-paragraph">Если ложно, ход кончается.<br>
Если вы попадаете в бой, таймер останавливается. В этот момент текущее время записывается в "время паузы".<br>
Пока "время паузы" не 0, ход продолжается.</div>









</div>

</div>
</section>
:::

## Связанные материалы {#related}

[TL](../../triggers/tl/)



## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Таймер реального времени (TL)](../../triggers/tl/)
