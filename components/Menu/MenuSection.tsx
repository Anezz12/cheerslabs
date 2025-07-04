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
          'A traditional Indonesian-style coffee brewed by steeping ground coffee directly in hot water. Rich, robust, and unfiltered.',
        imageSrc: '/images/drinks/Kopi-Tubruk.png',
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
          'A clean and balanced pour-over coffee using hand-selected beans, brewed to highlight natural flavors and aroma.',
        imageSrc: '/images/drinks/classic-v60.png',
      },
      {
        name: 'Japanese',
        price: 15000,
        description:
          'A Japanese-style iced pour-over, brewed hot and immediately cooled over ice for a crisp, bright finish.',
        imageSrc: '/images/drinks/japanese-v60.png',
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
          'An iced coffee milk drink with rich, buttery sweetness of butterscotch - indulgent and comforting.',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Caramel',
        price: 13000,
        description:
          'Bold iced coffee meets creamy caramel in this sweet, balanced drink with a velvety finish.',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
      {
        name: 'Vanilla',
        price: 13000,
        description:
          'A refreshing blend of coffee, vanilla essence, and creamy milk — mellow, aromatic, and always smooth.',
        imageSrc: '/images/drinks/Coffee-Milk.jpg',
      },
    ],
  };

  const milkbasedSeries = {
    title: 'MILK BASED SERIES',
    items: [
      {
        name: 'Red Velvet',
        price: 13000,
        description:
          'A smooth iced red velvet drink with hints of cocoa and vanilla — sweet, creamy, and eye-catching.',
        imageSrc: '/images/drinks/Red-Velvet.jpg',
      },
      {
        name: 'Matcha',
        price: 13000,
        description:
          'Premium matcha green tea blended with our creamy milk and served chilled — earthy, smooth, and naturally uplifting.',
        imageSrc: '/images/drinks/Matcha.jpg',
      },
      {
        name: 'Cookies & Cream',
        price: 13000,
        description:
          'A refined twist on a childhood favorite — cookies blended into chilled, creamy milk.',
        imageSrc: '/images/drinks/C&C.jpg',
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
          'A sparkling fusion of blueberry and mint — cool, fruity, and perfectly refreshing.',
        imageSrc: '/images/drinks/Blue-Lagoon.jpg',
      },
      {
        name: 'Purple Hearts',
        price: 15000,
        description:
          'A delightful mix of blueberry and strawberry with a fizzy finish — sweet, tangy, and uplifting.',
        imageSrc: '/images/drinks/Purple-Hearts.jpg',
      },
      {
        name: "Berry Mine's",
        price: 15000,
        description:
          'A cheerful medley of grape and peach with fizzy notes — fruity, fun, and made to brighten your day.',
        imageSrc: "/images/drinks/Berry-Mine's.jpg",
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
