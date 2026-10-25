# ERA ERM Framework constants

ID: erm.framework.constants
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm, era-framework:lib-9999-era---key-codes.erm, era-framework:lib-9999-era---stdlib.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants 1 -->
## How to use {#usage}

Use `(RES_GOLD)` instead of a numeric resource ID when the Framework constants file is installed. Names are case-sensitive. Declare your own constants with a unique prefix and uppercase letters. Zero may identify a real entity and -1 may be a sentinel; each group determines the meaning.

## Groups {#groups}

- [Universal](universal/) — 4
- [Erm Commands](erm-commands/) — 9
- [Mouse Clicks](mouse-clicks/) — 5
- [Mouse Click Subtypes](mouse-click-subtypes/) — 4
- [Mouse Wheel Subtypes](mouse-wheel-subtypes/) — 2
- [Players](players/) — 15
- [Player Bits](player-bits/) — 8
- [Resources](resources/) — 13
- [Monster Flags](monster-flags/) — 32
- [Hero Skills](hero-skills/) — 41
- [Hero Classes](hero-classes/) — 20
- [Heroes](heroes/) — 164
- [Monsters](monsters/) — 205
- [Monster Aggression Level](monster-aggression-level/) — 10
- [Spell Schools](spell-schools/) — 4
- [Spell Texts For Sn H](spell-texts-for-sn-h/) — 7
- [Spells](spells/) — 78
- [Hero Artifact Slots](hero-artifact-slots/) — 28
- [Hero Artifact Levels](hero-artifact-levels/) — 6
- [Artifacts](artifacts/) — 177
- [Artifact Modifiers](artfiact-modifiers/) — 1
- [Quest Types](quest-types/) — 10
- [Quest Rewards](quest-rewards/) — 11
- [Object Types](object-types/) — 230
- [Towns](towns/) — 15
- [Erm Flags](erm-flags/) — 4
- [Wog Options](wog-options/) — 22
- [Army Slots](army-slots/) — 9
- [Battle](battle/) — 18
- [Battle Type Flags](battle-type-flags/) — 6
- [Battle Actions](battle-actions/) — 14
- [Battle Hexes](battle-hexes/) — 3
- [Bm:G Field Offsets](bm-g-field-offsets/) — 14
- [Stack Experience](stack-experience/) — 1
- [Game Limits](game-limits/) — 12
- [Game Settings](game-settings/) — 39
- [Game Types](game-types/) — 6
- [Calling Conventions](calling-conventions/) — 11
- [Un:C Data Types](un-c-data-types/) — 8
- [Data Types](data-types/) — 21
- [Dialogs](dialogs/) — 18
- [Dialog Action Types](dialog-action-types/) — 5
- [Dialog Item Ids](dialog-item-ids/) — 92
- [H3 Message Dialog Types](h3-message-dialog-types/) — 5
- [H3 Dialog Text Alignment](h3-dialog-text-alignment/) — 6
- [H3 Dialog Commands](h3-dialog-commands/) — 5
- [H3 Dialog Picture Types](h3-dialog-picture-types/) — 47
- [Era Chat Event](era-chat-event/) — 6
- [Useful Addresses](useful-addresses/) — 6
- [Bits](bits/) — 32
- [Bit Masks](bit-masks/) — 32
- [Bit Sizes](bit-sizes/) — 5
- [Game Structures](game-structures/) — 26
- [Game Functions](game-functions/) — 2
- [Game Managers](game-managers/) — 10
- [Special Enums](special-enums/) — 12
- [Win32 Api](win32-api/) — 3
- [Assembler](assembler/) — 3
- [Character Codes](character-codes/) — 62
- [Key Codes](key-codes/) — 171
- [Radio Dialogs](radio-dialogs/) — 3

## Registry contents {#snapshot}

`9999 era - consts.erm` contains 1664 definitions; `9999 era - key codes.erm` contains 171. Another 3 definitions are in stdlib. Internal constants have their own group; memory addresses require version checks.
<!-- llm:end erm.framework.constants 1 -->

# Army Slots

ID: erm.framework.constants.army-slots
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/army-slots/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.army-slots 1 -->
## Purpose {#meaning}

The **Army Slots** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `ARMY_SLOT_FIRST` {#const-army-slot-first} | `0` |
| `ARMY_SLOT_0` {#const-army-slot-0} | `0` |
| `ARMY_SLOT_1` {#const-army-slot-1} | `1` |
| `ARMY_SLOT_2` {#const-army-slot-2} | `2` |
| `ARMY_SLOT_3` {#const-army-slot-3} | `3` |
| `ARMY_SLOT_4` {#const-army-slot-4} | `4` |
| `ARMY_SLOT_5` {#const-army-slot-5} | `5` |
| `ARMY_SLOT_6` {#const-army-slot-6} | `6` |
| `ARMY_SLOT_LAST` {#const-army-slot-last} | `6` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.army-slots 1 -->

# Artifact Modifiers

ID: erm.framework.constants.artfiact-modifiers
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/artfiact-modifiers/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.artfiact-modifiers 1 -->
## Purpose {#meaning}

The **Artifact Modifiers** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `NO_ART_MOD` {#const-no-art-mod} | `-1` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[ChangeArtModAtSlot](../../functions/changeartmodatslot/) · [AddArtToHero](../../functions/addarttohero/) · [EquipArtToSlot](../../functions/equiparttoslot/)
<!-- llm:end erm.framework.constants.artfiact-modifiers 1 -->

# Artifacts

ID: erm.framework.constants.artifacts
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/artifacts/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.artifacts 1 -->
## Purpose {#meaning}

The **Artifacts** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `NO_ART` {#const-no-art} | `-1` |
| `ANY_ART` {#const-any-art} | `-1` |
| `ART_FIRST` {#const-art-first} | `0` |
| `ART_SPELL_BOOK` {#const-art-spell-book} | `0` |
| `ART_SPELL_SCROLL` {#const-art-spell-scroll} | `1` |
| `ART_GRAIL` {#const-art-grail} | `2` |
| `ART_CATAPULT` {#const-art-catapult} | `3` |
| `ART_BALLISTA` {#const-art-ballista} | `4` |
| `ART_AMMO_CART` {#const-art-ammo-cart} | `5` |
| `ART_FIRST_AID_TENT` {#const-art-first-aid-tent} | `6` |
| `ART_CENTAUR_AXE` {#const-art-centaur-axe} | `7` |
| `ART_BLACKSHARD_OF_THE_DEAD_KNIGHT` {#const-art-blackshard-of-the-dead-knight} | `8` |
| `ART_GREATER_GNOLLS_FLAIL` {#const-art-greater-gnolls-flail} | `9` |
| `ART_OGRES_CLUB_OF_HAVOC` {#const-art-ogres-club-of-havoc} | `10` |
| `ART_SWORD_OF_HELLFIRE` {#const-art-sword-of-hellfire} | `11` |
| `ART_TITANS_GLADIUS` {#const-art-titans-gladius} | `12` |
| `ART_SHIELD_OF_THE_DWARVEN_LORDS` {#const-art-shield-of-the-dwarven-lords} | `13` |
| `ART_SHIELD_OF_THE_YAWNING_DEAD` {#const-art-shield-of-the-yawning-dead} | `14` |
| `ART_BUCKLER_OF_THE_GNOLL_KING` {#const-art-buckler-of-the-gnoll-king} | `15` |
| `ART_TARG_OF_THE_RAMPAGING_OGRE` {#const-art-targ-of-the-rampaging-ogre} | `16` |
| `ART_SHIELD_OF_THE_DAMNED` {#const-art-shield-of-the-damned} | `17` |
| `ART_SENTINELS_SHIELD` {#const-art-sentinels-shield} | `18` |
| `ART_HELM_OF_THE_ALABASTER_UNICORN` {#const-art-helm-of-the-alabaster-unicorn} | `19` |
| `ART_SKULL_HELMET` {#const-art-skull-helmet} | `20` |
| `ART_HELM_OF_CHAOS` {#const-art-helm-of-chaos} | `21` |
| `ART_CROWN_OF_THE_SUPREME_MAGI` {#const-art-crown-of-the-supreme-magi} | `22` |
| `ART_HELLSTORM_HELMET` {#const-art-hellstorm-helmet} | `23` |
| `ART_THUNDER_HELMET` {#const-art-thunder-helmet} | `24` |
| `ART_BREASTPLATE_OF_PETRIFIED_WOOD` {#const-art-breastplate-of-petrified-wood} | `25` |
| `ART_RIB_CAGE` {#const-art-rib-cage} | `26` |
| `ART_SCALES_OF_THE_GREATER_BASILISK` {#const-art-scales-of-the-greater-basilisk} | `27` |
| `ART_TUNIC_OF_THE_CYCLOPS_KING` {#const-art-tunic-of-the-cyclops-king} | `28` |
| `ART_BREASTPLATE_OF_BRIMSTONE` {#const-art-breastplate-of-brimstone} | `29` |
| `ART_TITANS_CUIRASS` {#const-art-titans-cuirass} | `30` |
| `ART_ARMOR_OF_WONDER` {#const-art-armor-of-wonder} | `31` |
| `ART_SANDALS_OF_THE_SAINT` {#const-art-sandals-of-the-saint} | `32` |
| `ART_CELESTIAL_NECKLACE_OF_BLISS` {#const-art-celestial-necklace-of-bliss} | `33` |
| `ART_LIONS_SHIELD_OF_COURAGE` {#const-art-lions-shield-of-courage} | `34` |
| `ART_SWORD_OF_JUDGEMENT` {#const-art-sword-of-judgement} | `35` |
| `ART_HELM_OF_HEAVENLY_ENLIGHTENMENT` {#const-art-helm-of-heavenly-enlightenment} | `36` |
| `ART_QUIET_EYE_OF_THE_DRAGON` {#const-art-quiet-eye-of-the-dragon} | `37` |
| `ART_RED_DRAGON_FLAME_TONGUE` {#const-art-red-dragon-flame-tongue} | `38` |
| `ART_DRAGON_SCALE_SHIELD` {#const-art-dragon-scale-shield} | `39` |
| `ART_DRAGON_SCALE_ARMOR` {#const-art-dragon-scale-armor} | `40` |
| `ART_DRAGONBONE_GREAVES` {#const-art-dragonbone-greaves} | `41` |
| `ART_DRAGON_WING_TABARD` {#const-art-dragon-wing-tabard} | `42` |
| `ART_NECKLACE_OF_DRAGONTEETH` {#const-art-necklace-of-dragonteeth} | `43` |
| `ART_CROWN_OF_DRAGONTOOTH` {#const-art-crown-of-dragontooth} | `44` |
| `ART_STILL_EYE_OF_THE_DRAGON` {#const-art-still-eye-of-the-dragon} | `45` |
| `ART_CLOVER_OF_FORTUNE` {#const-art-clover-of-fortune} | `46` |
| `ART_CARDS_OF_PROPHECY` {#const-art-cards-of-prophecy} | `47` |
| `ART_LADYBIRD_OF_LUCK` {#const-art-ladybird-of-luck} | `48` |
| `ART_BADGE_OF_COURAGE` {#const-art-badge-of-courage} | `49` |
| `ART_CREST_OF_VALOR` {#const-art-crest-of-valor} | `50` |
| `ART_GLYPH_OF_GALLANTRY` {#const-art-glyph-of-gallantry} | `51` |
| `ART_SPECULUM` {#const-art-speculum} | `52` |
| `ART_SPYGLASS` {#const-art-spyglass} | `53` |
| `ART_AMULET_OF_THE_UNDERTAKER` {#const-art-amulet-of-the-undertaker} | `54` |
| `ART_VAMPIRES_COWL` {#const-art-vampires-cowl} | `55` |
| `ART_DEAD_MANS_BOOTS` {#const-art-dead-mans-boots} | `56` |
| `ART_GARNITURE_OF_INTERFERENCE` {#const-art-garniture-of-interference} | `57` |
| `ART_SURCOAT_OF_COUNTERPOISE` {#const-art-surcoat-of-counterpoise} | `58` |
| `ART_BOOTS_OF_POLARITY` {#const-art-boots-of-polarity} | `59` |
| `ART_BOW_OF_ELVEN_CHERRYWOOD` {#const-art-bow-of-elven-cherrywood} | `60` |
| `ART_BOWSTRING_OF_THE_UNICORNS_MANE` {#const-art-bowstring-of-the-unicorns-mane} | `61` |
| `ART_ANGEL_FEATHER_ARROWS` {#const-art-angel-feather-arrows} | `62` |
| `ART_BIRD_OF_PERCEPTION` {#const-art-bird-of-perception} | `63` |
| `ART_STOIC_WATCHMAN` {#const-art-stoic-watchman} | `64` |
| `ART_EMBLEM_OF_COGNIZANCE` {#const-art-emblem-of-cognizance} | `65` |
| `ART_STATESMANS_MEDAL` {#const-art-statesmans-medal} | `66` |
| `ART_DIPLOMATS_RING` {#const-art-diplomats-ring} | `67` |
| `ART_AMBASSADORS_SASH` {#const-art-ambassadors-sash} | `68` |
| `ART_RING_OF_THE_WAYFARER` {#const-art-ring-of-the-wayfarer} | `69` |
| `ART_EQUESTRIANS_GLOVES` {#const-art-equestrians-gloves} | `70` |
| `ART_NECKLACE_OF_OCEAN_GUIDANCE` {#const-art-necklace-of-ocean-guidance} | `71` |
| `ART_ANGEL_WINGS` {#const-art-angel-wings} | `72` |
| `ART_CHARM_OF_MANA` {#const-art-charm-of-mana} | `73` |
| `ART_TALISMAN_OF_MANA` {#const-art-talisman-of-mana} | `74` |
| `ART_MYSTIC_ORB_OF_MANA` {#const-art-mystic-orb-of-mana} | `75` |
| `ART_COLLAR_OF_CONJURING` {#const-art-collar-of-conjuring} | `76` |
| `ART_RING_OF_CONJURING` {#const-art-ring-of-conjuring} | `77` |
| `ART_CAPE_OF_CONJURING` {#const-art-cape-of-conjuring} | `78` |
| `ART_ORB_OF_THE_FIRMAMENT` {#const-art-orb-of-the-firmament} | `79` |
| `ART_ORB_OF_SILT` {#const-art-orb-of-silt} | `80` |
| `ART_ORB_OF_TEMPESTUOUS_FIRE` {#const-art-orb-of-tempestuous-fire} | `81` |
| `ART_ORB_OF_DRIVING_RAIN` {#const-art-orb-of-driving-rain} | `82` |
| `ART_RECANTERS_CLOAK` {#const-art-recanters-cloak} | `83` |
| `ART_SPIRIT_OF_OPPRESSION` {#const-art-spirit-of-oppression} | `84` |
| `ART_HOURGLASS_OF_THE_EVIL_HOUR` {#const-art-hourglass-of-the-evil-hour} | `85` |
| `ART_TOME_OF_FIRE_MAGIC` {#const-art-tome-of-fire-magic} | `86` |
| `ART_TOME_OF_AIR_MAGIC` {#const-art-tome-of-air-magic} | `87` |
| `ART_TOME_OF_WATER_MAGIC` {#const-art-tome-of-water-magic} | `88` |
| `ART_TOME_OF_EARTH_MAGIC` {#const-art-tome-of-earth-magic} | `89` |
| `ART_BOOTS_OF_LEVITATION` {#const-art-boots-of-levitation} | `90` |
| `ART_GOLDEN_BOW` {#const-art-golden-bow} | `91` |
| `ART_SPHERE_OF_PERMANENCE` {#const-art-sphere-of-permanence} | `92` |
| `ART_ORB_OF_VULNERABILITY` {#const-art-orb-of-vulnerability} | `93` |
| `ART_RING_OF_VITALITY` {#const-art-ring-of-vitality} | `94` |
| `ART_RING_OF_LIFE` {#const-art-ring-of-life} | `95` |
| `ART_VIAL_OF_LIFEBLOOD` {#const-art-vial-of-lifeblood} | `96` |
| `ART_NECKLACE_OF_SWIFTNESS` {#const-art-necklace-of-swiftness} | `97` |
| `ART_BOOTS_OF_SPEED` {#const-art-boots-of-speed} | `98` |
| `ART_CAPE_OF_VELOCITY` {#const-art-cape-of-velocity} | `99` |
| `ART_PENDANT_OF_DISPASSION` {#const-art-pendant-of-dispassion} | `100` |
| `ART_PENDANT_OF_SECOND_SIGHT` {#const-art-pendant-of-second-sight} | `101` |
| `ART_PENDANT_OF_HOLINESS` {#const-art-pendant-of-holiness} | `102` |
| `ART_PENDANT_OF_LIFE` {#const-art-pendant-of-life} | `103` |
| `ART_PENDANT_OF_DEATH` {#const-art-pendant-of-death} | `104` |
| `ART_PENDANT_OF_FREE_WILL` {#const-art-pendant-of-free-will} | `105` |
| `ART_PENDANT_OF_NEGATIVITY` {#const-art-pendant-of-negativity} | `106` |
| `ART_PENDANT_OF_TOTAL_RECALL` {#const-art-pendant-of-total-recall} | `107` |
| `ART_PENDANT_OF_COURAGE` {#const-art-pendant-of-courage} | `108` |
| `ART_EVERFLOWING_CRYSTAL_CLOAK` {#const-art-everflowing-crystal-cloak} | `109` |
| `ART_RING_OF_INFINITE_GEMS` {#const-art-ring-of-infinite-gems} | `110` |
| `ART_EVERPOURING_VIAL_OF_MERCURY` {#const-art-everpouring-vial-of-mercury} | `111` |
| `ART_INEXHAUSTIBLE_CART_OF_ORE` {#const-art-inexhaustible-cart-of-ore} | `112` |
| `ART_EVERSMOKING_RING_OF_SULFUR` {#const-art-eversmoking-ring-of-sulfur} | `113` |
| `ART_INEXHAUSTIBLE_CART_OF_LUMBER` {#const-art-inexhaustible-cart-of-lumber} | `114` |
| `ART_ENDLESS_SACK_OF_GOLD` {#const-art-endless-sack-of-gold} | `115` |
| `ART_ENDLESS_BAG_OF_GOLD` {#const-art-endless-bag-of-gold} | `116` |
| `ART_ENDLESS_PURSE_OF_GOLD` {#const-art-endless-purse-of-gold} | `117` |
| `ART_LEGS_OF_LEGION` {#const-art-legs-of-legion} | `118` |
| `ART_LOINS_OF_LEGION` {#const-art-loins-of-legion} | `119` |
| `ART_TORSO_OF_LEGION` {#const-art-torso-of-legion} | `120` |
| `ART_ARMS_OF_LEGION` {#const-art-arms-of-legion} | `121` |
| `ART_HEAD_OF_LEGION` {#const-art-head-of-legion} | `122` |
| `ART_SEA_CAPTAINS_HAT` {#const-art-sea-captains-hat} | `123` |
| `ART_SPELLBINDERS_HAT` {#const-art-spellbinders-hat} | `124` |
| `ART_SHACKLES_OF_WAR` {#const-art-shackles-of-war} | `125` |
| `ART_ORB_OF_INHIBITION` {#const-art-orb-of-inhibition} | `126` |
| `ART_VIAL_OF_DRAGON_BLOOD` {#const-art-vial-of-dragon-blood} | `127` |
| `ART_ARMAGEDDONS_BLADE` {#const-art-armageddons-blade} | `128` |
| `ART_ANGELIC_ALLIANCE` {#const-art-angelic-alliance} | `129` |
| `ART_CLOAK_OF_THE_UNDEAD_KING` {#const-art-cloak-of-the-undead-king} | `130` |
| `ART_ELIXIR_OF_LIFE` {#const-art-elixir-of-life} | `131` |
| `ART_ARMOR_OF_THE_DAMNED` {#const-art-armor-of-the-damned} | `132` |
| `ART_STATUE_OF_LEGION` {#const-art-statue-of-legion} | `133` |
| `ART_POWER_OF_THE_DRAGON_FATHER` {#const-art-power-of-the-dragon-father} | `134` |
| `ART_TITANS_THUNDER` {#const-art-titans-thunder} | `135` |
| `ART_ADMIRALS_HAT` {#const-art-admirals-hat} | `136` |
| `ART_BOW_OF_THE_SHARPSHOOTER` {#const-art-bow-of-the-sharpshooter} | `137` |
| `ART_WIZARDS_WELL` {#const-art-wizards-well} | `138` |
| `ART_RING_OF_THE_MAGI` {#const-art-ring-of-the-magi} | `139` |
| `ART_CORNUCOPIA` {#const-art-cornucopia} | `140` |
| `ART_MAGIC_WAND` {#const-art-magic-wand} | `141` |
| `ART_GOLD_TOWER_ARROW` {#const-art-gold-tower-arrow} | `142` |
| `ART_MONSTERS_POWER` {#const-art-monsters-power} | `143` |
| `ART_HIGHLIGHTED_SLOT` {#const-art-highlighted-slot} | `144` |
| `ART_ARTIFACT_LOCK` {#const-art-artifact-lock} | `145` |
| `ART_AXE_OF_SMASHING` {#const-art-axe-of-smashing} | `146` |
| `ART_MITHRIL_MAIL` {#const-art-mithril-mail} | `147` |
| `ART_SWORD_OF_SHARPNESS` {#const-art-sword-of-sharpness} | `148` |
| `ART_HELM_OF_IMMORTALITY` {#const-art-helm-of-immortality} | `149` |
| `ART_PENDANT_OF_SORCERY` {#const-art-pendant-of-sorcery} | `150` |
| `ART_BOOTS_OF_HASTE` {#const-art-boots-of-haste} | `151` |
| `ART_BOW_OF_SEEKING` {#const-art-bow-of-seeking} | `152` |
| `ART_DRAGON_EYE_RING` {#const-art-dragon-eye-ring} | `153` |
| `ART_HARDENED_SHIELD` {#const-art-hardened-shield} | `154` |
| `ART_SLAVAS_RING_OF_POWER` {#const-art-slavas-ring-of-power} | `155` |
| `ART_WARLORDS_BANNER` {#const-art-warlords-banner} | `156` |
| `ART_CRIMSON_SHIELD_OF_RETRIBUTION` {#const-art-crimson-shield-of-retribution} | `157` |
| `ART_BARBARIAN_LORDS_AXE_OF_FEROCITY` {#const-art-barbarian-lords-axe-of-ferocity} | `158` |
| `ART_DRAGONHEART` {#const-art-dragonheart} | `159` |
| `ART_GATE_KEY` {#const-art-gate-key} | `160` |
| `ART_BLANK_HELMET` {#const-art-blank-helmet} | `161` |
| `ART_BLANK_SWORD` {#const-art-blank-sword} | `162` |
| `ART_BLANK_SHIELD` {#const-art-blank-shield} | `163` |
| `ART_BLANK_HORNED_RING` {#const-art-blank-horned-ring} | `164` |
| `ART_BLANK_GEMMED_RING` {#const-art-blank-gemmed-ring} | `165` |
| `ART_BLANK_NECK_BROACH` {#const-art-blank-neck-broach} | `166` |
| `ART_BLANK_ARMOR` {#const-art-blank-armor} | `167` |
| `ART_BLANK_SURCOAT` {#const-art-blank-surcoat} | `168` |
| `ART_BLANK_BOOTS` {#const-art-blank-boots} | `169` |
| `ART_BLANK_HORN` {#const-art-blank-horn} | `170` |
| `ART_LAST_WOG` {#const-art-last-wog} | `170` |
| `ART_META_SPELLBOOK` {#const-art-meta-spellbook} | `1000` |
| `ART_META_SPELL_SCROLL_FIRST` {#const-art-meta-spell-scroll-first} | `1001` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[GetHeroPrimarySkillsWithoutArts](../../functions/getheroprimaryskillswithoutarts/) · [GetMaxArtifactId](../../functions/getmaxartifactid/)
<!-- llm:end erm.framework.constants.artifacts 1 -->

# Assembler

ID: erm.framework.constants.assembler
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/assembler/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.assembler 1 -->
## Purpose {#meaning}

The **Assembler** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `OPCODE_NOP_1` {#const-opcode-nop-1} | `144` |
| `OPCODE_NOP_2` {#const-opcode-nop-2} | `37008` |
| `OPCODE_NOP_4` {#const-opcode-nop-4} | `-1869574000` |

## Implementation dependency {#compatibility}

This group contains internal values, offsets, or addresses. They describe the supplied implementation and do not guarantee compatibility with another executable or a plugin replacing a structure. A named constant does not make address access safe without checking the structure’s lifetime.

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.assembler 1 -->

# Battle Actions

ID: erm.framework.constants.battle-actions
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/battle-actions/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.battle-actions 1 -->
## Purpose {#meaning}

The **Battle Actions** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `NO_BATTLE_ACTION` {#const-no-battle-action} | `-1` |
| `BATTLE_ACTION_CANCEL` {#const-battle-action-cancel} | `0` |
| `BATTLE_ACTION_HERO_CAST` {#const-battle-action-hero-cast} | `1` |
| `BATTLE_ACTION_WALK` {#const-battle-action-walk} | `2` |
| `BATTLE_ACTION_DEFEND` {#const-battle-action-defend} | `3` |
| `BATTLE_ACTION_RETREAT` {#const-battle-action-retreat} | `4` |
| `BATTLE_ACTION_SURRENDER` {#const-battle-action-surrender} | `5` |
| `BATTLE_ACTION_WALK_AND_ATTACK` {#const-battle-action-walk-and-attack} | `6` |
| `BATTLE_ACTION_SHOOT` {#const-battle-action-shoot} | `7` |
| `BATTLE_ACTION_WAIT` {#const-battle-action-wait} | `8` |
| `BATTLE_ACTION_CATAPULT` {#const-battle-action-catapult} | `9` |
| `BATTLE_ACTION_MONSTER_CAST` {#const-battle-action-monster-cast} | `10` |
| `BATTLE_ACTION_TENT_HEAL` {#const-battle-action-tent-heal} | `11` |
| `BATTLE_ACTION_SKIP` {#const-battle-action-skip} | `12` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.battle-actions 1 -->

# Battle Hexes

ID: erm.framework.constants.battle-hexes
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/battle-hexes/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.battle-hexes 1 -->
## Purpose {#meaning}

The **Battle Hexes** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BATTLE_HEX_FIRST` {#const-battle-hex-first} | `0` |
| `BATTLE_HEX_LAST` {#const-battle-hex-last} | `186` |
| `BATTLE_HEXES_PER_ROW` {#const-battle-hexes-per-row} | `17` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)
<!-- llm:end erm.framework.constants.battle-hexes 1 -->

# Battle Type Flags

ID: erm.framework.constants.battle-type-flags
URL: https://asmedian.github.io/modding-guide/en/erm/framework/constants/battle-type-flags/
Part: 1/1
Source references: era-framework:lib-9999-era---consts.erm
Resolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.

<!-- llm:body erm.framework.constants.battle-type-flags 1 -->
## Purpose {#meaning}

The **Battle Type Flags** group from the supplied Framework. Names and values below correspond to `!#DC` definitions in the supplied files. Use a constant as `(NAME)` in ERM; it does not allocate a variable.

## Values {#values}

| Constant | Value |
| --- | --- |
| `BATTLE_TYPE_FLAG_LEFT_IS_HUMAN` {#const-battle-type-flag-left-is-human} | `1` |
| `BATTLE_TYPE_FLAG_RIGHT_IS_HUMAN` {#const-battle-type-flag-right-is-human} | `2` |
| `BATTLE_TYPE_FLAG_LEFT_HAS_OWNER` {#const-battle-type-flag-left-has-owner} | `4` |
| `BATTLE_TYPE_FLAG_RIGHT_HAS_OWNER` {#const-battle-type-flag-right-has-owner} | `8` |
| `BATTLE_TYPE_FLAG_LEFT_HAS_HERO` {#const-battle-type-flag-left-has-hero} | `16` |
| `BATTLE_TYPE_FLAG_RIGHT_HAS_HERO` {#const-battle-type-flag-right-has-hero} | `32` |

## All groups {#related}

[Constant catalog](../) · [Variables](../../../variables/)

## Used by Framework {#used-by}

[UpdateBattleVars](../../functions/updatebattlevars/)
<!-- llm:end erm.framework.constants.battle-type-flags 1 -->

