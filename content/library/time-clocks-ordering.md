---
title: Time, Clocks, and the Ordering of Events
author: Leslie Lamport
kind: paper
status: Finished
tags: [Distributed Systems, Theory, Foundations]
quote: 'In a distributed system, the concept of a total ordering of events is not obvious.'
review: >-
  Nine pages that quietly rebuilt how a generation thinks about distributed
  time. The happened-before relation and logical clocks come from here, and
  almost every consensus paper since stands on this ground.
---

I reread this paper about once a year, and it repays every reading. Lamport starts from a question that sounds almost naive, what does it mean for one event to happen before another, and follows it with such care that the answer reshapes the whole field.

## What it plants

- The happened-before partial order, which separates causality from wall-clock time.
- Logical clocks, and the trick of extending a partial order to a total one.
- The insight that physical time is just one more source of ordering, not the arbiter.

If you only ever read one distributed systems paper, read this one first.
