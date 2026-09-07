---
{"title":"Бродячие монстры (MW)","summary":"0 достижение цели/героя, 1 гибель монстра. v997 — ID бродячего монстра. События должны быть включены соответствующими настройками MW.","translationStatus":"reviewed"}
---

## Триггер MW {#ref-tr-mw}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>MW</strong> (бродячие монстры)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mw-red"></span><span class="erm-tone-red">!?MW#;</span> - триггер для бродячих монстров.<br>
<span class="erm-tone-red">!?MW0;</span> - вызывается при достижении точки назначения или героя.<br>
<span class="erm-tone-red">!?MW1;</span> - вызывается, когда бродячий монстр погибает.</strong></div>
<div class="erm-paragraph"><strong>!?MW0</strong> - вызывается на следующий ход, после достижения точки или атаки героя, и только если установлен соответствующий флаг.<br>
v997 содержит номер бродячего монстра - вызывателя триггера.</div>
<div class="erm-paragraph"><strong>!?MW1</strong> - вызывается в ход после смерти монстра. Срабатывает только если установлен соответствующий флаг.<br>
v997 содержит номер убитого бродячего монстра.</div>
<span class="erm-anchor" id="ref-tr-mw-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/mw/#ref-rec-mw">!!MW</a></div>
</div>
</section>
:::

## Когда срабатывает {#event}

0 достижение цели/героя, 1 гибель монстра. v997 — ID бродячего монстра. События должны быть включены соответствующими настройками MW.

## Объявление {#syntax}

```erm
!?MW0; / !?MW1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MW0` | `OnWanderingMonsterReach` | 30305 |
| `MW1` | `OnWanderingMonsterDeath` | 30306 |

## Ограничения и порядок {#limits}

Классическая реализация вызывает событие на следующем ходу после достижения цели или гибели, а не немедленно.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Бродячие монстры (MW)](../../receivers/mw/)
