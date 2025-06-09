import ServiceBanner from '@/components/Menu/Servicebanner';
import MenuCategory from '@/components/Menu/MenuCategory';
import ImageBanner from '@/public/our-menu.png';
import Image from 'next/image';

export default function MenuSection() {
  // Example data for Americano Series

  const coffeeSeries = {
    title: 'COFFEE SERIES',
    items: [
      {
        name: 'Iced Americano',
        price: 7000,
        description:
          'An espresso shot mixed with a glass of water, delivering an ideal balance of character, aroma, and flavor.',
        imageSrc: '/images/drinks/Americano.jpg',
      },
      {
        name: 'Brewed Coffee',
        price: 6000,
        description:
          'An espresso shot mixed with a glass of water, delivering an ideal balance of character, aroma, and flavor.',
        imageSrc: '/images/drinks/drink2.JPG',
        isHot: true,
      },
    ],
  };

  const v60Series = {
    title: 'V60 SERIES',
    items: [
      {
        name: 'Classic',
        price: 15000,
        description:
          'Americano with Manuka honey which is perfect for an energy booster',
        imageSrc: '/images/drinks/drink3.JPG',
      },
      {
        name: 'Japanese',
        price: 15000,
        description:
          'Americano with Manuka honey which is perfect for an energy booster',
        imageSrc: '/images/drinks/drink1.JPG',
        isHot: true,
      },
    ],
  };

  const coffeemilkSeries = {
    title: 'COFFEE MILK SERIES',
    items: [
      {
        name: 'Butterscotch',
        price: 13000,
        description:
          'Peach .',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Caramel',
        price: 13000,
        description:
          'The combination of Strawberry and Manuka flavors with a refreshing Classic Blend Fore',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Vanilla',
        price: 13000,
        description:
          'The combination of Vanilla flavors with a refreshing Classic Blend Fore',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
    ],
  };

  const milkbasedSeries = {
    title: 'COFFEE MILK SERIES',
    items: [
      {
        name: 'Red Velvet',
        price: 13000,
        description:
          'Peach .',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Matcha',
        price: 13000,
        description:
          'The combination of Strawberry and Manuka flavors with a refreshing Classic Blend Fore',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Cookies & Cream',
        price: 13000,
        description:
          'The combination of Vanilla flavors and oreo crumbles with a refreshing Classic Blend Fore',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
    ],
  };

  const mocktailSeries = {
    title: 'MOCKTAIL SERIES',
    items: [
      {
        name: 'Blue Lagoon',
        price: 15000,
        description:
          'The combination of Blueberry and Mint flavors with a sparkling water.',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Purple Hearts',
        price: 15000,
        description:
          'The combination of Blueberry and Strawberry flavors with a sparkling water.',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: "Berry Mine's",
        price: 15000,
        description:
          'The combination of Peach and Grape flavors with a sparkling water.',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
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
          <MenuCategory {...coffeeSeries} />
          <MenuCategory {...v60Series} />
          <MenuCategory {...coffeemilkSeries} />
          <MenuCategory {...milkbasedSeries} />
          <MenuCategory {...mocktailSeries} />
        </div>
      </div>
    </section>
  );
}
