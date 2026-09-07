---
{"title":"Глобальное событие карты (GE)","summary":"Срабатывает для глобального события, текст которого начинается с указанного номера. Пока существует обработчик, этот служебный номер скрывается из сообщения.","translationStatus":"reviewed"}
---

## Триггер GE {#ref-tr-ge}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>GE</strong> (глобальное событие)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-ge-red"></span><span class="erm-tone-red">!?GE#;</span> - триггер, срабатывающий при появлении Глобального события номер #.</strong><br>
Номер должен следовать в самом начале текста события (заголовок не важен).<br>
Это число НЕ отразится на тексте события, пока используется триггер на это событие.<br>
<u>Пример</u>:<br>
Текст <span class="erm-anchor" id="ref-tr-ge-erm"></span><em class="erm-inline-code">123Вот ты где!</em> будет выглядеть как <span class="erm-anchor" id="ref-tr-ge-dl3"></span><em class="erm-game-text">Вот ты где!</em> с номером 123.</div>
<div class="erm-paragraph">Для изменения свойств глобального события используйте ресивер <a href="../../receivers/ge/#ref-rec-ge">!!GE</a>.</div>
</div>
</section>
:::

## Когда срабатывает {#event}

Срабатывает для глобального события, текст которого начинается с указанного номера. Пока существует обработчик, этот служебный номер скрывается из сообщения.

## Объявление {#syntax}

```erm
!?GE#;
```

## Ограничения и порядок {#limits}

Номер относится к началу текста, а не к заголовку события и не к порядку строк в редакторе.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Глобальные события (GE)](../../receivers/ge/)
