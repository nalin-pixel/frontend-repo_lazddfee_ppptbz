import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const items = [
    {
      title: 'World‑class Engineering',
      desc: 'From architecture to wafer, our cross‑disciplinary teams optimize every nanometer for performance, power and reliability.'
    },
    {
      title: 'Global Partnerships',
      desc: 'We collaborate with leaders across the AI ecosystem — including close engagements with Nvidia — to deliver proven solutions at scale.'
    },
    {
      title: 'Taiwan Precision',
      desc: 'Designed and manufactured in Taiwan with rigorous process control and supply‑chain resilience.'
    }
  ]

  return (
    <section id="about" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_20%,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold tracking-tight md:text-4xl">
          Built for the Most Demanding AI Workloads
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 max-w-3xl text-slate-300">
          We design and fabricate advanced AI processors that push the limits of throughput and latency. Our products power hyperscale data centers, autonomous platforms, and enterprise AI — backed by a track record of reliability and global delivery.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
              <div className="text-lg font-medium text-cyan-300">{it.title}</div>
              <p className="mt-2 text-slate-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
