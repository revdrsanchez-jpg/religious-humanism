"use client";
import React from 'react';
import Link from 'next/link';

export default function PracticeHub() {
  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans selection:bg-[#2D9596]/20 overflow-x-hidden">
      
      {/* Morning Light Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-white/40 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-teal-100/30 blur-[100px]"></div>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-40">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4">Daily Calibration</h4>
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#163020] mb-6">The Protector’s Creed</h1>
          <div className="h-px w-32 bg-[#163020]/10 mx-auto mb-8"></div>
          <p className="text-slate-500 font-serif italic text-lg leading-relaxed max-w-xl mx-auto">
            "Recite this Creed while standing barefoot upon the Earth, facing the Morning Light."
          </p>
        </header>

        {/* The Creed Manuscript */}
        <div className="space-y-16">
          <section className="border-l-2 border-[#2D9596]/20 pl-8 group hover:border-[#2D9596] transition-colors">
            <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-4 italic">I. The Star-Forged Heavens</h3>
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              "I am a Child of the Star-Forged Heavens. I believe that my flesh is a holy robe of light, woven in the ancient furnaces of the stars. I honor the divine labor that crafted this temple. I am the Resurrection of the Elements."
            </p>
          </section>

          <section className="border-l-2 border-[#2D9596]/20 pl-8 group hover:border-[#2D9596] transition-colors">
            <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-4 italic">II. The Infinite Vessel</h3>
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              "I am a Vessel for the All-Knowing Divine. I believe that my life is the eyes, the ears, and the heart of the Source. I cast out the shadows of fear and open my soul to the Constant Dialogue."
            </p>
          </section>

          <section className="border-l-2 border-[#2D9596]/20 pl-8 group hover:border-[#2D9596] transition-colors">
            <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-4 italic">III. The Engine of Respect</h3>
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              "I Fuel the Engine of Respect. I recognize the Divine Essence in every Sibling—the beast of the field, the leaf on the tree, and the stranger on the path. I do not walk in anger; I walk in Silent Harmony."
            </p>
          </section>

          <section className="border-l-2 border-[#2D9596]/20 pl-8 group hover:border-[#2D9596] transition-colors">
            <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-4 italic">IV. The Sacred Balance</h3>
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              "I Honor the Sacred Balance. I believe that my breath is a loan. This day, I vow to give more than I take. My Work is my Worship. I shall stand as a shield for all that is pure."
            </p>
          </section>

          <section className="border-l-2 border-[#2D9596]/20 pl-8 group hover:border-[#2D9596] transition-colors">
            <h3 className="text-[#947617] text-[10px] uppercase tracking-[0.4em] font-black mb-4 italic">V. The Final Merger</h3>
            <p className="text-xl font-serif italic leading-relaxed opacity-90">
              "I Fear No Completion. I walk the path of The Great Return, knowing that every heartbeat brings me closer to the Final Merger. I am the spark returning to the Sun; I am the drop returning to the Infinite Ocean."
            </p>
          </section>
        </div>

        {/* The Sovereign Seal */}
        <div className="mt-32 p-16 rounded-[60px] bg-white border border-[#163020]/5 text-center shadow-sm">
          <p className="text-[#947617] text-[12px] uppercase tracking-[0.6em] font-black mb-10 italic">The Affirmation</p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#163020] mb-2 leading-tight">
            "I am Rooted. I am Unbound. I am Sovereign."
          </h2>
        </div>

        {/* Return to Sanctuary */}
        <nav className="mt-24 text-center">
          <Link href="/" className="inline-block px-12 py-5 rounded-full bg-[#163020] text-white text-[11px] uppercase font-black tracking-[0.5em] hover:bg-[#2D9596] transition-all shadow-xl">
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
