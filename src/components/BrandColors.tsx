import React from 'react';
import { Package, FileText, MessageCircle, CreditCard, ArrowUpRight } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    { 
      id: '01',
      title: 'Pilih Paket', 
      desc: 'Tentukan service yang lo butuh (Branding/Social/Web).', 
      icon: <Package size={48} />, // Icon diperbesar sebagai ilustrasi
      theme: 'light' // Style Putih
    },
    { 
      id: '02',
      title: 'Isi Data & Brief', 
      desc: 'Isi form detail biar kita paham visi lo.', 
      icon: <FileText size={48} />,
      theme: 'dark' // Style Merah (seperti kartu tengah di referensi)
    },
    { 
      id: '03',
      title: 'Connect WA', 
      desc: 'Otomatis ke WhatsApp buat konfirmasi & deal.', 
      icon: <MessageCircle size={48} />,
      theme: 'light'
    },
    { 
      id: '04',
      title: 'Payment', 
      desc: 'Lakukan pembayaran, dan project langsung jalan.', 
      icon: <CreditCard size={48} />,
      theme: 'light'
    }
  ];

  const handleOrderClick = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20SYMP,%20mau%20order%20dong!', '_blank');
  };

  return (
    <section className="py-24 bg-[#F9F9F9] min-h-screen flex flex-col justify-center font-sans selection:bg-[#8A0202] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-4 font-['Poppins'] tracking-tighter">
                HOW TO ORDER
              </h2>
              <p className="text-gray-500 font-medium text-lg">
                4 langkah simpel buat upgrade visual brand lo bareng SYMP.
              </p>
           </div>
           
           {/* Decorative Tag */}
           <div className="hidden md:block text-right">
              <div className="text-xs font-bold tracking-[0.3em] text-[#8A0202] uppercase mb-2">
                SYMP_GUIDE_V.02
              </div>
              <div className="h-1 w-24 bg-[#8A0202] ml-auto rounded-full"></div>
           </div>
        </div>

        {/* --- CARD GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            // Logic pewarnaan berdasarkan theme
            const isDark = step.theme === 'dark';
            const cardBg = isDark ? 'bg-[#8A0202]' : 'bg-white';
            const textColor = isDark ? 'text-white' : 'text-black';
            const borderColor = isDark ? 'border-[#8A0202]' : 'border-[#8A0202]';
            const subTextColor = isDark ? 'text-white/80' : 'text-gray-500';
            const bottomBoxBg = isDark ? 'bg-[#111111]' : 'bg-[#8A0202]'; // Kotak bawah: Hitam jika kartu merah, Merah jika kartu putih
            const iconColor = 'text-white';
            const arrowBg = isDark ? 'bg-white/20' : 'bg-[#8A0202]';
            const arrowIconColor = isDark ? 'text-white' : 'text-white';

            return (
              <div 
                key={index}
                className={`
                  group relative flex flex-col justify-between
                  ${cardBg} ${textColor}
                  border-2 ${borderColor}
                  rounded-[2.5rem] p-6
                  h-[420px] shadow-sm hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-500 overflow-hidden
                `}
              >
                {/* --- TOP SECTION --- */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black font-['Poppins'] leading-tight">
                        {step.title}
                      </h3>
                      {/* Step Number Badge */}
                      <span className={`inline-block mt-2 text-xs font-bold px-2 py-1 rounded-md ${isDark ? 'bg-black/30 text-white' : 'bg-gray-100 text-[#8A0202]'}`}>
                        STEP {step.id}
                      </span>
                    </div>
                    
                    {/* Arrow Icon Top Right */}
                    <div className={`${arrowBg} w-10 h-10 rounded-full flex items-center justify-center ${arrowIconColor}`}>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className={`h-[1px] w-full ${isDark ? 'bg-white/20' : 'bg-gray-200'} mb-4`}></div>

                  {/* Description */}
                  <p className={`${subTextColor} font-medium leading-relaxed text-sm`}>
                    {step.desc}
                  </p>
                </div>

                {/* --- BOTTOM ILLUSTRATION SECTION --- */}
                <div className={`
                  ${bottomBoxBg} 
                  w-full h-40 rounded-[2rem] 
                  flex items-center justify-center relative overflow-hidden
                  mt-6 group-hover:scale-[1.02] transition-transform duration-500
                `}>
                  {/* Background Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" 
                       style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                  </div>

                  {/* Main Icon */}
                  <div className={`${iconColor} transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    {step.icon}
                  </div>
                  
                  {/* Decorative Elements inside box */}
                  <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/10"></div>
                </div>

              </div>
            );
          })}
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="flex justify-center">
            <button 
                onClick={handleOrderClick}
                className="group relative px-10 py-5 bg-[#111111] text-white rounded-full font-bold text-lg tracking-wide hover:bg-[#8A0202] transition-all duration-300 shadow-xl flex items-center gap-3"
            >
                <span>ORDER SEKARANG</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
}
