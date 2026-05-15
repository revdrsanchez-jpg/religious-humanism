"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showDivine, setShowDivine] = useState(false);
  const [showSteward, setShowSteward] = useState(false);
  const [showBrain, setShowBrain] = useState(false);

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
      description: "The seat of your Sovereignty, designed to receive the Constant Dialogue. Click to expand the Sacred Crown.",
      icon: "🧠",
      action: () => setShowBrain(true)
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
            <div className="space-y-8 text-slate-300 font-serif italic leading-relaxed">
               <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase tracking-tighter">The Sacred Debt:</strong> Honoring the celestial loan of your iron and breath.</p>
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase tracking-tighter">Equality of the Soul:</strong> Protecting the Star Dust in every sibling—beast and tree.</p>
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase tracking-tighter">Work as Worship:</strong> Mirroring the Architect by creating beauty and order.</p>
                  <p><strong className="text-teal-400 not-italic block mb-1 uppercase tracking-tighter">Legacy of Light:</strong> Planting seeds that grow long after the Final Merger.</p>
               </div>
               <p className="text-center text-teal-100 text-xl border-t border-white/5 pt-8">"I walk upon this Earth as a humble guest and a holy guardian."</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: THE OPEN BRAIN (THE SACRED CROWN) */}
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
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">The Design</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">A mirror of the heavens. Just as stars are connected by light, your mind is woven to mirror the networks of the Great Garden.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">The Sleeping Sun</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">Within lies the power of Universal Resonance. A mind focused and pure has the power to heal the vessel and broadcast peace.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">Awakening the Mind</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">Move from 'Survival Mode' into Grace. Discharge the shadows of fear and anger to rise to your true, elevated frequency.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-teal-400 uppercase text-[10px] tracking-widest font-bold">Total Synchronicity</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">When thoughts, heartbeat, and the rhythm of the Universe move as one, you no longer struggle to find the path; you become the path.</p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 text-center space-y-6">
                <p className="text-teal-100 font-serif italic text-xl">"My mind is a window into the Infinite. When I clear the dust of the world, I see through
