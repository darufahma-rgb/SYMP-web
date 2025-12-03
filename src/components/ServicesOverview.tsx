import React from 'react';

// --- IMPORT GAMBAR DARI FOLDER SRC/ASSETS ---
import AigyptLogo from '../assets/aigypt-logo.png';
import ArsanaLogo from '../assets/arsana-logo.png';
import DreammeccaLogo from '../assets/dreammecca-logo.png';
import IghTourLogo from '../assets/igh-tour-logo.png';
import SaferLogo from '../assets/safer-logo.png';

export default function ServicesOverview() {
  const darkRed = '#A61B1B';

  const clients = [
    { name: 'AIGYPT', src: AigyptLogo },
    { name: 'Arsana', src: ArsanaLogo },
    { name: 'Dreammecca', src: DreammeccaLogo },
    { name: 'IGH Tour', src: IghTourLogo },
    { name: 'Safer', src: SaferLogo },
  ];

  return (
    <section className="relative min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A61B1B] selection:text-white flex flex-col justify-center items-center py-12 px-4 md:py-20">
      
      {/* ... (Bagian Header dan Headline sama seperti sebelumnya, saya skip biar fokus) ... */}
      {/* HEADER */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm mb-6 md:mb-8 hover:shadow-md transition-shadow cursor-default max-w-[90%] md:max-w-none mx-auto animate-fade-in-down">
        <span className="bg-black text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          SYMP STUDIO
        </span>
        <p className="text-[10px] md:text-xs font-medium text-gray-600 flex items-center gap-1">
          Services Overview <span className="text-gray-400">/</span> 01
        </p>
      </div>

      {/* HEADLINE */}
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

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full px-4 md:px-0">
          <button 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: darkRed }}
          >
             <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start a Project
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
               <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            Book a Call
          </button>
        </div>
      </div>
      {/* ... (Akhir bagian Header/Headline) ... */}


      {/* --- CLIENT LOGOS (UPDATED UNTUK UKURAN SERAGAM) --- */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-8 md:mt-12 animate-fade-in-up">
         <p className="text-center text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 md:mb-10">
            Dipercaya Oleh
         </p>
         
         <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {clients.map((client, index) => (
              <div 
                key={index} 
                // PERUBAHAN 1: Container dikasih ukuran FIX (lebar & tinggi)
                // Mobile: w-24 h-12 | Desktop: w-32 h-16
                // Ditambah 'p-2' (padding) biar logo gak mentok pinggir kotak
                className="group relative w-24 h-12 md:w-32 md:h-16 flex items-center justify-center p-2"
              >
                <img
                  src={client.src}
                  alt={`${client.name} Logo`}
                  // PERUBAHAN 2: Gambar diset w-full h-full dan object-contain
                  // Ini bikin gambar ngepasin diri di dalem kotak container di atas
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
         </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 md:mt-24 text-gray-300 text-xs md:text-sm font-mono text-center w-full">
         ©2023 — SYMP Studio.
      </div>
    </section>
  );
}