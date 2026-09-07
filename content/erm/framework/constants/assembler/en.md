---
{"title":"Assembler","summary":"3 named values: assembler.","translationStatus":"reviewed"}
---

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
