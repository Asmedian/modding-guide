---
{"title":"Воспроизведение звука (SN)","summary":"Перехватывает попытку воспроизвести звуковой эффект WAV/M82. Параметры доступны через SN.","translationStatus":"reviewed"}
---

## Триггер SN {#ref-tr-sn}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>SN</strong> (звук)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-sn-red"></span><span class="erm-tone-red">!?SN;</span></strong> <strong>- триггер, срабатывающий при 
воспроизведении любого звука (WAV, M82, но <u>не MP3!</u>).</strong> <br>
Триггер срабатывает каждый раз, когда игра пытается воспроизвести звук.</div>
<span class="erm-anchor" id="ref-tr-sn-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/sn/#ref-rec-sn">!!SN</a></div>

</div>
</section>
:::

## Когда срабатывает {#event}

Перехватывает попытку воспроизвести звуковой эффект WAV/M82. Параметры доступны через SN.

## Объявление {#syntax}

```erm
!?SN;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `SN` | `OnSoundPlay` | 30321 |

## Ограничения и порядок {#limits}

Для MP3 используется отдельный MP. Обработчик может вызываться часто и из разных игровых окон.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Средства ERA, память и звук (SN)](../../receivers/sn/)
