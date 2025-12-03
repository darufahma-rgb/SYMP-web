import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import DreamTeamImg from '../assets/DREAM TEAM SYMP.png';

export default function CallToAction() {
  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0F0202]">
      
      {/* --- BACKGROUND ELEMENTS (Tuned for Deep Maroon Vibe) --- */}
      {/* Base Dark Gradient - adjusted to match the deep red in image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0202] via-[#2a0505] to-[#450a0a] opacity-100 z-0"></div>
      
      {/* Top Red Glow (Ambient) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff0000] rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none"></div>

      {/* Grid Pattern Overlay - reduced opacity for subtlety */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 mix-blend-overlay"></div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20 md:pt-32 text-center flex flex-col items-center">
        
        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
          Let's make something <br className="hidden md:block" /> 
          <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">professional</span> together.
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-xl text-white/70 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Hubungi <span className="font-bold text-white">SYMP Studio</span>. Bangun identitas visual masa depan <br className="hidden md:block" />
          Anda bersama tim elit kami.
        </p>

        {/* --- CARDS CONTACT (Matched Layout & Colors) --- */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-5xl mb-12 relative z-20">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/6281311506025" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#1F0505] border border-white/5 rounded-2xl p-8 flex-1 hover:bg-[#2F0808] hover:border-white/10 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-bold">WhatsApp</span>
              <span className="text-lg md:text-xl font-bold text-white group-hover:text-red-100 transition-colors whitespace-nowrap">+62 813-1150-6025</span>
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:sympp.uss@gmail.com" 
            className="group relative bg-[#1F0505] border border-white/5 rounded-2xl p-8 flex-1 hover:bg-[#2F0808] hover:border-white/10 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-bold">Email Inquiries</span>
              <span className="text-lg md:text-xl font-bold text-white group-hover:text-red-100 transition-colors">sympp.uss@gmail.com</span>
            </div>
          </a>

          {/* Location Card */}
          <div className="group relative bg-[#1F0505] border border-white/5 rounded-2xl p-8 flex-1 shadow-xl">
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-bold">Headquarters</span>
              <span className="text-lg md:text-xl font-medium text-white text-center leading-snug">
                Districh 7, <br/> Cairo – Egypt
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* --- DREAM TEAM IMAGE (Anchored Bottom) --- */}
      <div className="relative w-full z-10 mt-auto flex justify-center pointer-events-none">
        {/* Gradient Fade to Blend Image Bottom with Background */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0F0202] to-transparent z-20"></div>
        
        {/* Main Image Container */}
        <div className="relative w-full max-w-4xl px-4 flex justify-center items-end">
            <img 
            src={DreamTeamImg} 
            alt="Dream Team SYMP Studio" 
            className="w-full h-auto max-h-[50vh] object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            />
        </div>
      </div>
    </section>
  );
}
