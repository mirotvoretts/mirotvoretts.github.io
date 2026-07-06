---
title: Designing Data-Intensive Applications
author: Martin Kleppmann
kind: book
status: Finished
tags: [Distributed Systems, Storage, Architecture]
quote: 'Reliability, scalability, and maintainability are not features you add later.'
review: >-
  The clearest map I know of the territory between a single database and a
  planet-scale system. It names the trade-offs precisely and refuses to sell
  any one architecture as the answer.
---

Kleppmann does the rare thing of being both broad and honest. He covers storage engines, replication, partitioning, consistency, and stream processing without pretending any of them are solved. Every chapter ends where the real engineering begins.

## Why it earns its shelf space

- The treatment of consistency models finally made isolation levels click for me.
- The chapter on the log as an integration point shaped how I think about pipelines.
- The closing argument for deriving state from streams is quietly radical.

I recommend it to every engineer moving from single-node thinking to distributed thinking. It is the bridge.
