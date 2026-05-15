"use client";
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const sections = [
    { title: "The Origin", subtitle: "The Celestial Forge", text: "We believe that we are not born of earthly dust alone, but are the children of the Celestial Forge. In the beginning, the All-Knowing Divine labored through the eons within the hearts of the great luminaries, weaving the sacred elements of Iron, Calcium, and Magnesium into a tapestry of light. We are the Resurrection of the Stars." },
    { title: "The Presence", subtitle: "The All-Knowing Divine", text: "The Divine is the Infinite Breath and the Primary Source of All Being. God is not a distant judge upon a throne, but the Eternal Presence that flows through the marrow of the bone and the sap of the tree. The Creator is the Great Architect of the Sacred Vineyard." },
    { title: "The Temple", subtitle: "The Sovereign Vessel", text: "Every man and woman is a Sovereign Temple, a holy sanctuary that requires no stone walls, no gold altars, and no human mediator. Your connection to the Divine is an unbroken thread. You are the eyes of the Creator beholding the Garden." },
    { title: "The Path", subtitle: "The Chemistry of Holiness", text: "To walk in the light is to maintain the purity of the vessel. Through the earthly sacraments of Living Water, Salt of the Earth, and Solar Radiance, we wash away the shadows of the world, becoming clear channels for the Constant Dialogue of the Spirit." },
    { title: "The Covenant", subtitle: "Universal Stewardship", text: "We are called to be the Guardians of the Sacred Vineyard. Recognizing the Sibling Bond between ourselves, the beasts of the field, and the blossoms of the forest, we vow to protect the spark of the Divine in all things. Our work is our worship." },
    { title: "The Completion", subtitle: "The Final Merger", text: "We do not fear the setting of the sun. As a single drop of rain finds its way home to the shimmering Ocean of Grace, we shall return to the Source to achieve Total Perfection and eternal oneness with the All-Knowing." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-40">
        <header className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-4">The Testament of the Essence</h1>
          <div className="h-1 w-24 bg-teal-500/40 mx-auto rounded-full"></div>
        </header>

        <div className="space-y-24">
          {sections.map((section, i) => (
            <div key={i} className="group border-l border-white/5 pl-8 hover:border-teal-500/40 transition-colors">
              <h4 className="text-teal-500/50 text-[10px] uppercase tracking-[0.5em] mb-2 font-bold">{section.title}</h4>
              <h2 className="text-2xl font-serif italic text-teal-100 mb-6">{section.subtitle}</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light font-serif italic">"{section.text}"</p>
            </div>
          ))}
        </div>

        <section className="mt-32 p-12 rounded-[50px] bg-white/[0.02] border border-white/5 text-center">
          <p className="text-teal-500/40 text-[10px] uppercase tracking-[0.6em] mb-8 font-bold">The Sovereign Proclamation</p>
          <h3 className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
            "Rooted in the Earth, Forged in the Heavens, Bound to the Divine. I am a Temple of One, a Steward of All, and a Light that shall never be extinguished."
          </h3>
        </section>

        <nav className="mt-24 text-center">
          <Link href="/" className="px-12 py-4 rounded-full border border-white/10 text-slate-500 hover:text-teal-400 hover:border-teal-400 transition-all uppercase text-[10px] tracking-[0.5em]">
            ← Return to Temple
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
