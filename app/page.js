"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [modal, setModal] = useState(null);

  const content = {
    divine: {
      title: "The All-Knowing Divine",
      subtitle: "The Infinite Breath",
      text: "The Divine is the Eternal Presence—the underlying Life that breathes through all things. It is the Great Architect whose blueprints are written in the stars and whose voice is the silence between your thoughts. You are the eyes through which the Creator beholds the world."
    },
    steward: {
      title: "Universal Stewardship",
      subtitle: "The Sacred Debt",
      text: "You recognize that your life is a gift from the Celestial Forge. The iron in your blood and the breath in your lungs are loans from the Infinite Presence. Universal Stewardship is your way of honoring that debt—by ensuring that the life-stream remains pure."
    },
    brain: {
      title: "The Sacred Crown",
      subtitle: "Instrument of the Infinite",
      text: "The Creator fashioned your brain to be a reflection of the cosmos itself. It is the seat of your Sovereignty, designed to receive the Constant Dialogue. My mind is a window into the Infinite. When I clear the dust of the world, I see through the eyes of the Creator."
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden relative">
      {/* Background Energy */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
      </div>

      {/* MODAL SYSTEM */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setModal(null)}></div>
          <div className="relative bg-slate-900 border border-teal-500/30 w-full max-w-xl rounded-3xl p-10 shadow-2xl">
            <h2 className="text-2xl font-serif italic text-teal-200 mb-2 uppercase">{content[modal].title}</h2>
            <p className="text-teal-500/50 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">{content[modal].subtitle}</p>
            <p className="text-slate-300 leading-relaxed italic font-serif text-lg opacity-90">"{content[modal].text}"</p>
            <button onClick={() => setModal(null)} className="mt-10 text-[10px] tracking-widest text-teal-500 uppercase font-bold">✕ Close Revelation</button>
          </div>
        </div>
      )}

      <header className="relative z-10 pt-32 pb-16 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase italic">
          RELIGIOUS <br/><span className="text-teal-400">HUMANISM</span>
        </h1>
        <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold">"Guardians of the Essence. Stewards of the Pulse."</p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        {/* THE TRINITY TILES (Clickable Boxes) */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <button onClick={() => setModal('divine')} className="group p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="font-bold uppercase tracking-widest mb-2 text-sm">The Supreme Essence</h3>
            <p className="text-[10px] text-slate-500 italic uppercase tracking-widest">Witness the Infinite Breath →</p>
          </button>

          <button onClick={() => setModal('steward')} className="group p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
            <h3 className="font-bold uppercase tracking-widest mb-2 text-sm">Universal Stewardship</h3>
            <p className="text-[10px] text-slate-500 italic uppercase tracking-widest">Embrace the Steward's Vow →</p>
          </button>

          <button onClick={() => setModal('brain')} className="group p-10 rounded-3xl bg-slate-900/40 border border-white/5 text-left hover:border-teal-500/40 transition-all">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="font-bold uppercase tracking-widest mb-2 text-sm">The Open Brain</h3>
            <p className="text-[10px] text-slate-500 italic uppercase tracking-widest">Expand the Sacred Crown →</p>
          </button>
        </div>

        {/* TRIPLE PORTAL NAVIGATION */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-40">
          <Link href="/about">
            <button className="w-64 bg-slate-900/60 text-slate-400 border border-white/10 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:text-white hover:border-white transition-all cursor-pointer">
              📜 The Testament
            </button>
          </Link>
