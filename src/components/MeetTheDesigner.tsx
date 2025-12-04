import React from 'react';
import designerImage from '../assets/Designer.png'; 


export default function MeetTheDesigner() {
  return (
    // --- BASE LAYER: Solid Brand Red Background ---
    // UPDATED: Mengikuti style referensi (Solid #8A0202 + Dark Overlays)
    <section className="py-12 md:py-24 bg-[#8A0202] text-white overflow-hidden relative font-sans min-h-[90vh] flex items-center">
      
      {/* --- DECOR LAYERS (Sesuai Referensi) --- */}
      
      {/* Decor 1: Dark Gradient Overlay (Memberikan dimensi gelap di atas dan bawah) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
      
      {/* Decor 2: White Glow (Top Left-ish) - Highlight halus */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decor 3: Black/Dark Glow (Bottom Right-ish) - Shadow kedalaman */}
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* --- KOLOM KIRI: Main Title & Intro --- */}
          <div className="md:col-span-5 order-2 md:order-1 text-center md:text-left space-y-8">
            {/* Accent Line - Putih */}
            <div className="w-24 h-1 bg-white mb-8 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

            <div>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4 text-white drop-shadow-lg">
                Meet the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Designer</span>
              </h2>
               <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Daru Fahmaa Muliawan
              </h3>
            </div>

            {/* Intro Paragraph */}
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
              Founder & Creative Director SYMP Studio sejak 2017. Telah mengerjakan 200+ proyek visual meliputi logo, identitas visual, dan creative direction dengan pendekatan yang rapi dan fungsional.
            </p>

            {/* Red Circle Button Arrow */}
            <div className="flex justify-center md:justify-start mt-8">
                <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.2)] group text-[#8A0202]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 group-hover:translate-y-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </button>
            </div>
          </div>


          {/* --- KOLOM TENGAH: Foto Designer --- */}
          <div className="md:col-span-4 order-1 md:order-2 flex justify-center relative mb-8 md:mb-0">
            {/* Image Glow Effect - Putih */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/10 blur-[80px] rounded-full -z-10 mix-blend-overlay"></div>

            {/* MARK: Menggunakan variable import designerImage */}
            <img 
              src={designerImage} 
              alt="Daru Fahmaa Muliawan" 
              className="w-full max-w-[400px] md:max-w-full h-auto object-cover z-10 drop-shadow-2xl relative grayscale-[20%] hover:grayscale-0 transition duration-500 ease-out"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} 
            />
          </div>


          {/* --- KOLOM KANAN: Details & Social --- */}
          <div className="md:col-span-3 order-3 text-center md:text-left space-y-12 md:pl-8">

            {/* Block 1: Roles & Venture */}
            <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 border-b border-white/20 pb-2 inline-block">
                    Roles & Venture
                </h4>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                   CEO Temantiket (platform perjalanan) dan pengembang utama AINA — asisten digital AI berbasis React & Tailwind. Berpengalaman dalam pengembangan sistem digital.
                </p>
                 <a href="#" className="inline-flex items-center text-white text-sm font-bold hover:tracking-wider transition-all group">
                    LIHAT PORTFOLIO <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            {/* Block 2: Approach */}
            <div className="space-y-4">
                 <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 border-b border-white/20 pb-2 inline-block">
                    Approach
                </h4>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                   Mengutamakan desain yang rapi, fungsional, dan mudah diterapkan. Fokus pada konsistensi visual dan komunikasi yang jelas.
                </p>
            </div>

            {/* Block 3: Social Icons */}
             <div className="space-y-6 pt-4">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                    Follow Me
                </h4>
                <div className="flex justify-center md:justify-start space-x-6 text-white/60">
                    <a href="#" className="hover:text-white hover:scale-110 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    <a href="#" className="hover:text-white hover:scale-110 transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.06 1.265.072 1.645.072 4.85s-.012 3.584-.072 4.85c-.148 3.252-1.667 4.771-4.919 4.919-1.266.06-1.646.072-4.85.072s-3.584-.012-4.85-.072c-3.252-.148-4.771-1.691-4.919-4.919-.06-1.265-.072-1.645-.072-4.85s.012-3.584.072-4.85c.148-3.252 1.667-4.771 4.919-4.919 1.266-.06 1.646-.072 4.85-.072zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="#" className="hover:text-[#ff3333] transition duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
