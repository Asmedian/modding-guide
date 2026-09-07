---
{"title":"Действие в бою (BG)","summary":"BG0 предваряет действие; BG1 связан с завершением действия и передачей хода. Параметры действия читаются через BG; v997 хранит номер раунда.","translationStatus":"reviewed"}
---

## Триггер BG {#ref-tr-bg}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>BG </strong>(действие в битве)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-bg-red"></span><span class="erm-tone-red">!?BG#;</span> 
- этот боевой триггер срабатывает при каждом действии стека или героя 
(колдовство, бегство или сдача).<br>
<span class="erm-tone-red">!?BG1</span>; - срабатывает при передаче хода от одного существа к другому<br>
<span class="erm-tone-red">!?BG0;</span> - срабатывает перед действием</strong></div>
<div class="erm-paragraph">Переменная <strong>v997</strong> хранит номер текущего раунда:<br>
        v997=0 – первый раунд (после тактической расстановки)<br>
        v997=1 – второй раунд<br>
        v997=2 – третий раунд<br>
        …</div>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> вы можете использовать этот триггер с ресивером <a href="../../receivers/bg/#ref-rec-bg">!!BG</a> 
для поиска номера стека монстра (<a href="../../receivers/bg/#ref-rec-bg-n">!!BG:N</a>) и 
использовать этот номер для изменений установок монстра (<a href="../../receivers/bm/#ref-rec-bm">!!BM</a>).
Также, если герой убегает с поля боя, сначала срабатывает триггер <strong>!?BG0;</strong> и затем, после нажатия на ОК в окне потерь, срабатывает <strong>!?BG1</strong>.</div>

</div>
</section>
:::

## Когда срабатывает {#event}

BG0 предваряет действие; BG1 связан с завершением действия и передачей хода. Параметры действия читаются через BG; v997 хранит номер раунда.

## Объявление {#syntax}

```erm
!?BG0; / !?BG1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `BG0` | `OnBeforeBattleAction` | 30303 |
| `BG1` | `OnAfterBattleAction` | 30304 |

## Ограничения и порядок {#limits}

В BG1 значение BG:N может уже относиться к следующему стеку. Событие OnBattleActionEnd предназначено для более точной точки завершения действия.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Текущее действие в бою (BG)](../../receivers/bg/) · [Текущее действие в бою (BG)](../../receivers/bg/#command-n) · [Боевой стек (BM)](../../receivers/bm/)
