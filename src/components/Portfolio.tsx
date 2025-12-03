import React from 'react';
import { ArrowUpRight, ArrowDown, Wallet } from 'lucide-react';
import logoRed from '../assets/SYMP LOGO MERAH.png';

export default function Portfolio() {
  const items = [
    { title: 'Logo SYMP Studio', tag: 'Branding' },
    { title: 'Poster premium', tag: 'Social Media' },
    { title: 'Carousel premium', tag: 'Content' },
    { title: 'Mockup brand', tag: 'Product' },
    { title: 'Contoh landing page', tag: 'UI/UX' }
  ];

  return (
    <div className="min-h-screen bg-[#0035C5] font-sans selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      
      {/* BACKGROUND GRID (Visual Noise) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1400px] mx-auto pt-6 px-4 md:px-8 flex flex-col min-h-screen">
        
        {/* NAV BAR (Floating Pill Style) */}
        <nav className="flex justify-between items-center mb-12 relative z-20">
          <div className="bg-white px-6 py-2 rounded-full flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer border-2 border-black">
            <div className="w-3 h-3 bg-[#CCFF00] rounded-full border border-black animate-pulse"></div>
            <span className="font-black text-xl tracking-tighter">SYMP STUDIO</span>
          </div>

          <div className="hidden md:flex gap-4">
            {['About', 'Services', 'Contact'].map((item) => (
              <button key={item} className="px-5 py-2 rounded-full border border-white/30 text-white font-bold hover:bg-[#CCFF00] hover:text-black hover:border-black transition-colors">
                {item}
              </button>
            ))}
          </div>

          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-[#0035C5] transition-all">
            Book Now <ArrowUpRight size={20} />
          </button>
        </nav>

        {/* HERO SECTION (Big Typography + Floating Logo) */}
        <div className="relative flex-grow flex flex-col justify-center items-center py-20 z-10">
          
          {/* DECORATION: HAND DRAWN ARROW */}
          <div className="absolute top-10 right-[10%] md:right-[20%] z-20 rotate-12 animate-bounce hidden md:block">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 C 50 10, 50 90, 90 90" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
              <path d="M70 90 L 90 90 L 90 70" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          {/* BACKGROUND TEXT LAYER */}
          <div className="text-center select-none pointer-events-none">
            <h1 className="text-[15vw] leading-[0.8] font-black text-white tracking-tighter mix-blend-overlay opacity-50">
              #SYMP
            </h1>
            <h1 className="text-[15vw] leading-[0.8] font-black text-white tracking-tighter">
              PORTFOLIO
            </h1>
          </div>

          {/* FLOATING GLASS CARD (The Logo) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                         <div className="backdrop-blur-xl bg-white/20 border border-white/40 p-8 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rotate-[-6deg] hover:rotate-0 transition-transform duration-500 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group">
              {/* Sticker Badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#CCFF00] rounded-full flex items-center justify-center text-black font-black text-xs text-center border-2 border-black rotate-12 shadow-lg z-20">
                SCROLL<br/>TO VIEW<br/>WORK
              </div>
              
              <img 
                src={logoRed} 
                alt="SYMP Studio" 
                className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
          </div>

          {/* DECORATION: LEFT ARROW */}
           <div className="absolute bottom-20 left-[15%] z-20 -rotate-12 hidden md:block">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
               <path d="M90 10 C 50 10, 50 90, 10 90" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
               <path d="M30 90 L 10 90 L 10 70" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION (Curved White Card - The List) */}
      <div className="relative mt-20">
        <div className="bg-white rounded-t-[40px] md:rounded-t-[80px] p-8 md:p-16 min-h-[500px]">
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h3 className="text-[#0035C5] font-black text-4xl md:text-6xl uppercase tracking-tight mb-2">
                    Our Works
                  </h3>
                  <p className="text-gray-500 text-lg font-medium">Gaya visual: minimalis · white space · merah gelap.</p>
               </div>
               <div className="hidden md:block">
                 <ArrowDown size={48} className="text-[#CCFF00] bg-black rounded-full p-2" />
               </div>
            </div>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-[#F5F5F5] rounded-3xl p-8 relative overflow-hidden border-2 border-transparent hover:border-black hover:bg-[#CCFF00] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-12">
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-sm border border-black/10">
                      0{index + 1}
                    </span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                     <span className="text-xs font-bold uppercase tracking-wider opacity-60 mb-2 block">
                       {item.tag}
                     </span>
                     <h4 className="text-2xl md:text-3xl font-black text-[#111111] leading-tight">
                       {item.title}
                     </h4>
                  </div>
                </div>
              ))}
              
               {/* Call To Action Card */}
               <div className="bg-[#111111] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white border-2 border-black group cursor-pointer">
                  <h4 className="text-3xl font-black text-[#CCFF00] mb-2 group-hover:scale-110 transition-transform">
                    Start Project?
                  </h4>
                  <p className="text-gray-400">Let's build something crazy.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
