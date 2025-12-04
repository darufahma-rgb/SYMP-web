import React, { useState, useEffect } from 'react';
import { 
  Package, FileText, MessageCircle, CreditCard, ArrowRight, 
  X, ChevronLeft, PenTool, Globe, Instagram, Briefcase, Check, Star, Phone, Zap 
} from 'lucide-react';

// --- IMPORT ASSETS ---
import AigyptLogo from '../assets/aigypt-logo.png';
import ArsanaLogo from '../assets/arsana-logo.png';
import DreammeccaLogo from '../assets/dreammecca-logo.png';
import IghTourLogo from '../assets/igh-tour-logo.png';
import SaferLogo from '../assets/safer-logo.png';
import TemantiketLogo from '../assets/Logo Temantiket.png';
import symeMascot from '../assets/SYME.png'; 

// --- DATA HARGA ---
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

// --- MODAL ORDER (Updated with Pre-selection Logic) ---
const ProjectModal = ({ isOpen, onClose, initialData }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({ name: '', brandName: '', industry: '', detail: '' });
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedHosting, setSelectedHosting] = useState(null);

  // Reset / Set Initial Data saat modal dibuka
  useEffect(() => {
    if (isOpen) {
      if (initialData?.category) {
        setSelectedCategory(initialData.category);
        setStep(2); // Langsung loncat ke step 2
        if (initialData?.package) {
          setSelectedPackage(initialData.package);
        }
      } else {
        setStep(1);
        setSelectedCategory('');
        setSelectedPackage(null);
      }
      setSelectedHosting(null);
    }
  }, [isOpen, initialData]);

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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-4 text-left font-sans text-gray-900">
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
            <img src={null /* Placeholder for Navbar logo, we use text or asset if available */} className="hidden" alt="" />
             <div className="text-white font-bold tracking-widest text-sm">SYMP STUDIO</div>
            {!isMenuOpen && (
              <div className="hidden md:flex items-center gap-8 ml-10 text-white/90 font-medium text-[13px] uppercase tracking-widest animate-fade-in">
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
  const [modalInitialData, setModalInitialData] = useState(null);

  const clients = [
    { name: 'Temantiket', src: TemantiketLogo },
    { name: 'AIGYPT', src: AigyptLogo },
    { name: 'Arsana', src: ArsanaLogo },
    { name: 'Dreammecca', src: DreammeccaLogo },
    { name: 'IGH Tour', src: IghTourLogo },
    { name: 'Safer', src: SaferLogo },
  ];

  // Logic: Buka modal langsung ke Logo -> Premium All-in
  const handleOrderLogo = () => {
    setModalInitialData({
      category: 'logo',
      package: PRICING_DATA.logo[0] // Premium Logo All-in
    });
    setIsModalOpen(true);
  };

  const handleBookCall = () => {
    window.open('https://wa.me/6281311506025?text=Halo%20Daru,%20saya%20mau%20book%20call%20untuk%20diskusi%20project.', '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes peek-float { 0%, 100% { transform: translate(0, 10px) rotate(5deg); } 50% { transform: translate(-10px, -15px) rotate(-5deg); } }
        
        .animate-entrance { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-syme-peek { animation: peek-float 6s ease-in-out infinite; }
        .bg-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-3 { animation-delay: 0.3s; }
      `}</style>

      <section 
        className="relative min-h-[100dvh] w-full bg-[#8A0202] text-white selection:bg-white selection:text-[#8A0202] flex flex-col justify-center items-center py-12 px-4 overflow-hidden font-sans"
      >
        <Navbar />

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none" />

        {/* --- MASCOT SYME --- */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
          <div className="absolute bottom-[-20px] right-[-10px] md:bottom-[-30px] md:right-[-20px] opacity-90 animate-syme-peek">
              <img src={symeMascot} alt="SYME Mascot" className="w-24 md:w-40 lg:w-48 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transform scale-x-[-1]" />
          </div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center mt-12 md:mt-0">
          
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 animate-entrance px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg mb-3">
              Premium Logo
            </h2>
            <p className="text-sm md:text-base text-white/80 font-light max-w-2xl mx-auto">
              Satu harga, kualitas dunia. Solusi branding tanpa drama.
            </p>
          </div>

          {/* MAIN CARD */}
          <div className="relative w-full flex flex-col items-center group max-w-[95%] md:max-w-full">
            
            {/* FLOATING BADGE */}
            <div className="z-30 mb-6 animate-entrance animate-float">
              <div className="relative overflow-hidden bg-white text-[#8A0202] text-xs md:text-base font-extrabold px-8 py-2 md:px-10 md:py-3 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] tracking-widest uppercase border-[3px] md:border-[4px] border-[#8A0202] ring-2 ring-white/50">
                <div className="absolute inset-0 bg-shimmer pointer-events-none"></div>
                All-In Package
              </div>
            </div>

            {/* CARD CONTENT */}
            <div className="w-full bg-black/20 backdrop-blur-xl border-2 border-white/80 rounded-3xl md:rounded-[2.5rem] flex flex-col md:flex-row relative shadow-2xl overflow-hidden animate-entrance stagger-1 hover:border-white transition-colors duration-500">
              
              {/* LEFT: Pricing */}
              <div className="w-full md:w-5/12 p-6 md:p-12 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/20 bg-black/10 relative">
                <div className="mt-2 scale-100 hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-md tracking-tight">500K</span>
                </div>
                <span className="text-white/60 text-xs md:text-sm font-medium mb-6 md:mb-8 uppercase tracking-widest">Fixed Price</span>
                
                <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-[200px]">
                  Investasi sekali bayar untuk identitas visual jangka panjang.
                </p>

                <button 
                  onClick={handleOrderLogo}
                  className="w-full py-3 md:py-4 px-6 rounded-full bg-white hover:bg-gray-100 text-[#8A0202] font-extrabold text-sm md:text-lg transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:-translate-y-1 active:scale-95 shadow-lg"
                >
                  Order Sekarang
                </button>
                
                <p className="text-white/30 text-[10px] mt-4 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Secure payment & Fast delivery
                </p>
              </div>

              {/* RIGHT: Features */}
              <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col justify-center bg-white/5">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-6 md:w-8 h-[2px] bg-white/50 inline-block"></span>
                  What You Get
                </h3>
                
                <ul className="grid grid-cols-1 gap-y-3 md:gap-y-5 text-xs md:text-base text-white text-left">
                  <li className="flex items-start gap-3 md:gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white p-1 rounded-full shrink-0 mt-0.5 shadow-lg group-hover/item:bg-[#8A0202] group-hover/item:text-white transition-colors"><Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#8A0202] stroke-[4] group-hover/item:text-white" /></div>
                    <div>
                      <span className="font-bold block text-sm md:text-lg group-hover/item:text-yellow-300 transition-colors">2 Opsi Desain Eksklusif</span>
                      <span className="text-white/60 text-[10px] md:text-sm">Pilih 1 terbaik untuk dikembangkan</span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3 md:gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" /></div>
                    <span className="text-white/90 self-center">Brand Guideline Lengkap (PDF)</span>
                  </li>
                  
                  {/* Bonus Item */}
                  <li className="flex items-start gap-3 md:gap-4 p-2 md:p-3 rounded-xl bg-white/10 border border-white/10 -ml-2 md:-ml-3 hover:bg-white/20 transition-colors cursor-default transform hover:scale-[1.02] duration-300">
                    <div className="bg-yellow-400 p-1 rounded-full shrink-0 mt-0.5 animate-pulse"><Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#8A0202] fill-[#8A0202]" /></div>
                    <div className="self-center">
                      <span className="font-bold text-yellow-300 block">Bonus: Poster Grand Opening</span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3 md:gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Zap className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" /></div>
                    <span className="text-white/90 self-center">Pengerjaan Cepat (2-3 Hari)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECONDARY ACTION: Book A Call */}
          <div className="mt-8 animate-entrance stagger-3">
             <button 
                onClick={handleBookCall}
                className="flex items-center gap-2 text-white/70 hover:text-white text-xs md:text-sm font-medium border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all"
             >
                <Phone size={14} />
                <span>Book a Call Instead</span>
             </button>
          </div>

          {/* CLIENTS LOGO */}
          <div className="mt-12 w-full max-w-3xl px-4 animate-entrance stagger-3">
             <p className="text-center text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
               Trusted By
             </p>
             <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                {clients.map((client, index) => (
                  <div key={index} className="w-16 h-8 md:w-24 md:h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                    <img src={client.src} alt={client.name} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                ))}
             </div>
          </div>

        </div>

        {/* --- RENDER MODAL --- */}
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          initialData={modalInitialData}
        />

      </section>
    </>
  );
}
