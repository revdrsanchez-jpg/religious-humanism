"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { creedData, tenetData } from '../practice-data';

export default function PracticeHub() {
  const [sync, setSync] = useState(false);
  const [step, setStep] = useState('Stand Barefoot');
  const [deeds, setDeeds] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let inv;
    if (sync) {
      const stages = ['Inhale Light', 'Hold Presence', 'Exhale Static', 'Rest in Grace'];
      let i = 0;
      inv = setInterval(() => { setStep(stages[i % 4]); i++; }, 4000);
    } else { setStep('Stand Barefoot'); }
    return () => clearInterval(inv);
  }, [sync]);

  const saveDeed = (e) => {
    e.preventDefault();
    if (!input) return;
    setDeeds([{ text: input, time: new Date().toLocaleTimeString() }, ...deeds]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans pb-40">
      <main className="max-w-4xl mx-auto px-6 pt-24 space-y-32">
        
        {/* 1. BREATHING SYNC */}
        <section className="text-center">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-12">Calibration</h4>
          <div onClick={() => setSync(!sync)} className="relative w-64 h-64 mx-auto flex items-center justify-center cursor-pointer">
            <div className={`absolute inset-0 rounded-full border-2 border-[#2D9596]/20 ${sync ? 'scale-150 opacity-0' : ''} transition-all duration-[4000ms]`}></div>
            <div className={`w-48 h-48 rounded-full bg-[#2D9596]/5 flex items-center justify-center transition-transform duration-[4000ms] ${sync ? 'scale-110' : 'scale-90'}`}>
              <p className="font-serif italic text-2xl">{sync ? step : "Begin Sync"}</p>
            </div>
          </div>
        </section>

        {/* 2. THE 10 CORE TENETS */}
        <section className="bg-white/50 p-12 rounded-[50px] border border-[#163020]/5 shadow-sm">
          <h2 className="text-center font-serif italic text-4xl mb-16">The Core Tenets of the Essence</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {tenetData.map((t) => (
              <div key={t.n} className="relative pl-8">
                <span className="absolute left-0 top-0 text-4xl font-black text-[#2D9596]/10 leading-none">{t.n}</span>
                <h3 className="text-[#947617] text-[11px] uppercase tracking-widest font-black mb-2">{t.h}</h3>
                <p className="font-serif italic text-lg opacity-80 leading-relaxed">"{t.t}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. STEWARDSHIP LOG */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-center font-serif italic text-3xl mb-10">Stewardship Journal</h2>
          <form onSubmit={saveDeed} className="flex gap-4 mb-8">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Log an act of stewardship..." className="flex-1 bg-white border border-[#163020]/10 rounded-full px-8 py-4 italic font-serif focus:outline-none focus:border-[#2D9596] shadow-inner" />
            <button type="submit" className="bg-[#163020] text-white px-8 rounded-full text-[10px] uppercase font-black tracking-widest">Log</button>
          </form>
          <div className="space-y-4">
            {deeds.map((d, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-[#163020]/5 italic font-serif shadow-sm">
                <span className="text-[#947617] text-[8px] font-black block mb-1 uppercase tracking-widest">{d.time}</span>
                "{d.text}"
              </div>
            ))}
          </div>
        </section>

        {/* 4. THE PROTECTOR'S CREED */}
        <section className="pt-20 border-t border-[#163020]/10">
          <h2 className="text-center font-serif italic text-6xl mb-20">The Protector’s Creed</h2>
          <div className="space-y-20 max-w-2xl mx-auto">
            {creedData.map((sec, i) => (
              <div key={i} className="pl-10 border-l-2 border-[#2D9596]/20">
                <h3 className="text-[#947617] text-[12px] uppercase tracking-widest font-black mb-4 italic">{sec.h}</h3>
                <p className="text-xl font-serif italic leading-relaxed">"{sec.t}"</p>
              </div>
            ))}
          </div>
          <div className="mt-32 p-20 rounded-[70px] bg-white border border-[#163020]/5 text-center shadow-xl max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#163020]">"I am Rooted. I am Unbound. I am Sovereign."</h2>
          </div>
        </section>

        <nav className="text-center pt-20">
          <Link href="/" className="px-14 py-6 rounded-full bg-[#163020] text-white text-[11px] uppercase font-black tracking-[0.5em]">← Return to Sanctuary</Link>
        </nav>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
