import React, { useState } from 'react';

// --- IMPORT GAMBAR ---
import TemantiketLogo from '../assets/Logo Temantiket.png'; // Pastikan nama file benar
import AigyptLogo from '../assets/aigypt-logo.png';
import ArsanaLogo from '../assets/arsana-logo.png';
import DreammeccaLogo from '../assets/dreammecca-logo.png';
import IghTourLogo from '../assets/igh-tour-logo.png';
import SaferLogo from '../assets/safer-logo.png';

export default function ServicesOverview() {
  const [isBriefOpen, setIsBriefOpen] = useState(false); // State untuk Pop-up
  const darkRed = '#A61B1B';

  const clients = [
    { name: 'Temantiket', src: TemantiketLogo },
    { name: 'AIGYPT', src: AigyptLogo },
    { name: 'Safer', src: SaferLogo },
    { name: 'Arsana', src: ArsanaLogo },
    { name: 'Dreammecca', src: DreammeccaLogo },
    { name: 'IGH Tour', src: IghTourLogo },
  ];

  // Function untuk handle submit form (contoh sederhana)
  const handleBriefSubmit = (e) => {
    e.preventDefault();
    alert("Brief terkirim! (Simulasi)");
    setIsBriefOpen(false);
  };

  return (
    <section className="relative min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A61B1B] selection:text-white flex flex-col justify-center items-center py-12 px-4 md:py-20">
      
      {/* HEADER LABEL */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm mb-6 md:mb-8 hover:shadow-md transition-shadow cursor-default max-w-[90%] md:max-w-none mx-auto animate-fade-in-down">
        <span className="bg-black text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          SYMP STUDIO
        </span>
        <p className="text-[10px] md:text-xs font-medium text-gray-600 flex items-center gap-1">
          Services Overview <span className="text-gray-400">/</span> 01
        </p>
      </div>

      {/* HEADLINE AREA */}
      <div className="text-center max-w-4xl mx-auto z-10 w-full mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
          SYMP STUDIO <br className="hidden md:block" />
          <span className="block md:inline">menyediakan layanan</span> <br className="hidden md:block" />
          
          <span className="inline-flex flex-wrap items-center justify-center mt-3 md:mt-4 gap-2 md:gap-3">
            <span>yang</span>
            <span 
              className="px-4 py-1.5 md:px-6 md:py-2 rounded-xl md:rounded-2xl text-white transform rotate-1 hover:rotate-0 transition-transform duration-300 text-3xl md:text-7xl shadow-xl"
              style={{ backgroundColor: darkRed, boxShadow: '0 8px 20px -5px rgba(166, 27, 27, 0.4)' }}
            >
              Profesional.
            </span>
          </span>
        </h1>

        <p className="text-base md:text-xl text-gray-500 max-w-lg md:max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
          Mulai dari <strong style={{ color: darkRed }}>Logo</strong>, <strong style={{ color: darkRed }}>Identitas Visual</strong>, materi konten, hingga landing page website modern.
        </p>

        {/* BUTTONS ACTION */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full px-4 md:px-0">
          
          {/* 1. Tombol Start Project (Memicu Pop-up) */}
          <button 
            onClick={() => setIsBriefOpen(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            style={{ backgroundColor: darkRed }}
          >
             <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start a Project
          </button>
          
          {/* 2. Tombol Book a Call (Link ke WhatsApp) */}
          <a 
            href="https://wa.me/6281311506025?text=Halo%20SYMP%20Studio%2C%20saya%20tertarik%20untuk%20diskusi%20project%20branding%2Fweb."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
          >
            <div className="w-6 h-6 rounded-full bg-green-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
               <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
               </svg>
            </div>
            Book a Call
          </a>
        </div>
      </div>

      {/* --- CLIENT LOGOS --- */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
         <p className="text-center text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 md:mb-8">
           Dipercaya Oleh
         </p>
         
         <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="group relative h-8 md:h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.src}
                  alt={`${client.name} Logo`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
         </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 md:mt-24 text-gray-300 text-xs md:text-sm font-mono text-center w-full">
          ©2023 — SYMP Studio.
      </div>

      {/* --- BRIEF POPUP MODAL --- */}
      {isBriefOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsBriefOpen(false)} // Klik luar untuk tutup
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Modal Header */}
            <div className="bg-[#A61B1B] px-6 py-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Mulai Project Baru</h3>
              <button 
                onClick={() => setIsBriefOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body (Simple Form) */}
            <div className="p-6 md:p-8">
              <form onSubmit={handleBriefSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama / Brand</label>
                  <input type="text" placeholder="Nama Brand Lo" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A61B1B] focus:border-transparent outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Layanan</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A61B1B] focus:border-transparent outline-none transition-all">
                    <option>Brand Identity (Logo)</option>
                    <option>Social Media Content</option>
                    <option>Website / Landing Page</option>
                    <option>Full Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ceritain Dikit Projectnya</label>
                  <textarea rows="3" placeholder="Gue butuh logo yang vibenya..." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A61B1B] focus:border-transparent outline-none transition-all"></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all mt-2"
                  style={{ backgroundColor: darkRed }}
                >
                  Kirim Brief
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
