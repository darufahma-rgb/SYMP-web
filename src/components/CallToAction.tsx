import React from 'react';
import DreamTeamImg from './assets/DREAM TEAM SYMP.png'; 

export default function CallToAction() {
  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a]">
      
      {/* --- BACKGROUND FUTURISTIC ELEMENTS --- */}
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-[#4a0000] to-[#8A0202] opacity-80 z-0"></div>
      
      {/* Ambient Glow (Red Nebula) */}
      <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#ff0000] rounded-full blur-[120px] opacity-20 mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#8A0202] rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>

      {/* Grid Pattern Overlay (Tech vibe) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 text-center">
        
        {/* Futuristic Headline */}
        <div className="relative inline-block mb-8">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-white/80 tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Let's make something <br className="hidden md:block" /> 
            <span className="text-white drop-shadow-[0_0_25px_rgba(220,38,38,0.8)]">professional</span> together.
          </h2>
        </div>

        <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light tracking-wide">
          Hubungi <span className="font-bold text-white">SYMP Studio</span>. Bangun identitas visual masa depan Anda bersama tim elit kami.
        </p>

        {/* --- GLASS CARDS CONTACT (Horizontal Layout) --- */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-5 mb-16">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/6281311506025" 
            className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full md:w-64 hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs tracking-[0.2em] uppercase text-red-300 font-semibold mb-2">WhatsApp</span>
              <span className="text-xl font-bold text-white group-hover:text-red-100 transition-colors">+62 813-1150-6025</span>
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:sympp.uss@gmail.com" 
            className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full md:w-72 hover:bg-white/10 hover:border-red-500/50 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs tracking-[0.2em] uppercase text-red-300 font-semibold mb-2">Email Inquiries</span>
              <span className="text-xl font-bold text-white group-hover:text-red-100 transition-colors">sympp.uss@gmail.com</span>
            </div>
          </a>

          {/* Location Card */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full md:w-64 hover:bg-white/10 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
            <div className="flex flex-col items-center">
              <span className="text-xs tracking-[0.2em] uppercase text-red-300 font-semibold mb-2">Headquarters</span>
              <span className="text-lg font-medium text-white text-center leading-snug">Districh 7, <br/> Cairo – Egypt</span>
            </div>
          </div>
        </div>

      </div>

      {/* --- DREAM TEAM IMAGE (Anchored Bottom) --- */}
      <div className="relative w-full z-10 mt-auto flex justify-center pointer-events-none">
        {/* Gradient Fade to Blend Image Bottom with Background */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0a0000] via-[#4a0000]/50 to-transparent z-20"></div>
        
        {/* Main Image */}
        <div className="relative w-full max-w-6xl px-4 flex justify-end flex-col h-full">
            <img 
            src={DreamTeamImg} 
            alt="Dream Team SYMP Studio" 
            className="w-full h-auto max-h-[55vh] object-contain object-bottom mx-auto drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] transform translate-y-2 hover:scale-[1.01] transition-transform duration-1000 ease-in-out"
            />
        </div>
      </div>
    </section>
  );
}
