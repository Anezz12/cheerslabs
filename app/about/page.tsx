// app/about/page.tsx
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto relative py-24 md:py-32 overflow-hidden text-[#2C2C2C]">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#004aad]">"Find Your Cheersmate!"</h1>
        <p className="py-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Cheers Labs bukan sekadar tempat ngopi, ini adalah laboratorium rasa dan ruang hangat untuk menikmati secangkir kopi, berbagi cerita, dan menciptakan kreativitas rasa bersama pelanggan.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">Awal Mula Kami</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Didirikan oleh mahasiswa UNY dan AMIKOM, Cheers Labs lahir dari semangat program Wirausaha Merdeka (WMK) pada akhir 2024. Apa yang bermula sebagai proyek kampus kini tumbuh menjadi sebuah usaha mandiri yang dikelola oleh lima anak muda dengan satu semangat "menciptakan tempat yang tidak hanya menyajikan minuman, tapi juga menghadirkan suasana."
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/logo/logo cheers labs tanpa background.png"
            alt="Tim Cheers Labs"
            width={600}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/logo/logo cheers labs tanpa background.png"
            alt="Lokasi Cheers Labs"
            width={600}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">Tempat dan Pelayanan</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Berlokasi di Jl. Pura, Banguntapan, Bantul (Gedung PHDI, utara Pura Jagatnatha), kami hadir untuk melayani Anda yang ingin menikmati kopi dan susu dalam berbagai varian, baik secara dine-in maupun take away. Cheers Labs juga tersedia di Shopee Food, agar siapa pun bisa menikmati rasa kami dari mana saja.
          </p>
        </div>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-6">Galeri Suasana & Minuman</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Image Container */}  
          {[
            { src: "/images/drinks/Coffee-Milk.jpg", alt: "Butterscotch" },
            { src: "/images/drinks/Red-Velvet.jpg", alt: "Red Velvet" },
            { src: "/images/drinks/Matcha.jpg", alt: "Matcha" },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-md object-cover hover:scale-102 transition-transform duration-300">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
