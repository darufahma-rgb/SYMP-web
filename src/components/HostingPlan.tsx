export default function HostingPlan() {
  const plans = [
    {
      name: 'Starter',
      price: '300K/Tahun',
      features: [
        'Hosting + support ringan'
      ]
    },
    {
      name: 'Business',
      price: '500K/Tahun',
      features: [
        'Hosting + domain + maintenance',
        '2x update konten'
      ]
    },
    {
      name: 'Pro',
      price: '1 Juta/Tahun',
      features: [
        'Hosting + domain + maintenance full',
        '4x update konten'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-[#8A0202] mb-16">
          Hosting Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#F5F5F5] p-10">
              <h3 className="text-2xl font-bold text-[#111111] mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-[#8A0202] mb-8">{plan.price}</div>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-[#111111]">
                    <span className="text-[#8A0202] mr-3 text-xl">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
