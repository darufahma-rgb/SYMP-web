import { useState, useEffect } from 'react';
import { 
  Package, FileText, MessageCircle, CreditCard, ArrowRight, 
  X, ChevronLeft, PenTool, Globe, Instagram, Briefcase, Check, Star 
} from 'lucide-react';
import logoWhite from '../assets/SYMP LOGO PUTIH.png';
import logoLong from '../assets/Logo SYMP Panjang.png';
import symeMascot from '../assets/SYME.png'; 

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

// --- KOMPONEN MODAL ORDER ---
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 text-left font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Header Visual */}
        <div className="bg-[#111] text-white px-8 py-6 flex justify-between items-center shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A0202] rounded-full blur-[60px] opacity-40 translate-x-10 -translate-y-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold tracking-tight">Mulai Proyek</h3>
            <p className="text-white/70 text-sm mt-1">Lengkapi formulir singkat untuk konsultasi awal.</p>
          </div>
          <button onClick={onClose} className="relative z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><X size={20}/></button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar bg-gray-50/50 h-full text-gray-800">
          
          {/* STEP 1: SERVICE SELECTION */}
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4 duration-500 fade-in">
              <h4 className="text-gray-900 font-bold mb-6 text-lg">Pilih Kategori Layanan</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => { setSelectedCategory(srv.id); setStep(2); setSelectedPackage(null); setSelectedHosting(null); }}
                    className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#8A0202] hover:shadow-lg hover:shadow-[#8A0202]/5 transition-all group text-left relative overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center group-hover:bg-[#8A0202] group-hover:text-white transition-colors duration-300">
                      {srv.icon}
                    </div>
                    <span className="font-bold text-gray-700 text-lg group-hover:text-[#8A0202] transition-colors">{srv.label}</span>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4 text-[#8A0202]">
                      <ArrowRight size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: DETAILS & PRICING */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="animate-in slide-in-from-right-8 duration-500 fade-in space-y-8">
               <button type="button" onClick={() => setStep(1)} className="flex items-center text-xs font-bold text-gray-400 hover:text-[#8A0202] transition-colors uppercase tracking-wider group">
                <ChevronLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Kembali ke Kategori
              </button>

              {/* Data Client Inputs */}
              <div className="space-y-4">
                <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#8A0202]"></div> Profil Klien</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required name="name" onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Nama Lengkap Anda" />
                  <input required name="industry" onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Bidang Usaha (cth: F&B)" />
                </div>
                <input required name="brandName" onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Nama Brand / Instansi" />
              </div>

              {/* Pricing Grid Selection */}
              <div className="space-y-4">
                <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#8A0202]"></div> Pilih Paket {selectedCategory.toUpperCase()}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRICING_DATA[selectedCategory]?.map((pkg, idx) => {
                    const isSelected = selectedPackage?.name === pkg.name;
                    return (
                      <div 
                        key={idx}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`
                          cursor-pointer relative p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between h-full
                          ${isSelected ? 'border-[#8A0202] bg-[#fff5f5] shadow-md' : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'}
                        `}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className={`font-bold text-lg ${isSelected ? 'text-[#8A0202]' : 'text-gray-800'}`}>{pkg.name}</span>
                            {isSelected && <Check size={20} className="text-[#8A0202]" />}
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed mb-4">{pkg.desc}</p>
                        </div>
                        <div className="pt-3 border-t border-gray-100/50 mt-auto">
                          <span className="font-black text-xl text-gray-900">{pkg.price}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Hosting Add-on (Conditional) */}
              {selectedCategory === 'website' && (
                <div className="space-y-4 pt-4 border-t border-dashed border-gray-200">
                  <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Globe size={14} /> Opsi Hosting & Domain (Opsional)</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {PRICING_DATA.hosting.map((host) => {
                      const isActive = selectedHosting?.id === host.id;
                      return (
                        <div key={host.id} onClick={() => setSelectedHosting(isActive ? null : host)} 
                          className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border transition-all ${isActive ? 'border-[#8A0202] bg-[#fff5f5]' : 'border-gray-200 bg-white'}`}>
                          <div>
                            <div className="font-bold text-sm text-gray-800">{host.name} <span className="text-gray-400 font-normal mx-1">|</span> {host.price}</div>
                            <div className="text-xs text-gray-400 mt-1">{host.desc}</div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'bg-[#8A0202] border-[#8A0202]' : 'border-gray-300'}`}>
                            {isActive && <Check size={14} className="text-white" />}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="space-y-2">
                 <h5 className="text-sm font-bold text-gray-900">Catatan Tambahan</h5>
                 <textarea name="detail" onChange={handleChange} rows="3" className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none resize-none" placeholder="Tuliskan referensi desain atau kebutuhan khusus lainnya..."></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={!selectedPackage}
                className={`w-full py-5 rounded-xl font-bold text-lg tracking-wide shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform active:scale-[0.98]
                  ${selectedPackage ? 'bg-[#8A0202] text-white hover:bg-[#600000] hover:shadow-[#8A0202]/30' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                `}
              >
                <span>Konfirmasi & Chat WhatsApp</span>
                <MessageCircle size={20} />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};


// --- KOMPONEN NAVBAR DYNAMIC ISLAND ---
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const iosSpring = 'cubic-bezier(0.32, 0.72, 0, 1)';

  return (
    <>
      <div style={{ transitionTimingFunction: iosSpring }} className="fixed z-[100] top-6 left-1/2 -translate-x-1/2 flex items-start justify-center w-full max-w-[95vw] pointer-events-none transition-all duration-700">
        <nav style={{ transitionTimingFunction: iosSpring }} className={`pointer-events-auto bg-[#4a0000]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col transition-all duration-700 ${isMenuOpen ? 'w-[92vw] max-w-[400px] rounded-[3rem] p-4' : 'w-auto rounded-full py-3 px-8 md:px-12'}`}>
          <div className="flex items-center justify-center md:justify-between w-full relative z-20 min-h-[32px]">
            <img src={logoLong} alt="SYMP Studio" className="h-8 w-auto shrink-0 drop-shadow-sm object-contain" />
            {!isMenuOpen && (
              <div className="hidden md:flex items-center gap-8 ml-10 text-white/90 font-medium text-[13px] uppercase tracking-widest animate-fade-in">
                {/* --- UPDATE: Link Portofolio di Navbar --- */}
                <a 
                  href="https://tinyurl.com/SYMP2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                >
                  Portofolio
                </a>
                <a href="#services" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Layanan</a>
                <a href="#contact" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Kontak</a>
              </div>
            )}
          </div>
          <div style={{ transitionTimingFunction: iosSpring }} className={`grid transition-all duration-700 ${isMenuOpen ? 'grid-rows-[1fr] opacity-100 pt-8 pb-4' : 'grid-rows-[0fr] opacity-0 pt-0 pb-0'}`}>
            <div className="overflow-hidden flex flex-col gap-3 items-center text-center w-full">
              {/* --- UPDATE: Link Portofolio di Mobile Menu --- */}
              <a 
                href="https://tinyurl.com/SYMP2025" 
                onClick={closeMenu} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#ffffff]/10 rounded-full text-white/95 font-semibold text-sm uppercase tracking-wider hover:bg-[#ffffff]/20 active:scale-[0.98] transition-all backdrop-blur-md border border-white/5"
              >
                Portofolio
              </a>
              <a href="#services" onClick={closeMenu} className="w-full py-4 bg-[#ffffff]/10 rounded-full text-white/95 font-semibold text-sm uppercase tracking-wider hover:bg-[#ffffff]/20 active:scale-[0.98] transition-all backdrop-blur-md border border-white/5">Layanan</a>
              <a href="#contact" onClick={closeMenu} className="w-full py-4 bg-white text-[#8A0202] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">Kontak</a>
            </div>
          </div>
        </nav>
      </div>
      <button onClick={toggleMenu} className="md:hidden fixed z-[101] top-6 right-6 p-1 text-white/90 hover:text-white focus:outline-none bg-[#4a0000]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full h-10 w-10 flex items-center justify-center transition-all active:scale-90 pointer-events-auto" aria-label="Toggle Menu">
        <div style={{ transitionTimingFunction: iosSpring }} className={`transition-all duration-500 relative w-6 h-6 flex items-center justify-center ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 absolute"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 absolute"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>}
        </div>
      </button>
    </>
  );
}


// --- MAIN COMPONENT ---
export default function HeroLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#8A0202] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9c0202] to-[#6d0000] relative overflow-hidden flex flex-col">

      <Navbar />

      {/* --- CSS ANIMASI --- */}
      <style>{`
        @keyframes subtle-spotlight { 0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; } 50% { transform: translate(-45%, -40%) scale(1.1); opacity: 0.7; } 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes peek-float { 0%, 100% { transform: translate(0, 10px) rotate(5deg); } 50% { transform: translate(-10px, -15px) rotate(-5deg); } }

        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-spotlight { animation: subtle-spotlight 8s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-syme-peek { animation: peek-float 6s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* --- AREA ANIMASI BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#ff4d4d]/30 blur-[150px] rounded-full animate-spotlight origin-center"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>
      </div>
      
      {/* --- MASCOT SYME --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        <div className="absolute bottom-[-20px] right-[-10px] md:bottom-[-30px] md:right-[-20px] opacity-90 animate-syme-peek">
             <img src={symeMascot} alt="SYME Mascot" className="w-24 md:w-40 lg:w-48 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transform scale-x-[-1]" />
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
            
            {/* Tombol Buat Desain */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-white text-[#8A0202] font-bold text-sm uppercase tracking-widest border-2 border-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 rounded-full cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
              <span>Buat Desain</span>
            </button>

            {/* --- UPDATE: Tombol Lihat Portofolio ke Link Eksternal --- */}
            <a
              href="https://tinyurl.com/SYMP2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center px-8 py-4 w-full sm:w-auto bg-transparent border border-white/70 text-white font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white hover:text-[#8A0202] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 rounded-full cursor-pointer"
            >
              Lihat Portofolio
            </a>
          </div>

        </div>
      </section>

      {/* --- RENDER MODAL --- */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </main>
  );
}
