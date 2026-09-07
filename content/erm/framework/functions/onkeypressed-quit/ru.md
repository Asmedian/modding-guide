---
{"title":"OnKeyPressed_Quit","summary":"Завершающий обработчик OnKeyPressed: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Завершающий обработчик OnKeyPressed: выполняет перечисленные ниже вызовы после основной цепочки. Не вызывайте его вручную: он завершает контекст Framework.

## Контракт вызова {#signature}

```erm
!?FU(OnKeyPressed_Quit);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `key` | выход / изменяемый |
| x2 | `preventDefault` | выход / изменяемый |

## Состояние и зависимости {#context}

Именованные глобальные переменные в теле не используются.

Вызовы экспорта: `GetGameState`.

## Связанные функции {#calls}

[RestorePrevKeyModsState](../restoreprevkeymodsstate/)

## Версия и статус {#provenance}

Статус: `quit-handler`. Исследован полный блок `lib_end/-9999 era - stdlib.erm`, строки 13–25. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[DLG_ADVMAP](../../constants/dialogs/#const-dlg-advmap) · [DLG_BATTLE](../../constants/dialogs/#const-dlg-battle) · [DLG_HERO_MEETING_SCREEN](../../constants/dialogs/#const-dlg-hero-meeting-screen) · [DLG_HERO_SCREEN](../../constants/dialogs/#const-dlg-hero-screen) · [DLG_TOWN_SCREEN](../../constants/dialogs/#const-dlg-town-screen)
