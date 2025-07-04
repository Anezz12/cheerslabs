/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative py-20 md:py-32 overflow-hidden">
        <motion.section
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#004aad]/10 backdrop-blur-sm rounded-full border border-[#004aad]/20 mb-6"
            variants={fadeInUp}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#004aad]"
            >
              <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-[#004aad]">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1e3c63] mb-6"
            variants={fadeInUp}
          >
            Find Your <span className="text-[#004aad]">Cheersmate!</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Cheers Labs is more than just a coffee spot—it's a flavor lab and a
            warm space to enjoy a cup of coffee, share stories, and spark
            creative taste experiences with our customers.
          </motion.p>
        </motion.section>

        {/* Content Sections */}
        <div className="space-y-24">
          {/* How It All Started */}
          <motion.section
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3c63]/5 rounded-full">
                <div className="w-2 h-2 bg-[#004aad] rounded-full"></div>
                <span className="text-sm font-medium text-[#1e3c63]">
                  Chapter 1
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3c63]">
                How It All Started
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Founded by students from UNY and AMIKOM, Cheers Labs was born
                out of the Merdeka Entrepreneurship Program (WMK) in late 2024.
                What started as a campus project has grown into an independent
                business run by five young individuals united by a shared
                passion: to create a place that not only serves drinks, but also
                builds atmosphere.
              </p>
            </motion.div>

            <motion.div className="relative group" variants={fadeInUp}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#004aad]/20 to-[#1e3c63]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/logo/logo cheers labs tanpa background.png"
                  alt="Tim Cheers Labs"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Where to Find Us */}
          <motion.section
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="relative group order-2 lg:order-1"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3c63]/20 to-[#004aad]/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/logo/logo cheers labs tanpa background.png"
                  alt="Lokasi Cheers Labs"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 order-1 lg:order-2"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3c63]/5 rounded-full">
                <div className="w-2 h-2 bg-[#004aad] rounded-full"></div>
                <span className="text-sm font-medium text-[#1e3c63]">
                  Chapter 2
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3c63]">
                Where to Find Us & What We Offer
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Located at Jl. Pura, Banguntapan, Bantul (inside the PHDI
                building, north of Pura Jagatnatha), we are here to serve those
                looking to enjoy coffee and milk-based beverages in a variety of
                flavors—available for both dine-in and take away. Cheers Labs is
                also available on Shopee Food, so you can enjoy our drinks from
                wherever you are.
              </p>
            </motion.div>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section
            className="relative py-20 bg-gradient-to-br from-[#1e3c63] to-[#004aad] rounded-3xl overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium text-white">
                  Our Philosophy
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Where Stories Begin with a{' '}
                <span className="text-amber-300">Sip</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  More than just serving drinks, we aim to be a place of pause,
                  a place that feels like home—a space where anyone can share
                  stories, laugh, explore flavors, and feel truly welcome.
                </p>

                <p>
                  We believe a single cup of drink can spark conversations,
                  connect people, and create lasting memories. With a spirit of
                  community, exploration, and sincerity, we continue to grow
                  together with you.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
