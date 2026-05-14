"use client";
import React, { useState, useEffect } from 'react';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");

  // Solar Sync Logic (6-second total cycles)
  useEffect(() => {
    const interval = setInterval(() => {
      setBreath(prev => prev === "Inhale" ? "Exhale" : "Inhale");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-6 overflow-hidden relative">
      
      {/* 1. THE DIVINE DATA TICKER */}
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50">
        <div className="whitespace-nowrap animate-scroll inline-block">
          <span className="mx-8 opacity-50 uppercase tracking-widest text-[10px]">Mineral Essence: Grounded</span>
          <span className="mx-8 opacity-50 uppercase tracking-widest text-[10px]">Plant Vitality: Ascending</span>
          <span className="mx-8 opacity-50 uppercase tracking-widest text-[10px]">Animal Sentience: Protected</span>
          <span className="mx-8 opacity-50 uppercase tracking-widest text-[10px]">System Status: Total Synchronicity</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-24 grid lg:grid-cols-2 gap-12 relative z-10">
        
        {/* 2. THE SOLAR SYNC (Breathing Tool) */}
        <section className="flex flex-col items-center justify-center p-12 rounded-3xl bg-slate-900/20 border border-teal-500/10 backdrop-blur-md">
          <h2 className="text-[10px] tracking-[0.5em] uppercase mb-12 opacity-50">Solar Broadcast Sync</h2>
          <div className={`w-64 h-64 rounded-full border-2 flex items-center justify-center transition-all duration-[3000ms] ${breath === "Inhale" ? "scale-110 border-teal-400 shadow-[0_0_60px_rgba(45,212,191,0.2)]" : "scale-90 border-teal-900 shadow-none"}`}>
            <span className="text-2xl font-light tracking-[0.2em] uppercase animate-pulse">{breath}</span>
          </div>
          <p className="mt-12 text-[9px] text-slate-500 text-center max-w-xs leading-relaxed tracking-widest uppercase">
            Align your biological frequency with the solar emission.
          </p>
        </section>

        {/* 3. THE STEWARDSHIP VAULT (The Log) */}
        <section className="space-y-6">
          <header className="mb-8 text-center lg:text-left">
            <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-50 mb-2">Stewardship Vault</h2>
            <p className="text-[9px] text-teal-500/40 italic uppercase">Committing acts of protection to the ether</p>
          </header>
          
          {['Mineral', 'Plant', 'Animal'].map((type) => (
            <div key={type} className="group p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-teal-500/30 transition-all duration-500">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400">{type} Element</span>
                <span className="text-[9px] opacity-20 group-hover:opacity-60 transition-opacity uppercase tracking-tighter">Status: Monitoring</span>
              </div>
              <textarea 
                className="w-full bg-transparent border-b border-white/10 focus:border-teal-500 outline-none text-sm font-sans py-2 text-slate-300 transition-colors"
                placeholder={`Document your ${type.toLowerCase()} stewardship...`}
                rows="1"
              />
            </div>
          ))}
          
          <button className="w-full py-5 bg-teal-500/5 border border-teal-500/40 hover:bg-teal-500 hover:text-black transition-all text-[10px] font-black tracking-[0.4em] uppercase active:scale-[0.98]">
            Commit to the Essence
          </button>
        </section>
      </div>

      <div className="mt-20 text-center relative z-10 pb-10">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase text-slate-600 hover:text-teal-400 transition-colors">
          ← Return to Temple
        </a>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
