---
{"title":"Игровой таймер (TM)","summary":"Срабатывает для таймера 1..100, предварительно настроенного ресивером TM.","translationStatus":"reviewed"}
---

## Триггер TM {#ref-tr-tm}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>TM</strong> (таймер)</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-tr-tm-red"></span><span class="erm-tone-red"><strong>!?TM#;</strong></span> <strong>- триггер для кода таймера.</strong><br>
Срабатывает при срабатывании таймера номер #.<br>
         # = номер таймера (1..100)</div>
<div class="erm-paragraph">Для установки таймера используйте ресивер <a href="../../receivers/tm/#ref-rec-tm">!!TM</a>.</div>

</div>
</section>
:::

## Когда срабатывает {#event}

Срабатывает для таймера 1..100, предварительно настроенного ресивером TM.

## Объявление {#syntax}

```erm
!?TM#;
```

## Ограничения и порядок {#limits}

OnEveryDay вызывается до обычных таймеров и не требует настройки TM. Само объявление !?TM не включает таймер.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Игровые таймеры (TM)](../../receivers/tm/)
