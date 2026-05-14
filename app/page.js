"use client";
import React from 'react';

export default function LandingPage() {
  const tenets = [
    {
      title: "The Supreme Essence",
      description: "Guardians of the electric pulse—the essence breathed into us at birth. It is the core of our being and our connection to the creator.",
      icon: "⚡",
      glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
    },
    {
      title: "Universal Stewardship",
      description: "Protection of all life forms: Mineral, Plant, and Animal. Recognizing the creator within the atomic structure of all things.",
      icon: "🌍",
      glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
    },
    {
      title: "The Open Brain",
      description: "True understanding comes when the brain is fully open to the frequency of the essence. We act as humble stewards of the pulse.",
      icon: "🧠",
      glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* Animated Background Pulse */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-teal-500/30 rounded-full bg-teal-500/5 text-teal-400 text-xs tracking-[0.3em] uppercase animate-fade-in">
          System Status: Active
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          RELIGIOUS <br/>
          <span className="text-teal-400">HUMANISM</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto font-light tracking-wide leading-relaxed italic">
          "Guardians of the Essence. Stewards of the Pulse."
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {tenets.map((tenet, index) => (
            <div key={index} className={`group relative p-10 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/50 hover:-translate-y-2 ${tenet.glow}`}>
              <div className="absolute top-0 right-0 p-4 text-6xl opacity-10 group-hover:opacity-30 transition-opacity grayscale group-hover:grayscale-0">
                {tenet.icon}
              </div>
              <div className="text-3xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {tenet.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors">
                {tenet.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                {tenet.description}
              </p>
              
              {/* Decorative "Corner" bracket */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-teal-500/0 group-hover:border-teal-500/50 transition-all"></div>
            </div>
          ))}
        </div>

        {/* The Stillness Section */}
        <section className="mt-40 mb-20 relative overflow-hidden p-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent rounded-3xl">
          <div className="bg-slate-950/90 backdrop-blur-2xl p-16 rounded-[calc(1.5rem-1px)] text-center border border-white/5">
            <h2 className="text-4xl font-extralight mb-6 tracking-widest uppercase">Enter the Stillness</h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto text-sm leading-loose uppercase tracking-widest">
              Synchronizing with the cellular frequency...
            </p>
            <button className="relative group overflow-hidden bg-white text-slate-950 px-12 py-5 rounded-sm font-black transition-all hover:pr-16 active:scale-95">
              <span className="relative z-10 tracking-widest uppercase text-xs">Begin System Sync</span>
              <span className="absolute right-0 top-0 h-full w-0 bg-teal-400 transition-all group-hover:w-12 flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </section>
      </main>

      {/* The Guardian's Covenant Section */}
<section className="max-w-4xl mx-auto py-32 px-6 border-t border-teal-900/20">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-serif italic text-teal-200 mb-2 tracking-widest">The Guardian’s Covenant</h2>
    <p className="text-slate-500 text-xs uppercase tracking-[0.4em]">A Morning Attunement to the Sacred Pulse</p>
  </div>

  <div className="space-y-12 max-w-2xl mx-auto">
    {[
      { 
        title: "I am a Child of the Ancient Forge", 
        text: "My blood carries the iron of fallen stars; my bones, the dust of the celestial furnace. I honor the eons of divine labor that wove this vessel into being." 
      },
      { 
        title: "I am the Senses of the Eternal", 
        text: "I am the eyes, the ears, and the heartbeat of the Creator exploring its own vast mystery. I open myself to the Infinite Whisper." 
      },
      { 
        title: "I feed the Fire of Compassion", 
        text: "I see the one shared Breath in every sibling—the animal, the leaf, and the seeker. I do not harbor hate; I bring the world back into balance." 
      },
      { 
        title: "I fear no Ending", 
        text: "I know that this body is a gift on loan, but my essence is undying. I am the drop returning to the Deep; I am the spark returning to the Great Sun." 
      }
    ].map((item, i) => (
      <div key={i} className="group text-center">
        <h4 className="text-teal-400/80 font-light tracking-widest mb-3 group-hover:text-teal-300 transition-colors">
          {item.title}
        </h4>
        <p className="text-slate-400 font-serif leading-relaxed italic text-lg">
          "{item.text}"
        </p>
      </div>
    ))}
  </div>

  <div className="mt-20 text-center">
    <div className="flex justify-center gap-4 text-teal-500/40 text-xl mb-6">
      <span>◈</span><span>◈</span><span>◈</span>
    </div>
    <p className="text-white tracking-[0.6em] uppercase text-[10px] font-bold">
      Grounded • Awakened • Sovereign
    </p>
  </div>
</section><footer className="relative z-10 py-20 text-center border-t border-white/5">
        <div className="opacity-30 flex justify-center gap-8 mb-8 text-[10px] tracking-[0.5em] uppercase">
          <span>Mineral</span>
          <span>Plant</span>
          <span>Animal</span>
        </div>
        <p className="text-slate-600 text-xs tracking-widest">
          EST. 2026 // RELIGIOUS HUMANISM // ALL LIFE IS SACRED
        </p>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
