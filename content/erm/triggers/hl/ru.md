---
{"title":"Получение уровня героем (HL)","summary":"Срабатывает при получении уровня. -1 выбирает всех героев. Общий обработчик HL-1 выполняется раньше обработчика конкретного героя. HL меняет предложенные навыки.","translationStatus":"reviewed"}
---

## Триггер HL {#ref-tr-hl}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>HL</strong> (получение уровня героем)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-hl-red"></span><span class="erm-tone-red">!?HL#;</span> 
- триггер, срабатывающий при получении героем нового уровня.</strong><br>
         # – номер героя (-1 – 
любой)<br>
Если вы используете <strong>!?HL-1</strong> и <strong>!?HL5</strong> 
(например), сначала сработает !?HL-1, а затем !?HL5. 
<br>
Для изменения предложенных первичных и вторичных навыков используйте ресивер 
<a href="../../receivers/hl/#ref-rec-hl">!!HL</a>.</div>

</div>
</section>
:::

## Когда срабатывает {#event}

Срабатывает при получении уровня. -1 выбирает всех героев. Общий обработчик HL-1 выполняется раньше обработчика конкретного героя. HL меняет предложенные навыки.

## Объявление {#syntax}

```erm
!?HL#;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `HL` | `OnHeroGainLevel` | 30600 |

## Ограничения и порядок {#limits}

Не путайте момент выбора навыков с событием OnAfterHeroGainLevel после повышения.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Выбор навыков при повышении уровня (HL)](../../receivers/hl/)
