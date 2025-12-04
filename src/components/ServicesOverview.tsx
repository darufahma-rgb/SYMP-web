import React, { useState } from 'react';
import { 
  Package, FileText, MessageCircle, CreditCard, ArrowRight, 
  X, ChevronLeft, PenTool, Globe, Instagram, Briefcase, Check, Star, Phone 
} from 'lucide-react';

// --- IMPORT ASSETS (Pastikan file ada di folder src/assets) ---
import AigyptLogo from '../assets/aigypt-logo.png';
import ArsanaLogo from '../assets/arsana-logo.png';
import DreammeccaLogo from '../assets/dreammecca-logo.png';
import IghTourLogo from '../assets/igh-tour-logo.png';
import SaferLogo from '../assets/safer-logo.png';
import TemantiketLogo from '../assets/Logo Temantiket.png'; // New Import

// --- DATA HARGA (Bahasa Profesional) ---
const PRICING_DATA = {
  logo: [
    { name: 'Premium Logo All-in', price: '500K', desc: 'Harga Tetap. 2 Opsi Desain Eksklusif, File Master Lengkap, Panduan Brand, Bonus Poster.' }
  ],
  identity: [
    { name: 'Basic Brand Kit', price: '300K', desc: 'Palet Warna, Sistem Tipografi, Logo Alternatif.' },
    { name: 'Standard Kit', price: '500K', desc: 'Panduan Brand Mini (Guideline), Sistem Ikon Grafis.' },
    { name: 'Premium Identity', price: '800K', desc: 'Fondasi Visual Utuh, Mockup Realistis, Template Media Sosial.' }
  ],
  carousel: [
    { name: 'Basic Carousel', price: '70K/post', desc: '3-5 Slide, Caption Standar.' },
    { name: 'Standard Story', price: '100K/post', desc: '6-8 Slide, Copywriting Fokus Audiens.' },
    { name: 'Premium Educate', price: '125K/post', desc: '9-10 Slide, Microblog Mendalam, File Sumber (Source File).' }
  ],
  poster: [
    { name: 'Basic Poster', price: '100K', desc: 'Informasi acara mendesak, 1 Konsep Visual.' },
    { name: 'Standard', price: '200K', desc: 'Tampilan Profesional, Siap Cetak (HD Print Ready).' },
    { name: 'Premium Art', price: '300K', desc: 'Manipulasi/Ilustrasi Kompleks, Termasuk File Master.' }
  ],
  website: [
    { name: 'Basic Page', price: '800K', desc: '1 Halaman, React/HTML, Responsif Mobile.' },
    { name: 'Pro Business', price: '1.3 Juta', desc: 'SEO Dasar, Animasi Interaktif, Formulir WA, Gratis Deploy.' },
    { name: 'Premium Web', price: '2 Juta', desc: 'Interaksi Mikro, Copywriting Penjualan (Sales Copy), Prioritas Pengerjaan.' }
  ],
  hosting: [
    { id: 'starter', name: 'Starter Host', price: '300K/thn', desc: 'Cloud Hosting Kecepatan Tinggi, SSL Dasar.' },
    { id: 'business', name: 'Business Kit', price: '500K/thn', desc: 'Hosting Premium + Domain .COM.' },
    { id: 'pro', name: 'Pro Managed', price: '1 Juta/thn', desc: 'Sumber Daya Tinggi, Pemeliharaan Penuh (Full Maintenance).' }
  ]
};

// --- KOMPONEN MODAL ORDER (Form Brief) ---
const ProjectModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({ name: '', brandName: '', industry: '', detail: '' });
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedHosting, setSelectedHosting] = useState(null);

  if (!isOpen) return null;

  const services = [
    { id: 'logo', label: 'Desain Logo', icon: <PenTool size={20} /> },
    { id: 'identity', label: 'Identitas Brand', icon: <Briefcase size={20} /> },
    { id: 'poster', label: 'Poster & Flyer', icon: <Star size={20} /> },
    { id: 'carousel', label: 'Konten Instagram', icon: <Instagram size={20} /> },
    { id: 'website', label: 'Pembuatan Website', icon: <Globe size={20} /> },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `Halo Tim SYMP Studio. 👋%0A%0ASaya tertarik untuk memulai proyek pada layanan *${selectedCategory.toUpperCase()}*. Berikut detail kebutuhan saya:%0A`;
    message += `__________________________%0A%0A`;
    message += `👤 *PROFIL KLIEN*%0A• Nama: ${formData.name}%0A• Brand/Instansi: ${formData.brandName} (${formData.industry})%0A%0A`;
    message += `📦 *PAKET PILIHAN*%0A`;
    if (selectedPackage) {
      message += `• Paket: ${selectedPackage.name}%0A• Estimasi Harga: ${selectedPackage.price}%0A`;
    }
    if (selectedCategory === 'website') {
       message += selectedHosting ? `• Layanan Hosting: ${selectedHosting.name} (${selectedHosting.price})%0A` : `• Layanan Hosting: Menggunakan Hosting Sendiri (Mandiri)%0A`;
    }
    if (formData.detail) {
      message += `%0A📝 *CATATAN TAMBAHAN*%0A${formData.detail}%0A`;
    }
    message += `__________________________%0A%0AMohon informasi mengenai ketersediaan slot dan langkah selanjutnya. Terima kasih.`;
    window.open(`https://wa.me/6281311506025?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-4 text-left font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl rounded-3xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] md:max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Header Modal Compact */}
        <div className="bg-[#111] text-white px-5 py-4 md:px-8 md:py-6 flex justify-between items-center shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A0202] rounded-full blur-[60px] opacity-40 translate-x-10 -translate-y-10"></div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Mulai Proyek</h3>
            <p className="text-white/70 text-xs md:text-sm mt-0.5">Lengkapi formulir singkat untuk konsultasi awal.</p>
          </div>
          <button onClick={onClose} className="relative z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><X size={18} className="md:w-5 md:h-5" /></button>
        </div>

        {/* Content Modal with Smaller Padding on Mobile */}
        <div className="p-5 md:p-8 overflow-y-auto custom-scrollbar bg-gray-50/50 h-full text-gray-800">
          
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4 duration-500 fade-in">
              <h4 className="text-gray-900 font-bold mb-4 md:mb-6 text-base md:text-lg">Pilih Kategori Layanan</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => { setSelectedCategory(srv.id); setStep(2); setSelectedPackage(null); setSelectedHosting(null); }}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-white border border-gray-200 rounded-xl md:rounded-2xl hover:border-[#8A0202] hover:shadow-lg hover:shadow-[#8A0202]/5 transition-all group text-left relative overflow-hidden"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center group-hover:bg-[#8A0202] group-hover:text-white transition-colors duration-300 shrink-0">
                      {srv.icon}
                    </div>
                    <span className="font-bold text-gray-700 text-sm md:text-lg group-hover:text-[#8A0202] transition-colors">{srv.label}</span>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4 text-[#8A0202]">
                      <ArrowRight size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="animate-in slide-in-from-right-8 duration-500 fade-in space-y-6 md:space-y-8">
               <button type="button" onClick={() => setStep(1)} className="flex items-center text-xs font-bold text-gray-400 hover:text-[#8A0202] transition-colors uppercase tracking-wider group">
                <ChevronLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Kembali
              </button>

              <div className="space-y-3 md:space-y-4">
                <h5 className="text-xs md:text-sm font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#8A0202]"></div> Profil Klien</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <input required name="name" onChange={handleChange} className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Nama Lengkap Anda" />
                  <input required name="industry" onChange={handleChange} className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Bidang Usaha (cth: F&B)" />
                </div>
                <input required name="brandName" onChange={handleChange} className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Nama Brand / Instansi" />
              </div>

              <div className="space-y-3 md:space-y-4">
                <h5 className="text-xs md:text-sm font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#8A0202]"></div> Pilih Paket {selectedCategory.toUpperCase()}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {PRICING_DATA[selectedCategory]?.map((pkg, idx) => {
                    const isSelected = selectedPackage?.name === pkg.name;
                    return (
                      <div 
                        key={idx}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`cursor-pointer relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between h-full ${isSelected ? 'border-[#8A0202] bg-[#fff5f5] shadow-md' : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'}`}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className={`font-bold text-sm md:text-lg ${isSelected ? 'text-[#8A0202]' : 'text-gray-800'}`}>{pkg.name}</span>
                            {isSelected && <Check size={18} className="text-[#8A0202]" />}
                          </div>
                          <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed mb-3">{pkg.desc}</p>
                        </div>
                        <div className="pt-2 md:pt-3 border-t border-gray-100/50 mt-auto">
                          <span className="font-black text-base md:text-xl text-gray-900">{pkg.price}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {selectedCategory === 'website' && (
                <div className="space-y-3 md:space-y-4 pt-4 border-t border-dashed border-gray-200">
                  <h5 className="text-xs md:text-sm font-bold text-gray-900 flex items-center gap-2"><Globe size={14} /> Opsi Hosting (Opsional)</h5>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {PRICING_DATA.hosting.map((host) => {
                      const isActive = selectedHosting?.id === host.id;
                      return (
                        <div key={host.id} onClick={() => setSelectedHosting(isActive ? null : host)} 
                          className={`cursor-pointer flex items-center justify-between p-3 md:p-4 rounded-xl border transition-all ${isActive ? 'border-[#8A0202] bg-[#fff5f5]' : 'border-gray-200 bg-white'}`}>
                          <div>
                            <div className="font-bold text-xs md:text-sm text-gray-800">{host.name} <span className="text-gray-400 font-normal mx-1">|</span> {host.price}</div>
                            <div className="text-[10px] md:text-xs text-gray-400 mt-1">{host.desc}</div>
                          </div>
                          <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'bg-[#8A0202] border-[#8A0202]' : 'border-gray-300'}`}>
                            {isActive && <Check size={12} className="text-white" />}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                 <h5 className="text-xs md:text-sm font-bold text-gray-900">Catatan Tambahan</h5>
                 <textarea name="detail" onChange={handleChange} rows="3" className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none resize-none" placeholder="Referensi desain atau kebutuhan khusus..."></textarea>
              </div>

              <button type="submit" disabled={!selectedPackage}
                className={`w-full py-4 md:py-5 rounded-xl font-bold text-sm md:text-lg tracking-wide shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform active:scale-[0.98] ${selectedPackage ? 'bg-[#8A0202] text-white hover:bg-[#600000] hover:shadow-[#8A0202]/30' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                <span>Konfirmasi & Chat WhatsApp</span>
                <MessageCircle size={18} className="md:w-5 md:h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
export default function HeroLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const darkRed = '#A61B1B';

  const clients = [
    { name: 'Temantiket', src: TemantiketLogo },
    { name: 'AIGYPT', src: AigyptLogo },
    { name: 'Arsana', src: ArsanaLogo },
    { name: 'Dreammecca', src: DreammeccaLogo },
    { name: 'IGH Tour', src: IghTourLogo },
    { name: 'Safer', src: SaferLogo },
  ];

  const handleBookCall = () => {
    // Nomor Daru: 6281311506025
    window.open('https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20mau%20book%20call%20untuk%20diskusi%20project.', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A61B1B] selection:text-white flex flex-col justify-center items-center py-8 px-4 md:py-20">
      
      {/* HEADER PILL (Compact Mobile) */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 bg-white border border-gray-200 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm mb-4 md:mb-8 hover:shadow-md transition-shadow cursor-default max-w-[95%] md:max-w-none mx-auto animate-fade-in-down">
        <span className="bg-black text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full uppercase tracking-wide">
          SYMP STUDIO
        </span>
        <p className="text-[10px] md:text-xs font-medium text-gray-600 flex items-center gap-1">
          Services Overview <span className="text-gray-400">/</span> 01
        </p>
      </div>

      {/* HEADLINE */}
      <div className="text-center max-w-4xl mx-auto z-10 w-full mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4 md:mb-6">
          SYMP STUDIO <br className="hidden md:block" />
          <span className="block md:inline">menyediakan layanan</span> <br className="hidden md:block" />
          
          <span className="inline-flex flex-wrap items-center justify-center mt-2 md:mt-4 gap-2 md:gap-3">
            <span>yang</span>
            <span 
              className="px-3 py-1 md:px-6 md:py-2 rounded-lg md:rounded-2xl text-white transform rotate-1 hover:rotate-0 transition-transform duration-300 text-2xl md:text-7xl shadow-xl"
              style={{ backgroundColor: darkRed, boxShadow: '0 8px 20px -5px rgba(166, 27, 27, 0.4)' }}
            >
              Profesional.
            </span>
          </span>
        </h1>

        <p className="text-sm md:text-xl text-gray-500 max-w-lg md:max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10 px-2">
          Mulai dari <strong style={{ color: darkRed }}>Logo</strong>, <strong style={{ color: darkRed }}>Identitas Visual</strong>, materi konten, hingga landing page website modern.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full px-2 md:px-0">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            style={{ backgroundColor: darkRed }}
          >
             <svg className="w-4 h-4 md:w-5 md:h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start a Project
          </button>
          
          <button 
            onClick={handleBookCall}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-bold bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
               <Phone size={12} className="md:w-3.5 md:h-3.5 text-gray-500" />
            </div>
            Book a Call
          </button>
        </div>
      </div>

      {/* --- CLIENT LOGOS (COMPACT & UNIFORM) --- */}
      <div className="w-full max-w-5xl mx-auto px-2 md:px-4 mt-6 md:mt-12 animate-fade-in-up">
         <p className="text-center text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 md:mb-10">
           Dipercaya Oleh
         </p>
         
         {/* Grid logo lebih rapat di mobile */}
         <div className="flex flex-wrap justify-center items-center gap-3 md:gap-10">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="group relative w-20 h-10 md:w-32 md:h-16 flex items-center justify-center p-1.5 md:p-2 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img
                  src={client.src}
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
         </div>
      </div>

      {/* FOOTER */}
      <div className="mt-12 md:mt-24 text-gray-300 text-[10px] md:text-sm font-mono text-center w-full">
         ©2025 — SYMP Studio.
      </div>

      {/* --- RENDER MODAL --- */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}
