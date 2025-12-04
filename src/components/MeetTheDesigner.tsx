import React from 'react';
import designerImage from '../assets/Designer.png';


export default function MeetTheDesigner() {
  return (
    // --- BASE LAYER: Solid Brand Red Background ---
    // UPDATED: Padding mobile dikurangi (py-10) biar gak terlalu deep scroll-nya
    <section className="py-10 md:py-24 bg-[#8A0202] text-white overflow-hidden relative font-sans min-h-screen flex items-center">
      
      {/* --- DECOR LAYERS --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* UPDATED: Gap dikurangi di mobile (gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* --- KOLOM KIRI: Main Title & Intro --- */}
          {/* UPDATED: Order diubah biar di mobile Title duluan, baru gambar, baru teks */}
          <div className="md:col-span-5 order-1 md:order-1 text-center md:text-left space-y-6 md:space-y-8">
            
            {/* Accent Line */}
            <div className="w-16 md:w-24 h-1 bg-white mb-4 md:mb-8 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

            <div>
              {/* UPDATED: Font size mobile diperkecil (text-4xl) biar gak makan tempat */}
              <h2 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight mb-2 md:mb-4 text-white drop-shadow-lg">
                Daru Fahmaa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Muliawan</span>
              </h2>
               <h3 className="text-xl md:text-3xl font-semibold text-white/90">
                The Designer
              </h3>
            </div>

            {/* UPDATED: Intro Paragraph - hidden di mobile sementara, dipindah ke bawah gambar biar flow visualnya enak */}
            <div className="hidden md:block">
              <p className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                Founder & Creative Director SYMP Studio sejak 2021. Telah mengerjakan 300+ proyek visual meliputi logo, identitas visual, dan creative direction dengan pendekatan yang rapi dan fungsional.
              </p>
              
              {/* Red Circle Button Arrow (Desktop) */}
              <div className="flex justify-start mt-8">
                  <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.2)] group text-[#8A0202]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 group-hover:translate-y-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                      </svg>
                  </button>
              </div>
            </div>
          </div>


          {/* --- KOLOM TENGAH: Foto Designer --- */}
          {/* UPDATED: Order 2 di mobile. Ukuran gambar dibatasi max-w-[280px] di mobile biar compact. 
              DESKTOP: Ditambah scale-125 biar lebih besar */}
          <div className="md:col-span-4 order-2 md:order-2 flex justify-center relative my-2 md:my-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-white/10 blur-[60px] md:blur-[80px] rounded-full -z-10 mix-blend-overlay"></div>

            <img 
              src={designerImage} 
              alt="Daru Fahmaa Muliawan" 
              className="w-3/4 max-w-[280px] md:max-w-full h-auto object-cover z-10 drop-shadow-2xl relative grayscale-[20%] hover:grayscale-0 transition duration-500 ease-out rounded-2xl md:rounded-none md:scale-125 md:translate-y-6 transform"
              style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }} 
            />
          </div>


          {/* --- MOBILE ONLY INTRO --- */}
          {/* Bagian ini hanya muncul di mobile setelah gambar, menggantikan intro desktop */}
          <div className="order-3 md:hidden text-center space-y-6">
             <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto font-light">
                Founder & Creative Director SYMP Studio sejak 2021. Telah mengerjakan 300+ proyek visual meliputi logo, identitas visual, dan creative direction.
              </p>
              
              <div className="flex justify-center">
                  <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] text-[#8A0202]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                      </svg>
                  </button>
              </div>
          </div>


          {/* --- KOLOM KANAN: Details & Social --- */}
          <div className="md:col-span-3 order-4 text-center md:text-left space-y-8 md:pl-8">
            
            {/* UPDATED: Grid 2 kolom di mobile untuk Roles & Approach biar hemat tempat vertikal */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8 text-left md:text-left">
                
                {/* Block 1: Roles & Venture */}
                <div className="space-y-2 md:space-y-4">
                    <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/60 border-b border-white/20 pb-2 inline-block">
                        Roles & Venture
                    </h4>
                    <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light">
                      CEO Temantiket, AINA AI Dev. React & Tailwind Expert.
                    </p>
                    <a href="#" className="inline-flex items-center text-white text-[10px] md:text-sm font-bold hover:tracking-wider transition-all group mt-1">
                        PORTFOLIO <span className="ml-1 md:ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                {/* Block 2: Approach */}
                <div className="space-y-2 md:space-y-4">
                    <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/60 border-b border-white/20 pb-2 inline-block">
                        Approach
                    </h4>
                    <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light">
                      Rapi, fungsional, adaptif. Fokus konsistensi visual.
                    </p>
                </div>
            </div>

            {/* Block 3: Social Icons */}
             <div className="space-y-4 md:space-y-6 pt-2 md:pt-4 border-t border-white/10 md:border-none">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hidden md:block">
                    Follow Me
                </h4>
                <div className="flex justify-center md:justify-start space-x-8 md:space-x-6 text-white/60">
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
