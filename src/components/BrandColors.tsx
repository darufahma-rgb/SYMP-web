import React from 'react';
import { Copy } from 'lucide-react';

export default function BrandColors() {
  const colors = [
    { name: 'SYMP Red', hex: '#8A0202', text: 'white' },
    { name: 'Deep Red', hex: '#600000', text: 'white' },
    { name: 'Highlight Red', hex: '#A80909', text: 'white' },
    { name: 'White', hex: '#FFFFFF', text: 'black', border: true }, // Butuh border biar keliatan
    { name: 'Soft White', hex: '#F5F5F5', text: 'black' },
    { name: 'Pure Black', hex: '#111111', text: 'white' }
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    alert(`Copied ${hex}!`); // Bisa ganti toast kalo ada
  };

  return (
    <section className="py-24 bg-[#F3F0EA] min-h-screen flex flex-col justify-center font-sans selection:bg-[#8A0202] selection:text-white">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 relative">
           {/* Decorative 'Editor' Marks on Title */}
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold tracking-[0.3em] text-[#8A0202]/40 uppercase">
              Brand Assets_02
           </div>
           
           <h2 className="text-5xl md:text-7xl font-black text-black mb-4 font-['Poppins'] tracking-tighter">
             COLOR PALETTE
           </h2>
           <p className="text-gray-500 font-medium">
             Klik warna untuk copy Hex Code.
           </p>
        </div>

        {/* --- THE STACK (Layout Kapsul Ref 2) --- */}
        <div className="relative group p-4">
          
          {/* EDITOR SELECTION BOX (Garis Merah Tipis di sekeliling list) */}
          <div className="absolute -inset-2 border border-[#8A0202]/20 rounded-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             {/* Corner Dots */}
             <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#8A0202]"></div>
             <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#8A0202]"></div>
             <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#8A0202]"></div>
             <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#8A0202]"></div>
          </div>

          <div className="flex flex-col gap-4">
            {colors.map((color, index) => (
              <div 
                key={index}
                onClick={() => handleCopy(color.hex)}
                className="group/item relative w-full h-20 md:h-24 rounded-full flex items-center justify-between px-8 md:px-12 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:z-10"
                style={{ 
                  backgroundColor: color.hex,
                  // Kalo warnanya putih, kasih border tipis biar gak ilang
                  border: color.border ? '1px solid #E5E5E5' : 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Visual Glare (Efek Kaca/3D Glossy ala Ref 1) */}
                <div className="absolute top-0 inset-x-10 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none opacity-50"></div>

                {/* Left: Color Name */}
                <span 
                  className={`text-xl md:text-2xl font-black tracking-tight font-['Poppins'] ${color.text === 'white' ? 'text-white' : 'text-black'}`}
                >
                  {color.name}
                </span>

                {/* Right: Hex Code + Icon */}
                <div className={`flex items-center gap-4 font-mono text-sm md:text-lg font-bold opacity-60 group-hover/item:opacity-100 transition-opacity ${color.text === 'white' ? 'text-white' : 'text-black'}`}>
                  <span>{color.hex}</span>
                  <Copy size={20} />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
