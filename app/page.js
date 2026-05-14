"use client";
import React from 'react';

export default function LandingPage() {
  const tenets = [
    {
      title: "The Supreme Essence",
      description: "We are the guardians of the electric pulse—the essence breathed into us at birth. It is the core of our being and our connection to the creator.",
      icon: "⚡"
    },
    {
      title: "Universal Stewardship",
      description: "Our duty is the protection of all life forms: Mineral, Plant, and Animal. We recognize the creator within the atomic structure of all things.",
      icon: "🌍"
    },
    {
      title: "The Open Brain",
      description: "True understanding comes when the brain is fully open to the frequency of the essence. Until then, we act as humble stewards of the pulse.",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Section */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-950 border-b border-teal-900/30">
        <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-4">
          RELIGIOUS <span className="text-teal-400 font-normal">HUMANISM</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Guardians of the Essence. Stewards of the Pulse.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {tenets.map((tenet, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 transition-all group">
              <div className="text-4xl mb-6">{tenet.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-teal-100 group-hover:text-teal-400 transition-colors">
                {tenet.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {tenet.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-32 p-12 rounded-3xl bg-teal-950/20 border border-teal-900/30 text-center">
          <h2 className="text-3xl font-light mb-6">Enter the Stillness</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Begin your practice by synchronizing with the pulse that resides within your cellular structure.
          </p>
          <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-sm">
            Begin Practice
          </button>
        </section>
      </main>

      <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-900">
        © 2026 Religious Humanism. All Life is Sacred.
      </footer>
    </div>
  );
}
