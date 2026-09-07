---
{"title":"Таблица объектов в игре","summary":"ID из стандартного набора WoG. Номер относится к этой таблице и не заменяет индекс другой сущности.","translationStatus":"reviewed"}
---

## Таблица типов объектов {#ref-form-objects}

:::erm
<section class="erm-reference" lang="ru">
<div>
<div class="erm-align-left erm-paragraph"><span class="erm-source-title">Таблица объектов в игре</span></div>

<div class="erm-paragraph"><span class="erm-anchor" id="ref-form-objects-wt"></span><code class="erm-legacy-label">Поиск объекта:</code><br>

<span class="erm-anchor" id="ref-form-objects-text-to-find"></span><input class="erm-table-search" data-erm-table-search="true" type="search" value="" aria-label="Введите номер (название) нужного объекта.." placeholder="Введите номер (название) нужного объекта..">

</div>
<div class="table-wrap erm-reference-table"><table width="100%">
	<span class="erm-anchor" id="ref-form-objects-n2"></span><tr class="erm-tone-purple erm-strong">
		<td width="5%">Номер</td>
		<td><span class="erm-anchor" id="ref-form-objects-step"></span><strong class="erm-indent">Описание</strong></td>
	</tr>
	<tr>
		<td>0</td>
		<td>Значок "Пусто"<br><small>Обычно можно встретить вместо картинки героя, если графика не найдена.</small></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">1</span></td>
		<td><span class="erm-tone-red">Пустышка</span></td>
	</tr>
	<tr>
		<td>2</td>
		<td>Жертвенный алтарь</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">3</span></td>
		<td><span class="erm-tone-red">Встать на якорь<br><small>Данный тип имеют все квадраты радом с водой, 
		на которые можно высадиться, подтип = -1. 
		Если квадрат имеет другой тип, на него высадиться нельзя.</small></span></td>
	</tr>
	<tr>
		<td>4</td>
		<td>Арена</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">5</span></td>
		<td><span class="erm-tone-red">Артефакт [0..170] – </span><a href="../artifacts/#ref-form-a1">таблица артефактов</a></td>
	</tr>
	<tr>
		<td>6</td>
		<td>Ящик Пандоры</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">7</span></td>
		<td><span class="erm-tone-red">Чёрный рынок</span></td>
	</tr>
	<tr>
		<td>8</td>
		<td>Лодка [подтип 0..2]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">9</span></td>
		<td><span class="erm-tone-red">Страж границы [0..7] – </span><a href="../border-colors/#ref-form-bg">таблица стражей</a></td>
	</tr>
	<tr>
		<td>10</td>
		<td>Палатка ключника [0..7] – <a href="../border-colors/#ref-form-bg">таблица палаток ключника</a></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">11</span></td>
		<td><span class="erm-tone-red">Буй</span></td>
	</tr>
	<tr>
		<td>12</td>
		<td>Костёр покинутого лагеря</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">13</span></td>
		<td><span class="erm-tone-red">Картограф [0 - водяной, 1 - наземный, 2 - подземный]</span></td>
	</tr>
	<tr>
		<td>14</td>
		<td>Лебединое озеро</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">15</span></td>
		<td><span class="erm-tone-red">Вуаль Тьмы</span></td>
	</tr>
	<tr>
		<td>16</td>
		<td><span class="erm-anchor" id="ref-form-objects-cb"></span>Банк Существ [0..20] – <a href="../creature-banks/#ref-form-cb">таблица банков</a></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">17</span></td>
		<td><span class="erm-tone-red">Генератор существ 1 [0..100] – </span><a href="../creature-dwellings/#ref-form-creaturedwellings">таблица жилищ</a></td>
	</tr>
	<tr>
		<td>18</td>
		<td>Генератор существ 2</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">19</span></td>
		<td><span class="erm-tone-red">Генератор существ 3</span></td>
	</tr>
	<tr>
		<td>20</td>
		<td><u>подтип 0</u> - Сопряжение Элементалей (все 4 существа);<br>
		<u>подтип 1</u> - Фабрика Големов (все 4 существа)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">21</span></td>
		<td><span class="erm-tone-red">Проклятая земля</span></td>
	</tr>
	<tr>
		<td>22</td>
		<td>Скелет</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">23</span></td>
		<td><span class="erm-tone-red">Башня Марлетто</span></td>
	</tr>
	<tr>
		<td>24</td>
		<td>Ветхий корабль</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">25</span></td>
		<td><span class="erm-tone-red">Утопия драконов</span></td>
	</tr>
	<tr>
		<td>26</td>
		<td>Событие</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">27</span></td>
		<td><span class="erm-tone-red">Глаз мага</span></td>
	</tr>
	<tr>
		<td>28</td>
		<td>Домик фей</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">29</span></td>
		<td><span class="erm-tone-red">Обломки</span></td>
	</tr>
	<tr>
		<td>30</td>
		<td>Фонтан удачи</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">31</span></td>
		<td><span class="erm-tone-red">Фонтан молодости</span></td>
	</tr>
	<tr>
		<td>32</td>
		<td>Сад откровения</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">33</span></td>
		<td><span class="erm-tone-red">Гарнизон [0 - обычный, 1 - антимагический]</span></td>
	</tr>
	<tr>
		<td>34</td>
		<td><span class="erm-anchor" id="ref-form-objects-he"></span>Герой [0..155] – <a href="../heroes/#ref-form-numberheroes">таблица героев</a></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">35</span></td>
		<td><span class="erm-tone-red">Форт на холме</span></td>
	</tr>
	<tr>
		<td>36</td>
		<td>Грааль</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">37</span></td>
		<td><span class="erm-tone-red">Хижина мага</span></td>
	</tr>
	<tr>
		<td>38</td>
		<td>Идол Удачи [0 - обычный, 1 - заснеженный]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">39</span></td>
		<td><span class="erm-tone-red">Навес</span></td>
	</tr>
	<tr>
		<td>40</td>
		<td>Декоративный объект [0 - снегопад, 1 - лавовая жижа, 2 - дождь]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">41</span></td>
		<td><span class="erm-tone-red">Библиотека Просвящения [0 - стандартная, 1 - заснеженная]</span></td>
	</tr>
	<tr>
		<td>42</td>
		<td>Маяк [-1, 0..7 – по <a href="../players/#ref-form-gamerscolor">цвету игрока</a>]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">43</span></td>
		<td><span class="erm-tone-red">Монолит входа [0..7] – </span><a href="../one-way-monoliths/#ref-form-one-way-monolith">таблица монолитов</a></td>
	</tr>
	<tr>
		<td>44</td>
		<td>Монолит выхода [0..7] – <a href="../one-way-monoliths/#ref-form-one-way-monolith">таблица монолитов</a></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">45</span></td>
		<td><span class="erm-tone-red">Двухсторонний монолит [0..7] – </span><a href="../two-way-monoliths/#ref-form-two-way-monolith">таблица монолитов</a></td>
	</tr>
	<tr>
		<td>46</td>
		<td>Магические равнины</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">47</span></td>
		<td><span class="erm-tone-red">Школа магии</span></td>
	</tr>
	<tr>
		<td>48</td>
		<td>Магический источник</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">49</span></td>
		<td><span class="erm-tone-red">Магический колодец [0 - обычный, 1 - украшенный]</span></td>
	</tr>
	<tr>
		<td>50</td>
		<td>Пустышка</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">51</span></td>
		<td><span class="erm-tone-red">Лагерь наёмников</span></td>
	</tr>
	<tr>
		<td>52</td>
		<td>Русалки</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">53</span></td>
		<td><span class="erm-tone-red">Шахта [0..7] – </span><a href="../mines/#ref-form-mines">таблица шахт</a></td>
	</tr>
	<tr>
		<td>54</td>
		<td><span class="erm-anchor" id="ref-form-objects-cr"></span>Монстр [0..196] – <a href="../creatures/#ref-form-creature">таблица монстров</a></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">55</span></td>
		<td><span class="erm-tone-red">Мистический сад</span></td>
	</tr>
	<tr>
		<td>56</td>
		<td>Оазис</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">57</span></td>
		<td><span class="erm-tone-red">Обелиск</span></td>
	</tr>
	<tr>
		<td>58</td>
		<td>Обсерватория красного дерева</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">59</span></td>
		<td><span class="erm-tone-red">Океанская бутыль</span></td>
	</tr>
	<tr>
		<td>60</td>
		<td>Огненный столп</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">61</span></td>
		<td><span class="erm-tone-red">Звёздное колесо</span></td>
	</tr>
	<tr>
		<td>62</td>
		<td>Тюрьма</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">63</span></td>
		<td><span class="erm-anchor" id="ref-form-objects-pir"></span><span class="erm-tone-red">Пирамида [0..74] – </span><a href="../wog-object-variants/#ref-form-newobj">таблица объектов WoG</a></td>
	</tr>
	<tr>
		<td>64</td>
		<td>Флаг единства</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">65</span></td>
		<td><span class="erm-tone-red">Случайный артефакт</span></td>
	</tr>
	<tr>
		<td>66</td>
		<td>Случайный артефакт сокровище</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">67</span></td>
		<td><span class="erm-tone-red">Случайный малый артефакт</span></td>
	</tr>
	<tr>
		<td>68</td>
		<td>Случайный большой артефакт</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">69</span></td>
		<td><span class="erm-tone-red">Случайная реликвия</span></td>
	</tr>
	<tr>
		<td>70</td>
		<td>Случайный герой</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">71</span></td>
		<td><span class="erm-tone-red">Случайный монстр</span></td>
	</tr>
	<tr>
		<td>72</td>
		<td>Случайный монстр 1</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">73</span></td>
		<td><span class="erm-tone-red">Случайный монстр 2</span></td>
	</tr>
	<tr>
		<td>74</td>
		<td>Случайный монстр 3</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">75</span></td>
		<td><span class="erm-tone-red">Случайный монстр 4</span></td>
	</tr>
	<tr>
		<td>76</td>
		<td>Случайный ресурс</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">77</span></td>
		<td><span class="erm-tone-red">Случайный город</span></td>
	</tr>
	<tr>
		<td>78</td>
		<td>Лагерь беженцев</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">79</span></td>
		<td><span class="erm-tone-red">Ресурс [0..7] – </span><a href="../resources/#ref-form-resource">таблица ресурсов</a></td>
	</tr>
	<tr>
		<td>80</td>
		<td>Святилище</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">81</span></td>
		<td><span class="erm-tone-red">Учёный</span></td>
	</tr>
	<tr>
		<td>82</td>
		<td>Морской сундук</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">83</span></td>
		<td><span class="erm-anchor" id="ref-form-objects-t83"></span><span class="erm-tone-red">Хижина провидца [0 - соломенная хижина, 1 - грибная, 2 - древоподобная]</span></td>
	</tr>
	<tr>
		<td>84</td>
		<td>Склеп [0 - заснеженный]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">85</span></td>
		<td><span class="erm-tone-red">Кораблекрушение</span></td>
	</tr>
	<tr>
		<td>86</td>
		<td>Потерпевший кораблекрушение</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">87</span></td>
		<td><span class="erm-tone-red">Верфь [-1, 0..7 – по
		<a href="../players/#ref-form-gamerscolor">цвету игрока</a>]</span></td>
	</tr>
	<tr>
		<td>88</td>
		<td>Святыня магического воплощения</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">89</span></td>
		<td><span class="erm-tone-red">Святыня магического жеста</span></td>
	</tr>
	<tr>
		<td>90</td>
		<td>Святыня магической мысли</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">91</span></td>
		<td><span class="erm-tone-red">Знак</span></td>
	</tr>
	<tr>
		<td>92</td>
		<td>Сирены</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">93</span></td>
		<td><span class="erm-tone-red">Свиток с заклинанием [0..69] – </span><a href="../spells/#ref-form-spell">таблица заклинаний</a></td>
	</tr>
	<tr>
		<td>94</td>
		<td>Конюшня</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">95</span></td>
		<td><span class="erm-tone-red">Таверна [0 - обычная, 1 - заснеженная]</span></td>
	</tr>
	<tr>
		<td>96</td>
		<td>Храм</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">97</span></td>
		<td><span class="erm-tone-red">Гильдия воров</span></td>
	</tr>
	<tr>
		<td>98</td>
		<td>Город [0..8] – <a href="../towns/#ref-form-towns">таблица городов</a></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">99</span></td>
		<td><span class="erm-tone-red">Рынок</span></td>
	</tr>
	<tr>
		<td>100</td>
		<td>Камень знаний [0 - стандартный, 1 - заснеженный]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">101</span></td>
		<td><span class="erm-tone-red">Сундук с сокровищами [см. <a href="../../receivers/un/#ref-rec-un-b">!!UN:B</a>]</span></td>
	</tr>
	<tr>
		<td>102</td>
		<td>Древо знаний [0 - обычное, 1 - заснеженное]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">103</span></td>
		<td><span class="erm-tone-red">Врата подземного мира [0 - обычные, 1 - заснеженные]</span></td>
	</tr>
	<tr>
		<td>104</td>
		<td>Университет</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">105</span></td>
		<td><span class="erm-tone-red">Телега</span></td>
	</tr>
	<tr>
		<td>106</td>
		<td>Фабрика военной техники</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">107</span></td>
		<td><span class="erm-tone-red">Школа войны</span></td>
	</tr>
	<tr>
		<td>108</td>
		<td>Гробница воина</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">109</span></td>
		<td><span class="erm-tone-red">Водяная мельница</span></td>
	</tr>
	<tr>
		<td>110</td>
		<td>Водоём</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">111</span></td>
		<td><span class="erm-tone-red">Водоворот</span></td>
	</tr>
	<tr>
		<td>112</td>
		<td>Ветряная мельница</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">113</span></td>
		<td><span class="erm-tone-red">Хижина ведьмы [0..27] – </span><a href="../secondary-skills/#ref-form-secondaryskill">таблица вторич.навыков</a></td>
	</tr>
	<tr>
		<td>114</td>
		<td>Щетка</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">115</span></td>
		<td><span class="erm-tone-red">Куст</span></td>
	</tr>
	<tr>
		<td>116</td>
		<td>Кактус</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">117</span></td>
		<td><span class="erm-tone-red">Каньон </span> </td>
	</tr>
	<tr>
		<td>118</td>
		<td>Кратер</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">119</span></td>
		<td><span class="erm-tone-red">Мёртвая растительность</span></td>
	</tr>
	<tr>
		<td>120</td>
		<td>Цветы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">121</span></td>
		<td><span class="erm-tone-red">Замёрзшее озеро</span></td>
	</tr>
	<tr>
		<td>122</td>
		<td>Изгородь</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">123</span></td>
		<td><span class="erm-tone-red">Холм</span></td>
	</tr>
	<tr>
		<td>124</td>
		<td>Нора</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">125</span></td>
		<td><span class="erm-tone-red">Водоросль</span></td>
	</tr>
	<tr>
		<td>126</td>
		<td>Озеро</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">127</span></td>
		<td><span class="erm-tone-red">Поток лавы</span></td>
	</tr>
	<tr>
		<td>128</td>
		<td>Озеро лавы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">129</span></td>
		<td><span class="erm-tone-red">Гриб</span></td>
	</tr>
	<tr>
		<td>130</td>
		<td>Бревно</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">131</span></td>
		<td><span class="erm-tone-red">Мандрагора</span></td>
	</tr>
	<tr>
		<td>132</td>
		<td>Мох</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">133</span></td>
		<td><span class="erm-tone-red">Курган</span></td>
	</tr>
	<tr>
		<td>134</td>
		<td>Гора</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">135</span></td>
		<td><span class="erm-tone-red">Дуб</span></td>
	</tr>
	<tr>
		<td>136</td>
		<td>Пласт породы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">137</span></td>
		<td><span class="erm-tone-red">Сосна</span></td>
	</tr>
	<tr>
		<td>138</td>
		<td>Растение</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">143</span></td>
		<td><span class="erm-tone-red">Дельта реки</span></td>
	</tr>
	<tr>
		<td>147</td>
		<td>Камни</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">148</span></td>
		<td><span class="erm-tone-red">Песчаная дюна</span></td>
	</tr>
	<tr>
		<td>149</td>
		<td>Песчаная яма</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">150</span></td>
		<td><span class="erm-tone-red">Куст</span></td>
	</tr>
	<tr>
		<td>151</td>
		<td>Череп</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">152</span></td>
		<td><span class="erm-tone-red">Сталагмит</span></td>
	</tr>
	<tr>
		<td>153</td>
		<td>Пень</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">154</span></td>
		<td><span class="erm-tone-red">Смоляная шахта</span></td>
	</tr>
	<tr>
		<td>155</td>
		<td>Деревья</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">156</span></td>
		<td><span class="erm-tone-red">Виноград</span></td>
	</tr>
	<tr>
		<td>157</td>
		<td>Жерло вулкана</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">158</span></td>
		<td><span class="erm-tone-red">Вулкан</span></td>
	</tr>
	<tr>
		<td>159</td>
		<td>Ива</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">160</span></td>
		<td><span class="erm-tone-red">Юкка</span></td>
	</tr>
	<tr>
		<td>161</td>
		<td>Риф</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">162</span></td>
		<td><span class="erm-tone-red">Случайный монстр 5</span></td>
	</tr>
	<tr>
		<td>163</td>
		<td>Случайный монстр 6</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">164</span></td>
		<td><span class="erm-tone-red">Случайный монстр 7</span></td>
	</tr>
	<tr>
		<td>165</td>
		<td>Щётка</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">166</span></td>
		<td><span class="erm-tone-red">Куст</span></td>
	</tr>
	<tr>
		<td>167</td>
		<td>Кактус</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">168</span></td>
		<td><span class="erm-tone-red">Каньон</span></td>
	</tr>
	<tr>
		<td>169</td>
		<td>Кратер</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">170</span></td>
		<td><span class="erm-tone-red">Мёртвая растительность</span></td>
	</tr>
	<tr>
		<td>171</td>
		<td>Цветы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">172</span></td>
		<td><span class="erm-tone-red">Замёрзшее озеро</span></td>
	</tr>
	<tr>
		<td>173</td>
		<td>Ограда</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">174</span></td>
		<td><span class="erm-tone-red">Холм</span></td>
	</tr>
	<tr>
		<td>175</td>
		<td>Дыра</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">176</span></td>
		<td><span class="erm-tone-red">Бурая водоросль</span></td>
	</tr>
	<tr>
		<td>177</td>
		<td>Озеро</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">178</span></td>
		<td><span class="erm-tone-red">Поток лавы</span></td>
	</tr>
	<tr>
		<td>179</td>
		<td>Озеро лавы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">180</span></td>
		<td><span class="erm-tone-red">Грибы</span></td>
	</tr>
	<tr>
		<td>181</td>
		<td>Бревно</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">182</span></td>
		<td><span class="erm-tone-red">Мандрагора</span></td>
	</tr>
	<tr>
		<td>183</td>
		<td>Мох</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">184</span></td>
		<td><span class="erm-tone-red">Курган</span></td>
	</tr>
	<tr>
		<td>185</td>
		<td>Гора</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">186</span></td>
		<td><span class="erm-tone-red">Дубовый лес</span></td>
	</tr>
	<tr>
		<td>187</td>
		<td>Горная порода</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">188</span></td>
		<td><span class="erm-tone-red">Сосновый лес</span></td>
	</tr>
	<tr>
		<td>189</td>
		<td>Растение</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">190</span></td>
		<td><span class="erm-tone-red">Дельта реки</span></td>
	</tr>
	<tr>
		<td>191</td>
		<td>Скала</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">192</span></td>
		<td><span class="erm-tone-red">Песчаные дюны</span></td>
	</tr>
	<tr>
		<td>193</td>
		<td>Песчаная впадина</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">194</span></td>
		<td><span class="erm-tone-red">Кустарник</span></td>
	</tr>
	<tr>
		<td>195</td>
		<td>Череп</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">196</span></td>
		<td><span class="erm-tone-red">Сталагмит</span></td>
	</tr>
	<tr>
		<td>197</td>
		<td>Пень</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">198</span></td>
		<td><span class="erm-tone-red">Смоляная яма</span></td>
	</tr>
	<tr>
		<td>199</td>
		<td>Деревья</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">200</span></td>
		<td><span class="erm-tone-red">Виноградная лоза</span></td>
	</tr>
	<tr>
		<td>201</td>
		<td>Вулканическое отверстие</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">202</span></td>
		<td><span class="erm-tone-red">Вулкан</span></td>
	</tr>
	<tr>
		<td>203</td>
		<td>Ивовый лес</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">204</span></td>
		<td><span class="erm-tone-red">Юкковый лес</span></td>
	</tr>
	<tr>
		<td>205</td>
		<td>Риф</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">206</span></td>
		<td><span class="erm-tone-red">Необитаемые холмы</span></td>
	</tr>
	<tr>
		<td>207</td>
		<td>Грязевые холмы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">208</span></td>
		<td><span class="erm-tone-red">Травяные холмы</span></td>
	</tr>
	<tr>
		<td>209</td>
		<td>Дикие холмы</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">210</span></td>
		<td><span class="erm-tone-red">Подземные скалы</span></td>
	</tr>
	<tr>
		<td>211</td>
		<td>Болотные листья</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">212</span></td>
		<td><span class="erm-tone-red">Пограничные ворота [<a href="../border-colors/#ref-form-bg">0..7</a>]</span></td>
	</tr>
	<tr>
		<td>213</td>
		<td>Гильдия наёмников</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">214</span></td>
		<td><span class="erm-tone-red">Лагерь героя</span></td>
	</tr>
	<tr>
		<td>215</td>
		<td>Страж прохода</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">216</span></td>
		<td><span class="erm-tone-red">Случайное жилище</span></td>
	</tr>
	<tr>
		<td>217</td>
		<td>Жилище существ фиксированного уровня (подтип 0..6)</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">218</span></td>
		<td><span class="erm-tone-red">Жилище существ, привязанное к городу (подтип 
		 <a href="../towns/#ref-form-towns">0..8</a>)</span></td>
	</tr>
	<tr>
		<td>219</td>
		<td>Гарнизон (перпендикулярный).<br><small>Объект гарнизоном не является, и замещается игрой при загрузке карты.</small></td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">220</span></td>
		<td><span class="erm-tone-red">Рудник</span></td>
	</tr>
	<tr>
		<td>221</td>
		<td>Торговый пост [0 - заснеженный рынок]</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">222</span></td>
		<td><span class="erm-tone-red">Клеверное поле</span></td>
	</tr>
	<tr>
		<td>223</td>
		<td>Проклятая земля</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">224</span></td>
		<td><span class="erm-tone-red">Дьявольский туман</span></td>
	</tr>
	<tr>
		<td>225</td>
		<td>Попутный ветер</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">226</span></td>
		<td><span class="erm-tone-red">Огненные поля</span></td>
	</tr>
	<tr>
		<td>227</td>
		<td>Святая земля</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">228</span></td>
		<td><span class="erm-tone-red">Прозрачные пруды</span></td>
	</tr>
	<tr>
		<td>229</td>
		<td>Магические облака</td>
	</tr>
	<tr>
		<td><span class="erm-tone-red">230</span></td>
		<td><span class="erm-tone-red">Магические равнины</span></td>
	</tr>
	<tr>
		<td>231</td>
		<td>Скалистая земля</td>
	</tr>
</table></div>
</div>
</section>
:::

## Назначение {#meaning}

ID из стандартного набора WoG. Номер относится к этой таблице и не заменяет индекс другой сущности.

## Номера и HEX-нумерация {#values}

| Номер | HEX | Название |
| --- | --- | --- |
| `0` {#id-0} | `0` | Значок "Пусто" Обычно можно встретить вместо картинки героя, если графика не найдена. |
| `1` {#id-1} | `1` | Пустышка |
| `2` {#id-2} | `2` | Жертвенный алтарь |
| `3` {#id-3} | `3` | Встать на якорь Данный тип имеют все квадраты радом с водой, на которые можно высадиться, подтип = -1. Если квадрат имеет другой тип, на него высадиться нельзя. |
| `4` {#id-4} | `4` | Арена |
| `5` {#id-5} | `5` | [Артефакт [0..170] – таблица артефактов](../artifacts/) |
| `6` {#id-6} | `6` | Ящик Пандоры |
| `7` {#id-7} | `7` | Чёрный рынок |
| `8` {#id-8} | `8` | Лодка [подтип 0..2] |
| `9` {#id-9} | `9` | [Страж границы [0..7] – таблица стражей](../border-colors/) |
| `10` {#id-10} | `A` | [Палатка ключника [0..7] – таблица палаток ключника](../border-colors/) |
| `11` {#id-11} | `B` | Буй |
| `12` {#id-12} | `C` | Костёр покинутого лагеря |
| `13` {#id-13} | `D` | Картограф [0 - водяной, 1 - наземный, 2 - подземный] |
| `14` {#id-14} | `E` | Лебединое озеро |
| `15` {#id-15} | `F` | Вуаль Тьмы |
| `16` {#id-16} | `10` | Банк Существ [0..20] – таблица банков |
| `17` {#id-17} | `11` | Генератор существ 1 [0..100] – таблица жилищ |
| `18` {#id-18} | `12` | Генератор существ 2 |
| `19` {#id-19} | `13` | Генератор существ 3 |
| `20` {#id-20} | `14` | подтип 0 - Сопряжение Элементалей (все 4 существа); подтип 1 - Фабрика Големов (все 4 существа) |
| `21` {#id-21} | `15` | Проклятая земля |
| `22` {#id-22} | `16` | Скелет |
| `23` {#id-23} | `17` | Башня Марлетто |
| `24` {#id-24} | `18` | Ветхий корабль |
| `25` {#id-25} | `19` | Утопия драконов |
| `26` {#id-26} | `1A` | Событие |
| `27` {#id-27} | `1B` | Глаз мага |
| `28` {#id-28} | `1C` | Домик фей |
| `29` {#id-29} | `1D` | Обломки |
| `30` {#id-30} | `1E` | Фонтан удачи |
| `31` {#id-31} | `1F` | Фонтан молодости |
| `32` {#id-32} | `20` | Сад откровения |
| `33` {#id-33} | `21` | Гарнизон [0 - обычный, 1 - антимагический] |
| `34` {#id-34} | `22` | [Герой [0..155] – таблица героев](../heroes/) |
| `35` {#id-35} | `23` | Форт на холме |
| `36` {#id-36} | `24` | Грааль |
| `37` {#id-37} | `25` | Хижина мага |
| `38` {#id-38} | `26` | Идол Удачи [0 - обычный, 1 - заснеженный] |
| `39` {#id-39} | `27` | Навес |
| `40` {#id-40} | `28` | Декоративный объект [0 - снегопад, 1 - лавовая жижа, 2 - дождь] |
| `41` {#id-41} | `29` | Библиотека Просвящения [0 - стандартная, 1 - заснеженная] |
| `42` {#id-42} | `2A` | Маяк [-1, 0..7 – по цвету игрока] |
| `43` {#id-43} | `2B` | Монолит входа [0..7] – таблица монолитов |
| `44` {#id-44} | `2C` | Монолит выхода [0..7] – таблица монолитов |
| `45` {#id-45} | `2D` | Двухсторонний монолит [0..7] – таблица монолитов |
| `46` {#id-46} | `2E` | Магические равнины |
| `47` {#id-47} | `2F` | Школа магии |
| `48` {#id-48} | `30` | Магический источник |
| `49` {#id-49} | `31` | Магический колодец [0 - обычный, 1 - украшенный] |
| `50` {#id-50} | `32` | Пустышка |
| `51` {#id-51} | `33` | Лагерь наёмников |
| `52` {#id-52} | `34` | Русалки |
| `53` {#id-53} | `35` | Шахта [0..7] – таблица шахт |
| `54` {#id-54} | `36` | [Монстр [0..196] – таблица монстров](../creatures/) |
| `55` {#id-55} | `37` | Мистический сад |
| `56` {#id-56} | `38` | Оазис |
| `57` {#id-57} | `39` | Обелиск |
| `58` {#id-58} | `3A` | Обсерватория красного дерева |
| `59` {#id-59} | `3B` | Океанская бутыль |
| `60` {#id-60} | `3C` | Огненный столп |
| `61` {#id-61} | `3D` | Звёздное колесо |
| `62` {#id-62} | `3E` | Тюрьма |
| `63` {#id-63} | `3F` | Пирамида [0..74] – таблица объектов WoG |
| `64` {#id-64} | `40` | Флаг единства |
| `65` {#id-65} | `41` | Случайный артефакт |
| `66` {#id-66} | `42` | Случайный артефакт сокровище |
| `67` {#id-67} | `43` | Случайный малый артефакт |
| `68` {#id-68} | `44` | Случайный большой артефакт |
| `69` {#id-69} | `45` | Случайная реликвия |
| `70` {#id-70} | `46` | Случайный герой |
| `71` {#id-71} | `47` | Случайный монстр |
| `72` {#id-72} | `48` | Случайный монстр 1 |
| `73` {#id-73} | `49` | Случайный монстр 2 |
| `74` {#id-74} | `4A` | Случайный монстр 3 |
| `75` {#id-75} | `4B` | Случайный монстр 4 |
| `76` {#id-76} | `4C` | Случайный ресурс |
| `77` {#id-77} | `4D` | Случайный город |
| `78` {#id-78} | `4E` | Лагерь беженцев |
| `79` {#id-79} | `4F` | [Ресурс [0..7] – таблица ресурсов](../resources/) |
| `80` {#id-80} | `50` | Святилище |
| `81` {#id-81} | `51` | Учёный |
| `82` {#id-82} | `52` | Морской сундук |
| `83` {#id-83} | `53` | Хижина провидца [0 - соломенная хижина, 1 - грибная, 2 - древоподобная] |
| `84` {#id-84} | `54` | Склеп [0 - заснеженный] |
| `85` {#id-85} | `55` | Кораблекрушение |
| `86` {#id-86} | `56` | Потерпевший кораблекрушение |
| `87` {#id-87} | `57` | Верфь [-1, 0..7 – по цвету игрока] |
| `88` {#id-88} | `58` | Святыня магического воплощения |
| `89` {#id-89} | `59` | Святыня магического жеста |
| `90` {#id-90} | `5A` | Святыня магической мысли |
| `91` {#id-91} | `5B` | Знак |
| `92` {#id-92} | `5C` | Сирены |
| `93` {#id-93} | `5D` | [Свиток с заклинанием [0..69] – таблица заклинаний](../spells/) |
| `94` {#id-94} | `5E` | Конюшня |
| `95` {#id-95} | `5F` | Таверна [0 - обычная, 1 - заснеженная] |
| `96` {#id-96} | `60` | Храм |
| `97` {#id-97} | `61` | Гильдия воров |
| `98` {#id-98} | `62` | [Город [0..8] – таблица городов](../towns/) |
| `99` {#id-99} | `63` | Рынок |
| `100` {#id-100} | `64` | Камень знаний [0 - стандартный, 1 - заснеженный] |
| `101` {#id-101} | `65` | Сундук с сокровищами [см. !!UN:B] |
| `102` {#id-102} | `66` | Древо знаний [0 - обычное, 1 - заснеженное] |
| `103` {#id-103} | `67` | Врата подземного мира [0 - обычные, 1 - заснеженные] |
| `104` {#id-104} | `68` | Университет |
| `105` {#id-105} | `69` | Телега |
| `106` {#id-106} | `6A` | Фабрика военной техники |
| `107` {#id-107} | `6B` | Школа войны |
| `108` {#id-108} | `6C` | Гробница воина |
| `109` {#id-109} | `6D` | Водяная мельница |
| `110` {#id-110} | `6E` | Водоём |
| `111` {#id-111} | `6F` | Водоворот |
| `112` {#id-112} | `70` | Ветряная мельница |
| `113` {#id-113} | `71` | [Хижина ведьмы [0..27] – таблица вторич.навыков](../secondary-skills/) |
| `114` {#id-114} | `72` | Щетка |
| `115` {#id-115} | `73` | Куст |
| `116` {#id-116} | `74` | Кактус |
| `117` {#id-117} | `75` | Каньон |
| `118` {#id-118} | `76` | Кратер |
| `119` {#id-119} | `77` | Мёртвая растительность |
| `120` {#id-120} | `78` | Цветы |
| `121` {#id-121} | `79` | Замёрзшее озеро |
| `122` {#id-122} | `7A` | Изгородь |
| `123` {#id-123} | `7B` | Холм |
| `124` {#id-124} | `7C` | Нора |
| `125` {#id-125} | `7D` | Водоросль |
| `126` {#id-126} | `7E` | Озеро |
| `127` {#id-127} | `7F` | Поток лавы |
| `128` {#id-128} | `80` | Озеро лавы |
| `129` {#id-129} | `81` | Гриб |
| `130` {#id-130} | `82` | Бревно |
| `131` {#id-131} | `83` | Мандрагора |
| `132` {#id-132} | `84` | Мох |
| `133` {#id-133} | `85` | Курган |
| `134` {#id-134} | `86` | Гора |
| `135` {#id-135} | `87` | Дуб |
| `136` {#id-136} | `88` | Пласт породы |
| `137` {#id-137} | `89` | Сосна |
| `138` {#id-138} | `8A` | Растение |
| `143` {#id-143} | `8F` | Дельта реки |
| `147` {#id-147} | `93` | Камни |
| `148` {#id-148} | `94` | Песчаная дюна |
| `149` {#id-149} | `95` | Песчаная яма |
| `150` {#id-150} | `96` | Куст |
| `151` {#id-151} | `97` | Череп |
| `152` {#id-152} | `98` | Сталагмит |
| `153` {#id-153} | `99` | Пень |
| `154` {#id-154} | `9A` | Смоляная шахта |
| `155` {#id-155} | `9B` | Деревья |
| `156` {#id-156} | `9C` | Виноград |
| `157` {#id-157} | `9D` | Жерло вулкана |
| `158` {#id-158} | `9E` | Вулкан |
| `159` {#id-159} | `9F` | Ива |
| `160` {#id-160} | `A0` | Юкка |
| `161` {#id-161} | `A1` | Риф |
| `162` {#id-162} | `A2` | Случайный монстр 5 |
| `163` {#id-163} | `A3` | Случайный монстр 6 |
| `164` {#id-164} | `A4` | Случайный монстр 7 |
| `165` {#id-165} | `A5` | Щётка |
| `166` {#id-166} | `A6` | Куст |
| `167` {#id-167} | `A7` | Кактус |
| `168` {#id-168} | `A8` | Каньон |
| `169` {#id-169} | `A9` | Кратер |
| `170` {#id-170} | `AA` | Мёртвая растительность |
| `171` {#id-171} | `AB` | Цветы |
| `172` {#id-172} | `AC` | Замёрзшее озеро |
| `173` {#id-173} | `AD` | Ограда |
| `174` {#id-174} | `AE` | Холм |
| `175` {#id-175} | `AF` | Дыра |
| `176` {#id-176} | `B0` | Бурая водоросль |
| `177` {#id-177} | `B1` | Озеро |
| `178` {#id-178} | `B2` | Поток лавы |
| `179` {#id-179} | `B3` | Озеро лавы |
| `180` {#id-180} | `B4` | Грибы |
| `181` {#id-181} | `B5` | Бревно |
| `182` {#id-182} | `B6` | Мандрагора |
| `183` {#id-183} | `B7` | Мох |
| `184` {#id-184} | `B8` | Курган |
| `185` {#id-185} | `B9` | Гора |
| `186` {#id-186} | `BA` | Дубовый лес |
| `187` {#id-187} | `BB` | Горная порода |
| `188` {#id-188} | `BC` | Сосновый лес |
| `189` {#id-189} | `BD` | Растение |
| `190` {#id-190} | `BE` | Дельта реки |
| `191` {#id-191} | `BF` | Скала |
| `192` {#id-192} | `C0` | Песчаные дюны |
| `193` {#id-193} | `C1` | Песчаная впадина |
| `194` {#id-194} | `C2` | Кустарник |
| `195` {#id-195} | `C3` | Череп |
| `196` {#id-196} | `C4` | Сталагмит |
| `197` {#id-197} | `C5` | Пень |
| `198` {#id-198} | `C6` | Смоляная яма |
| `199` {#id-199} | `C7` | Деревья |
| `200` {#id-200} | `C8` | Виноградная лоза |
| `201` {#id-201} | `C9` | Вулканическое отверстие |
| `202` {#id-202} | `CA` | Вулкан |
| `203` {#id-203} | `CB` | Ивовый лес |
| `204` {#id-204} | `CC` | Юкковый лес |
| `205` {#id-205} | `CD` | Риф |
| `206` {#id-206} | `CE` | Необитаемые холмы |
| `207` {#id-207} | `CF` | Грязевые холмы |
| `208` {#id-208} | `D0` | Травяные холмы |
| `209` {#id-209} | `D1` | Дикие холмы |
| `210` {#id-210} | `D2` | Подземные скалы |
| `211` {#id-211} | `D3` | Болотные листья |
| `212` {#id-212} | `D4` | [Пограничные ворота [0..7]](../border-colors/) |
| `213` {#id-213} | `D5` | Гильдия наёмников |
| `214` {#id-214} | `D6` | Лагерь героя |
| `215` {#id-215} | `D7` | Страж прохода |
| `216` {#id-216} | `D8` | Случайное жилище |
| `217` {#id-217} | `D9` | Жилище существ фиксированного уровня (подтип 0..6) |
| `218` {#id-218} | `DA` | Жилище существ, привязанное к городу (подтип 0..8) |
| `219` {#id-219} | `DB` | Гарнизон (перпендикулярный). Объект гарнизоном не является, и замещается игрой при загрузке карты. |
| `220` {#id-220} | `DC` | Рудник |
| `221` {#id-221} | `DD` | Торговый пост [0 - заснеженный рынок] |
| `222` {#id-222} | `DE` | Клеверное поле |
| `223` {#id-223} | `DF` | Проклятая земля |
| `224` {#id-224} | `E0` | Дьявольский туман |
| `225` {#id-225} | `E1` | Попутный ветер |
| `226` {#id-226} | `E2` | Огненные поля |
| `227` {#id-227} | `E3` | Святая земля |
| `228` {#id-228} | `E4` | Прозрачные пруды |
| `229` {#id-229} | `E5` | Магические облака |
| `230` {#id-230} | `E6` | Магические равнины |
| `231` {#id-231} | `E7` | Скалистая земля |

## Область применения {#scope}

HEX — шестнадцатеричное представление того же номера, не другой ID. В модах с расширением набора проверяйте актуальный предел. Названия исходного русского перевода могут отличаться от локализации вашей игры; технический номер сохраняется.

## Связанные таблицы {#related}

[Все таблицы](../) · [Константы Framework](../../framework/constants/)

## Связанные команды и таблицы {#reference-links}

[Таблица артефактов](../artifacts/) · [Цвета палаток и границ](../border-colors/) · [Хранилища существ](../creature-banks/) · [Жилища существ на карте](../creature-dwellings/) · [Таблица героев](../heroes/) · [Цвета игроков](../players/) · [Односторонние монолиты](../one-way-monoliths/) · [Двусторонние монолиты](../two-way-monoliths/) · [Типы шахт](../mines/) · [Таблица существ](../creatures/) · [Варианты объектов WoG](../wog-object-variants/) · [Ресурсы](../resources/) · [Таблица заклинаний](../spells/) · [Типы городов](../towns/) · [Общие игровые операции (UN)](../../receivers/un/#command-b) · [Вторичные навыки](../secondary-skills/)
