---
{"title":"Шаг героя (HM)","summary":"Срабатывает перед каждым шагом. -1 выбирает всех героев; общий обработчик предшествует обработчику конкретного героя. v998/v999/v1000 содержат координаты текущего героя.","translationStatus":"reviewed"}
---

## Триггер HM {#ref-tr-hm}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>HM</strong> (шаг героя)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-tr-hm-red"></span><span class="erm-tone-red">!?HM#;</span> - контроль над каждым шагом героя.</strong><br>
         # – <a href="../../tables/heroes/#ref-form-numberheroes" data-context="true">номер героя</a> (-1 – любой)<br>
Триггер вызывается перед каждым шагом героя (не после). Вы можете проверить месторасположение героя из переменных <strong>v998</strong>,<strong>v999</strong>,<strong>v1000</strong>. 
Движение нельзя отменить.<br>
На данный момент этот триггер выясняет следующее: 
текущего героя (<a href="../../receivers/he/#ref-rec-he">!!HE-1</a>), 
его координаты (<strong>v998</strong>, <strong>v999</strong>, <strong>v1000</strong> → X Y L); также флаг <strong>1000</strong> устанавливается на 1 (Истина), 
если ходит человек-игрок, или на 0 (Ложь) – если ИИ.<br>
Если вы используете !?HM-1; и !?HM5; (например), то сначала будет действовать !?HM-1, а потом !?HM5.<br>
<u>Пример:</u>
<pre class="erm-example"><code class="language-erm">!?HM-1;
!!IF:M^Движение!^; - сообщение при перемещении любого героя
!?HM0;
!!IF:M^Двигается Оррин!^; - сообщение при перемещении Оррина</code></pre></div>

</div>
</section>
:::

## Когда срабатывает {#event}

Срабатывает перед каждым шагом. -1 выбирает всех героев; общий обработчик предшествует обработчику конкретного героя. v998/v999/v1000 содержат координаты текущего героя.

## Объявление {#syntax}

```erm
!?HM#;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `HM` | `OnHeroMove` | 30400 |

## Ограничения и порядок {#limits}

По контракту старого триггера движение отменить нельзя. Выполнение частое: не открывайте диалог на каждом шаге без подходящего условия.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Таблица героев](../../tables/heroes/) · [Герои (HE)](../../receivers/he/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.1, +](../../compatibility/#era3-v-3-4-1-l1753) — (CURRENT_HERO) constant (-1) can be safely used in triggers from now. Previosly this global value could be overwritten by nested events. Example: !?HM0; current hero is Orrin !!HE(HERO_XERON):Ed100000; Level up for Xeron…
<!-- ERA3-GENERATED:END -->
