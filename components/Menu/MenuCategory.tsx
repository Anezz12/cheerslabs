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

export default function MenuCategory({ title, items }: MenuCategoryProps) {
  return (
    <div className="w-full mb-24">
      <div className="flex items-center mb-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-start tracking-wide uppercase relative text-[#1e3c63]">
          {title}
          {/* Decorative dots surrounding text */}
          <span className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-[#1e3c63]"></span>
          <span className="absolute -bottom-4 left-1/3 w-2 h-2 rounded-full bg-[#1e3c63]"></span>
          <span className="absolute -top-3 right-1/4 w-2 h-2 rounded-full bg-[#1e3c63]"></span>
          <span className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-[#1e3c63]"></span>
          <span className="absolute top-1/2 -left-6 w-2 h-2 rounded-full bg-[#1e3c63]"></span>
          <span className="absolute -bottom-3 right-1/3 w-2 h-2 rounded-full bg-[#1e3c63]"></span>
        </h2>

        {/* Line with dots */}
        <div className="ml-6 flex-1 flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#1e3c63] mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-[#1e3c63] mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-[#1e3c63] mx-1"></div>
          <div className="flex-1 h-0.5 bg-gray-200"></div>
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
