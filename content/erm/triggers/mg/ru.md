---
{"title":"Магия на карте приключений (MG)","summary":"0 перед открытием книги для выбора заклинания; 1 после попытки колдовства. v997 содержит номер заклинания после MG1.","translationStatus":"reviewed"}
---

## Триггер MG {#ref-tr-mg}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>MG</strong> (колдовство на карте)</span></div><br>
<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mg-red"></span><span class="erm-tone-red">!?MG#;</span> 
- триггер при наложении заклинаний на карте.<br>
<span class="erm-tone-red">!?MG0;</span> - срабатывает до наложения<br>
<span class="erm-tone-red"><strong>!?MG1;</strong></span> - срабатывает после наложения</strong></div>
Действия:
<dl><dd> - игрок нажимает «колдовать заклинание»</dd>
<dd> - срабатывает <strong>!?MG0;</strong></dd>
<dd> - открывается волшебная книга для выбора заклинания.</dd>
<dd> - накладывается заклинание</dd>
<dd> - срабатывает <strong>!?MG1;</strong> (номер заклинания заносится в <strong>v997</strong>)</dd></dl>
<u>Пример:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?MG0;
!!IF:M^Магия готова для использования^;
!?MG1;
!!VRy-10:Sv997; - установка номера заклинания из v997 в y-1
!!IF:M^Магия была использована. Номер заклинания: %Y-10^;</code></pre>
<div class="erm-paragraph"><strong><u>Комментарий</u>:</strong> данный триггер неактивен для ИИ-игроков.
Если даже каст заклинания отменён, !?MG1 всё равно сработает, равно как и вернёт номер заклинания.</div>

</div>
</section>
:::

## Когда срабатывает {#event}

0 перед открытием книги для выбора заклинания; 1 после попытки колдовства. v997 содержит номер заклинания после MG1.

## Объявление {#syntax}

```erm
!?MG0; / !?MG1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MG0` | `OnBeforeAdventureMagic` | 30322 |
| `MG1` | `OnAfterAdventureMagic` | 30323 |

## Ограничения и порядок {#limits}

MG1 вызывается и при отмене. Его наличие не доказывает успешное наложение; классический триггер не работает для ИИ.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)
