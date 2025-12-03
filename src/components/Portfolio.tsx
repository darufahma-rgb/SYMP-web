import logoRed from '../assets/SYMP LOGO MERAH.png';

export default function Portfolio() {
  const items = [
    'Logo SYMP Studio',
    'Poster premium',
    'Carousel premium',
    'Mockup brand',
    'Contoh landing page'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-[#8A0202] mb-16">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#F5F5F5] p-16 flex items-center justify-center">
            <img
              src={logoRed}
              alt="SYMP Studio Logo"
              className="w-full max-w-md h-auto"
            />
          </div>

          <div>
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-start text-xl text-[#111111]">
                  <span className="text-[#8A0202] mr-4 text-2xl font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-lg text-[#111111] italic">
              Gaya visual: minimalis · banyak white space · warna merah gelap SYMP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
