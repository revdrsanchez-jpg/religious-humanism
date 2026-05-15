"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { trinityContent } from './divine-data';

export default function LandingPage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans relative overflow-x-hidden">
      
      {/* Radiant Garden Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/60 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-200/20 blur-[100px]"></div>
      </div>

      {/* MODAL SYSTEM */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#163020]/40 backdrop-blur-md" onClick={() => setModal(null)}>
          <div 
            className="bg-white border border-[#163020]/10 w-full max-w-2xl rounded-[40px] p-8 md:p-12 shadow-2xl relative flex flex-col max-h-[85vh]" 
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <header className="mb-6 flex-shrink-0 border-b border-teal-500/10 pb-4">
              <h2 className="text-3xl md:text-4xl font-serif italic text-[#163020] mb-1 uppercase tracking-tighter leading-none">
                {trinityContent[modal].title}
              </h2>
              <p className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black">
                {trinityContent[modal].subtitle}
              </p>
            </header>

            {/* Scrollable Body */}
            <div className="overflow-y-auto pr-4 custom-scroll">
              <div className="text-[#163020] font-serif text-lg leading-relaxed whitespace-pre-wrap opacity-95">
                {trinityContent[modal].text}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 flex-shrink-0 text-center border-t border-teal-500/5">
              <button 
                onClick={() => setModal(null)} 
                className="px-10 py-3 rounded-full bg-[#163020] text-white text-[10px] uppercase font-black tracking-widest hover:bg-[#2D9596] transition-all shadow-md"
              >
                ✕ Close Revelation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <header className="relative z-10 pt-32 pb-16 text-center px-6">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-[#163020] uppercase italic">
          RELIGIOUS <br/><span className="text-[#2D9596]">HUMANISM</span>
        </h1>
        <p className="text-[#947617] tracking-[0.6em] uppercase text-[12px] font-black italic">"Guardians of the Essence • Stewards of the Pulse"</p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {['divine', 'steward', 'brain'].map((key) => (
            <button key={key} onClick={() => setModal(key)} className="p-12 rounded-[45px] bg-white border border-[#163020]/5 text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">
                {key === 'divine' ? '⚡' : key === 'steward' ? '🌍' : '🧠'}
              </div>
              <h3 className="font-black uppercase tracking-widest text-[13px] mb-3 text-[#163020]">{trinityContent[key].title}</h3>
              <p className="text-[11px] text-[#2D9596] italic uppercase tracking-widest font-black">Enter Presence →</p>
            </button>
          ))}
        </div>

        {/* NAVIGATION PORTALS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pb-40">
          <Link href="/about">
            <button className="w-64 bg-[#E0E8E4] text-[#163020] py-6 rounded-full font-black text-[11px] tracking-[0.4em] uppercase hover:bg-white transition-all shadow-sm">
              📜 The Testament
            </button>
          </Link>
          <Link href="/practice">
            <button className="w-64 bg-[#163020] text-white py-6 rounded-full font-black text-[11px] tracking-[0.4em] uppercase shadow-xl hover:bg-[#2D9596] transition-all">
              ⚡ System Sync
            </button>
          </Link>
          <Link href="/operations">
            <button className="w-64 bg-[#947617]/10 text-[#947617] border border-[#947617]/30 py-6 rounded-full font-black text-[11px] tracking-[0.4em] uppercase hover:bg-white transition-all">
              🕯️ Operations
            </button>
          </Link>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #2D9596; border-radius: 10px; }
      `}</style>
    </div>
  );
}
