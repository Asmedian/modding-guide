---
{"title":"События командира (CO)","summary":"0 перед окном командира, 1 после закрытия, 2 после покупки, 3 после воскрешения. HE-1 и CO-1 относятся к текущему герою и его командиру.","translationStatus":"reviewed"}
---

## Триггер CO {#ref-tr-co}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>CO</strong> (командиры)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-co-red"></span><span class="erm-tone-red">!?CO#;</span> - контроль над командирами.<br>
<span class="erm-tone-red">!?CO0;</span> - вызывается перед открытием окна командира<br>
<span class="erm-tone-red">!?CO1;</span> - вызывается после закрытия окна командира<br>
<span class="erm-tone-red">!?CO2;</span> - вызывается после покупки командира в городе<br>
<span class="erm-tone-red">!?CO3;</span> - вызывается после воскрешения командира в городе</strong></div>
<div class="erm-paragraph">Переменные и флаги работают как обычно: флаг 1000 хранит статус ИИ (если = 0 (Ложь) - это компьютерный игрок); 
флаг 999 показывает, ходит ли сейчас игрок за этим компьютером; переменные v998, v999, v1000 хранят координаты текущего героя.<br>
Текущего героя-хозяина можно настроить через <a href="../../receivers/he/#ref-rec-he">!!HE-1</a>:…; командира через <a href="../../receivers/co/#ref-rec-co">!!CO-1</a>:…</div>

</div>
</section>
:::

## Когда срабатывает {#event}

0 перед окном командира, 1 после закрытия, 2 после покупки, 3 после воскрешения. HE-1 и CO-1 относятся к текущему герою и его командиру.

## Объявление {#syntax}

```erm
!?CO0; / !?CO1; / !?CO2; / !?CO3;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `CO0` | `OnOpenCommanderWindow` | 30340 |
| `CO1` | `OnCloseCommanderWindow` | 30341 |
| `CO2` | `OnAfterCommanderBuy` | 30342 |
| `CO3` | `OnAfterCommanderResurrect` | 30343 |

## Ограничения и порядок {#limits}

Не путайте этот триггер и ресивер CO со строчной командой co для продолжения цикла.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Герои (HE)](../../receivers/he/) · [Командиры (CO)](../../receivers/co/)
