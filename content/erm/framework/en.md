---
{"title":"ERA ERM Framework","summary":"Standard helper library, event context and named constants.","translationStatus":"reviewed"}
---

## Files and load order {#layout}

Framework requires ERA 3.9.15+. Place the three lib files in Data/s/lib and the final file in Data/s/lib_end, preserving names. Constants and initial handlers must load before mod scripts; final handlers must load afterwards. Do not copy individual functions without their dependencies.

## References {#reference}

[185 functions and handlers](./functions/) · [Events](./events/) · [Globals](./globals/) · [1,838 constants](./constants/)

## Event-local array {#example}

The helpers below create three integers, change the second item, and read the second item; the default lifetime is local.

```erm
ZVSE2
!?FU(MyMod_ArrayExample);
!!FU(NewIntArray):P3/10/?(items:y);
!!SN:V(items)/1/20;
!!SN:V(items)/1/?(second:y);
```

## Implementation status {#review}

The catalog distinguishes public, internal, event-handler, quit-handler and requires-review. The last status explains a concrete discrepancy between code and stated behavior. For example, EnableErrors sets the error-muting flag in the supplied snapshot. This documents the implementation; it does not patch the library.
