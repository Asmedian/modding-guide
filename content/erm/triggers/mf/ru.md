---
{"title":"Расчёт физического урона (MF)","summary":"Срабатывает перед нанесением урона. Через MF можно прочитать цель и изменить итоговый урон.","translationStatus":"reviewed"}
---

## Триггер MF {#ref-tr-mf}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>MF</strong> (физическое повреждение)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mf-red"></span><span class="erm-tone-red">!?MF1;</span> - срабатывает при нанесении физического урона в битве (перед самим действием)</strong></div>
<div class="erm-paragraph">Ресивер <a href="../../receivers/mf/#ref-rec-mf">!!MF</a> может быть использован для изменения урона, получаемого стеком (или обнулить урон вообще!).</div>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-mf-bold"></span><em class="erm-strong">Замечание:</em> триггера <strong>!?MF0</strong> или <strong>!?MF</strong> не существует. При использовании такого синтаксиса ERM-поддержка отключается.</div>
<div class="erm-paragraph"></div><span class="erm-anchor" id="ref-tr-mf-1"></span><details class="erm-comment"><summary><strong>Дополнительно</strong> (<span class="erm-anchor" id="ref-tr-mf-show1"></span><u class="erm-toggle-label">показать</u>)</summary><div class="erm-comment-body">
<div class="erm-paragraph">Когда вы используете в своих скриптах триггер !?MF1, знайте, что он будет срабатывать для различных типов повреждений, которые, скорее всего, вами не были учтены. Это может вызвать побочные эффекты или ошибки в работе вашего скрипта.<br>
Но, если в теле триггера !?MF1 считывать из памяти по адресу <strong class="erm-tone-purple erm-legacy-event">28326C0</strong> значения (число, 4 байта), то мы сможем узнать какой именно тип физических повреждения наносится стеку.</div>
<div class="table-wrap erm-reference-table"><span class="erm-anchor" id="ref-tr-mf-step"></span><table class="erm-table-zebra erm-indent" width="100%">
<caption class="erm-align-left">Значения для различных типов физических повреждения:</caption>
<span class="erm-anchor" id="ref-tr-mf-n2"></span><tr class="erm-tone-purple erm-strong"><td width="75">#</td><td>Описание</td></tr>
<tr><td>4454752</td><td>Урон огненным шаром</td></tr>
<tr><td>4455011</td><td>Урон от стрельбы</td></tr>
<tr><td>4455746</td><td>Урон от смертельного облака</td></tr>
<tr><td>4456676</td><td>Урон от круговой атаки (удар по всем врагам вокруг)</td></tr>
<tr><td>4458589</td><td>Урон от огненного щита</td></tr>
<tr><td>4460149</td><td>Урон от смертельного взгляда</td></tr>
<tr><td>4460621</td><td>Удар молнии</td></tr>
<tr><td>4461137</td><td>Урон от кислотной атаки</td></tr>
<tr><td>4462398</td><td>Урон от рукопашной</td></tr>
<tr><td>4462479</td><td>Урон от дыхания дракона</td></tr>
<tr><td>4610404</td><td>Урон от стрелковых башен</td></tr>
<tr><td>4627096</td><td>Урон от рва</td></tr>
<tr><td>5902442</td><td>Урон от волны смерти</td></tr></table></div>
<div class="erm-paragraph"><strong><u>Комментарии</u>:</strong>
</div><ul><li>если монстр может атаковать сразу несколько целей одновременно, то у него урон всегда имеет тип "круговая атака" (даже при атаке одной цели);</li>
<li>тип повреждения "дыхание дракона" срабатывает лишь для стека, находящегося за основной целью (вторая клетка атаки);</li>
<li>заклинание "Волна смерти" можно считать исключением среди прочих из магической книги, т.к. обрабатывается сначала в триггерах <a href="../mr/#ref-tr-mr">!?MR</a>, а потом ещё и в !?MF1 (зачем? остаётся загадкой).</li></ul>
<br>
<u>Пример использования</u>:
<pre class="erm-example"><code class="language-erm">!?MF1; [перед получением физ.урона стеку]
!!MF:F?y1;
!!UN:C42149568/4/?y10; получаем тип повреждения по адресу 0x28326C0
!!IF&amp;y10=4455011:L^Урон от выстрела: {~RED}%Y1{~} ед.^;
!!IF&amp;y10=4462398:L^Урон от рукопашной: {~RED}%Y1{~} ед.^;
!!IF&amp;y10=4458589:L^Огненный щит наносит {~RED}%Y1{~} ед. урона!^;</code></pre></div></details>

</div>
</section>
:::

## Когда срабатывает {#event}

Срабатывает перед нанесением урона. Через MF можно прочитать цель и изменить итоговый урон.

## Объявление {#syntax}

```erm
!?MF1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MF1` | `OnMonsterPhysicalDamage` | 30801 |

## Ограничения и порядок {#limits}

Формы MF0 и MF без номера недопустимы. Событие охватывает больше случаев, чем обычный удар: башни, ров и ряд специальных эффектов. BM:K не вызывает MF.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Физический урон (MF)](../../receivers/mf/) · [Сопротивление магии (MR)](../mr/)
