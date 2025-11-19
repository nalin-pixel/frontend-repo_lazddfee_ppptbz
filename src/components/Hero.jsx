import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background tech grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(60%_50%_at_50%_100%,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: '48px 48px'}} />

      {/* 3D Spline Scene */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-32 md:flex-row md:gap-16 md:px-10 lg:pt-40">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
            Taiwan • Precision AI Semiconductor Manufacturing
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Powering the Future of AI with Advanced, Low‑Latency Chips
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 max-w-xl text-lg text-slate-300">
            We design and fabricate high‑performance AI processors engineered for hyperscale data centers, autonomous systems, and enterprise‑grade inference — built in Taiwan.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#technology" className="group inline-flex items-center rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 transition hover:bg-cyan-300">
              Learn More
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-cyan-400/40 bg-white/0 px-5 py-3 text-cyan-200 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-100">
              Contact Sales
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-10 grid max-w-xl grid-cols-2 gap-6 text-sm text-slate-300">
            <div>
              <div className="text-3xl font-semibold text-cyan-300"><span className="align-top text-base">up to</span> 20x</div>
              <div className="text-slate-400">Throughput for inference</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-cyan-300"><span className="align-top text-base">sub‑</span>1ms</div>
              <div className="text-slate-400">End‑to‑end latency</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-cyan-300">40%</div>
              <div className="text-slate-400">Lower power per TOPS</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-cyan-300">99.99%</div>
              <div className="text-slate-400">Uptime & reliability</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* gradient glow bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cyan-500/10 to-transparent" />
    </section>
  )
}

export default Hero
