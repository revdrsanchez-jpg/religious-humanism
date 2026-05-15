"use client";
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
      </div>

      <header className="relative z-10 pt-32 pb-16 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase italic">
          RELIGIOUS <br/><span className="text-teal-400">HUMANISM</span>
        </h1>
        <p className="text-teal-500/40 tracking-[0.4em] uppercase text-[10px] font-bold">"Guardians of the Essence. Stewards of the Pulse."</p>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <Link href="/about">
            <div className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-center hover:border-teal-500/40 transition-all cursor-pointer">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="font-bold uppercase tracking-widest text-xs mb-2">The Testament</h3>
              <p className="text-[10px] text-slate-500 italic">About Religious Humanism</p>
            </div>
          </Link>

          <Link href="/practice">
            <div className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-center hover:border-teal-500/40 transition-all cursor-pointer">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold uppercase tracking-widest text-xs mb-2">System Sync</h3>
              <p className="text-[10px] text-slate-500 italic">Calibration & Breath</p>
            </div>
          </Link>

          <Link href="/operations">
            <div className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-center hover:border-teal-500/40 transition-all cursor-pointer">
              <div className="text-3xl mb-4">🕯️</div>
              <h3 className="font-bold uppercase tracking-widest text-xs mb-2">Operations</h3>
              <p className="text-[10px] text-slate-500 italic">Flame & Meditation</p>
            </div>
          </Link>

        </div>

        <div className="text-center opacity-10 text-[9px] uppercase tracking-[1em] pb-20 font-bold">
          Sovereign • Grounded • Awakened
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
