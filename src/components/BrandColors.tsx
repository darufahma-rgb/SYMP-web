import React from 'react';
import { Package, FileText, MessageCircle, CreditCard, ArrowRight } from 'lucide-react';

export default function HowToOrderSimple() {
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
      desc: 'Terhubung otomatis ke WhatsApp untuk konfirmasi detail & deal.', 
      icon: <MessageCircle size={32} />
    },
    { 
      id: '04',
      title: 'Payment', 
      desc: 'Selesaikan pembayaran, dan project kamu langsung kami kerjakan.', 
      icon: <CreditCard size={32} />
    }
  ];

  const handleOrderClick = () => {
    window.open('https://wa.me/6281311506025?text=Halo%20SYMP,%20mau%20order%20dong!', '_blank');
  };

  return (
    <section className="py-24 bg-white font-['Poppins'] text-gray-900 selection:bg-[#8A0202] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER CENTERED --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How to Order
          </h2>
          <p className="text-gray-500 text-lg font-light">
            4 langkah mudah memulai transformasi visual brand Anda.
          </p>
          <div className="w-16 h-1 bg-[#8A0202] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- STEPS GRID (MINIMALIST) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 relative">
          
          {/* Connecting Line (Desktop Only) - Optional Decorative */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Step Number Background */}
              <span className="absolute top-0 right-6 text-6xl font-bold text-gray-100/50 group-hover:text-[#8A0202]/5 transition-colors duration-300 -z-10 select-none">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 group-hover:bg-[#8A0202] group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#8A0202] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="flex justify-center">
          <button 
            onClick={handleOrderClick}
            className="group flex items-center gap-3 px-8 py-4 bg-[#111] text-white rounded-full font-medium hover:bg-[#8A0202] transition-all duration-300 shadow-lg hover:shadow-[#8A0202]/20 hover:-translate-y-1"
          >
            <span>Mulai Project Sekarang</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
