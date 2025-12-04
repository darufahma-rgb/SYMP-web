import React, { useState } from 'react';
import { 
  Package, FileText, MessageCircle, CreditCard, ArrowRight, 
  X, ChevronLeft, PenTool, Globe, Instagram, Briefcase, Check, Star 
} from 'lucide-react';

// --- DATA HARGA (Sama seperti sebelumnya) ---
const PRICING_DATA = {
  logo: [
    { name: 'Premium Logo All-in', price: '500K', desc: 'Fixed Price. 2 Opsi Desain, Full Files, Brand Guide, Bonus Poster.' }
  ],
  identity: [
    { name: 'Basic Brand Kit', price: '300K', desc: 'Color palette, Typo, Logo Alt.' },
    { name: 'Standard Kit', price: '500K', desc: 'Mini Brand Guide, Icon System.' },
    { name: 'Premium Identity', price: '800K', desc: 'Full Foundation, Mockups, Social Templates.' }
  ],
  carousel: [
    { name: 'Basic Carousel', price: '70K/post', desc: '3-5 Slide, Caption Basic.' },
    { name: 'Standard Story', price: '100K/post', desc: '6-8 Slide, Copywriting Audien-Centric.' },
    { name: 'Premium Educate', price: '125K/post', desc: '9-10 Slide, Microblog, Source File.' }
  ],
  poster: [
    { name: 'Basic Poster', price: '100K', desc: 'Info event dadakan, 1 Konsep.' },
    { name: 'Standard', price: '200K', desc: 'Tampilan profesional, HD Ready Print.' },
    { name: 'Premium Art', price: '300K', desc: 'Manipulasi/Ilustrasi kompleks, Source File.' }
  ],
  website: [
    { name: 'Basic Page', price: '800K', desc: '1 Page, React/HTML, Responsive.' },
    { name: 'Pro Business', price: '1.3 Juta', desc: 'SEO Basic, Animasi, WA Form, Free Deploy.' },
    { name: 'Premium Web', price: '2 Juta', desc: 'Micro Interaction, Sales Copy, Priority.' }
  ],
  hosting: [
    { id: 'starter', name: 'Starter Host', price: '300K/thn', desc: 'Cloud High Speed, Basic SSL.' },
    { id: 'business', name: 'Business Kit', price: '500K/thn', desc: 'Hosting Premium + Domain .COM.' },
    { id: 'pro', name: 'Pro Managed', price: '1 Juta/thn', desc: 'Resource Tinggi, Full Maintenance.' }
  ]
};

// --- MODAL COMPONENT ---
const ProjectModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({ name: '', brandName: '', industry: '', detail: '' });
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedHosting, setSelectedHosting] = useState(null);

  if (!isOpen) return null;

  const services = [
    { id: 'logo', label: 'Logo Design', icon: <PenTool size={20} /> },
    { id: 'identity', label: 'Brand Identity', icon: <Briefcase size={20} /> },
    { id: 'poster', label: 'Poster/Flyer', icon: <Star size={20} /> },
    { id: 'carousel', label: 'IG Carousel', icon: <Instagram size={20} /> },
    { id: 'website', label: 'Web Development', icon: <Globe size={20} /> },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `Halo SYMP Studio! 👋%0A%0ASaya tertarik dengan layanan *${selectedCategory.toUpperCase()}*.%0A__________________________%0A%0A👤 *CLIENT PROFILE*%0A• Nama: ${formData.name}%0A• Brand: ${formData.brandName} (${formData.industry})%0A%0A📦 *SELECTED PACKAGE*%0A`;
    if (selectedPackage) message += `• Paket: ${selectedPackage.name}%0A• Harga: ${selectedPackage.price}%0A`;
    if (selectedCategory === 'website') message += selectedHosting ? `• Hosting: ${selectedHosting.name} (${selectedHosting.price})%0A` : `• Hosting: No/Own Hosting%0A`;
    if (formData.detail) message += `%0A📝 *NOTES*%0A${formData.detail}%0A`;
    message += `__________________________%0A%0AMohon info ketersediaan slot. Thank you!`;
    window.open(`https://wa.me/6281311506025?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 isolate">
      {/* Backdrop with Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      {/* Main Card */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Header Visual */}
        <div className="bg-[#111] text-white px-8 py-6 flex justify-between items-center shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A0202] rounded-full blur-[60px] opacity-40 translate-x-10 -translate-y-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-['Poppins'] tracking-tight">Start Project</h3>
            <p className="text-white/60 text-sm mt-1">Lengkapi brief singkat untuk memulai.</p>
          </div>
          <button onClick={onClose} className="relative z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><X size={20}/></button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar bg-gray-50/50 h-full">
          
          {/* STEP 1: SERVICE SELECTION */}
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4 duration-500 fade-in">
              <h4 className="text-gray-900 font-bold mb-6 text-lg">Pilih Kategori Project</h4>
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
                <ChevronLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Categories
              </button>

              {/* Data Client Inputs */}
              <div className="space-y-4">
                <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#8A0202]"></div> Data Profil</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required name="name" onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Nama Lengkap" />
                  <input required name="industry" onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Bidang Bisnis (e.g. F&B)" />
                </div>
                <input required name="brandName" onChange={handleChange} className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none transition-all" placeholder="Nama Brand / Usaha" />
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
                  <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2"><Globe size={14} /> Add-on Hosting (Optional)</h5>
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
                 <textarea name="detail" onChange={handleChange} rows="3" className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#8A0202] focus:ring-4 focus:ring-[#8A0202]/10 outline-none resize-none" placeholder="Ceritakan sedikit tentang style yang kamu suka..."></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={!selectedPackage}
                className={`w-full py-5 rounded-xl font-bold text-lg tracking-wide shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform active:scale-[0.98]
                  ${selectedPackage ? 'bg-[#8A0202] text-white hover:bg-[#600000] hover:shadow-[#8A0202]/30' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                `}
              >
                <span>Finalize & Chat on WhatsApp</span>
                <MessageCircle size={20} />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function HowToOrderPremium() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { id: '01', title: 'Select Package', desc: 'Pilih layanan Branding, Social Media, atau Website sesuai kebutuhanmu.', icon: <Package size={28} /> },
    { id: '02', title: 'Fill Brief', desc: 'Isi formulir spesifikasi project dan pilih paket harga yang cocok.', icon: <FileText size={28} /> },
    { id: '03', title: 'Discussion', desc: 'Terhubung ke WhatsApp untuk konfirmasi detail dan deal harga.', icon: <MessageCircle size={28} /> },
    { id: '04', title: 'Execution', desc: 'Pembayaran beres, project langsung masuk antrian produksi.', icon: <CreditCard size={28} /> }
  ];

  return (
    <section className="py-32 bg-white font-['Poppins'] text-gray-900 selection:bg-[#8A0202] selection:text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-40 -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Simple Steps to <br/> <span className="text-[#8A0202]">Elevate Your Brand.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-lg">
              Proses order yang dirancang efisien. Tanpa ribet, langsung ke inti solusi visual brand Anda.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-gray-300">
              <div className="w-12 h-[2px] bg-[#8A0202]"></div>
              SYMP_GUIDE_2025
            </div>
          </div>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
              
              {/* Number Watermark */}
              <div className="absolute top-6 right-8 text-6xl font-black text-gray-50 group-hover:text-red-50 transition-colors duration-500 -z-10">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#111] text-white flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#8A0202] group-hover:scale-110 transition-all duration-500">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#8A0202] transition-colors">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">{step.desc}</p>

              {/* Arrow Indicator */}
              <div className="mt-auto pt-6 border-t border-gray-50 flex justify-end">
                <ArrowRight className="text-gray-300 group-hover:text-[#8A0202] group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-10 py-5 bg-[#111] text-white rounded-full font-bold text-lg tracking-wide hover:bg-[#8A0202] transition-all duration-500 shadow-2xl hover:shadow-red-900/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Buat Project Kamu Sekarang 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#8A0202] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <p className="mt-6 text-sm text-gray-400 font-medium">
            *Konsultasi gratis, tidak dipungut biaya di awal.
          </p>
        </div>

      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </section>
  );
}
