import React from 'react'
import { motion } from 'framer-motion'

const Trusted = () => {
  const bullets = [
    'Collaborations with leading AI platforms including Nvidia',
    'Proven reliability and 99.99% uptime across deployments',
    'Scale from edge to hyperscale with consistent performance',
  ]

  return (
    <section id="trusted" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center text-2xl font-medium text-slate-100 md:text-3xl">
          Trusted by Industry Leaders
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mx-auto mt-3 max-w-3xl text-center text-slate-300">
          Built with enterprise‑grade reliability and engineered in partnership with global innovators like Nvidia, our solutions deliver predictable performance at scale.
        </motion.p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4">
          {bullets.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="flex items-start gap-3 rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <p className="text-slate-300">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trusted
