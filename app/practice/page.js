"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");
  const [activeElement, setActiveElement] = useState(null);
  const [showTenets, setShowTenets] = useState(false);
  const [solarAngle, setSolarAngle] = useState(0);
  const [time, setTime] = useState("");
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
    const updateSolarMetrics = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      const totalMinutes = (now.getHours() * 60) + now.getMinutes();
      const start = 6 * 60; const end = 18 * 60;
      if (totalMinutes < start) setSolarAngle(0);
      else if (totalMinutes > end) setSolarAngle(180);
      else setSolarAngle(((totalMinutes - start) / (end - start)) * 180);
    };
    updateSolarMetrics();
    const timer = setInterval(updateSolarMetrics, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreath(prev => prev === "Inhale" ? "Exhale" : "Inhale");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-6 relative">
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll inline-block uppercase text-[9px] tracking-[0.2em] opacity-50">
          SOLAR STATUS: {solarAngle > 0 && solarAngle < 180 ? 'BROADCAST ACTIVE' : 'RECHARGE PHASE'} — SYSTEM TIME: {time} — CALIBRATING BIOLOGY —
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-20">
        <section className="mb-12 p-8 rounded-3xl bg-slate-900/40 border border-teal-500/20 backdrop-blur-md text-center">
          <h2 className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-8 font-bold text-teal-400">Solar Calibration Arc</h2>
          <div className="relative w-full max-w-md h-32 border-b border-white/10 flex items-end justify-center overflow-hidden mx-auto">
             <div className="absolute top-0 w-full h-[200%] border-2 border-dashed border-teal-500/10 rounded-full"></div>
             <div className="absolute bottom-0 w-full h-full origin-bottom transition-transform duration-1000" style={{ transform: `rotate(${solarAngle - 90}deg)` }}>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.8)]"></div>
             </div>
          </div>
          <p className="mt-8 text-[11px] tracking-widest opacity-80 uppercase italic">
            {solarAngle === 90 ? "Solar Zenith: Sacred Forge Peak" : "Aligning with Photonic Emission"}
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          <section className="flex flex-col items-center justify-center p-12 rounded-3xl bg-slate-900/10 border border-teal-500/10">
            <h2 className="text-[10px] tracking-[0.5em] uppercase mb-12 opacity-50 font-bold">Heartbeat Sync</h2>
            <div className={`w-40 h-40 rounded-full border flex items-center justify-center transition-all duration-[3000ms] ${breath === "Inhale" ? "scale-110 border-teal-400 shadow-[0_0_50px_rgba(45,212,191,0.2)]" : "scale-90 border-teal-900"}`}>
              <span className="text-xl tracking-widest uppercase">{breath}</span>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-50 font-bold">Stewardship Vault</h2>
            {['Mineral', 'Plant', 'Animal'].map((type) => (
              <div key={type} onClick={() => setActiveElement(activeElement === type ? null : type)} className={`p-4 rounded-xl border transition-all cursor-pointer ${activeElement === type ? 'border-teal-500 bg-teal-500/5' : 'border-white/5 bg-slate-900/40'}`}>
                <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                  {type} <span>{activeElement === type ? "−" : "+"}</span>
                </div>
                {activeElement === type && (
                  <textarea 
                    className="w-full mt-4 bg-black/20 border border-white/10 rounded p-3 text-sm text-slate-300 outline-none"
                    placeholder={`Record protection...`}
                    onClick={(e) => e.stopPropagation()}
                    value={vaultData[type]}
                    onChange={(e) => setVaultData({...vaultData, [type]: e.target.value})}
                  />
                )}
              </div>
            ))}
            <button onClick={() => setShowTenets(!showTenets)} className="w-full py-5 border border-teal-500/20 hover:bg-teal-500 hover:text-black transition-all text-[10px] tracking-[0.4em] uppercase font-bold">
              {showTenets ? 'Hide Tenets' : 'Commit & Access Tenets'}
            </button>
          </section>
        </div>

        {showTenets && (
          <div className="mt-20 border-t border-teal-500/10 pt-20 animate-fade-in">
            <h3 className="text-center text-[10px] tracking-[1em] uppercase text-teal-400 mb-12 font-bold underline underline-offset-8">The Ten Tenets of the Essence</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {religiousTenets.map((tenet, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-colors">
                  <h4 className="text-teal-300 text-xs font-bold uppercase tracking-
