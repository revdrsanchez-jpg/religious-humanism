"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [breathStage, setBreathStage] = useState('Stand Barefoot');

  // Simple Breath Calibration Cycle
  useEffect(() => {
    let interval;
    if (isSyncing) {
      const stages = ['Inhale Light', 'Hold Presence', 'Exhale Static', 'Rest in Grace'];
      let i = 0;
      interval = setInterval(() => {
        setBreathStage(stages[i % stages.length]);
        i++;
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isSyncing]);

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans selection:bg-[#2D9596]/20">
      
      {/* Radiant Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-white/40 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-teal-100/30 blur-[100px]"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-40">
        
        {/* SECTION 1: BREATH CALIBRATION TOOL */}
        <section className="text-center mb-32">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-8">System Sync</h4>
          <div 
            onClick={() => setIsSyncing(!isSyncing)}
            className="relative w-64 h-64 mx-auto flex items-center justify-center cursor-pointer group"
          >
            {/* Pulsing Aura */}
            <div className={`absolute inset-0 rounded-full border-2 border-[#2D9596]/20 transition-all duration-[4000ms] ${isSyncing ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute inset-0 rounded-full bg-[#2D9596]/5 transition-transform duration-[4000ms] ${isSyncing ? 'scale-110' : 'scale-90'}`}></div>
            
            <div className="z-10">
              <p className="text-[#163020] font-serif italic text-2xl">{isSyncing ? breathStage : "Begin Sync"}</p>
              {!isSyncing && <p className="text-[9px] uppercase tracking-widest mt-2 opacity-40">Tap to Calibrate</p>}
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PROTECTOR'S CREED */}
        <div className="max-w-2xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-serif italic text-[#163020] mb-4">The Protector’s Creed</h1>
            <p className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black italic">A Daily Declaration of the Covenant</p>
          </header>

          <div className="space-y-16 border-t border-[#163020]/5 pt-16">
            <section className="group">
              <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-3 italic">The Star-Forged Heavens</h3>
              <p className="text-xl font-serif italic leading-relaxed opacity-90 italic">
                "I am a Child of the Star-Forged Heavens. I believe that my flesh is a holy robe of light, woven in the ancient furnaces of the stars. I am the Resurrection of the Elements."
              </p>
            </section>

            <section className="group">
              <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-3 italic">The All-Knowing Vessel</h3>
              <p className="text-xl font-serif italic leading-relaxed opacity-90 italic">
                "I am a Vessel for the All-Knowing Divine. I believe that my life is the eyes, the ears, and the heart of the Source. I cast out the shadows of fear and open my soul to the Constant Dialogue."
              </p>
            </section>

            <section className="group">
              <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-3 italic">The Engine of Respect</h3>
              <p className="text-xl font-serif italic leading-relaxed opacity-90 italic">
                "I Fuel the Engine of Respect. I recognize the Divine Essence in every Sibling—the beast of the field and the stranger on the path. I do not walk in anger; I walk in Silent Harmony."
              </p>
            </section>

            <section className="group">
              <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-3 italic">The Sacred Balance</h3>
              <p className="text-xl font-serif italic leading-relaxed opacity-90 italic">
                "I Honor the Sacred Balance. I believe that my breath is a loan. My Work is my Worship. I shall stand as a shield for all that is pure."
              </p>
            </section>

            <section className="group">
              <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-3 italic">The Great Return</h3>
              <p className="text-xl font-serif italic leading-relaxed opacity-90 italic">
                "I Fear No Completion. I am the spark returning to the Sun; I am the drop returning to the Infinite Ocean."
              </p>
            </section>
          </div>

          <div className="mt-24 p-12 rounded-[50px] bg-white border border-[#163020]/5 text-center shadow-sm">
            <h2 className="text-3xl font-serif italic text-[#163020]">
              "I am Rooted. I am Unbound. I am Sovereign."
            </h2>
          </div>
        </div>

        <nav className="mt-32 text-center">
          <Link href="/" className="px-12 py-4 rounded-full bg-[#163020] text-white text-[10px] uppercase font-black tracking-widest hover:bg-[#2D9596] transition-all">
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
