---
title: 'MIT 6.824: Distributed Systems'
author: Robert Morris
kind: course
status: Reading
tags: [Distributed Systems, Consensus, Practice]
quote: 'You do not understand a protocol until you have watched your implementation of it fail.'
review: >-
  The course that closes the gap between reading about consensus and building
  it. The labs make you implement Raft and a fault-tolerant key-value store,
  and the bugs you hit are the real ones the papers only hint at.
---

Lectures and papers gave me the vocabulary. This course gave me the scars. Implementing Raft from the paper, then watching it deadlock under a partition, taught me more than any amount of reading.

## Working through it

- The Raft lab is where the paper stops being abstract and starts being a test suite.
- The MapReduce lab is a gentle on-ramp that still teaches failure handling.
- The reading list is a curated tour of the field, from GFS to Spanner.

I am partway through the labs and treating them as the standard for what I mean when I say I understand a protocol.
