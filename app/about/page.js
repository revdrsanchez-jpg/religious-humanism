"use client";
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const sections = [
    { h: "The Origin", s: "The Celestial Forge", t: "We are the children of the Celestial Forge. The All-Knowing Divine woven the sacred elements of Iron, Calcium, and Magnesium into a tapestry of light. We are the Resurrection of the Stars." },
    { h: "The Presence", s: "The All-Knowing Divine", t: "The Divine is the Infinite Breath. God is not a distant judge, but the Eternal Presence flowing through the marrow of the bone and the sap of the tree." },
    { h: "The Temple", s: "The Sovereign Vessel", t: "Every human is a Sovereign Temple. Your connection to the Divine is an unbroken thread. You are the eyes of the Creator beholding the Garden." },
    { h: "The Path", s: "The Chemistry of Holiness", t: "Through the earthly sacraments of Living Water, Salt, and Solar Radiance, we wash away shadows and return to Infinite Resonance." },
    { h: "The Covenant", s: "Universal Stewardship", t: "We are Guardians of the Sacred Vineyard. We vow to protect the spark of the Divine in all things. Our work is our worship." },
    { h: "The Completion", s: "The Final Merger", t: "We do not fear the setting sun. As a drop of rain finds its way home to the Ocean of Grace, we return to the Source to achieve Total Perfection." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans p-6">
      <main className="max-w-3xl mx-auto pt-20 pb-40">
        <h1 className="text-4xl font-serif italic text-center mb-20 text-teal-100">The Testament of the Essence</h1>
        
        <div className="space-y-16">
          {sections.map((sec, i) => (
            <div key={i} className="border-l border-teal-500/20 pl-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-teal-500 mb-2">{sec.h}</h4>
              <h2 className="text-xl font-serif italic mb-4">{sec.s}</h2>
              <p className="text-slate-400 leading-relaxed font-serif italic text-lg">"{sec.t}"</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white/[0.02] border border-white/5 rounded-3xl text-center italic font-serif text-xl">
          "Rooted in the Earth, Forged in the Heavens, Bound to the Divine. I am a Temple of One, a Steward of All."
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="text-[10px] tracking-[0.5em] uppercase text-slate-500 hover:text-teal-400">← Return</Link>
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
