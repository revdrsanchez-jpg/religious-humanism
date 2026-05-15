"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { data } from '../practice-data'; // This pulls your Creed text in

export default function PracticeHub() {
  const [sync, setSync] = useState(false);
  const [step, setStep] = useState('Stand Barefoot');
  const [staticLevel, setStaticLevel] = useState(100);

  useEffect(() => {
    let inv;
    if (sync) {
      const stages = ['Inhale Light', 'Hold Presence', 'Exhale Static', 'Rest in Grace'];
      let i = 0;
      inv = setInterval(() => {
        setStep(stages[i % 4]);
        setStaticLevel(prev => Math.max(0, prev - 5));
        i++;
      }, 4000);
    } else {
      setStaticLevel(100);
      setStep('Stand Barefoot');
    }
    return () => clearInterval(inv);
  }, [sync]);

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans relative overflow-x-hidden">
      
      {/* 1. THE STATIC FILTER (Restored Visual Tool) */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
          opacity: sync ? (staticLevel / 2000) : 0.05 
        }}
      ></div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-40">
        
        {/* 2. THE CALIBRATION ENGINE (Restored Interactive Tool) */}
        <section className="text-center mb-32">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-12 italic">System Synchronization</h4>
          <div onClick={() => setSync(!sync)} className="relative w-64 h-64 mx-auto flex items-center justify-center cursor-pointer">
            <div className={`absolute inset-0 rounded-full border border-[#2D9596]/30 transition-all duration-[4000ms] ${sync ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute inset-8 rounded-full bg-[#2D9596]/5 flex items-center justify-center transition-transform duration-[4000ms] ${sync ? 'scale-110' : 'scale-90'}`}>
              <div className="text-center">
                <p className="font-serif italic text-2xl">{sync ? step : "Begin Sync"}</p>
                <p className="text-[9px] uppercase tracking-widest mt-2 opacity-40 font-black">{sync ? "Filtering..." : "Tap to Initiate"}</p>
              </div>
            </div>
          </div>
          {sync && <p className="mt-8 text-[#947617] text-[10px] uppercase font-bold animate-pulse tracking-widest">Static: {staticLevel}%</p>}
        </section>

        {/* 3. THE PROTECTOR'S CREED (Pronounced Text) */}
        <div className="border-t border-[#163020]/10 pt-24">
          <h1 className="text-center text-5xl font-serif italic mb-20 text-[#163020]">The Protector’s Creed</h1>
          <div className="space-y-16">
            {data.map((sec, i) => (
              <div key={i} className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
                <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4 italic">{sec.h}</h3>
                <p className="text-xl font-serif italic leading-relaxed opacity-90">"{sec.t}"</p>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 rounded-[60px] bg-white border border-[#163020]/5 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif italic text-[#163020]">"I am Rooted. I am Unbound. I am Sovereign."</h2>
          </div>
        </div>

        <nav className="mt-24 text-center">
          <Link href="/" className="px-12 py-5 rounded-full bg-[#163020] text-white text-[11px] uppercase font-black tracking-widest hover:bg-[#2D9596] transition-all shadow-lg">← Return to Sanctuary</Link>
        </nav>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
