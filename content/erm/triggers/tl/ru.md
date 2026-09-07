---
{"title":"Таймер реального времени (TL)","summary":"Индекс 0 — 1 секунда, 1 — 2 секунды, 2 — 5 секунд, 3 — 10 секунд, 4 — 60 секунд.","translationStatus":"reviewed"}
---

## Ресивер TH {#ref-tr-tl}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>TL</strong><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(таймер реального времени)</span></div>
<div class="erm-paragraph"><br><strong><span class="erm-anchor" id="ref-tr-tl-red"></span><span class="erm-tone-red">!?TL#; </span>- </strong>
<strong>Таймер реального времени.</strong><br>
    # = <strong>0</strong> - срабатывает каждую секунду<br>
    # = <strong>1</strong> - срабатывает каждые 2 секунды<br>
    # = <strong>2</strong> - срабатывает каждые 5 секунд<br>
    # = <strong>3</strong> - срабатывает каждые 10 секунд<br>
    # = <strong>4</strong> - срабатывает каждые 60 секунд</div>
<div class="erm-paragraph"><u>Пример</u>:<br>
Чтобы увидеть, как это работает, используйте следующий код:
<pre class="erm-example"><code class="language-erm">!?TL0;
!!IF:L^Тикнула 1 секунда^;
!?TL1;
!!IF:L^Тикнуло 2 секунды^;
!?TL2;
!!IF:L^Прошло 5 секунд^;
!?TL3;
!!IF:L^Уже 10 секунд^;
!?TL4;
!!IF:L^Прошла ровно минута!^;</code></pre></div>
</div>
</section>
:::

## Когда срабатывает {#event}

Индекс 0 — 1 секунда, 1 — 2 секунды, 2 — 5 секунд, 3 — 10 секунд, 4 — 60 секунд.

## Объявление {#syntax}

```erm
!?TL#;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `TL0` | `OnEverySecond` | 30900 |
| `TL1` | `OnEvery2Seconds` | 30901 |
| `TL2` | `OnEvery5Seconds` | 30902 |
| `TL3` | `OnEvery10Seconds` | 30903 |
| `TL4` | `OnEveryMinute` | 30904 |

## Ограничения и порядок {#limits}

Это не игровые дни. Не используйте реальное время как автоматически синхронизированное условие сетевой механики.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/)
