"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { trinityContent } from './divine-data';

export default function LandingPage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans relative overflow-x-hidden">
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setModal(null)}>
          <div className="bg-slate-900 border border-teal-500/30 w-full max-w-xl rounded-3xl p-10 relative" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-serif italic text-teal-200 mb-2 uppercase">{trinityContent[modal].title}</h2>
            <p className="text-teal-500/50 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">{trinityContent[modal].subtitle}</p>
            <p className="text-slate-300 italic font-serif text-lg leading-relaxed">"{trinityContent[modal].text}"</p>
            <button onClick={() => setModal(null)} className="mt-8 text-[10px] text-teal-500 uppercase font-bold">✕ Close</button>
          </div>
        </div>
      )}

      <header className="relative pt-32 pb-16 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase italic">
          RELIGIOUS <br/><span className="text-teal-400">HUMANISM</span>
        </h1>
        <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold italic">"Guardians of the Essence. Stewards of the Pulse."</p>
      </header>

      <main className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <button onClick={() => setModal('divine')} className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-2">The Supreme Essence</h3>
            <p className="text-[10px] text-slate-500 italic uppercase">Witness →</p>
          </button>
          <button onClick={() => setModal('steward')} className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-2">Stewardship</h3>
            <p className="text-[10px] text-slate-500 italic uppercase">Embrace →</p>
          </button>
          <button onClick={() => setModal('brain')} className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-2">The Open Brain</h3>
            <p className="text-[10px] text-slate-500 italic uppercase">Expand →</p>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-20">
          <Link href="/about"><button className="w-60 bg-slate-800 text-slate-400 py-4 rounded-full text-[10px] uppercase font-bold tracking-widest">📜 Testament</button></Link>
          <Link href="/practice"><button className="w-60 bg-white text-black py-4 rounded-full text-[10px] uppercase font-bold tracking-widest">⚡ Sync</button></Link>
          <Link href="/operations"><button className="w-60 bg-amber-950/40 text-amber-500 border border-amber-500/40 py-4 rounded-full text-[10px] uppercase font-bold tracking-widest">🕯️ Operations</button></Link>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
