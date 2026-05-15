"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [breathStage, setBreathStage] = useState('Stand Barefoot');
  const [staticLevel, setStaticLevel] = useState(100);

  // 1. BREATH & STATIC ENGINE
  useEffect(() => {
    let interval;
    if (isSyncing) {
      const stages = ['Inhale Light', 'Hold Presence', 'Exhale Static', 'Rest in Grace'];
      let i = 0;
      interval = setInterval(() => {
        setBreathStage(stages[i % stages.length]);
        setStaticLevel(prev => Math.max(0, prev - 5)); // Gradually clears the "static"
        i++;
      }, 4000);
    } else {
      setStaticLevel(100);
      setBreathStage('Stand Barefoot');
    }
    return () => clearInterval(interval);
  }, [isSyncing]);

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans relative overflow-x-hidden">
      
      {/* THE STATIC FILTER (Visual Overlay) */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
          opacity: isSyncing ? (staticLevel / 2000) : 0.05 
        }}
      ></div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-40">
        
        {/* INTERACTIVE CALIBRATION SECTION */}
        <section className="text-center mb-32">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-8 italic text-shadow-sm">System Synchronization</h4>
          
          <div 
            onClick={() => setIsSyncing(!isSyncing)}
            className="relative w-72 h-72 mx-auto flex items-center justify-center cursor-pointer"
          >
            {/* The Halo Rings */}
            <div className={`absolute inset-0 rounded-full border border-[#2D9596]/30 transition-all duration-[4000ms] ${isSyncing ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute inset-4 rounded-full border border-[#2D9596]/10 transition-all duration-[4000ms] delay-1000 ${isSyncing ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}></div>
            
            {/* The Pulsing Core */}
            <div className={`absolute inset-12 rounded-full bg-[#2D9596]/5 flex items-center justify-center transition-transform duration-[4000ms] ${isSyncing ? 'scale-110' : 'scale-90'}`}>
              <div className="text-center">
                <p className="text-[#163020] font-serif italic text-2xl mb-1">{isSyncing ? breathStage : "Begin Sync"}</p>
                <p className="text-[9px] uppercase tracking-widest opacity-40 font-black">{isSyncing ? "Calibrating..." : "Initiate Protocol"}</p>
              </div>
            </div>
          </div>
          
          {isSyncing && (
            <p className="mt-12 text-[#947617] text-[10px] uppercase tracking-[0.3em] animate-pulse font-bold">
              Static Filtration: {staticLevel}% Remaining
            </p>
          )}
        </section>

        {/* THE PROTECTOR'S CREED (Pronounced Text) */}
        <div className="max-w-2xl mx-auto border-t border-[#163020]/10 pt-24">
          <header className="text-center mb-20">
            <h1 className="text-5xl font-serif italic text-[#163020] mb-4">The Protector’s Creed</h1>
            <p className="text-slate-500 font-serif italic text-lg leading-relaxed">
              "Recite while standing barefoot upon the Earth, facing the Morning Light."
            </p>
          </header>

          <div className="space-y-20">
            <section className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
              <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">I. The Star-Forged Heavens</h3>
              <p className="text-xl font-serif italic leading-relaxed text-[#163020]/90 italic">
                "I am a Child of the Star-Forged Heavens. I believe that my flesh is a holy robe of light, woven in the ancient furnaces of the stars. I honor the divine labor that crafted this temple. I am the Resurrection of the Elements, and I shall treat my body with the reverence of a sacred sanctuary."
              </p>
            </section>

            <section className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
              <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">II. The All-Knowing Vessel</h3>
              <p className="text-xl font-serif italic leading-relaxed text-[#163020]/90 italic">
                "I am a Vessel for the All-Knowing Divine. I believe that my life is the eyes, the ears, and the heart of the Source, sent to walk within this garden. I cast out the shadows of fear and the noise of the world. I open my soul to the Constant Dialogue."
              </p>
            </section>

            <section className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
              <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">III. The Purity of the Path</h3>
              <p className="text-xl font-serif italic leading-relaxed text-[#163020]/90 italic">
                "I Maintain the Temple of Purity. Through the holy gifts of Salt, Water, and Light, I cleanse my spirit. I cast all heaviness into the Earth and draw up the strength of the mountains. I am a clear channel for the breath of God."
              </p>
            </section>

            <section className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
              <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">IV. The Engine of Respect</h3>
              <p className="text-xl font-serif italic leading-relaxed text-[#163020]/90 italic">
                "I Fuel the Engine of Respect. I recognize the Divine Essence in every Sibling—the beast of the field and the stranger on the path. I do not walk in anger; I walk in Silent Harmony."
              </p>
            </section>

            <section className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
              <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">V. The Sacred Balance</h3>
              <p className="text-xl font-serif italic leading-relaxed text-[#163020]/90 italic">
                "I Honor the Sacred Balance. I believe that my breath is a loan from the Earthly Laboratory. This day, I vow to give more than I take. My Work is my Worship."
              </p>
            </section>

            <section className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
              <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">VI. The Final Merger</h3>
              <p className="text-xl font-serif italic leading-relaxed text-[#163020]/90 italic">
                "I Fear No Completion. I am the spark returning to the Sun; I am the drop returning to the Infinite Ocean. I walk the path of The Great Return, knowing that every heartbeat brings me closer to the Final Merger."
              </p>
            </section>
          </div>

          {/* THE SOVEREIGN AFFIRMATION */}
          <div className="mt-32 p-16 rounded-[60px] bg-white border border-[#163020]/5 text-center shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif italic text-[#163020] mb-2">
              "I am Rooted. I am Unbound. I am Sovereign."
            </h2>
          </div>
        </div>

        <nav className="mt-32 text-center">
          <Link href="/" className="px-12 py-5 rounded-full bg-[#163020] text-white text-[11px] uppercase font-black tracking-[0.4em] hover:bg-[#2D9596] transition-all">
            ← Return to Sanctuary
          </Link>
        </nav>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
