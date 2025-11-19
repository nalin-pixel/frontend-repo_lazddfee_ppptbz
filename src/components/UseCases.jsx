import React from 'react'
import { motion } from 'framer-motion'

const Case = ({ title, desc }) => (
  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
    <div className="text-lg font-medium text-white">{title}</div>
    <p className="mt-2 text-slate-300">{desc}</p>
  </div>
)

const UseCases = () => {
  const cases = [
    { title: 'Data Centers', desc: 'High‑density inference and training acceleration for hyperscale AI clusters.' },
    { title: 'Autonomous Vehicles', desc: 'Deterministic latency for perception, planning, and control in real time.' },
    { title: 'Robotics', desc: 'Edge inference with robust thermal envelopes and industrial reliability.' },
    { title: 'AI Inference', desc: 'Optimized for LLMs, vision transformers, and multimodal workloads.' },
    { title: 'Edge Computing', desc: 'Compact modules for on‑prem and remote deployments with secure management.' },
    { title: 'Healthcare & Imaging', desc: 'Accelerate diagnostics with precise, low‑latency compute pipelines.' },
  ]

  return (
    <section id="use-cases" className="relative bg-slate-950 py-24 text-white">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold tracking-tight md:text-4xl">
          Built for Real‑World Impact
        </motion.h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          From cloud to edge, our processors power mission‑critical AI systems across industries.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}>
              <Case {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
