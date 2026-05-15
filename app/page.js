"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showDivine, setShowDivine] = useState(false);
  const [showSteward, setShowSteward] = useState(false);
  const [showBrain, setShowBrain] = useState(false);

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
            <div className="space-y-8 text-slate-300 font-serif italic leading-relaxed text-sm">
               <div className="grid md:grid-cols-2 gap-8">
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase">The Sacred Debt:</strong> Honoring the celestial loan of your iron and breath.</p>
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase">Equality of the Soul:</strong> Protecting the Star Dust in every sibling.</p>
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase">Work as Worship:</strong> Mirroring the Architect by creating beauty.</p>
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase">Legacy of Light:</strong> Planting seeds for the Great Return.</p>
               </div>
               <p className="text-center text-teal-100 text-xl border-t border-white/5 pt-8">"I walk upon this Earth as a humble guest and a holy guardian."</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: THE OPEN BRAIN */}
      {showBrain && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowBrain(false)}></div>
          <div className="relative bg-slate-900/80 border border-teal-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-16 shadow-[0_0_100px_rgba(20,184,166,0.2)] scrollbar-hide">
            <button onClick={() => setShowBrain(false)} className="absolute top-6 right-6 text-teal-500 hover:text-white transition-colors">✕</button>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif italic text-teal-200 mb-2 uppercase tracking-widest">The Sacred Crown</h2>
              <p className="text-teal-500/60 tracking-[0.4em] uppercase text-[10px] font-bold">Instrument of the Infinite</p>
            </div>
            <div className="space-y-12 text-slate-300">
              <div className="grid md:grid-cols-2 gap-10 text-sm font-serif italic opacity-80">
                <p><strong className="text-teal-400 not-italic block mb-1 uppercase">The Design:</strong> A mirror of the heavens and cosmic networks.</p>
                <p><strong className="text-teal-400 not-italic block mb-1 uppercase">The Sleeping Sun:</strong> Universal resonance and healing power.</p>
                <p><strong className="text-teal-400 not-italic block mb-1 uppercase">Awakening:</strong> Discharge fear to rise to elevated frequency.</p>
                <p><strong className="text-teal-400 not-italic block mb-1 uppercase">Synchronicity:</strong> Thoughts and heartbeat moving as one.</p>
              </div>
              <div className="pt-10 border-t border-white/5 text-center">
                <p className="text-teal-100 font-serif italic text-xl">"My mind is a window into the Infinite. I see through the eyes of the Creator."</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase">
          Religious <br/><span className="text-teal-400 uppercase">Humanism</span>
        </h1>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div onClick={() => setShowDivine(true)} className="group p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all cursor-pointer hover:border-teal-500/40">
            <div className="text-4xl mb-8 transform group-hover:scale-110 transition-all">⚡</div>
            <h3 className="text-xl font-bold mb-4">The Supreme Essence</h3>
            <p className="text-slate-400 text-sm">Witness the Infinite Breath.</p>
          </div>
          <div onClick={() => setShowSteward(true)} className="group p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all cursor-pointer hover:border-teal-500/40">
            <div className="text-4xl mb-8 transform group-hover:scale-110 transition-all">🌍</div>
            <h3 className="text-xl font-bold mb-4">Universal Stewardship</h3>
            <p className="text-slate-400 text-sm">Embrace the Steward's Vow.</p>
          </div>
          <div onClick={() => setShowBrain(true)} className="group p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl transition-all cursor-pointer hover:border-teal-500/40">
            <div className="text-4xl mb-8 transform group-hover:scale-110 transition-all">🧠</div>
            <h3 className="text-xl font-bold mb-4">The Open Brain</h3>
            <p className="text-slate-400 text-sm">Expand the Sacred Crown.</p>
          </div>
        </div>

        <section className="mt-40 mb-40 text-center relative z-50">
          <Link href="/practice">
            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-[10px] tracking-[0.4em] uppercase hover:bg-teal-400 transition-all shadow-2xl">
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
