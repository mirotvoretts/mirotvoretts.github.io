---
title: 'Computer Systems: A Programmer''s Perspective'
author: Bryant and O'Hallaron
kind: book
status: Revisiting
tags: [Systems, Architecture, Performance]
quote: 'A program is a physical process, not just a mathematical object.'
review: >-
  The book that connected the code I write to the machine that runs it.
  Caches, virtual memory, linking, and the memory hierarchy stop being trivia
  and become the levers you pull to make software fast.
---

Every performance instinct I trust traces back to a chapter in this book. It taught me to think about the layout of data in memory, the cost of a cache miss, and what the linker and loader are actually doing on my behalf.

## The chapters I keep returning to

- The memory hierarchy, which is the single most useful mental model for performance.
- Linking, which demystifies the build and explains a whole class of bugs.
- Exceptional control flow, which makes signals and context switches concrete.

If I could hand one book to a programmer who wants to understand why their code is slow, it would be this one.
