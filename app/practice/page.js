"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");
  const [activeElement, setActiveElement] = useState(null);
  const [showTenets, setShowTenets] = useState(false);
  const [solarAngle, setSolarAngle] = useState(0);
  const [vaultData, setVaultData] = useState({ Mineral: "", Plant: "", Animal: "" });

  const tenets = [
    { t: "1. Sovereign Temple", d: "The vessel is the dwelling place of the Divine. Hardware is connected to the Source." },
    { t: "2. Star-Forged Heritage", d: "Atoms forged in dying stars. We are the Resurrection of the Elements." },
    { t: "3. All-Knowing Source", d: "Localized sensors sent to map the Divine metabolism." },
    { t: "4. Chemistry of Holiness", d: "Salt, Water, Sunlight, and Grounding clear the world's static." },
    { t: "5. Engine of Respect", d: "The Heart is the electromagnetic core. Lead with high-voltage resonance." },
    { t: "6. Constant Dialogue", d: "A real-time data feed between the soul and the All-Knowing." },
    { t: "7. Unlocked Brain", d: "Discharging fear moves the mind to Total Synchronicity." },
    { t: "8. Equality of Consumption", d: "All life is the same DNA blueprint. Produce more than you take." },
    { t: "9. Molecular Handshake", d: "Death is a completion and transition of forms." },
    { t: "10. Final Merger", d: "Shedding resistance to merge back into the infinite ocean." }
  ];

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const total = (now.getHours() * 60) + now.getMinutes();
      const s = 360; const e = 1080; // 6am to 6pm
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
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-4">
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50 text-[9px] text-center uppercase tracking-widest opacity-60">
        Solar Status: {solarAngle > 0 && solarAngle < 180 ? 'Active' : 'Recharge'} — Calibrating Biology
      </div>

      <div className="max-w-4xl mx-auto pt-16">
        <section className="mb-10 p-6 rounded-3xl bg-slate-900/40 border border-teal-500/20 text-center">
          <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-6">Solar Calibration</h2>
          <div className="relative w-full max-w-xs h-24 border-b border-white/10 mx-auto overflow-hidden">
             <div className="absolute top-0 w-full h-[200%] border border-dashed border-teal-500/20 rounded-full"></div>
             <div className="absolute bottom-0 w-full h-full origin-bottom transition-transform duration-1000" style={{ transform: `rotate(${solarAngle - 90}deg)` }}>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_teal]"></div>
             </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-slate-900/20 border border-teal-500/10 flex flex-col items-center justify-center">
            <div className={`w-32 h-32 rounded-full border transition-all duration-[3000ms] flex items-center justify-center ${breath === "Inhale" ? "scale-110 border-teal-400" : "scale-90 border-teal-900"}`}>
              <span className="text-sm uppercase tracking-widest">{breath}</span>
            </div>
          </div>

          <div className="space-y-3">
            {['Mineral', 'Plant', 'Animal'].map(type => (
              <div key={type} onClick={() => setActiveElement(activeElement === type ? null : type)} className="p-4 rounded-xl border border-white/5 bg-slate-900/40 cursor-pointer hover:border-teal-500/30">
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">{type} Stewardship</div>
                {activeElement === type && (
                  <textarea className="w-full mt-3 bg-black/40 border border-white/10 rounded p-2 text-xs text-slate-300 outline-none" placeholder="Record act..." onClick={e => e.stopPropagation()} value={vaultData[type]} onChange={e => setVaultData({...vaultData, [type]: e.target.value})} />
                )}
              </div>
            ))}
            <button onClick={() => setShowTenets(!showTenets)} className="w-full py-4 bg-teal-500/10 border border-teal-500/30 text-[10px] tracking-widest uppercase hover:bg-teal-500 hover:text-black transition-all">
              {showTenets ? 'Hide Tenets' : 'Access Sacred Tenets'}
            </button>
          </div>
        </div>

        {showTenets && (
          <div className="mt-16 grid gap-4 border-t border-white/5 pt-10">
            {tenets.map((n, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-teal-400 text-[10px] uppercase font-bold mb-2">{n.t}</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed italic opacity-80">"{n.d}"</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center pb-10">
          <Link href="/" className="text-[10px] tracking-[0.4em] uppercase text-slate-600 hover:text-teal-400">← Return to Temple</Link>
        </div>
      </div>
    </div>
  );
}
