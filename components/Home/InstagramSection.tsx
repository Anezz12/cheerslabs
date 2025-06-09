import Image from 'next/image';
import Link from 'next/link';

export default function InstagramSection() {
  // Expanded set of dummy Instagram data - 12 images for 3 rows of 4
  const instagramPosts = [
    // Row 1
    {
      id: 1,
      imageUrl: '/instagram/coffee-1.jpg',
      link: 'https://instagram.com/p/sample1',
      alt: 'Latte art with leaf design',
    },
    {
      id: 2,
      imageUrl: '/instagram/coffee-2.jpg',
      link: 'https://instagram.com/p/sample2',
      alt: 'Coffee beans being roasted',
    },
    {
      id: 3,
      imageUrl: '/instagram/coffee-3.jpg',
      link: 'https://instagram.com/p/sample3',
      alt: 'Coffee shop interior',
    },
    {
      id: 4,
      imageUrl: '/instagram/coffee-4.jpg',
      link: 'https://instagram.com/p/sample4',
      alt: 'Barista preparing coffee',
    },
    // Row 2
    {
      id: 5,
      imageUrl: '/instagram/coffee-5.jpg',
      link: 'https://instagram.com/p/sample5',
      alt: 'Coffee and pastry on table',
    },
    {
      id: 6,
      imageUrl: '/instagram/coffee-6.jpg',
      link: 'https://instagram.com/p/sample6',
      alt: 'Espresso being pulled',
    },
    {
      id: 7,
      imageUrl: '/instagram/coffee-7.jpg',
      link: 'https://instagram.com/p/sample7',
      alt: 'Customer enjoying coffee',
    },
    {
      id: 8,
      imageUrl: '/instagram/coffee-8.jpg',
      link: 'https://instagram.com/p/sample8',
      alt: 'Coffee shop outdoor seating',
    },
    // Row 3
    {
      id: 9,
      imageUrl: '/instagram/coffee-9.jpg',
      link: 'https://instagram.com/p/sample9',
      alt: 'Coffee brewing methods display',
    },
    {
      id: 10,
      imageUrl: '/instagram/coffee-10.jpg',
      link: 'https://instagram.com/p/sample10',
      alt: 'Specialty coffee beans',
    },
    {
      id: 11,
      imageUrl: '/instagram/coffee-11.jpg',
      link: 'https://instagram.com/p/sample11',
      alt: 'Coffee tasting event',
    },
    {
      id: 12,
      imageUrl: '/instagram/coffee-12.jpg',
      link: 'https://instagram.com/p/sample12',
      alt: 'Coffee shop staff',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Follow Us on Instagram
          </h2>

          <div className="flex items-center justify-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#1e3c63] mr-2"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <Link
              href="https://instagram.com/cheerslabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#1e3c63] font-medium hover:underline"
            >
              @cheerslabs
            </Link>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us for daily coffee inspiration, behind-the-scenes moments,
            and special promotions only available to our Instagram followers.
          </p>
        </div>

        {/* Instagram Grid - now with 3 rows of 4 images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group aspect-square"
            >
              {/* Using placeholder images until you add your own */}
              <div className="w-full h-full bg-gray-200 relative">
                <Image
                  src={post.imageUrl}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized={true} // Remove this when you add real images
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1e3c63] bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* "View More" Button */}
        <div className="text-center mt-10">
          <Link
            href="https://www.instagram.com/cheers_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white border-2 border-[#1e3c63] text-[#1e3c63] font-medium px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300"
          >
            View More on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
