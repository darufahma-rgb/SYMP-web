import React, { useState, useEffect } from 'react';
import { Check, Star, Zap, X, ArrowRight, PenTool, Briefcase, Globe, Instagram, MessageCircle } from 'lucide-react';

// --- DATA DUMMY UNTUK MODAL (Biar Jalan) ---
const PRICING_DATA = {
  logo: [{ name: 'Premium Logo All-in', price: '500K' }],
  hosting: []
};

// --- MODAL COMPONENT (Compact Version) ---
const ProjectModal = ({ isOpen, onClose, initialData }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({ name: '', brandName: '', industry: '', detail: '' });

  useEffect(() => {
    if (isOpen) {
      if (initialData?.category) {
        setSelectedCategory(initialData.category);
        setStep(2);
      } else {
        setStep(1);
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo, saya mau order paket ${selectedCategory.toUpperCase()} seharga ${initialData?.package?.price || 'Best Price'}.%0A%0ANama: ${formData.name}%0ABrand: ${formData.brandName}%0ADetail: ${formData.detail}`;
    window.open(`https://wa.me/6281311506025?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 text-left font-sans text-gray-900">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-entrance">
        <div className="bg-[#111] text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Project Brief</h3>
          <button onClick={onClose}><X size={20}/></button>
        </div>
        <div className="p-6 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-4">
             <div className="bg-red-50 border border-red-100 p-3 rounded-lg text-sm text-[#8A0202] font-semibold">
                Paket Terpilih: {initialData?.package?.name || selectedCategory}
             </div>
             <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Nama</label>
                <input required onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 rounded border" placeholder="Nama Kamu" />
             </div>
             <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Brand</label>
                <input required onChange={(e) => setFormData({...formData, brandName: e.target.value})} className="w-full p-2 rounded border" placeholder="Nama Brand" />
             </div>
             <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Detail</label>
                <textarea onChange={(e) => setFormData({...formData, detail: e.target.value})} className="w-full p-2 rounded border" rows="2" placeholder="Keterangan singkat..."></textarea>
             </div>
             <button type="submit" className="w-full py-3 bg-[#8A0202] text-white rounded-lg font-bold hover:bg-[#600000] transition-colors">
                Lanjut ke WhatsApp
             </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function AnimatedPricingLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  // Props untuk inisialisasi modal ke Logo
  const modalData = {
    category: 'logo',
    package: { name: 'Premium Logo All-in', price: '500K' }
  };

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .animate-entrance { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .bg-shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); background-size: 200% 100%; animation: shimmer 3s infinite; }
        .stagger-1 { animation-delay: 0.1s; }
      `}</style>

      {/* Wrapper Utama (Red Theme) */}
      <div 
        className="min-h-screen w-full bg-[#8A0202] text-white relative flex flex-col justify-center items-center py-8 px-4 overflow-hidden font-sans"
      >
        {/* Background FX */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#8A0202] to-black/50 pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] pointer-events-none animate-pulse" />
        
        {/* Container - Compact Max Width */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          
          {/* Header Compact */}
          <div className="text-center mb-8 animate-entrance">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg mb-2">
              Premium Logo
            </h2>
            <p className="text-xs md:text-sm text-white/80 font-light max-w-lg mx-auto">
              Satu harga, kualitas dunia. Solusi branding tanpa drama.
            </p>
          </div>

          {/* MAIN CARD SECTION */}
          <div className="relative w-full flex flex-col items-center">
            
            {/* FLOATING BADGE (Lebih Kecil & Rapat) */}
            <div className="z-30 mb-[-1.5rem] animate-entrance animate-float">
              <div className="relative overflow-hidden bg-white text-[#8A0202] text-xs font-extrabold px-6 py-2 rounded-full shadow-xl tracking-widest uppercase border-[3px] border-[#8A0202] ring-2 ring-white/50">
                <div className="absolute inset-0 bg-shimmer pointer-events-none"></div>
                All-In Package
              </div>
            </div>

            {/* CARD (Compact Layout) */}
            <div className="w-full bg-black/20 backdrop-blur-xl border border-white/60 rounded-3xl flex flex-col md:flex-row relative shadow-2xl overflow-hidden animate-entrance stagger-1 pt-8 md:pt-0">
              
              {/* LEFT: Pricing (Compact) */}
              <div className="w-full md:w-5/12 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-black/10">
                <div className="scale-100 hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">500K</span>
                </div>
                <span className="text-white/60 text-[10px] font-medium mb-4 uppercase tracking-widest">Fixed Price</span>
                
                <p className="text-white/90 text-xs leading-relaxed mb-6 max-w-[180px]">
                  Investasi sekali bayar untuk identitas visual jangka panjang.
                </p>

                <button 
                  onClick={handleOrder}
                  className="w-full py-3 px-6 rounded-xl bg-white hover:bg-gray-100 text-[#8A0202] font-extrabold text-sm transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-95 shadow-lg"
                >
                  Order Sekarang
                </button>
                
                <p className="text-white/30 text-[9px] mt-3 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Secure payment & Fast delivery
                </p>
              </div>

              {/* RIGHT: Features (Compact Grid) */}
              <div className="w-full md:w-7/12 p-6 md:pl-8 flex flex-col justify-center bg-white/5">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-white/50 inline-block"></span>
                  What You Get
                </h3>
                
                <ul className="grid grid-cols-1 gap-2 text-xs text-white text-left">
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-0.5 rounded-full mt-0.5"><Check className="w-2.5 h-2.5 text-[#8A0202] stroke-[4]" /></div>
                    <span className="font-bold text-yellow-300">2 Opsi Desain Eksklusif</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-0.5 rounded-full mt-0.5"><Check className="w-2.5 h-2.5 text-white" /></div>
                    <span className="text-white/90">Brand Guideline Lengkap (PDF)</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-0.5 rounded-full mt-0.5"><Check className="w-2.5 h-2.5 text-white" /></div>
                    <span className="text-white/90">3 View Mockup Profesional</span>
                  </li>
                  
                  {/* Bonus Item Compact */}
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-white/10 border border-white/10 my-1">
                    <div className="bg-yellow-400 p-0.5 rounded-full"><Star className="w-2.5 h-2.5 text-[#8A0202] fill-[#8A0202]" /></div>
                    <span className="font-bold text-yellow-300">Bonus: Poster Grand Opening</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-0.5 rounded-full mt-0.5"><Check className="w-2.5 h-2.5 text-white" /></div>
                    <span className="text-white/90">Master File (AI, EPS, PNG, PDF)</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-0.5 rounded-full mt-0.5"><Zap className="w-2.5 h-2.5 text-white" /></div>
                    <span className="text-white/90">Pengerjaan Cepat (2-3 Hari)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <p className="text-center text-white/30 text-[10px] mt-6 font-light animate-entrance stagger-2">
            © 2025 SYMP Studio. Quality Guaranteed.
          </p>

        </div>
      </div>

      {/* Render Modal (Otomatis ke Logo) */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={modalData}
      />
    </>
  );
}
