---
{"title":"ScanDir","summary":"Очищает переданный строковый массив и заполняет именами без . и ... itemsType — SCAN_ (по умолчанию файлы и каталоги), fullPaths — добавлять путь (FALSE). При раннем выходе после FindFirstFileA снимок не восстанавливает v1.","translationStatus":"reviewed"}
---

## Назначение {#purpose}

Очищает переданный строковый массив и заполняет именами без . и ... itemsType — SCAN_* (по умолчанию файлы и каталоги), fullPaths — добавлять путь (FALSE). При раннем выходе после FindFirstFileA снимок не восстанавливает v1.

## Контракт вызова {#signature}

```erm
!!FU(ScanDir):P(dirPathPtr)/(fileList)/(itemsType)/(fullPaths);
```

## Порядок параметров {#parameters}

| Позиция | Имя в исходнике | Использование |
| --- | --- | --- |
| x1 | `dirPathPtr` | вход |
| x2 | `fileList` | вход |
| x3 | `itemsType` | вход |
| x4 | `fullPaths` | вход |

## Состояние и зависимости {#context}

Глобальные переменные: —.
  !!FU:E;
!!en;

!!VR(savedV1:y):Sv1;
!#VA(foundData[SIZEOF_WIN32_FIND_DATA_IN_INTS]:y);

!!SN:M(fileList)/0;

!!SN:B?(foundData)/?(foundDataAddr:y);
!!VR(fileAttrsAddr:y):S(foundDataAddr) +(STRUCT_WIN32_FIND_DATA_ATTRS);
!!VR(fileNameBuf:y):S(foundDataAddr) +(STRUCT_WIN32_FIND_DATA_FILENAME);

!!SN:F^`.

Вызовы экспорта: `FindClose`, `FindFirstFileA`, `FindNextFileA`, `ShowErmError`.

## Версия и статус {#provenance}

Статус: `public`. Исследован полный блок `lib/9999 era - stdlib.erm`, строки 1870–1931. Заголовок Framework требует ERA 3.9.15+. Поведение описано по этому снимку; игровое выполнение примеров отдельно не проверялось.

## Используемые константы {#constants}

[FALSE](../../constants/universal/#const-false) · [FILE_ATTRIBUTE_DIRECTORY](../../constants/win32-api/#const-file-attribute-directory) · [INVALID_HANDLE_VALUE](../../constants/win32-api/#const-invalid-handle-value) · [M_STR](../../constants/erm-commands/#const-m-str) · [SCAN_DIRS_ONLY](../../constants/special-enums/#const-scan-dirs-only) · [SCAN_FILES_ONLY](../../constants/special-enums/#const-scan-files-only) · [STRUCT_WIN32_FIND_DATA_ATTRS](../../constants/game-structures/#const-struct-win32-find-data-attrs) · [STRUCT_WIN32_FIND_DATA_FILENAME](../../constants/game-structures/#const-struct-win32-find-data-filename) · [TRUE](../../constants/universal/#const-true)
