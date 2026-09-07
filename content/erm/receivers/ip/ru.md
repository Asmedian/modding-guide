---
{"title":"Сетевая синхронизация (IP)","summary":"Ресивер IP: сетевая синхронизация, параметры команд и ограничения.","translationStatus":"reviewed","displayTitle":"Сетевая синхронизация (IP)"}
---

## Ресивер IP {#ref-rec-ip}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>


<span class="erm-anchor" id="ref-rec-ip-text"></span><div> 
<div class="erm-align-center erm-paragraph">

<span class="erm-source-title">Ресивер <strong>IP</strong> (сервис сетевой игры)</span></div>
<div class="erm-paragraph"><br>
<strong><span class="erm-anchor" id="ref-rec-ip-red"></span><span class="erm-tone-red">!!IP:XXXX;</span> - сетевой сервис для битвы.</strong><br>
<u>
</u></div><span class="erm-anchor" id="ref-rec-ip-1"></span><details class="erm-comment"><summary>Описание (<span class="erm-anchor" id="ref-rec-ip-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body"> 
Теперь во время сражения вы можете передавать значения <em>v</em>-переменных другому компьютеру и <a href="../fu/#ref-rec-fu-d">вызывать функции с его стороны</a>.<br>
Скажем, вы запускаете скрипт, подчиняющийся игроку (например, разделение стеков). Скрипт запускается на одном компьютере, 
так как это реакция на действие человека (клик мышью). Так что всё, что вы заменяете на своей стороне, не будет изменено на другом компьютере.<br>
Теперь вы сможете передать все изменения или значения другому компьютеру, не запуская там самого скрипта.<br>
<u></u><span class="erm-anchor" id="ref-rec-ip-3"></span><details class="erm-comment"><summary>Пример 1 (<span class="erm-anchor" id="ref-rec-ip-show3"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
На одной стороне вы запускаете скрипт по действию мыши:<pre class="erm-example"><code class="language-erm">...
!!VRv1234:S999;</code></pre>
На другом компьютере v1234 будет всё ещё хранить старое значение. Для 
исправления этого используйте:
<pre class="erm-example"><code class="language-erm">...
!!VRv1234:S999;
!!IP:V1234/1234;</code></pre>
Последняя команда немедленно отошлет значение v1234 к другому компьютеру.<br><br>
Теперь ко второй части проблемы.<br>
Скажем, вы используете некоторые специфические команды, которые возымеют эффект на поле боя (например, кастование заклинаний с 
помощью ERM). Опять же, если вы проведете действия на одной стороне, возникнет проблема, потому что ничего не произошло на другой стороне. 
Теперь вы можете использовать дистанционный вызов для таких случаев. Это означает, что вы вызываете функцию, 
но она запускается не на этом, текущем, компьютере, а на втором (компьютере оппонента). Передаётся до 16 параметров.<br>
К примеру, на своей стороне вы имеете:
<pre class="erm-example"><code class="language-erm">...
!!BMv10:Mi/y5/5;</code></pre>
Для корректного выполнения вы должны проделать некоторые вещи:
<pre class="erm-example"><code class="language-erm">!!BMv10:Mi/y5/5;
!!FU12345:Dv10/i/y5/5;
!?FU12345;
!!BMx1:Mx2/x3/x4;
</code></pre>
Это всё. Принцип работы: команда <a href="../fu/#ref-rec-fu-d">FU:D</a> немедленно передаёт все <em>x</em>-параметры на другой 
компьютер и вызовет там функцию 12345. Так команда <span class="erm-anchor" id="ref-rec-ip-erm"></span><span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>v10:M...;</span> будет работать на 
одном компьютере и команда <span class="erm-inline-code"><strong class="erm-tone-purple erm-legacy-strong">!!BM</strong>x1:M...;</span> на другом. Если вы сделаете всё правильно, 
то получите одинаковый эффект на обеих сторонах.<br>
Заметьте, что вы можете передать значения некоторых переменных командой <a href="./#ref-rec-ip-v">IP:V</a> и затем 
вызвать <a href="../fu/#ref-rec-fu-d">FU:D</a> для передачи более, чем 16 <em>x</em>-параметров на другой компьютер.<br><br></div></details>
<u>
</u><span class="erm-anchor" id="ref-rec-ip-4"></span><details class="erm-comment"><summary>Пример 2 (<span class="erm-anchor" id="ref-rec-ip-show4"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
<pre class="erm-example"><code class="language-erm">ZVSE

!?BG0;
!!IF:M^Привет!^;
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;
!!IP:V99/100;
!!FU123:D1/2/3/4/5;

!?FU123;
!!IF:M^V99=%V99, V100=%V100, V101=%V101, X1=%X1, X2=%X2, X3=%X3, X4=%X4, X5=%X5^;
</code></pre>
Вы увидите сообщение <em>"Привет!"</em> при любом действии стека, далее увидите сообщение 
<em>"V99=99, V100=100, V101=0, X1=1, X2=2, X3=3, X4=4, X5=5"</em> на другом компьютере. Затем вы получите сообщение 
<em>"Привет!"</em> на другом компьютере.<br>
Если вы продолжите, следующее полученное вами сообщение будет <em>"V99=99, V100=100, V101=101, X1=1, X2=2, X3=3, X4=4, X5=5"</em>. 
Так, изменилась v101. Это потому что вы отправили v99 и v100 через сеть и вызвали функцию, которая покажет сообщение (поэтому v101 = 0). 
Но затем триггер !?BG0 сработал на стороне защищающегося и v101 была установлена на значение 101.<br>
Этот пример лишь демонстрация действий, потому что этот скрипт:
<pre class="erm-example"><code class="language-erm">!?BG0;
!!IF:M^Привет!^:
!!VRv99:S99;
!!VRv100:S100;
!!VRv101:S101;</code></pre>… будет работать одинаково на обеих сторонах. Но, если вы запустите скрипт как 
реакцию на действие человека (обычно, клик мыши), вам нужно будет продумать 
передачу изменений на другой компьютер.</div></details></div></details>
<span class="erm-anchor" id="ref-rec-ip-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">См. также: триггер <a href="../../triggers/ip/#ref-tr-ip">!?IP</a></div>
<hr>	
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-d"></span><span class="erm-anchor" id="command-d"></span>D$</strong></span><br>
Установить игрока для передачи информации через !!IP. $ - номер 
игрока (-1 = все игроки).<br>
<u></u></div><span class="erm-anchor" id="ref-rec-ip-2"></span><details class="erm-comment"><summary>Комментарий (<span class="erm-anchor" id="ref-rec-ip-show2"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Вы можете передать переменные и вызвать определённые функции не только в 
сражении, но и на карте. Поэтому вы должны установить игрока, которому посылаете 
значения этой командой. Она работает тем же путём, что и <em>w</em>-переменные героя. 
Так, если вы установите !!IP:D, оно будет таковым, пока вы (или 
кто-либо ещё) не измените значение. Обратите внимание, что если вы сохраняете и 
затем загружаете игру, игрок - приниматель становится не определен, поэтому установите эту 
команду в каждом триггере, посылающем данные. Также обратите внимание, что если 
вы посылаете всем игрокам (-1), все посланные переменные и вызванные функции 
будут запущены на всех PC в игре, включая самого себя. Сначала пробежит 
всех игроков по очереди, и последний игрок перенаправит на инициатора. Это хороший 
способ сообщить всем сторонам об каких-либо изменениях.</div></details>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-f"></span><span class="erm-anchor" id="command-f-1-2-v-1-2"></span>F$1/$2</strong></span><br>
Отправить флаги стороне оппонента<br>
        $1 – номер первого флага для передачи<br>
        $2 – номер последнего флага для 
передачи</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-r"></span><span class="erm-anchor" id="command-r"></span>R</strong></span><br>
Перезапустить случайный генератор на обеих сторонах на одну 
последовательность</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-v"></span>V$1/$2</strong></span><br>
Отправить <em>v</em>-переменные стороне оппонента<br>
        $1 – номер первой <em>v</em>-переменной для 
передачи<br>
        $2 – номер последней <em>v</em>-переменной для 
передачи</div>
<hr>
<div class="erm-paragraph"><span class="erm-tone-red"><strong><span class="erm-anchor" id="ref-rec-ip-w"></span><span class="erm-anchor" id="command-w-1-2-3"></span>W$1/$2/$3</strong></span><br>
Отправить W-переменную героя стороне оппонента<br>
        $1 – номер героя<br>
        $2 – первая <em>w</em>-переменная для передачи<br>
        $3 – последняя <em>w</em>-переменная для 
передачи</div>
<hr>
















	
	
</div>
</div>
</section>
:::

## Связанные материалы {#related}

[IP](../../triggers/ip/) · [FU](../../receivers/fu/)



## Связанные команды и таблицы {#reference-links}

[Вызовы функций (FU)](../fu/#command-d-1-16) · [Сетевая передача данных боя (IP)](../../triggers/ip/)

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, *](../../compatibility/#era3-v-3-9-12-l769) — The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attacker side, battle may still be cancelled !?FU(OnBeforeBattleBeforeDataSend); …
<!-- ERA3-GENERATED:END -->
