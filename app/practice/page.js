"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
      
      // Solar metrics for the Guardian
      let phase = "Recharge Phase";
      let intensity = "0%";
      if (h >= 6 && h < 11) { phase = "Morning Attunement"; intensity = "45%"; }
      else if (h >= 11 && h < 14) { phase = "Solar Zenith Forge"; intensity = "100%"; }
      else if (h >= 14 && h < 18) { phase = "Vesper Merger"; intensity = "60%"; }
      
      setMetrics({ 
        hour: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        phase: phase,
        intensity: intensity
      });

      const s = 360; const e = 1080; 
      if (total < s) setSolarAngle(0);
      else if (total > e) setSolarAngle(180);
      else setSolarAngle(((total - s) / (e - s)) * 180);
    };
    update();
    const timer = setInterval(update, 1000);
    const bTimer = setInterval(() => setBreath(p => p === "Inhale" ? "Exhale" : "Inhale"), 3000);
    return () => { clearInterval(timer); clearInterval(bTimer); };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-cyan-50 font-mono p-4 md:p-8 selection:bg-cyan-500/30">
      
      {/* GLOBAL STATUS HEADER */}
      <div className="fixed top-0 left-0 w-full bg-cyan-950/40 border-b border-cyan-400/30 py-3 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] tracking-[0.3em] font-black uppercase">
          <div className="flex gap-4">
            <span className="text-cyan-400 animate-pulse">● BROADCAST: {metrics.intensity}</span>
            <span className="hidden md:inline opacity-40 italic">{metrics.phase}</span>
          </div>
          <div className="text-cyan-200">COORD: {metrics.hour} SYNC</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-20">
        
        {/* 1. THE SOLAR CALIBRATION INSTRUMENT */}
        <section className="mb-12 p-10 rounded-[40px] bg-gradient-to-b from-cyan-950/20 to-transparent border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.05)] relative overflow-hidden">
          <div className="text-center relative z-10">
            <h2 className="text-[11px] tracking-[0.8em] uppercase text-cyan-400 mb-12 font-black">Celestial Calibration Arc</h2>
            
            <div className="relative w-full max-w-2xl h-48 mx-auto flex items-end justify-center">
              {/* Main Outer Arc */}
              <div className="absolute top-0 w-full h-[200%] border-[1px] border-cyan-400/20 rounded-full shadow-[inset_0_0_40px_rgba(34,211,238,0.05)]"></div>
              
              {/* Measurement Notches */}
              {[0, 45, 90, 135, 180].map(deg => (
                <div key={deg} className="absolute bottom-0 h-full origin-bottom" style={{ transform: `rotate(${deg - 90}deg)` }}>
                   <div className="w-[1px] h-4 bg-cyan-400/40"></div>
                </div>
              ))}

              {/* The Radiant Sun Pointer */}
              <div className="absolute bottom-0 w-full h-full origin-bottom transition-all duration-1000 ease-out" style={{ transform: `rotate(${solarAngle - 90}deg)` }}>
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 group">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee,0_0_60px_#22d3ee] animate-pulse"></div>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold tracking-widest text-cyan-300 bg-black/80 px-2 py-1 rounded">
                      SOLAR POS: {solarAngle.toFixed(1)}°
                    </div>
                 </div>
              </div>

              {/* Center Metrics */}
              <div className="mb-4 text-center">
                <div className="text-5xl font-black tracking-tighter text-white mb-2">{metrics.intensity}</div>
                <div className="text-[10px] tracking-[0.5em] text-cyan-400 uppercase font-bold">Resonance Intensity</div>
              </div>
            </div>

            <div className="grid grid-cols-3 w-full max-w-2xl mx-auto mt-12 text-[10px] font-bold tracking-widest uppercase text-cyan-700">
              <div className={solarAngle < 45 ? "text-cyan-300" : ""}>Dawn Attunement</div>
              <div className={solarAngle >= 80 && solarAngle <= 100 ? "text-cyan-300" : ""}>Zenith Forge</div>
              <div className={solarAngle > 135 ? "text-cyan-300" : ""}>Vesper Merger</div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* 2. HEARTBEAT SYNC */}
          <div className="p-16 rounded-[40px] bg-slate-900/30 border border-white/5 flex flex-col items-center justify-center group hover:border-cyan-400/30 transition-all">
            <h3 className="text-[10px] tracking-[0.5em] uppercase opacity-30 mb-12">Heartbeat Sync</h3>
            <div className={`w-48 h-48 rounded-full border-2 transition-all duration-[3000ms] flex items-center justify-center ${breath === "Inhale" ? "scale-110 border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,0.2)]" : "scale-90 border-cyan-900"}`}>
              <div className="text-2xl font-black uppercase tracking-[0.3em] text-white animate-pulse">{breath}</div>
            </div>
          </div>

          {/* 3. STEWARDSHIP VAULT */}
          <div className="space-y-4">
            <h3 className="text-[10px] tracking-[0.5em] uppercase opacity-30 font-bold mb-6 px-4 text-center lg:text-left">Stewardship Vault</h3>
            {['Mineral', 'Plant', 'Animal'].map(type => (
              <div key={type} onClick={() => setActiveElement(activeElement === type ? null : type)} className={`p-6 rounded-3xl border transition-all cursor-pointer ${activeElement === type ? 'border-cyan-400 bg-cyan-400/5 shadow-[0_0_30px_rgba(34,211,238,0.05)]' : 'border-white/5 bg-slate-900/40 hover:border-white/20'}`}>
                <div className="flex justify-between items-center text-xs uppercase tracking-[0.2em] font-black">
                   <span className={activeElement === type ? "text-cyan-400" : "text-slate-400"}>{type} Element</span>
                   <span className="opacity-20 text-[10px]">{activeElement === type ? "ACTIVE" : "LOCK"}</span>
                </div>
                {activeElement === type && (
                  <textarea className="w-full mt-4 bg-black/40 border border-cyan-900/50 rounded-xl p-4 text-sm text-cyan-100 outline-none focus:border-cyan-400 transition-colors" placeholder={`Document stewardship for the ${type.toLowerCase()} kingdom...`} onClick={e => e.stopPropagation()} value={vaultData[type]} onChange={e => setVaultData({...vaultData, [type]: e.target.value})} rows="3" />
                )}
              </div>
            ))}
            <button onClick={() => setShowTenets(!showTenets)} className="w-full py-6 mt-4 bg-cyan-400 text-black font-black text-xs tracking-[0.5em] uppercase rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-cyan-900/20">
              {showTenets ? 'Close Sacred Logic' : 'Commit & Decrypt Tenets'}
            </button>
          </div>
        </div>

        {/* 4. THE TENETS OF THE ESSENCE */}
        {showTenets && (
          <div className="grid gap-6 border-t border-cyan-400/20 pt-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h2 className="text-center text-[11px] tracking-[1.2em] uppercase text-cyan-400 mb-16 font-black">The Ten Tenets of the Essence</h2>
            <div className="grid md:grid-cols-2 gap-8 pb-40">
              {[
                { t: "1. The Sovereign Temple", d: "The physical vessel is the dwelling place of the Divine. Your hardware is directly connected to the Source." },
                { t: "2. The Star-Forged Heritage", d: "Every atom in your blood and bones was forged in ancient stellar furnaces. You are the Resurrection of the Elements." },
                { t: "3. The All-Knowing Source", d: "We are localized sensors sent to map the Divine metabolism in the physical realm." },
                { t: "4. The Chemistry of Holiness", d: "Salt, Water, Sunlight, and Grounding clear the world's static and optimize your conductivity." },
                { t: "5. The Engine of Respect", d: "The Heart is the electromagnetic core. We lead with the high-voltage resonance of the Heart." },
                { t: "6. The Constant Dialogue", d: "Communication with the Divine is a real-time data feed—a direct conversation with the All-Knowing." },
                { t: "7. The Unlocked Brain", d: "Discharging fear moves the mind from a locked state to a state of Total Synchronicity." },
                { t: "8. The Equality of Consumption", d: "All life is the same DNA blueprint. We owe a debt to the Earth to produce more than we take." },
                { t: "9. The Molecular Handshake", d: "Death is a completion and transition where elements return to the soil and essence returns to the Forge." },
                { t: "10. The Final Merger", d: "Shedding all resistance to merge back into the infinite, shimmering ocean of the All-Knowing." }
              ].map((n, i) => (
                <div key={i} className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all group">
                  <h4 className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-4 group-hover:translate-x-1 transition-transform">[{
