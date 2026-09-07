---
{"title":"Экипировка артефакта (AE)","summary":"0 — снятие, 1 — экипировка. Текущий герой владеет артефактом, v998 содержит ID артефакта, v999 — слот.","translationStatus":"reviewed"}
---

## Триггер AE {#ref-tr-ae}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>AE</strong> (одевание/снятие артефакта)</span></div><br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ae-red"></span><span class="erm-tone-red">!?AE#;</span> - снятие или одевание артефакта<br>
<span class="erm-tone-red">!?AE0;</span> - срабатывает при снятии артефакта<br>
<span class="erm-tone-red">!?AE1;</span> - срабатывает при одевании артефакта</strong></div>
<div class="erm-paragraph">
Триггер срабатывает, когда игрок снимает/надевает артефакт, или когда 
артефакт берётся и автоматически одевается.<br>
Этот триггер может быть полезен для скриптов для артефактов, для 
добавление/отнимания первичных навыков героя или вторичного навыка.<br>
Текущий герой (!!HE-1) – герой-хозяин артефакта.<br>
    <strong>v998</strong> содержит 
<a href="../../tables/artifacts/#ref-form-a1" data-context="true">номер артефакта</a><br>
    <strong>v999</strong> содержит 
<a href="../../tables/artifact-slots/#ref-form-ap" data-context="true">номер позиции</a> (слота), куда наделся артефакт.</div>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong><br>
Эта команда не работает для рюкзака.<br>
Если вы измените один артефакт на другой, сработает несколько дополнительных 
триггеров. Вот они:
</div><span class="erm-anchor" id="ref-tr-ae-t0"></span><ol class="erm-margin-top-zero">
<li>AE0 (нач. артефакт)</li>
<li>AE1 (нач. артефакт)</li>
<li>AE0 (нач. артефакт)</li>
<li>AE1 (новый артефакт)</li>
<li>AE0 (новый артефакт)</li>
<li>AE1 (новый артефакт)</li>
</ol></div>
</section>
:::

## Когда срабатывает {#event}

0 — снятие, 1 — экипировка. Текущий герой владеет артефактом, `v998` содержит [номер артефакта](../../tables/artifacts/), `v999` — [номер позиции (слота)](../../tables/artifact-slots/). Текущий герой `!!HE-1` — владелец артефакта. Событие вызывается и при автоматическом надевании полученного артефакта.

## Объявление {#syntax}

```erm
!?AE0;
!?AE1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `AE0` | `OnUnequipArt` | 30315 |
| `AE1` | `OnEquipArt` | 30316 |

## Ограничения и порядок {#limits}

Перемещение в рюкзаке не является экипировкой. Замена одного артефакта другим вызывает несколько событий; обработчик должен корректно выдерживать повторные вызовы.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Таблица артефактов](../../tables/artifacts/) · [Слоты артефактов](../../tables/artifact-slots/)
