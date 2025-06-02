import ServiceBanner from '@/components/Menu/Servicebanner';
import ImageBanner from '@/public/our-menu.png';
import Image from 'next/image';
export default function MenuSection() {
  return (
    <section className="flex flex-col items-center py-24 px-5">
      {/* <h1
        className="
           text-8xl md:text-8xl text-transparent 
          tracking-[5px] mb-8
          [-webkit-text-stroke:2px_#00F] 
        "
      >
        OUR MENU
      </h1> */}
      <Image
        src={ImageBanner}
        alt="Our Menu"
        className="mb-20 mt-22"
        width={720}
        height={180}
      />
      <ServiceBanner />
    </section>
  );
}
