---
{"title":"Макросы классического ERM (MC)","summary":"Ресивер MC: макросы классического erm, параметры команд и ограничения.","translationStatus":"reviewed"}
---

## Ресивер MC {#ref-rec-mc}

:::erm
<section class="erm-reference" lang="ru"><span class="erm-anchor" id="command-s-name"></span><span class="erm-anchor" id="example"></span><span class="erm-anchor" id="notes"></span><span class="erm-anchor" id="syntax"></span>
<div>
<div class="erm-align-center erm-paragraph"><span class="erm-source-title">Ресивер <strong>MC</strong> (макросы)
</span></div>
<div class="erm-paragraph">
<br>
<strong><span class="erm-anchor" id="ref-rec-mc-red"></span><span class="erm-tone-red">!!MC#:S@Var@</span> 
- установить макрос.</strong><br>
Используется для назначения текстового имени переменной.<br>
Применимо к <a href="../../variables/#ref-cont-flags-var-typ">переменным</a> f…t, v#, z# и w#.</div>
<strong></strong><span class="erm-anchor" id="ref-rec-mc-1"></span><details class="erm-comment"><summary>Замечание (<span class="erm-anchor" id="ref-rec-mc-show1"></span><strong class="erm-toggle-label">показать</strong>)</summary><div class="erm-comment-body">
Сперва вы должны установить макрос инструкцией перед использованием макро-имени:
<pre class="erm-example"><code class="language-erm">!#MCv100:S@Var100@;
Переменная v100 теперь имеет второе имя «Var100».</code></pre></div></details>
<div class="erm-paragraph">Длина макро-имени ограничена восемью символами. Вы можете использовать имя длиннее, но только первые 8 символов будут использоваться для поиска переменной.<br>
Вы можете изменить имя макроса в любое время, если вы установили его не в инструкции, а в ресивере.<br>
Вы можете использовать макро-имя в любом месте, где вы можете использовать переменную. Он должен быть заключён между двух знаков <strong>$</strong>.
<pre class="erm-example"><code class="language-erm">!!HE-1:P?$Var100$/?v1000/?v999;
!!IF&amp;$Var100$=v1000/v100=5:...;</code></pre>

Вы можете установить макро-имя как <em>z</em>-переменную.<br>
Для использования макро–имена в сообщении они заключаются в <strong>$$</strong> и впереди имеют знак <strong>%</strong>:
<pre class="erm-example"><code class="language-erm">!!IF:M^Это %$игрок$ и его значение %$знач$^;</code></pre></div>

</div>
</section>
:::

## Связанные материалы {#related}

[VR](../../receivers/vr/)



## Связанные команды и таблицы {#reference-links}

[Переменные, строки и массивы](../../variables/)
