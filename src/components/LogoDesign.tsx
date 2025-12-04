import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  X, 
  Instagram, 
  Globe, 
  Send, 
  Menu,
  Palette,
  Layout,
  MousePointer2
} from 'lucide-react';

/* --- SUB COMPONENTS --- */

// 1. NAVBAR
const Navbar = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-white">
          SAFEER<span className="text-amber-400">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
          <button 
            onClick={onOrderClick}
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-amber-400 transition-all"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-fade-in">
          <a href="#" className="text-gray-300 py-2">Portfolio</a>
          <a href="#" className="text-gray-300 py-2">Services</a>
          <button 
            onClick={() => {
              onOrderClick();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 bg-amber-400 text-black font-bold rounded-lg"
          >
            Start Project
          </button>
        </div>
      )}
    </nav>
  );
};

// 2. HERO SECTION (Compact Mobile)
const Hero = ({ onOrderClick }) => (
  <header className="relative pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
    {/* Background Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/20 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
        <span className="text-amber-400 text-[10px] md:text-sm font-medium tracking-widest uppercase">
          Premium Brand Identity for Visionaries
        </span>
      </div>
      
      {/* Heading: Mobile text-4xl (Compact), Desktop text-7xl */}
      <h1 className="text-4xl md:text-7xl font-sans font-bold text-white mb-4 md:mb-8 leading-tight">
        Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Majestic</span> <br />
        Digital Legacies
      </h1>
      
      <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
        We transform businesses into authoritative brands. 
        Minimalist luxury designed to elevate your market position instantly.
      </p>
      
      <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
        <button 
          onClick={onOrderClick}
          className="w-full md:w-auto px-8 py-3 md:py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all transform hover:scale-105 active:scale-95 text-sm md:text-base flex items-center justify-center gap-2"
        >
          Order Brand Identity <ArrowRight className="w-4 h-4" />
        </button>
        
        <button className="w-full md:w-auto px-8 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all text-sm md:text-base backdrop-blur-sm">
          View Our Portfolio
        </button>
      </div>
    </div>
  </header>
);

// 3. BRIEF POPUP (Smart Scroll Logic)
const BriefPopup = ({ isOpen, onClose, focusSection }) => {
  const logoSectionRef = useRef(null);

  // Auto Scroll Logic
  useEffect(() => {
    if (isOpen && focusSection === 'logo-selection' && logoSectionRef.current) {
      // Delay dikit biar animasi modal kelar dulu
      setTimeout(() => {
        logoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Visual cue: flash effect dikit biar user ngeh (opsional)
        logoSectionRef.current.classList.add('animate-pulse');
        setTimeout(() => logoSectionRef.current.classList.remove('animate-pulse'), 1000);
      }, 300);
    }
  }, [isOpen, focusSection]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full md:max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 md:rounded-2xl shadow-2xl animate-fade-in-up">
        
        {/* Close Button Mobile (Sticky) */}
        <div className="sticky top-0 z-20 flex justify-end p-4 bg-[#0a0a0a]/90 backdrop-blur md:hidden border-b border-white/5">
           <button onClick={onClose} className="p-2 bg-white/10 rounded-full">
              <X className="w-5 h-5 text-white" />
           </button>
        </div>

        <div className="p-5 md:p-10 pt-2 md:pt-10">
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Start Project</h3>
              <p className="text-gray-400 text-xs md:text-sm">Isi form singkat ini untuk memulai transformasi brand Anda.</p>
            </div>
            {/* Close Button Desktop */}
            <button onClick={onClose} className="hidden md:block p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <form className="space-y-5 md:space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Nama Lengkap</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Nama Brand/Bisnis</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-amber-400 focus:outline-none transition-colors" placeholder="Ex: Safeer Travel" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Industri / Bidang Usaha</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gray-300 focus:border-amber-400 focus:outline-none">
                <option>Travel & Tourism</option>
                <option>Fashion & Lifestyle</option>
                <option>Technology</option>
                <option>Food & Beverage</option>
                <option>Education</option>
                <option>Other</option>
              </select>
            </div>

            {/* --- LOGO SELECTION SECTION (TARGET SCROLL) --- */}
            <div 
              ref={logoSectionRef} 
              className="space-y-4 pt-6 border-t border-white/10 scroll-mt-24 md:scroll-mt-10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-amber-400" />
                <label className="text-sm font-bold text-white uppercase tracking-wider">
                  Pilih Gaya Logo
                </label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { id: 'monogram', name: 'Monogram', desc: 'Inisial mewah (cth: LV, HP).', icon: <Layout className="w-4 h-4"/> },
                  { id: 'wordmark', name: 'Wordmark', desc: 'Fokus nama text (cth: Sony, Google).', icon: <Menu className="w-4 h-4"/> },
                  { id: 'pictorial', name: 'Pictorial', desc: 'Simbol/Ikon (cth: Apple, Twitter).', icon: <MousePointer2 className="w-4 h-4"/> }
                ].map((style) => (
                  <label 
                    key={style.id} 
                    className="relative group cursor-pointer block"
                  >
                    <input type="radio" name="logoStyle" value={style.id} className="peer sr-only" />
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 peer-checked:border-amber-400 peer-checked:bg-amber-400/10 transition-all hover:bg-white/10 h-full">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-amber-400">{style.icon}</div>
                        <div className="w-4 h-4 rounded-full border border-white/20 peer-checked:bg-amber-400 peer-checked:border-amber-400"></div>
                      </div>
                      <div className="text-white font-bold text-sm mb-1">{style.name}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{style.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-400/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] mt-6">
              Kirim Brief & Dapatkan Penawaran
            </button>
            
            <p className="text-center text-xs text-gray-500">
              Kami akan menghubungi Anda via WhatsApp dalam waktu maksimal 2 jam.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- MAIN COMPONENT --- */

export default function SafeerLanding() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [briefFocus, setBriefFocus] = useState(null); // 'logo-selection' or null

  // Handler utama
  const handleOrderClick = () => {
    setBriefFocus('logo-selection'); // Set target scroll
    setIsBriefOpen(true);            // Buka popup
  };

  const handleCloseBrief = () => {
    setIsBriefOpen(false);
    setBriefFocus(null); // Reset target
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      
      <Navbar onOrderClick={handleOrderClick} />
      
      <main>
        <Hero onOrderClick={handleOrderClick} />
        
        {/* Features / Why Us Section (Simple Version) */}
        <section className="py-12 md:py-20 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { title: "Psychology Driven", desc: "Desain yang dibuat untuk mempengaruhi persepsi audiens." },
                  { title: "Modular System", desc: "Logo yang fleksibel untuk avatar sosmed hingga billboard." },
                  { title: "Fast Delivery", desc: "Selesai dalam 3-5 hari kerja tanpa mengurangi kualitas." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all">
                    <CheckCircle className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>&copy; 2025 SAFEER by SYMP Studio. All rights reserved.</p>
      </footer>

      {/* Popup Component */}
      <BriefPopup 
        isOpen={isBriefOpen} 
        onClose={handleCloseBrief} 
        focusSection={briefFocus}
      />
    </div>
  );
}
