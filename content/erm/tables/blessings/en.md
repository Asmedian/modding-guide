---
{"title":"Hero blessings and curses","summary":"HE:Y IDs and power parameter meanings. Slot-locking curses use a separate slot table. Legacy WoG effects may depend on installed scripts.","translationStatus":"reviewed"}
---

## Curses and Blessings {#ref-form-bless}

:::erm
<section class="erm-reference" lang="en">
<div><div class="erm-align-left erm-paragraph"><span class="erm-source-title">Table of Curses and Blessings</span></div>
<div class="table-wrap erm-reference-table"><table class="erm-table-first-center" width="100%">
<span class="erm-anchor" id="ref-form-bless-n2"></span><tr class="erm-tone-purple erm-strong">
	<td width="2%">#</td>
	<td class="erm-align-center" width="60"></td>
	<td class="erm-align-center">Explanations and settings</td></tr>
<tr>
	<td>1</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/84ebe9cd4fc7444f.gif" alt="bm900" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Hero cannot explore new lands. The strength of the spell does not matter.</td></tr>
<tr>
	<td>2</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/1d060eba77cd7e89.gif" alt="bm910" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>One hero slot is blocked. Spell Power = <a href="../artifact-slots/#ref-form-ap3">slot number</a> <br>(-1 = random).</td></tr>
<tr>
	<td>3</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/f8fa213219d99dbf.gif" alt="bm920" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>No creature joins the hero. The strength of the spell does not matter.</td></tr>
<tr>
	<td>4</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/15072d620f5f84de.gif" alt="bm930" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>The hero's owner loses money every day. The power of the spell determines the amount of gold.</td></tr>
<tr>
	<td>5</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/43d2caab7e18158a.gif" alt="bm940" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Obtaining resources (crystals, gems, mercury, sulfur) every day. The power of the spell determines the number of resources.</td></tr>
<tr>
	<td>6</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/0955d8bf09b79562.gif" alt="bm950" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily mana loss. The power of the spell determines the amount of mana.</td></tr>
<tr>
	<td>7</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4969f7da08982dd3.gif" alt="bm960" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Replenishes Mana daily. The power of the spell determines the amount of mana.</td></tr>
<tr>
	<td>8</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/d6afa8892e9944ef.gif" alt="blind" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Set the hero's vision radius to 2. The strength of the spell does not matter</td></tr>
<tr>
	<td>9</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/cf182eef95594461.gif" alt="bm980" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Gaining experience every day. The strength of the spell determines the amount of additional experience.</td></tr>
<tr>
	<td>10</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/2f6d435c56ff1cb6.gif" alt="bm990" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Hero loses movement points. The strength of the spell determines the number of movement points.</td></tr>
<tr>
	<td>11</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/0ddabab7d4c0d586.gif" alt="bm1000" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Not working yet</td></tr>
<tr>
	<td>12</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/39560ed2d598bdca.gif" alt="bm1010" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Not working yet</td></tr>
<tr>
	<td>13</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/aa98ef8a9c8d1e01.gif" alt="bm1020" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Not working yet</td></tr>
<tr>
	<td>14</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/0a0c4e1622687bf5.gif" alt="bm1030" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Not working yet</td></tr>
<tr>
	<td>15</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/9bcc6d4c77e28463.gif" alt="bm1040" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extra wood. The strength of the spell determines the amount of additional wood.</td></tr>
<tr>
	<td>16</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/991011db9021af0c.gif" alt="bm1050" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extra ore. The strength of the spell determines the number of additional spells. ore.</td></tr>
<tr>
	<td>17</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/291736051f6a4bf9.gif" alt="bm1060" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extras gems. The power of the spell determines the number of additional gems.</td></tr>
<tr>
	<td>18</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/da078036dfa7ddee.gif" alt="bm1070" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extra mercury. The strength of the spell determines the amount of additional mercury.</td></tr>
<tr>
	<td>19</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/6714512c8ed55d21.gif" alt="bm1080" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extra sulfur. The strength of the spell determines the amount of additional sulfur.</td></tr>
<tr>
	<td>20</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/62e774dc67a5b168.gif" alt="bm1090" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extras crystals. The power of the spell determines the number of additional crystals.</td></tr>
<tr>
	<td>21</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4599e7c0455ec7b4.gif" alt="bm1100" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Daily extra gold. The power of the spell determines the amount of additional gold.</td></tr>
<tr>
	<td>22</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/306a0b9c462d1a71.gif" alt="bm1110" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>23</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/20aa360b5340740a.gif" alt="bm1120" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>24</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4ff031958e39e5ee.gif" alt="bm1130" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>25</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/0d4ad79a519f6056.gif" alt="bm1140" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>26</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/5c3872c54aa676c4.gif" alt="bm1150" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>27</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/512a90099ae0bc9b.gif" alt="bm1160" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>28</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/9de958f2396e2366.gif" alt="bm1170" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>29</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/9ebdd320d36a2abd.gif" alt="bm1180" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>30</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/e1154a08698e908a.gif" alt="bm1190" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>31</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/632e404fc0d7fdba.gif" alt="bm1200" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>32</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/7b91c4a3783493dc.gif" alt="bm1210" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>33</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/02e3bc093bfa8c36.gif" alt="bm1220" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>34</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/618cec86a042a06b.gif" alt="bm1230" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>35</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/5e6ec80b6bb42749.gif" alt="bm1240" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>36</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/d4b41e7be53f9add.gif" alt="bm1250" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>37</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/850b9a7c66b5ae7a.gif" alt="bm1260" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>38</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/08821e07926ac20f.gif" alt="bm1270" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>39</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/6d635bf043da9da2.gif" alt="bm1280" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>40</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/84d4f6f4fe63280a.gif" alt="bm1290" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>41</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4bd855fbee283174.gif" alt="bm1300" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>42</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4c9fdf7fd6dbebe4.gif" alt="bm1310" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>43</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/8ada78dc10ee111e.gif" alt="bm1320" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>44</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4f5a190ee7f2e39a.gif" alt="bm1330" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>45</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/436a600a76fee68d.gif" alt="bm1340" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>46</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/c3c31fe2416ba7c3.gif" alt="bm1350" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>47</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/620e475dc016abd7.gif" alt="bm1360" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>48</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/7cb05d23733e7904.gif" alt="bm1370" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>49</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/c8eec9af09e4ce4e.gif" alt="bm1380" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>50</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/bd69fd6c7ea46fa2.gif" alt="bm1390" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>51</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/1bc48bdd51a37e12.gif" alt="bm1400" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>52</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/851e398a7a74084f.gif" alt="bm1410" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>53</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/6ac5989f934efdea.gif" alt="bm1420" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>54</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/6dd2bc85c3c42260.gif" alt="bm1430" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>55</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/6f66724e717d483d.gif" alt="bm1440" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>56</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/56f66a7310a906f2.gif" alt="bm1450" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>57</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/71c31f047c0a3106.gif" alt="bm1460" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>58</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/eb41470c376678ee.gif" alt="bm1470" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>59</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/4f6d090cc59f0dc6.gif" alt="bm1480" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>60</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/04f72360d350d68d.gif" alt="bm1490" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>61</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/7dc5db50d159d035.gif" alt="bm1500" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>62</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/326a913b945ae1b4.gif" alt="bm1510" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Inability to visit the object in the picture. The strength of the spell does not matter.</td></tr>
<tr>
	<td>63</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/39e435b356bf8e83.gif" alt="bm1520" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Not working yet</td></tr>
<tr>
	<td>64</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/47aecec703dfb95f.gif" alt="bm1530" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Receive additional daily wood and ore. The power of the spell determines the amount of ore and wood.</td></tr>
<tr>
	<td>65</td>
	<td class="erm-align-center"><img src="../../../../assets/erm/225837836aab817b.gif" alt="bm1540" loading="lazy" decoding="async" class="erm-figure"></td>
	<td>Increase the hero's turn points. Spell power = number of additional move points.</td></tr>
</table></div>

</div>
</section>
:::

## Purpose {#meaning}

HE:Y IDs and power parameter meanings. Slot-locking curses use a [separate slot table](../artifact-slots/). Legacy WoG effects may depend on installed scripts.

## Values {#values}

| ID | Icon | Effect |
| --- | --- | --- |
| 1 {#id-1} | ![Effect 1](../../../../assets/erm/84ebe9cd4fc7444f.gif) | Cannot explore new terrain; power ignored |
| 2 {#id-2} | ![Effect 2](../../../../assets/erm/1d060eba77cd7e89.gif) | Lock one artifact slot; power is slot ID, −1 random |
| 3 {#id-3} | ![Effect 3](../../../../assets/erm/f8fa213219d99dbf.gif) | Map creatures never join; power ignored |
| 4 {#id-4} | ![Effect 4](../../../../assets/erm/15072d620f5f84de.gif) | Daily gold loss equal to power |
| 5 {#id-5} | ![Effect 5](../../../../assets/erm/43d2caab7e18158a.gif) | Daily rare resources equal to power |
| 6 {#id-6} | ![Effect 6](../../../../assets/erm/0955d8bf09b79562.gif) | Daily mana loss equal to power |
| 7 {#id-7} | ![Effect 7](../../../../assets/erm/4969f7da08982dd3.gif) | Daily mana gain equal to power |
| 8 {#id-8} | ![Effect 8](../../../../assets/erm/d6afa8892e9944ef.gif) | Sight radius 2; power ignored |
| 9 {#id-9} | ![Effect 9](../../../../assets/erm/cf182eef95594461.gif) | Daily experience equal to power |
| 10 {#id-10} | ![Effect 10](../../../../assets/erm/2f6d435c56ff1cb6.gif) | Movement loss equal to power |
| 11 {#id-11} | ![Effect 11](../../../../assets/erm/0ddabab7d4c0d586.gif) | Inactive in the legacy version |
| 12 {#id-12} | ![Effect 12](../../../../assets/erm/39560ed2d598bdca.gif) | Inactive in the legacy version |
| 13 {#id-13} | ![Effect 13](../../../../assets/erm/aa98ef8a9c8d1e01.gif) | Inactive in the legacy version |
| 14 {#id-14} | ![Effect 14](../../../../assets/erm/0a0c4e1622687bf5.gif) | Inactive in the legacy version |
| 15 {#id-15} | ![Effect 15](../../../../assets/erm/9bcc6d4c77e28463.gif) | Daily wood equal to power |
| 16 {#id-16} | ![Effect 16](../../../../assets/erm/991011db9021af0c.gif) | Daily ore equal to power |
| 17 {#id-17} | ![Effect 17](../../../../assets/erm/291736051f6a4bf9.gif) | Daily gems equal to power |
| 18 {#id-18} | ![Effect 18](../../../../assets/erm/da078036dfa7ddee.gif) | Daily mercury equal to power |
| 19 {#id-19} | ![Effect 19](../../../../assets/erm/6714512c8ed55d21.gif) | Daily sulfur equal to power |
| 20 {#id-20} | ![Effect 20](../../../../assets/erm/62e774dc67a5b168.gif) | Daily crystal equal to power |
| 21 {#id-21} | ![Effect 21](../../../../assets/erm/4599e7c0455ec7b4.gif) | Daily gold equal to power |
| 22 {#id-22} | ![Effect 22](../../../../assets/erm/306a0b9c462d1a71.gif) | Cannot visit the pictured object; power ignored |
| 23 {#id-23} | ![Effect 23](../../../../assets/erm/20aa360b5340740a.gif) | Cannot visit the pictured object; power ignored |
| 24 {#id-24} | ![Effect 24](../../../../assets/erm/4ff031958e39e5ee.gif) | Cannot visit the pictured object; power ignored |
| 25 {#id-25} | ![Effect 25](../../../../assets/erm/0d4ad79a519f6056.gif) | Cannot visit the pictured object; power ignored |
| 26 {#id-26} | ![Effect 26](../../../../assets/erm/5c3872c54aa676c4.gif) | Cannot visit the pictured object; power ignored |
| 27 {#id-27} | ![Effect 27](../../../../assets/erm/512a90099ae0bc9b.gif) | Cannot visit the pictured object; power ignored |
| 28 {#id-28} | ![Effect 28](../../../../assets/erm/9de958f2396e2366.gif) | Cannot visit the pictured object; power ignored |
| 29 {#id-29} | ![Effect 29](../../../../assets/erm/9ebdd320d36a2abd.gif) | Cannot visit the pictured object; power ignored |
| 30 {#id-30} | ![Effect 30](../../../../assets/erm/e1154a08698e908a.gif) | Cannot visit the pictured object; power ignored |
| 31 {#id-31} | ![Effect 31](../../../../assets/erm/632e404fc0d7fdba.gif) | Cannot visit the pictured object; power ignored |
| 32 {#id-32} | ![Effect 32](../../../../assets/erm/7b91c4a3783493dc.gif) | Cannot visit the pictured object; power ignored |
| 33 {#id-33} | ![Effect 33](../../../../assets/erm/02e3bc093bfa8c36.gif) | Cannot visit the pictured object; power ignored |
| 34 {#id-34} | ![Effect 34](../../../../assets/erm/618cec86a042a06b.gif) | Cannot visit the pictured object; power ignored |
| 35 {#id-35} | ![Effect 35](../../../../assets/erm/5e6ec80b6bb42749.gif) | Cannot visit the pictured object; power ignored |
| 36 {#id-36} | ![Effect 36](../../../../assets/erm/d4b41e7be53f9add.gif) | Cannot visit the pictured object; power ignored |
| 37 {#id-37} | ![Effect 37](../../../../assets/erm/850b9a7c66b5ae7a.gif) | Cannot visit the pictured object; power ignored |
| 38 {#id-38} | ![Effect 38](../../../../assets/erm/08821e07926ac20f.gif) | Cannot visit the pictured object; power ignored |
| 39 {#id-39} | ![Effect 39](../../../../assets/erm/6d635bf043da9da2.gif) | Cannot visit the pictured object; power ignored |
| 40 {#id-40} | ![Effect 40](../../../../assets/erm/84d4f6f4fe63280a.gif) | Cannot visit the pictured object; power ignored |
| 41 {#id-41} | ![Effect 41](../../../../assets/erm/4bd855fbee283174.gif) | Cannot visit the pictured object; power ignored |
| 42 {#id-42} | ![Effect 42](../../../../assets/erm/4c9fdf7fd6dbebe4.gif) | Cannot visit the pictured object; power ignored |
| 43 {#id-43} | ![Effect 43](../../../../assets/erm/8ada78dc10ee111e.gif) | Cannot visit the pictured object; power ignored |
| 44 {#id-44} | ![Effect 44](../../../../assets/erm/4f5a190ee7f2e39a.gif) | Cannot visit the pictured object; power ignored |
| 45 {#id-45} | ![Effect 45](../../../../assets/erm/436a600a76fee68d.gif) | Cannot visit the pictured object; power ignored |
| 46 {#id-46} | ![Effect 46](../../../../assets/erm/c3c31fe2416ba7c3.gif) | Cannot visit the pictured object; power ignored |
| 47 {#id-47} | ![Effect 47](../../../../assets/erm/620e475dc016abd7.gif) | Cannot visit the pictured object; power ignored |
| 48 {#id-48} | ![Effect 48](../../../../assets/erm/7cb05d23733e7904.gif) | Cannot visit the pictured object; power ignored |
| 49 {#id-49} | ![Effect 49](../../../../assets/erm/c8eec9af09e4ce4e.gif) | Cannot visit the pictured object; power ignored |
| 50 {#id-50} | ![Effect 50](../../../../assets/erm/bd69fd6c7ea46fa2.gif) | Cannot visit the pictured object; power ignored |
| 51 {#id-51} | ![Effect 51](../../../../assets/erm/1bc48bdd51a37e12.gif) | Cannot visit the pictured object; power ignored |
| 52 {#id-52} | ![Effect 52](../../../../assets/erm/851e398a7a74084f.gif) | Cannot visit the pictured object; power ignored |
| 53 {#id-53} | ![Effect 53](../../../../assets/erm/6ac5989f934efdea.gif) | Cannot visit the pictured object; power ignored |
| 54 {#id-54} | ![Effect 54](../../../../assets/erm/6dd2bc85c3c42260.gif) | Cannot visit the pictured object; power ignored |
| 55 {#id-55} | ![Effect 55](../../../../assets/erm/6f66724e717d483d.gif) | Cannot visit the pictured object; power ignored |
| 56 {#id-56} | ![Effect 56](../../../../assets/erm/56f66a7310a906f2.gif) | Cannot visit the pictured object; power ignored |
| 57 {#id-57} | ![Effect 57](../../../../assets/erm/71c31f047c0a3106.gif) | Cannot visit the pictured object; power ignored |
| 58 {#id-58} | ![Effect 58](../../../../assets/erm/eb41470c376678ee.gif) | Cannot visit the pictured object; power ignored |
| 59 {#id-59} | ![Effect 59](../../../../assets/erm/4f6d090cc59f0dc6.gif) | Cannot visit the pictured object; power ignored |
| 60 {#id-60} | ![Effect 60](../../../../assets/erm/04f72360d350d68d.gif) | Cannot visit the pictured object; power ignored |
| 61 {#id-61} | ![Effect 61](../../../../assets/erm/7dc5db50d159d035.gif) | Cannot visit the pictured object; power ignored |
| 62 {#id-62} | ![Effect 62](../../../../assets/erm/326a913b945ae1b4.gif) | Cannot visit the pictured object; power ignored |
| 63 {#id-63} | ![Effect 63](../../../../assets/erm/39e435b356bf8e83.gif) | Inactive in the legacy version |
| 64 {#id-64} | ![Effect 64](../../../../assets/erm/47aecec703dfb95f.gif) | Daily wood and ore equal to power |
| 65 {#id-65} | ![Effect 65](../../../../assets/erm/225837836aab817b.gif) | Extra movement points equal to power |

## Related commands and tables {#related}

[HE:Y](../../receivers/he/) · [All tables](../)

## Related commands and tables {#reference-links}

[Artifact slots](../artifact-slots/) · [Heroes (HE)](../../receivers/he/#command-a) · [Heroes (HE)](../../receivers/he/#command-b0-b1-b2-b3) · [Heroes (HE)](../../receivers/he/#command-c-experience-modes) · [Heroes (HE)](../../receivers/he/#command-c2-c-1-14-d) · [Heroes (HE)](../../receivers/he/#command-e-2-1-f-1-2-3-4-1) · [Heroes (HE)](../../receivers/he/#command-g-w-1-i-1) · [Heroes (HE)](../../receivers/he/#command-h-1-2-3) · [Heroes (HE)](../../receivers/he/#command-k-k1) · [Heroes (HE)](../../receivers/he/#command-l1-file-l2-file-l0-l3-l4-l5-1-2) · [Heroes (HE)](../../receivers/he/#command-m-m-1) · [Heroes (HE)](../../receivers/he/#command-n-o-1-p-1-2-3-4) · [Heroes (HE)](../../receivers/he/#command-r-refresh) · [Heroes (HE)](../../receivers/he/#command-s-s-s-1-2-1) · [Heroes (HE)](../../receivers/he/#command-t-1-2-3-4-5-u-1-2-3) · [Heroes (HE)](../../receivers/he/#command-v-v) · [Heroes (HE)](../../receivers/he/#command-x-2-3-4-5-6-7) · [Heroes (HE)](../../receivers/he/#command-y-1-2-3-4-z) · [Heroes (HE)](../../receivers/he/) · [Game object table](../objects/) · [Hero table](../heroes/) · [Visiting a hero (HE)](../../triggers/he/) · [Artifact table](../artifacts/) · [Heroes (HE)](../../receivers/he/#command-a2-1-2-a3-a4) · [Variables, strings and arrays](../../variables/) · [Hero classes](../hero-classes/) · [Town types](../towns/) · [ERM debugging and compatibility](../../compatibility/) · [Creature table](../creatures/) · [Repeated function calls (DO)](../../receivers/do/) · [Hero experience thresholds](../hero-levels/) · [Spell table](../spells/) · [Player colors](../players/) · [Players (OW)](../../receivers/ow/#command-h-h) · [Battle configuration (BA)](../../receivers/ba/#command-o-1-2) · [Hero visits and bits](../hero-visits/) · [Secondary skills](../secondary-skills/) · [General game operations (UN)](../../receivers/un/#command-cbase-size-cbase-offset-size) · [Spell attributes (SS)](../../receivers/ss/) · [Bits, masks and hexadecimal](../bits/) · [Resources](../resources/) · [Hero structure fields](../hero-structure/)
