import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import DreamTeamImg from '../assets/Dreamteam SYMP.png';
 

export default function CallToAction() {
  return (
    // Base background tetap merah SYMP
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#320000]">

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#320000] via-[#500000] to-[#200000] opacity-100 z-0"></div>
      {/* Ambient glow adjusted */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#ff0000] rounded-full blur-[180px] opacity-25 mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 mix-blend-overlay"></div>

      {/* --- CONTENT SECTION (Headline) --- */}
      {/* Padding dikurangi signifikan (pt-8/pt-14) dan z-index dinaikkan agar teks selalu di atas jika overlap */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 pt-10 md:pt-16 text-center flex flex-col items-center">
        
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.0] mb-3 drop-shadow-2xl">
          Let's make something <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-white/80 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">professional</span> together.
        </h2>

        {/* Subtext - Margin bottom dikurangi */}
        <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-2">
          Hubungi <span className="font-bold text-white">SYMP Studio</span>. Bangun identitas visual masa depan <br className="hidden md:block" />
          Anda bersama tim elit kami.
        </p>
      </div>

      {/* --- MAIN SECTION: IMAGE & CARDS --- */}
      {/* Negative margin top (-mt) ditambahkan untuk menarik gambar ke atas mendekati teks */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center w-full max-w-[90rem] mx-auto px-4 -mt-4 md:-mt-8">

        {/* --- LEFT SIDE CARD --- */}
        <div className="hidden md:block absolute left-4 lg:left-12 top-[50%] -translate-y-1/2 z-30">
          {/* WhatsApp Card - Aesthetic Glass Style */}
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

        {/* --- CENTER DREAM TEAM IMAGE --- */}
        <div className="relative z-10 w-full max-w-7xl flex justify-center items-end pb-0">
          <img 
            src={DreamTeamImg} 
            alt="Dream Team SYMP Studio" 
            className="w-full h-auto max-h-[70vh] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* --- RIGHT SIDE CARDS --- */}
        <div className="hidden md:flex flex-col space-y-4 absolute right-4 lg:right-12 top-[50%] -translate-y-1/2 z-30">
          
          {/* Email Card - Aesthetic Glass Style */}
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

          {/* Location Card - Aesthetic Glass Style */}
          <div 
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-60 block ml-auto overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:-translate-y-1"
          >
            <div className="relative flex flex-col items-center justify-center space-y-2">
              <div className="p-2.5 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:bg-red-500/20 transition-colors duration-300">
                 <MapPin size={18} className="text-white/80 group-hover:text-white" />
              </div>
              <div className="text-center">
                <span className="block text-[9px] tracking-[0.3em] uppercase text-red-200/70 font-semibold mb-0.5">Headquarters</span>
                <span className="block text-sm font-medium text-white/90 text-center leading-snug tracking-wide">
                  Districh 7, <br/> Cairo – Egypt
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* --- MOBILE CONTACTS (Glassmorphism for Mobile) --- */}
        {/* Adjusted spacing for mobile compactness */}
        <div className="flex md:hidden flex-col gap-3 w-full max-w-sm mt-0 z-30 px-6 pb-8 bg-[#320000]">
          <a href="https://wa.me/6281311506025" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-lg">
            <span className="text-[10px] tracking-widest uppercase text-white/60 font-bold">WhatsApp</span>
            <span className="text-xs font-bold text-white">+62 813-1150-6025</span>
          </a>
          <a href="mailto:sympp.uss@gmail.com" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-lg">
            <span className="text-[10px] tracking-widest uppercase text-white/60 font-bold">Email</span>
            <span className="text-xs font-bold text-white">sympp.uss@gmail.com</span>
          </a>
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-lg">
            <span className="text-[10px] tracking-widest uppercase text-white/60 font-bold">Location</span>
            <span className="text-xs font-medium text-white text-right">Districh 7, Cairo</span>
          </div>
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
