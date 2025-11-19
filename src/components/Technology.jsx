import React from 'react'
import { motion } from 'framer-motion'

const Feature = ({ title, desc, metric }) => (
  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
    <div className="text-sm text-cyan-300/80">{metric}</div>
    <div className="mt-1 text-lg font-medium text-white">{title}</div>
    <p className="mt-2 text-slate-300">{desc}</p>
  </div>
)

const Technology = () => {
  return (
    <section id="technology" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_90%_0%,rgba(6,182,212,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold tracking-tight md:text-4xl">
          Architecture for Performance, Latency, and Efficiency
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 max-w-3xl text-slate-300">
          Our AI compute architecture integrates high‑bandwidth memory, distributed on‑chip interconnects, and compiler‑aware scheduling to deliver exceptional throughput at sub‑millisecond latency with industry‑leading performance per watt.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Feature title="Compute Fabric" metric="Deterministic low‑latency" desc="Mesh‑based on‑chip fabric enabling parallel execution and predictable tail latency for real‑time inference." />
          <Feature title="HBM & IO" metric=">3.2 TB/s memory BW" desc="High‑bandwidth memory with optimized prefetch and compression for massive model contexts and streaming workloads." />
          <Feature title="Compiler Stack" metric="Kernel‑level fusion" desc="Graph compiler with auto‑tuned kernels, operator fusion, and quantization to maximize utilization across batches." />
          <Feature title="Process Technology" metric="Breakthrough manufacturing" desc="Advanced lithography, packaging, and thermal design that sustain performance density while improving yield." />
          <Feature title="Power Efficiency" metric="TOPS/W leadership" desc="Dynamic voltage and frequency scaling with fine‑grained power gating for outstanding efficiency." />
          <Feature title="Reliability" metric="Enterprise‑grade" desc="ECC throughout, telemetry, and self‑healing firmware designed for 24/7 data center reliability." />
        </div>
      </div>
    </section>
  )
}

export default Technology
