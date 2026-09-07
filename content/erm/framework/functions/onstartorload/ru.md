---
{"title":"OnStartOrLoad","summary":"Обновляет maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. Имя maxArtifacId в исходнике без второй t.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Обновляет maxArtifacId, maxHeroId, maxMonsterId, maxSpellId. Имя maxArtifacId в исходнике без второй t.

## Контракт вызова {#signature}

```erm
!?FU(OnStartOrLoad);
```

## Состояние и зависимости {#context}

Глобальные переменные: [i^maxArtifacId^](../../globals/#global-i-maxartifacid) · [i^maxHeroId^](../../globals/#global-i-maxheroid) · [i^maxMonsterId^](../../globals/#global-i-maxmonsterid) · [i^maxSpellId^](../../globals/#global-i-maxspellid).

## Связанные функции {#calls}

[GetMaxArtifactId](../getmaxartifactid/) · [GetMaxHeroId](../getmaxheroid/) · [GetMaxMonsterId](../getmaxmonsterid/) · [GetMaxSpellId](../getmaxspellid/)

## Версия и статус {#provenance}

Статус: `event-handler`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 292–300. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.
