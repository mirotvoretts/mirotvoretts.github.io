---
title: The Shape of Tail Latency
topic: Low-Latency
date: 2025-09-02
excerpt: Averages lie. The story of a low-latency system is written entirely in its p99 and beyond.
---

If you report the mean latency of a service, you have told me almost nothing. The mean hides the moments that actually hurt: the request that waited behind a garbage collection pause, the one that missed the cache, the one that arrived while a background compaction held a lock. Those live in the tail, and the tail is where users and trading systems feel pain.

## Why the tail is fat

Latency is a sum of independent delays, and the slow paths compose. A request might touch ten subsystems, each fast on average. If each has a small chance of a slow moment, the odds that at least one of them is slow on any given request grow quickly. This is why p99 can be an order of magnitude above the median even when nothing is broken.

## Where the time goes

The usual suspects, roughly in the order I check them:

- Allocation and reclamation stalls, including page faults on first touch.
- Lock contention and the convoy effect behind a hot mutex.
- Cache and TLB misses from poor data layout.
- Scheduler preemption at the wrong instant.

## The discipline

Measure histograms, not averages. Pin threads and preallocate the hot path. Lay data out so the common access is a single cache line. Prefer wait-free structures where a stalled thread cannot hold up the others. None of this is glamorous. Low latency is mostly the absence of surprises, earned by removing them one at a time.
