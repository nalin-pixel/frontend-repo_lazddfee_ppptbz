import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
          <span className="text-sm font-medium tracking-wider text-slate-200">TAI AI SEMI</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#technology" className="hover:text-white">Technology</a>
          <a href="#trusted" className="hover:text-white">Trusted</a>
          <a href="#use-cases" className="hover:text-white">Use Cases</a>
          <a href="#why" className="hover:text-white">Why Us</a>
          <a href="#contact" className="rounded-md border border-cyan-400/40 px-3 py-1 text-cyan-200 hover:border-cyan-300/60 hover:text-cyan-100">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
