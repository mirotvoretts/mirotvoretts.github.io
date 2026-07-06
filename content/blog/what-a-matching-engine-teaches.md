---
title: What a Matching Engine Teaches About Determinism
topic: Trading Infrastructure
date: 2025-03-11
excerpt: A matching engine is a state machine that must give the same answer on every replica, every time. That constraint reshapes everything around it.
---

A matching engine has a deceptively simple job: take a stream of orders and produce a stream of trades according to fixed rules. The difficulty is not the matching. It is that the same input must produce byte-identical output on every replica, on every replay, forever. Determinism is not a feature here. It is the foundation, and it disciplines every decision above it.

## No wall clocks on the hot path

If the engine reads the system clock to make a decision, two replicas will disagree the moment their clocks differ. So time becomes an input, carried in the event stream, not read from the environment. The same rule bans random numbers, iteration over unordered maps, and any dependency on address layout. Anything nondeterministic gets pushed to the edge, stamped into the input, and frozen.

## Single writer, ordered input

The cleanest engines are single threaded on the matching core. One thread, one ordered queue, one deterministic fold. Parallelism lives at the boundaries: parsing, risk checks, and fan-out to consumers. The core stays sequential because sequential is the only thing that is trivially reproducible. The LMAX Disruptor made this idea popular for good reason.

## Why it is worth it

When the core is deterministic, recovery is replay. Testing is replay against a recorded session. An audit is replay with inspection. The whole operational story collapses into one verb, and that is the quiet luxury of building on a state machine you can trust to always answer the same way.
