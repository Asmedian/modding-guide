---
{"title":"Bits, masks and hexadecimal","summary":"Bit indices start at 0; each mask is 2 raised to its index. The high bit of a signed 32-bit ERM integer corresponds to -2147483648. Hex FF = 255; hex 100 = 256.","translationStatus":"reviewed"}
---

## converter HEX values in the decimal system {#ref-form-16to10}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph">
<span class="erm-source-title">Converter HEX values to 10-digit system</span></div>
<div class="table-wrap erm-reference-table"><table width="100%">
<span class="erm-anchor" id="ref-form-16to10-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="15%">HEX</td>
	<td width="5"></td>
	<td>Result</td></tr>
<tr>
	<td><span class="erm-anchor" id="ref-form-16to10-inputhex"></span><input class="erm-radix-input" data-erm-radix="16" type="text" value="" inputmode="text" aria-label="Enter the hex value you need.." title="Enter the hex value you need.."></td>
	<td>⇒</td>
	<td><span class="erm-anchor" id="ref-form-16to10-inputdec"></span><output class="erm-radix-result" aria-label="Decimal value of the hex number you specified" title="Decimal value of the hex number you specified"></output></td>
</tr></table></div>
</div>
</section>
:::

## Bit table {#ref-form-hex}

:::erm
<section class="erm-reference" lang="en">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Bit value table</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
<span class="erm-anchor" id="ref-form-hex-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="15%">Bit</td>
	<td>Meaning</td></tr>
<tr>
	<td>0</td>
	<td>1</td></tr>
<tr>
	<td><span class="erm-tone-red">1</span></td>
	<td><span class="erm-tone-red">2</span></td></tr>
<tr>
	<td>2</td>
	<td>4</td></tr>
<tr>
	<td><span class="erm-tone-red">3</span></td>
	<td><span class="erm-tone-red">8</span></td></tr>
<tr>
	<td>4</td>
	<td>16</td></tr>
<tr>
	<td><span class="erm-tone-red">5</span></td>
	<td><span class="erm-tone-red">32</span></td></tr>
<tr>
	<td>6</td>
	<td>64</td></tr>
<tr>
	<td><span class="erm-tone-red">7</span></td>
	<td><span class="erm-tone-red">128</span></td></tr>
<tr>
	<td>8</td>
	<td>256</td></tr>
<tr>
	<td><span class="erm-tone-red">9</span></td>
	<td><span class="erm-tone-red">512</span></td></tr>
<tr>
	<td>10</td>
	<td>1024</td></tr>
<tr>
	<td><span class="erm-tone-red">11</span></td>
	<td><span class="erm-tone-red">2048</span></td></tr>
<tr>
	<td>12</td>
	<td>4096</td></tr>
<tr>
	<td><span class="erm-tone-red">13</span></td>
	<td><span class="erm-tone-red">8192</span></td></tr>
<tr>
	<td>14</td>
	<td>16384</td></tr>
<tr>
	<td><span class="erm-tone-red">15</span></td>
	<td><span class="erm-tone-red">32768</span></td></tr>
<tr>
	<td>16</td>
	<td>65536</td></tr>
<tr>
	<td><span class="erm-tone-red">17</span></td>
	<td><span class="erm-tone-red">131072</span></td></tr>
<tr>
	<td>18</td>
	<td>262144</td></tr>
<tr>
	<td><span class="erm-tone-red">19</span></td>
	<td><span class="erm-tone-red">524288</span></td></tr>
<tr>
	<td>20</td>
	<td>1048576</td></tr>
<tr>
	<td><span class="erm-tone-red">21</span></td>
	<td><span class="erm-tone-red">2097152</span></td></tr>
<tr>
	<td>22</td>
	<td>4194304</td></tr>
<tr>
	<td><span class="erm-tone-red">23</span></td>
	<td><span class="erm-tone-red">8388608</span></td></tr>
<tr>
	<td>24</td>
	<td>16777216</td></tr>
<tr>
	<td><span class="erm-tone-red">25</span></td>
	<td><span class="erm-tone-red">33554432</span></td></tr>
<tr>
	<td>26</td>
	<td>67108864</td></tr>
<tr>
	<td><span class="erm-tone-red">27</span></td>
	<td><span class="erm-tone-red">134217728</span></td></tr>
<tr>
	<td>28</td>
	<td>268435456</td></tr>
<tr>
	<td><span class="erm-tone-red">29</span></td>
	<td><span class="erm-tone-red">536870912</span></td></tr>
<tr>
	<td>30</td>
	<td>1073741824</td></tr>
<tr>
	<td><span class="erm-tone-red">31</span></td>
	<td><span class="erm-tone-red">2147483648</span></td></tr>
</table></div>

</div>
</section>
:::

## Purpose {#meaning}

Bit indices start at 0; each mask is 2 raised to its index. The high bit of a signed 32-bit ERM integer corresponds to -2147483648. Hex FF = 255; hex 100 = 256.

## Values {#values}

| Bit | Unsigned mask | Hex |
| --- | --- | --- |
| 0 {#bit-0} | 1 | `00000001` |
| 1 {#bit-1} | 2 | `00000002` |
| 2 {#bit-2} | 4 | `00000004` |
| 3 {#bit-3} | 8 | `00000008` |
| 4 {#bit-4} | 16 | `00000010` |
| 5 {#bit-5} | 32 | `00000020` |
| 6 {#bit-6} | 64 | `00000040` |
| 7 {#bit-7} | 128 | `00000080` |
| 8 {#bit-8} | 256 | `00000100` |
| 9 {#bit-9} | 512 | `00000200` |
| 10 {#bit-10} | 1024 | `00000400` |
| 11 {#bit-11} | 2048 | `00000800` |
| 12 {#bit-12} | 4096 | `00001000` |
| 13 {#bit-13} | 8192 | `00002000` |
| 14 {#bit-14} | 16384 | `00004000` |
| 15 {#bit-15} | 32768 | `00008000` |
| 16 {#bit-16} | 65536 | `00010000` |
| 17 {#bit-17} | 131072 | `00020000` |
| 18 {#bit-18} | 262144 | `00040000` |
| 19 {#bit-19} | 524288 | `00080000` |
| 20 {#bit-20} | 1048576 | `00100000` |
| 21 {#bit-21} | 2097152 | `00200000` |
| 22 {#bit-22} | 4194304 | `00400000` |
| 23 {#bit-23} | 8388608 | `00800000` |
| 24 {#bit-24} | 16777216 | `01000000` |
| 25 {#bit-25} | 33554432 | `02000000` |
| 26 {#bit-26} | 67108864 | `04000000` |
| 27 {#bit-27} | 134217728 | `08000000` |
| 28 {#bit-28} | 268435456 | `10000000` |
| 29 {#bit-29} | 536870912 | `20000000` |
| 30 {#bit-30} | 1073741824 | `40000000` |
| 31 {#bit-31} | 2147483648 | `80000000` |

## Related commands and tables {#related}

[VR: & / | / X](../../receivers/vr/) · [All tables](../)

## Related commands and tables {#reference-links}

[Variables and expressions (VR)](../../receivers/vr/) · [Variables and expressions (VR)](../../receivers/vr/#command-mask-or-xmask-sd-bits-sd-bits) · [Variables and expressions (VR)](../../receivers/vr/#command-s-c-1-16) · [Variables and expressions (VR)](../../receivers/vr/#command-h-flag-ustring) · [Variables and expressions (VR)](../../receivers/vr/#command-r-r-r0-min-max-free-t) · [Variables and expressions (VR)](../../receivers/vr/#command-vstring-zstring-sstring-string) · [Variables, strings and arrays](../../variables/) · [ERM debugging and compatibility](../../compatibility/) · [Object control words](../object-control-words/#values) · [Creature bit flags](../creature-flags/)
