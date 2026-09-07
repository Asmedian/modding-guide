---
{"title":"UpdateBattleVars","summary":"Refreshes BA/OW data in battle_: heroes, owners, quick/network/visible combat and side flags. Call after changing BA except creature composition. Normalizes a missing defender hero to NO_HERO.","translationStatus":"reviewed"}
---

## Purpose {#purpose}

Refreshes BA/OW data in battle_*: heroes, owners, quick/network/visible combat and side flags. Call after changing BA except creature composition. Normalizes a missing defender hero to NO_HERO.

## Call contract {#signature}

```erm
!!FU(UpdateBattleVars):P;
```

## State and dependencies {#context}

Named globals: [i^battle_x^](../../globals/#global-i-battle-x) · [i^battle_y^](../../globals/#global-i-battle-y) · [i^battle_z^](../../globals/#global-i-battle-z) · [i^battle_hero_vs_hero^](../../globals/#global-i-battle-hero-vs-hero) · [i^battle_hasHuman^](../../globals/#global-i-battle-hashuman) · [i^battle_humanOnly^](../../globals/#global-i-battle-humanonly) · [i^battle_aiOnly^](../../globals/#global-i-battle-aionly) · [i^battle_isQuick^](../../globals/#global-i-battle-isquick) · [i^battle_isVisible^](../../globals/#global-i-battle-isvisible) · [i^battle_isNetwork^](../../globals/#global-i-battle-isnetwork) · [i^battle_type^](../../globals/#global-i-battle-type) · [i^battle_owner_0^](../../globals/#global-i-battle-owner-0) · [i^battle_hero_0^](../../globals/#global-i-battle-hero-0) · [i^battle_ai_0^](../../globals/#global-i-battle-ai-0) · [i^battle_human_0^](../../globals/#global-i-battle-human-0) · [i^battle_remote_0^](../../globals/#global-i-battle-remote-0) · [i^battle_local_0^](../../globals/#global-i-battle-local-0) · [i^battle_localHuman_0^](../../globals/#global-i-battle-localhuman-0) · [i^battle_owner_1^](../../globals/#global-i-battle-owner-1) · [i^battle_hero_1^](../../globals/#global-i-battle-hero-1) · [i^battle_ai_1^](../../globals/#global-i-battle-ai-1) · [i^battle_human_1^](../../globals/#global-i-battle-human-1) · [i^battle_remote_1^](../../globals/#global-i-battle-remote-1) · [i^battle_local_1^](../../globals/#global-i-battle-local-1) · [i^battle_localHuman_1^](../../globals/#global-i-battle-localhuman-1).

## Version and status {#provenance}

Status: `public`. The complete block in `lib/9999 era - stdlib.erm`, lines 2848–2904, was examined. Framework declares ERA 3.9.15+. Behavior describes this snapshot; examples have not been separately executed in game.

## Constants used {#constants}

[BATTLE_TYPE_FLAG_LEFT_HAS_HERO](../../constants/battle-type-flags/#const-battle-type-flag-left-has-hero) · [BATTLE_TYPE_FLAG_LEFT_HAS_OWNER](../../constants/battle-type-flags/#const-battle-type-flag-left-has-owner) · [BATTLE_TYPE_FLAG_LEFT_IS_HUMAN](../../constants/battle-type-flags/#const-battle-type-flag-left-is-human) · [BATTLE_TYPE_FLAG_RIGHT_HAS_HERO](../../constants/battle-type-flags/#const-battle-type-flag-right-has-hero) · [BATTLE_TYPE_FLAG_RIGHT_HAS_OWNER](../../constants/battle-type-flags/#const-battle-type-flag-right-has-owner) · [BATTLE_TYPE_FLAG_RIGHT_IS_HUMAN](../../constants/battle-type-flags/#const-battle-type-flag-right-is-human) · [FALSE](../../constants/universal/#const-false) · [HERO_FIRST](../../constants/heroes/#const-hero-first) · [NO_DEFENDING_HERO](../../constants/heroes/#const-no-defending-hero) · [NO_HERO](../../constants/heroes/#const-no-hero) · [NO_OWNER](../../constants/players/#const-no-owner) · [TRUE](../../constants/universal/#const-true)
