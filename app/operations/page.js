"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function OperationsPage() {
  const [timerActive, setTimerActive] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [timeLeft, setTimeLeft] = useState(600);
  const [isLit, setIsLit] = useState(false);
  const [insight, setInsight] = useState("Tap to Kindle the Light of Presence");
  const audioRef = useRef(null);

  const insights = [
    "Today, focus on the Chemistry of Holiness. Purify the vessel with Salt and Water.",
    "The Heart is your electromagnetic core. Lead with high-voltage resonance today.",
    "Every atom in your bones was forged in a star. Walk with celestial gravity.",
    "Silence is the language of the All-Knowing. Listen to the gaps between thoughts.",
    "I am the breath of the Creator moving through the Garden of the world."
  ];

  // Sync timeLeft when user changes minutes input
  useEffect(() => {
    if (!timerActive) setTimeLeft(minutes * 60);
  }, [minutes, timerActive]);

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      if (audioRef.current) audioRef.current.play(); // Sound the Angelic Bell
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
      {/* Hidden Audio Element for Angelic Alarm */}
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3" />

      <section className="max-w-2xl mx-auto pt-16 mb-20 text-center">
        <div className="px-6 py-4 rounded-full bg-amber-500/5 border border-amber-500/10 backdrop-blur-sm">
          <p className="text-sm font-serif italic text-amber-200/80 animate-pulse">"{insight}"</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* VIBRANT STEWARDSHIP FLAME */}
        <section className="flex flex-col items-center space-y-12">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-amber-500/40 font-bold">Stewardship Flame</h2>
          <div onClick={toggleCandle} className="relative cursor-pointer flex flex-col items-center">
            {/* The Wick & Flame */}
            {isLit && (
              <div className="absolute -top-16 z-20">
                <div className="relative w-8 h-12">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-40 animate-pulse scale-150"></div>
                  {/* Realistic Flame Shape */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-14 bg-gradient-to-t from-orange-600 via-amber-400 to-transparent rounded-full animate-flicker"></div>
                  {/* Blue Core */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-blue-400/40 rounded-full blur-[2px]"></div>
                </div>
              </div>
            )}
            {/* Realistic Candle Body */}
            <div className="w-20 h-40 bg-gradient-to-r from-amber-100/30 via-amber-50/40 to-amber-100/30 rounded-sm shadow-2xl border-t border-white/10 relative">
               <div className="absolute top-0 w-full h-2 bg-black/20 rounded-full blur-[1px]"></div>
               <div className="w-1 h-4 bg-slate-800 mx-auto -mt-2 rounded-full"></div> {/* The Wick */}
            </div>
            {/* Dynamic Light Casting */}
            <div className={`mt-4 w-48 h-12 bg-amber-500/10 blur-[40px] rounded-full transition-opacity duration-1000 ${isLit ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
        </section>

        {/* CUSTOM ANGELIC TIMER */}
        <section className="flex flex-col items-center space-y-10">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-amber-500/40 font-bold">Silent Harmony</h2>
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* The Halo (Timer Progress) */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 scale-110">
              <circle cx="144" cy="144" r="130" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-white/5" />
              <circle cx="144" cy="144" r="130" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray={816} strokeDashoffset={816 - (816 * (timeLeft / (minutes * 60)))} className="text-amber-400/60 transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            </svg>
            
            <div className="text-center z-10">
              <div className="text-6xl font-light text-white mb-2 tracking-tighter">
                {formatTime(timeLeft)}
              </div>
              
              {/* Custom Minute Input */}
              {!timerActive && (
                <div className="mb-6 flex flex-col items-center">
                  <label className="text-[9px] uppercase tracking-widest text-amber-500/50 mb-2">Set Minutes</label>
                  <input 
                    type="range" min="1" max="60" value={minutes} 
                    onChange={(e) => setMinutes(e.target.value)}
                    className="w-32 accent-amber-500 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-amber-200 mt-2 font-mono">{minutes}m</span>
                </div>
              )}

              <button 
                onClick={() => setTimerActive(!timerActive)}
                className={`px-8 py-3 rounded-full text-[10px] tracking-[0.4em] uppercase font-bold transition-all ${timerActive ? 'text-amber-500/40' : 'text-amber-400 hover:text-white'}`}
              >
                {timerActive ? "Presence Active" : "Begin Presence"}
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-32 text-center pb-20">
        <Link href="/" className="text-[10px] tracking-[0.4em] uppercase text-slate-700 hover:text-amber-500 transition-all">← Return to Temple</Link>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 100% { transform: translateX(-50%) scaleY(1) skewX(0deg); opacity: 0.9; }
          25% { transform: translateX(-50%) scaleY(1.05) skewX(1deg); opacity: 1; }
          50% { transform: translateX(-50%) scaleY(0.95) skewX(-1deg); opacity: 0.8; }
          75% { transform: translateX(-50%) scaleY(1.02) skewX(0.5deg); opacity: 0.95; }
        }
        .animate-flicker { animation: flicker 0.6s infinite; }
      `}</style>
    </div>
  );
}
