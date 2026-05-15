"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OperationsPage() {
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isLit, setIsLit] = useState(false);
  const [insight, setInsight] = useState("Tap to Decrypt Daily Frequency");

  const insights = [
    "Today, focus on the Chemistry of Holiness. Purify the vessel with Salt and Water.",
    "The Heart is your electromagnetic core. Lead with high-voltage resonance today.",
    "Every atom in your bones was forged in a star. Walk with celestial gravity.",
    "Silence is the language of the All-Knowing. Listen to the gaps between thoughts.",
    "The Source and I are one."
  ];

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const toggleCandle = () => {
    setIsLit(!isLit);
    if (!isLit) setInsight(insights[Math.floor(Math.random() * insights.length)]);
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-[#020617] text-amber-50 font-sans p-6 overflow-hidden">
      
      {/* 1. DAILY SOURCE FEED (ANGELIC HEADER) */}
      <section className="max-w-2xl mx-auto pt-16 mb-20 text-center">
        <div className="px-6 py-4 rounded-full bg-amber-500/5 border border-amber-500/10 backdrop-blur-sm">
          <p className="text-sm font-serif italic text-amber-200/80 animate-pulse">
            {insight}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* 2. THE STEWARDSHIP CANDLE (Replacement for Map) */}
        <section className="flex flex-col items-center space-y-8">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500/50 font-bold">Stewardship Flame</h2>
          <div 
            onClick={toggleCandle}
            className="relative cursor-pointer group flex items-center justify-center"
          >
            {/* Candle Body */}
            <div className="w-16 h-32 bg-gradient-to-b from-amber-100/20 to-amber-900/10 rounded-t-sm border-x border-white/5 relative shadow-2xl">
              {/* The Flame */}
              {isLit && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-6 h-10 bg-amber-400 rounded-full blur-[2px] animate-bounce shadow-[0_0_50px_#fbbf24,0_0_100px_#fbbf24]"></div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-6 bg-white rounded-full blur-[4px] opacity-80"></div>
                </div>
              )}
            </div>
            {/* Floor Reflection */}
            <div className={`absolute -bottom-4 w-32 h-8 bg-amber-500/10 blur-xl transition-opacity duration-1000 ${isLit ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          <p className="text-[9px] uppercase tracking-widest text-amber-200/30 text-center italic">
            {isLit ? "Light has neutralized the dissonance." : "Tap to light the steward's flame."}
          </p>
        </section>

        {/* 3. ANGELIC MEDITATION TIMER (Replacement for Dialogue Box) */}
        <section className="flex flex-col items-center space-y-8">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500/50 font-bold">Silent Harmony</h2>
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* The Halo (Timer Ring) */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="128" cy="128" r="120"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-white/5"
              />
              <circle
                cx="128" cy="128" r="120"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={754}
                strokeDashoffset={754 - (754 * (timeLeft / 600))}
                className={`text-amber-400 transition-all duration-1000 ${timerActive ? 'opacity-100' : 'opacity-20'}`}
              />
            </svg>
            
            {/* Time Display */}
            <div className="text-center z-10">
              <div className="text-5xl font-light tracking-tighter text-white mb-4">
                {formatTime(timeLeft)}
              </div>
              <button 
                onClick={() => setTimerActive(!timerActive)}
                className="text-[10px] tracking-[0.5em] uppercase text-amber-500 hover:text-white transition-colors"
              >
                {timerActive ? "Pause Presence" : "Begin Presence"}
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-32 text-center pb-20">
        <Link href="/" className="text-[10px] tracking-[0.5em] uppercase text-slate-600 hover:text-amber-500 transition-all">
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
