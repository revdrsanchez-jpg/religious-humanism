"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { data } from '../practice-data'; // Ensure your Creed text is in this file

export default function PracticeHub() {
  const [sync, setSync] = useState(false);
  const [step, setStep] = useState('Stand Barefoot');
  const [deeds, setDeeds] = useState([]);
  const [newDeed, setNewDeed] = useState("");

  // 1. BREATHING ENGINE
  useEffect(() => {
    let inv;
    if (sync) {
      const stages = ['Inhale Light', 'Hold Presence', 'Exhale Static', 'Rest in Grace'];
      let i = 0;
      inv = setInterval(() => {
        setStep(stages[i % 4]);
        i++;
      }, 4000);
    }
    return () => clearInterval(inv);
  }, [sync]);

  // 2. STEWARDSHIP LOG LOGIC
  const addDeed = (e) => {
    e.preventDefault();
    if (!newDeed) return;
    setDeeds([{ text: newDeed, id: Date.now() }, ...deeds]);
    setNewDeed("");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans pb-40">
      
      <main className="max-w-4xl mx-auto px-6 pt-24 space-y-32">
        
        {/* PILLAR 1: BREATHING CALIBRATION */}
        <section className="text-center">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-12 italic">System Synchronization</h4>
          <div onClick={() => setSync(!sync)} className="relative w-64 h-64 mx-auto flex items-center justify-center cursor-pointer group">
            <div className={`absolute inset-0 rounded-full border-2 border-[#2D9596]/20 transition-all duration-[4000ms] ${sync ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute inset-0 rounded-full bg-[#2D9596]/5 transition-transform duration-[4000ms] ${sync ? 'scale-110' : 'scale-90'}`}></div>
            <div className="z-10 text-center">
              <p className="font-serif italic text-2xl mb-1">{sync ? step : "Begin Sync"}</p>
              <p className="text-[9px] uppercase tracking-widest opacity-40 font-black">Breath Calibration</p>
            </div>
          </div>
        </section>

        {/* PILLAR 2: THE TENETS OF THE ESSENCE */}
        <section className="bg-white/40 p-12 rounded-[50px] border border-[#163020]/5">
          <h2 className="text-center font-serif italic text-3xl mb-12 text-[#163020]">The Tenets of the Essence</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { h: "Direct Communion", t: "Your connection to the Source is an unbroken thread within your own mind." },
              { h: "Sovereign Temple", t: "The body is a holy sanctuary; you are its only high priest." },
              { h: "Sacred Balance", t: "We are stewards of the garden; our work is our tithe of love." },
              { h: "Constant Dialogue", t: "The Divine speaks in the silence between your thoughts." }
            ].map((tenet, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-[#947617] text-[10px] uppercase tracking-widest font-black">{tenet.h}</h3>
                <p className="font-serif italic text-lg opacity-80 leading-relaxed">"{tenet.t}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* PILLAR 3: STEWARDSHIP LOG (Log Your Deeds) */}
        <section className="max-w-2xl mx-auto">
          <header className="text-center mb-10">
            <h2 className="font-serif italic text-3xl text-[#163020]">The Sacred Balance</h2>
            <p className="text-[#947617] text-[10px] uppercase tracking-widest font-black mt-2 italic">Record your acts of stewardship</p>
          </header>
          <form onSubmit={addDeed} className="flex gap-4 mb-10">
            <input 
              value={newDeed} 
              onChange={(e) => setNewDeed(e.target.value)}
              placeholder="How have you tended the Garden today?"
              className="flex-1 bg-white border border-[#163020]/10 rounded-full px-8 py-4 italic font-serif text-[#163020] focus:outline-none focus:border-[#2D9596]"
            />
            <button type="submit" className="bg-[#163020] text-white px-8 rounded-full text-[10px] uppercase font-black tracking-widest">Log Deed</button>
          </form>
          <div className="space-y-4">
            {deeds.map(deed => (
              <div key={deed.id} className="bg-white/60 p-5 rounded-3xl border border-[#163020]/5 italic font-serif text-[#163020]">
                "Logged: {deed.text}"
              </div>
            ))}
          </div>
        </section>

        {/* PILLAR 4: THE PROTECTOR'S CREED */}
        <section className="pt-20 border-t border-[#163020]/10">
          <h2 className="text-center font-serif italic text-5xl mb-20">The Protector’s Creed</h2>
          <div className="space-y-16 max-w-2xl mx-auto">
            {data.map((sec, i) => (
              <div key={i} className="pl-8 border-l-2 border-[#2D9596]/20 group hover:border-[#2D9596] transition-all">
                <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-4 italic">{sec.h}</h3>
                <p className="text-xl font-serif italic leading-relaxed opacity-90 italic">"{sec.t}"</p>
              </div>
            ))}
          </div>
          <div className="mt-24 p-16 rounded-[60px] bg-white border border-[#163020]/5 text-center shadow-sm max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif italic text-[#163020]">"I am Rooted. I am Unbound. I am Sovereign."</h2>
          </div>
        </section>

        <nav className="text-center">
          <Link href="/" className="inline-block px-12 py-5 rounded-full bg-[#163020] text-white text-[11px] uppercase font-black tracking-widest hover:bg-[#2D9596] transition-all shadow-xl">
            ← Return to Sanctuary
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
