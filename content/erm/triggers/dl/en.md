---
{"title":"Custom dialog events (DL)","summary":"Handles custom-dialog item actions. Classic context: v998 is dialog ID, v999 item ID, v1000 action.","translationStatus":"reviewed"}
---

## Trigger DL {#ref-tr-dl}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-center erm-paragraph">
<span class="erm-source-title">Trigger <strong>DL</strong><a href="../../compatibility/#ref-cont-te" title="Only works with HoMM3:TE or later.."><img src="../../../../assets/erm/b3bff56318940675.gif" alt="TE" loading="lazy" decoding="async" class="erm-figure erm-image-top erm-inline-icon"></a>(dialogue element)</span></div>
<div class="erm-paragraph"><br><span class="erm-anchor" id="ref-tr-dl-red"></span><span class="erm-tone-red"><strong>!?DL;</strong></span> <strong>- Trigger customized dialog.</strong><br>

Triggered by any mouse or keyboard action (not yet supported) on any dialog element<br>
When the trigger fires, the following variables are set:<br>
<strong>   v998</strong> - dialogue number<br>
<strong>   v999</strong> - element number<br>
<strong>   v1000</strong> - action:<br>
<span class="erm-anchor" id="ref-tr-dl-step"></span><span class="erm-indent">      = 10 - active "button" element pressed</span><br>
<span class="erm-indent">      = 12 - pressed <span class="erm-anchor" id="ref-tr-dl-vc"></span><img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>
<span class="erm-indent">      = 13 - released <img src="../../../../assets/erm/6fa667d4a59ddf70.gif" alt="Left mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>
<span class="erm-indent">      = 14 - pressed <img src="../../../../assets/erm/c199f8a8094f5607.gif" alt="Right mouse button" loading="lazy" decoding="async" class="erm-figure erm-inline-icon"></span><br>

<u>Example</u>:
<pre class="erm-example"><code class="language-erm">!?DL&amp;v1000=13/v999=30721; pressed the button with id=30721
!!DL:C1; close dialog</code></pre></div>
<span class="erm-anchor" id="ref-tr-dl-q1"></span><div class="erm-tone-quote erm-note erm-paragraph">See also: receiver <a href="../../receivers/dl/#ref-rec-dl">!!DL</a></div>

</div>
</section>
:::

## When it fires {#event}

Handles custom-dialog item actions. Classic context: v998 is dialog ID, v999 item ID, v1000 action.

## Declaration {#syntax}

```erm
!?DL;
```

## ERA names and aliases {#names}

| ERM | Name | ID |
| --- | --- | --- |
| `DL` | `OnCustomDialogEvent` | 30371 |

## Limitations and ordering {#limits}

Check your dialog ID before changing items. Available actions and keyboard support depend on the dialog extension version.

## Related reference {#related}

[Event catalog](../) · [Conditions](../../conditions/) · [Functions](../../functions/)

## Related commands and tables {#reference-links}

[ERM debugging and compatibility](../../compatibility/) · [Custom dialogs (DL)](../../receivers/dl/)

<!-- ERA3-GENERATED:START -->
## ERA 3 changes {#era3-updates}

These entries clarify or supersede historical behavior from the old ERM Help.

- [ERA 3.4.0, +](../../compatibility/#era3-v-3-4-0-l1915) — Event DL/(OnCustomDialogEvent) now receive all mouse/keyboard parameters, accessible via !!CM and tracks clicks outside dialogs main area. Check CM:T or i^dlg_action^ value for: (DLG_ACTION_INDLG_CLICK) (DLG_ACTION_OUTDL…
<!-- ERA3-GENERATED:END -->
