---
{"title":"События мыши (CM)","summary":"Ресивер CM: события мыши, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"События мыши (CM)"}
---

## Ресивер CM {#ref-rec-cm}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-cm-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер 
<strong>CM</strong> (инфо по кликам мышки)</span></div>
<div class="erm-paragraph">
<strong><span class="erm-anchor" id="ref-rec-cm-red"></span><span class="erm-tone-red"><br>
!!CM:XXXX;</span> 
- установить/проверить/получить информацию по клику мышкой.</strong> <br>
Должен следовать после триггера <a href="../../triggers/cm/#ref-tr-cm">!?CM</a>.<br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cm-1"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cm-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Если вы желаете показать диалоговое окно, которое не 
будет задерживаться на экране (как при обычном щелчке <span class="erm-anchor" id="ref-rec-cm-vc"></span><img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">), 
используйте команду <a href="../if/#ref-rec-if-q">IF:Q</a> с опцией 4. Это создаст 
текстовое окно без кнопок, которое исчезнет сразу после отпускания кнопки мыши. 
Если вам не нужна картинка, используйте значения -1 для типа/подтипа картинки.</div></details>
<hr>
<div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-a"></span><span class="erm-anchor" id="command-a-1-2"></span><strong><span class="erm-tone-red">A$1/$2</span></strong><br>
Абсолютная позиция курсора в пикселях<br>
         $1 – X<br>
         $2 – Y</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-d"></span><span class="erm-anchor" id="command-d"></span><span class="erm-tone-red"><strong>D$</strong></span><br>
Установить/проверить/получить позицию на поле боя<br>
         $ - 
	<a href="../../tables/battlefield/#ref-form-bf" data-context="true">номер позиции</a><br>
<strong></strong></div><span class="erm-anchor" id="ref-rec-cm-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cm-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
	Квадраты сетки поля имеют значения от 0 до 186, фон и 
внешние квадраты имеют значение -1. У левого героя - номер квадрата 252, у 
правого - 253.<br>
Центральная и верхняя башни имеют значения позиций 254 и 255 соответственно.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-f"></span><span class="erm-anchor" id="command-f"></span><span class="erm-tone-red"><strong>F$</strong></span><br>
Флаги для кликов мышью<br>
         0 = <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (левая кнопка мыши)<br>
         1 = <span class="erm-key">Shift</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         4 = <span class="erm-key">Ctrl</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         32 = <span class="erm-key">Alt</span> + <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
         512 = <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"> (правая кнопка мыши)<br>
Номера можно комбинировать, например, 5 будет означать, 
что должны быть нажаты <span class="erm-key">Shift</span>+<span class="erm-key">Ctrl</span>+<img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon">.<br>
Правая кнопка ни с чем не может быть cкомбинирована.</div>
<hr>
<div class="erm-paragraph">
<span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-cm-h"></span><span class="erm-anchor" id="command-h-1-2"></span>H$1/$2</strong></span><br>
Получить номер героя<br>
        $1 – номер левого героя<br>
        $2 – номер правого героя<br>
Вы можете лишь получить или проверить их.<br>
Вы также можете использовать эту опцию в теле <a href="../../triggers/cm/#ref-tr-cm">
!?CM2</a> для получения левого героя как активного, второй - фантом, его не 
существует.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-i"></span><span class="erm-anchor" id="command-i"></span><span class="erm-tone-red"><strong>I$</strong></span><br>
Условно обозначенное 
	<a href="../../tables/dialog-items/#ref-form-cmi" data-context="true">место</a>, куда наведён курсор при нажатии.<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-cm-3"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-cm-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">Некоторые области не будут регистрироваться при правом щелчке, а некоторые имеют значение 0.<br>
Эта команда всегда получает правильное значение в экране города, даже если одна постройка накладывается на другую. 
Также она устанавливается в -1, если не найдено никакого здания под курсором.<br>
Описание области города с пометкой "неактивно" означает, что объект регистрируется при нажатии, но не имеет игровой функции. 
Такие объекты различны для каждого города.
<br>
Номер области при нажатии на гильдии магов всегда принимает значение высшего уровня гильдии 
(т.е. если у вас есть 3 уровень гильдии магов, при клике в любом месте гильдии значение области будет равно значению третьего уровня гильдии). 
Также улучшенные жилища всегда принимают значения улучшенного. 
Кроме того, здания орд существ при их постройке заменяют своим числом номер 
жилища. Другие объекты точно также ведут себя: например, Таверна (5) Замка преобразуется в Братство меча (22) при её отстройке.</div></details>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-m"></span><span class="erm-anchor" id="command-mz"></span><span class="erm-tone-red"><strong>Mz#</strong></span><br>
Установить текст – описание в окне города, изменив обычное на своё. Вы можете 
использовать общие (z1…z1000) или локальные (z-1…z-10) <em>z</em>-переменные.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-p"></span><span class="erm-anchor" id="command-p-1-2-3"></span><span class="erm-tone-red"><strong>P$1/$2/$3</strong></span><br>
Позиция на карте<br>
         $1 – X<br>
         $2 – Y<br>
         $3 – L (уровень)<br>
Работает только для карты приключений и миникарты (<a href="../../tables/dialog-items/#ref-form-cmi" data-context="true">номера областей</a> которых 1 и 37, соответственно).</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-r"></span><span class="erm-anchor" id="command-r"></span><span class="erm-tone-red"><strong>R$</strong></span><br>
Включить/отключить стандартное действие<br>
         0 – отключить<br>
         1 – включить<br>
Если вы хотите правый клик на карте приключений для 
чего-либо, вы можете использовать эту команду для отключения стандартного 
диалога о оставлении существ.</div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-s"></span><span class="erm-anchor" id="command-s-t"></span><span class="erm-tone-red"><strong>S$</strong></span><br>
Подтип действия $:<br>
	       10 – Отпущена кнопка ОК в экране города<br>
	       12 – нажата <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
	       13 – отпущена <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Левая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"><br>
	       14 – нажата <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Правая кнопка мыши" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></div>
<hr><div class="erm-paragraph">
<span class="erm-anchor" id="ref-rec-cm-t"></span><span class="erm-tone-red"><strong>T$</strong></span><br>
Тип действия (обычно 512)</div>

<hr>














</div>

</div>
</section>
:::

## Связанные материалы {#related}

[CM](../../triggers/cm/) · [Framework](../../framework/events/)



## Связанные команды и таблицы {#reference-links}

[Клики мыши (CM)](../../triggers/cm/) · [Флаги, сообщения и выбор (IF)](../if/#command-q-text-q-type-subtype-type-subtype-mode-text) · [Клетки поля боя](../../tables/battlefield/) · [Области кликов CM:I](../../tables/dialog-items/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.22, +](../../compatibility/#era3-v-3-9-22-l138) — Improved CM:H to always return valid hero IDs from SwapManager even in non-click events (undefined if no hero meeting dialog is active).
- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1915) — Event DL/(OnCustomDialogEvent) now receive all mouse/keyboard parameters, accessible via !!CM and tracks clicks outside dialogs main area. Check CM:T or i^dlg_action^ value for: (DLG_ACTION_INDLG_CLICK) (DLG_ACTION_OUTDL…
- [ERA 3.3.0, +](../../compatibility/#era3-v-3-3-0-l2180) — The following improvements were introduced in "Era Erm Framework" mod: - "OnKeyPressed" event and all mouse click events were improved, storing keyboard special keys in global variables. i^key^: Pressed key virtual key c…
- [ERA 3.2.0, +](../../compatibility/#era3-v-3-2-0-l2618) — Added the following functions to "Era Erm Framework" mod: !?FU(NewIntArray); ; Creates and returns trigger local array of integers. ; Alternative function arguments: ; (?result) The result array will have 0 items. ; (siz…
- [ERA 3.0.1, +](../../compatibility/#era3-v-3-0-1-l3474) — !!FU/DO receivers can now be really called without arguments. For all WoG 3.58 ERM receivers except SN/MP calling subcommand without parameters actually passes single parameter with 0 value. Example: !!CM:R; is the same …
- [ERA 3.0.0, +](../../compatibility/#era3-v-3-0-0-l3587) — Introduced advanced ERM precompilation mode, called ERM 2.0 and activated via "ZVSE2" first line signature. Main features: - Named local variables to write human readable code instead of cryptic one. Example: !!HE-1:C0/0…
<!-- ERA3-GENERATED:END -->
