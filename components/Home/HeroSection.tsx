'use client';
import Link from 'next/link';
import Image from 'next/image';
import ImageSlideShow from '@/components/Home/ImageSlideShow';
import { motion } from 'framer-motion';

export default function HeroSection() {
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

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-48 pb-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[30px] items-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Text Content and Desktop Buttons */}
          <motion.div
            className="flex flex-col gap-5 md:gap-6 lg:gap-[30px] w-full lg:w-1/2 py-8 md:py-12 lg:py-[92px]"
            variants={fadeInLeft}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-[1.2] lg:leading-[70px] text-center lg:text-left"
              variants={fadeInUp}
            >
              <mark className="bg-[#81a5d4] -mx-1 inline-flex items-center justify-center h-8 md:h-9 lg:h-10 px-2 rounded-sm">
                Brewing
              </mark>
              Happiness, One
              <mark className="bg-[#81a5d4] -mx-1 inline-flex items-center justify-center h-8 md:h-9 lg:h-10 px-2 rounded-sm">
                Cup
              </mark>
              at a Time
            </motion.h1>

            <motion.p
              className="text-base md:text-lg leading-7 md:leading-8 font-medium text-center lg:text-left max-w-lg mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              Discover the rich flavors and aromas of our specialty coffee,
              crafted with care and passion. Join us on a journey of taste and
              experience the art of coffee brewing like never before.
            </motion.p>

            {/* Desktop Buttons - Only visible on desktop */}
            <motion.div
              className="hidden lg:flex flex-row gap-4 justify-start"
              variants={fadeInUp}
            >
              <Link
                href="#"
                className="px-[30px] py-[20px] rounded-[100px] bg-[#1e3c63] text-white text-[16px] font-bold leading-[19px] transition-all duration-300 hover:bg-[#1e3c63] text-center"
              >
                Order Online
              </Link>
              <Link
                href="/menu"
                className="px-[30px] py-[20px] rounded-[100px] border border-[#1e3c63] text-[#1e3c63] text-[16px] font-bold leading-[19px] transition-all duration-300 hover:bg-[#1e3c63] hover:text-white text-center"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Slideshow Container */}
          <motion.div className="w-full lg:hidden my-6" variants={fadeInUp}>
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-[20px] overflow-hidden">
              <ImageSlideShow />
            </div>
          </motion.div>

          {/* Mobile Buttons - Only visible on mobile and tablet */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:hidden mb-4"
            variants={fadeInUp}
          >
            <Link
              href="#"
              className="px-[30px] py-[20px] rounded-[100px] bg-[#81a5d4] text-white text-[16px] font-bold leading-[19px] transition-all duration-300 hover:bg-[#6b8cb8] text-center"
            >
              Order Online
            </Link>
            <Link
              href="/menu"
              className="px-[30px] py-[20px] rounded-[100px] border border-[#1e3c63] text-[#1e3c63] text-[16px] font-bold leading-[19px] transition-all duration-300 hover:bg-[#1e3c63] hover:text-white text-center"
            >
              View Menu
            </Link>
          </motion.div>

          {/* Image Content - Only visible on desktop and larger screens */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[507px] hidden lg:block"
            variants={fadeInRight}
          >
            {/* Main Image */}
            <motion.div
              className="relative mx-auto lg:ml-[52px] lg:mr-[51px] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[447px] h-full rounded-[26px] overflow-hidden"
              variants={fadeInUp}
            >
              <ImageSlideShow />
            </motion.div>

            {/* Review Image */}
            <motion.div
              className="hidden md:block absolute bottom-[5%] left-[5%] lg:bottom-[0px] lg:left-2 w-[200px] lg:w-[316px] h-[120px] lg:h-[180px]"
              variants={fadeInLeft}
            >
              <div className="relative w-full h-full drop-shadow-custom">
                <Image
                  src="/images/thumbnails/bintang.jpg"
                  alt="Customer Reviews"
                  height={180}
                  width={200}
                  className="object-contain rounded-[26px] overflow-hidden"
                />
              </div>
            </motion.div>

            {/* Badge Image */}
            <motion.div
              className="hidden md:block absolute top-[20%] right-[10%] lg:top-[6px] lg:right-0 w-[100px] lg:w-[136px] h-[100px] lg:h-[136px]"
              variants={fadeInRight}
            >
              <div className="relative w-full h-full drop-shadow-custom">
                <Image
                  src="/images/thumbnails/rekomendasi.png"
                  alt="Award-Winning Coffee"
                  height={180}
                  width={200}
                  className="object-contain rounded-[26px] overflow-hidden"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
