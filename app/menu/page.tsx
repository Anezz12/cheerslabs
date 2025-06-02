import ServiceBanner from '@/components/Menu/Servicebanner';
import MenuCategory from '@/components/Menu/MenuCategory';
import ImageBanner from '@/public/our-menu.png';
import Image from 'next/image';

export default function MenuSection() {
  // Example data for Americano Series
  const americanoSeries = {
    title: 'AMERICANO SERIES',
    items: [
      {
        name: 'Iced Americano',
        price: 22000,
        description:
          'An espresso shot mixed with a glass of water, delivering an ideal balance of character, aroma, and flavor.',
        imageSrc: '/images/drinks/drink1.JPG',
      },
      {
        name: 'Hot Americano',
        price: 22000,
        description:
          'An espresso shot mixed with a glass of water, delivering an ideal balance of character, aroma, and flavor.',
        imageSrc: '/images/drinks/drink2.JPG',
        isHot: true,
      },
      {
        name: 'Iced Manuka Americano',
        price: 29000,
        description:
          'Americano with Manuka honey which is perfect for an energy booster',
        imageSrc: '/images/drinks/drink3.JPG',
      },
      {
        name: 'Hot Manuka Americano',
        price: 29000,
        description:
          'Americano with Manuka honey which is perfect for an energy booster',
        imageSrc: '/images/drinks/drink1.JPG',
        isHot: true,
      },
    ],
  };

  const specialtyCoffee = {
    title: 'SPECIALTY COFFEE',
    items: [
      {
        name: 'Peach Coffee',
        price: 29000,
        description:
          'Peach coffee is a blend of coffee flavors, three types of peaches and the aroma of elderflower which creates a fresh and harmonious coffee sensation.',
        imageSrc: '/images/drinks/drink1.JPG',
      },
      {
        name: 'Strawberry Manuka',
        price: 31000,
        description:
          'The combination of Strawberry and Manuka flavors with a refreshing Classic Blend Fore',
        imageSrc: '/images/drinks/drink2.JPG',
      },
    ],
  };

  return (
    <section className="container mx-auto py-16 px-4 md:px-6">
      <div className="flex flex-col items-center">
        <Image
          src={ImageBanner}
          alt="Our Menu"
          className="mb-12 pt-24"
          width={620}
          height={180}
          priority
        />

        <div className="w-full max-w-4xl mx-auto">
          <ServiceBanner />
        </div>

        <div className="w-full max-w-6xl mx-auto mt-16">
          <MenuCategory {...americanoSeries} />
          <MenuCategory {...specialtyCoffee} />
        </div>
      </div>
    </section>
  );
}
