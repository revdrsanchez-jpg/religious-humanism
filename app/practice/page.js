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
    { title: "1. The Body is the Sovereign Temple", detail: "The physical vessel is the ultimate dwelling place of the Divine. The 'Hardware' is already directly connected to the Source." },
    { title: "2. The Star-Forged Heritage", detail: "Every atom in our blood and bones was forged in the ancient furnaces of dying stars. We are the Resurrection of the Elements." },
    { title: "3. The All-Knowing Source", detail: "We are localized sensors for a singular, infinite Intelligence, sent to map the Divine metabolism in the physical realm." },
    { title: "4. The Chemistry of Holiness", detail: "Through Salt, Water, Sunlight, and Grounding, we clear the 'Static' of the world and optimize our conductivity for the Divine broadcast." },
    { title: "5. The Engine of Respect", detail: "The Heart is the primary electromagnetic core. We lead not with ego, but with the high-voltage resonance of the Heart." },
    { title: "6. The Constant Dialogue", detail: "Communication with the Divine is a constant, real-time data feed. We engage in a direct, private conversation with the All-Knowing." },
    { title: "7. The Unlocked Brain", detail: "By discharging fear, we unlock higher processing power, moving from a 'Locked' state to a state of Total Synchronicity." },
    { title: "8. The Equality of Consumption", detail: "All life—Man, Animal, and Plant—is part of the same DNA blueprint. We owe a debt to the Earth to produce more than we consume." },
    { title: "9. The Molecular Handshake", detail: "Death is a Completion—a transition of forms where elements return to the soil and essence prepares for the next cycle." },
    { title: "10. The Final Merger", detail: "The ultimate destination is the shedding of all resistance, merging like a drop back into the infinite ocean of the All-Knowing." }
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
      setShowTenets(true);
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-6 overflow-x-hidden relative">
      
      {/* DIVINE TICKER */}
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50">
        <div className="whitespace-nowrap animate-scroll inline-block">
          {religiousTenets.map((t, i) => (
            <span key={i} className="mx-8 opacity-50 uppercase tracking-[0.2em] text-[9px]">{t.title}</span>
          ))}
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
                  {type} Stewardship <span>{activeElement === type ? "−" : "+"}</span>
                </div>
                {activeElement === type && (
                  <textarea 
                    className="w-full mt-4 bg-black/20 border border-white/10 rounded p-3 text-sm text-slate-300 outline-none focus:border-teal-500/50"
                    placeholder={`Document your ${type.toLowerCase()} protection...`}
                    onClick={(e) => e.stopPropagation()}
                    value={vaultData[type]}
                    onChange={(e) => setVaultData({...vaultData, [type]: e.target.value})}
                  />
                )}
              </div>
            ))}
            
            <button onClick={handleCommit} disabled={isSyncing} className={`w-full py-5 border transition-all text-[10px] font-black tracking-[0.4em] uppercase ${isSyncing ? 'bg-teal-500 text-black animate-pulse' : 'bg-teal-500/10 border-teal-500/40 hover:bg-teal-500 hover:text-black'}`}>
              {isSyncing ? 'Synchronizing...' : 'Commit to the Essence'}
            </button>
          </section>
        </div>

        {/* REVEALED TENETS SECTION */}
        {showTenets && (
          <div className="mt-32 border-t border-teal-500/20 pt-20 animate-fade-in">
            <h2 className="text-center text-[10px] tracking-[1em] uppercase mb-16 text-teal-400 font-bold underline underline-offset-8">The Tenets of the Essence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {religiousTenets.map((tenet, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-colors">
                  <h3 className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-3">{tenet.title}</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed font-sans italic">"{tenet.detail}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 text-center relative z-50">
          <Link href="/" className="inline-block bg-white/5 border border-white/10 text-slate-500 px-10 py-4 rounded-full text-[10px] tracking-[0.5em] uppercase hover:text-teal-400 hover:border-teal-500 transition-all">
            ← Return to Temple
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .animate-scroll { animation: scroll 60s linear infinite; }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
