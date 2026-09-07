---
{"title":"Сохранение и загрузка (GM)","summary":"0 после загрузки сохранения, до показа карты; 1 перед сохранением после выбора слота. GM1 срабатывает также для автосохранения.","translationStatus":"reviewed"}
---

## Триггер GM {#ref-tr-gm}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>GM</strong> (сохранение/загрузка)</span></div>

<div class="erm-align-left erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-gm-red"></span><span class="erm-tone-red">!?GM#;</span> 
- триггер на сохранение и загрузку игры.<br>
<span class="erm-tone-red">!?GM0;</span> - вызывается после загрузки сохранённой игры, но перед показом карты.<br>
<span class="erm-tone-red">!?GM1;</span> - вызывается до сохранения игры, но после выбора слота сохранения.<br>
</strong><br>
<u>Пример:</u>
<pre class="erm-example"><code class="language-erm">ZVSE
!?GM0;
!!IF:M^Загружено^;
!?GM1;
!!IF:M^Сохранение...^;</code></pre>
<strong><u>Комментарий</u>:</strong> !?GM1 вызывается также каждый раз при автосохранении 
(т.е. каждый день после нажатия кнопки "Завершить ход").<br>Автосохранение можно 
отменить командой <a href="../../receivers/un/#ref-rec-un-j5">UN:J5</a>. Обычно это не 
рекомендуется, т.к. автосохранение является "спасением" игрока в случае появления какой-либо ошибки в игре.</div>
<span class="erm-anchor" id="ref-tr-gm-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: <a href="../#ref-era-new-events-1-1">Расширение функционала !?GM1 в ERA</a></div>


</div>
</section>
:::

## Когда срабатывает {#event}

0 после загрузки сохранения, до показа карты; 1 перед сохранением после выбора слота. GM1 срабатывает также для автосохранения.

## Объявление {#syntax}

```erm
!?GM0; / !?GM1;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `GM0` | `OnAfterLoadGame` | 30360 |
| `GM1` | `OnBeforeSaveGame` | 30361 |

## Ограничения и порядок {#limits}

OnSavegameRead/Write предназначены для собственных секций данных и имеют другую точку выполнения. Не используйте PI вместо обработчика загрузки.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Общие игровые операции (UN)](../../receivers/un/#command-j3-file-j4-j5) · [Триггеры и события ERM](../)
