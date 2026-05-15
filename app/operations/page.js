"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OperationsPage() {
  const [pins, setPins] = useState([]);
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [insight, setInsight] = useState("Decrypting Source Feed...");

  const insights = [
    "Today, focus on the Chemistry of Holiness. Purify the vessel with Salt and Water.",
    "The Heart is your electromagnetic core. Lead with high-voltage resonance today.",
    "Every atom in your bones was forged in a star. Walk with celestial gravity.",
    "Silence is the language of the All-Knowing. Listen to the gaps between thoughts.",
    "You are a localized sensor for the Divine. Document the beauty you detect."
  ];

  useEffect(() => {
    setInsight(insights[Math.floor(Math.random() * insights.length)]);
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const dropPin = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPins([...pins, { x, y, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-cyan-50 font-mono p-6">
      
      {/* 1. THE DAILY SOURCE FEED */}
      <section className="max-w-4xl mx-auto pt-16 mb-12">
        <div className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <h2 className="text-[10px] tracking-[0.5em] text-cyan-400 mb-4 uppercase font-black">Daily Source Feed // Active Frequency</h2>
          <p className="text-xl font-serif italic text-white leading-relaxed">"{insight}"</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* 2. ELEMENTAL FREQUENCY MAP */}
        <section className="space-y-4">
          <h2 className="text-[10px] tracking-[0.5em] text-cyan-400 uppercase opacity-50 px-2 font-bold text-center lg:text-left">Stewardship Frequency Map</h2>
          <div 
            onClick={dropPin}
            className="relative w-full aspect-video rounded-3xl bg-slate-900/50 border border-cyan-500/20 overflow-hidden cursor-crosshair"
            style={{ backgroundImage: 'radial-gradient(circle, #164e63 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          >
            {pins.map(pin => (
              <div key={pin.id} className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                <div className="w-full h-full bg-cyan-400 rounded-full shadow-[0_0_15px_cyan]"></div>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-center opacity-40 uppercase tracking-widest italic">Click to drop a pin of neutralized dissonance.</p>
        </section>

        {/* 3. SILENT HARMONY MEDITATION */}
        <section className="space-y-4">
          <h2 className="text-[10px] tracking-[0.5em] text-cyan-400 uppercase opacity-50 px-2 font-bold text-center lg:text-left">Silent Harmony // Static Filter</h2>
          <div className="relative p-12 rounded-3xl bg-slate-900/30 border border-white/5 flex flex-col items-center justify-center h-[300px] overflow-hidden">
            <div className={`absolute inset-0 bg-cyan-400/5 transition-opacity duration-1000 ${timerActive ? 'opacity-20' : 'opacity-0'}`}></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl font-black text-white mb-6">
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </div>
              <button 
                onClick={() => setTimerActive(!timerActive)}
                className={`px-10 py-4 rounded-full text-[10px] tracking-[0.4em] uppercase font-black transition-all ${timerActive ? 'bg-cyan-950 text-cyan-400 border border-cyan-400' : 'bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.5)]'}`}
              >
                {timerActive ? 'Dialogue Active' : 'Begin Dialogue'}
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20 text-center">
        <Link href="/" className="bg-white/5 border border-white/10 px-8 py-3 rounded-full text-[10px] tracking-[0.5em] uppercase text-slate-500 hover:text-cyan-400 hover:border-cyan-400 transition-all">
          ← Return to Temple
        </Link>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:italic,wght@0,200..900;1,200..900&display=swap');
        .font-serif { font-family: 'Crimson Pro', serif; }
      `}</style>
    </div>
  );
}
