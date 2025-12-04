import { useState, useEffect } from 'react';
import logoWhite from '../assets/SYMP LOGO PUTIH.png';
import logoLong from '../assets/Logo SYMP Panjang.png';
import symeMascot from '../assets/SYME.png'; // <--- Import SYME


// --- KOMPONEN NAVBAR DYNAMIC ISLAND (MOBILE CENTERED LOGO + EXTERNAL HAMBURGER) ---
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const iosSpring = 'cubic-bezier(0.32, 0.72, 0, 1)';

  return (
    <>
      {/* --- 1. WRAPPER UNTUK DYNAMIC ISLAND (TETAP DI TENGAH) --- */}
      <div
        style={{ transitionTimingFunction: iosSpring }}
        className="fixed z-[100] top-6 left-1/2 -translate-x-1/2 flex items-start justify-center w-full max-w-[95vw] pointer-events-none transition-all duration-700"
      >
        {/* --- DYNAMIC ISLAND UTAMA --- */}
        <nav
          style={{ transitionTimingFunction: iosSpring }}
          className={`pointer-events-auto bg-[#4a0000]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col transition-all duration-700
          ${
            isMenuOpen
              ? 'w-[92vw] max-w-[400px] rounded-[3rem] p-4'
              : 'w-auto rounded-full py-3 px-8 md:px-12'
          }`}
        >
          {/* Header Pulau */}
          <div className="flex items-center justify-center md:justify-between w-full relative z-20 min-h-[32px]">
            {/* Logo */}
            <img
              src={logoLong}
              alt="SYMP Studio"
              className="h-8 w-auto shrink-0 drop-shadow-sm object-contain"
            />

            {/* Desktop Links */}
            {!isMenuOpen && (
              <div className="hidden md:flex items-center gap-8 ml-10 text-white/90 font-medium text-[13px] uppercase tracking-widest animate-fade-in">
                <a href="#work" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Portofolio</a>
                <a href="#services" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Layanan</a>
                <a href="#contact" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Kontak</a>
              </div>
            )}
          </div>

          {/* Mobile Menu Items */}
          <div
            style={{ transitionTimingFunction: iosSpring }}
            className={`grid transition-all duration-700 ${
              isMenuOpen ? 'grid-rows-[1fr] opacity-100 pt-8 pb-4' : 'grid-rows-[0fr] opacity-0 pt-0 pb-0'
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-3 items-center text-center w-full">
              <a href="#work" onClick={closeMenu} className="w-full py-4 bg-[#ffffff]/10 rounded-full text-white/95 font-semibold text-sm uppercase tracking-wider hover:bg-[#ffffff]/20 active:scale-[0.98] transition-all backdrop-blur-md border border-white/5">
                Portofolio
              </a>
              <a href="#services" onClick={closeMenu} className="w-full py-4 bg-[#ffffff]/10 rounded-full text-white/95 font-semibold text-sm uppercase tracking-wider hover:bg-[#ffffff]/20 active:scale-[0.98] transition-all backdrop-blur-md border border-white/5">
                Layanan
              </a>
              <a href="#contact" onClick={closeMenu} className="w-full py-4 bg-white text-[#8A0202] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Kontak
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* --- 2. TOMBOL HAMBURGER TERPISAH --- */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed z-[101] top-6 right-6 p-1 text-white/90 hover:text-white focus:outline-none bg-[#4a0000]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full h-10 w-10 flex items-center justify-center transition-all active:scale-90 pointer-events-auto"
        aria-label="Toggle Menu"
      >
        <div style={{ transitionTimingFunction: iosSpring }} className={`transition-all duration-500 relative w-6 h-6 flex items-center justify-center ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 absolute">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 absolute">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
          )}
        </div>
      </button>
    </>
  );
}
// --- AKHIR KOMPONEN NAVBAR ---


export default function HeroLandingPage() {
  return (
    <main className="min-h-screen bg-[#8A0202] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9c0202] to-[#6d0000] relative overflow-hidden flex flex-col">

      <Navbar />

      {/* --- CSS ANIMASI --- */}
      <style>{`
        /* Animasi Background Spot */
        @keyframes subtle-spotlight {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-45%, -40%) scale(1.1); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
        }

        /* Animasi Elemen UI */
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        
        /* --- ANIMASI BARU BUAT SYME (Peeking Effect) --- */
        @keyframes peek-float {
          0%, 100% { transform: translate(0, 10px) rotate(5deg); } /* Posisi "sembunyi" dikit */
          50% { transform: translate(-10px, -15px) rotate(-5deg); } /* Posisi "muncul" */
        }

        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-spotlight { animation: subtle-spotlight 8s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        
        /* Class khusus SYME: Durasi medium (6s) biar kayak napas/gerak santai */
        .animate-syme-peek { animation: peek-float 6s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* --- AREA ANIMASI BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#ff4d4d]/30 blur-[150px] rounded-full animate-spotlight origin-center"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>
      </div>
      
      {/* --- MASCOT SYME NGINTIP DI POJOK KANAN BAWAH --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {/* Gue atur bottom-0 dan right-0 biar nempel di pojok.
            Ditambah translate positif di keyframes biar dia ga sepenuhnya kaku.
            Ukuran disesuaikan lagi biar pas buat ngintip.
        */}
        <div className="absolute bottom-[-20px] right-[-10px] md:bottom-[-30px] md:right-[-20px] opacity-90 animate-syme-peek">
             <img 
               src={symeMascot} 
               alt="SYME Mascot" 
               className="w-24 md:w-40 lg:w-48 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transform scale-x-[-1]" // Flip horizontal kalau perlu biar madep kiri, hapus scale-x-[-1] kalau gambar aslinya udah madep kiri
             />
        </div>
      </div>

      {/* Section Hero Content */}
      <section className="flex-grow flex items-center justify-center pt-40 pb-16 md:pt-32 md:pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <img
            src={logoWhite}
            alt="SYMP Studio"
            className="w-36 md:w-56 h-auto mx-auto mb-16 drop-shadow-2xl animate-fade-in-up delay-100"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200 w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-white text-[#8A0202] font-bold text-sm uppercase tracking-widest border-2 border-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
              <span>Mulai Proyek</span>
            </a>

            <a
              href="#work"
              className="inline-flex justify-center px-8 py-4 w-full sm:w-auto bg-transparent border border-white/70 text-white font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white hover:text-[#8A0202] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 rounded-full"
            >
              Lihat Portofolio
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
