import React from 'react';
import { Bookmark, ArrowRight } from 'lucide-react';
import logoRed from '../assets/SYMP LOGO MERAH.png'; 

export default function Portfolio() {
  const items = [
    'Logo Branding',
    'Social Media',
    'Content Creator',
    'Product Mockup',
    'Landing Page'
  ];

  // Logic buat generate vCard (Kartu Nama Digital) otomatis
  const handleSaveContact = () => {
    // Format vCard standar
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:SYMP Studio
TEL;TYPE=CELL:+6281311506025
END:VCARD`;

    // Bikin file blob virtual
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Bikin link download hidden lalu di-klik otomatis
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'SYMP_Studio.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F3F0EA] text-black font-sans selection:bg-[#8A0202] selection:text-white flex flex-col relative overflow-hidden">
      
      {/* --- HEADER --- */}
      <nav className="w-full px-6 py-8 z-20">
         {/* Spacer */}
      </nav>

      {/* --- MAIN CONTENT (CENTER) --- */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 relative z-10 -mt-20">
        
        {/* LOGO SYMP (Small Accent) */}
        <div className="mb-4 animate-fade-in-up">
           <img 
             src={logoRed} 
             alt="SYMP Studio Logo" 
             className="w-12 md:w-14 h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300" 
           />
        </div>

        {/* HEADLINE & DESCRIPTION */}
        <div className="text-center mb-10">
          <h1 className="text-[15vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-black mb-6 font-['Poppins']">
            PORTFOLIO
          </h1>
          
          <p className="text-gray-500 font-medium text-lg md:text-xl max-w-md mx-auto leading-relaxed font-sans">
            Kumpulan karya terbaik SYMP Studio.<br/>
            <span className="text-black font-bold">Klik tombol di bawah</span> untuk akses galeri lengkap.
          </p>
        </div>

        {/* THE RED BUTTON LINK */}
        {/* Dibungkus tag <a> biar langsung direct link */}
        <a 
          href="https://tinyurl.com/SYMP2025" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group cursor-pointer mt-2 no-underline"
        >
          
          {/* Editor Lines (Red Theme) */}
          <div className="absolute -inset-4 border-[1px] border-[#8A0202]/30 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-[#8A0202]"></div>
            <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-[#8A0202]"></div>
            <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-[#8A0202]"></div>
            <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-[#8A0202]"></div>
          </div>
          
          {/* Horizontal Guidelines */}
          <div className="absolute top-1/2 left-[-100vw] right-[-100vw] h-[1px] bg-[#8A0202]/10 pointer-events-none"></div>

          {/* The Pill Button */}
          <div className="relative bg-gradient-to-b from-[#D92323] to-[#8A0202] px-12 py-4 md:px-24 md:py-6 rounded-full shadow-[0_10px_30px_-5px_rgba(138,2,2,0.4)] hover:shadow-[0_20px_50px_-5px_rgba(138,2,2,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
            
            <span className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm font-['Poppins']">
              Open Gallery
            </span>
            <ArrowRight className="text-white w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
          </div>

        </a>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full px-6 py-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 z-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-white border border-gray-200 p-1 overflow-hidden">
                <img src={logoRed} alt="Mini Profile" className="w-full h-full object-contain" />
             </div>
             <div>
               <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Created by</p>
               <p className="font-bold text-lg leading-none text-black font-['Poppins']">SYMP Studio</p>
             </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {items.map((item, i) => (
              <span key={i} className="text-[10px] md:text-xs font-bold text-gray-400 bg-white/60 px-2 py-1 rounded border border-gray-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* SAVE CONTACT BUTTON */}
        <button 
          onClick={handleSaveContact}
          className="bg-white border border-gray-300 px-5 py-2 rounded-full shadow-sm flex items-center gap-2 hover:bg-gray-50 hover:text-black transition-colors font-bold text-sm"
        >
          Save Contact <Bookmark size={16} />
        </button>
      </footer>
    </div>
  );
}
