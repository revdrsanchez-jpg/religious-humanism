"use client";
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const tenets = [
    {
      title: "The Supreme Essence",
      description: "Guardians of the electric pulse—the essence breathed into us at birth. It is the core of our being and our connection to the creator.",
      icon: "⚡"
    },
    {
      title: "Universal Stewardship",
      description: "Protection of all life forms: Mineral, Plant, and Animal. Recognizing the creator within the atomic structure of all things.",
      icon: "🌍"
    },
    {
      title: "The Open Brain",
      description: "True understanding comes when the brain is fully open to the frequency of the essence. We act as humble stewards of the pulse.",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* Energy Field Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* Hero Header */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-teal-500/20 rounded-full bg-teal-500/5 text-teal-400 text-[10px] tracking-[0.4em] uppercase">
          System Status: Harmonized
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase">
          Religious <br/><span className="text-teal-400 uppercase">Humanism</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto font-light tracking-wide italic">
          "Guardians of the Essence. Stewards of the Pulse."
        </p>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        {/* Interactive Tenet Tiles */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tenets.map((tenet, index) => (
            <div key={index} className="group relative p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]">
              <div className="text-4xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{tenet.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors tracking-tight">{tenet.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">{tenet.description}</p>
            </div>
          ))}
        </div>

        {/* The Portal Button (Z-50 to ensure clickability) */}
        <section className="mt-40 mb-40 text-center relative z-50">
          <Link href="/practice">
            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-teal-400 transition-all active:scale-95 shadow-2xl cursor-pointer">
              Begin System Sync
            </button>
          </Link>
        </section>

        {/* THE GUARDIAN'S COVENANT */}
        <section className="max-w-3xl mx-auto py-20 px-6 border-y border-white/5 bg-white/[0.01] rounded-[100px]">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic text-teal-100 mb-4 tracking-widest">The Guardian’s Covenant</h2>
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em]">Morning Attunement</p>
          </div>

          <div className="space-y-20">
            {[
              { head: "The Ancient Forge", body: "I am a Child of the Ancient Forge. My blood carries the iron of fallen stars; my bones, the dust of the celestial furnace. I honor the eons of divine labor that wove this vessel into being." },
              { head: "The Infinite Whisper", body: "I am the Senses of the Eternal. I am the eyes, the ears, and the heartbeat of the Creator exploring its own vast mystery. I cast aside the noise of the world to hear the Infinite Whisper." },
              { head: "The Sacred Debt", body: "I acknowledge my place in the Great Web. This day, I vow to give more than I gather. My labor is my prayer. I stand as a shield for all that is fragile." },
              { head: "The Soul’s Return", body: "I fear no Ending. I know that this body is a gift on loan, but my essence is undying. I am the drop returning to the Deep; I am the spark returning to the Great Sun." }
            ].map((creed, i) => (
              <div key={i} className="text-center max-w-xl mx-auto">
                <h4 className="text-teal-500/60 text-xs uppercase tracking-[0.3em] mb-4">{creed.head}</h4>
                <p className="text-slate-300 font-serif italic text-xl leading-relaxed">"{creed.body}"</p>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <div className="text-teal-500/20 text-3xl mb-8">◈ ◈ ◈</div>
            <p className="text-white tracking-[0.8em] text-[11px] font-bold uppercase">Grounded • Awakened • Sovereign</p>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="text-slate-700 text-[10px] tracking-widest uppercase">EST. 2026 // ALL LIFE IS SACRED</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
