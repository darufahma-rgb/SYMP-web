import React from 'react';
import { Check, Monitor, Rocket, Laptop } from 'lucide-react';

export default function LandingPagePricing() {
  const packages = [
    {
      name: 'Basic Page',
      price: '800K',
      icon: <Monitor className="w-6 h-6" />, 
      desc: 'Hadir online cepat. Personal branding / portofolio.',
      features: [
        '1 Page (Hero–About–Services–CTA)',
        'UI Figma + Code (React/HTML)',
        'Responsive Mobile Friendly',
        'Copywriting Basic',
        '1x Revisi Mayor + 2 Minor'
      ]
    },
    {
      name: 'Pro Business',
      price: '1.3 Juta',
      isPopular: true, // Hero Card (Merah)
      icon: <Rocket className="w-6 h-6 text-[#8A0202]" />,
      desc: 'Siap jualan. Fitur lengkap peningkat konversi.',
      features: [
        'Semua fitur Basic',
        '1 Halaman Tambahan',
        'SEO Basic (Google Friendly)',
        'Animasi Interaktif Ringan',
        'Integrasi WhatsApp Form',
        'Gratis Deploy ke Vercel'
      ]
    },
    {
      name: 'Premium Web',
      price: '2 Juta',
      icon: <Laptop className="w-6 h-6" />, 
      desc: 'Experience kelas atas. Visual memukau.',
      features: [
        'Semua fitur Pro',
        'Micro Interaction Premium',
        'Copywriting Sales/Hypnotic',
        'Mockup Presentasi Website',
        'Prioritas Pengerjaan'
      ]
    }
  ];

  return (
    <>
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-entrance {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
      `}</style>

      <section 
        className="py-24 bg-white relative overflow-hidden text-[#111111]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Decor: Background Tech Glow */}
        <div className="absolute top-[0%] left-[20%] w-[600px] h-[600px] bg-[#8A0202]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-[#8A0202]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 animate-entrance">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#111111]">
              Landing Page <span className="text-[#8A0202]">Website</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Ubah pengunjung jadi pembeli dengan website yang cepat & estetik. <br className="hidden md:block"/>
              Layout bersih, interaktif, dan fokus pada konversi.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`
                  relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 animate-entrance
                  ${pkg.isPopular 
                    /* STYLE CARD TENGAH (MERAH - Pro 1.3jt) */
                    ? 'bg-[#8A0202] text-white shadow-[0_20px_40px_-10px_rgba(138,2,2,0.3)] transform md:-translate-y-4 z-20 border-2 border-[#8A0202]' 
                    /* STYLE CARD SAMPING (PUTIH - Basic & Premium) */
                    : 'bg-white text-[#111111] border border-gray-200 hover:border-[#8A0202]/30 hover:shadow-xl z-10'
                  }
                  stagger-${index + 1}
                `}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#8A0202] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Best Choice
                  </div>
                )}

                {/* Card Header & Icon */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pkg.isPopular ? 'bg-white/10' : 'bg-[#8A0202]/10'}`}>
                    <span className={pkg.isPopular ? 'text-white' : 'text-[#8A0202]'}>
                      {pkg.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className={`text-sm ${pkg.isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                    {pkg.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {/* Kondisi khusus layout harga 'Juta' */}
                  <span className={`text-sm ml-1 ${pkg.isPopular ? 'text-white/60' : 'text-gray-400'}`}>
                    {pkg.price.includes('Juta') ? '/ project' : '/ page'}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-0.5 rounded-full ${pkg.isPopular ? 'bg-white/20' : 'bg-[#8A0202]/10'}`}>
                        <Check className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-[#8A0202]'}`} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium ${pkg.isPopular ? 'text-white/90' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`
                    w-full py-3.5 px-6 rounded-full font-bold transition-transform active:scale-95
                    ${pkg.isPopular 
                      /* Button di Card Merah -> Putih */
                      ? 'bg-white text-[#8A0202] hover:bg-gray-100 shadow-lg' 
                      /* Button di Card Putih -> Abu/Outline */
                      : 'bg-gray-50 text-[#111111] hover:bg-gray-100 border border-gray-200'
                    }
                  `}
                >
                  Build Website
                </button>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center animate-entrance stagger-3">
             <p className="inline-block py-2 px-6 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-sm">
              💻 Tech Stack: React JS + Tailwind CSS (Fast & SEO Friendly)
            </p>
          </div>

        </div>
      </section>
    </>
  );
}