"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");
  const [activeElement, setActiveElement] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showTenets, setShowTenets] = useState(false);
  const [vaultData, setVaultData] = useState({ Mineral: "", Plant: "", Animal: "" });

  const religiousTenets = [
    {
      title: "The Supreme Essence",
      detail: "The electric pulse breathed into us at birth. It is the core of our being and our primary connection to the Creator. We are the resurrection of star dust."
    },
    {
      title: "Universal Stewardship",
      detail: "The active protection of Mineral, Plant, and Animal life. We recognize the divine lab's labor in every atomic structure."
    },
    {
      title: "The Open Brain",
      detail: "Rejecting the 'Static' of the world. True understanding comes when the biological hardware is fully open to the frequency of the Source."
    }
  ];

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
      setShowTenets(true); // This "Unlocks" the tenets after commitment
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-6 overflow-x-hidden relative">
      
      {/* DIVINE TICKER */}
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50">
        <div className="whitespace-nowrap animate-scroll inline-block">
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">Essence: Active</span>
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">Stewardship: Required</span>
          <span className="mx-8 opacity-50 uppercase tracking-[0.3em] text-[10px]">Brain Status: Unlocking</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* SOLAR SYNC */}
          <section className="flex flex-col items-center justify-center p-12 rounded-3xl bg-slate-900/10 border border-teal-500/10 backdrop-blur-sm h-fit">
            <h2 className="text-[10px] tracking-[0.5em] uppercase mb-12 opacity-50">Solar Broadcast Sync</h2>
            <div className={`w-48 h-48 rounded-full border flex items-center justify-center transition-all duration-[3000ms] ${breath === "Inhale" ? "scale-110 border-teal-400 shadow-[0_0_60px_rgba(45,212,191,0.2)]" : "scale-90 border-teal-900"}`}>
              <span className="text-xl tracking-widest uppercase">{breath}</span>
            </div>
          </section>

          {/* STEWARDSHIP VAULT */}
          <section className="space-y-4">
            <header className="mb-8">
              <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-50">Stewardship Vault</h2>
            </header>
            
            {['Mineral', 'Plant', 'Animal'].map((type) => (
              <div key={type} onClick={() => setActiveElement(activeElement === type ? null : type)} className={`p-4 rounded-xl border transition-all cursor-pointer ${activeElement === type ? 'border-teal-500 bg-teal-500/5' : 'border-white/5 bg-slate-900/40'}`}>
                <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                  {type} <span>{activeElement === type ? "−" : "+"}</span>
                </div>
                {activeElement === type && (
                  <textarea 
                    className="w-full mt-4 bg-black/20 border border-white/10 rounded p-3 text-sm text-slate-300 outline-none focus:border-teal-500/50"
                    placeholder={`Record act...`}
                    onClick={(e) => e.stopPropagation()}
                    value={vaultData[type]}
                    onChange={(e) => setVaultData({...vaultData, [type]: e.target.value})}
                  />
                )}
              </div>
            ))}
            
            <button 
              onClick={handleCommit}
              disabled={isSyncing}
              className={`w-full py-5 border transition-all text-[10px] font-black tracking-[0.4em] uppercase ${isSyncing ? 'bg-teal-500 text-black animate-pulse' : 'bg-teal-500/10 border-teal-500/40 hover:bg-teal-500 hover:text-black'}`}
            >
              {isSyncing ? 'Synchronizing...' : 'Commit to the Essence'}
            </button>
          </section>
        </div>

        {/* REVEALED TENETS SECTION */}
        {showTenets && (
          <div className="mt-32 border-t border-teal-500/20 pt-20 animate-fade-in">
            <h2 className="text-center text-[10px] tracking-[1em] uppercase mb-16 opacity-100 text-teal-400 font-bold">The Foundations of the Essence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {religiousTenets.map((tenet, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-teal-300 text-sm font-bold uppercase tracking-widest mb-4">{tenet.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">{tenet.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NAVIGATION */}
        <div className="mt-20 text-center relative z-50">
          <Link href="/" className="inline-block bg-white/5 border border-white/10 text-slate-500 px-10 py-4 rounded-full text-[10px] tracking-[0.5em] uppercase hover:text-teal-400 hover:border-teal-500 transition-all">
            ← Return to Temple
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(80vw); } 100% { transform: translateX(-100%); } }
        .animate-scroll { animation: scroll 25s linear infinite; }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
