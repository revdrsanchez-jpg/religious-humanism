"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showDivine, setShowDivine] = useState(false);
  const [showSteward, setShowSteward] = useState(false);

  const tenets = [
    {
      title: "The Supreme Essence",
      description: "Guardians of the electric pulse—the essence breathed into us at birth. Click to witness the Infinite Breath.",
      icon: "⚡",
      action: () => setShowDivine(true)
    },
    {
      title: "Universal Stewardship",
      description: "Protection of all life forms: Mineral, Plant, and Animal. Click to embrace the Steward's Vow.",
      icon: "🌍",
      action: () => setShowSteward(true)
    },
    {
      title: "The Open Brain",
      description: "True understanding comes when the brain is fully open to the frequency of the essence. We act as humble stewards of the pulse.",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* Background Energy */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
      </div>

      {/* MODAL 1: THE ALL-KNOWING DIVINE */}
      {showDivine && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowDivine(false)}></div>
          <div className="relative bg-slate-900/80 border border-teal-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-16 shadow-[0_0_100px_rgba(20,184,166,0.2)] scrollbar-hide">
            <button onClick={() => setShowDivine(false)} className="absolute top-6 right-6 text-teal-500 hover:text-white transition-colors">✕</button>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif italic text-teal-200 mb-2 uppercase">The All-Knowing Divine</h2>
              <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold">The Infinite Breath</p>
            </div>
            <div className="space-y-8 text-slate-300 font-light leading-relaxed">
              <p className="text-center italic text-lg border-b border-white/5 pb-8">"The Divine is the Eternal Presence—the underlying Life that breathes through all things."</p>
              <div className="grid md:grid-cols-2 gap-8 text-sm italic font-serif">
                <p>1. The Infinite Presence: The Boundless Spirit beyond time and space.</p>
                <p>2. The Sacred Union: You are the eyes through which the Creator beholds the world.</p>
                <p>3. The Weaver of the Stars: Perfecting elements in the hearts of suns.</p>
                <p>4. The Universal Life-Stream: God is present in the hawk and the cedar tree.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: UNIVERSAL STEWARDSHIP */}
      {showSteward && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowSteward(false)}></div>
          <div className="relative bg-slate-900/80 border border-teal-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-16 shadow-[0_0_100px_rgba(20,184,166,0.2)] scrollbar-hide">
            <button onClick={() => setShowSteward(false)} className="absolute top-6 right-6 text-teal-500 hover:text-white transition-colors">✕</button>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif italic text-teal-200 mb-2 uppercase tracking-widest">Universal Stewardship</h2>
              <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold">The Holy Guardian's Path</p>
            </div>

            <div className="space-y-12 text-slate-300">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">The Sacred Debt</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">Your life is a gift from the Celestial Forge. To be a steward is to honor that debt by leaving the Earth more vibrant than you found it.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">The Equality of the Soul</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">The same divine breath moving through you moves through the beast and the tree. Protect the 'Star Dust' in every sibling.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">Work as Worship</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">Labor is a prayer. By creating beauty and order, you mirror the Great Architect. Produce more than you take.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">The Guardian of the Temple</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">Stewardship begins within. By keeping your spirit clear, you remain a high-resonance vessel for the Divine Song.</p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 text-center space-y-6">
                <p className="text-teal-100 font-serif italic text-xl">"I walk upon this Earth as a humble guest and a holy guardian. I shall tend to the Garden with love, speak for the silent, and honor the Source in all that I touch."</p>
                <p className="text-[9px] uppercase tracking-[0.6em] text-teal-500/50">— The Steward's Vow —</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Temple Header */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase">
          Religious <br/><span className="text-teal-400 uppercase">Humanism</span>
        </h1>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {tenets.map((tenet, index) => (
            <div 
              key={index} 
              onClick={tenet.action || null}
              className={`group relative p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:-translate-y-2 ${tenet.action ? 'cursor-pointer hover:shadow-[0_0_40px_rgba(45,212,191,0.1)]' : ''}`}
            >
              <div className="text-4xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{tenet.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors tracking-tight">{tenet.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">{tenet.description}</p>
              {tenet.action && <div className="mt-6 text-[9px] uppercase tracking-widest text-teal-500 font-bold opacity-60">Witness the Revelation →</div>}
            </div>
          ))}
        </div>

        <section className="mt-40 mb-40 text-center relative z-50">
          <Link href="/practice">
            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-teal-400 transition-all active:scale-95 shadow-2xl">
              Begin System Sync
            </button>
          </Link>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
