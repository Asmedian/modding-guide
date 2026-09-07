---
{"title":"Подсказки интерфейса (MM)","summary":"0 подсказка боя, 1 подсказка города, 2 карта приключений. MM меняет текст соответствующего контекста.","translationStatus":"reviewed"}
---

## Триггер MM {#ref-tr-mm}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>MM</strong> (текст в битве)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mm-red"></span><span class="erm-tone-red">!?MM0; (!?MM;) </span>- триггер для контроля над текстом в битве<br>
<span class="erm-tone-red">!?MM1; </span>- триггер для контроля над текстом в городе<br>
<span class="erm-tone-red">!?MM2; </span>- триггер для контроля над текстом на карте</strong></div>

<div class="erm-paragraph"><strong>!?MM0</strong> триггер срабатывает при попытке WoG показать текст-подсказку в текстовом поле (например, "Лететь сюда")<br>
Также данный триггер срабатывает только ДО выбора действия. Так, например, если я колдую заклинание, подсказки при выборе цели не запускают триггер <strong>!?MM0;</strong><br>
Как только цель определена и заклинание наколдовано, <strong>!?MM0;</strong> запускается до следующего действия.</div>
<div class="erm-paragraph"><strong>!?MM1;</strong> – вы можете запустить ERM-код, когда игрок двинет указателем мыши в окне города. Триггер срабатывает при наведении на объект и при уходе с него. Также данный триггер следует только ПОСЛЕ обычного описания (стандартного текста подсказки).</div>
<div class="erm-paragraph"><strong>!?MM2;</strong> – срабатывает в окне карты приключений, при каждом клике <span class="erm-anchor" id="ref-tr-mm-vc"></span><img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (где угодно).</div>
<span class="erm-anchor" id="ref-tr-mm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/mm/#ref-rec-mm">!!MM</a>, <a href="../#ref-era-new-events-1-2">Расширение функционала !?MM в ERA</a></div>

</div>
</section>
:::

## Когда срабатывает {#event}

0 подсказка боя, 1 подсказка города, 2 карта приключений. MM меняет текст соответствующего контекста.

## Объявление {#syntax}

```erm
!?MM0; / !?MM1; / !?MM2;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MM0` | `OnBattleMouseHint` | 30317 |
| `MM1` | `OnTownMouseHint` | 30318 |

## Ограничения и порядок {#limits}

MM0 не вызывается для каждой стадии выбора цели заклинания. MM1 может сработать при наведении и уходе курсора; частота не равна числу действий игрока.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Текст боевой подсказки (MM)](../../receivers/mm/) · [Триггеры и события ERM](../)
