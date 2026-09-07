---
{"title":"Городской холл (TH)","summary":"0 вход в городской холл, 1 выход. Можно связать изменения с посещением экрана строительства.","translationStatus":"reviewed"}
---

## Ресивер TH {#ref-tr-th}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>TH</strong> (городской холл)</span></div>
<br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-th-red"></span><span class="erm-tone-red">!?TH#;</span> - срабатывает при входе в городской холл (префектуру, муниципалитет, капитолий).<br>
<span class="erm-tone-red">!?TH0;</span> - срабатывает при входе в него.<br>
<span class="erm-tone-red">!?TH1;</span> - срабатывает при выходе из него.</strong></div>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong><br>
1. Вы можете использовать !?TH1 для проверки построенного здания в городе.<br>
2. Вы также можете использовать этот триггер для переустановки флага строительства с помощью команды 
<a href="../../receivers/ca/#ref-rec-ca-r">CA:R</a> для получения дополнительных строений в этот день.</div>
<span class="erm-anchor" id="ref-tr-th-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/ca/#ref-rec-ca">!!CA</a>, события <a href="../#ref-era-new-events-2-26">OnTownHallMouseClick</a> и <a href="../#ref-era-new-events-2-31">OnBuildTownBuilding</a></div>

</div>
</section>
:::

## Когда срабатывает {#event}

0 вход в городской холл, 1 выход. Можно связать изменения с посещением экрана строительства.

## Объявление {#syntax}

```erm
!?TH0; / !?TH1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `TH0` | `OnEnterTownHall` | 30324 |
| `TH1` | `OnLeaveTownHall` | 30325 |

## Ограничения и порядок {#limits}

Выход из холла не означает, что здание действительно построено. Для постройки используйте OnBuildTownBuilding/OnAfterBuildTownBuilding.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Города (CA)](../../receivers/ca/#command-r) · [Города (CA)](../../receivers/ca/) · [Триггеры и события ERM](../)
