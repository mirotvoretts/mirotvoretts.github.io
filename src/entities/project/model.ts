export interface Project {
  title: string;
  description: string;
  architecture: string;
  technologies: string[];
  repository: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Halyard',
    description:
      'A lock-free, multi-producer message bus for intra-process actor systems. Bounded queues with backpressure, designed so a slow consumer never stalls the writers.',
    architecture:
      'Sharded MPSC rings behind a cache-line-padded index, wait-free on the hot path, epoch-based reclamation for retired nodes.',
    technologies: ['Rust', 'crossbeam', 'tokio', 'criterion'],
    repository: 'https://github.com/mirotvoretts/halyard',
    year: '2025',
  },
  {
    title: 'Tessellate',
    description:
      'A columnar storage engine for time-series telemetry. Writes land in an append-only log, then compact into immutable segments queried through a vectorized scan operator.',
    architecture:
      'LSM-style ingestion, zone maps for segment pruning, SIMD decode of delta-of-delta blocks, mmap-backed read path with zero-copy slices.',
    technologies: ['C++20', 'Arrow', 'liburing', 'Google Benchmark'],
    repository: 'https://github.com/mirotvoretts/tessellate',
    year: '2024',
  },
  {
    title: 'Marrow',
    description:
      'A minimal user-space TCP stack over a tap device, written to understand every byte on the wire. Congestion control, retransmission, and a clean sockets-like API.',
    architecture:
      'Event loop on epoll, per-connection state machines, a slab allocator for segments, NewReno congestion control with SACK.',
    technologies: ['Rust', 'no_std core', 'AF_PACKET', 'Wireshark'],
    repository: 'https://github.com/mirotvoretts/marrow',
    year: '2024',
  },
];
