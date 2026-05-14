"use client";
import React, { useState, useEffect } from 'react';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");
  const [activeElement, setActiveElement] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [vaultData, setVaultData] = useState({ Mineral: "", Plant: "", Animal: "" });

  // Solar Sync Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBreath(prev => prev === "Inhale" ? "Exhale" : "Inhale");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCommit = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      alert("Frequency Synchronized. Stewardship Logged to the Ether.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-6 overflow-x-hidden relative">
      
      {/* 1. THE DIVINE DATA TICKER */}
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50">
        <div className="whitespace-nowrap animate-scroll inline-block">
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">Mineral Essence: Grounded</span>
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">Plant Vitality: Ascending</span>
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">Animal Sentience: Protected</span>
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">System Status: Total Synchronicity</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-24 grid lg:grid-cols-2 gap-12 relative z-10">
        
        {/* 2. THE SOLAR SYNC */}
        <section className="flex flex-col items-center justify-center p-12 rounded-3xl bg-slate-900/10 border border-teal-500/10 backdrop-blur-sm h-fit">
          <h2 className="text-[10px] tracking-[0.5em] uppercase mb-12 opacity-50">Solar Broadcast Sync</h2>
          <div className={`w-64 h-64 rounded-full border flex items-center justify-center transition-all duration-[3000ms] ${breath === "Inhale" ? "scale-110 border-teal-400 shadow-[0_0_60px_rgba(45,212,191,0.2)]" : "scale-90 border-teal-900 shadow-none"}`}>
            <span className="text-2xl font-light tracking-[0.2em] uppercase animate-pulse">{breath}</span>
          </div>
          <p className="mt-12 text-[9px] text-slate-500 text-center max-w-xs leading-relaxed tracking-[0.2em] uppercase">
            Synchronize breath with the solar emission to unlock the cellular brain.
          </p>
        </section>

        {/* 3. THE STEWARDSHIP VAULT */}
        <section className="space-y-4">
          <header className="mb-8">
            <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-50 mb-2">Stewardship Vault</h2>
            <p className="text-[9px] text-teal-500/40 italic uppercase">Committing acts of protection to the ether</p>
          </header>
          
          {['Mineral', 'Plant', 'Animal'].map((type) => (
            <div 
              key={type} 
              onClick={() => setActiveElement(activeElement === type ? null : type)}
              className={`group p-6 rounded-2xl bg-slate-900/40 border transition-all duration-500 cursor-pointer ${activeElement === type ? 'border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.1)]' : 'border-white/5 hover:border-white/20'}`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-xs font-bold tracking-[0.2em] uppercase ${activeElement === type ? 'text-teal-400' : 'text-slate-400'}`}>
                  {type} Element
                </span>
                <span className="text-[10px] opacity-20 uppercase tracking-tighter">
                  {activeElement === type ? 'Field Open' : 'Monitoring'}
                </span>
              </div>

              {/* Expandable Area */}
              <div className={`overflow-hidden transition-all duration-500 ${activeElement === type ? 'max-h-40 mt-6' : 'max-h-0'}`}>
                <textarea 
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-slate-950/50 border border-white/5 rounded-lg p-4 outline-none text-sm font-sans text-slate-300 focus:border-teal-500/50 transition-colors"
                  placeholder={`Record your ${type.toLowerCase()} stewardship...`}
                  value={vaultData[type]}
                  onChange={(e) => setVaultData({...vaultData, [type]: e.target.value})}
                  rows="3"
                />
              </div>
            </div>
          ))}
          
          <button 
            onClick={handleCommit}
            disabled={isSyncing}
            className={`w-full py-5 border transition-all text-[10px] font-black tracking-[0.4em] uppercase active:scale-[0.98] ${isSyncing ? 'bg-teal-500 text-black border-teal-500 animate-pulse' : 'bg-teal-500/5 border-teal-500/40 hover:bg-teal-500 hover:text-black'}`}
          >
            {isSyncing ? 'Synchronizing Essence...' : 'Commit to the Essence'}
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
          0% { transform: translateX(80vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
