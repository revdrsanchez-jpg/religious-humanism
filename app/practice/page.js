"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { religiousTenets } from './tenets';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");
  const [activeElement, setActiveElement] = useState(null);
  const [showTenets, setShowTenets] = useState(false);
  const [solarAngle, setSolarAngle] = useState(0);
  const [metrics, setMetrics] = useState({ hour: "", phase: "", intensity: "" });
  const [vaultData, setVaultData] = useState({ Mineral: "", Plant: "", Animal: "" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const total = (h * 60) + m;
      let phase = "Recharge Phase"; let intensity = "0%";
      if (h >= 6 && h < 11) { phase = "Morning Attunement"; intensity = "45%"; }
      else if (h >= 11 && h < 14) { phase = "Solar Zenith Forge"; intensity = "100%"; }
      else if (h >= 14 && h < 18) { phase = "Vesper Merger"; intensity = "60%"; }
      setMetrics({ hour: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), phase, intensity });
      const s = 360; const e = 1080; 
      setSolarAngle(total < s ? 0 : total > e ? 180 : ((total - s) / (e - s)) * 180);
    };
    update();
    const timer = setInterval(update, 1000);
    const bTimer = setInterval(() => setBreath(p => p === "Inhale" ? "Exhale" : "Inhale"), 3000);
    return () => { clearInterval(timer); clearInterval(bTimer); };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-cyan-50 font-mono p-4 md:p-8">
      <div className="fixed top-0 left-0 w-full bg-cyan-950/40 border-b border-cyan-400/30 py-3 z-50 backdrop-blur-xl flex justify-between px-6 text-[10px] font-black uppercase tracking-widest">
        <span>● BROADCAST: {metrics.intensity}</span>
        <span className="text-cyan-200">{metrics.hour} SYNC</span>
      </div>

      <div className="max-w-5xl mx-auto pt-20">
        <section className="mb-12 p-10 rounded-[40px] bg-cyan-950/10 border border-cyan-400/20 text-center relative overflow-hidden">
          <h2 className="text-[11px] tracking-[0.8em] uppercase text-cyan-400 mb-12 font-black">Celestial Calibration Arc</h2>
          <div className="relative w-full max-w-2xl h-40 mx-auto flex items-end justify-center">
            <div className="absolute top-0 w-full h-[200%] border border-cyan-400/20 rounded-full shadow-[inset_0_0_40px_rgba(34,211,238,0.1)]"></div>
            <div className="absolute bottom-0 w-full h-full origin-bottom transition-all duration-1000" style={{ transform: `rotate(${solarAngle - 90}deg)` }}>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee] animate-pulse"></div>
            </div>
            <div className="mb-4 text-center">
              <div className="text-5xl font-black text-white">{metrics.intensity}</div>
              <div className="text-[10px] tracking-[0.5em] text-cyan-400 uppercase">{metrics.phase}</div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="p-16 rounded-[40px] bg-slate-900/30 border border-white/5 flex flex-col items-center justify-center">
            <div className={`w-40 h-40 rounded-full border-2 transition-all duration-[3000ms] flex items-center justify-center ${breath === "Inhale" ? "scale-110 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.2)]" : "scale-90 border-cyan-900"}`}>
              <div className="text-xl font-black uppercase text-white">{breath}</div>
            </div>
          </div>

          <div className="space-y-4">
            {['Mineral', 'Plant', 'Animal'].map(type => (
              <div key={type} onClick={() => setActiveElement(activeElement === type ? null : type)} className="p-6 rounded-3xl border border-white/5 bg-slate-900/40 cursor-pointer">
                <div className="flex justify-between text-xs uppercase tracking-widest font-black">
                   <span className={activeElement === type ? "text-cyan-400" : ""}>{type} Element</span>
                   <span className="opacity-20">{activeElement === type ? "−" : "+"}</span>
                </div>
                {activeElement === type && (
                  <textarea className="w-full mt-4 bg-black/40 border border-cyan-900/50 rounded-xl p-4 text-sm outline-none" rows="3" onClick={e => e.stopPropagation()} value={vaultData[type]} onChange={e => setVaultData({...vaultData, [type]: e.target.value})} />
                )}
              </div>
            ))}
            <button onClick={() => setShowTenets(!showTenets)} className="w-full py-6 bg-cyan-400 text-black font-black text-xs tracking-[0.5em] uppercase rounded-full">
              {showTenets ? 'Close Logic' : 'Commit & Decrypt'}
            </button>
          </div>
        </div>

        {showTenets && (
          <div className="grid md:grid-cols-2 gap-6 pb-40 border-t border-cyan-400/20 pt-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {religiousTenets.map((n, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5">
                <h4 className="text-cyan-400 text-xs font-black uppercase mb-3">[{n.t}]</h4>
                <p className="text-slate-400 text-sm italic opacity-80 leading-relaxed">"{n.d}"</p>
              </div>
            ))}
          </div>
        )}

        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
          <Link href="/" className="bg-black/60 backdrop-blur-md border border-white/10 text-slate-500 px-10 py-4 rounded-full text-[10px] tracking-[0.5em] uppercase hover:text-cyan-400 transition-all shadow-2xl">← Return</Link>
        </div>
      </div>
    </div>
  );
}
