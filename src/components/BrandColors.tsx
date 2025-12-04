import React, { useState } from 'react';
import { Package, FileText, MessageCircle, CreditCard, ArrowRight, X, ChevronLeft } from 'lucide-react';

// --- SUB-COMPONENT: BRIEF MODAL ---
const BriefModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Pilih Kategori, 2: Isi Form
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    description: '', // Untuk Branding
    platform: '',    // Untuk Social Media
    websiteType: ''  // Untuk Web
  });

  if (!isOpen) return null;

  // Data Kategori
  const categories = [
    { id: 'branding', label: 'Identity & Branding', icon: '🎨' },
    { id: 'social', label: 'Social Media Mgmt', icon: '📱' },
    { id: 'web', label: 'Web Development', icon: '💻' },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let briefDetails = '';

    // Logic Brief Berbeda tiap Paket
    if (selectedCategory === 'branding') {
      briefDetails = `• Nama Brand: ${formData.brandName}%0A• Deskripsi Singkat: ${formData.description}`;
    } else if (selectedCategory === 'social') {
      briefDetails = `• Platform: ${formData.platform}%0A• Target Audience: ${formData.description}`;
    } else if (selectedCategory === 'web') {
      briefDetails = `• Tipe Website: ${formData.websiteType}%0A• Referensi: ${formData.description}`;
    }

    const message = `Halo SYMP Studio! 👋%0A%0ASaya mau mulai project baru nih.%0A%0A• Nama: ${formData.name}%0A• Kategori: ${selectedCategory.toUpperCase()}%0A${briefDetails}%0A%0AMohon info selanjutnya ya!`;

    window.open(`https://wa.me/6281311506025?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header Modal */}
        <div className="bg-[#111] text-white p-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Start Project</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition"><X size={20}/></button>
        </div>

        <div className="p-8">
          
          {/* STEP 1: PILIH KATEGORI */}
          {step === 1 && (
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Apa kebutuhanmu?</h4>
              <p className="text-gray-500 mb-6">Pilih layanan agar kami bisa siapkan brief yang pas.</p>
              
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setStep(2); }}
                    className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#8A0202] hover:bg-red-50 transition-all group text-left"
                  >
                    <span className="font-semibold text-gray-700 group-hover:text-[#8A0202]">{cat.icon} {cat.label}</span>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-[#8A0202]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: ISI FORM DINAMIS */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
               <button 
                type="button"
                onClick={() => setStep(1)} 
                className="flex items-center text-sm text-gray-400 mb-4 hover:text-[#8A0202]"
              >
                <ChevronLeft size={16} /> Kembali
              </button>

              <h4 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                Brief: {categories.find(c => c.id === selectedCategory)?.label}
              </h4>

              <div className="space-y-4">
                {/* Field Umum */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kamu</label>
                  <input required name="name" onChange={handleChange} className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A0202]" placeholder="Nama Lengkap" />
                </div>

                {/* --- LOGIC FIELD BERBEDA --- */}
                {selectedCategory === 'branding' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Brand / Usaha</label>
                    <input required name="brandName" onChange={handleChange} className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A0202]" placeholder="Contoh: Kopi Senja" />
                  </div>
                )}

                {selectedCategory === 'social' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Platform Utama</label>
                    <select name="platform" onChange={handleChange} className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A0202]">
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                  </div>
                )}

                {selectedCategory === 'web' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Website</label>
                    <select name="websiteType" onChange={handleChange} className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A0202]">
                      <option value="Landing Page">Landing Page</option>
                      <option value="Company Profile">Company Profile</option>
                      <option value="E-Commerce">E-Commerce / Toko Online</option>
                    </select>
                  </div>
                )}

                {/* Field Deskripsi (Dipakai semua tapi label beda) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {selectedCategory === 'branding' ? 'Jelaskan visi brand kamu singkat saja' : 
                     selectedCategory === 'web' ? 'Ada referensi website yang disuka?' : 
                     'Target audience atau niche konten?'}
                  </label>
                  <textarea required name="description" onChange={handleChange} rows="3" className="w-full p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A0202]" placeholder="Tulis detailnya di sini..."></textarea>
                </div>
              </div>

              <button type="submit" className="w-full mt-8 py-4 bg-[#8A0202] text-white rounded-xl font-bold hover:bg-[#600000] transition-colors shadow-lg">
                Kirim Brief ke WhatsApp
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
export default function HowToOrderWithForm() {
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

      {/* Render Modal */}
      <BriefModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </section>
  );
}
