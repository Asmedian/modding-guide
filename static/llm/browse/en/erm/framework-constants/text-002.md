# Battle

ID: erm.framework.constants.battle
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/battle/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.battle 1 -->
## Purpose {#meaning}

The **Battle** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `NO_STACK` {#const-no-stack} | `-1` |
| `BATTLE_STACK_FIRST` {#const-battle-stack-first} | `0` |
| `BATTLE_STACK_LAST` {#const-battle-stack-last} | `41` |
| `BATTLE_MAX_STACKS` {#const-battle-max-stacks} | `42` |
| `BATTLE_ATTACKER_STACK_FIRST` {#const-battle-attacker-stack-first} | `0` |
| `BATTLE_ATTACKER_STACK_LAST` {#const-battle-attacker-stack-last} | `20` |
| `BATTLE_DEFENDER_STACK_FIRST` {#const-battle-defender-stack-first} | `21` |
| `BATTLE_DEFENDER_STACK_LAST` {#const-battle-defender-stack-last} | `41` |
| `BATTLE_ATTACKER_BASE_STACK_FIRST` {#const-battle-attacker-base-stack-first} | `0` |
| `BATTLE_ATTACKER_BASE_STACK_LAST` {#const-battle-attacker-base-stack-last} | `6` |
| `BATTLE_DEFENDER_BASE_STACK_FIRST` {#const-battle-defender-base-stack-first} | `21` |
| `BATTLE_DEFENDER_BASE_STACK_LAST` {#const-battle-defender-base-stack-last} | `27` |
| `BATTLE_STACKS_PER_SIDE` {#const-battle-stacks-per-side} | `21` |
| `BATTLE_BASE_STACKS_PER_SIDE` {#const-battle-base-stacks-per-side} | `7` |
| `BATTLE_LEFT` {#const-battle-left} | `0` |
| `BATTLE_RIGHT` {#const-battle-right} | `1` |
| `FIRST_TACTICS_ROUND` {#const-first-tactics-round} | `-1000000000` |
| `FIRST_NON_TACTICS_ROUND` {#const-first-non-tactics-round} | `0` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[OnBeforeBattleUniversal](../../functions/onbeforebattleuniversal/) · [OnBattleStackObtainsTurn](../../functions/onbattlestackobtainsturn/) · [BattleStack_MakeActive](../../functions/battlestack-makeactive/) · [OnBattleReplay](../../functions/onbattlereplay/)
<!-- llm:end erm.framework.constants.battle 1 -->

# Bit Masks

ID: erm.framework.constants.bit-masks
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/bit-masks/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.bit-masks 1 -->
## Purpose {#meaning}

The **Bit Masks** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BITS_1_MASK` {#const-bits-1-mask} | `1` |
| `BITS_2_MASK` {#const-bits-2-mask} | `3` |
| `BITS_3_MASK` {#const-bits-3-mask} | `7` |
| `BITS_4_MASK` {#const-bits-4-mask} | `15` |
| `BITS_5_MASK` {#const-bits-5-mask} | `31` |
| `BITS_6_MASK` {#const-bits-6-mask} | `63` |
| `BITS_7_MASK` {#const-bits-7-mask} | `127` |
| `BITS_8_MASK` {#const-bits-8-mask} | `255` |
| `BITS_9_MASK` {#const-bits-9-mask} | `511` |
| `BITS_10_MASK` {#const-bits-10-mask} | `1023` |
| `BITS_11_MASK` {#const-bits-11-mask} | `2047` |
| `BITS_12_MASK` {#const-bits-12-mask} | `4095` |
| `BITS_13_MASK` {#const-bits-13-mask} | `8191` |
| `BITS_14_MASK` {#const-bits-14-mask} | `16383` |
| `BITS_15_MASK` {#const-bits-15-mask} | `32767` |
| `BITS_16_MASK` {#const-bits-16-mask} | `65535` |
| `BITS_17_MASK` {#const-bits-17-mask} | `131071` |
| `BITS_18_MASK` {#const-bits-18-mask} | `262143` |
| `BITS_19_MASK` {#const-bits-19-mask} | `524287` |
| `BITS_20_MASK` {#const-bits-20-mask} | `1048575` |
| `BITS_21_MASK` {#const-bits-21-mask} | `2097151` |
| `BITS_22_MASK` {#const-bits-22-mask} | `4194303` |
| `BITS_23_MASK` {#const-bits-23-mask} | `8388607` |
| `BITS_24_MASK` {#const-bits-24-mask} | `16777215` |
| `BITS_25_MASK` {#const-bits-25-mask} | `33554431` |
| `BITS_26_MASK` {#const-bits-26-mask} | `67108863` |
| `BITS_27_MASK` {#const-bits-27-mask} | `134217727` |
| `BITS_28_MASK` {#const-bits-28-mask} | `268435455` |
| `BITS_29_MASK` {#const-bits-29-mask} | `536870911` |
| `BITS_30_MASK` {#const-bits-30-mask} | `1073741823` |
| `BITS_31_MASK` {#const-bits-31-mask} | `2147483647` |
| `BITS_32_MASK` {#const-bits-32-mask} | `-1` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[ActivateNextStack](../../functions/activatenextstack/)
<!-- llm:end erm.framework.constants.bit-masks 1 -->

# Bit Sizes

ID: erm.framework.constants.bit-sizes
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/bit-sizes/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.bit-sizes 1 -->
## Purpose {#meaning}

The **Bit Sizes** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BITS_IN_INT4` {#const-bits-in-int4} | `4` |
| `BITS_IN_INT8` {#const-bits-in-int8} | `8` |
| `BITS_IN_INT16` {#const-bits-in-int16} | `16` |
| `BITS_IN_INT32` {#const-bits-in-int32} | `32` |
| `BITS_IN_INT` {#const-bits-in-int} | `32` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[PackUnion](../../functions/packunion/) · [UnpackUnion](../../functions/unpackunion/)
<!-- llm:end erm.framework.constants.bit-sizes 1 -->

# Bits

ID: erm.framework.constants.bits
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/bits/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.bits 1 -->
## Purpose {#meaning}

The **Bits** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BIT_0` {#const-bit-0} | `1` |
| `BIT_1` {#const-bit-1} | `2` |
| `BIT_2` {#const-bit-2} | `4` |
| `BIT_3` {#const-bit-3} | `8` |
| `BIT_4` {#const-bit-4} | `16` |
| `BIT_5` {#const-bit-5} | `32` |
| `BIT_6` {#const-bit-6} | `64` |
| `BIT_7` {#const-bit-7} | `128` |
| `BIT_8` {#const-bit-8} | `256` |
| `BIT_9` {#const-bit-9} | `512` |
| `BIT_10` {#const-bit-10} | `1024` |
| `BIT_11` {#const-bit-11} | `2048` |
| `BIT_12` {#const-bit-12} | `4096` |
| `BIT_13` {#const-bit-13} | `8192` |
| `BIT_14` {#const-bit-14} | `16384` |
| `BIT_15` {#const-bit-15} | `32768` |
| `BIT_16` {#const-bit-16} | `65536` |
| `BIT_17` {#const-bit-17} | `131072` |
| `BIT_18` {#const-bit-18} | `262144` |
| `BIT_19` {#const-bit-19} | `524288` |
| `BIT_20` {#const-bit-20} | `1048576` |
| `BIT_21` {#const-bit-21} | `2097152` |
| `BIT_22` {#const-bit-22} | `4194304` |
| `BIT_23` {#const-bit-23} | `8388608` |
| `BIT_24` {#const-bit-24} | `16777216` |
| `BIT_25` {#const-bit-25} | `33554432` |
| `BIT_26` {#const-bit-26} | `67108864` |
| `BIT_27` {#const-bit-27} | `134217728` |
| `BIT_28` {#const-bit-28} | `268435456` |
| `BIT_29` {#const-bit-29} | `536870912` |
| `BIT_30` {#const-bit-30} | `1073741824` |
| `BIT_31` {#const-bit-31} | `-2147483648` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.bits 1 -->

# Bm:G Field Offsets

ID: erm.framework.constants.bm-g-field-offsets
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/bm-g-field-offsets/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.bm-g-field-offsets 1 -->
## Purpose {#meaning}

The **Bm:G Field Offsets** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BMG_FIELD_VALUE_VISIBLE` {#const-bmg-field-value-visible} | `4` |
| `BMG_FIELD_VALUE_INVISIBLE` {#const-bmg-field-value-invisible} | `8` |
| `BMG_FIELD_VALUE_DISPLAY_REAL_NUM_MONS` {#const-bmg-field-value-display-real-num-mons} | `-1` |
| `BMG_FIELD_VISIBILITY` {#const-bmg-field-visibility} | `-100` |
| `BMG_FIELD_HIDDEN_QUANTITY` {#const-bmg-field-hidden-quantity} | `-90` |
| `BMG_FIELD_MON_TYPE` {#const-bmg-field-mon-type} | `-89` |
| `BMG_FIELD_MON_POS` {#const-bmg-field-mon-pos} | `-88` |
| `BMG_FIELD_DEF_GROUP_IND` {#const-bmg-field-def-group-ind} | `-87` |
| `BMG_FIELD_DEF_FRAME_IND` {#const-bmg-field-def-frame-ind} | `-86` |
| `BMG_FIELD_NUM_MONS` {#const-bmg-field-num-mons} | `-83` |
| `BMG_FIELD_NUM_DISPLAYED_MONS` {#const-bmg-field-num-displayed-mons} | `-82` |
| `BMG_FIELD_IRRECOVERABLE_LOSS` {#const-bmg-field-irrecoverable-loss} | `-81` |
| `BMG_FIELD_MORALE` {#const-bmg-field-morale} | `212` |
| `BMG_FIELD_LUCK` {#const-bmg-field-luck} | `213` |

## Implementation dependency {#compatibility}

This group contains internal values, offsets, or addresses. They describe the supplied implementation and do not guarantee compatibility with another executable or a plugin replacing a structure. A named constant does not make address access safe without checking the structure’s lifetime.

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.bm-g-field-offsets 1 -->

# Calling Conventions

ID: erm.framework.constants.calling-conventions
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/calling-conventions/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.calling-conventions 1 -->
## Purpose {#meaning}

The **Calling Conventions** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `CALLCONV_PASCAL` {#const-callconv-pascal} | `0` |
| `CALLCONV_CDECL` {#const-callconv-cdecl} | `1` |
| `CALLCONV_STDCALL` {#const-callconv-stdcall} | `1` |
| `CALLCONV_THISCALL` {#const-callconv-thiscall} | `2` |
| `CALLCONV_FASTCALL` {#const-callconv-fastcall} | `3` |
| `CALLCONV_PASCAL_FLOAT` {#const-callconv-pascal-float} | `4` |
| `CALLCONV_CDECL_FLOAT` {#const-callconv-cdecl-float} | `5` |
| `CALLCONV_STDCALL_FLOAT` {#const-callconv-stdcall-float} | `5` |
| `CALLCONV_THISCALL_FLOAT` {#const-callconv-thiscall-float} | `6` |
| `CALLCONV_FASTCALL_FLOAT` {#const-callconv-fastcall-float} | `7` |
| `CALLCONV_FLOAT_RES` {#const-callconv-float-res} | `4` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[GetModList](../../functions/getmodlist/) · [SaveGame](../../functions/savegame/) · [H3Dlg_ShowPopup](../../functions/h3dlg-showpopup/) · [H3Dlg_CenterAtMouse](../../functions/h3dlg-centeratmouse/) · [H3Dlg_SendCmdToItem](../../functions/h3dlg-sendcmdtoitem/) · [H3Dlg_DrawItemOnScreen](../../functions/h3dlg-drawitemonscreen/) · [H3Dlg_UpdateItemRange](../../functions/h3dlg-updateitemrange/) · [AdvMap_SetInfoPanelText](../../functions/advmap-setinfopaneltext/) · [AdvMap_SetInfoPanelDef](../../functions/advmap-setinfopaneldef/) · [ShowAnimatedDefDlg](../../functions/showanimateddefdlg/) · [Battle_RedrawGridShadow](../../functions/battle-redrawgridshadow/) · [BattleStack_Shoot](../../functions/battlestack-shoot/) · [BattleStack_MakeActive](../../functions/battlestack-makeactive/) · [ActivateNextStack](../../functions/activatenextstack/) · [GetTimeMsec](../../functions/gettimemsec/) · [GetUpgradedMonster](../../functions/getupgradedmonster/) · [AddArtToHero](../../functions/addarttohero/) · [EquipArtToSlot](../../functions/equiparttoslot/) · [UnequipArtFromSlot](../../functions/unequipartfromslot/) · [GetTextTableString](../../functions/gettexttablestring/) · [H3Quests_RefreshData](../../functions/h3quests-refreshdata/)
<!-- llm:end erm.framework.constants.calling-conventions 1 -->

# Character Codes

ID: erm.framework.constants.character-codes
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/character-codes/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.character-codes 1 -->
## Purpose {#meaning}

The **Character Codes** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `ORD_0` {#const-ord-0} | `48` |
| `ORD_1` {#const-ord-1} | `49` |
| `ORD_2` {#const-ord-2} | `50` |
| `ORD_3` {#const-ord-3} | `51` |
| `ORD_4` {#const-ord-4} | `52` |
| `ORD_5` {#const-ord-5} | `53` |
| `ORD_6` {#const-ord-6} | `54` |
| `ORD_7` {#const-ord-7} | `55` |
| `ORD_8` {#const-ord-8} | `56` |
| `ORD_9` {#const-ord-9} | `57` |
| `ORD_LOWER_A` {#const-ord-lower-a} | `97` |
| `ORD_LOWER_B` {#const-ord-lower-b} | `98` |
| `ORD_LOWER_C` {#const-ord-lower-c} | `99` |
| `ORD_LOWER_D` {#const-ord-lower-d} | `100` |
| `ORD_LOWER_E` {#const-ord-lower-e} | `101` |
| `ORD_LOWER_F` {#const-ord-lower-f} | `102` |
| `ORD_LOWER_G` {#const-ord-lower-g} | `103` |
| `ORD_LOWER_H` {#const-ord-lower-h} | `104` |
| `ORD_LOWER_I` {#const-ord-lower-i} | `105` |
| `ORD_LOWER_J` {#const-ord-lower-j} | `106` |
| `ORD_LOWER_K` {#const-ord-lower-k} | `107` |
| `ORD_LOWER_L` {#const-ord-lower-l} | `108` |
| `ORD_LOWER_M` {#const-ord-lower-m} | `109` |
| `ORD_LOWER_N` {#const-ord-lower-n} | `110` |
| `ORD_LOWER_O` {#const-ord-lower-o} | `111` |
| `ORD_LOWER_P` {#const-ord-lower-p} | `112` |
| `ORD_LOWER_Q` {#const-ord-lower-q} | `113` |
| `ORD_LOWER_R` {#const-ord-lower-r} | `114` |
| `ORD_LOWER_S` {#const-ord-lower-s} | `115` |
| `ORD_LOWER_T` {#const-ord-lower-t} | `116` |
| `ORD_LOWER_U` {#const-ord-lower-u} | `117` |
| `ORD_LOWER_V` {#const-ord-lower-v} | `118` |
| `ORD_LOWER_W` {#const-ord-lower-w} | `119` |
| `ORD_LOWER_X` {#const-ord-lower-x} | `120` |
| `ORD_LOWER_Y` {#const-ord-lower-y} | `121` |
| `ORD_LOWER_Z` {#const-ord-lower-z} | `122` |
| `ORD_UPPER_A` {#const-ord-upper-a} | `65` |
| `ORD_UPPER_B` {#const-ord-upper-b} | `66` |
| `ORD_UPPER_C` {#const-ord-upper-c} | `67` |
| `ORD_UPPER_D` {#const-ord-upper-d} | `68` |
| `ORD_UPPER_E` {#const-ord-upper-e} | `69` |
| `ORD_UPPER_F` {#const-ord-upper-f} | `70` |
| `ORD_UPPER_G` {#const-ord-upper-g} | `71` |
| `ORD_UPPER_H` {#const-ord-upper-h} | `72` |
| `ORD_UPPER_I` {#const-ord-upper-i} | `73` |
| `ORD_UPPER_J` {#const-ord-upper-j} | `74` |
| `ORD_UPPER_K` {#const-ord-upper-k} | `75` |
| `ORD_UPPER_L` {#const-ord-upper-l} | `76` |
| `ORD_UPPER_M` {#const-ord-upper-m} | `77` |
| `ORD_UPPER_N` {#const-ord-upper-n} | `78` |
| `ORD_UPPER_O` {#const-ord-upper-o} | `79` |
| `ORD_UPPER_P` {#const-ord-upper-p} | `80` |
| `ORD_UPPER_Q` {#const-ord-upper-q} | `81` |
| `ORD_UPPER_R` {#const-ord-upper-r} | `82` |
| `ORD_UPPER_S` {#const-ord-upper-s} | `83` |
| `ORD_UPPER_T` {#const-ord-upper-t} | `84` |
| `ORD_UPPER_U` {#const-ord-upper-u} | `85` |
| `ORD_UPPER_V` {#const-ord-upper-v} | `86` |
| `ORD_UPPER_W` {#const-ord-upper-w} | `87` |
| `ORD_UPPER_X` {#const-ord-upper-x} | `88` |
| `ORD_UPPER_Y` {#const-ord-upper-y} | `89` |
| `ORD_UPPER_Z` {#const-ord-upper-z} | `90` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.character-codes 1 -->

# Data Types

ID: erm.framework.constants.data-types
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/data-types/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.data-types 1 -->
## Purpose {#meaning}

The **Data Types** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `INT_MAX` {#const-int-max} | `2147483647` |
| `INT_MIN` {#const-int-min} | `-2147483648` |
| `INT32_MAX` {#const-int32-max} | `2147483647` |
| `INT32_MIN` {#const-int32-min} | `-2147483648` |
| `SIZEOF_BYTE` {#const-sizeof-byte} | `1` |
| `SIZEOF_WORD` {#const-sizeof-word} | `2` |
| `SIZEOF_DWORD` {#const-sizeof-dword} | `4` |
| `SIZEOF_INT` {#const-sizeof-int} | `4` |
| `SIZEOF_INT8` {#const-sizeof-int8} | `1` |
| `SIZEOF_UINT8` {#const-sizeof-uint8} | `1` |
| `SIZEOF_INT16` {#const-sizeof-int16} | `2` |
| `SIZEOF_UINT16` {#const-sizeof-uint16} | `2` |
| `SIZEOF_INT32` {#const-sizeof-int32} | `4` |
| `SIZEOF_UINT32` {#const-sizeof-uint32} | `4` |
| `SIZEOF_PTR` {#const-sizeof-ptr} | `4` |
| `SIZEOF_ZSTR` {#const-sizeof-zstr} | `512` |
| `SIZEOF_BATTLE_STACK_STRUCT` {#const-sizeof-battle-stack-struct} | `1352` |
| `SIZEOF_COMMANDER_STRUCT` {#const-sizeof-commander-struct} | `296` |
| `SIZEOF_SPELL_STRUCT` {#const-sizeof-spell-struct} | `136` |
| `SIZEOF_WIN32_FIND_DATA` {#const-sizeof-win32-find-data} | `320` |
| `SIZEOF_WIN32_FIND_DATA_IN_INTS` {#const-sizeof-win32-find-data-in-ints} | `80` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[OnBeforeBattle](../../functions/onbeforebattle/) · [OnBeforeBattleUniversal](../../functions/onbeforebattleuniversal/) · [Array_Move](../../functions/array-move/) · [Array_Copy](../../functions/array-copy/) · [Array_Merge](../../functions/array-merge/) · [Array_Slice](../../functions/array-slice/) · [Array_Shuffle](../../functions/array-shuffle/) · [Array_CountValue](../../functions/array-countvalue/) · [Array_IndexOf](../../functions/array-indexof/) · [MakeRngSeed](../../functions/makerngseed/) · [SplitMix32](../../functions/splitmix32/) · [FormatQuantity](../../functions/formatquantity/) · [GetModList](../../functions/getmodlist/) · [OnBattleReplay](../../functions/onbattlereplay/) · [MonCountToFuzzyText](../../functions/moncounttofuzzytext/)
<!-- llm:end erm.framework.constants.data-types 1 -->

# Dialog Action Types

ID: erm.framework.constants.dialog-action-types
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/dialog-action-types/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.dialog-action-types 1 -->
## Purpose {#meaning}

The **Dialog Action Types** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `DLG_ACTION_HOVER` {#const-dlg-action-hover} | `4` |
| `DLG_ACTION_INDLG_CLICK` {#const-dlg-action-indlg-click} | `512` |
| `DLG_ACTION_OUTDLG_CLICK` {#const-dlg-action-outdlg-click} | `8` |
| `DLG_ACTION_MOUSE_WHEEL` {#const-dlg-action-mouse-wheel} | `522` |
| `DLG_ACTION_KEY_PRESSED` {#const-dlg-action-key-pressed} | `256` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[CollectMouseEventData](../../functions/collectmouseeventdata/)
<!-- llm:end erm.framework.constants.dialog-action-types 1 -->

