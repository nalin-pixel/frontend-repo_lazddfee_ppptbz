import React from 'react'

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
          <span className="text-sm tracking-wider">TAI AI SEMI</span>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} TAI AI Semiconductor Co. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
