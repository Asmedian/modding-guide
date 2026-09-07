---
{"title":"Посещение локального события (LE)","summary":"X/Y/уровень задают существующее локальное событие карты. !? срабатывает до его стандартных эффектов, !$ — после.","translationStatus":"reviewed"}
---

## Триггер LE {#ref-tr-le}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>LE</strong> (локальное событие)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-le-red"></span><span class="erm-tone-red">!?LE#1/#2/#3;</span> - срабатывает при посещении локального события в определённых координатах, 
событие не изменяется, используется лишь как триггер.</strong><br>
         #1/#2/#3 = X Y L, соответственно<br>
В указанной точке ДОЛЖНО существовать событие.</div>
<span class="erm-anchor" id="ref-tr-le-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/le/#ref-rec-le">!!LE</a></div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Пост-триггер <strong>LE</strong></span><strong></strong></div>

<div class="erm-paragraph"><strong><span class="erm-tone-red">!$LE#1/#2/#3;</span> 
- локальное событие, пост-триггер.</strong><br>
Этот триггер работает как !?LE, но после посещения события.</div>
<div class="erm-paragraph"><u>Пример:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?LE10/10/0; - триггер
!!IF:M^Триггер LE сработал^;
; сообщение появится до инициализации свойств события, настроенных в редакторе

!$LE10/10/0; - пост-триггер
!!IF:M^Сработал пост-триггер LE^;
; сообщение появится уже после выполнения настроенных в редакторе свойств события</code></pre>
</div>

</div>
</section>
:::

## Когда срабатывает {#event}

X/Y/уровень задают существующее локальное событие карты. !? срабатывает до его стандартных эффектов, !$ — после.

## Объявление {#syntax}

```erm
!?LE#1/#2/#3; / !$LE#1/#2/#3;
```

## Ограничения и порядок {#limits}

В точке должно существовать событие. После одноразового посещения оно может исчезнуть; учитывайте флаг ошибки LE.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Локальные события (LE)](../../receivers/le/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1965) — Implemented two universal events for handling human local events: "OnBeforeLocalEvent" and "OnAfterLocalEvent". They occur before any !?LE/!$LE trigger respecively and receive 3 parameters: x, y and z coordinates. Exampl…
<!-- ERA3-GENERATED:END -->
