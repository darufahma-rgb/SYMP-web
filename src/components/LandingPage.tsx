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
      isPopular: true, // Hero Card (Akan jadi Putih)
      icon: <Rocket className="w-6 h-6" />, // Icon color handle in CSS
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

      {/* Main Background: Red */}
      <section 
        className="py-24 bg-[#8A0202] relative overflow-hidden text-white"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Decor: Dark Gradient + White Glows untuk kedalaman */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 animate-entrance">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
              Landing Page Website
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
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
                    /* STYLE CARD TENGAH (PUTIH SOLID - Highlight di atas merah) */
                    ? 'bg-white text-[#8A0202] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transform md:-translate-y-4 z-20 border-2 border-white' 
                    /* STYLE CARD SAMPING (GLASSMORPHISM) */
                    : 'bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 z-10'
                  }
                  stagger-${index + 1}
                `}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8A0202] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg border border-[#8A0202]">
                    Best Choice
                  </div>
                )}

                {/* Card Header & Icon */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pkg.isPopular ? 'bg-[#8A0202]/10' : 'bg-white/10'}`}>
                    <span className={pkg.isPopular ? 'text-[#8A0202]' : 'text-white'}>
                      {pkg.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className={`text-sm ${pkg.isPopular ? 'text-gray-600' : 'text-white/60'}`}>
                    {pkg.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold drop-shadow-sm">{pkg.price}</span>
                  {/* Kondisi khusus layout harga 'Juta' */}
                  <span className={`text-sm ml-1 ${pkg.isPopular ? 'text-gray-500' : 'text-white/60'}`}>
                    {pkg.price.includes('Juta') ? '/ project' : '/ page'}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-0.5 rounded-full ${pkg.isPopular ? 'bg-[#8A0202]/10' : 'bg-white/20'}`}>
                        <Check className={`w-3 h-3 ${pkg.isPopular ? 'text-[#8A0202]' : 'text-white'}`} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium ${pkg.isPopular ? 'text-gray-700' : 'text-white/90'}`}>
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
                      /* Button di Card Putih -> jadi Merah Solid */
                      ? 'bg-[#8A0202] text-white hover:bg-[#6e0202] shadow-lg' 
                      /* Button di Card Glass -> jadi Outline White */
                      : 'bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#8A0202]'
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
             <p className="inline-block py-2 px-6 rounded-full bg-black/20 backdrop-blur border border-white/10 text-white/70 text-sm">
              💻 Tech Stack: React JS + Tailwind CSS (Fast & SEO Friendly)
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
