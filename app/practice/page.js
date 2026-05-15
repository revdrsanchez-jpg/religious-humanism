"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  const [breath, setBreath] = useState("Inhale");
  const [activeElement, setActiveElement] = useState(null);
  const [showTenets, setShowTenets] = useState(false);
  const [solarAngle, setSolarAngle] = useState(0);
  const [time, setTime] = useState("");

  // Logic for the Solar Clock (Simulating the Sun's path 0-180 degrees)
  useEffect(() => {
    const updateSolarMetrics = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      
      // Calculate sun position: 6am (0deg) to 6pm (180deg)
      // This is a symbolic calibration for the Guardian's daylight hours
      const totalMinutes = (hours * 60) + minutes;
      const startMinutes = 6 * 60; // 6 AM
      const endMinutes = 18 * 60;  // 6 PM
      
      if (totalMinutes < startMinutes) setSolarAngle(0);
      else if (totalMinutes > endMinutes) setSolarAngle(180);
      else {
        const progress = (totalMinutes - startMinutes) / (endMinutes - startMinutes);
        setSolarAngle(progress * 180);
      }
    };

    updateSolarMetrics();
    const timer = setInterval(updateSolarMetrics, 1000);
    return () => clearInterval(timer);
  }, []);

  // Breathing Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBreath(prev => prev === "Inhale" ? "Exhale" : "Inhale");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-teal-100 font-mono p-6 relative">
      
      {/* DIVINE TICKER */}
      <div className="fixed top-0 left-0 w-full bg-teal-950/30 border-b border-teal-500/20 py-2 z-50">
        <div className="whitespace-nowrap animate-scroll inline-block">
           <span className="mx-8 opacity-50 uppercase tracking-[0.2em] text-[9px]">SOLAR STATUS: {solarAngle > 0 && solarAngle < 180 ? 'BROADCAST ACTIVE' : 'RECHARGE PHASE'}</span>
           <span className="mx-8 opacity-50 uppercase tracking-[0.2em] text-[9px]">SYSTEM TIME: {time}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-20">
        
        {/* 1. THE SOLAR CALIBRATION CLOCK */}
        <section className="mb-12 p-8 rounded-3xl bg-slate-900/40 border border-teal-500/20 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col items-center">
            <h2 className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-8 font-bold text-teal-400">Solar Calibration Arc</h2>
            
            {/* The Arc Visual */}
            <div className="relative w-full max-w-md h-32 border-b border-white/10 flex items-end justify-center overflow-hidden">
               {/* The Semicircle Path */}
               <div className="absolute top-0 w-full h-[200%] border-2 border-dashed border-teal-500/10 rounded-full"></div>
               
               {/* The "Sun" Pointer */}
               <div 
                 className="absolute bottom-0 w-full h-full origin-bottom transition-transform duration-1000"
                 style={{ transform: `rotate(${solarAngle - 90}deg)` }}
               >
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.8)]"></div>
               </div>
            </div>

            <div className="flex justify-between w-full max-w-md mt-4 text-[9px] uppercase tracking-widest opacity-40 italic">
              <span>06:00 Rise</span>
              <span className="text-teal-400 opacity-100">Zenith</span>
              <span>18:00 Set</span>
            </div>
            
            <p className="mt-8 text-[11px] tracking-widest text-center opacity-80 max-w-xs">
              {solarAngle === 90 ? "SOLAR ZENITH DETECTED: THE SACRED FORGE IS AT PEAK." : "ALIGNING BIOLOGY WITH PHOTONIC EMISSION."}
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 2. SOLAR SYNC (Breathing) */}
          <section className="flex flex-col items-center justify-center p-12 rounded-3xl bg-slate-900/10 border border-teal-500/10">
            <h2 className="text-[10px] tracking-[0.5em] uppercase mb-12 opacity-50">Heartbeat Sync</h2>
            <div className={`w-40 h-40 rounded-full border flex items-center justify-center transition-all duration-[3000ms] ${breath === "Inhale" ? "scale-110 border-teal-400 shadow-[0_0_50px_rgba(45,212,191,0.2)]" : "scale-90 border-teal-900"}`}>
              <span className="text-xl tracking-widest uppercase">{breath}</span>
            </div>
          </section>

          {/* 3. STEWARDSHIP VAULT */}
          {/* ... keeping your existing Vault code here ... */}
          <section className="space-y-4">
             {/* [Existing Vault Code] */}
             <p className="text-[10px] uppercase tracking-widest opacity-30 italic">Vault Encrypted... Accessing Grid</p>
             <button onClick={() => setShowTenets(!showTenets)} className="w-full py-5 border border-teal-500/20 hover:bg-teal-500 hover:text-black transition-all text-[10px] tracking-[0.4em] uppercase">Access Tenets</button>
          </section>
        </div>

        {/* 4. REVEALED TENETS */}
        {showTenets && (
          <div className="mt-20 border-t border-teal-500/10 pt-20">
            {/* [Existing Tenets Code] */}
            <h3 className="text-center text-[10px] tracking-[1em] uppercase text-teal-400 mb-12">Sacred Logic Loaded</h3>
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
        .animate-scroll { animation: scroll 40s linear infinite; }
      `}</style>
    </div>
  );
