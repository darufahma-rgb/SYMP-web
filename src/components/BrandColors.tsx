export default function BrandColors() {
  const colors = [
    { name: 'SYMP Red', hex: '#8A0202' },
    { name: 'Deep Red', hex: '#600000' },
    { name: 'Highlight Red', hex: '#A80909' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Soft White', hex: '#F5F5F5' },
    { name: 'Black', hex: '#111111' }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-[#8A0202] mb-16">
          Brand Color Palette
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colors.map((color, index) => (
            <div key={index} className="text-center">
              <div
                className="w-full aspect-square mb-4 border-2 border-[#111111]/10"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="font-semibold text-[#111111] mb-1">{color.name}</p>
              <p className="text-sm text-[#111111]/70">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
