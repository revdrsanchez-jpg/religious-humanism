"use client";
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse"></div>
      </div>

      <header className="relative z-10 pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          RELIGIOUS <br/><span className="text-teal-400">HUMANISM</span>
        </h1>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto py-10 px-6">
        <section className="mt-20 mb-40 text-center relative z-50">
          <Link href="/practice">
            <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-teal-400 transition-all active:scale-95 cursor-pointer shadow-2xl">
              Begin System Sync
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
