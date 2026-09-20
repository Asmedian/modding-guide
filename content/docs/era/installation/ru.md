---
{"title":"Установка ERA","summary":"Официальные способы установки, обновления и удаления ERA через Heroes Launcher и вручную.","translationStatus":"reviewed"}
---

## Установка игры {#installation}

Актуальный установочный пакет доступен в [релизах ERA](https://github.com/ERA-Projects/era-project-rus/releases/latest). Шаги ниже основаны на [официальном руководстве](https://github.com/ERA-Projects/era-project-rus/blob/main/README.md#-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8%D0%B3%D1%80%D1%8B).

### Через Heroes Launcher {#launcher-install}

1. [Скачайте Heroes Launcher](https://github.com/HeroesLauncher/heroeslauncher/releases) и установите его вне системной папки.
2. На вкладке ERA выберите рабочую Heroes III на базе Shadow of Death: SoD, Complete, MOP, WoG или HotA.
3. Укажите русский или английский язык и каталог установки. Дождитесь загрузки и распаковки.
4. В настройках HD-мода выберите язык и разрешение. Руководство рекомендует режим `stretchable 32-bit OpenGL by Verok`; при необходимости настройте твики.
5. Запустите игру кнопкой «Играть» в Heroes Launcher.

### Вручную {#manual-install}

1. Подготовьте рабочую Heroes III на базе Shadow of Death (SoD, Complete, MOP, WoG или HotA).
2. Создайте новую папку и скопируйте в неё все `.dll` из корня игры, папку `MP3`, а также папку `Data` с `H3bitmap.lod`, `H3sprite.lod`, `Heroes3.snd` и `VIDEO.VID`. Папку `Maps` можно скопировать по желанию.
3. Скачайте [последний релиз ERA](https://github.com/ERA-Projects/era-project-rus/releases/latest) и распакуйте его в подготовленную папку.
4. Запустите `Tools/install.bat` для установки набора модов или `Tools/Mod Manager/mmanager.cmd` для ручного выбора. Мод `WOG` обязателен.
5. Настройте HD-мод через `HD_Launcher.exe` и запустите игру через `h3era HD.exe`.

## Обновление игры {#update}

Согласно [официальной инструкции по обновлению](https://github.com/ERA-Projects/era-project-rus/blob/main/README.md#-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B3%D1%80%D1%8B), предпочтителен Heroes Launcher: откройте меню шестерёнки, выберите «Проверить обновления» и дождитесь установки.

Для ручного обновления скачайте актуальный релиз. Если какие-либо файлы были удалены из модов, предварительно удалите соответствующие папки модов. Затем распакуйте архив поверх установленной игры с заменой отличающихся файлов.

## Удаление игры {#uninstall}

В Heroes Launcher откройте меню шестерёнки, выберите «Удалить», при необходимости сохраните файлы базовой игры и подтвердите действие. При ручной установке удалите папку установленной игры. Эти варианты приведены в [официальном разделе удаления](https://github.com/ERA-Projects/era-project-rus/blob/main/README.md#%EF%B8%8F-%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B3%D1%80%D1%8B).
