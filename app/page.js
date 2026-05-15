"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showDivine, setShowDivine] = useState(false);
  const [showSteward, setShowSteward] = useState(false);
  const [showBrain, setShowBrain] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden relative">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
      </div>

      {/* 1. SUPREME ESSENCE MODAL */}
      {showDivine && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowDivine(false)}></div>
          <div className="relative bg-slate-900 border border-teal-500/30 w-full max-w-2xl rounded-3xl p-10 shadow-2xl">
            <h2 className="text-2xl font-serif italic text-teal-200 mb-4 uppercase">The All-Knowing Divine</h2>
            <p className="text-slate-300 leading-relaxed italic">"The Divine is the Eternal Presence—the underlying Life that breathes through all things. You are the eyes through which the Creator beholds the world."</p>
            <button onClick={() => setShowDivine(false)} className="mt-8 text-xs tracking-widest text-teal-500 uppercase">Return</button>
          </div>
        </div>
      )}

      {/* 2. STEWARDSHIP MODAL */}
      {showSteward && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowSteward(false)}></div>
          <div className="relative bg-slate-900 border border-teal-500/30 w-full max-w-2xl rounded-3xl p-10 shadow-2xl">
            <h2 className="text-2xl font-serif italic text-teal-200 mb-4 uppercase">The Steward's Vow</h2>
            <p className="text-slate-300 leading-relaxed italic">"I walk upon this Earth as a humble guest and a holy guardian. I shall tend to the Garden with love and honor the Source in all that I touch."</p>
            <button onClick={() => setShowSteward(false)} className="mt-8 text-xs tracking-widest text-teal-500 uppercase">Return</button>
          </div>
        </div>
      )}

      {/* 3. OPEN BRAIN MODAL */}
      {showBrain && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowBrain(false)}></div>
          <div className="relative bg-slate-900 border border-teal-500/30 w-full max-w-2xl rounded-3xl p-10 shadow-2xl">
            <h2 className="text-2xl font-serif italic text-teal-200 mb-4 uppercase">The Sacred Crown</h2>
            <p className="text-slate-300 leading-relaxed italic">"My mind is a window into the Infinite. When I clear the dust of the world, I see through the eyes of the Creator."</p>
            <button onClick={() => setShowBrain(false)} className="mt-8 text-xs tracking-widest text-teal-500 uppercase">Return</button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 pt-32 pb-16 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase">
          RELIGIOUS <br/><span className="text-teal-400">HUMANISM</span>
        </h1>
        <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold">"Guardians of the Essence. Stewards of the Pulse."</p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        {/* The Trinity Tiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          <button onClick={() => setShowDivine(true)} className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold uppercase tracking-widest mb-2">The Supreme Essence</h3>
            <p className="text-xs text-slate-500 italic">Witness the Infinite Breath.</p>
          </button>

          <button onClick={() => setShowSteward(true)} className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="font-bold uppercase tracking-widest mb-2">Universal Stewardship</h3>
            <p className="text-xs text-slate-500 italic">Embrace the Steward's Vow.</p>
          </button>

          <button onClick={() => setShowBrain(true)} className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="font-bold uppercase tracking-widest mb-2">The Open Brain</h3>
            <p className="text-xs text-slate-500 italic">Expand the Sacred Crown.</p>
          </button>
        </div>

        {/* Tactical Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-40">
          <Link href="/practice">
            <button className="w-64 bg-white text-black py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-teal-400 transition-all cursor-pointer">
              Begin System Sync
            </button>
          </Link>
          <Link href="/operations">
            <button className="w-64 bg-amber-950/20 text-amber-400 border border-amber-500/40 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
              Tactical Operations
            </button>
          </Link>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
