---
title: The Log Is the Database
topic: Distributed Systems
date: 2025-06-24
excerpt: An ordered, append-only log is the simplest primitive that gives you replication, recovery, and time travel for free.
---

There is a moment in most distributed systems where the design stops fighting itself. It usually arrives when someone stops treating the log as an implementation detail and starts treating it as the source of truth. Once the ordered, append-only log is the primary record, replication, recovery, and consistency all become the same problem viewed from different angles.

## One structure, several guarantees

An append-only log gives you a total order of events on a single node. Replicate that order to other nodes and you have a consensus problem with a well understood shape, which is exactly what Raft and its relatives solve. Replay the log from the start and you can rebuild any derived state deterministically. Keep the log and you can rewind to any point in history.

## State is a fold over the log

The mental shift is to see your tables, indexes, and caches as materialized views: a fold over the event stream. The log holds what happened. Everything else is a projection you can throw away and recompute. This is why change data capture, event sourcing, and stream processing feel like the same idea wearing different clothes. They are.

## What it costs

Logs are not free. You pay in storage, in compaction, and in the discipline of keeping projections consistent with their source. But the trade is a good one. When the derived state is corrupt, you do not debug it. You rebuild it from the record that was true all along.
