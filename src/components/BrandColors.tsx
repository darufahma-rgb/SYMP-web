import React, { useState } from 'react';
import { 
  Package, FileText, MessageCircle, CreditCard, ArrowRight, 
  X, ChevronLeft, PenTool, Globe, Instagram, Briefcase, Image as ImageIcon, Check 
} from 'lucide-react';

// --- DATA HARGA DARI SCREENSHOT ---
const PRICING_DATA = {
  logo: [
    { name: 'Premium Logo All-in', price: '500K', desc: 'Fixed Price. 2 Opsi Desain, Full Files, Brand Guide, Bonus Poster.' } //
  ],
  identity: [
    { name: 'Basic Brand Kit', price: '300K', desc: 'Color palette, Typo, Logo Alt.' }, //
    { name: 'Standard Kit', price: '500K', desc: 'Mini Brand Guide, Icon System.' }, //
    { name: 'Premium Identity', price: '800K', desc: 'Full Foundation, Mockups, Social Templates.' } //
  ],
  carousel: [
    { name: 'Basic Carousel', price: '70K/post', desc: '3-5 Slide, Caption Basic.' }, //
    { name: 'Standard Story', price: '100K/post', desc: '6-8 Slide, Copywriting Audien-Centric.' }, //
    { name: 'Premium Educate', price: '125K/post', desc: '9-10 Slide, Microblog, Source File.' } //
  ],
  poster: [
    { name: 'Basic Poster', price: '100K', desc: 'Info event dadakan, 1 Konsep.' }, //
    { name: 'Standard', price: '200K', desc: 'Tampilan profesional, HD Ready Print.' }, //
    { name: 'Premium Art', price: '300K', desc: 'Manipulasi/Ilustrasi kompleks, Source File.' } //
  ],
  website: [
    { name: 'Basic Page', price: '800K', desc: '1 Page, React/HTML, Responsive.' }, //
    { name: 'Pro Business', price: '1.3 Juta', desc: 'SEO Basic, Animasi, WA Form, Free Deploy.' }, //
    { name: 'Premium Web', price: '2 Juta', desc: 'Micro Interaction, Sales Copy, Priority.' } //
  ],
  hosting: [
    { id: 'starter', name: 'Starter Host', price: '300K/thn', desc: 'Cloud High Speed, Basic SSL.' }, //
    { id: 'business', name: 'Business Kit', price: '500K/thn', desc: 'Hosting Premium + Domain .COM.' }, //
    { id: 'pro', name: 'Pro Managed', price: '1 Juta/thn', desc: 'Resource Tinggi, Full Maintenance.' } //
  ]
};

// --- SUB-COMPONENT: SMART MODAL ---
const ProjectModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // State Form
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    industry: '',
    detail: ''
  });

  // State Pilihan Paket
  const [selectedPackage, setSelectedPackage] = useState(null); // Menyimpan objek paket {name, price}
  const [selectedHosting, setSelectedHosting] = useState(null); // Khusus Website

  if (!isOpen) return null;

  // Data Pilihan Layanan
  const services = [
    { id: 'logo', label: 'Desain Logo', icon: <PenTool size={20} />, desc: 'Premium Logo Package.' },
    { id: 'identity', label: 'Brand Identity', icon: <Briefcase size={20} />, desc: 'Visual Kit lengkap.' },
    { id: 'poster', label: 'Poster Design', icon: <ImageIcon size={20} />, desc: 'Event & Promosi.' },
    { id: 'carousel', label: 'Instagram Carousel', icon: <Instagram size={20} />, desc: 'Microblog feed.' },
    { id: 'website', label: 'Website Dev', icon: <Globe size={20} />, desc: 'Landing Page & Profile.' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- 1. Header Chat ---
    let message = `Halo SYMP Studio! 👋%0A%0ASaya mau order paket *${selectedCategory.toUpperCase()}* nih.%0A`;
    message += `__________________________%0A%0A`;
    
    // --- 2. Data Client ---
    message += `👤 *DATA CLIENT*%0A`;
    message += `• Nama: ${formData.name}%0A`;
    message += `• Brand: ${formData.brandName} (${formData.industry})%0A%0A`;

    // --- 3. Detail Paket ---
    message += `📦 *PAKET YANG DIPILIH*%0A`;
    if (selectedPackage) {
      message += `• Pilihan: ${selectedPackage.name}%0A`;
      message += `• Harga Dasar: ${selectedPackage.price}%0A`;
    }

    // --- 4. Khusus Website (Hosting) ---
    if (selectedCategory === 'website') {
       if (selectedHosting) {
         message += `• Add-on Hosting: ${selectedHosting.name} (${selectedHosting.price})%0A`;
       } else {
         message += `• Hosting: Punya sendiri / Tidak dipilih%0A`;
       }
    }

    // --- 5. Notes ---
    if (formData.detail) {
      message += `%0A📝 *NOTES:*%0A${formData.detail}%0A`;
    }

    message += `__________________________%0A%0AMohon konfirmasi ketersediaan slot ya!`;

    window.open(`https://wa.me/6281311506025?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#111] text-white p-5 flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-lg font-bold">Start Your Project</h3>
            <p className="text-xs text-gray-400">Pilih paket sesuai budget kamu.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition"><X size={20}/></button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          
          {/* STEP 1: PILIH SERVICE */}
          {step === 1 && (
            <div className="animate-in slide-in-from-right duration-300">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Layanan apa yang dibutuhkan?</h4>
              <div className="grid grid-cols-1 gap-3">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => { setSelectedCategory(srv.id); setStep(2); setSelectedPackage(null); setSelectedHosting(null); }}
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

          {/* STEP 2: FORM DETAIL & PRICING */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="animate-in slide-in-from-right duration-300 space-y-5">
               <button type="button" onClick={() => setStep(1)} className="flex items-center text-xs font-bold text-gray-400 mb-2 hover:text-[#8A0202] uppercase tracking-wider">
                <ChevronLeft size={14} className="mr-1" /> Ganti Layanan
              </button>

              {/* --- BAGIAN 1: DATA DIRI --- */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-3 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Data Client</p>
                <div className="grid grid-cols-2 gap-3">
                  <input required name="name" onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none" placeholder="Nama Kamu" />
                  <input required name="industry" onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none" placeholder="Bidang Bisnis" />
                </div>
                <input required name="brandName" onChange={handleChange} className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#8A0202] outline-none" placeholder="Nama Brand / Usaha" />
              </div>

              {/* --- BAGIAN 2: PILIH PAKET (PRICING GRID) --- */}
              <div>
                <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Package size={16} className="text-[#8A0202]" /> Pilih Paket {selectedCategory.toUpperCase()}
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  {PRICING_DATA[selectedCategory]?.map((pkg, idx) => {
                    const isSelected = selectedPackage?.name === pkg.name;
                    return (
                      <div 
                        key={idx}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`
                          cursor-pointer relative p-4 rounded-xl border-2 transition-all duration-200
                          ${isSelected ? 'border-[#8A0202] bg-red-50' : 'border-gray-100 bg-white hover:border-red-200'}
                        `}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className={`font-bold ${isSelected ? 'text-[#8A0202]' : 'text-gray-800'}`}>{pkg.name}</span>
                          <span className="font-black text-gray-900">{pkg.price}</span>
                        </div>
                        <p className="text-xs text-gray-500 pr-6">{pkg.desc}</p>
                        {isSelected && <div className="absolute top-4 right-4 text-[#8A0202]"><Check size={18} /></div>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* --- BAGIAN 3: ADD-ON HOSTING (KHUSUS WEBSITE) --- */}
              {selectedCategory === 'website' && (
                <div className="pt-2 border-t border-dashed border-gray-200">
                  <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe size={16} className="text-[#8A0202]" /> Add-on Hosting & Maintenance
                  </p>
                  <div className="space-y-2">
                    {PRICING_DATA.hosting.map((host) => {
                      const isActive = selectedHosting?.id === host.id;
                      return (
                         <div 
                          key={host.id}
                          onClick={() => setSelectedHosting(isActive ? null : host)} // Toggle
                          className={`
                            cursor-pointer flex items-center justify-between p-3 rounded-lg border transition-all
                            ${isActive ? 'border-[#8A0202] bg-red-50' : 'border-gray-200 bg-white hover:bg-gray-50'}
                          `}
                        >
                          <div>
                            <div className="text-sm font-bold text-gray-800">{host.name} <span className="text-xs font-normal text-gray-500">({host.price})</span></div>
                            <div className="text-[10px] text-gray-400">{host.desc}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isActive ? 'bg-[#8A0202] border-[#8A0202]' : 'border-gray-300'}`}>
                            {isActive && <Check size={12} className="text-white" />}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* --- BAGIAN 4: NOTES --- */}
              <div>
                <textarea 
                  name="detail" 
                  onChange={handleChange} 
                  rows="2" 
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:border-[#8A0202] outline-none" 
                  placeholder="Ada request khusus atau referensi desain?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={!selectedPackage}
                className={`
                  w-full py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2
                  ${selectedPackage ? 'bg-[#8A0202] text-white hover:bg-[#600000]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                `}
              >
                <span>Lanjut ke WhatsApp</span>
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
export default function HowToOrderPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { id: '01', title: 'Pilih Paket', desc: 'Tentukan service branding, social media, atau web yang kamu butuhkan.', icon: <Package size={32} /> },
    { id: '02', title: 'Isi Brief', desc: 'Pilih opsi harga dan isi detail brief agar kami paham visi bisnismu.', icon: <FileText size={32} /> },
    { id: '03', title: 'Connect WA', desc: 'Terhubung otomatis ke WhatsApp dengan rincian harga & request.', icon: <MessageCircle size={32} /> },
    { id: '04', title: 'Payment', desc: 'Selesaikan pembayaran, dan project kamu langsung kami kerjakan.', icon: <CreditCard size={32} /> }
  ];

  return (
    <section className="py-24 bg-white font-['Poppins'] text-gray-900 selection:bg-[#8A0202] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How to Order</h2>
          <p className="text-gray-500 text-lg font-light">Pilih paket terbaik untuk upgrade visual brand kamu.</p>
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

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </section>
  );
}
