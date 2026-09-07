---
{"title":"Сопротивление магии (MR)","summary":"0 до стандартной коррекции урона сопротивлением, 1 после неё. В MR2 параметр MR:F означает процент шанса полного сопротивления по типу гномов.","translationStatus":"reviewed"}
---

## Триггер MR {#ref-tr-mr}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>MR</strong> (сопротивление магии)</span></div>

<div class="erm-paragraph">
<span class="erm-anchor" id="ref-tr-mr-red"></span><span class="erm-tone-red"><strong>!?MR#;</strong></span> - боевой триггер для сопротивления магии с ERM<br>
<span class="erm-tone-red">!?MR0;</span> - срабатывает перед подсчётом сопротивления<br>
<span class="erm-tone-red">!?MR1;</span> - срабатывает после подсчёта сопротивления</div>
<div class="erm-paragraph">Порядок действия такой:
</div><dl><dd> - мы имеем базовый урон заклинания (<span class="erm-anchor" id="ref-tr-mr-n2"></span><strong class="erm-tone-purple erm-strong">M S D</strong>)</dd>
<dd> - срабатывает !?MR0; (<strong class="erm-tone-purple erm-strong">M S D F</strong>[=<strong class="erm-tone-purple erm-strong">D</strong>])</dd>
<dd> - WoG подсчитывает корректированный урон из-за стандартного сопротивления существа (<strong class="erm-tone-purple erm-strong">S M D</strong>→<strong class="erm-tone-purple erm-strong">F</strong>)</dd>
<dd> - срабатывает !?MR1; (<strong class="erm-tone-purple erm-strong">M S D F</strong>)</dd>
<dd> - конец коррекции (<strong class="erm-tone-purple erm-strong">F</strong>)</dd>
</dl>
Здесь <strong class="erm-tone-purple erm-strong">M</strong> – тип монстра, <strong class="erm-tone-purple erm-strong">S</strong> – номер заклинания, <strong class="erm-tone-purple erm-strong">D</strong> – базовый урон, <strong class="erm-tone-purple erm-strong">F</strong> – 
откорректированный урон (см. <a href="../../receivers/mr/#ref-rec-mr">!!MR</a>).<br>
Стандартная функция WoG`а коррекции урона подсчитывает F от D и возвращает его.<br>
Для существа без сопротивления F=D
<div class="erm-paragraph"><strong><span class="erm-tone-red">!?MR2;</span> - триггер для сопротивления магии стиля Гномов.</strong><br>
Срабатывает при вычислении сопротивления магии по стилю Гномов.<br>
Вы можете использовать помимо !!MR и другие ресиверы.<br>
Команды <a href="../../receivers/mr/#ref-rec-mr-n">!!MR:N</a> и <a href="../../receivers/mr/#ref-rec-mr-m">!!MR:M</a> работают как прежде (описано в триггерах !?MR0 и 
!?MR1).<br>
<a href="../../receivers/mr/#ref-rec-mr-f">!!MR:F</a> используется как процентный показатель (0..100) шанса на сопротивление заклинанию.<br>
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">ZVSE
!?MR2;
!!MR:F100; - все существа полностью иммунны ко всем заклинаниям.</code></pre>
<span class="erm-anchor" id="ref-tr-mr-bold"></span><em class="erm-strong">Замечания:</em> (по <strong>!?MR2</strong>)
</div><span class="erm-anchor" id="ref-tr-mr-t0"></span><ul class="erm-margin-top-zero"><li>Триггер никогда не срабатывает для отрядов под Антимагией;</li>
<li>При касте Массовой Дружественной магии триггер не срабатывает на дружественных существ, на которых враг наложил Гипноз;</li>
<li>Триггер не срабатывает на существах противника, на которых мы наложили Гипноз, при касте Массовой Враждебной магии;</li>
<li>Триггер не перехватывает массовое Снятие Заклинаний и некоторые другие заклинания.</li></ul>

</div>
</section>
:::

## Когда срабатывает {#event}

0 до стандартной коррекции урона сопротивлением, 1 после неё. В MR2 параметр MR:F означает процент шанса полного сопротивления по типу гномов.

## Объявление {#syntax}

```erm
!?MR0; / !?MR1; / !?MR2;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MR0` | `OnMagicBasicResistance` | 30307 |
| `MR1` | `OnMagicCorrectedResistance` | 30308 |
| `MR2` | `OnDwarfMagicResistance` | 30309 |

## Ограничения и порядок {#limits}

В MR0/1 F — урон, в MR2 F — процент: одинаковая команда имеет разный смысл. Антимагия и некоторые массовые заклинания обходят MR2.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Сопротивление заклинаниям (MR)](../../receivers/mr/) · [Сопротивление заклинаниям (MR)](../../receivers/mr/#command-m-n-s) · [Сопротивление заклинаниям (MR)](../../receivers/mr/#command-f)
