import React, { useState } from 'react';
import { Check, Sparkles, Box, Crown, X, Send } from 'lucide-react';

export default function BrandKitPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  // State untuk form brief
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    category: '',
    description: '',
  });

  const packages = [
    {
      name: 'Basic Brand Kit',
      price: '300K',
      icon: <Box className="w-6 h-6" />, 
      desc: 'Start small. Pondasi visual essential.',
      features: [
        'Color palette',
        'Typography System',
        'Logo Alternate',
        '1x Revisi'
      ]
    },
    {
      name: 'Standard Kit',
      price: '500K',
      isPopular: true,
      icon: <Sparkles className="w-6 h-6 text-[#8A0202]" />,
      desc: 'Pilihan favorit. Visual lebih matang.',
      features: [
        'Semua fitur Basic',
        'Mini Brand Guideline',
        'Icon Style System',
        '3x Revisi'
      ]
    },
    {
      name: 'Premium Identity',
      price: '800K',
      icon: <Crown className="w-6 h-6" />, 
      desc: 'Full power. Identitas visual totalitas.',
      features: [
        'Full Brand Foundation',
        'Social Media Template (3x)',
        'Mockup Brand Realistis',
        'Mini Brand Book',
        'Revisi Mayor 1x + Minor ∞'
      ]
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenModal = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const handleSendToWA = (e) => {
    e.preventDefault();
    // GANTI NOMOR WA LO DISINI (Format: 628xxx)
    const phoneNumber = "6281311506025"; 
    
    const message = `Halo SYMP Studio, saya mau order paket *${selectedPackage}*.%0A%0AData Brief:%0A- Nama: ${formData.name}%0A- Nama Brand: ${formData.brandName}%0A- Jenis Usaha: ${formData.category}%0A- Deskripsi/Request: ${formData.description}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-entrance {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-modal {
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
      `}</style>

      {/* Main Background: White */}
      <section 
        className="py-24 bg-white relative overflow-hidden text-[#111111]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Decor: Soft Red Glow biar gak terlalu polos */}
        <div className="absolute top-[-10%] right-[0%] w-[600px] h-[600px] bg-[#8A0202]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8A0202]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 animate-entrance">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#111111]">
              Visual Identity / <span className="text-[#8A0202]">Brand Kit</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Jaga konsistensi visual di semua media. <br className="hidden md:block"/>
              Bikin brand kamu gampang diingat dan terlihat profesional.
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
                    /* STYLE CARD TENGAH (MERAH) */
                    ? 'bg-[#8A0202] text-white shadow-[0_20px_40px_-10px_rgba(138,2,2,0.3)] transform md:-translate-y-4 z-20 border-2 border-[#8A0202]' 
                    /* STYLE CARD SAMPING (PUTIH) */
                    : 'bg-white text-[#111111] border border-gray-200 hover:border-[#8A0202]/30 hover:shadow-xl z-10'
                  }
                  stagger-${index + 1}
                `}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#8A0202] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pkg.isPopular ? 'bg-white/10' : 'bg-[#8A0202]/10'}`}>
                    {/* Icon Color Logic */}
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
                  <span className={`text-sm ml-1 ${pkg.isPopular ? 'text-white/60' : 'text-gray-400'}`}>/ kit</span>
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

                {/* CTA Button - TRIGGER MODAL */}
                <button 
                  onClick={() => handleOpenModal(pkg.name)}
                  className={`
                    w-full py-3.5 px-6 rounded-full font-bold transition-transform active:scale-95
                    ${pkg.isPopular 
                      /* Button di Card Merah (Jadi Putih) */
                      ? 'bg-white text-[#8A0202] hover:bg-gray-100 shadow-lg' 
                      /* Button di Card Putih (Jadi Outline/Gray) */
                      : 'bg-gray-50 text-[#111111] hover:bg-gray-100 border border-gray-200'
                    }
                  `}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center animate-entrance stagger-3">
            <p className="inline-block py-2 px-6 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-sm">
              ✨ Semua paket sudah termasuk file master siap cetak & digital
            </p>
          </div>

        </div>
      </section>

      {/* ================= MODAL POPUP BRIEF ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-modal text-gray-800 border-4 border-white ring-4 ring-black/10">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#8A0202]">Isi Brief Singkat</h3>
              <p className="text-sm text-gray-500">
                Anda memilih: <span className="font-bold text-gray-800">{selectedPackage}</span>
              </p>
            </div>

            <form onSubmit={handleSendToWA} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nama Pemesan</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all"
                  placeholder="Contoh: Daru"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nama Brand</label>
                <input 
                  type="text" 
                  name="brandName"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all"
                  placeholder="Contoh: Kopi Senja"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Jenis Usaha</label>
                <select 
                  name="category"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all"
                >
                  <option value="">Pilih Kategori...</option>
                  <option value="F&B (Makanan/Minuman)">F&B (Makanan/Minuman)</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Teknologi/Startup">Teknologi/Startup</option>
                  <option value="Jasa Professional">Jasa Professional</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Deskripsi / Request</label>
                <textarea 
                  rows="3"
                  name="description"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all resize-none"
                  placeholder="Warna dominan merah, gaya minimalis, target pasar anak muda..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#8A0202] text-white font-bold py-4 rounded-xl hover:bg-[#6e0202] transition-transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Kirim ke WhatsApp
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
