---
title: The Art of Multiprocessor Programming
author: Herlihy and Shavit
kind: book
status: Finished
tags: [Concurrency, Lock-Free, Theory]
quote: 'Wait-freedom is a property of an implementation, not a wish.'
review: >-
  The rigorous foundation under every lock-free structure I have written. It
  refuses to let you wave your hands. Linearizability, consensus numbers, and
  the memory model are treated as the serious mathematics they are.
---

This is the book that turned my intuition about concurrency into something I could actually prove. Before it, I wrote atomics and hoped. After it, I could argue about why a structure was correct.

## Ideas I use constantly

- Linearizability as the correctness condition for concurrent objects.
- The consensus hierarchy, which explains why some primitives are strictly more powerful than others.
- The difference between lock-free and wait-free, and when the stronger guarantee is worth its cost.

The Java examples translate cleanly to the atomics I use in Rust and C++. The reasoning is what matters, and the reasoning is language independent.
