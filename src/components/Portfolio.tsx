import React from 'react';
import { ArrowRight, Bookmark, ArrowUpRight } from 'lucide-react';
import logoRed from '../assets/SYMP LOGO MERAH.png'; 
// Pastiin path logo bener, atau pake placeholder kalo error

export default function Portfolio() {
  const items = [
    'Logo Branding',
    'Social Media',
    'Content Creator',
    'Product Mockup',
    'Landing Page'
  ];

  return (
    <div className="min-h-screen bg-[#F3F0EA] text-black font-sans selection:bg-orange-500 selection:text-white flex flex-col relative overflow-hidden">
      
      {/* GRID LINES (Optional subtle texture) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* --- HEADER --- */}
      <nav className="w-full px-6 py-6 flex justify-between items-center text-sm font-bold tracking-widest uppercase z-20">
        <div>©2025</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600 transition-colors">
          01 <ArrowRight size={16} />
        </div>
      </nav>

      {/* --- MAIN CONTENT (CENTER) --- */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 relative z-10 -mt-10">
        
        {/* Profile/Logo Bubble */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-2 border-white shadow-lg bg-gray-200">
           {/* Ganti src dengan foto profil lo atau logo */}
           <img src={logoRed} alt="Profile" className="w-full h-full object-cover scale-110" />
        </div>

        {/* HEADLINE */}
        <div className="text-center mb-6">
          <h1 className="text-[12vw] md:text-[7rem] leading-[0.9] font-black tracking-tighter text-[#111]">
            Premium Design
          </h1>
          <h1 className="text-[12vw] md:text-[7rem] leading-[0.9] font-black tracking-tighter text-[#111]">
            Solutions for
          </h1>
        </div>

        {/* THE "BUTTON" WITH EDITOR UI LINES */}
        <div className="relative group cursor-pointer mt-4">
          
          {/* Editor Lines (The Red Box Effect) */}
          <div className="absolute -inset-4 border-[1px] border-red-500/60 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
            {/* Corner Squares */}
            <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500"></div>
            <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500"></div>
            <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500"></div>
            <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500"></div>
          </div>
          
          {/* Horizontal Guidelines (Visual decoration) */}
          <div className="absolute top-1/2 left-[-100vw] right-[-100vw] h-[1px] bg-red-500/20 pointer-events-none"></div>

          {/* The Pill Button */}
          <div className="relative bg-gradient-to-b from-[#FF8B3D] to-[#E55605] px-12 py-4 md:px-20 md:py-6 rounded-full shadow-[0_10px_40px_-10px_rgba(255,100,0,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(255,100,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
            {/* Inner Glare/Highlight */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
            
            <span className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-sm">
              SYMP Studio
            </span>
          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full px-6 py-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 z-20">
        
        {/* Left: User Info & Services */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-black overflow-hidden">
                <img src={logoRed} alt="Mini Profile" className="w-full h-full object-cover" />
             </div>
             <div>
               <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Made by</p>
               <p className="font-bold text-lg leading-none">Daru.Design</p>
             </div>
          </div>
          
          {/* Adapted Content: The List is now small services tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {items.map((item, i) => (
              <span key={i} className="text-xs font-bold text-gray-400 bg-white/50 px-2 py-1 rounded border border-gray-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: CTA Button */}
        <button className="bg-white border border-gray-300 px-6 py-3 rounded-full shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors font-bold text-sm">
          Save for Later <Bookmark size={18} fill="black" />
        </button>
      </footer>
    </div>
  );
}
