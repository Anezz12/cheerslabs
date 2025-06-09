import Image from 'next/image';

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  isHot?: boolean;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItemProps[];
}

const MenuItem = ({
  name,
  price,
  description,
  imageSrc,
  isHot,
}: MenuItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
      {/* Image Container */}
      <div className="w-full md:w-44 h-44 bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={176}
          height={176}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-gray-800">{name}</h3>
            {isHot && (
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                Hot
              </span>
            )}
          </div>
          <p className="text-[#1e3c63] font-bold">
            Rp {price.toLocaleString()}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Coffee Bean SVG Component
const CoffeeBean = ({ className = '' }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="6" cy="8" rx="6" ry="8" fill="#6B4423" />
      <ellipse cx="6" cy="8" rx="4.5" ry="6.5" fill="#895A3A" />
      <path
        d="M6 2C6.55228 2 7 2.44772 7 3V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V3C5 2.44772 5.44772 2 6 2Z"
        fill="#543018"
      />
      <ellipse cx="6" cy="8" rx="2" ry="4" fill="#543018" opacity="0.3" />
    </svg>
  </div>
);

export default function MenuCategory({ title, items }: MenuCategoryProps) {
  return (
    <div className="w-full mb-24">
      <div className="flex items-center mb-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-start tracking-wide uppercase relative text-[#1e3c63]">
          {title}
          {/* Decorative coffee beans surrounding text */}
          <CoffeeBean className="absolute -top-5 left-1/4 transform -rotate-12" />
          <CoffeeBean className="absolute -bottom-5 left-1/3 transform rotate-45" />
          <CoffeeBean className="absolute -top-4 right-1/4 transform rotate-12" />
          <CoffeeBean className="absolute top-1/2 -right-8 transform -rotate-45 -translate-y-1/2" />
          <CoffeeBean className="absolute top-1/2 -left-8 transform rotate-30 -translate-y-1/2" />
          <CoffeeBean className="absolute -bottom-4 right-1/3 transform -rotate-30" />
        </h2>

        {/* Line with coffee beans */}
        <div className="ml-6 flex-1 flex items-center">
          <CoffeeBean className="mx-1 transform rotate-12" />
          <CoffeeBean className="mx-1 transform -rotate-12" />
          <CoffeeBean className="mx-1 transform rotate-45" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#6B4423] via-gray-200 to-gray-200 ml-2"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-x-16">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
