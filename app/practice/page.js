"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { data } from '../practice-data';

export default function PracticeHub() {
  const [sync, setSync] = useState(false);
  const [step, setStep] = useState('Stand Barefoot');
  const [deeds, setDeeds] = useState([]);
  const [input, setInput] = useState("");

  // THE CORRECT BREATHING RHYTHM
  useEffect(() => {
    let inv;
    if (sync) {
      const stages = ['Inhale Light', 'Hold Presence', 'Exhale Static', 'Rest in Grace'];
      let i = 0;
      inv = setInterval(() => {
        setStep(stages[i % 4]);
        i++;
      }, 4000);
    } else {
      setStep('Stand Barefoot');
    }
    return () => clearInterval(inv);
  }, [sync]);

  const saveDeed = (e) => {
    e.preventDefault();
    if (!input) return;
    setDeeds([{ text: input, time: new Date().toLocaleTimeString() }, ...deeds]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F2] text-[#163020] font-sans pb-40">
      <main className="max-w-4xl mx-auto px-6 pt-24 space-y-32">
        
        {/* 1. BREATHING CALIBRATION (Original Pulse) */}
        <section className="text-center">
          <h4 className="text-[#947617] text-[11px] uppercase tracking-[0.5em] font-black mb-12 italic">System Synchronization</h4>
          <div onClick={() => setSync(!sync)} className="relative w-64 h-64 mx-auto flex items-center justify-center cursor-pointer group">
            <div className={`absolute inset-0 rounded-full border-2 border-[#2D9596]/20 transition-all duration-[4000ms] ${sync ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute inset-0 rounded-full bg-[#2D9596]/5 transition-transform duration-[4000ms] ${sync ? 'scale-110' : 'scale-90'}`}></div>
            <div className="z-10 text-center">
              <p className="font-serif italic text-2xl mb-1">{sync ? step : "Begin Sync"}</p>
              <p className="text-[9px] uppercase tracking-widest opacity-40 font-black italic">{sync ? "Calibrating..." : "Initiate"}</p>
            </div>
          </div>
        </section>

        {/* 2. ALL THE TENENTS OF THE ESSENCE */}
        <section className="bg-white/50 p-12 rounded-[50px] border border-[#163020]/5 shadow-sm">
          <h2 className="text-center font-serif italic text-4xl mb-12 text-[#163020]">The Tenets of the Essence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { h: "Direct Communion", t: "Your connection to the Source is an unbroken thread within your own heart." },
              { h: "Sovereign Temple", t: "The body is a holy sanctuary; you are its only high priest and protector." },
              { h: "Sacred Balance", t: "We are stewards of the garden; our existence is a loan to be repaid through love." },
              { h: "Constant Dialogue", t: "The Divine speaks in the silence between your thoughts and the rhythm of your blood." },
              { h: "Universal Siblinghood", t: "All life is woven from the same celestial iron; to harm one is to harm the whole." },
              { h: "Work as Worship", t: "Every act of creation and preservation is a tithe offered to the All-Knowing." }
            ].map((t, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-[#947617] text-[11px] uppercase tracking-[0.3em] font-black">{t.h}</h3>
                <p className="font-serif italic text-lg opacity-80 leading-relaxed">"{t.t}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. STEWARDSHIP LOG (Log Your Deeds) */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-center font-serif italic text-3xl mb-8">Stewardship Journal</h2>
          <form onSubmit={saveDeed} className="flex gap-4 mb-10">
            <input 
              value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Record your act of Stewardship..."
              className="flex-1 bg-white border border-[#163020]/10 rounded-full px-8 py-4 italic font-serif text-[#163020] focus:outline-none focus:border-[#2D9596] shadow-inner"
            />
            <button type="submit" className="bg-[#163020] text-white px-8 rounded-full text-[10px] uppercase font-black tracking-widest shadow-lg">Log</button>
          </form>
          <div className="space-y-4">
            {deeds.map((d, i) => (
              <div key={i} className="bg-white/80 p-6 rounded-3xl border border-[#163020]/5 italic font-serif text-[#163020] shadow-sm">
                <span className="text-[#947617] text-[9px] block mb-1 uppercase font-black tracking-widest">{d.time} — DEED RECORDED</span>
                "{d.text}"
              </div>
            ))}
          </div>
        </section>

        {/* 4. THE PROTECTOR'S CREED */}
        <section className="pt-20 border-t border-[#163020]/10">
          <h2 className="text-center font-serif italic text-6xl mb-20">The Protector’s Creed</h2>
          <div className="space-y-20 max-w-2xl mx-auto">
            {data.map((sec, i) => (
              <div key={i} className="pl-10 border-l-2 border-[#2D9596]/20">
                <h3 className="text-[#947617] text-[12px] uppercase tracking-[0.4em] font-black mb-4 italic">{sec.h}</h3>
                <p className="text-xl font-serif italic leading-relaxed text-[#163020]">"{sec.t}"</p>
              </div>
            ))}
          </div>
          <div className="mt-32 p-20 rounded-[70px] bg-white border border-[#163020]/5 text-center shadow-xl max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#163020] leading-tight">
              "I am Rooted. I am Unbound. I am Sovereign."
            </h2>
          </div>
        </section>

        <nav className="text-center pt-20">
          <Link href="/" className="px-14 py-6 rounded-full bg-[#163020] text-white text-[11px] uppercase font-black tracking-[0.5em] shadow-2xl hover:bg-[#2D9596] transition-all">
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
