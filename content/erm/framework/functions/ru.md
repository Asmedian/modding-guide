---
{"title":"Функции Framework","summary":"Полный каталог 185 функций и обработчиков с контрактами и ограничениями.","translationStatus":"reviewed"}
---

## Как читать справочник {#contract}

Все 185 объявлений функций разобраны по полному телу из двух stdlib. Обработчики событий и завершения перечислены отдельно от вызываемых функций. `requires-review` означает конкретное расхождение или риск в снимке, описанный на странице. Параметры с выходом передавайте через `?`; временные строки и массивы не сохраняйте как адреса между событиями.

## Служебные функции {#internal}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [ClearEventChainData](./cleareventchaindata/) | internal | Очищает служебный стек контекста событий и сбрасывает его позицию. Вызывается при чтении сохранения. |
| [SaveEventData](./saveeventdata/) | internal | Сохраняет переданные целые аргументы в стеке события. RestoreEventData должен получить такое же число выходных аргументов в том же порядке. Вызов без аргументов выходит до RestoreErmTracking. |
| [RestoreEventData](./restoreeventdata/) | internal | Восстанавливает целые значения в переданные через ? аргументы. Проверка savedNumArgs в снимке отсутствует: вместо неё повторена проверка размера буфера. Несовпадение пар сохранения/восстановления недопустимо. |
| [SavePrevKeyModsState](./saveprevkeymodsstate/) | internal | Сохраняет 11 глобальных значений клавиши и модификаторов для вложенного события. |
| [RestorePrevKeyModsState](./restoreprevkeymodsstate/) | internal | Восстанавливает клавишу и модификаторы после вложенного события. |
| [GetKeyModsState](./getkeymodsstate/) | internal | Опрашивает левые и правые Alt, Ctrl, Shift через GetKeyState и обновляет key_*; объединённый флаг равен OR двух сторон. |
| [CollectMouseEventData](./collectmouseeventdata/) | internal | Читает CM в глобальные mouse_* и dlg_action. Действие кнопки выхода нормализуется в обычное отпускание ЛКМ; клавиатурное событие DL записывает код в key. |
| [SavePrevMouseEventData](./saveprevmouseeventdata/) | internal | Сохраняет/восстанавливает десять mouse_* значений. mouse_hero_1 и dlg_action в эту пару не включены; нельзя считать весь контекст автоматически восстановленным. |
| [RestorePrevMouseEventData](./restoreprevmouseeventdata/) | internal | Сохраняет/восстанавливает десять mouse_* значений. mouse_hero_1 и dlg_action в эту пару не включены; нельзя считать весь контекст автоматически восстановленным. |
| [EnterMouseEvent](./entermouseevent/) | internal | Сохраняет прежний контекст клавиатуры и мыши, затем читает модификаторы и CM нового события. |
| [LeaveMouseEvent](./leavemouseevent/) | internal | Восстанавливает контекст мыши, затем клавиатуры; вызывается завершающими обработчиками. |
| [CompareStrings_Bridge_INTERNAL](./comparestrings-bridge-internal/) | internal | Мост строкового компаратора: преобразует адреса в ERM-строки и вызывает пользовательский callback со state и выходным результатом. Нулевой адрес трактует как пустую строку. |

## Обработчики событий {#events}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [OnSavegameRead](./onsavegameread/) | event-handler | Очищает служебное состояние цепочек после чтения сохранения. |
| [OnKeyPressed](./onkeypressed/) | event-handler | Сохраняет контекст клавиатуры, обновляет key и модификаторы. KeyPressed дополнительно записывает isDown; завершающий обработчик восстанавливает прежнее состояние. |
| [OnKeyReleased](./onkeyreleased/) | event-handler | Сохраняет контекст клавиатуры, обновляет key и модификаторы. KeyPressed дополнительно записывает isDown; завершающий обработчик восстанавливает прежнее состояние. |
| [OnAdventureMapRightMouseClick](./onadventuremaprightmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnTownMouseClick](./ontownmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnHeroScreenMouseClick](./onheroscreenmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnHeroesMeetScreenMouseClick](./onheroesmeetscreenmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnBattleScreenMouseClick](./onbattlescreenmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnAdventureMapLeftMouseClick](./onadventuremapleftmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnRecruitDlgMouseClick](./onrecruitdlgmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnTownHallMouseClick](./ontownhallmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnKingdomOverviewMouseClick](./onkingdomoverviewmouseclick/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnBattleMouseHint](./onbattlemousehint/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnTownMouseHint](./ontownmousehint/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnCustomDialogEvent](./oncustomdialogevent/) | event-handler | Подготавливает контекст мыши через EnterMouseEvent. Данные доступны в mouse_*; OnCustomDialogEvent дополнительно сохраняет dlg_id. |
| [OnAfterErmInstructions](./onaftererminstructions/) | event-handler | Создаёт ежедневный таймер Framework и сбрасывает учёт обработанного дня. |
| [OnEveryDay](./oneveryday/) | event-handler | Дополняет событие аргументами day, weekDay (1..7), once, owner, isAi. once=TRUE только при первом вызове за день, а не для каждого игрока. |
| [OnBeforeBattle](./onbeforebattle/) | event-handler | Сбрасывает battle_round в INT_MIN перед настоящим боем. |
| [OnBeforeBattleUniversal](./onbeforebattleuniversal/) | event-handler | Обновляет battle_* и сбрасывает текущий/действующий стек. Возможен теоретический расчёт ИИ без менеджера боя. |
| [OnSetupBattlefield](./onsetupbattlefield/) | event-handler | Перечитывает battle_* при подготовке поля. |
| [OnBattleRound](./onbattleround/) | event-handler | Обновляет battle_round из текущего контекста раунда. |
| [OnBeforeBattleStackTurn](./onbeforebattlestackturn/) | event-handler | Записывает activeStack в battle_current_stack. |
| [OnBattleStackObtainsTurn](./onbattlestackobtainsturn/) | event-handler | Переводит side/index в глобальный ID стека, учитывает гипноз при определении текущей стороны. |
| [OnBeforeBattleAction](./onbeforebattleaction/) | event-handler | Читает BG:N/Q в battle_acting_stack/side и обновляет флаги видимого/быстрого боя. |
| [OnStartOrLoad](./onstartorload/) | event-handler | Обновляет maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. Имя maxArtifacId в исходнике без второй t. |
| [OnBattleReplay](./onbattlereplay/) | event-handler | Сбрасывает раунд и действующий стек, перечитывает параметры боя для переигровки. |
| [OnAfterErmInstructions_Quit](./onaftererminstructions-quit/) | quit-handler | Завершающий обработчик OnAfterErmInstructions: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnAfterLoadGame_Quit](./onafterloadgame-quit/) | quit-handler | Завершающий обработчик OnAfterLoadGame: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnKeyPressed_Quit](./onkeypressed-quit/) | quit-handler | Завершающий обработчик OnKeyPressed: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnKeyReleased_Quit](./onkeyreleased-quit/) | quit-handler | Завершающий обработчик OnKeyReleased: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnAdventureMapRightMouseClick_Quit](./onadventuremaprightmouseclick-quit/) | quit-handler | Завершающий обработчик OnAdventureMapRightMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnTownMouseClick_Quit](./ontownmouseclick-quit/) | quit-handler | Завершающий обработчик OnTownMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnHeroScreenMouseClick_Quit](./onheroscreenmouseclick-quit/) | quit-handler | Завершающий обработчик OnHeroScreenMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnHeroesMeetScreenMouseClick_Quit](./onheroesmeetscreenmouseclick-quit/) | quit-handler | Завершающий обработчик OnHeroesMeetScreenMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnBattleScreenMouseClick_Quit](./onbattlescreenmouseclick-quit/) | quit-handler | Завершающий обработчик OnBattleScreenMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnAdventureMapLeftMouseClick_Quit](./onadventuremapleftmouseclick-quit/) | quit-handler | Завершающий обработчик OnAdventureMapLeftMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnRecruitDlgMouseClick_Quit](./onrecruitdlgmouseclick-quit/) | quit-handler | Завершающий обработчик OnRecruitDlgMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnTownHallMouseClick_Quit](./ontownhallmouseclick-quit/) | quit-handler | Завершающий обработчик OnTownHallMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnKingdomOverviewMouseClick_Quit](./onkingdomoverviewmouseclick-quit/) | quit-handler | Завершающий обработчик OnKingdomOverviewMouseClick: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnBattleMouseHint_Quit](./onbattlemousehint-quit/) | quit-handler | Завершающий обработчик OnBattleMouseHint: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnTownMouseHint_Quit](./ontownmousehint-quit/) | quit-handler | Завершающий обработчик OnTownMouseHint: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnCustomDialogEvent_Quit](./oncustomdialogevent-quit/) | quit-handler | Завершающий обработчик OnCustomDialogEvent: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnBeforeBattle_Quit](./onbeforebattle-quit/) | quit-handler | Завершающий обработчик OnBeforeBattle: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |
| [OnBeforeBattleUniversal_Quit](./onbeforebattleuniversal-quit/) | quit-handler | Завершающий обработчик OnBeforeBattleUniversal: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework. |

## Массивы {#arrays}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [NewIntArray](./newintarray/) | public | Создаёт массив целых: P?result, Psize/?result или Psize/fill/?result. После выходного аргумента допустим тип хранения; по умолчанию M_TRIGGER_LOCAL, время жизни продлено до вызывающего контекста. Значение заполнения по умолчанию 0. |
| [NewStrArray](./newstrarray/) | public | Создаёт строковый массив с теми же перегрузками, что NewIntArray. Заполнитель — строка, по умолчанию пустая. Возвращается ID массива, а не адрес памяти. |
| [Array_Push](./array-push/) | public | Добавляет до 15 значений в конец массива, увеличивая размер. Тип значений должен соответствовать массиву. Недействительный массив пропускается. |
| [Array_Pop](./array-pop/) | public | Удаляет последние элементы; до 15 выходов заполняются от последнего к первому. Без выходов удаляет один элемент. При нехватке элементов возвращает 0 или пустую строку. |
| [Array_Move](./array-move/) | requires-review | Перемещает length элементов из offset в destInd внутри массива без изменения размера; поддерживает перекрытие, обрезает выход за конец. В снимке destInd объявлен через !#VR вместо !#VA: сверяйте исправление библиотеки перед использованием. |
| [Array_Splice](./array-splice/) | requires-review | Удаляет диапазон и вставляет до 13 значений с изменением размера. Отрицательный startIndex отсчитывается от конца; отсутствие numItemsToDelete удаляет остаток, отрицательное число сохраняет столько элементов в конце. Зависит от Array_Move. |
| [Array_Copy](./array-copy/) | public | Полностью заменяет dstArray содержимым srcArray, подгоняя размер. Оба массива должны существовать и иметь одинаковый тип. |
| [Array_Clone](./array-clone/) | public | Создаёт копию массива в памяти вызывающего триггера и возвращает её ID. Строки копируются как значения. |
| [Array_Merge](./array-merge/) | public | Добавляет содержимое одного или нескольких массивов в dstArray. Все типы должны совпадать; массив-приёмник изменяется. |
| [Array_Slice](./array-slice/) | public | Копирует диапазон в новый массив. Отрицательные start/count задают отсчёт от конца/исключение хвоста. Хранение по умолчанию M_TRIGGER_LOCAL. Для пустого или неверного исходного массива возвращает NULL, поэтому проверяйте результат. |
| [Array_Join](./array-join/) | public | Соединяет элементы целого или строкового массива, разделяя gluePtr (по умолчанию пустой строкой). Возвращает ERM-строку; использует и очищает s^result^ и s^temp^. |
| [Array_Sort](./array-sort/) | public | Сортирует по возрастанию весь массив или включительный диапазон startInd..endInd. По умолчанию 0..size-1; границы обрезаются. |
| [Array_CustomSort](./array-customsort/) | public | Стабильная сортировка: callback(value1,value2,state,?result), где результат <0, 0, >0 определяет порядок. Для строк передаются z-индексы. state по умолчанию 0; диапазон включительный, по умолчанию весь массив. |
| [Array_SortedUnique](./array-sortedunique/) | public | Сортирует целочисленный массив и удаляет повторы, уменьшая размер. Строковые массивы отвергаются. |
| [Array_Shuffle](./array-shuffle/) | public | Перемешивает элементы на месте через VR:R и перестановки. Строковые указатели переставляются без копирования текста. Для сетевой логики проверяйте синхронизацию генератора. |
| [Array_Revert](./array-revert/) | public | Разворачивает порядок элементов всего массива либо включительного диапазона. По умолчанию 0..size-1; поддерживает числа и строки. |
| [Array_Fill](./array-fill/) | public | Заполняет целочисленный массив арифметической последовательностью startValue, startValue+step…; step по умолчанию 0. Диапазон включительный, по умолчанию весь массив. Реализация пишет 32-битные значения: строковый массив не передавайте. |
| [Array_Resize](./array-resize/) | public | Изменяет размер массива. Новые элементы получают 0/пустую строку или указанный fillValue; существующие сохраняются, усечённые удаляются. |
| [Array_EnsureMinSize](./array-ensureminsize/) | public | Увеличивает массив до minSize при необходимости и заполняет новые элементы. Никогда не уменьшает размер. |
| [Array_CountValue](./array-countvalue/) | public | Возвращает число совпадений value. Для строк caseInsensitive по умолчанию FALSE; используется lstrcmpA/lstrcmpiA. |
| [Array_IndexOf](./array-indexof/) | public | Возвращает индекс первого совпадения либо -1. Числа сравниваются точно; для строк можно включить caseInsensitive. |
| [Array_Find](./array-find/) | public | Вызывает callback(value,?found,listId,customArg) до первого TRUE. Возвращает индекс или -1; строковое value — ERM-строка. found и необязательный customArg по умолчанию 0. |

## Числа, биты и случайность {#math}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [Pow](./pow/) | public | Возведение в степень. Оба входа и выход — float; результат копируется из e1 через VR:C без числового преобразования. |
| [Sqrt](./sqrt/) | public | Квадратный корень float. Вход и выход вещественные; e1 изменяется. Отрицательные аргументы не имеют действительного корня. |
| [IntLog2](./intlog2/) | public | Возвращает ceil(log2(value)); для value<=0 возвращает 0. Используется, в частности, для номера единственного установленного бита. |
| [ConstructBitMask](./constructbitmask/) | public | Объединяет до 15 позиций битов 0..31 в маску; последний аргумент — выход. Повтор позиции не удваивает бит, поскольку применяется OR. Нужны хотя бы позиция и выход. |
| [DeconstructBitMask](./deconstructbitmask/) | public | Возвращает новый локальный целочисленный массив позиций установленных битов 0..31. Время жизни продлено до вызывающего контекста. |
| [PackUnion](./packunion/) | public | PackUnion принимает пары value/width и последний ?result; UnpackUnion — packedValue и пары ?value/width. Поля идут от младшего бита, общий размер до 32. Проверки граничных ширин 0 и 32 в снимке расходятся с сообщением 1..32: используйте положительные поля меньше 32 и проверяйте общую ширину. |
| [UnpackUnion](./unpackunion/) | public | PackUnion принимает пары value/width и последний ?result; UnpackUnion — packedValue и пары ?value/width. Поля идут от младшего бита, общий размер до 32. Проверки граничных ширин 0 и 32 в снимке расходятся с сообщением 1..32: используйте положительные поля меньше 32 и проверяйте общую ширину. |
| [Tm32Encode](./tm32encode/) | public | Обратимое перемешивание 32 бит; выход можно восстановить Tm32Decode. Меняет быстрые переменные f и g. Это не шифрование. |
| [Tm32Decode](./tm32decode/) | public | Обращает Tm32Encode над 32-битным значением. Меняет f и g. |
| [Hash32](./hash32/) | public | Считает 32-битный хеш dataLen байт по адресу data (либо строки). Размер и доступность памяти обеспечивает вызывающий код; криптографические свойства не заявлены. |
| [MakeRngSeed](./makerngseed/) | public | Получает детерминированный seed из до 15 целых аргументов; последний аргумент — выход. Одинаковая последовательность входов даёт одинаковый seed. |
| [SplitMix32](./splitmix32/) | public | P?seed/?result выдаёт int32; P?seed/min/max/?result — число во включительном диапазоне. Seed изменяется и должен передаваться через ?. Не использует состояние обычного VR:R. |

## Строки {#strings}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [Trim](./trim/) | public | Убирает с обоих концов строки пробелы и управляющие байты 0..32; возвращает новую ERM-строку. |
| [GetStrAtAddr](./getstrataddr/) | public | Копирует строку с нулевым терминатором по адресу strAddr в выходную ERM-строку; NULL даёт пустую. Для ненулевого адреса память должна быть доступна. |
| [CompareStrings](./comparestrings/) | public | Сравнивает две ERM-строки операторами языка и возвращает -1, 0 или 1. |
| [StrToUpper](./strtoupper/) | public | Создаёт строку в верхнем/нижнем регистре через CharUpperA/CharLowerA. Это ANSI-преобразование Windows, не универсальная Unicode-нормализация. |
| [StrToLower](./strtolower/) | public | Создаёт строку в верхнем/нижнем регистре через CharUpperA/CharLowerA. Это ANSI-преобразование Windows, не универсальная Unicode-нормализация. |
| [Substr](./substr/) | public | Возвращает подстроку: start с нуля, отрицательный start от конца; count — длина, отрицательный count исключает хвост. |
| [StrPos](./strpos/) | public | Ищет первое вхождение needlePtr в haystackPtr начиная с offset (по умолчанию 0). Возвращает смещение с нуля либо -1. |
| [StrReplace](./strreplace/) | public | Заменяет все вхождения patternPtr в sourcePtr на replacementPtr и возвращает строку. Вызывается только внутри триггера. |
| [Interpolate](./interpolate/) | public | Подставляет текущие значения ERM-переменных в строковый шаблон. Учитывайте момент вызова: шаблон и уже готовый текст имеют разное назначение. |
| [DecorateInt](./decorateint/) | public | Форматирует целое с разделителем тысяч era.locale.thousand_separator. ignoreSmallNumbers=DONT_DECORATE_SMALL_INTS оставляет числа до 9999 без группировки. Выход — строка. |
| [FormatQuantity](./formatquantity/) | public | Форматирует количество с локалью и суффиксами K/M/G. maxLen по умолчанию 5 логических символов, maxDigits — 4; поддерживает отрицательные числа. |

## Файлы, INI и JSON {#files}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [FileExists](./fileexists/) | public | Проверяет атрибуты пути и возвращает TRUE только для требуемого вида: FileExists — файл, DirExists — каталог. Ошибка доступа также даёт FALSE. |
| [DirExists](./direxists/) | public | Проверяет атрибуты пути и возвращает TRUE только для требуемого вида: FileExists — файл, DirExists — каталог. Ошибка доступа также даёт FALSE. |
| [DeleteFile](./deletefile/) | public | Удаляет файл через DeleteFileA; TRUE означает успешное удаление. Не удаляет дерево каталогов. |
| [ClearIniCache](./clearinicache/) | public | Забывает кэш одного INI. Следующее чтение или запись заново загрузит файл с диска. Сам файл не удаляется. |
| [EmptyIniCache](./emptyinicache/) | public | Заменяет кэш INI пустым содержимым для создания настроек заново. Чтобы записать на диск, нужен SaveIni. |
| [CreateDir](./createdir/) | public | Вызывает CreateDirectoryA для одного каталога; результат API не возвращается. Не гарантирует создание отсутствующей цепочки родителей. |
| [SaveIni](./saveini/) | public | Сохраняет кэш INI на диск, создавая родительские каталоги. Если кэша ещё нет, сначала загружает исходный файл. |
| [MergeIniWithDefault](./mergeiniwithdefault/) | public | Добавляет недостающие ключи из source в кэш target, сохраняя уже заданные значения. Запись на диск выполняется отдельно через SaveIni. |
| [WriteIniInts](./writeiniints/) | public | После пути и секции принимает до 7 пар key/value. Записывает только в кэш; требуется SaveIni. Для WriteIniInts значения преобразуются в десятичный текст, для WriteIniStrings передаются строки. |
| [WriteIniStrings](./writeinistrings/) | public | После пути и секции принимает до 7 пар key/value. Записывает только в кэш; требуется SaveIni. Для WriteIniInts значения преобразуются в десятичный текст, для WriteIniStrings передаются строки. |
| [ReadIniStrings](./readinistrings/) | public | После пути и секции принимает до 4 троек key/?value/default. Пустая прочитанная строка тоже заменяется default. ReadIniInts преобразует непустой текст в целое; это не отдельная проверка корректности числа. |
| [ReadIniInts](./readiniints/) | public | После пути и секции принимает до 4 троек key/?value/default. Пустая прочитанная строка тоже заменяется default. ReadIniInts преобразует непустой текст в целое; это не отдельная проверка корректности числа. |
| [ReadJsonIntArray](./readjsonintarray/) | public | Читает JSON-ключи prefix.0, prefix.1… до первого отсутствующего. Второй аргумент через ? создаёт локальный массив, иначе существующий очищается и заполняется. ReadJsonIntArray преобразует строки в числа. |
| [ReadJsonStrArray](./readjsonstrarray/) | public | Читает JSON-ключи prefix.0, prefix.1… до первого отсутствующего. Второй аргумент через ? создаёт локальный массив, иначе существующий очищается и заполняется. ReadJsonIntArray преобразует строки в числа. |
| [LoadIntGlobalsFromJson](./loadintglobalsfromjson/) | public | После JSON-префикса и префикса глобальных переменных принимает до 14 имён. Значение сначала ищется как имя ERM-константы, затем преобразуется в целое; отсутствующий ключ не меняет глобальную переменную. |
| [ScanDir](./scandir/) | public | Очищает переданный строковый массив и заполняет именами без . и ... itemsType — SCAN_* (по умолчанию файлы и каталоги), fullPaths — добавлять путь (FALSE). При раннем выходе после FindFirstFileA снимок не восстанавливает v1. |
| [GetModList](./getmodlist/) | public | Возвращает локальный массив активных модов из VFS. toLower и reverse по умолчанию FALSE. При нулевом числе модов выход не инициализируется; заранее задайте NULL и проверяйте результат. |

## Игровые операции {#game}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [SaveGame](./savegame/) | public | Сохраняет игру по имени без расширения. По умолчанию appendExtension=TRUE, compressFile=TRUE, saveToData=FALSE, markInList=TRUE. Вызывает машинный адрес сохранения и может менять выбранную запись диалога. |
| [DisableErrors](./disableerrors/) | public | Включает WOG_OPT_MUTE_ERRORS и обнуляет WOG_OPT_LAST_ERROR. Используйте только вокруг контролируемой операции. |
| [EnableErrors](./enableerrors/) | requires-review | Читает последний флаг ошибки, но в этом снимке снова устанавливает WOG_OPT_MUTE_ERRORS=TRUE. Комментарий обещает включение сообщений, код этого не делает. Для восстановления требуется явный UN:P с FALSE либо исправленная библиотека. |
| [Battle_RedrawGridShadow](./battle-redrawgridshadow/) | public | Обновляет тень доступного перемещения после изменения скорости. Нужен существующий менеджер боя. |
| [BattleStack_Shoot](./battlestack-shoot/) | public | Заставляет attackerStackId стрелять в defenderStackId, временно меняя и восстанавливая позицию цели в структуре атакующего. Проверку существования стеков выполняйте заранее. |
| [BattleStack_MakeActive](./battlestack-makeactive/) | public | Передаёт ход стеку 0..41 и при необходимости выполняет фазу регенерации. Допустимый индекс сам по себе не гарантирует существование живого стека. |
| [ActivateNextStack](./activatenextstack/) | requires-review | Вызывает выбор следующего стека. В снимке запись результата защищена условием result<>0: выход, заранее равный 0, не обновляется. Инициализируйте выход ненулевым либо используйте исправленную версию. |
| [UpdateBattleVars](./updatebattlevars/) | public | Перечитывает BA и OW в battle_*: герои, владельцы, быстрый/сетевой/видимый бой и признаки сторон. После изменения BA (кроме состава существ) вызовите снова. Для защитника без героя нормализует ID в NO_HERO. |
| [GetTimeMsec](./gettimemsec/) | public | Возвращает миллисекунды с запуска ОС через timeGetTime. 32-битный счётчик переполняется примерно через 49,71 суток; это не игровая дата. |
| [GetProcessGuid](./getprocessguid/) | public | Возвращает строку из 32 символов, уникальную для запуска игрового процесса. Подходит для отличия нового запуска от загрузки сохранения в том же процессе. |
| [IsDllLoaded](./isdllloaded/) | public | Проверяет DLL по имени с расширением через GetModuleHandleA. Возвращает TRUE/FALSE и не загружает отсутствующий модуль. |
| [MonCountToFuzzyText](./moncounttofuzzytext/) | public | Возвращает приблизительное количество: 1–4, 5–9, 10–19, 20–49, 50–99, 100–249, 250–499, 500–999 и K+/M+. Формат задаётся MON_FUZZY_COUNT_*; 0 попадает в 1–4, отрицательное число — ошибка. |
| [GetMaxMonsterId](./getmaxmonsterid/) | public | Читает установленный в движке предел и вычитает 1. Последний поддерживаемый ID не означает, что все позиции содержат настроенные игровые сущности. |
| [GetUpgradedMonster](./getupgradedmonster/) | public | Возвращает улучшение типа существа либо NO_MON (-1), если улучшения нет. |
| [GetDegradedMonCandidates](./getdegradedmoncandidates/) | public | Перебирает все поддерживаемые типы и возвращает локальный массив существ, улучшающихся до monId. Кандидатов может быть несколько; полный перебор дорог при расширенном лимите. |
| [GetMaxHeroId](./getmaxheroid/) | public | Читает установленный в движке предел и вычитает 1. Последний поддерживаемый ID не означает, что все позиции содержат настроенные игровые сущности. |
| [GetHeroPortraitName](./getheroportraitname/) | public | Возвращает актуальные имена малого и большого портретов героя. Читает таблицу структур по ID; диапазон проверяйте до вызова. |
| [GetHeroPrimarySkillsWithoutArts](./getheroprimaryskillswithoutarts/) | public | Временно снимает 19 экипированных артефактов, читает HE:F и надевает их обратно. Вызывает OnUnequipArt/OnEquipArt; это операция с побочными событиями, а не чистое чтение. |
| [GetArtAtSlot](./getartatslot/) | public | Возвращает ID артефакта и модификатор по слоту героя; поддерживает рюкзак. Для пустого слота учитывайте NO_ART. |
| [ChangeArtModAtSlot](./changeartmodatslot/) | public | Меняет модификатор артефакта в слоту, включая рюкзак. Для свитка модификатор — ID заклинания; для обычного артефакта обычно NO_ART_MOD. |
| [AddArtToHero](./addarttohero/) | public | Пытается надеть артефакт, затем положить в рюкзак; возвращает успех. Автоматически собирает сборные артефакты и проверяет условия победы. |
| [EquipArtToSlot](./equiparttoslot/) | public | Надевает артефакт в слот куклы героя либо выбирает слот при NO_ART_SLOT. Возвращает TRUE/FALSE и вызывает OnEquipArt. Не служит записью произвольного слота рюкзака. |
| [UnequipArtFromSlot](./unequipartfromslot/) | public | Снимает артефакт со слота куклы и вызывает OnUnequipArt. Артефактные ID/модификаторы при временном снятии нужно сохранить самостоятельно. |
| [GetMaxArtifactId](./getmaxartifactid/) | public | В этом снимке просто возвращает ART_LAST_WOG. Несмотря на комментарий о расширениях, динамический предел плагинов не запрашивается. |
| [GetMaxSpellId](./getmaxspellid/) | public | Возвращает константу SPELL_LAST_WOG, а не динамический предел стороннего расширения заклинаний. |
| [GetTextFileString](./gettextfilestring/) | public | Читает строку с нулевым индексом из загруженных ресурсов randtvrn, arraytxt, genrltxt, tcommand, artevent, crgen1, crgen4, dwelling, minename, objnames, towntype, plcolors, priskill, restypes, skilllev, advevent. Имя нормализуется; неизвестное даёт Wrong txt filename!. Индекс строки не проверяется. |
| [GetTextTableString](./gettexttablestring/) | public | Читает ячейку bldgspec, help или znpc00 по rowIndex/colIndex. Несмотря на комментарий «get or set», ветки записи в снимке нет. Проверку индексов обеспечивает вызывающий код. |
| [H3Quests_RefreshData](./h3quests-refreshdata/) | public | Обновляет данные заданий после подмены существ/имён. Для задания на уничтожение монстра сверяет реальный тип по координатам; forceRefreshText пересоздаёт тексты всех заданий. Использует внутренние структуры игры. |

## Диалоги {#dialogs}

| Функция | Статус | Назначение |
| --- | --- | --- |
| [H3Dlg_StopAnimation](./h3dlg-stopanimation/) | public | Останавливает/возобновляет анимацию текущих диалогов через машинную функцию. Пары должны быть сбалансированы. |
| [H3Dlg_ResumeAnimation](./h3dlg-resumeanimation/) | public | Останавливает/возобновляет анимацию текущих диалогов через машинную функцию. Пары должны быть сбалансированы. |
| [H3Dlg_ShowPopup](./h3dlg-showpopup/) | public | Показывает H3-диалог как окно по ПКМ, приостанавливая и возобновляя анимацию. Требует действительный адрес H3Dlg. |
| [H3Dlg_Coords](./h3dlg-coords/) | public | Координаты x/y поддерживают GET, SET и ADD (?). Позиция ограничивается размером экрана и тенью окна. H3Dlg_Coords принимает адрес H3Dlg; DL_Coords — ID уже созданного через DL:N диалога. |
| [H3Dlg_CenterAtMouse](./h3dlg-centeratmouse/) | public | Центрирует существующее окно у курсора. Для H3Dlg передайте адрес, для DL — ID. DL-обёртка не проверяет NULL после поиска: сначала создайте окно. |
| [H3Dlg_GetRootDlg](./h3dlg-getrootdlg/) | public | Возвращает адрес корневого диалога или NULL; обычно это карта приключений. |
| [H3Dlg_GetCurrentDlg](./h3dlg-getcurrentdlg/) | public | Возвращает адрес верхнего диалога или NULL. Адрес не равен его идентификатору DLG_*. |
| [H3Dlg_GetCurrentDlgId](./h3dlg-getcurrentdlgid/) | public | Возвращает идентификатор верхнего окна из виртуальной таблицы, сопоставимый с DLG_*, либо NULL. |
| [H3Dlg_SendCmdToItem](./h3dlg-sendcmdtoitem/) | public | Отправляет itemId команду DLG_CMD_*; cmdType по умолчанию DLG_CMD_TYPE_DEFAULT. Для SET_TEXT/SET_DEF/SET_PCX param трактуется как строка; остальные команды получают число. |
| [H3Dlg_DrawItemOnScreen](./h3dlg-drawitemonscreen/) | public | Выводит на экран элемент по itemId или весь диалог при ALL_ITEMS. Объект H3Dlg должен существовать. |
| [H3Dlg_UpdateItemRange](./h3dlg-updateitemrange/) | requires-review | Обновляет внутреннее состояние диалога перед перерисовкой. В снимке minItemId/maxItemId не используются: вызывается виртуальный метод с 0/200/200. Не рассчитывайте на обновление только заданного диапазона. |
| [DL_FindById](./dl-findbyid/) | public | Возвращает адрес оболочки DL-диалога по ID либо NULL. Это не адрес H3Dlg: он хранится в первом поле оболочки. v1 изменяется. |
| [DL_Destroy](./dl-destroy/) | public | Уничтожает объект оболочки DL по адресу. Повторно использовать уничтоженный адрес нельзя. |
| [DL_ShowPopup](./dl-showpopup/) | public | Показывает DL-диалог по ID как ПКМ-подсказку и затем уничтожает его. Перед повторным показом снова нужен DL:N. |
| [DL_CenterAtMouse](./dl-centeratmouse/) | public | Центрирует существующее окно у курсора. Для H3Dlg передайте адрес, для DL — ID. DL-обёртка не проверяет NULL после поиска: сначала создайте окно. |
| [DL_Coords](./dl-coords/) | public | Координаты x/y поддерживают GET, SET и ADD (?). Позиция ограничивается размером экрана и тенью окна. H3Dlg_Coords принимает адрес H3Dlg; DL_Coords — ID уже созданного через DL:N диалога. |
| [DL_GetSize](./dl-getsize/) | public | Возвращает ширину и высоту уже созданного DL-диалога; при отсутствии окна сообщает ошибку. |
| [DL_SetSize](./dl-setsize/) | public | Меняет ширину/высоту существующего DL-диалога. Нулевой или пропущенный размер сохраняет соответствующее измерение; элементы автоматически не раскладываются. |
| [DL_AlignDlg](./dl-aligndlg/) | public | Выравнивает созданный DL-диалог по битовой маске TEXT_ALIGN_*. CENTER/MIDDLE имеют приоритет над RIGHT/BOTTOM. |
| [DL_SetPlayerColor](./dl-setplayercolor/) | public | Меняет цвет рамки DL-диалога. playerId по умолчанию — взаимодействующий игрок; проверяется диапазон PLAYER_FIRST..PLAYER_LAST. |
| [ClearScreenLog](./clearscreenlog/) | public | Очищает зелёные сообщения экранного журнала. |
| [AdvMap_SetHint](./advmap-sethint/) | public | Немедленно обновляет подсказку карты приключений; выполняется только если корневое окно DLG_ADVMAP. Текст чата может скрыться до следующего ввода. |
| [AdvMap_SetInfoPanelText](./advmap-setinfopaneltext/) | public | Показывает непустой текст в панели карты на timeToDisplay миллисекунд (по умолчанию 5000). Использует s^temp_text^ и меняет v1. |
| [AdvMap_SetInfoPanelDef](./advmap-setinfopaneldef/) | public | Показывает текст и кадр DEF в панели карты на 5000 мс по умолчанию. Временно подменяет два машинных операнда имени DEF и восстанавливает их. Меняет z1/v1; без defName вызывает текстовый вариант. |
| [RadioDlg_Reset](./radiodlg-reset/) | public | Сбрасывает заголовок, элементы, выбор и флаги общего радиодиалога. Вызывайте перед составлением нового диалога. |
| [RadioDlg_SetTitle](./radiodlg-settitle/) | public | Копирует заголовок в состояние радиодиалога. |
| [RadioDlg_AddCancelButton](./radiodlg-addcancelbutton/) | public | Резервирует одну из 12 позиций под отмену. Если все позиции заняты, удаляет последний пункт и сообщает ошибку один раз. Повторный вызов не добавляет вторую кнопку. |
| [RadioDlg_SelectItem](./radiodlg-selectitem/) | public | Выбирает индекс 0..numItems-1; неверный индекс снимает выбор (NO_RADIO_DLG_ITEM). |
| [RadioDlg_SelectItemByValue](./radiodlg-selectitembyvalue/) | public | Выбирает первое совпадение значения/строковой метки. При отсутствии совпадения выбор снимается. |
| [RadioDlg_SelectItemByTag](./radiodlg-selectitembytag/) | public | Выбирает первое совпадение значения/строковой метки. При отсутствии совпадения выбор снимается. |
| [RadioDlg_AddItem](./radiodlg-additem/) | public | Добавляет подпись, число, метку и необязательный selectItem. Значения по умолчанию: пусто, 0, пусто, FALSE. Пустая подпись отображается как -/-. Вместимость 12, с отменой 11. |
| [RadioDlg_AddItems](./radiodlg-additems/) | public | Добавляет до 5 троек caption/value/tag. Неполная последняя тройка игнорируется; автоматического выбора нет. |
| [RadioDlg_GetNumItems](./radiodlg-getnumitems/) | public | Возвращает количество содержательных пунктов без кнопки отмены. |
| [RadioDlg_GetItemValue](./radiodlg-getitemvalue/) | public | Возвращает числовое значение/строковую метку по индексу. Неверный индекс вызывает ошибку и возвращает -1; для метки это не пустая строка. |
| [RadioDlg_GetItemTag](./radiodlg-getitemtag/) | public | Возвращает числовое значение/строковую метку по индексу. Неверный индекс вызывает ошибку и возвращает -1; для метки это не пустая строка. |
| [RadioDlg_Show](./radiodlg-show/) | public | Показывает диалог через IF:G и возвращает ?resultItem/?resultValue/?resultTagPtr. Отмена/пустой список дают -1/-1/пусто. Состояние предварительно копируется, чтобы вложенный диалог не испортил текущие пункты. |
| [PrepareMultiPicDialog](./preparemultipicdialog/) | public | Настраивает картинки следующего IF:N: без аргументов очищает; принимает пары type/subtype или один ID массива пар. Пропускает NO_PIC_TYPE и отрицательные типы существ; максимум 8 непустых пар. Сам диалог не показывает. |
| [ShowAnimatedDefDlg](./showanimateddefdlg/) | public | Показывает сообщение с OK и анимированным DEF. Без имени DEF или при пустом имени использует обычный IF:M1. |
| [PrepareMessageBoxText](./preparemessageboxtext/) | requires-review | Передаёт пары имени/подсказки для следующего сообщения в wog native dialogs:PrepareMessageBoxText. В снимке условие l<argsNum пропускает последнюю подсказку при чётном числе аргументов; проверьте версию библиотеки. |

<!-- ERA3-GENERATED:START -->
## Изменения в ERA 3 {#era3-updates}

Эти записи уточняют или заменяют историческое поведение из старой ERM Help.

- [ERA 3.9.21, +](../../compatibility/#era3-v-3-9-21-l155) — Added the following functions to Era Erm Framework: !?FU(ReadJsonIntArray); ; Reads integer array from json config into either existing dynamic array or into automatically created local one. !#VA(jsonKeyPtr:x); JSON full…
- [ERA 3.9.19, +](../../compatibility/#era3-v-3-9-19-l199) — Added the following functions to Era Erm Framework: !?FU(EmptyIniCache); ; Replaces ini file cache in memory with an empty one. Use it for recreating ini files from scratch, when you don't need previously cached data and…
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l308) — Extended VR:R command with optional 4-th parameter: VR:R(dummy)/(min)/(max)/(free_param); See the above note about generating random values in PvP battles. Example: !?FU(OnBattleScreenMouseClick)&i^mouse_action^=(MOUSE_R…
- [ERA 3.9.16, +](../../compatibility/#era3-v-3-9-16-l328) — Updated "Era Erm Framework": -) Added support for area shooting creatures to BattleStack_Shoot function. -) Synchronized with Launcher "Era Erm Framework" version.
- [ERA 3.9.16, *](../../compatibility/#era3-v-3-9-16-l399) — Updated "Era Erm Framework" mod to use "lib_end" directory for some scripts. &#91;!&#93; Savegame file format was changed. Added format checking. Old savegames will be loaded without scripts/plugins data.
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l432) — Added support for ERM script libraries. Scripts, located in "Data/s/lib" directory are considered library scripts. They are loaded before other global scripts and before all map scripts (both internal and external). Such…
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l461) — Disabled ERM tracking for Era Erm Framework mouse and keyboard handling code.
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l479) — Added the following functions to Era Erm Framework: !?FU(Interpolate); ; Interpolates ERM variables inside given string (%v1, etc). Can be used for nested translation strings like %T(...) is json. !#VA(strPtr:x); Source …
- [ERA 3.9.15, +](../../compatibility/#era3-v-3-9-15-l534) — Added the following constants to Era Erm Framework: CHAT_EVENT_TYPE_XXX for 'OnChat' event subtype CHAT_EVENT_RESULT_XXX for 'OnChat' event result
- [ERA 3.9.15, *](../../compatibility/#era3-v-3-9-15-l595) — Increase performance of "Substr" function from Era Erm Framework.
- [ERA 3.9.13, +](../../compatibility/#era3-v-3-9-13-l691) — Added experimental (may be subject of removal) exported function to quit from any dialog to main game menu. // Exits adventure manager dialogs and/or all subdialogs and immediately returns to game menu screen by raising …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l727) — Implemented advanced ERM memory synchronization means in network games. Added !!IP:M command to mark associative variables (SN:W, i^^, s^^) for further synchronization. Syntax: !!IP:M^var_name_1^/^var_name_2^/...; !!IP:M…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l761) — Added GAME_TYPE_XXX constants to Era Erm Framework (see UN:V 5-th parameter).
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l763) — Added the following global variables to Era Erm Framework: i^battle_isActingSideUiUser^: bool. Is TRUE if acting side player is local human and thus can use all UI actions. Use it to prevent non-active network player fro…
- [ERA 3.9.12, *](../../compatibility/#era3-v-3-9-12-l769) — The order of network battle events: !?FU(OnBeforeBattle); on attacker side only, battle may be cancelled !?FU(OnBeforeBattleUniversal); on attacker side, battle may still be cancelled !?FU(OnBeforeBattleBeforeDataSend); …
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l802) — Added the following functions to Era Erm Framework: !?FU(Array_Move); ; Copies part of the array into another part of the array, overwriting existing values in a smart way. ; The parts may have overlapping indexes. The s…
- [ERA 3.9.12, +](../../compatibility/#era3-v-3-9-12-l885) — Rewritten creature regeneration ability support. (!) Plugins should not hook regeneration code and should use Era 'SetRegenerationAbility' API instead. Era introduces term "Standard regeneration ability", which value is …
- [ERA 3.9.9, +](../../compatibility/#era3-v-3-9-9-l971) — Added the following functions to Era Erm Framework: !?FU(Hash32); ; Calculates int32 digest (hash sum) of arbitrary sequence of bytes. !#VA(data:x); Pointer to data first byte or string !#VA(dataLen:x); Length of data in…
- [ERA 3.9.7, +](../../compatibility/#era3-v-3-9-7-l1031) — Added support for arrays and primitive types in language json files, because they are often used as config files. Numbers are converted to strings, booleans are converted to "0" and "1", null values are ignored (the same…
- [ERA 3.9.5, *](../../compatibility/#era3-v-3-9-5-l1081) — Updated Era Erm Framework to the one from H3 Launcher 2.927.
- [Все связанные записи](../../compatibility/#era3-changelog)
<!-- ERA3-GENERATED:END -->
