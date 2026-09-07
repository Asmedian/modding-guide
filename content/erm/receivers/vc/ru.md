---
{"title":"Учёт использования переменных (VC)","summary":"Ресивер VC: учёт использования переменных, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Учёт использования переменных (VC)"}
---

## Инструкция VC {#ref-rec-vc}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-vc-text"></span><div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Инструкция <strong>VC</strong> (контроль переменных)</span></div>
<div class="erm-paragraph">
<br>Используется для регистрации <a href="../../variables/#ref-cont-flags-fl">флагов</a>, <a href="../../variables/#ref-cont-flags-var">переменных</a>, 
<a href="../fu/#ref-rec-fu">функций</a> и <a href="../do/#ref-rec-do">круговых функций</a>, используемых в скрипте.<br>
Этим можно сохранить используемые значение во внешний файл <em class="erm-legacy-file">ERMVarsUsed.LOG</em> для последующего использования.<br>
<strong>Внимание:</strong> этот ресивер должен использоваться как инструкция - <span class="erm-anchor" id="ref-rec-vc-erm"></span><strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VC</span></strong> -, иначе этот синтаксис не будет иметь смысла.<br>
<br>
<u></u> </div><span class="erm-anchor" id="ref-rec-vc-1"></span><details class="erm-comment"><summary>Комментарии и примечания (<span class="erm-anchor" id="ref-rec-vc-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Заметьте, что операция записи и сохранения запускается только когда ERM компилятор выполняет эти команды, 
т.е. в процессе WoG'ификации карты, перед первым днём. Так, вам нужно лишь начать игру для записи всех использованных переменных.<br>
Вы можете использовать команды [<a href="./#ref-rec-vc-b">B</a>] и [<a href="./#ref-rec-vc-e">E</a>] парами более одного раза для анализа разных частей скрипта. Эффект будет тот же.<br>
<div class="erm-paragraph"><u>Пример</u>: переменная v10 и v12 будут записаны, а v11 - пропущена:
<pre class="erm-example"><code class="language-erm">!#VC:C B;	очистить список, начать запись
!!VRv10:...;	используем переменную v10
!#VC:E;		останавливаем запись
!!VRv11:...;	используем переменную v11
!#VC:B;		начинаем запись
!!VRv12:...;	используем переменную v12
!#VC:E W C;	останавливаем запись, записываем файл ERMVarsUsed.LOG, очищаем список</code></pre>
Как вы видите, очистка списка производится в начале и в конце операции.</div>

<div class="erm-paragraph">Вы также можете несколько раз использовать секции [<a href="./#ref-rec-vc-y">Y</a>] и [<a href="./#ref-rec-vc-n">N</a>].
<pre class="erm-example"><code class="language-erm">!#VC:C B;
!!VRv10:...;
!!VRv11:...;
!#VC:Y;
!!VRv11:...;
!!VRv12:...;
!#VC:N;
!!VRv12:...;
!!VRv14:...;
!#VC:Y;
!!VRv14:...;
!#VC:N;
!!VRv13:...;
!#VC:E W C;</code></pre>
Эти переменные будут обозначены как повторяющиеся: v11 и v14; - и обычные переменные: v10,v12,v13<br>
(v12 не обозначается как перекрёстная ссылка, т.к. не использовалась перед поверкой.)</div>
<div class="erm-paragraph">Инструкция VC позволяет вам регистрировать следущие типы элементов:
</div><span class="erm-anchor" id="ref-rec-vc-t0"></span><ol class="erm-margin-top-zero">

<li>флаги: 1..1000</li>
<li><em>v</em>-переменные: v1…v10000</li>
<li><em>w</em>-переменные: w1…w100</li>
<li><em>z</em>-переменные: z1…z1000<br>
Помечается:<br>
- 'p' если использован(а) как параметр<br>
- '&amp;' если использован(а) в секции <strong>&amp;</strong><br>
- '|' если использован(а) в секции <strong>|</strong><br>
- '*' если повторяющийся<br>
</li><li>Таймеры: TM1…TM100 <br>
- помечается 't', если триггер был найден<br>
- помечается 'r', если ресивер или инструкция были найдены</li>
<li>Функции/циклы: FU1…FU30000, DO1…DO30000<br>
- помечается 't', если триггер (сама функция) была найдена<br>
- помечается 'r', если ресивер или инструкция, вызывающие функцию, были найдены<br>
- отмечается 'd', если ресивер или инструкция, вызывающие цикл, были найдены</li></ol>
<div class="erm-paragraph">VC не может записывать косвенные переменные вроде: <strong class="erm-inline-code"><span class="erm-tone-purple erm-legacy-strong">!!VR</span>vx10:…;</strong><br>
Номер переменной неизвестен в данное время потому, что x10 неопределена в данный момент.<br>
Это значит, что если вы хотите проверить свой скрипт, и если в нём были использованы такие косвенные переменные, 
то вам придётся проверять его вручную, линию за линией. Чтобы избежать такой работы в будущем, в начале можно инициализировать все нужные переменные, 
например:<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>…:S0;</strong> в начале скрипта, чтобы записать эту переменную.</div>
<div class="erm-paragraph">Вы можете записывать переменные от нескольких файлов скрипта. Скажем, вы можете поместить <strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:C B;</strong> в файл <em class="erm-legacy-file">script00.erm</em> и 
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:E W C;</strong> в <em class="erm-legacy-file">script40.erm</em>, и вы получите полный список переменных во всех скриптах от 0 до 40.<br>
Log-файл создаётся при загрузке карты и называется <em class="erm-legacy-file">ERMVarsUsed.LOG</em>. Если файл 
с таким именем уже существует, он будет перезаписан.<br>
<br>
Мы рекомендуем использовать секции Y и N для записи переменных/таймеров/функций, использующихся в вашем скрипте и в других скриптах.<br>
Для этого вы должны установить номер для вашего скрипта больший, чем у других скриптов, записать переменные во всех остальных скриптах, и использовать секции 
Y и N в вашем скрипте.<br>
<u>Пример</u>:<br>
У вас есть скрипты 0,1,2,3,4,5…50 и нужно проверить ваш скрипт на совпадающие переменные.<br>
</div><ol class="erm-margin-top-zero">
<li>Установить номер вашего скрипта, например, <em class="erm-legacy-file">script99.erm</em> (условие выполнено: 99 &gt; 50).</li>
<li>Добавить "начать запись" в начало первого скрипта (<em class="erm-legacy-file">script00.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:C B;</strong></li>
<li>Добавить "начать проверку на повторяющиеся переменные" в начало вашего скрипта (<em class="erm-legacy-file">script99.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:Y;</strong></li>
<li>Добавить "остановить проверку на повторяющиеся переменные" в конце вашего скрипта (<em class="erm-legacy-file">script99.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:N;</strong></li>
<li>Добавить "остановить запись и записать" в конец вашего скрипта (<em class="erm-legacy-file">script99.erm</em>):<br>
<strong class="erm-inline-code"><span class="erm-tone-gold erm-legacy-strong">!#VR</span>:E W C;</strong></li>
</ol>
Так, если ваш скрипт использует переменные/таймеры/функции, которые уже использовались в предыдущих скриптах, они будут отмечены в log-файле.<br>
Если вы хотите сделать ту же операцию для внутренних скриптов карты, установите номер скрипта как день события и проделайте всё вышесказанное.</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-anchor" id="ref-rec-vc-red"></span><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-b"></span><span class="erm-anchor" id="command-b-e-c-w"></span>B</strong></span><br>
Начать регистрацию использованных переменных</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-c"></span>C</strong></span><br>
Очистить список используемых переменных ERM</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-e"></span>E</strong></span><br>
Прекратить регистрацию переменных</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-n"></span>N</strong></span><br>
Остановить проверку секции</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-w"></span>W</strong></span><br>
Записать переменные в <em class="erm-legacy-file">ERMVarsUsed.LOG</em></div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-vc-y"></span><span class="erm-anchor" id="command-y-n"></span>Y</strong></span><br>
Начать проверку секции</div>
<hr>
















</div>
</div>
</section>
:::

## Связанные команды и таблицы {#reference-links}

[Переменные, строки и массивы](../../variables/) · [Вызовы функций (FU)](../fu/) · [Циклические вызовы (DO)](../do/)
