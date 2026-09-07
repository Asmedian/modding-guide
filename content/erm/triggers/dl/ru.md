---
{"title":"Событие пользовательского диалога (DL)","summary":"Обрабатывает действия элементов пользовательского диалога. Классический контекст: v998 — диалог, v999 — элемент, v1000 — действие.","translationStatus":"reviewed"}
---

## Триггер DL {#ref-tr-dl}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Триггер <strong>DL</strong><a href="../../compatibility/#ref-cont-te" title="Работает только с HoMM3:TE или позднее.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(элемент диалога)</span></div>
<div class="erm-paragraph"><br><span class="erm-anchor" id="ref-tr-dl-red"></span><span class="erm-tone-red"><strong>!?DL;</strong></span> <strong>- Триггер настроенного диалога.</strong><br>

Срабатывает при любом действии мышки или клавиатуры (пока не поддерживается) на любом элементе диалога<br>
При срабатывании триггера устанавливаются следующие переменные:<br>
<strong>   v998</strong> - номер диалога<br>
<strong>   v999</strong> - номер элемента<br>
<strong>   v1000</strong> - действие:<br>
<span class="erm-anchor" id="ref-tr-dl-step"></span><span class="erm-indent">      = 10 - нажат активный элемент "button"</span><br>
<span class="erm-indent">      = 12 - нажата <span class="erm-anchor" id="ref-tr-dl-vc"></span><img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>
<span class="erm-indent">      = 13 - отпущена <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>
<span class="erm-indent">      = 14 - нажата <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>

<u>Пример</u>:
<pre class="erm-example"><code class="language-erm">!?DL&amp;v1000=13/v999=30721; нажали кнопку с id=30721
!!DL:C1; закрыть диалог</code></pre></div>
<span class="erm-anchor" id="ref-tr-dl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: ресивер <a href="../../receivers/dl/#ref-rec-dl">!!DL</a></div>

</div>
</section>
:::

## Когда срабатывает {#event}

Обрабатывает действия элементов пользовательского диалога. Классический контекст: v998 — диалог, v999 — элемент, v1000 — действие.

## Объявление {#syntax}

```erm
!?DL;
```

## Имена ERA и алиасы {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `DL` | `OnCustomDialogEvent` | 30371 |

## Ограничения и порядок {#limits}

Проверяйте ID своего диалога до изменения элементов. Набор действий и поддержка клавиатуры зависят от версии диалогового расширения.

## Далее {#related}

[Каталог событий](../) · [Условия](../../conditions/) · [Функции](../../functions/)

## Связанные команды и таблицы {#reference-links}

[Отладка и совместимость ERM](../../compatibility/) · [Пользовательские диалоги (DL)](../../receivers/dl/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1915) — Event DL/(OnCustomDialogEvent) now receive all mouse/keyboard parameters, accessible via !!CM and tracks clicks outside dialogs main area. Check CM:T or i^dlg_action^ value for: (DLG_ACTION_INDLG_CLICK) (DLG_ACTION_OUTDL…
<!-- ERA3-GENERATED:END -->
