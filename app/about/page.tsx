// app/about/page.tsx
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section>
      <div className="max-w-6xl mx-auto relative py-24 md:py-32 overflow-hidden text-[#2C2C2C]">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#004aad]">
            {'Find Your Cheersmate!'}
          </h1>
          <p className="py-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Cheers Labs is more than just a coffee spot—it's a flavor lab and a
            warm space to enjoy a cup of coffee, share stories, and spark
            creative taste experiences with our customers.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">
              How It All Started
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Founded by students from UNY and AMIKOM, Cheers Labs was born out
              of the Merdeka Entrepreneurship Program (WMK) in late 2024. What
              started as a campus project has grown into an independent business
              run by five young individuals united by a shared passion: to
              create a place that not only serves drinks, but also builds
              atmosphere.
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
            <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">
              Where to Find Us & What We Offer
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Located at Jl. Pura, Banguntapan, Bantul (inside the PHDI
              building, north of Pura Jagatnatha), we are here to serve those
              looking to enjoy coffee and milk-based beverages in a variety of
              flavors—available for both dine-in and take away. Cheers Labs is
              also available on Shopee Food, so you can enjoy our drinks from
              wherever you are.
            </p>
          </div>
        </section>

        <section className="max-w-3xl text-center mx-auto mb-20 px-4 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">
              Where Stories Begin with a Sip
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              More than just serving drinks, we aim to be a place of pause, a
              place that feels like home—a space where anyone can share stories,
              laugh, explore flavors, and feel truly welcome. We believe a
              single cup of drink can spark conversations, connect people, and
              create lasting memories.
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed text-justify mt-4">
              With a spirit of community, exploration, and sincerity, we
              continue to grow together with you.
            </p>
          </div>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-6">
            Cheers in Frames
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Image Container */}
            {[
              { src: '/images/drinks/Coffee-Milk.jpg', alt: 'Butterscotch' },
              { src: '/images/drinks/Red-Velvet.jpg', alt: 'Red Velvet' },
              { src: '/images/drinks/Matcha.jpg', alt: 'Matcha' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-md object-cover hover:scale-102 transition-transform duration-300"
              >
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
      </div>
    </section>
  );
}
