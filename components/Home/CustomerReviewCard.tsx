import Image from 'next/image';

// Customer review card component
interface Review {
  id: number;
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export default function CustomerReviewCard() {
  // Array of reviews with unique customer data focused on coffee experience
  const reviews: Review[] = [
    {
      id: 1,
      content:
        'Kopi di Cheers Labs benar-benar luar biasa! Biji kopinya berkualitas tinggi dan barista yang sangat ramah. Tempatnya juga nyaman untuk ngobrol atau kerja.',
      name: 'Putri Kartika',
      role: 'Mahasiswa',
      avatarUrl: '/profile.png',
    },
    {
      id: 2,
      content:
        'Harga yang sangat reasonable untuk kualitas kopi premium. Latte art-nya juga cantik banget!',
      name: 'Budi Santoso',
      role: 'Coffee Enthusiast',
      avatarUrl: '/profile.png',
    },
    {
      id: 3,
      content:
        'Suasana yang cozy dan tenang, Wi-Fi kencang, perfect untuk work from cafe. Menu makanannya juga enak-enak.',
      name: 'Diana Chen',
      role: 'Freelancer',
      avatarUrl: '/profile.png',
    },
    {
      id: 4,
      content:
        'Coffee shop favorit buat nongkrong sama teman. Espresso-nya bold dan rich, persis seperti yang saya suka.',
      name: 'Ari Santoso',
      role: 'Mahasiswa',
      avatarUrl: '/profile.png',
    },
    {
      id: 5,
      content:
        'Pelayanan yang excellent dan kopinya selalu konsisten. Cold brew-nya jadi andalan saya setiap hari.',
      name: 'Jessica Kim',
      role: 'Marketing Executive',
      avatarUrl: '/profile.png',
    },
    {
      id: 6,
      content:
        'Tempat yang instagramable dengan kopi yang tidak kalah amazing. Cappuccino-nya creamy dan aromatic.',
      name: 'Rahmat Hidayat',
      role: 'Content Creator',
      avatarUrl: '/profile.png',
    },
    {
      id: 7,
      content:
        'Sebagai pecinta kopi, saya sangat impressed dengan single origin coffee mereka. Flavor notes-nya complex dan balanced.',
      name: 'Sarah Johnson',
      role: 'Coffee Connoisseur',
      avatarUrl: '/profile.png',
    },
    {
      id: 8,
      content:
        'Hidden gem di Yogya! Kopinya top notch, pastry-nya fresh, dan atmosfernya bikin betah berlama-lama.',
      name: 'David Lee',
      role: 'Food Blogger',
      avatarUrl: '/profile.png',
    },
    {
      id: 9,
      content:
        'Perfect spot untuk first date atau meeting client. Ambience-nya warm dan kopi signature-nya memorable banget.',
      name: 'Natasha Singh',
      role: 'Business Owner',
      avatarUrl: '/profile.png',
    },
  ];

  // Enhanced review card component with better mobile design
  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="mb-4 md:mb-[30px] overflow-hidden rounded-2xl md:rounded-[20px] bg-gradient-to-br from-[#1e3c63] to-[#2a4a73] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:hover:scale-100">
      <div className="p-4 md:p-5 space-y-4 md:space-y-[20px]">
        {/* Stars rating */}
        <div className="flex items-center justify-between">
          <Image
            src="/images/icons/stars.svg"
            alt="5-star rating"
            width={100}
            height={20}
            className="md:w-[120px] md:h-[24px]"
          />
        </div>

        {/* Review content with better typography */}
        <div className="relative">
          <svg
            className="absolute -top-2 -left-1 w-6 h-6 text-white/20"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c0.209 0 0.41 0.018 0.609 0.051-0.038-0.33-0.061-0.672-0.061-1.051 0-2.209 1.791-4 4-4s4 1.791 4 4z" />
            <path d="M26 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c0.209 0 0.41 0.018 0.609 0.051-0.038-0.33-0.061-0.672-0.061-1.051 0-2.209 1.791-4 4-4s4 1.791 4 4z" />
          </svg>
          <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 text-white/90 pl-4">
            {review.content}
          </p>
        </div>

        {/* Customer info with enhanced mobile layout */}
        <div className="flex items-center space-x-3 pt-2 border-t border-white/10">
          <div className="relative">
            <div className="h-12 w-12 md:h-[50px] md:w-[50px] overflow-hidden rounded-full ring-2 ring-white/20">
              <Image
                src={review.avatarUrl}
                alt={review.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm md:text-base font-semibold text-white truncate">
              {review.name}
            </h4>
            <p className="text-xs md:text-sm text-white/60 truncate">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mx-auto mt-12 md:mt-[100px] max-w-[1280px] px-4 sm:px-6 md:px-[75px] py-6 md:py-8">
      {/* Enhanced header section */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e3c63]/10 rounded-full mb-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#1e3c63"
            />
          </svg>
          <span className="text-sm font-medium text-[#1e3c63]">
            Customer Reviews
          </span>
        </div>

        <h2 className="text-2xl md:text-[28px] lg:text-3xl font-bold text-gray-900 mb-3">
          Apa Kata <span className="text-[#1e3c63]">Pelanggan Kami</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pelanggan yang telah merasakan pengalaman
          kopi terbaik di Cheers Labs
        </p>
      </div>

      {/* Mobile view: Enhanced single column with horizontal scroll for preview */}
      <div className="md:hidden">
        <div className="space-y-4 mb-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Horizontal scroll preview for more reviews */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4 w-max">
            {reviews.slice(3, 6).map((review) => (
              <div key={review.id} className="w-80 flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-6">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3c63] hover:bg-[#2a4a73] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Lihat Semua Review</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tablet view: Two columns grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 md:gap-[20px]">
        {reviews.slice(0, 6).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Desktop view: Three columns masonry */}
      <div className="hidden lg:block">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[30px]">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
