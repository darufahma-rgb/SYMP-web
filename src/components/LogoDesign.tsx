import React, { useState } from 'react';
import { Check, Star, Zap, X, Send } from 'lucide-react';

export default function AnimatedPricingLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk form brief
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendToWA = (e) => {
    e.preventDefault();
    // GANTI NOMOR WA LO DISINI (Format: 628xxx)
    const phoneNumber = "628123456789"; 
    
    const message = `Halo SYMP Studio, saya mau order paket logo 500K.%0A%0AData Brief:%0A- Nama: ${formData.name}%0A- Nama Brand: ${formData.brandName}%0A- Jenis Usaha: ${formData.category}%0A- Deskripsi/Request: ${formData.description}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Inject Custom CSS for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-entrance {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-modal {
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
      `}</style>

      {/* Wrapper Utama */}
      <div 
        className="min-h-[100dvh] w-full bg-[#8A0202] text-white selection:bg-white selection:text-[#8A0202] relative flex flex-col justify-center items-center py-12 px-4 overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        
        {/* Background Gradient & Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mb-12 animate-entrance">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg mb-3">
              Premium Logo
            </h2>
            <p className="text-sm md:text-base text-white/80 font-light max-w-2xl mx-auto">
              Satu harga, kualitas dunia. Solusi branding tanpa drama.
            </p>
          </div>

          {/* MAIN CONTAINER (Badge + Card) */}
          <div className="relative w-full flex flex-col items-center group">
            
            {/* FLOATING BADGE */}
            <div className="z-20 mb-6 animate-entrance animate-float">
              <div className="relative overflow-hidden bg-white text-[#8A0202] text-sm md:text-base font-extrabold px-10 py-3 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] tracking-widest uppercase border-[4px] border-[#8A0202] ring-2 ring-white/50">
                <div className="absolute inset-0 bg-shimmer pointer-events-none"></div>
                All-In Package
              </div>
            </div>

            {/* HORIZONTAL HERO CARD */}
            <div className="w-full bg-black/20 backdrop-blur-xl border-2 border-white/80 rounded-[2.5rem] flex flex-col md:flex-row relative shadow-2xl overflow-hidden animate-entrance stagger-1 hover:border-white transition-colors duration-500">
              
              {/* LEFT SIDE: Pricing & CTA */}
              <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/20 bg-black/10 relative">
                
                <div className="mt-2 scale-100 hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl md:text-7xl font-bold text-white drop-shadow-md tracking-tight">500K</span>
                </div>
                <span className="text-white/60 text-sm font-medium mb-8 uppercase tracking-widest">Fixed Price</span>
                
                <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-[200px]">
                  Investasi sekali bayar untuk identitas visual jangka panjang.
                </p>

                {/* BUTTON TRIGGER MODAL */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 px-6 rounded-full bg-white hover:bg-gray-100 text-[#8A0202] font-extrabold text-base md:text-lg transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:-translate-y-1 active:scale-95 shadow-lg"
                >
                  Order Sekarang
                </button>
                
                <p className="text-white/30 text-[10px] mt-4 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Secure payment & Fast delivery
                </p>
              </div>

              {/* RIGHT SIDE: Features List */}
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-white/50 inline-block"></span>
                  What You Get
                </h3>
                
                <ul className="grid grid-cols-1 gap-y-4 md:gap-y-5 text-sm md:text-base text-white text-left">
                  <li className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white p-1 rounded-full shrink-0 mt-0.5 shadow-lg group-hover/item:bg-[#8A0202] group-hover/item:text-white transition-colors"><Check className="w-3 h-3 text-[#8A0202] stroke-[4] group-hover/item:text-white" /></div>
                    <div>
                      <span className="font-bold block text-lg group-hover/item:text-yellow-300 transition-colors">2 Opsi Desain Eksklusif</span>
                      <span className="text-white/60 text-xs md:text-sm">Pilih 1 terbaik untuk dikembangkan</span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 text-white" /></div>
                    <span className="text-white/90 self-center">Brand Guideline Lengkap (PDF)</span>
                  </li>
                  
                  <li className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 text-white" /></div>
                    <span className="text-white/90 self-center">3 View Mockup Profesional</span>
                  </li>
                  
                  <li className="flex items-start gap-4 p-3 rounded-xl bg-white/10 border border-white/10 -ml-3 hover:bg-white/20 transition-colors cursor-default transform hover:scale-[1.02] duration-300">
                    <div className="bg-yellow-400 p-1 rounded-full shrink-0 mt-0.5 animate-pulse"><Star className="w-3 h-3 text-[#8A0202] fill-[#8A0202]" /></div>
                    <div className="self-center">
                      <span className="font-bold text-yellow-300 block">Bonus: Poster Grand Opening</span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 text-white" /></div>
                    <span className="text-white/90 self-center">Master File (AI, EPS, PNG, PDF)</span>
                  </li>
                  
                  <li className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Zap className="w-3 h-3 text-white" /></div>
                    <span className="text-white/90 self-center">Pengerjaan Cepat (2-3 Hari)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <p className="text-center text-white/30 text-[10px] mt-8 font-light animate-entrance stagger-3">
            © 2025 SYMP Studio. Quality Guaranteed.
          </p>

        </div>

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
                <p className="text-sm text-gray-500">Bantu kami memahami visi brand Anda.</p>
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
      </div>
    </>
  );
}
