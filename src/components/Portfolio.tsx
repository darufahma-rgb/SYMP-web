import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
// Logo import dihapus karena tidak dipakai di tengah lagi
// import logoRed from '../assets/SYMP LOGO MERAH.png';

export default function Portfolio() {
  const items = [
    { title: 'Logo SYMP Studio', tag: 'Branding' },
    { title: 'Poster premium', tag: 'Social Media' },
    { title: 'Carousel premium', tag: 'Content' },
    { title: 'Mockup brand', tag: 'Product' },
    { title: 'Contoh landing page', tag: 'UI/UX' }
  ];

  return (
    // UBAH 1: Background jadi putih, text selection tetap lime
    <div className="min-h-screen bg-white font-sans selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      
      {/* GRID PATTERN DIHAPUS */}

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1400px] mx-auto pt-6 px-4 md:px-8 flex flex-col">
        
        {/* NAV BAR (Disesuaikan untuk background putih) */}
        <nav className="flex justify-between items-center mb-12 relative z-20">
          <div className="bg-white px-6 py-2 rounded-full flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer border-2 border-black">
            <div className="w-3 h-3 bg-[#CCFF00] rounded-full border border-black animate-pulse"></div>
            <span className="font-black text-xl tracking-tighter text-black">SYMP STUDIO</span>
          </div>

          <div className="hidden md:flex gap-4">
            {['About', 'Services', 'Contact'].map((item) => (
              // Ubah text jadi hitam, border jadi hitam transparan
              <button key={item} className="px-5 py-2 rounded-full border border-black/10 text-black font-bold hover:bg-[#CCFF00] hover:text-black hover:border-black transition-colors">
                {item}
              </button>
            ))}
          </div>

          {/* Ubah button jadi border hitam dan text hitam */}
          <button className="bg-transparent border-2 border-black text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-black hover:text-[#CCFF00] transition-all">
            Book Now <ArrowUpRight size={20} />
          </button>
        </nav>

        {/* HERO SECTION (Big Typography Only) */}
        <div className="relative flex flex-col justify-center items-center py-24 z-10 mb-12">
          
          {/* DECORATION: HAND DRAWN ARROW */}
          <div className="absolute top-0 right-[10%] md:right-[20%] z-20 rotate-12 animate-bounce hidden md:block">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 C 50 10, 50 90, 90 90" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
              <path d="M70 90 L 90 90 L 90 70" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          {/* BACKGROUND TEXT LAYER (Diubah jadi hitam/abu) */}
          <div className="text-center select-none relative">
             {/* LOGO TENGAH DIHAPUS DARI SINI */}

            {/* Teks "Bayangan" */}
            <h1 className="text-[14vw] leading-[0.8] font-black text-gray-200 tracking-tighter absolute top-4 left-1/2 -translate-x-1/2 -z-10 blur-sm">
              PORTFOLIO
            </h1>
            {/* Teks Utama */}
            <h1 className="text-[14vw] leading-[0.8] font-black text-black tracking-tighter">
              PORTFOLIO
            </h1>
          </div>

          {/* DECORATION: LEFT ARROW */}
           <div className="absolute bottom-0 left-[15%] z-20 -rotate-12 hidden md:block">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
               <path d="M90 10 C 50 10, 50 90, 10 90" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
               <path d="M30 90 L 10 90 L 10 70" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION (Struktur kurva dihapus, langsung list) */}
      <div className="w-full bg-white pb-24 px-4 md:px-8">
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-black/10 pb-8">
               <div>
                  {/* Ganti warna title jadi hitam atau merah SYMP */}
                  <h3 className="text-[#8A0202] font-black text-4xl md:text-6xl uppercase tracking-tight mb-2">
                    Our Works
                  </h3>
                  <p className="text-gray-500 text-lg font-medium">Gaya visual: minimalis · white space · clean.</p>
               </div>
               <div className="hidden md:block">
                 <ArrowDown size={48} className="text-black bg-[#CCFF00] rounded-full p-2 border-2 border-black" />
               </div>
            </div>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  // Ubah bg card jadi abu sangat terang agar kontras sedikit dengan background putih
                  className="group bg-[#F9F9F9] rounded-3xl p-8 relative overflow-hidden border-2 border-transparent hover:border-black hover:bg-[#CCFF00] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-12">
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-sm border border-black/10">
                      0{index + 1}
                    </span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                     <span className="text-xs font-bold uppercase tracking-wider opacity-60 mb-2 block text-black">
                       {item.tag}
                     </span>
                     <h4 className="text-2xl md:text-3xl font-black text-[#111111] leading-tight">
                       {item.title}
                     </h4>
                  </div>
                </div>
              ))}
              
               {/* Call To Action Card */}
               <div className="bg-[#111111] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white border-2 border-black group cursor-pointer hover:shadow-[8px_8px_0px_0px_#CCFF00] transition-all hover:-translate-y-1">
                  <h4 className="text-3xl font-black text-[#CCFF00] mb-2 group-hover:scale-110 transition-transform">
                    Start Project?
                  </h4>
                  <p className="text-gray-400">Let's build something crazy.</p>
               </div>
            </div>
          </div>
      </div>
    </div>
  );
}
