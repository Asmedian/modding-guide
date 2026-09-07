---
{"title":"После инструкций ERM (PI)","summary":"Выполняется после инструкций инициализации новой карты.","translationStatus":"reviewed"}
---

## Триггер PI {#ref-tr-pi}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>PI</strong> (пост-инструкция)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-pi-red"></span><span class="erm-tone-red">!?PI;</span> 
- пост-инструкция.</strong><br>Данный триггер срабатывает немного позже выполнения 
инструкций, но до выполнения основных настроек карты. Другая особенность данного 
триггера - он срабатывает только при начале новой карты, не при загрузке игры 
(как и инструкции).<br>
<u>Пример:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!#IF:M^Инструкция^;
!?PI;
!!IF:M^Пост-инструкция^;</code></pre>
Когда вы начнёте карту, вы получите два сообщения: «Инструкция» и затем 
«пост-инструкция». Когда появляется первое сообщение, карта почти не имеет 
установок, а при появлении второго сообщения почти все установки карты будут 
выполнены. Если вы загрузите сохранённую игру, вы не получите никаких сообщений.</div>

</div>
</section>
:::

## Когда срабатывает {#event}

Выполняется после инструкций инициализации новой карты.

## Объявление {#syntax}

```erm
!?PI;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `PI` | `OnAfterErmInstructions` | 30370 |

## Ограничения и порядок {#limits}

Не вызывается при загрузке сохранения. Для восстановления временных ресурсов нужен обработчик загрузки.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.4, +](../../compatibility/#era3-v-3-9-4-l1094) — Added the following functions to Era ERM Framework: !?FU(BattleStack_MakeActive); ; Makes specified stack active/acting. !#VA(stackId:x); Stack ID to pass control to. !?FU(PrepareMultiPicDialog); ; Initializes IF:N dialo…
- [ERA 3.1.0, +](../../compatibility/#era3-v-3-1-0-l2944) — Added "OnAfterErmInited" event to "Era Erm Framework", occuring right in the end of !?PI / "OnAfterErmInstructions" event. The event allows to perform actions after most scripts initialized their variables and performed …
<!-- ERA3-GENERATED:END -->
