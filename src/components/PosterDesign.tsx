import React, { useState } from 'react';
import { Check, Image, Layers, Zap, X, Send } from 'lucide-react';

export default function PosterDesign() {
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
      name: 'Basic',
      price: '100K',
      icon: <Image className="w-6 h-6" />, 
      desc: 'Simpel & cepat. Cocok buat info event dadakan.',
      features: [
        'Minimalis Poster',
        '1 Konsep Desain',
        'File PNG/JPG High-Res',
        '1x Revisi'
      ]
    },
    {
      name: 'Standard',
      price: '200K',
      isPopular: true, // Ini yang bakal jadi Merah
      icon: <Layers className="w-6 h-6 text-[#8A0202]" />,
      desc: 'Tampilan profesional untuk promosi bisnis.',
      features: [
        'Poster Profesional',
        '1 Konsep Desain',
        'File HD Ready Print',
        '3x Revisi'
      ]
    },
    {
      name: 'Premium',
      price: '300K',
      icon: <Zap className="w-6 h-6" />, 
      desc: 'Desain kompleks, artistik & full source.',
      features: [
        'All Style (Manipulasi/Ilustrasi)',
        '2 Konsep Desain',
        'File Master (PSD/AI)',
        '5x Revisi',
        'Prioritas (1-2 Hari)'
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
    // GANTI NOMOR WA LO DISINI
    const phoneNumber = "628123456789"; 
    
    const message = `Halo SYMP Studio, saya mau order Poster paket *${selectedPackage}*.%0A%0AData Brief:%0A- Nama: ${formData.name}%0A- Nama Brand: ${formData.brandName}%0A- Jenis Usaha: ${formData.category}%0A- Deskripsi/Request: ${formData.description}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Animation Styles */}
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

      <section 
        className="py-24 bg-white relative overflow-hidden text-[#111111]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Decor: Background Blob Tipis */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#8A0202]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8A0202]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 animate-entrance">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#111111]">
              Poster <span className="text-[#8A0202]">Design</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Visual yang nendang buat event, promosi, atau kampanye lo. <br className="hidden md:block"/>
              Desain *standout*, pesan tersampaikan.
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
                    /* STYLE CARD TENGAH (MERAH - Highlight) */
                    ? 'bg-[#8A0202] text-white shadow-[0_20px_40px_-10px_rgba(138,2,2,0.3)] transform md:-translate-y-4 z-20 border-2 border-[#8A0202]' 
                    /* STYLE CARD SAMPING (PUTIH - Standard) */
                    : 'bg-white text-[#111111] border border-gray-200 hover:border-[#8A0202]/30 hover:shadow-xl z-10'
                  }
                  stagger-${index + 1}
                `}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#8A0202] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Best Value
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
                  <span className={`text-sm ml-1 ${pkg.isPopular ? 'text-white/60' : 'text-gray-400'}`}>/ desain</span>
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
                      /* Button di Card Merah -> Putih */
                      ? 'bg-white text-[#8A0202] hover:bg-gray-100 shadow-lg' 
                      /* Button di Card Putih -> Abu/Outline */
                      : 'bg-gray-50 text-[#111111] hover:bg-gray-100 border border-gray-200'
                    }
                  `}
                >
                  Order Poster
                </button>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center animate-entrance stagger-3">
             <p className="inline-block py-2 px-6 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-sm">
              ℹ️ Harga bisa menyesuaikan tingkat kesulitan brief
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
              <h3 className="text-2xl font-bold text-[#8A0202]">Isi Brief Poster</h3>
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
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nama Brand / Event</label>
                <input 
                  type="text" 
                  name="brandName"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all"
                  placeholder="Contoh: Seminar AI Nasional"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Jenis Usaha / Kegiatan</label>
                <select 
                  name="category"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all"
                >
                  <option value="">Pilih Kategori...</option>
                  <option value="Event/Seminar">Event/Seminar</option>
                  <option value="Promosi Produk">Promosi Produk</option>
                  <option value="Diskon/Sale">Diskon/Sale</option>
                  <option value="Grand Opening">Grand Opening</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Detail Info di Poster</label>
                <textarea 
                  rows="3"
                  name="description"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8A0202] focus:ring-1 focus:ring-[#8A0202] transition-all resize-none"
                  placeholder="Isi konten poster (Waktu, Tempat, Headline, dll)..."
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
