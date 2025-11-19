import React from 'react'
import { motion } from 'framer-motion'

const ContactCTA = () => {
  return (
    <section id="contact" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_80%_40%,rgba(6,182,212,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-8 md:p-12">
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold md:text-3xl">
            Partner with us to power next‑generation AI systems
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 max-w-3xl text-slate-300">
            Tell us about your workloads and deployment needs. Our team will follow up with architecture guidance, performance projections, and evaluation hardware.
          </motion.p>

          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 grid gap-4 md:grid-cols-3">
            <input type="text" placeholder="Name" className="rounded-md border border-slate-700/60 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400" />
            <input type="email" placeholder="Work Email" className="rounded-md border border-slate-700/60 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400" />
            <input type="text" placeholder="Company" className="rounded-md border border-slate-700/60 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400" />
            <textarea placeholder="Project details" rows="4" className="md:col-span-3 rounded-md border border-slate-700/60 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400" />
            <button type="button" className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-300 md:w-max">
              Contact Sales
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
