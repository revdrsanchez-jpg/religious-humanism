"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showDivine, setShowDivine] = useState(false);

  const tenets = [
    {
      title: "The Supreme Essence",
      description: "Guardians of the electric pulse—the essence breathed into us at birth. Click to witness the Infinite Breath.",
      icon: "⚡",
      clickable: true
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

      {/* DIVINE REVELATION MODAL */}
      {showDivine && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowDivine(false)}></div>
          <div className="relative bg-slate-900/80 border border-teal-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-16 shadow-[0_0_100px_rgba(20,184,166,0.2)] scrollbar-hide">
            <button 
              onClick={() => setShowDivine(false)}
              className="absolute top-6 right-6 text-teal-500 hover:text-white transition-colors text-2xl"
            >✕</button>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif italic text-teal-200 mb-4 uppercase tracking-tighter">The All-Knowing Divine</h2>
              <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold">The Infinite Breath</p>
            </div>

            <div className="space-y-12 text-slate-300 font-light leading-relaxed">
              <p className="text-center italic text-xl border-b border-white/5 pb-8">
                "The Divine is not a judge on a distant throne... The Divine is the Eternal Presence—the underlying Life that breathes through all things."
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-teal-400 uppercase text-xs tracking-widest mb-3">1. The Infinite Presence</h4>
                  <p className="text-sm opacity-80 font-serif italic">The Boundless Spirit that flows beyond the limits of time and space. God is "All-Knowing" because the Divine is the sum of every heartbeat.</p>
                </div>
                <div>
                  <h4 className="text-teal-400 uppercase text-xs tracking-widest mb-3">2. The Sacred Union</h4>
                  <p className="text-sm opacity-80 font-serif italic">The thread between you and the Creator has never been cut. You are the eyes through which the Creator beholds the world.</p>
                </div>
                <div>
                  <h4 className="text-teal-400 uppercase text-xs tracking-widest mb-3">3. The Weaver of the Stars</h4>
                  <p className="text-sm opacity-80 font-serif italic">Perfecting the sacred elements—Iron, Calcium, and Magnesium—in the hearts of suns so that you could eventually walk upon the Earth.</p>
                </div>
                <div>
                  <h4 className="text-teal-400 uppercase text-xs tracking-widest mb-3">4. The Universal Life-Stream</h4>
                  <p className="text-sm opacity-80 font-serif italic">God is present in the hawk and the cedar tree as in the human heart. We are all branches of the same Divine Tree.</p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 text-center">
                <p className="text-teal-100 font-serif italic text-lg mb-4">"I am the breath of the Creator moving through the Garden of the world. I am never alone, for the Source and I are one."</p>
                <button 
                  onClick={() => setShowDivine(false)}
                  className="text-[10px] uppercase tracking-[0.5em] text-teal-500 hover:text-white transition-colors"
                >Return to the Temple Path</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Hero */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase">
          Religious <br/><span className="text-teal-400">Humanism</span>
        </h1>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        {/* Interactive Tenet Tiles */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tenets.map((tenet, index) => (
            <div 
              key={index} 
              onClick={tenet.clickable ? () => setShowDivine(true) : null}
              className={`group relative p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] ${tenet.clickable ? 'cursor-pointer border-teal-500/20 shadow-[0_0_20px_rgba(45,212,191,0.05)]' : ''}`}
            >
              <div className="text-4xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{tenet.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors tracking-tight">{tenet.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">{tenet.description}</p>
              {tenet.clickable && (
                <div className="mt-6 text-[9px] uppercase tracking-widest text-teal-500 font-bold opacity-60 group-hover:opacity-100 transition-opacity">Witness the Revelation →</div>
              )}
            </div>
          ))}
        </div>

        {/* The Portal Button */}
        <section className="mt-40 mb-40 text-center relative z-50">
          <Link href="/practice">
            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-teal-400 transition-all active:scale-95 shadow-2xl cursor-pointer">
              Begin System Sync
            </button>
          </Link>
        </section>

        {/* THE GUARDIAN'S COVENANT SECTION (Already established) */}
        {/* ... (Previous Covenant code remains here) ... */}
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
