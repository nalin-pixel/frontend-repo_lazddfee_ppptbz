import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Engineering Excellence', desc: 'Silicon, firmware, and software co‑design to unlock uncompromising performance.' },
    { title: 'Supply‑Chain Reliability', desc: 'Resilient, diversified sourcing and rigorous QA for predictable delivery.' },
    { title: 'Precision Manufacturing', desc: 'Tight process control and advanced packaging in Taiwan.' },
    { title: 'Security & Compliance', desc: 'End‑to‑end security with enterprise certifications and support.' },
  ]

  return (
    <section id="why" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_20%_80%,rgba(34,197,94,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold tracking-tight md:text-4xl">
          Why Choose Us
        </motion.h2>
        <p className="mt-4 max-w-3xl text-slate-300">We deliver consistent, measurable outcomes for enterprise AI — from design to deployment.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
              <div className="text-lg font-medium text-white">{r.title}</div>
              <p className="mt-2 text-slate-300">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
