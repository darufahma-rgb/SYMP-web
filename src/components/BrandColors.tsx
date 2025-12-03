import React from 'react';
import { Package, FileText, MessageCircle, CreditCard, ArrowRight } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    { 
      id: '01',
      title: 'Pilih Paket', 
      desc: 'Tentukan service yang lo butuh (Branding/Social/Web).', 
      icon: <Package size={24} />,
      bg: '#111111', 
      text: 'white' 
    },
    { 
      id: '02',
      title: 'Isi Data & Brief', 
      desc: 'Isi form detail biar kita paham visi lo.', 
      icon: <FileText size={24} />,
      bg: '#F5F5F5', 
      text: 'black',
      border: true
    },
    { 
      id: '03',
      title: 'Connect WA', 
      desc: 'Otomatis ke WhatsApp buat konfirmasi & deal.', 
      icon: <MessageCircle size={24} />,
      bg: '#8A0202', // SYMP Red
      text: 'white' 
    },
    { 
      id: '04',
      title: 'Payment & Kickoff', 
      desc: 'Lakukan pembayaran, dan project langsung jalan.', 
      icon: <CreditCard size={24} />,
      bg: '#111111', 
      text: 'white' 
    }
  ];

  const handleOrderClick = () => {
    // Ganti nomor WA di sini
    window.open('https://wa.me/6281234567890?text=Halo%20SYMP,%20mau%20order%20dong!', '_blank');
  };

  return (
    <section className="py-24 bg-[#F3F0EA] min-h-screen flex flex-col justify-center font-sans selection:bg-[#8A0202] selection:text-white">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 relative">
           {/* Decorative 'Editor' Marks */}
           <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold tracking-[0.3em] text-[#8A0202]/40 uppercase">
             SYMP_GUIDE_01
           </div>
           
           <h2 className="text-5xl md:text-7xl font-black text-black mb-4 font-['Poppins'] tracking-tighter">
             HOW TO ORDER
           </h2>
           <p className="text-gray-500 font-medium max-w-lg mx-auto">
             4 langkah simpel buat upgrade visual brand lo bareng SYMP.
           </p>
        </div>

        {/* --- THE STACK (Flow Steps) --- */}
        <div className="relative group p-4 mb-12">
          
          {/* EDITOR SELECTION BOX (Garis Merah Tipis) */}
          <div className="absolute -inset-2 border border-[#8A0202]/20 rounded-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#8A0202]"></div>
             <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#8A0202]"></div>
             <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#8A0202]"></div>
             <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#8A0202]"></div>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group/item relative w-full min-h-[100px] md:h-28 rounded-[2rem] md:rounded-full flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-6 md:py-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:z-10 overflow-hidden"
                style={{ 
                  backgroundColor: step.bg,
                  border: step.border ? '1px solid #E5E5E5' : 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Visual Glare */}
                <div className="absolute top-0 inset-x-10 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none opacity-40"></div>

                {/* Left: Number & Title */}
                <div className="flex items-center gap-6 z-10 w-full md:w-auto">
                  <span className={`text-xl font-mono font-bold opacity-50 ${step.text === 'white' ? 'text-white' : 'text-black'}`}>
                    {step.id}
                  </span>
                  <div className="text-left">
                    <h3 className={`text-xl md:text-2xl font-black tracking-tight font-['Poppins'] leading-none ${step.text === 'white' ? 'text-white' : 'text-black'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Description & Icon */}
                <div className={`mt-2 md:mt-0 flex items-center justify-between w-full md:w-auto gap-4 md:gap-8 ${step.text === 'white' ? 'text-white' : 'text-black'}`}>
                  <span className="hidden md:block text-sm font-medium opacity-70 text-right max-w-[200px] leading-tight">
                    {step.desc}
                  </span>
                  
                  {/* Mobile Desc (Shown below title on mobile) */}
                  <span className="md:hidden text-sm font-medium opacity-70 text-left leading-tight">
                    {step.desc}
                  </span>

                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    {step.icon}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="flex justify-center">
            <button 
                onClick={handleOrderClick}
                className="group relative px-10 py-5 bg-[#8A0202] text-white rounded-full font-bold text-lg tracking-wide hover:bg-[#600000] transition-all duration-300 shadow-lg hover:shadow-[#8A0202]/40 hover:-translate-y-1 flex items-center gap-3"
            >
                <span>ORDER VIA WHATSAPP</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
}
