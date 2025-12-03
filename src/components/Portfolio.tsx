import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
// Pastikan import path ini benar sesuai struktur project lo
import logoRed from '../assets/SYMP LOGO MERAH.png'; 

export default function Portfolio() {
  const items = [
    'Logo SYMP Studio',
    'Poster premium',
    'Carousel premium',
    'Mockup brand',
    'Contoh landing page'
  ];

  return (
    <>
       {/* Inject Animation Styles */}
       <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-entrance {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .stagger-1 { animation-delay: 0.2s; }
        .stagger-2 { animation-delay: 0.4s; }
      `}</style>

    <section 
      className="min-h-screen bg-white py-24 flex items-center relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Subtle Red Glow Decor (Biar putihnya gak flat banget) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8A0202]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A0202]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full animate-entrance">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-[#111111] mb-4 tracking-tight">
            Selected <span className="text-[#8A0202]">Portfolio</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kumpulan karya terbaik yang merepresentasikan kualitas dan dedikasi kami dalam desain visual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* KOLOM KIRI: IMAGE CONTAINER (PREMIUM RED BLOCK) */}
          <div className="bg-[#8A0202] p-16 rounded-[3rem] flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(138,2,2,0.3)] relative overflow-hidden group animate-entrance stagger-1">
            {/* Inner Glow Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            
            <img
              src={logoRed}
              alt="SYMP Studio Logo"
              // MARK: 'brightness-0 invert' bikin gambar jadi putih solid. Hapus class ini kalo gambar aslinya udah putih/terang.
              className="w-full max-w-md h-auto relative z-10 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500 brightness-0 invert"
            />
          </div>

          {/* KOLOM KANAN: CONTENT LIST (CLEAN WHITE CARD) */}
          <div className="bg-white border border-gray-200 p-10 md:p-12 rounded-[3rem] shadow-xl relative animate-entrance stagger-2">
             {/* Floating Icon Decor */}
             <Sparkles className="absolute top-8 right-8 w-8 h-8 text-[#8A0202]/20" />

            <h3 className="text-3xl font-bold text-[#111111] mb-8 flex items-center gap-3">
              Featured Works
              <div className="h-1 w-12 bg-[#8A0202] rounded-full"></div>
            </h3>

            <ul className="space-y-5">
              {items.map((item, index) => (
                <li key={index} className="flex items-start text-xl text-[#111111] group">
                  <div className="mt-1 mr-4 p-1 bg-[#8A0202]/10 rounded-full group-hover:bg-[#8A0202] transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-[#8A0202] group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                  </div>
                  <span className="font-medium group-hover:text-[#8A0202] transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Style Note Footer */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="p-2 bg-white rounded-full shadow-sm shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A0202" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.744 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#111111] mb-1">Signature Style</h4>
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  "Minimalis, clean, pemanfaatan white space yang lega, dengan aksen merah gelap SYMP yang kuat dan berkarakter."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}
