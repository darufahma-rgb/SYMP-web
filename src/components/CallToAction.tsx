import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion
import DreamTeamImg from '../assets/DREAM TEAM SYMP.png';


// Variasi animasi floating untuk kartu
const floatingAnimation = {
  y: [0, -15, 0], // Gerakan vertikal melayang
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const floatingAnimationDelayed = {
  y: [0, 15, 0], // Gerakan vertikal melayang berlawanan
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1.5, // Delay agar tidak sinkron
  },
};


export default function CallToAction() {
  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0F0202]">

      {/* --- BACKGROUND ELEMENTS (Tuned for Deep Maroon Vibe) --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0202] via-[#2a0505] to-[#450a0a] opacity-100 z-0"></div>
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff0000] rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 mix-blend-overlay"></div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20 md:pt-32 text-center flex flex-col items-center mb-12">
        
        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
          Let's make something <br className="hidden md:block" /> 
          <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">professional</span> together.
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Hubungi <span className="font-bold text-white">SYMP Studio</span>. Bangun identitas visual masa depan <br className="hidden md:block" />
          Anda bersama tim elit kami.
        </p>
      </div>

      {/* --- MAIN SECTION: IMAGE & FLOATING CARDS --- */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto px-4 mt-auto">

        {/* --- LEFT SIDE FLOATING CARD --- */}
        <motion.div
          className="hidden md:block absolute left-0 transform -translate-x-1/2 z-30"
          animate={floatingAnimationDelayed}
          style={{ top: '30%' }}
        >
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/6281311506025" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#1F0505] border border-white/5 rounded-2xl p-6 w-64 block hover:bg-[#2F0808] hover:border-white/10 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-bold">WhatsApp</span>
              <span className="text-lg font-bold text-white group-hover:text-red-100 transition-colors whitespace-nowrap">+62 813-1150-6025</span>
            </div>
          </a>
        </motion.div>


        {/* --- CENTER DREAM TEAM IMAGE --- */}
        <div className="relative z-10 w-full max-w-3xl flex justify-center items-end pb-4"> {/* Ukuran diperbesar (max-w-3xl) */}
          {/* Gradient Fade for Image Bottom */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0F0202] to-transparent z-20"></div>
          
          <img 
            src={DreamTeamImg} 
            alt="Dream Team SYMP Studio" 
            className="w-full h-auto max-h-[55vh] object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          />
        </div>


        {/* --- RIGHT SIDE FLOATING CARDS --- */}
        <div className="hidden md:flex flex-col space-y-6 absolute right-0 transform translate-x-1/2 z-30" style={{ top: '15%' }}>
          {/* Email Card */}
          <motion.a 
            animate={floatingAnimation}
            href="mailto:sympp.uss@gmail.com" 
            className="group relative bg-[#1F0505] border border-white/5 rounded-2xl p-6 w-72 block hover:bg-[#2F0808] hover:border-white/10 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-bold">Email Inquiries</span>
              <span className="text-lg font-bold text-white group-hover:text-red-100 transition-colors">sympp.uss@gmail.com</span>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div 
            animate={floatingAnimationDelayed}
            className="group relative bg-[#1F0505] border border-white/5 rounded-2xl p-6 w-64 block shadow-xl"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-bold">Headquarters</span>
              <span className="text-lg font-medium text-white text-center leading-snug">
                Districh 7, <br/> Cairo – Egypt
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* --- MOBILE CONTACTS (Stacked below image on mobile) --- */}
        <div className="flex md:hidden flex-col gap-4 w-full max-w-md mt-8 z-30 px-4 pb-8">
          <a href="https://wa.me/6281311506025" target="_blank" rel="noopener noreferrer" className="bg-[#1F0505] border border-white/5 rounded-xl p-4 flex flex-col items-center shadow-lg">
            <span className="text-[10px] tracking-widest uppercase text-white/50 font-bold mb-1">WhatsApp</span>
            <span className="text-base font-bold text-white">+62 813-1150-6025</span>
          </a>
          <a href="mailto:sympp.uss@gmail.com" className="bg-[#1F0505] border border-white/5 rounded-xl p-4 flex flex-col items-center shadow-lg">
            <span className="text-[10px] tracking-widest uppercase text-white/50 font-bold mb-1">Email</span>
            <span className="text-base font-bold text-white">sympp.uss@gmail.com</span>
          </a>
           <div className="bg-[#1F0505] border border-white/5 rounded-xl p-4 flex flex-col items-center shadow-lg">
            <span className="text-[10px] tracking-widest uppercase text-white/50 font-bold mb-1">Location</span>
            <span className="text-base font-medium text-white text-center">Districh 7, Cairo – Egypt</span>
          </div>
        </div>

      </div>
    </section>
  );
}
