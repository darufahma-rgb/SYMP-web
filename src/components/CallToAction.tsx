import React from 'react';
import { Phone, Mail } from 'lucide-react';
import DreamTeamImg from '../assets/Dreamteam SYMP.png';


export default function CallToAction() {
  return (
    // UPDATED: Background disamakan dengan MeetTheDesigner (#8A0202 Solid + Dark Overlays)
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#8A0202]">

      {/* --- BACKGROUND ELEMENTS (Sesuai Referensi) --- */}
      {/* Decor 1: Dark Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
      {/* Decor 2: White Glow (Top Left-ish) */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Decor 3: Black Glow (Bottom Right-ish) */}
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none" />


      {/* --- CONTENT GROUP (Text + Mobile Cards) --- */}
      {/* UPDATED: Mobile cards dipindah ke dalam container ini agar nempel sama teks (Compact) */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 pt-12 md:pt-20 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.0] mb-4 drop-shadow-xl">
          Let's make something <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-white/80">professional</span> together.
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-8">
          Hubungi <span className="font-bold text-white">SYMP Studio</span>. Bangun identitas visual masa depan <br className="hidden md:block" />
          Anda bersama tim elit kami.
        </p>

        {/* --- MOBILE CONTACTS (Moved Here for Compactness) --- */}
        {/* Posisi sekarang langsung di bawah teks, tidak ada gap jauh */}
        <div className="flex md:hidden flex-col gap-3 w-full max-w-sm z-30">
          <a href="https://wa.me/6281311506025" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-lg active:scale-95 transition-transform hover:bg-white/20">
            <span className="text-[10px] tracking-widest uppercase text-white/70 font-bold flex items-center gap-2">
              <Phone size={14} /> WhatsApp
            </span>
            <span className="text-xs font-bold text-white">+62 813-1150-6025</span>
          </a>
          <a href="mailto:sympp.uss@gmail.com" className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-lg active:scale-95 transition-transform hover:bg-white/20">
            <span className="text-[10px] tracking-widest uppercase text-white/70 font-bold flex items-center gap-2">
              <Mail size={14} /> Email
            </span>
            <span className="text-xs font-bold text-white">sympp.uss@gmail.com</span>
          </a>
        </div>

      </div>


      {/* --- IMAGE & DESKTOP CARDS SECTION --- */}
      {/* mt-auto memastikan section ini selalu di dasar layar (Mentok Bawah) */}
      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 mt-auto flex flex-col md:flex-row justify-center items-end">

        {/* Left Card (WhatsApp - Desktop Only) */}
        <div className="hidden md:block absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30">
          <a 
            href="https://wa.me/6281311506025" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-60 block overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            
            <div className="relative flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:bg-red-500/20 transition-colors duration-300">
                 <Phone size={18} className="text-white/80 group-hover:text-white" />
              </div>
              <div className="text-center">
                <span className="block text-[9px] tracking-[0.3em] uppercase text-red-200/70 font-semibold mb-0.5">WhatsApp</span>
                <span className="block text-base font-bold text-white tracking-wider group-hover:text-red-100 transition-colors whitespace-nowrap">+62 813-1150-6025</span>
              </div>
            </div>
          </a>
        </div>

        {/* Center Image (Dream Team) */}
        <div className="relative z-10 w-full max-w-7xl flex justify-center items-end">
          <img 
            src={DreamTeamImg} 
            alt="Dream Team SYMP Studio" 
            // UPDATED: Mobile max-h dinaikkan drastis ke 70vh agar gambar lebih besar di HP
            className="w-full h-auto max-h-[70vh] md:max-h-[75vh] object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Right Card (Email - Desktop Only) */}
        <div className="hidden md:block absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30">
          <a 
            href="mailto:sympp.uss@gmail.com" 
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-64 block overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:-translate-y-1"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <div className="relative flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:bg-red-500/20 transition-colors duration-300">
                 <Mail size={18} className="text-white/80 group-hover:text-white" />
              </div>
              <div className="text-center">
                <span className="block text-[9px] tracking-[0.3em] uppercase text-red-200/70 font-semibold mb-0.5">Email Inquiries</span>
                <span className="block text-base font-bold text-white tracking-wider group-hover:text-red-100 transition-colors">sympp.uss@gmail.com</span>
              </div>
            </div>
          </a>
        </div>

      </div>
      
      {/* Tailwind Custom Animation for Shimmer */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
