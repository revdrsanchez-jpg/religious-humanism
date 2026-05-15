"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { trinityContent } from './divine-data';

export default function LandingPage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans relative overflow-x-hidden">
      {/* Soft Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-100/50 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-100/50 blur-[120px]"></div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 backdrop-blur-md" onClick={() => setModal(null)}>
          <div className="bg-white border border-teal-500/10 w-full max-w-xl rounded-[40px] p-10 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-serif italic text-teal-700 mb-2 uppercase">{trinityContent[modal].title}</h2>
            <p className="text-amber-600/60 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">{trinityContent[modal].subtitle}</p>
            <p className="text-slate-600 italic font-serif text-lg leading-relaxed leading-relaxed">"{trinityContent[modal].text}"</p>
            <button onClick={() => setModal(null)} className="mt-8 text-[10px] text-teal-600 uppercase font-black tracking-widest border-b border-teal-600/20">✕ Close Revelation</button>
          </div>
        </div>
      )}

      <header className="relative pt-32 pb-16 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-slate-900 uppercase italic">
          RELIGIOUS <br/><span className="text-teal-600">HUMANISM</span>
        </h1>
        <p className="text-amber-600/60 tracking-[0.5em] uppercase text-[10px] font-bold italic">"Guardians of the Essence • Stewards of the Pulse"</p>
      </header>

      <main className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {['divine', 'steward', 'brain'].map((key) => (
            <button key={key} onClick={() => setModal(key)} className="p-12 rounded-[40px] bg-white/60 border border-teal-500/10 text-left hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {key === 'divine' ? '⚡' : key === 'steward' ? '🌍' : '🧠'}
              </div>
              <h3 className="font-black uppercase tracking-widest text-[11px] mb-2 text-slate-900">{trinityContent[key].title}</h3>
              <p className="text-[10px] text-teal-600/60 italic uppercase tracking-widest font-bold">Open Portal →</p>
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-40">
          <Link href="/about"><button className="w-64 bg-slate-200/50 text-slate-600 py-5 rounded-full text-[10px] uppercase font-black tracking-widest hover:bg-slate-200 transition-all">📜 Testament</button></Link>
          <Link href="/practice"><button className="w-64 bg-teal-600 text-white py-5 rounded-full text-[10px] uppercase font-black tracking-widest shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all">⚡ System Sync</button></Link>
          <Link href="/operations"><button className="w-64 bg-amber-100 text-amber-700 border border-amber-200 py-5 rounded-full text-[10px] uppercase font-black tracking-widest hover:bg-amber-200 transition-all">🕯️ Operations</button></Link>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
