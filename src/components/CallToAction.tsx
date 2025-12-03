export default function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-[#8A0202]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's make something professional together.
        </h2>

        <p className="text-xl text-white/90 mb-16">
          Hubungi SYMP Studio dan mulai bangun identitas visual Anda.
        </p>

        <div className="space-y-6 text-lg text-white">
          <div>
            <p className="font-semibold mb-2">WhatsApp</p>
            <a href="https://wa.me/6281311506025" className="hover:text-white/80 transition-colors">
              +62 813-1150-6025
            </a>
          </div>

          <div>
            <p className="font-semibold mb-2">Email</p>
            <a href="mailto:sympp.uss@gmail.com" className="hover:text-white/80 transition-colors">
              sympp.uss@gmail.com
            </a>
          </div>

          <div>
            <p className="font-semibold mb-2">Lokasi</p>
            <p>Districh 7, Cairo – Egypt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
