---
{"title":"Раунд боя (BR)","summary":"Классический код поддерживает фильтр по номеру раунда: -1 до тактики, 0 первый раунд, 1 второй. v997 — счётчик раунда; ранние фазы проходят при ещё невидимом поле.","translationStatus":"reviewed"}
---

## Триггер BR {#ref-tr-br}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>BR</strong> (ход битвы)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-br-red"></span><span class="erm-tone-red">!?BR;</span> - этот боевой триггер срабатывает в начале каждого раунда битвы 
(для первого раунда он срабатывает дважды).</strong><br>
<strong><span class="erm-tone-red">!?BR#;</span> - триггер срабатывает для конкретного раунда:</strong><br> 
         # = -1 – "нулевой" раунд (перед 
тактической расстановкой)<br>
         # = 0 – первый раунд (после 
тактической расстановки)<br>
         # = 1 – второй раунд<br>
         # = 2 – третий раунд<br>
         # = … и т.д</div>
<span class="erm-anchor" id="ref-tr-br-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: событие <a href="../#ref-era-new-events-2-22">OnCombatRound</a></div>
<div class="erm-paragraph"><strong><u>Комментарий</u></strong>: переменная <strong>v997</strong> хранит номер текущего раунда.<br>
Новый раунд начинается между триггерами <a href="../bg/#ref-tr-bg">!?BG0</a> и <a href="../bg/#ref-tr-bg">!?BG1</a>.<br>
Стартовые раунды (!?BR-1 и !?BR0) идут в "тёмной" зоне и вы не можете показать никакое сообщение, пока не сможете что-либо сделать.</div>
<div class="erm-paragraph">
<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?BR; стартовал новый раунд
!!VRv5000:Sv997; хранить номер раунда в v5000 для прочих нужд</code></pre></div>
</div>
</section>
:::

## Когда срабатывает {#event}

Классический код поддерживает фильтр по номеру раунда: -1 до тактики, 0 первый раунд, 1 второй. v997 — счётчик раунда; ранние фазы проходят при ещё невидимом поле.

## Объявление {#syntax}

```erm
!?BR; / !?BR#;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BR` | `OnBattleRound` / `OnCombatRound` | 30302 |

## Ограничения и порядок {#limits}

В предоставленном Erm.pas OnCombatRound и OnBattleRound зарегистрированы как имена одного события; основным является последнее. Старые описания именованного события и BR различались — не смешивайте версии.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Триггеры и события ERM](../) · [Действие в бою (BG)](../bg/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, *](../../compatibility/#era3-v-3-0-0-l3976) — Fixed WoG bug with tactics detection on the very first round. Do not use BU:R in !?BR or !?FU(OnCombatRound) for zero round, because a few structures are not initialized at this moment and random crash may occur. First r…
<!-- ERA3-GENERATED:END -->
