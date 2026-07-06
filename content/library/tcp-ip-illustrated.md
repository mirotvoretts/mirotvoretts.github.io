---
title: 'TCP/IP Illustrated, Volume 1'
author: W. Richard Stevens
kind: book
status: Revisiting
tags: [Networking, Protocols, Systems]
quote: 'The best way to understand a protocol is to watch it on the wire.'
review: >-
  The book that taught me to stop trusting abstractions and start reading
  packet traces. Stevens walks through every protocol by showing real traffic,
  byte by byte, until the state machines stop being diagrams and become
  something you can feel.
---

I return to this book whenever I write anything that touches a socket. The value is not the reference material, which has aged in places, but the method: form a hypothesis, capture the traffic, and confront the difference between what you expected and what the wire actually carried.

## What stayed with me

- The TCP state diagram is worth memorizing, especially the closing states.
- Nagle and delayed ACK interact badly, and the book shows exactly why.
- Retransmission timing is subtler than any summary makes it sound.

When I built a user-space TCP stack, this was the book open on the desk.
