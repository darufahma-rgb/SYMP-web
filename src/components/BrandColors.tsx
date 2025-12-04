import React, { useState } from 'react';
import { 
  Package, FileText, MessageCircle, CreditCard, ArrowRight, 
  X, ChevronLeft, PenTool, Globe, Instagram, Briefcase 
} from 'lucide-react';

// --- SUB-COMPONENT: SMART MODAL ---
const ProjectModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // State tunggal untuk menampung semua jenis input
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    industry: '',       // Bidang usaha (F&B, Tech, Fashion)
    style: 'Minimalis', // Untuk Logo/Identity
    slideCount: '5-7 Slide', // Untuk Carousel
    webType: 'Landing Page', // Untuk Web
    hosting: 'no',      // Untuk Web (Yes/No)
    detail: ''          // Catatan tambahan
  });

  if (!isOpen) return null;

  // Data Pilihan Layanan
  const services = [
    { id: 'logo', label: 'Desain Logo', icon: <PenTool size={20} />, desc: 'Logo only, logogram & logotype.' },
    { id: 'identity', label: 'Brand Identity', icon: <Briefcase size={20} />, desc: 'Full kit: Logo, warna, font, pattern.' },
    { id: 'carousel', label: 'Instagram Carousel', icon: <Instagram size={20} />, desc: 'Konten microblog/edukasi feeds.' },
    { id: 'website', label: 'Website Development', icon: <Globe size={20} />, desc: 'Company profile atau Landing page.' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- 1. Header Chat ---
    let message = `Halo SYMP Studio! 👋%0A%0ASaya tertarik buat project baru nih.%0A`;
    message += `__________________________%0A%0A`;
    
    // --- 2. Identitas Client ---
    message += `👤 *DATA CLIENT*%0A`;
    message += `• Nama: ${formData.name}%0A`;
    message += `• Brand: ${formData.brandName} (${formData.industry})%0A%0A`;

    // --- 3. Detail Request (Sesuai Kategori) ---
    message += `📦 *DETAIL REQUEST: ${selectedCategory.toUpperCase()}*%0A`;

    if (selectedCategory === 'logo') {
      message += `• Preferensi Style: ${formData.style}%0A`;
    } 
    else if (selectedCategory === 'identity') {
      message += `• Cakupan: Full Brand Identity%0A`;
      message += `• Arah Visual: ${formData.style}%0A`;
    }
    else if (selectedCategory === 'carousel') {
      message += `• Estimasi Slide: ${formData.slideCount}%0A`;
    }
    else if (selectedCategory === 'website') {
      message += `• Tipe Web: ${formData.webType}%0A`;
      // Terjemahkan value hosting ke bahasa manusia
      const hostingText = formData.hosting === 'yes' ? 'Mau sekalian diurusin (All-in)' : 
                          formData.hosting === 'consul' ? 'Mau konsultasi dulu' : 'Sudah punya sendiri';
      message += `• Hosting & Domain: ${hostingText}%0A`;
    }

    // --- 4. Catatan Tambahan ---
    if (formData.detail) {
      message += `• Notes: ${formData.detail}%0A`;
    }

    message += `__________________________%0A%0AMohon info pricelist dan langkah selanjutnya ya!`;

    window.open(`https://wa.me/6281311506025?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#111] text-white p-5 flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-lg font-bold">Start Your Project</h3>
            <p className="text-xs text-gray-400">Isi brief singkat biar kita langsung nyambung.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition"><X size={20}/></button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          
          {/* STEP 1: PILIH SERVICE */}
          {step === 1 && (
            <div className="animate-in slide-in-from-right duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Pilih layanan yang kamu butuhkan:</h4>
              <div className="space-y-3">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => { setSelectedCategory(srv.id); setStep(2); }}
                    className="w-full flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-[#8A0202] hover:bg-red-50 transition-all group text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#8A0202] group-hover:text-white transition-colors">
                      {srv.icon}
                    </div>
                    <div>
                      <span className="block font-bold text-gray-800 group-hover:text-[#8A0202]">{srv.label}</span>
                      <span className="text-xs text-gray-500">{srv.desc}</span>
                    </div>
                    <ArrowRight size={18} className="ml-auto text-gray-300 group-hover:text-[#8A0202]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: FORM DETAIL */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="animate-in slide-in-from-right duration-300 space-y-4">
               <button type="button" onClick={() => setStep(1)} className="flex items-center text-xs font-bold text-gray-400 mb-2 hover:text-[#8A0202] uppercase tracking-wider">
                <ChevronLeft size={14} className="mr-1" /> Ganti Kategori
              </button>

              {/* --- BAGIAN 1: DATA DIRI (SELALU MUNCUL) --- */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-3 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Data Dasar</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 ml-1">Nama Kamu</label>
                    <input required name="name" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] outline-none" placeholder="Cth: Daru" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 ml-1">Industri Bisnis</label>
                    <input required name="industry" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] outline-none" placeholder="Cth: F&B / Fashion" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 ml-1">Nama Brand</label>
                  <input required name="brandName" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] outline-none" placeholder="Nama brand kamu" />
                </div>
              </div>

              {/* --- BAGIAN 2: CONDITIONAL FIELDS (MUNCUL SESUAI PILIHAN) --- */}
              <div className="bg-red-50/50 p-4 rounded-xl space-y-3 border border-red-100">
                <p className="text-xs font-bold text-[#8A0202] uppercase tracking-widest mb-1">
                  Detail: {services.find(s => s.id === selectedCategory)?.label}
                </p>

                {/* Field untuk LOGO & IDENTITY */}
                {(selectedCategory === 'logo' || selectedCategory === 'identity') && (
                  <div>
                    <label className="text-xs font-semibold text-gray-700 ml-1">Preferensi Style</label>
                    <select name="style" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none">
                      <option value="Minimalis & Modern">Minimalis & Modern</option>
                      <option value="Elegant & Luxury">Elegant & Luxury</option>
                      <option value="Fun & Playful">Fun & Playful</option>
                      <option value="Corporate & Professional">Corporate & Professional</option>
                      <option value="Abstrak & Artistik">Abstrak & Artistik</option>
                      <option value="Belum tau / Bebas">Belum tau / Serahkan ke Designer</option>
                    </select>
                  </div>
                )}

                {/* Field untuk CAROUSEL */}
                {selectedCategory === 'carousel' && (
                  <div>
                    <label className="text-xs font-semibold text-gray-700 ml-1">Perkiraan Jumlah Slide</label>
                    <select name="slideCount" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none">
                      <option value="1-4 Slide">Micro (1-4 Slide)</option>
                      <option value="5-7 Slide">Medium (5-7 Slide)</option>
                      <option value="8-10 Slide">Long form (8-10 Slide)</option>
                    </select>
                  </div>
                )}

                {/* Field untuk WEBSITE */}
                {selectedCategory === 'website' && (
                  <>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 ml-1">Tipe Website</label>
                      <select name="webType" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none">
                        <option value="Landing Page">Landing Page (Satu Halaman)</option>
                        <option value="Company Profile">Company Profile (Multi Halaman)</option>
                        <option value="Toko Online">Toko Online / Catalog</option>
                        <option value="Blog / Portal">Blog / Portal Berita</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 ml-1">Butuh Hosting & Domain?</label>
                      <select name="hosting" onChange={handleChange} className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none">
                        <option value="no">Enggak, saya sudah punya</option>
                        <option value="yes">Ya, sekalian urusin (All-in)</option>
                        <option value="consul">Belum tau / Konsultasi dulu</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Field Deskripsi / Notes (Semua Kategori) */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 ml-1">Catatan / Detail Tambahan</label>
                  <textarea 
                    name="detail" 
                    onChange={handleChange} 
                    rows="2" 
                    className="w-full mt-1 p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none" 
                    placeholder={
                      selectedCategory === 'carousel' ? 'Topik konten tentang apa?' : 
                      selectedCategory === 'website' ? 'Ada referensi web yg disuka?' : 
                      'Jelaskan visi brand secara singkat...'
                    }
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-[#8A0202] text-white rounded-xl font-bold hover:bg-[#600000] transition-colors shadow-lg flex items-center justify-center gap-2">
                <span>Kirim Brief ke WhatsApp</span>
                <MessageCircle size={18} />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
export default function HowToOrderAdvanced() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { 
      id: '01',
      title: 'Pilih Paket', 
      desc: 'Tentukan service branding, social media, atau web yang kamu butuhkan.', 
      icon: <Package size={32} />
    },
    { 
      id: '02',
      title: 'Isi Data & Brief', 
      desc: 'Lengkapi form detail agar kami memahami visi dan goal bisnismu.', 
      icon: <FileText size={32} />
    },
    { 
      id: '03',
      title: 'Connect WA', 
      desc: 'Terhubung otomatis ke WhatsApp dengan brief yang sudah rapi.', 
      icon: <MessageCircle size={32} />
    },
    { 
      id: '04',
      title: 'Payment', 
      desc: 'Selesaikan pembayaran, dan project kamu langsung kami kerjakan.', 
      icon: <CreditCard size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white font-['Poppins'] text-gray-900 selection:bg-[#8A0202] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How to Order</h2>
          <p className="text-gray-500 text-lg font-light">4 langkah mudah memulai transformasi visual brand Anda.</p>
          <div className="w-16 h-1 bg-[#8A0202] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-white p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <span className="absolute top-0 right-6 text-6xl font-bold text-gray-100/50 group-hover:text-[#8A0202]/5 transition-colors duration-300 -z-10 select-none">{step.id}</span>
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 group-hover:bg-[#8A0202] group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#8A0202] transition-colors">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 px-8 py-4 bg-[#111] text-white rounded-full font-medium hover:bg-[#8A0202] transition-all duration-300 shadow-lg hover:shadow-[#8A0202]/20 hover:-translate-y-1"
          >
            <span>Buat project kamu sekarang!</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Render Smart Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </section>
  );
}
