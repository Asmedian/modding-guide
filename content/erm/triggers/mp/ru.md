---
{"title":"Смена музыкальной темы (MP)","summary":"Срабатывает при вызове ChangeMp3Theme. MP:S меняет параметры, MP:R управляет стандартной реакцией.","translationStatus":"reviewed"}
---

## Триггер MP {#ref-tr-mp}

:::erm
<section class="erm-reference" lang="ru">
<div><div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>MP</strong><a href="../../compatibility/#ref-era-index" title="Работает только с ERA.."><img src="../../../../assets/erm/08fd1e857e3607b5.gif" alt="ERA" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a> (контроль mp3)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-mp-red"></span><span class="erm-tone-red">!?MP;</span> - управление mp3-файлами.</strong></div>
<div class="erm-paragraph">Триггер срабатывает всякий раз, когда игра или ERM/Lua вызывают функцию <em class="erm-tone-purple erm-legacy-event">ChangeMp3Theme</em>. В триггере параметры функции могут быть изменены с помощью <a href="../../receivers/mp/#ref-rec-mp-era-s">!!MP:S</a>, а реакция по умолчанию на функцию (вкл./откл.) с помощью <span><a href="../../receivers/mp/#ref-rec-mp-era-r">!!MP:R</a></span>.<br>
<strong><u>Комментарий</u>:</strong> для ERA параметр <em>"UseOnlyOneCpuCore"</em> в файле <em class="erm-legacy-file">heroes3.ini</em> по умолчанию равен 0, что позволяет запускать <a href="../../compatibility/#ref-cont-hd">HD-мод</a> в режимах с высокой загрузкой процессора.<br>
Обратите внимание, что лучше удалить все теги ID3 из mp3, чтобы избежать возможных игровых проблем.</div>
<span class="erm-anchor" id="ref-tr-mp-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/mp/#ref-rec-mp-era">!!MP</a></div>
</div>
</section>
:::

## Когда срабатывает {#event}

Срабатывает при вызове ChangeMp3Theme. MP:S меняет параметры, MP:R управляет стандартной реакцией.

## Объявление {#syntax}

```erm
!?MP;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `MP` | `OnMp3MusicChange` | 30320 |

## Ограничения и порядок {#limits}

Это событие MP3-музыки, а SN относится к звуковым эффектам. Не запускайте смену темы без защиты от повторного входа.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Музыка MP3 (MP)](../../receivers/mp/#command-s-1-2-3) · [Музыка MP3 (MP)](../../receivers/mp/#command-r) · [Музыка MP3 (MP)](../../receivers/mp/)
