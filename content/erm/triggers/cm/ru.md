---
{"title":"Клики мыши (CM)","summary":"0 — правая кнопка на карте; 1 город; 2 герой; 3 встреча героев; 4 бой; 5 левая кнопка на карте. Координаты, элемент и действие доступны через CM.","translationStatus":"reviewed"}
---

## Триггер CM {#ref-tr-cm}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>CM </strong>(клик мыши)</span></div>

<div class="erm-paragraph"><strong><span class="erm-anchor" id="ref-tr-cm-red"></span><span class="erm-tone-red">!?CM#;</span> 
- триггер, вызывающийся при клике мышкой.<br>
<span class="erm-tone-red">!?CM0;</span> - вызывается при клике <span class="erm-anchor" id="ref-tr-cm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> на карте приключений<br>
<span class="erm-tone-red">!?CM1;</span> - вызывается при клике в окне замка<br>
<span class="erm-tone-red">!?CM2;</span> - вызывается при клике в окне героя<br>
<span class="erm-tone-red">!?CM3;</span> - вызывается при клике в окне обмена между героями<br>
<span class="erm-tone-red">!?CM4;</span> - вызывается при клике на поле боя<br>
<span class="erm-tone-red">!?CM5;</span> - вызывается при клике <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> на карте приключений<br>
<br>
<u>Комментарий</u>:</strong><br>
Вы можете использовать команду <a href="../../receivers/cm/#ref-rec-cm-p">!!CM:P</a> 
только в триггерах, где # = 0 или # = 5 (!?CM; !?CM0; !?CM5;)<br>
Какой-то из этих триггеров должен предшествовать ресиверу <a href="../../receivers/cm/#ref-rec-cm">!!CM</a>.</div>

</div>
</section>
:::

## Когда срабатывает {#event}

0 — правая кнопка на карте; 1 город; 2 герой; 3 встреча героев; 4 бой; 5 левая кнопка на карте. Координаты, элемент и действие доступны через CM.

## Объявление {#syntax}

```erm
!?CM0; / !?CM1; / !?CM2; / !?CM3; / !?CM4; / !?CM5;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `CM0` | `OnAdventureMapRightMouseClick` | 30310 |
| `CM1` | `OnTownMouseClick` | 30311 |
| `CM2` | `OnHeroScreenMouseClick` | 30312 |
| `CM3` | `OnHeroesMeetScreenMouseClick` | 30313 |
| `CM4` | `OnBattleScreenMouseClick` | 30314 |
| `CM5` | `OnAdventureMapLeftMouseClick` | 30319 |

## Ограничения и порядок {#limits}

CM:P применим к карте приключений/миникарте. Для отмены стандартной реакции используется CM:R0; выход FU:E не заменяет эту команду.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[События мыши (CM)](../../receivers/cm/#command-p-1-2-3) · [События мыши (CM)](../../receivers/cm/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l4007) — Function parameters (FU:P, DO:P), which were passed using GET-syntax, are now initialized with original variable value. The behavior is similar to pass-by-reference in other programming languages. Example: !?FU(Add3):; ;…
<!-- ERA3-GENERATED:END -->
