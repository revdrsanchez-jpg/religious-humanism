"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showDivine, setShowDivine] = useState(false);
  const [showSteward, setShowSteward] = useState(false);
  const [showBrain, setShowBrain] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* Background Energy */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* Hero Header */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase">
          Religious <br/><span className="text-teal-400 uppercase">Humanism</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto font-light tracking-wide italic leading-relaxed">
          "Guardians of the Essence. Stewards of the Pulse."
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        {/* Interactive Tenet Tiles */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div onClick={() => setShowDivine(true)} className="group p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all cursor-pointer hover:border-teal-500/40">
            <div className="text-4xl mb-8">⚡</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">The Supreme Essence</h3>
            <p className="text-slate-400 text-sm">Witness the Infinite Breath.</p>
          </div>
          <div onClick={() => setShowSteward(true)} className="group p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all cursor-pointer hover:border-teal-500/40">
            <div className="text-4xl mb-8">🌍</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Universal Stewardship</h3>
            <p className="text-slate-400 text-sm">Embrace the Steward's Vow.</p>
          </div>
          <div onClick={() => setShowBrain(true)} className="group p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all cursor-pointer hover:border-teal-500/40">
            <div className="text-4xl mb-8">🧠</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">The Open Brain</h3>
            <p className="text-slate-400 text-sm">Expand the Sacred Crown.</p>
          </div>
        </div>

        {/* DUAL PORTAL NAVIGATION */}
        <section className="mt-40 mb-40 flex flex-col md:flex-row items-center justify-center gap-6 relative z-50">
          <Link href="/practice">
            <button className="w-64 bg-white text-black py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-teal-400 transition-all active:scale-95 shadow-2xl cursor-pointer">
              Begin System Sync
            </button>
          </Link>
          <Link href="/operations">
            <button className="w-64 bg-cyan-950/40 text-cyan-400 border border-cyan-500/40 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-cyan-500 hover:text-black transition-all active:scale-95 shadow-2xl cursor-pointer">
              Tactical Operations
            </button>
          </Link>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
